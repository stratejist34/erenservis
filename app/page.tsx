import type { Metadata } from 'next';
import HomePageSections from '@/components/HomePageSections';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Bostancı Otomatik Şanzıman Tamiri | Eren Servis',
  description:
    'Bostancı\'nın DSG ve kavrama uzmanı. DQ200, DQ250, DQ381 mekatronik tamiri, CVT resetleme, ZF ve konvansiyonel şanzıman revizyonu. Ücretsiz ön tanı.',
  alternates: {
    canonical: 'https://erenservis.net/',
  },
  openGraph: {
    title: 'Bostancı Otomatik Şanzıman Tamiri | Eren Servis',
    description:
      'Bostancı\'nın DSG ve kavrama uzmanı. DQ200, DQ250, DQ381 mekatronik, CVT resetleme, ZF şanzıman tamiri. 15+ yıl, garantili servis.',
    url: 'https://erenservis.net/',
    siteName: 'Eren Servis',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="relative">
      {/* Ambient sky glow — fixed behind all content */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: [
            'radial-gradient(ellipse 90% 60% at 80% 5%, rgba(56,189,248,0.22) 0%, transparent 50%)',
            'radial-gradient(ellipse 70% 55% at 10% 90%, rgba(2,132,199,0.18) 0%, transparent 55%)',
            'radial-gradient(ellipse 60% 40% at 45% 50%, rgba(56,189,248,0.07) 0%, transparent 60%)',
          ].join(', '),
        }}
      />
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(160,200,230,0.022) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(160,200,230,0.022) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative z-[1]">
        <HomePageSections />
      </div>
    </main>
  );
}
