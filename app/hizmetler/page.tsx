import type { Metadata } from 'next';
import HizmetlerListesi from '@/components/HizmetlerListesi';
import { Phone, MessageCircle } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Eren Servis — Bostancı Otomatik Şanzıman',
  description:
    'DSG, ZF, CVT ve konvansiyonel otomatik şanzıman tamiri, bakımı ve revizyonu. Bostancı\'nın şanzıman uzmanı Eren Servis.',
  alternates: {
    canonical: 'https://erenservis.net/hizmetler/',
  },
  openGraph: {
    title: 'Hizmetlerimiz | Eren Servis — Bostancı Otomatik Şanzıman',
    description:
      'DSG, ZF, CVT ve konvansiyonel otomatik şanzıman tamiri, bakımı ve revizyonu. Bostancı\'nın şanzıman uzmanı Eren Servis.',
    url: 'https://erenservis.net/hizmetler/',
    siteName: 'Eren Servis',
    locale: 'tr_TR',
    type: 'website',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

export default function HizmetlerPage() {
  return (
    <main>
        {/* Page Hero */}
        <section className="hero-deep pt-28 pb-14 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
                Uzmanlık Alanlarımız
              </span>
            </div>
            <h1 className="text-hero-text mb-4">Şanzıman Hizmetlerimiz</h1>
            <p className="text-hero-muted text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Tüm otomatik şanzıman türlerinde komple tanı, bakım ve revizyon. Orijinal parça garantisi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="btn-premium flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Fiyat Teklifi Al
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <HizmetlerListesi hideHeader />
    </main>
  );
}
