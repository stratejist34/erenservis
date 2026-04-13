import type { Metadata } from 'next';
import HizmetlerListesi from '@/components/HizmetlerListesi';

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
        {/* Hero Section — Cold Brass Hybrid */}
        <section className="relative bg-graphite-base pt-32 pb-20 overflow-hidden">
          {/* Hairline grid background — opsiyonel, çok sönük */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
               style={{
                 backgroundImage: `linear-gradient(rgba(255,252,245,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,252,245,0.5) 1px, transparent 1px)`,
                 backgroundSize: '64px 64px'
               }} />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            {/* Eyebrow — JetBrains Mono caps */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-brass" />
              <span className="font-jetbrains text-[11px] tracking-[0.18em] uppercase text-brass">
                UZMANLIK_ALANLARIMIZ
              </span>
              <span className="h-px w-8 bg-brass" />
            </div>

            {/* Display title — Saira + Fraunces italic moment */}
            <h1 className="font-saira font-semibold text-[64px] md:text-[88px] leading-[0.95] tracking-tight text-text-primary mb-2">
              Şanzıman
            </h1>
            <p className="font-fraunces italic font-normal text-[64px] md:text-[88px] leading-[0.95] tracking-tight text-text-primary mb-8">
              hizmetlerimiz.
            </p>

            {/* Subtitle — sıcak secondary text */}
            <p className="font-saira text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Tüm otomatik şanzıman türlerinde komple tanı, bakım ve revizyon.
              Orijinal parça garantisi, %0 tolerans.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary — brass bright */}
              <a href={PHONE_HREF}
                 className="font-saira font-semibold text-sm tracking-wide uppercase px-8 py-4 bg-brass-bright text-graphite-base hover:bg-brass transition-colors duration-200 inline-flex items-center gap-2">
                FİYAT TEKLİFİ AL →
              </a>

              {/* Secondary — outline */}
              <a href={WHATSAPP_HREF}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="font-saira font-semibold text-sm tracking-wide uppercase px-8 py-4 border border-border-strong text-text-primary hover:border-brass hover:text-brass transition-colors duration-200 inline-flex items-center gap-2">
                <span className="text-base">●</span> WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Trust Strip — 4 sütun, Cold Iron divider'lı */}
        <section className="bg-graphite-base border-t border-iron-deep">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">

              <div className="text-center md:border-r md:border-iron-deep px-4">
                <div className="font-jetbrains text-[10px] tracking-[0.2em] text-iron-light uppercase mb-2">EST.</div>
                <div className="font-saira font-bold text-3xl text-text-primary">2008</div>
              </div>

              <div className="text-center md:border-r md:border-iron-deep px-4">
                <div className="font-jetbrains text-[10px] tracking-[0.2em] text-iron-light uppercase mb-2">GARANTİ</div>
                <div className="font-saira font-bold text-3xl text-text-primary">730 <span className="text-base text-text-secondary">GÜN</span></div>
              </div>

              <div className="text-center md:border-r md:border-iron-deep px-4">
                <div className="font-jetbrains text-[10px] tracking-[0.2em] text-iron-light uppercase mb-2">REVİZYON</div>
                <div className="font-saira font-bold text-3xl text-text-primary">48 <span className="text-base text-text-secondary">SAAT</span></div>
              </div>

              <div className="text-center px-4">
                <div className="font-jetbrains text-[10px] tracking-[0.2em] text-iron-light uppercase mb-2">REVİZE</div>
                <div className="font-saira font-bold text-3xl text-text-primary">2400+</div>
              </div>

            </div>
          </div>
        </section>

        <HizmetlerListesi hideHeader />
    </main>
  );
}
