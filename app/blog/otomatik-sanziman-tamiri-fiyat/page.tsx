import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import Link from 'next/link';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Otomatik Şanzıman Tamiri Ne Kadar? 2026 Fiyat Listesi',
  description:
    '2026 otomatik şanzıman tamiri fiyatları. DSG, CVT, ZF ve Aisin tamir, revizyon ve işçilik maliyetleri. Ücretsiz ön tanı ve garantili onarım.',
  keywords: [
    'otomatik şanzıman tamiri fiyatı 2026',
    'şanzıman tamiri ne kadar',
    'dsg tamir maliyeti',
    'cvt revizyon fiyatı',
    'zf şanzıman tamiri',
    'aisin şanzıman revizyon',
    'şanzıman işçilik ücreti',
  ],
  alternates: {
    canonical: 'https://erenservis.net/blog/otomatik-sanziman-tamiri-fiyat/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const MALIYET_KALEMLERI = [
  'İndirme/bindirme işçiliği: 4.000 – 8.000 TL (araç modeline göre)',
  'Revizyon takımı: conta, keçe ve o-ring setleri',
  'Ana parça: kavrama seti, mekatronik, tork konvertörü veya metal kayış',
  'Şanzıman yağı ve filtre: şanzıman tipine göre 5 – 9 litre özel yağ',
];

const SANZIMAN_TIPLERI = [
  {
    baslik: 'DSG / EDC / DCT (Çift Kavramalı)',
    alt: 'VW, Audi, Seat, Skoda, Ford, Volvo',
    fiyatlar: [
      { kalem: 'Kavrama Değişimi', aralik: '18.500 – 32.000 TL' },
      { kalem: 'Mekatronik Onarımı', aralik: '9.000 – 18.000 TL' },
      { kalem: 'Komple Revizyon', aralik: '45.000 – 75.000 TL' },
    ],
  },
  {
    baslik: 'CVT Şanzımanlar',
    alt: 'Nissan, Toyota, Honda, Renault',
    fiyatlar: [
      { kalem: 'Metal Kayış Değişimi', aralik: '14.000 – 22.000 TL' },
      { kalem: 'Kasnak (Puli) Taşlama', aralik: '10.000 – 16.000 TL' },
      { kalem: 'Komple CVT Revizyonu', aralik: '35.000 – 55.000 TL' },
    ],
  },
  {
    baslik: 'ZF & Tam Otomatikler',
    alt: 'BMW, Mercedes, Peugeot, Toyota Aisin',
    fiyatlar: [
      { kalem: 'Tork Konvertör Tamiri', aralik: '10.000 – 18.000 TL' },
      { kalem: 'Valf Gövdesi Revizyonu', aralik: '15.000 – 25.000 TL' },
      { kalem: 'Komple Revizyon', aralik: '50.000 – 90.000 TL' },
    ],
  },
];

const REVIZYON_AVANTAJLARI = [
  'Orijinal şanzımanınızın tüm aşınan parçaları sıfırlanır — çıkma şanzımanın iç durumu bilinmez',
  '12 ay işçilik + parça garantisi; çıkma şanzımanda genellikle yalnızca 3 aylık çalışma garantisi verilir',
  'Çıkma şanzımanla 3 ay içinde aynı sorunla karşılaşma riski %50 — revizyonla bu risk sıfıra yakın',
  'Onayınız olmadan tek cıvata sökülmez; keşif sonrası sabit fiyat teklifi sunulur',
];

export default function OtomatikSanzimanTamiriFiyatPage() {
  const faqItems = TRANSMISSION_FAQS['otomatik-sanziman-tamiri-fiyat'] ?? [];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Otomatik Şanzıman Tamiri Ne Kadar? 2026 Güncel Maliyet Analizi',
    description: 'Otomatik şanzıman tamir fiyatları 2026 rehberi. DSG, CVT, ZF ve Aisin şanzımanlarda revizyon maliyetleri, parça fiyatları ve işçilik bedelleri.',
    datePublished: '2026-04-11',
    author: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    publisher: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://erenservis.net/blog/otomatik-sanziman-tamiri-fiyat/' },
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
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="hero-deep pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              Maliyet Analizi 2026
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            Otomatik Şanzıman Tamiri{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Ne Kadar Tutar?
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            DSG, CVT, ZF ve Aisin şanzımanlarda 2026 güncel fiyat aralıkları. Arıza türüne göre
            revizyon maliyetleri ve revizyon ile çıkma şanzıman karşılaştırması.{' '}
            <strong className="text-hero-muted font-medium">Bostancı — ücretsiz ön tanı.</strong>
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
            Vites geçişlerinde sarsıntı, vuruntu veya kaçırma hissi, şanzıman arızasının ilk sinyalidir.
            Fiyat ise birden fazla faktöre bağlıdır: hangi şanzıman tipi olduğu, arızanın derinliği ve
            hangi parçaların değişeceği. Bostancı&apos;daki Eren Servis&apos;te araç incelenmeden fiyat verilmez —
            çünkü <strong>aynı semptom 9.000 TL&apos;lik mekatronik onarımından da 75.000 TL&apos;lik komple revizyondan da kaynaklanabilir.</strong>
          </p>
        </div>

        {/* 4 Ana Maliyet Kalemi */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Şanzıman Tamiri Maliyetini Oluşturan 4 Kalem</h2>
          <div className="bg-content-secondary rounded-2xl p-6 border border-content-border">
            <ul className="space-y-3">
              {MALIYET_KALEMLERI.map((kalem) => (
                <li key={kalem} className="flex items-start gap-3 text-content-text">
                  <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {kalem}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Şanzıman Tipine Göre Fiyatlar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-2">Şanzıman Tipine Göre Fiyat Aralıkları — 2026</h2>
          <p className="text-content-muted text-sm mb-6">
            Her şanzıman teknolojisi farklı onarım süreci gerektirir. Aşağıdaki aralıklar işçilik dahil tahmini değerlerdir.
          </p>
          <div className="grid gap-4">
            {SANZIMAN_TIPLERI.map((tip) => (
              <div key={tip.baslik} className="p-5 rounded-xl bg-white border border-content-border shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-content-text">{tip.baslik}</h3>
                    <p className="text-content-muted text-xs mt-0.5">{tip.alt}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {tip.fiyatlar.map((f) => (
                    <div key={f.kalem} className="flex items-center justify-between rounded-lg bg-content-secondary px-4 py-2.5">
                      <span className="text-sm text-content-text">{f.kalem}</span>
                      <span className="text-sm font-semibold text-accent">{f.aralik}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Revizyon vs Çıkma */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Revizyon mu, Çıkma Şanzıman mı?</h2>
          <div className="bg-surface-0 rounded-2xl p-6 text-white">
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Maliyet düşürmek için &quot;çıkma şanzıman&quot; seçeneğine yönelen araç sahiplerine net uyarımız:
              çıkma ünitenin iç kondisyonunu bilmek imkânsızdır. Neden kendi şanzımanınızı revize ettirmelisiniz?
            </p>
            <ul className="space-y-3">
              {REVIZYON_AVANTAJLARI.map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{madde}</span>
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
            href="/hizmetler/cvt-sanziman-tamiri/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition"
          >
            CVT Şanzıman Servisi
          </Link>
          <Link
            href="/hizmetler/dsg-kavrama-degisimi/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-content-border text-content-text font-semibold hover:bg-content-secondary transition"
          >
            DSG Kavrama Değişimi &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="hero-deep py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-hero-text mb-4">Şanzıman Arızasından Emin Değil misiniz?</h2>
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
