import type { Metadata } from 'next';
import Image from 'next/image';
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
      <section className="relative overflow-hidden pt-28 pb-20 text-center">
        {/* Background — teşhis cihazıyla usta */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/part2/Screenshot_102.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(6px) saturate(0.5) brightness(0.55)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.85) 100%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              Biz Kimiz
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-4">
            Hakkımızda
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
            Bostancı&apos;da 15 yılı aşkın deneyimle otomatik şanzıman alanında uzmanlaşmış bir servis.
            Her işi ilk seferinde doğru yapıyoruz.
          </p>
        </div>
      </section>

      {/* Hakkımızda İçerik */}
      <section className="py-16 bg-graphite-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <p className="font-saira text-lg text-text-secondary leading-relaxed">
                Eren Servis, 2009 yılından bu yana Bostancı&apos;da otomatik şanzıman tamiri ve revizyonu
                konusunda hizmet vermektedir. DSG, CVT ve konvansiyonel otomatik şanzımanlar başta olmak
                üzere tüm şanzıman türlerinde uzman kadromuzla garantili hizmet sunuyoruz.
              </p>
              <p className="font-saira text-text-secondary leading-relaxed mt-4">
                Her arıza farklıdır. Tanı yapmadan fiyat vermiyoruz; tanı sonrası yazılı teklif
                sunuyoruz. Onayınız olmadan hiçbir işlem başlamaz.
              </p>
            </div>
            <div className="relative flex-shrink-0 w-full md:w-72 h-52 md:h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/part2/Screenshot_107.webp"
                alt="Eren Servis teknisyeni araç altı inceleme yapıyor — Bostancı DSG uzman servis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
    </main>
  );
}
