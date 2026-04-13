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
        {/* Page Hero — Cold Brass Hybrid */}
        <section className="relative bg-graphite-base pt-28 pb-16 text-center overflow-hidden">
          {/* Hairline grid overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,252,245,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,252,245,0.04) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brass/30 bg-brass/10 mb-8">
              <span className="text-xs font-saira font-semibold text-brass uppercase tracking-wider">
                Uzmanlık Alanlarımız
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[64px] md:text-[88px] leading-[0.95] tracking-tight text-text-primary mb-8">
              <span className="block font-saira font-semibold">Şanzıman</span>
              <span className="block font-fraunces italic font-normal">hizmetlerimiz.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Tüm otomatik şanzıman türlerinde komple tanı, bakım ve revizyon. Orijinal parça garantisi.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="font-saira font-semibold text-sm tracking-wide uppercase px-8 py-4 bg-brass-bright text-graphite-base hover:bg-brass transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Fiyat Teklifi Al
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="font-saira font-semibold text-sm tracking-wide uppercase px-8 py-4 border border-border-strong text-text-primary hover:border-brass hover:text-brass transition-colors duration-200 inline-flex items-center gap-2"
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
