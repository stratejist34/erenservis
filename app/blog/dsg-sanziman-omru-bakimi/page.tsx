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
    <main className="bg-[#070B11]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="hero-deep pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              Bakım Rehberi
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            DSG Şanzıman{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Ömrü ve Bakımı
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Düzenli bakımla bir DSG şanzıman 200.000 km&apos;nin üzerinde sorunsuz çalışabilir.
            DQ200 ve DQ250 için bakım takvimi, yağ değişimi zamanı ve ömrü uzatan pratik kurallar.{' '}
            <strong className="text-hero-muted font-medium">Bostancı — uzman servis.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={PHONE_HREF} className="btn-premium flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-bold text-base">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-white/40 transition-all"
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
          <p className="text-content-text text-lg leading-relaxed">
            DSG şanzıman, doğru kullanım ve düzenli bakımla 200.000–250.000 km üzerinde dayanabilen
            bir teknolojidir. Ancak bakım ihmal edildiğinde aynı şanzıman 80.000 km&apos;de ciddi arıza
            üretir. Fark yalnızca{' '}
            <strong>60.000 km&apos;de yapılan yağ değişimi ve adaptasyon kalibrasyonu</strong> gibi
            basit işlemlerdedir. Arıza büyümeden önce yapılan bakım, on binlerce TL tasarruf demektir.
          </p>
        </div>

        {/* Ömrü Etkileyen Faktörler */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">DSG Ömrünü Kısaltan 4 Hata</h2>
          <div className="bg-content-secondary rounded-2xl p-6 border border-content-border">
            <ul className="space-y-3">
              {OMRU_ETKILEYEN.map((madde) => (
                <li key={madde} className="flex items-start gap-3 text-content-text">
                  <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {madde}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bakım Takvimi */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Model Bazlı Bakım Takvimi</h2>
          <div className="grid gap-4">
            {BAKIM_TABLOSU.map((model) => (
              <div key={model.model} className="p-5 rounded-xl bg-[#070B11] border border-content-border shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-bold text-content-text">{model.model}</h3>
                      <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full">{model.tip}</span>
                    </div>
                    <p className="text-xs text-content-muted">{model.araclar}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { etiket: 'Yağ / Sıvı', deger: model.yag },
                    { etiket: 'Kavrama', deger: model.kavrama },
                    { etiket: 'Adaptasyon', deger: model.adaptasyon },
                  ].map((satir) => (
                    <div key={satir.etiket} className="flex gap-3 rounded-lg bg-content-secondary px-4 py-2.5">
                      <span className="text-xs font-semibold text-content-muted w-20 shrink-0 pt-0.5">{satir.etiket}</span>
                      <span className="text-sm text-content-text">{satir.deger}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ömür Uzatan Kurallar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">DSG Ömrünü Uzatan 5 Kural</h2>
          <div className="bg-surface-0 rounded-2xl p-6 text-white">
            <ul className="space-y-3">
              {OMUR_KURALLARI.map((kural) => (
                <li key={kural} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{kural}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        {faqItems.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-content-text mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="p-5 rounded-xl bg-content-secondary border border-content-border">
                  <h3 className="font-bold text-content-text mb-2">{item.q}</h3>
                  <p className="text-content-muted text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* İç Linkler */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-content-border">
          <Link
            href="/hizmetler/dsg-kavrama-degisimi/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition"
          >
            DSG Kavrama Değişimi
          </Link>
          <Link
            href="/hizmetler/dsg-mekatronik-kart/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-content-border text-content-text font-semibold hover:bg-content-secondary transition"
          >
            Mekatronik Kart Fiyatları &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="hero-deep py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-hero-text mb-4">DSG Bakımı Yaptırmak İster misiniz?</h2>
          <p className="text-hero-muted mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="btn-premium flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/blog/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all text-sm"
            >
              Diğer Yazılar &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
