import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, phone, message, page } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: 'Ad ve telefon zorunlu' }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          message: message || '',
          page: page || '',
          date: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
        }),
      });
    } catch {
      // Webhook hatası formu engellemez — WhatsApp yine açılır
    }
  }

  return NextResponse.json({ ok: true });
}
