import type { Metadata } from 'next';
import HomePageSections from '@/components/HomePageSections';
import { SymptomProvider } from '@/contexts/SymptomContext';

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
      <SymptomProvider>
        <HomePageSections />
      </SymptomProvider>
    </main>
  );
}
