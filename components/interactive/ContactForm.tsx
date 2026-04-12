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
      <div className="bg-white rounded-2xl border border-content-border p-8 shadow-sm">
        <h3 className="text-xl font-bold text-content-text mb-2">Mesaj Gönderin</h3>
        <p className="text-sm text-content-muted mb-6">
          Formu doldurun, sizi WhatsApp üzerinden arayalım.
        </p>

        {sent ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <CheckCircle2 className="w-12 h-12 text-success" strokeWidth={1.5} />
            <p className="font-semibold text-content-text">WhatsApp açıldı!</p>
            <p className="text-sm text-content-muted">Mesajınızı göndermek için tıklayın.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-content-text mb-1.5">
                Adınız Soyadınız <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Örn. Ahmet Yılmaz"
                className="w-full px-4 py-3 rounded-xl border border-content-border text-content-text text-sm placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-content-text mb-1.5">
                Telefon Numaranız <span className="text-accent">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="05XX XXX XX XX"
                className="w-full px-4 py-3 rounded-xl border border-content-border text-content-text text-sm placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-content-text mb-1.5">
                Şikayetiniz / Sorunuz
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Araç modelinizi ve şanzıman sorununuzu kısaca anlatın..."
                className="w-full px-4 py-3 rounded-xl border border-content-border text-content-text text-sm placeholder:text-content-muted focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-premium flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-semibold text-sm"
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
          className="flex items-center gap-4 p-6 rounded-2xl bg-brand text-white hover:bg-brand-hover transition-all shadow-sm hover:shadow-md"
          aria-label={`Bizi Arayın: ${PHONE}`}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20">
            <Phone className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-sm font-medium text-accent-soft mb-0.5">Hemen Arayın</div>
            <div className="text-xl font-bold">{PHONE}</div>
          </div>
        </a>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 rounded-2xl bg-whatsapp text-white hover:bg-whatsapp-hi transition-all shadow-sm hover:shadow-md"
          aria-label="WhatsApp'tan Yazın"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20">
            <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-sm font-medium text-white/80 mb-0.5">WhatsApp Yazın</div>
            <div className="text-lg font-bold">Hızlı Yanıt Garantisi</div>
          </div>
        </a>

        <div className="p-6 rounded-2xl bg-content-secondary border border-content-border">
          <h4 className="text-sm font-semibold text-content-text uppercase tracking-wider mb-4">
            Çalışma Saatleri
          </h4>
          <div className="flex flex-col gap-2">
            {[
              { day: 'Pazartesi - Cuma', hours: '08:00 - 18:00' },
              { day: 'Cumartesi', hours: '08:00 - 16:00' },
              { day: 'Pazar', hours: 'Kapalı' },
            ].map(({ day, hours }) => (
              <div key={day} className="flex justify-between text-sm">
                <span className="text-content-muted">{day}</span>
                <span className={`font-medium ${hours === 'Kapalı' ? 'text-content-muted' : 'text-content-text'}`}>
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
