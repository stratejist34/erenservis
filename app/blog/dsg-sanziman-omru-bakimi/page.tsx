import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import Link from 'next/link';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Şanzıman Ömrü ve Bakımı | DQ200 DQ250 Bakım Takvimi — Eren Servis',
  description:
    'DSG şanzıman kaç km dayanır? DQ200 ve DQ250 bakım aralıkları, yağ değişimi zamanı ve ömrü uzatan 5 kural. Bostancı uzman servis rehberi.',
  keywords: [
    'dsg şanzıman ömrü',
    'dsg bakım aralığı',
    'dsg yağ değişimi ne zaman',
    'dq200 bakım',
    'dq250 yağ değişimi',
    'dsg şanzıman bakımı',
    'dsg ne kadar dayanır',
  ],
  alternates: {
    canonical: 'https://erenservis.net/blog/dsg-sanziman-omru-bakimi/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const OMRU_ETKILEYEN = [
  'Şehir içi yoğun kullanım — sürekli 1→2 geçiş DQ200 kavramasını hızla aşındırır',
  'Yağ bakımının atlanması — kirli yağ mekatroniği ve solenoidleri tıkar',
  'Ani kalkışlar ve spor mod kötüye kullanımı — kavrama balatasını erken bitirir',
  'Adaptasyon kalibrasyonunun sıfırlanmaması — yanlış öğrenilmiş değerler vites vuruntusuna yol açar',
];

const BAKIM_TABLOSU = [
  {
    model: 'DQ200',
    tip: 'Kuru Kavrama — 7 İleri',
    araclar: 'Golf 6/7, Polo, A3, Leon, Fabia',
    yag: 'Şanzıman yağı yok — sadece mekatronik hidrolik sıvısı kontrol edilir',
    kavrama: '120.000 – 150.000 km\'de değişim',
    adaptasyon: 'Her 40.000 km\'de kalibrasyon önerilir',
  },
  {
    model: 'DQ250',
    tip: 'Islak Kavrama — 6 İleri',
    araclar: 'Passat B7/B8, Tiguan, A4/A6, Octavia, Superb',
    yag: 'Her 60.000 km\'de yağ + filtre değişimi zorunlu',
    kavrama: '180.000 – 220.000 km\'de değişim (bakımlı)',
    adaptasyon: 'Her 60.000 km\'de yağ değişimiyle birlikte',
  },
];

const OMUR_KURALLARI = [
  'Ani kalkıştan kaçın — yeşil ışıkta hızlı kalkış bir DSG için en zararlı harekettir',
  'Trafikte S modunu kullan — daha az kavrama kayması, daha az ısı demektir',
  'DQ250\'de 60.000 km\'de bir yağ değişimini aksatma — bu tek bakım büyük masrafları önler',
  'İlk belirti göründüğünde getir — vuruntu başladığında 15.000 TL olan iş, 3 ay sonra 45.000 TL olabilir',
  'Adaptasyon kalibrasyonunu ihmal etme — yağ değişimi sonrası sıfırlama zorunludur',
];

export default function DSGSanzimanOmruBakimiPage() {
  const faqItems = TRANSMISSION_FAQS['dsg-sanziman-omru-bakimi'] ?? [];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'DSG Şanzıman Ömrü ve Bakımı | DQ200 DQ250 Bakım Takvimi',
    description: 'DSG şanzıman kaç km dayanır? DQ200 ve DQ250 bakım aralıkları ve ömrü uzatan kurallar.',
    datePublished: '2026-04-11',
    author: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    publisher: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://erenservis.net/blog/dsg-sanziman-omru-bakimi/' },
  };

  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null;

  return (
    <main className="bg-graphite-base">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              Bakım Rehberi
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            DSG Şanzıman{' '}
            <span className="text-brass">Ömrü ve Bakımı</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Düzenli bakımla bir DSG şanzıman 200.000 km&apos;nin üzerinde sorunsuz çalışabilir.
            DQ200 ve DQ250 için bakım takvimi, yağ değişimi zamanı ve ömrü uzatan pratik kurallar.{' '}
            <strong className="text-text-primary font-medium">Bostancı — uzman servis.</strong>
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

      {/* İçerik */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="font-saira text-text-primary text-lg leading-relaxed">
            DSG şanzıman, doğru kullanım ve düzenli bakımla 200.000–250.000 km üzerinde dayanabilen
            bir teknolojidir. Ancak bakım ihmal edildiğinde aynı şanzıman 80.000 km&apos;de ciddi arıza
            üretir. Fark yalnızca{' '}
            <strong>60.000 km&apos;de yapılan yağ değişimi ve adaptasyon kalibrasyonu</strong> gibi
            basit işlemlerdedir. Arıza büyümeden önce yapılan bakım, on binlerce TL tasarruf demektir.
          </p>
        </div>

        {/* Ömrü Etkileyen Faktörler */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DSG Ömrünü Kısaltan 4 Hata</h2>
          <div className="bg-graphite-surface rounded-xl p-6 border border-border-hairline">
            <ul className="space-y-3">
              {OMRU_ETKILEYEN.map((madde) => (
                <li key={madde} className="flex items-start gap-3 font-saira text-text-primary">
                  <AlertTriangle className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  {madde}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bakım Takvimi */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Model Bazlı Bakım Takvimi</h2>
          <div className="grid gap-4">
            {BAKIM_TABLOSU.map((model) => (
              <div key={model.model} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brass/8 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-brass" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-saira font-semibold text-text-primary">{model.model}</h3>
                      <span className="font-jetbrains text-xs text-brass bg-brass/8 px-2 py-0.5 rounded-full">{model.tip}</span>
                    </div>
                    <p className="font-jetbrains text-xs text-iron-light">{model.araclar}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { etiket: 'Yağ / Sıvı', deger: model.yag },
                    { etiket: 'Kavrama', deger: model.kavrama },
                    { etiket: 'Adaptasyon', deger: model.adaptasyon },
                  ].map((satir) => (
                    <div key={satir.etiket} className="flex gap-3 rounded-lg bg-graphite-elevated px-4 py-2.5">
                      <span className="font-jetbrains text-xs font-semibold text-text-secondary w-20 shrink-0 pt-0.5">{satir.etiket}</span>
                      <span className="font-saira text-sm text-text-primary">{satir.deger}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ömür Uzatan Kurallar */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DSG Ömrünü Uzatan 5 Kural</h2>
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-6">
            <ul className="space-y-3">
              {OMUR_KURALLARI.map((kural) => (
                <li key={kural} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <span className="font-saira text-sm text-text-primary">{kural}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        {faqItems.length > 0 && (
          <section className="mb-12">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline">
                  <h3 className="font-saira font-semibold text-text-primary mb-2">{item.q}</h3>
                  <p className="font-saira text-text-secondary text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* İç Linkler */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border-hairline">
          <Link
            href="/hizmetler/dsg-kavrama-degisimi/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            DSG Kavrama Değişimi
          </Link>
          <Link
            href="/hizmetler/dsg-mekatronik-kart/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors"
          >
            Mekatronik Kart Fiyatları &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">DSG Bakımı Yaptırmak İster misiniz?</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:00-18:00
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
  );
}
