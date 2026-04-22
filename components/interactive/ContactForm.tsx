'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_HOURS, CONTACT } from '@/lib/constants';

const PHONE = CONTACT.phoneDisplay;
const PHONE_HREF = CONTACT.phoneHref;
const WHATSAPP_HREF = CONTACT.whatsappHref;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [honeypot, setHoneypot] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          website: honeypot,
          page: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(
          data.error ??
            `Kayıt oluşturulamadı. Lütfen WhatsApp butonunu kullanın: ${CONTACT.phoneDisplay}`,
        );
        return;
      }

      // Başarılı — WhatsApp'ı aynı user-gesture içinde aç (popup blocker uyumlu)
      const text = encodeURIComponent(
        `Merhaba, ${form.name} adına randevu almak istiyorum.\nTelefon: ${form.phone}\nMesaj: ${form.message}`,
      );
      window.open(`${WHATSAPP_HREF}?text=${text}`, '_blank', 'noopener,noreferrer');
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError(
        `Bağlantı hatası. WhatsApp'tan yazın veya bizi arayın: ${CONTACT.phoneDisplay}`,
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="rounded-2xl border border-border-subtle bg-graphite-surface p-8">
        <h3 className="font-saira text-xl font-semibold text-text-primary mb-2">Mesaj Gönderin</h3>
        <p className="font-saira text-sm text-text-secondary mb-6">
          Formu doldurun, sizi WhatsApp üzerinden arayalım.
        </p>

        {sent ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <CheckCircle2 className="w-12 h-12 text-success" strokeWidth={1.5} />
            <p className="font-saira font-semibold text-text-primary">WhatsApp açıldı!</p>
            <p className="font-saira text-sm text-text-secondary">Mesajınızı göndermek için tıklayın.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Honeypot — botlar için görünmez tuzak alan */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
            />
            <div>
              <label htmlFor="name" className="block font-saira text-sm font-medium text-text-primary mb-1.5">
                Adınız Soyadınız <span className="text-brass">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Örn. Ahmet Yılmaz"
                className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-graphite-elevated font-saira text-text-primary text-sm placeholder:text-iron-light focus:outline-none focus:ring-2 focus:ring-brass/25 focus:border-brass transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-saira text-sm font-medium text-text-primary mb-1.5">
                Telefon Numaranız <span className="text-brass">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="05XX XXX XX XX"
                className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-graphite-elevated font-saira text-text-primary text-sm placeholder:text-iron-light focus:outline-none focus:ring-2 focus:ring-brass/25 focus:border-brass transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-saira text-sm font-medium text-text-primary mb-1.5">
                Şikayetiniz / Sorunuz
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Araç modelinizi ve şanzıman sorununuzu kısaca anlatın..."
                className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-graphite-elevated font-saira text-text-primary text-sm placeholder:text-iron-light focus:outline-none focus:ring-2 focus:ring-brass/25 focus:border-brass transition-all resize-none"
              />
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 font-saira text-sm text-red-200"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brass-bright font-saira text-sm font-semibold text-graphite-base hover:bg-brass transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" strokeWidth={2.5} />
              {submitting ? 'Gönderiliyor...' : 'WhatsApp ile Gönder'}
            </button>
          </form>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={PHONE_HREF}
          className="flex items-center gap-4 p-6 rounded-2xl bg-brass-bright hover:bg-brass transition-all"
          aria-label={`Bizi Arayın: ${PHONE}`}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-graphite-base/20">
            <Phone className="w-6 h-6 text-graphite-base" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite-base/70 mb-0.5">Hemen Arayın</div>
            <div className="font-saira text-xl font-bold text-graphite-base">{PHONE}</div>
          </div>
        </a>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 rounded-2xl border border-border-subtle bg-graphite-surface hover:border-brass hover:bg-graphite-elevated transition-all"
          aria-label="WhatsApp'tan Yazın"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-graphite-elevated border border-border-hairline">
            <MessageCircle className="w-6 h-6 text-brass" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.18em] text-iron-light mb-0.5">WhatsApp Yazın</div>
            <div className="font-saira text-lg font-semibold text-text-primary">Hızlı Yanıt Garantisi</div>
          </div>
        </a>

        <div className="p-6 rounded-2xl border border-border-hairline bg-graphite-surface">
          <h4 className="font-jetbrains text-[11px] font-semibold text-iron-light uppercase tracking-[0.18em] mb-4">
            Çalışma Saatleri
          </h4>
          <div className="flex flex-col gap-2">
            {[
              { day: 'Pazartesi - Cumartesi', hours: `${BUSINESS_HOURS.opens} - ${BUSINESS_HOURS.closes}` },
              { day: 'Pazar', hours: 'Kapalı' },
            ].map(({ day, hours }) => (
              <div key={day} className="flex justify-between font-saira text-sm">
                <span className="text-text-secondary">{day}</span>
                <span className={`font-medium ${hours === 'Kapalı' ? 'text-iron-light' : 'text-text-primary'}`}>
                  {hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
