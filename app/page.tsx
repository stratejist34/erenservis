import type { Metadata } from 'next';
import { Suspense } from 'react';
import HomePageSections from '@/components/HomePageSections';
import { SymptomProvider } from '@/contexts/SymptomContext';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Bostancı Otomatik Şanzıman Tamiri | Eren Servis',
  description:
    'Bostancı\'nın DSG ve kavrama uzmanı. DQ200, DQ250, DQ381 mekatronik tamiri, CVT resetleme, ZF ve konvansiyonel şanzıman revizyonu. Ücretsiz ön tanı.',
  alternates: {
    canonical: 'https://www.erenservis.net/',
  },
  openGraph: {
    title: 'Bostancı Otomatik Şanzıman Tamiri | Eren Servis',
    description:
      'Bostancı\'nın DSG ve kavrama uzmanı. DQ200, DQ250, DQ381 mekatronik, CVT resetleme, ZF şanzıman tamiri. 15+ yıl, garantili servis.',
    url: 'https://www.erenservis.net/',
    siteName: 'Eren Servis',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://www.erenservis.net/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eren Otomatik Şanzıman Servisi — Bostancı',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bostancı Otomatik Şanzıman Tamiri | Eren Servis',
    description:
      'Bostancı\'nın DSG ve kavrama uzmanı. DQ200, DQ250, DQ381 mekatronik tamiri, ücretsiz ön tanı.',
    images: ['https://www.erenservis.net/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <main className="relative">
      {/* Hero LCP preload — picture'ın media query'sine eşleşen varyantı erken çeker.
          Native <img> + <picture> kullandığımız için Next/Image'ın otomatik preload'u devrede değil. */}
      <link
        rel="preload"
        as="image"
        href="/images/part2/Screenshot_57-mobile.webp"
        media="(max-width: 768px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/part2/Screenshot_57.webp"
        media="(min-width: 769px)"
        fetchPriority="high"
      />
      <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
        <SymptomProvider>
          <HomePageSections />
        </SymptomProvider>
      </Suspense>
    </main>
  );
}
