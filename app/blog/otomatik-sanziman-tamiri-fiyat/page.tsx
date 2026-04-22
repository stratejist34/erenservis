import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import Link from 'next/link';
import BlogSchema from '@/components/schema/BlogSchema';
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
    canonical: 'https://www.erenservis.net/blog/otomatik-sanziman-tamiri-fiyat/',
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
      { kalem: 'Kavrama Değişimi', aralik: '55.000 – 72.000 TL' },
      { kalem: 'Mekatronik Onarımı', aralik: '14.000 – 25.000 TL' },
      { kalem: 'Komple Revizyon', aralik: '105.000 – 135.000 TL' },
    ],
  },
  {
    baslik: 'CVT Şanzımanlar',
    alt: 'Nissan, Toyota, Honda, Renault',
    fiyatlar: [
      { kalem: 'Metal Kayış Değişimi', aralik: '22.000 – 32.000 TL' },
      { kalem: 'Kasnak (Puli) Taşlama', aralik: '16.000 – 24.000 TL' },
      { kalem: 'Komple CVT Revizyonu', aralik: '58.000 – 78.000 TL' },
    ],
  },
  {
    baslik: 'ZF & Tam Otomatikler',
    alt: 'BMW, Mercedes, Peugeot, Toyota Aisin',
    fiyatlar: [
      { kalem: 'Tork Konvertör Tamiri', aralik: '18.000 – 28.000 TL' },
      { kalem: 'Valf Gövdesi Revizyonu', aralik: '24.000 – 38.000 TL' },
      { kalem: 'Komple Revizyon', aralik: '82.000 – 105.000 TL' },
    ],
  },
];

const REVIZYON_AVANTAJLARI = [
  'Orijinal şanzımanınızın tüm aşınan parçaları sıfırlanır — çıkma şanzımanın iç durumu bilinmez',
  '6 ay işçilik + parça garantisi; çıkma şanzımanda genellikle yalnızca 3 aylık çalışma garantisi verilir',
  'Çıkma şanzımanla 3 ay içinde aynı sorunla karşılaşma riski %50 — revizyonla bu risk sıfıra yakın',
  'Onayınız olmadan tek cıvata sökülmez; keşif sonrası sabit fiyat teklifi sunulur',
];

export default function OtomatikSanzimanTamiriFiyatPage() {
  const faqItems = TRANSMISSION_FAQS['otomatik-sanziman-tamiri-fiyat'] ?? [];
  return (
    <>
      <BlogSchema
        slug="otomatik-sanziman-tamiri-fiyat"
        title="Otomatik Şanzıman Tamiri Ne Kadar? 2026 Fiyat Listesi"
        description="2026 otomatik şanzıman tamiri fiyatları. DSG, CVT, ZF ve Aisin tamir, revizyon ve işçilik maliyetleri. Ücretsiz ön tanı ve garantili onarım."
        datePublished="2026-04-11"
      />
      <main className="bg-graphite-base">

      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              Maliyet Analizi 2026
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            Otomatik Şanzıman Tamiri{' '}
            <span className="text-brass">Ne Kadar Tutar?</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            DSG, CVT, ZF ve Aisin şanzımanlarda 2026 güncel fiyat aralıkları. Arıza türüne göre
            revizyon maliyetleri ve revizyon ile çıkma şanzıman karşılaştırması.{' '}
            <strong className="text-text-primary font-medium">Bostancı — ücretsiz ön tanı.</strong>
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
            Vites geçişlerinde sarsıntı, vuruntu veya kaçırma hissi, şanzıman arızasının ilk sinyalidir.
            Fiyat ise birden fazla faktöre bağlıdır: hangi şanzıman tipi olduğu, arızanın derinliği ve
            hangi parçaların değişeceği. Bostancı&apos;daki Eren Servis&apos;te araç incelenmeden fiyat verilmez —
            çünkü <strong>aynı semptom 14.000 TL&apos;lik mekatronik onarımından da 120.000 TL&apos;lik komple revizyondan da kaynaklanabilir.</strong>
          </p>
        </div>

        {/* 4 Ana Maliyet Kalemi */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Şanzıman Tamiri Maliyetini Oluşturan 4 Kalem</h2>
          <div className="bg-graphite-surface rounded-xl p-6 border border-border-hairline">
            <ul className="space-y-3">
              {MALIYET_KALEMLERI.map((kalem) => (
                <li key={kalem} className="flex items-start gap-3 font-saira text-text-primary">
                  <AlertTriangle className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  {kalem}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Şanzıman Tipine Göre Fiyatlar */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">Şanzıman Tipine Göre Fiyat Aralıkları — 2026</h2>
          <p className="font-saira text-text-secondary text-sm mb-6">
            Her şanzıman teknolojisi farklı onarım süreci gerektirir. Aşağıdaki aralıklar işçilik dahil tahmini değerlerdir.
          </p>
          <div className="grid gap-4">
            {SANZIMAN_TIPLERI.map((tip) => (
              <div key={tip.baslik} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brass/8 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-brass" />
                  </div>
                  <div>
                    <h3 className="font-saira font-semibold text-text-primary">{tip.baslik}</h3>
                    <p className="font-saira text-text-secondary text-xs mt-0.5">{tip.alt}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {tip.fiyatlar.map((f) => (
                    <div key={f.kalem} className="flex items-center justify-between rounded-lg bg-graphite-elevated px-4 py-2.5">
                      <span className="font-saira text-sm text-text-primary">{f.kalem}</span>
                      <span className="font-saira text-sm font-semibold text-brass">{f.aralik}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Revizyon vs Çıkma */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Revizyon mu, Çıkma Şanzıman mı?</h2>
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-6">
            <p className="font-saira text-sm text-text-secondary leading-relaxed mb-5">
              Maliyet düşürmek için &quot;çıkma şanzıman&quot; seçeneğine yönelen araç sahiplerine net uyarımız:
              çıkma ünitenin iç kondisyonunu bilmek imkânsızdır. Neden kendi şanzımanınızı revize ettirmelisiniz?
            </p>
            <ul className="space-y-3">
              {REVIZYON_AVANTAJLARI.map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <span className="font-saira text-sm text-text-primary">{madde}</span>
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
            href="/hizmetler/cvt-sanziman-tamiri/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            CVT Şanzıman Servisi
          </Link>
          <Link
            href="/hizmetler/dsg-kavrama-degisimi/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors"
          >
            DSG Kavrama Değişimi &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">Şanzıman Arızasından Emin Değil misiniz?</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:30-18:30
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
