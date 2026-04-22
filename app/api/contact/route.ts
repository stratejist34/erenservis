import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

type RateEntry = { count: number; resetAt: number };
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_CLEANUP_THRESHOLD = 64;

// Serverless instance'ları arası map'i paylaş (warm start'ta yeniden kullan).
const globalStore = globalThis as unknown as {
  __contactRateLimitMap?: Map<string, RateEntry>;
};

const rateLimitMap = globalStore.__contactRateLimitMap ?? new Map<string, RateEntry>();
globalStore.__contactRateLimitMap = rateLimitMap;

const MAX_NAME = 100;
const MAX_MESSAGE = 2000;
const MAX_PAGE = 200;
const TR_PHONE_RE = /^(?:\+?90)?0?5\d{9}$/;

const ALLOWED_ORIGINS = new Set<string>([
  'https://www.erenservis.net',
  'https://erenservis.net',
  ...(process.env.NODE_ENV === 'development'
    ? ['http://localhost:3000', 'http://127.0.0.1:3000']
    : []),
]);

function isOriginAllowed(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  if (origin) return ALLOWED_ORIGINS.has(origin);

  // Origin header yoksa Referer ile karşılaştır (bazı tarayıcılar same-origin POST'larda origin göndermez)
  const referer = req.headers.get('referer');
  if (!referer) return false;
  try {
    const url = new URL(referer);
    return ALLOWED_ORIGINS.has(`${url.protocol}//${url.host}`);
  } catch {
    return false;
  }
}

function normalizePhone(raw: string): string {
  return raw.replace(/[\s\-()]/g, '');
}

function validatePayload(input: Record<string, unknown>):
  | { ok: true; data: { name: string; phone: string; message: string; page: string } }
  | { ok: false; error: string } {
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  if (name.length < 2 || name.length > MAX_NAME) {
    return { ok: false, error: 'Ad geçersiz' };
  }

  const phoneRaw = typeof input.phone === 'string' ? input.phone : '';
  const phone = normalizePhone(phoneRaw);
  if (!TR_PHONE_RE.test(phone)) {
    return { ok: false, error: 'Telefon geçersiz' };
  }

  const message = typeof input.message === 'string' ? input.message.slice(0, MAX_MESSAGE) : '';
  const page = typeof input.page === 'string' ? input.page.slice(0, MAX_PAGE) : '';

  return { ok: true, data: { name, phone, message, page } };
}

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0]?.trim() || 'unknown';
  return req.headers.get('x-real-ip')?.trim() || 'unknown';
}

function genericError(status: number): NextResponse {
  return NextResponse.json({ error: 'Kayıt oluşturulamadı. Lütfen tekrar deneyin.' }, { status });
}

export async function POST(req: NextRequest) {
  if (!isOriginAllowed(req)) {
    return NextResponse.json({ error: 'Geçersiz kaynak' }, { status: 403 });
  }

  const ip = getClientIp(req);
  const now = Date.now();

  // Opportunistic cleanup: map büyüdüyse expired entry'leri sil (setInterval yerine)
  if (rateLimitMap.size > RATE_LIMIT_CLEANUP_THRESHOLD) {
    for (const [ipKey, e] of rateLimitMap) {
      if (e.resetAt <= now) rateLimitMap.delete(ipKey);
    }
  }

  const entry = rateLimitMap.get(ip);

  if (entry && entry.resetAt > now) {
    if (entry.count >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: 'Çok fazla istek, bir dakika sonra tekrar deneyin' },
        { status: 429 },
      );
    }
    entry.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  const parsed = await req.json().catch(() => null);
  if (!parsed || typeof parsed !== 'object') {
    return NextResponse.json({ error: 'Geçersiz istek' }, { status: 400 });
  }

  const body = parsed as Record<string, unknown>;

  // Honeypot — bot bu alanı doldurur. Sessizce 200 dön, botu bilgilendirme.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const validation = validatePayload(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL ?? process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('[contact] CONTACT_WEBHOOK_URL missing — lead would be lost');
    return genericError(503);
  }

  const payload = {
    ...validation.data,
    date: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
  };
  const bodyString = JSON.stringify(payload);

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const secret = process.env.CONTACT_WEBHOOK_SECRET;
  if (secret) {
    const signature = crypto.createHmac('sha256', secret).update(bodyString).digest('hex');
    headers['X-Webhook-Signature'] = signature;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: bodyString,
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      console.error('[contact] webhook non-ok', res.status);
      return genericError(502);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] webhook threw', err);
    return genericError(502);
  }
}
