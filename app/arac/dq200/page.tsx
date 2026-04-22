import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, Wrench } from 'lucide-react';
import Link from 'next/link';
import { buildServiceSchema, schemaToString } from '@/lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DQ200 Şanzıman Tamiri | Mekatronik & Kavrama Servisi Bostancı',
  description:
    'DQ200 7 ileri kuru kavramalı DSG şanzıman tamiri Bostancı. Mekatronik kart, kavrama seti, basınç tüpü değişimi. VW, Audi, Seat, Skoda modellerinde garantili servis.',
  keywords: [
    'dq200 tamiri',
    'dq200 mekatronik',
    'dq200 kavrama değişimi',
    'dq200 basınç tüpü',
    'dq200 fiyatı 2026',
    'volkswagen dsg tamiri',
    '7 ileri dsg tamiri',
  ],
  alternates: {
    canonical: 'https://www.erenservis.net/arac/dq200/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const ARACLAR = [
  { model: 'VW Golf 6 / 7 / 8', yillar: '2009 – günümüz', motor: '1.2 TSI, 1.4 TSI, 1.6 TDI, 2.0 TDI' },
  { model: 'VW Polo (6C / AW)', yillar: '2009 – günümüz', motor: '1.0 TSI, 1.2 TSI, 1.6 TDI' },
  { model: 'Audi A3 8V / 8Y', yillar: '2012 – günümüz', motor: '1.2 / 1.4 / 1.6 / 2.0 TDI' },
  { model: 'Seat Leon (5F)', yillar: '2012 – 2020', motor: '1.2 TSI, 1.4 TSI, 1.6 TDI' },
  { model: 'Skoda Fabia / Octavia', yillar: '2010 – günümüz', motor: '1.0 TSI, 1.2 TSI, 1.6 TDI' },
  { model: 'Skoda Superb (3T / 3V)', yillar: '2009 – 2015', motor: '1.4 TSI, 1.6 TDI' },
];

const ARIZA_KALEMLERI = [
  {
    baslik: 'Mekatronik Kart Arızası',
    aciklama: 'P17xx hata kodları, vites kilitleme, PRND göstergesi yanıp sönme. Tamir 8.000–14.000 TL, değişim 28.000–42.000 TL.',
  },
  {
    baslik: 'Kavrama Seti Aşınması',
    aciklama: '1→2 vuruntu, kalkışta sarsıntı, kavrama kokusu. Komple kavrama seti değişimi 18.000–32.000 TL.',
  },
  {
    baslik: 'Basınç Tüpü Çatlaması',
    aciklama: 'DQ200\'e özgü kronik arıza. Hidrolik basınç düşer, vites gecikmeli girer. Güçlendirilmiş kit ile 9.000–13.000 TL.',
  },
  {
    baslik: 'Adaptasyon Bozulması',
    aciklama: 'Uzun süre kullanımda öğrenilmiş değerlerin kayması. Teşhis cihazıyla kalibrasyon sıfırlama yeterlidir.',
  },
];

const AVANTAJLAR = [
  'DQ200 uzman teknisyeni — sadece bu şanzımana odaklanılmış deneyim',
  'Tamir önce, değişim sonra politikası — gereksiz parça masrafına yol açılmaz',
  'Güçlendirilmiş basınç tüpü kiti — kronik arızanın kalıcı çözümü',
  '6 ay / 10.000 km işçilik ve parça garantisi',
  'Ücretsiz hata kodu okuma — tanı olmadan fiyat verilmez',
];

const FIYAT_TABLOSU = [
  { islem: 'Mekatronik kart onarımı', aralik: '8.000 – 14.000 TL', sure: '1 gün' },
  { islem: 'Mekatronik kart değişimi', aralik: '28.000 – 42.000 TL', sure: '1–2 gün' },
  { islem: 'Kavrama seti değişimi', aralik: '18.000 – 32.000 TL', sure: '1–2 gün' },
  { islem: 'Güçlendirilmiş basınç tüpü', aralik: '9.000 – 13.000 TL', sure: '1 gün' },
  { islem: 'Kavrama + mekatronik (kombo)', aralik: '38.000 – 58.000 TL', sure: '2 gün' },
];

