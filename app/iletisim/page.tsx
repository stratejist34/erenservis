import type { Metadata } from 'next';
import ContactForm from '@/components/interactive/ContactForm';
import MapWidget from '@/components/interactive/MapWidget';
import { MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'İletişim | Eren Servis — Bostancı Otomatik Şanzıman',
  description:
    'Eren Servis ile iletişime geçin. Bostancı\'da otomatik şanzıman tamiri için randevu alın.',
  alternates: {
    canonical: 'https://erenservis.net/iletisim/',
  },
  openGraph: {
    title: 'İletişim | Eren Servis — Bostancı Otomatik Şanzıman',
    description:
      'Bostancı\'da DSG, ZF ve CVT şanzıman tamiri için bizi arayın. Ücretsiz ön tanı, hızlı randevu.',
    url: 'https://erenservis.net/iletisim/',
    siteName: 'Eren Servis',
    locale: 'tr_TR',
    type: 'website',
  },
};

const ADDRESS = 'Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4, Bostancı, 34744 Ataşehir / İstanbul';

export default function IletisimPage() {
  return (
    <main>
        {/* Page Hero */}
        <section className="hero-deep pt-28 pb-14 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
                Bize Ulaşın
              </span>
            </div>
            <h1 className="text-hero-text mb-4">İletişim</h1>
            <p className="text-hero-muted text-lg leading-relaxed max-w-xl mx-auto">
              Şanzıman sorunlarınız için bizi arayın veya mesaj gönderin. Hızlı yanıt garantisi.
            </p>
          </div>
        </section>

        {/* Form + Direkt İletişim */}
        <section className="py-16 bg-content-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ContactForm />
          </div>
        </section>

        {/* Adres + Harita */}
        <section className="py-16 bg-content-secondary">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" strokeWidth={2} />
              <h2 className="text-xl font-semibold text-content-text">Adresimiz</h2>
            </div>
            <p className="text-content-muted mb-6">{ADDRESS}</p>
            <MapWidget />
          </div>
        </section>
    </main>
  );
}
