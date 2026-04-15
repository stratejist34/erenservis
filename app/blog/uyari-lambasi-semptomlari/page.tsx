import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  schemaToString,
} from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';


export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Uyarı Lambası | P Işığı ve Anahtar İşareti Yanıyor Bostancı',
  description:
    'DSG şanzıman uyarı lambası belirtileri. P ışığı yanıyor, anahtar işareti yanıyor ne demek? Mekatronik, sensör ve kavrama arızaları. Bostancı uzman servis.',
  keywords: [
    'dsg p ışığı yanıyor',
    'dsg anahtar işareti yanıyor',
    'dsg arıza lambası',
    'şanzıman uyarı ışığı',
    'dsg şanzıman arıza lambası',
    'dsg p lambası nedir',
  ],
  alternates: {
    canonical: 'https://erenservis.net/blog/uyari-lambasi-semptomlari/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const P_ISIGI = [
  'Park kilidi algısı hatalı olabilir',
  'Vites kolu müşürü veya fren müşürü kontrol edilmelidir',
  'Araç P&apos;den çıkmıyorsa zorlamayın',
  'Mekatronik haberleşme hatası olabilir',
];

const ANAHTAR_ISARETI = [
  'Elektronik arıza kaydı vardır',
  'Geçişlerde sarsıntı, vuruntu, gecikme görülebilir',
  'Cihazla arıza tespiti şarttır',
  'Adaptasyon bozukluğu veya sensör arızası olabilir',
];

const ARIZA_LAMBASI = [
  'Mekatronik ünitesinde sorun olabilir',
  'Baskı-balata aşınması veya yağ sıcaklığı yüksekliği',
  'Sensör veya vites konumu hatası',
  'Şanzıman kendini korumaya alabilir (limp mode)',
];

const FAQ = [
  { soru: 'Sürmeye devam edilir mi?', cevap: 'Kısa mesafe bile risktir. Aracı zorlamadan servise ulaştırın.' },
  { soru: 'Her P ışığı büyük arıza mıdır?', cevap: 'Hayır, bazen sensör hatası olabilir ama kontrol şarttır.' },
  { soru: 'Bostancı İstanbul\'da hızlı teşhis mümkün mü?', cevap: 'Evet, uzman DSG kontrolüyle sorun netleşir.' },
];

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS['uyari-lambasi-semptomlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'DSG Uyarı Lambası | P Işığı ve Anahtar İşareti Yanıyor',
  description:
    'DSG şanzıman uyarı lambası belirtileri. P ışığı yanıyor, anahtar işareti yanıyor ne demek? Mekatronik, sensör ve kavrama arızaları.',
  url: 'https://erenservis.net/blog/uyari-lambasi-semptomlari/',
  datePublished: '2025-03-10',
  imageUrl: 'https://erenservis.net/og-image.jpg',
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://erenservis.net' },
  { name: 'Blog', url: 'https://erenservis.net/blog/' },
  { name: 'DSG Uyarı Lambası Belirtileri', url: 'https://erenservis.net/blog/uyari-lambasi-semptomlari/' },
]);

export default function UyariLambasiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema) }} />
      <main className="bg-graphite-base">
      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              DSG Arıza Belirtileri
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            DSG Uyarı{' '}
            <span className="text-brass">Lambası ve İşaretleri</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            DSG P ışığı yanıyor, anahtar işareti yanıyor ne demek?
            <strong className="text-text-primary font-medium"> Bostancı erken teşhis</strong> ile büyük masraf önlenir.
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

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Diagnostik Görsel */}
        <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden mb-10">
          <Image
            src="/images/part2/Screenshot_112.webp"
            alt="DSG şanzıman diagnostik cihazı — Veri Akışı ekranında hidrolik pompa basınç değerleri"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="font-saira text-text-primary text-lg leading-relaxed">
            Bostancı İstanbul&apos;da DSG araçlarda görülen uyarılar erken fark edilirse büyük masraf önlenebilir.
            <strong> DSG P ışığı yanıyor</strong>, <strong>DSG anahtar işareti yanıyor</strong>,
            <strong> DSG arıza lambası</strong> ve <strong>şanzıman uyarı ışığı</strong> genelde mekatronik, sensör,
            vites konumu veya kavrama sorunlarına işaret eder.
          </p>
        </div>

        {/* P Işığı */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-brass" />
            DSG P Işığı Yanıyor
          </h2>
          <div className="bg-graphite-surface rounded-xl p-6 border border-border-hairline">
            <ul className="space-y-3">
              {P_ISIGI.map((item) => (
                <li key={item} className="flex items-start gap-3 font-saira text-text-primary">
                  <AlertTriangle className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Anahtar İşareti */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-brass" />
            DSG Anahtar İşareti Yanıyor
          </h2>
          <div className="bg-graphite-surface rounded-xl p-6 border border-border-hairline">
            <ul className="space-y-3">
              {ANAHTAR_ISARETI.map((item) => (
                <li key={item} className="flex items-start gap-3 font-saira text-text-primary">
                  <AlertTriangle className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Arıza Lambası */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-brass" />
            DSG Arıza Lambası Ne Anlatır?
          </h2>
          <div className="bg-graphite-surface rounded-xl p-6 border border-border-hairline">
            <ul className="space-y-3">
              {ARIZA_LAMBASI.map((item) => (
                <li key={item} className="flex items-start gap-3 font-saira text-text-primary">
                  <AlertTriangle className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ne Yapmalı */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Ne Yapmalı, Maliyet Ne Kadar?</h2>
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-6">
            <ul className="space-y-3">
              {[
                'Aracı zorlamayın, özellikle yoğun İstanbul trafiğinde kullanımı azaltın',
                'Yol testi ve bilgisayarlı kontrol yaptırın',
                'Maliyet arızaya göre değişir: sensör düşük, mekatronik ve kavrama daha yüksektir',
                'Bostancı İstanbul\'da uzman DSG servisi ile hızlı teşhis',
              ].map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <span className="font-saira text-sm text-text-primary">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.soru} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline">
                <h3 className="font-saira font-semibold text-text-primary mb-2">{item.soru}</h3>
                <p className="font-saira text-text-secondary text-sm">{item.cevap}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border-hairline">
          <Link
            href="/hizmetler/dsg-mekatronik-kart/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            Mekatronik Servisi
          </Link>
          <Link
            href="/blog/dsg-vuruntu-semptomlari/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors"
          >
            Vuruntu Belirtileri &rarr;
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">DSG Uyarı Lambası Yanıyor?</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 - Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/blog/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
            >
              Diğer Yazılar &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
