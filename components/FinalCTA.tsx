import { Phone, MessageCircle } from 'lucide-react';

const PHONE_HREF = 'tel:+905327153751';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

export default function FinalCTA() {
  return (
    <section
      className="py-20 bg-surface-2"
      aria-label="İletişim Çağrısı"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-fg mb-4">
          Şanzımanınızla İlgili Bir Sorun mu Var?
        </h2>
        <p className="text-lg text-fg-soft leading-relaxed mb-10">
          Hemen arayın, ücretsiz ön bilgi alalım. Teşhis için randevu gerekmez.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="btn-premium flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-bold text-base animate-pulse-ring"
            aria-label="Bizi Arayın"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            Hemen Arayın
          </a>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-success hover:opacity-90 text-white font-semibold text-base transition-opacity"
            aria-label="WhatsApp'tan Yazın"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
            WhatsApp&apos;tan Yazın
          </a>
        </div>
      </div>
    </section>
  );
}
