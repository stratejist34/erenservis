import { NextRequest, NextResponse } from 'next/server';

type RateEntry = { count: number; resetAt: number };
const rateLimitMap = new Map<string, RateEntry>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60_000;

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const now = Date.now();
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

  const body = await req.json().catch(() => ({}));
  const { name, phone, message, page, company } = body as {
    name?: string;
    phone?: string;
    message?: string;
    page?: string;
    company?: string;
  };

  // Honeypot — botlar gizli alanı doldurur, insan dokunamaz
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
    return NextResponse.json({ error: 'Ad geçersiz' }, { status: 400 });
  }

  const phoneRegex = /^[0-9\s\-+()]{10,20}$/;
  if (!phone || !phoneRegex.test(phone)) {
    return NextResponse.json({ error: 'Telefon geçersiz' }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ ok: true, warning: 'webhook not configured' });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
        message: message ?? '',
        page: page ?? '',
        date: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
      }),
    });
    if (!res.ok) {
      console.error('[contact] webhook returned non-ok', res.status);
      return NextResponse.json({ error: 'Kayıt oluşturulamadı' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] webhook threw', err);
    return NextResponse.json({ error: 'Kayıt oluşturulamadı' }, { status: 502 });
  }
}
