'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

const PHONE = '0532 715 37 51';
const PHONE_HREF = 'tel:+905327153751';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Sheets'e kaydet (hata olursa sessizce geç)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          page: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });
    } catch {
      // API hatası kullanıcıyı etkilemez
    }

    // WhatsApp'ı aç
    const text = encodeURIComponent(
      `Merhaba, ${form.name} adına randevu almak istiyorum.\nTelefon: ${form.phone}\nMesaj: ${form.message}`
    );
    window.open(`https://wa.me/905327153751?text=${text}`, '_blank');

    setSent(true);
    setTimeout(() => setSent(false), 5000);
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

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brass-bright font-saira text-sm font-semibold text-graphite-base hover:bg-brass transition-all"
            >
              <Send className="w-4 h-4" strokeWidth={2.5} />
              WhatsApp ile Gönder
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
              { day: 'Pazartesi - Cuma', hours: '08:00 - 18:00' },
              { day: 'Cumartesi', hours: '08:00 - 16:00' },
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
