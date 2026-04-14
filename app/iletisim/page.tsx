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
    canonical: 'https://erenservis.vercel.app/iletisim/',
  },
  openGraph: {
    title: 'İletişim | Eren Servis — Bostancı Otomatik Şanzıman',
    description:
      'Bostancı\'da DSG, ZF ve CVT şanzıman tamiri için bizi arayın. Ücretsiz ön tanı, hızlı randevu.',
    url: 'https://erenservis.vercel.app/iletisim/',
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
      <section className="bg-graphite-base pt-28 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              Bize Ulaşın
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-4">
            İletişim
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
            Şanzıman sorunlarınız için bizi arayın veya mesaj gönderin. Hızlı yanıt garantisi.
          </p>
        </div>
      </section>

      {/* Form + Direkt İletişim */}
      <section className="py-16 bg-graphite-base">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>

      {/* Adres + Harita */}
      <section className="py-16 bg-graphite-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-brass" strokeWidth={2} />
            <h2 className="font-saira text-xl font-semibold text-text-primary">Adresimiz</h2>
          </div>
          <p className="font-saira text-text-secondary mb-6">{ADDRESS}</p>
          <MapWidget />
        </div>
      </section>
    </main>
  );
}