export default function DQ200Page() {
  const serviceSchema = buildServiceSchema({
    name: 'DQ200 DSG Şanzıman Tamiri',
    description: 'DQ200 7 ileri kuru kavramalı DSG şanzıman mekatronik, kavrama ve basınç tüpü tamiri.',
    url: 'https://www.erenservis.net/arac/dq200/',
    areaServed: ['Bostancı', 'Kadıköy', 'İstanbul'],
  });

  return (
    <main className="bg-graphite-base">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              DSG — 7 İleri Kuru Kavrama
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            DQ200{' '}
            <span className="text-brass">Şanzıman Tamiri</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            VW, Audi, Seat ve Skoda araçlardaki 7 ileri kuru kavramalı DSG şanzımanın en sık görülen
            arızaları: mekatronik kart, kavrama seti ve basınç tüpü. Bostancı&apos;da ücretsiz ön tanı.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2.5 px-7 py-3.5 text-base transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold text-base hover:border-brass hover:text-text-primary transition-all"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="font-saira text-text-primary text-lg leading-relaxed">
            DQ200, Volkswagen Grubu&apos;nun en yaygın DSG şanzımanıdır. 7 ileri kuru kavrama sistemiyle
            yakıt verimliliği yüksek ama şehir içi yoğun kullanımda kavrama aşınması hızlanır.
            Mekatronik arızası ve basınç tüpü sorunu bu şanzımanın iki kronik problemidir.
            <strong> Erken teşhis ile kart tamiri 8.000 TL&apos;ye çözülürken,
            gecikilen vakada 42.000 TL&apos;ye çıkabilir.</strong>
          </p>
        </div>

        {/* Hangi Araçlarda Var */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DQ200 Hangi Araçlarda Var?</h2>
          <div className="rounded-xl border border-border-hairline overflow-hidden">
            <div className="grid grid-cols-3 bg-graphite-surface px-5 py-3 font-jetbrains text-xs font-semibold uppercase tracking-wider text-text-secondary">
              <span>Model</span>
              <span>Yıllar</span>
              <span>Motor</span>
            </div>
            {ARACLAR.map((arac, i) => (
              <div
                key={arac.model}
                className={`grid grid-cols-3 px-5 py-3.5 text-sm items-center ${i < ARACLAR.length - 1 ? 'border-b border-border-hairline' : ''}`}
              >
                <span className="font-saira font-medium text-text-primary">{arac.model}</span>
                <span className="font-saira text-text-secondary">{arac.yillar}</span>
                <span className="font-saira text-text-secondary text-xs">{arac.motor}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Arıza Kalemleri */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DQ200 Sık Görülen Arızalar</h2>
          <div className="grid gap-4">
            {ARIZA_KALEMLERI.map((ariza) => (
              <div key={ariza.baslik} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brass/8 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-brass" />
                  </div>
                  <div>
                    <h3 className="font-saira font-semibold text-text-primary mb-1">{ariza.baslik}</h3>
                    <p className="font-saira text-text-secondary text-sm">{ariza.aciklama}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fiyat Tablosu */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">DQ200 Tamir Fiyatları — 2026</h2>
          <p className="font-saira text-text-secondary text-sm mb-6">
            Net fiyat ücretsiz ön tanı sonrası yazılı sunulur. Aşağıdaki aralıklar işçilik dahildir.
          </p>
          <div className="rounded-xl border border-border-hairline overflow-hidden">
            <div className="grid grid-cols-3 bg-graphite-surface px-5 py-3 font-jetbrains text-xs font-semibold uppercase tracking-wider text-text-secondary">
              <span className="col-span-1">İşlem</span>
              <span className="text-center">Fiyat</span>
              <span className="text-center">Süre</span>
            </div>
            {FIYAT_TABLOSU.map((row, i) => (
              <div
                key={row.islem}
                className={`grid grid-cols-3 px-5 py-4 items-center ${i < FIYAT_TABLOSU.length - 1 ? 'border-b border-border-hairline' : ''}`}
              >
                <span className="font-saira text-sm font-medium text-text-primary">{row.islem}</span>
                <span className="font-saira text-center text-sm font-semibold text-brass">{row.aralik}</span>
                <span className="font-saira text-center text-sm text-text-secondary">{row.sure}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Neden Eren Servis */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Neden Eren Servis?</h2>
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-6">
            <ul className="space-y-3">
              {AVANTAJLAR.map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <span className="font-saira text-sm text-text-primary">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* İç Linkler */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border-hairline">
          <Link
            href="/hizmetler/dsg-kavrama-degisimi/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            Kavrama Değişimi Fiyatları
          </Link>
          <Link
            href="/hizmetler/dsg-mekatronik-kart/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors"
          >
            Mekatronik Kart Detayı &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">DQ200 Arızanız mı Var?</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/blog/dsg-hangi-araclarda-var/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
            >
              DSG Hangi Araçlarda Var? &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
