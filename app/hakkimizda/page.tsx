import type { Metadata } from 'next';
import WhyUs from '@/components/WhyUs';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hakkımızda | Eren Servis — Bostancı Otomatik Şanzıman',
  description:
    'Bostancı\'da 15 yılı aşkın deneyimle otomatik şanzıman servisi. Eren Servis hakkında bilgi edinin.',
  alternates: {
    canonical: 'https://erenservis.net/hakkimizda/',
  },
  openGraph: {
    title: 'Hakkımızda | Eren Servis — Bostancı Otomatik Şanzıman',
    description:
      'Bostancı\'da 15 yılı aşkın deneyimle DSG, ZF, CVT otomatik şanzıman tamiri. Garantili servis, uzman kadro.',
    url: 'https://erenservis.net/hakkimizda/',
    siteName: 'Eren Servis',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function HakkimizdaPage() {
  return (
    <main>
        {/* Page Hero */}
        <section className="hero-deep pt-28 pb-14 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
                Biz Kimiz
              </span>
            </div>
            <h1 className="text-hero-text mb-4">Hakkımızda</h1>
            <p className="text-hero-muted text-lg leading-relaxed max-w-xl mx-auto">
              Bostancı&apos;da 15 yılı aşkın deneyimle otomatik şanzıman alanında uzmanlaşmış bir servis.
              Her işi ilk seferinde doğru yapıyoruz.
            </p>
          </div>
        </section>

        {/* Hakkımızda İçerik — WP analizi sonrası genişletilecek */}
        <section className="py-16 bg-content-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-content-muted leading-relaxed">
                Eren Servis, 2009 yılından bu yana Bostancı&apos;da otomatik şanzıman tamiri ve revizyonu
                konusunda hizmet vermektedir. DSG, CVT ve konvansiyonel otomatik şanzımanlar başta olmak
                üzere tüm şanzıman türlerinde uzman kadromuzla garantili hizmet sunuyoruz.
              </p>
              <p className="text-content-muted leading-relaxed mt-4">
                {/* İçerik WordPress analizinden sonra buraya eklenecek */}
                Servis içerik bilgileri yakında eklenecektir.
              </p>
            </div>
          </div>
        </section>

        <WhyUs />
    </main>
  );
}
