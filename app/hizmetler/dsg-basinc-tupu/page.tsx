import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, ShieldCheck, Wrench, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import {
  buildServiceSchema,
  buildBreadcrumbSchema,
  schemaToString,
} from '@/lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Basınç Tüpü | Değişim ve Yükseltme | Eren Servis Bostancı',
  description:
    'DQ200 DSG şanzıman basınç tüpü değişimi ve yükseltmesi. OEM orijinal veya WT Wolf\'s Tech güçlendirilmiş seçenek. Montaj, adaptasyon ve garanti dahil.',
  keywords: [
    'dsg basınç tüpü',
    'dsg basinc tupu degisimi',
    'wt wolfs tech dsg basınç tüpü',
    'dq200 basınç tüpü',
    'dsg kavrama hidrolik sistemi',
    'dsg basınç sorunu bostancı',
  ],
  alternates: {
    canonical: 'https://erenservis.net/hizmetler/dsg-basinc-tupu/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const KARSILASTIRMA = [
  {
    tip: 'OEM / Orijinal',
    ozellikler: [
      'Volkswagen Grubu orijinal parça',
      'Mevcut sistemle birebir uyum',
      'Normal kullanım için yeterli',
      'Standart dayanım ömrü',
    ],
    kimIcin: 'Standart şehir kullanımı, şanzımanı sorunsuz olan araçlar',
    vurgu: false,
  },
  {
    tip: 'WT Wolf\'s Tech (Güçlendirilmiş)',
    ozellikler: [
      'Güçlendirilmiş malzeme yapısı',
      'OEM\'e kıyasla ~2x ömür',
      'Yüksek performans / sportif kullanım için ideal',
      'DQ200 zayıf noktaları analiz edilerek geliştirildi',
    ],
    kimIcin: 'Sık uzun yol, güç artışı yapılmış araç, veya mevcut OEM\'i tekrar değiştirmek istemeyenler',
    vurgu: true,
  },
];

const MONTAJ_SURECI = [
  { adim: 'Diagnostik', detay: 'P179E, P17BF gibi basınç ve kavrama hata kodları taranır. Mevcut tüpün durumu değerlendirilir.' },
  { adim: 'Tüp Değişimi', detay: 'Kavrama aktüatör sistemi demonte edilir, eski basınç tüpü çıkarılır. OEM veya WT parça takılır.' },
  { adim: 'Sızdırmazlık Testi', detay: 'Yeni tüp takıldıktan sonra hidrolik sistem basınç testi ile kontrol edilir.' },
  { adim: 'TCU Adaptasyon', detay: 'Şanzıman kontrol ünitesi sıfırlanır ve yeni kavrama öğrenme rutini çalıştırılır.' },
  { adim: 'Yol Testi', detay: 'Titreme, vuruntu veya basınç hatası olmadığı doğrulanır, araç teslim edilir.' },
];

const SEMPTOMLAR = [
  'Düşük hızda (1–2. vites) titreme veya vuruntu',
  'Özellikle sabah ilk harekette sarsıntı',
  '"P179E – Kavrama Aktüatörü Basıncı" hata kodu',
  '"P17BF – DSG Basınç Regülasyon" hata kodu',
  'Aracın beklenmedik an "jerky" vites değiştirmesi',
  'DSG yağ seviyesi normal olmasına rağmen titreme sürmesi',
];

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: 'DSG Basınç Tüpü Değişimi',
  description:
    'DQ200 DSG şanzıman basınç tüpü değişimi ve yükseltmesi. OEM orijinal veya ' +
    "WT Wolf's Tech güçlendirilmiş seçenek. Montaj, adaptasyon ve garanti dahil.",
  url: 'https://erenservis.net/hizmetler/dsg-basinc-tupu/',
  areaServed: ['Bostancı', 'Kadıköy', 'Üsküdar', 'Maltepe', 'İstanbul'],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://erenservis.net' },
  { name: 'Hizmetler', url: 'https://erenservis.net/hizmetler/' },
  { name: 'DSG Basınç Tüpü', url: 'https://erenservis.net/hizmetler/dsg-basinc-tupu/' },
]);

export default function DsgBasincTupuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema) }} />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/images/part2/Screenshot_75.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(6px) saturate(0.5) brightness(0.5)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.90) 100%)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
              <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
                DQ200 Uzman Servisi
              </span>
            </div>
            <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
              DSG Basınç Tüpü{' '}
              <span className="text-brass">Değişim & Yükseltme</span>
            </h1>
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              DQ200 kavrama hidrolik sistemi basınç tüpü. OEM orijinal veya WT Wolf&apos;s Tech
              güçlendirilmiş seçenek — montaj, adaptasyon ve{' '}
              <strong className="text-text-primary font-medium">garanti dahil</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={PHONE_HREF}
                className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2.5 px-7 py-3.5 text-base transition-colors">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold text-base hover:border-brass hover:text-text-primary transition-all">
                <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </section>

        {/* DSG Basınç Tüpü Nedir */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <h2 className="font-saira text-2xl font-semibold text-text-primary mb-5">DSG Basınç Tüpü Nedir?</h2>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">
                  DQ200 (kuru kavramalı 7 ileri DSG) şanzımanında kavrama paketleri, hidrolik
                  basınçla çalışan bir aktüatör sistemi tarafından kontrol edilir. Bu sistemin
                  kalbinde <strong className="text-text-primary">basınç tüpü</strong> yer alır.
                </p>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">
                  Basınç tüpü zamanla yorulur, metal yorgunluğu veya ısıl döngü nedeniyle
                  mikro çatlaklar oluşabilir. Bu durum kavrama basıncının tutarsız hale gelmesine,
                  dolayısıyla titremelere ve hata kodlarına yol açar.
                </p>
                <p className="font-saira text-sm text-text-secondary leading-relaxed">
                  Basınç tüpü değişimi genellikle kavrama paketi revizyonu veya mechatronik
                  bakımı ile eş zamanlı yapılır; bağımsız olarak da uygulanabilir.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-64 p-6 rounded-xl bg-graphite-surface border border-border-hairline">
                <h3 className="font-saira font-semibold text-base text-text-primary mb-4">Uyumlu Araçlar</h3>
                <ul className="flex flex-col gap-2 font-saira text-sm text-text-secondary">
                  {['VW Golf 6/7 DSG', 'VW Polo 1.0/1.2 TSI DSG', 'VW Tiguan 1.4 TSI', 'Audi A1/A3 S-Tronic', 'Skoda Octavia 1.2/1.4 DSG', 'Seat Leon / Ibiza DSG'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brass shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OEM vs WT Wolf's Tech */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Hangi Basınç Tüpü?</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
              İki seçeneği de stoğumuzda bulunduruyoruz. Kullanım alışkanlığınıza göre birlikte karar verebiliriz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {KARSILASTIRMA.map((k) => (
                <div key={k.tip}
                  className={`p-7 rounded-xl border flex flex-col gap-4 ${k.vurgu ? 'bg-graphite-elevated border-border-brass' : 'bg-graphite-surface border-border-hairline'}`}>
                  {k.vurgu && (
                    <span className="self-start font-jetbrains text-[10px] font-bold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full bg-brass text-graphite-base">
                      Yükseltme
                    </span>
                  )}
                  <h3 className="font-saira font-semibold text-lg text-text-primary">
                    {k.tip}
                  </h3>
                  <ul className="flex flex-col gap-2 flex-1">
                    {k.ozellikler.map(oz => (
                      <li key={oz} className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-brass" strokeWidth={2.5} />
                        <span className="font-saira text-sm text-text-primary">{oz}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="font-saira text-xs text-text-secondary border-t border-border-subtle pt-3">
                    <strong className="text-text-primary">Kim için:</strong>{' '}{k.kimIcin}
                  </div>
                </div>
              ))}
            </div>
            <p className="font-saira text-center text-text-secondary text-xs mt-6">
              Her iki seçenek de montaj, TCU adaptasyonu ve işçilik garantisi ile teslim edilmektedir.
            </p>
          </div>
        </section>

        {/* Montaj Süreci */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-10">Montaj Süreci</h2>
            <div className="flex flex-col gap-4">
              {MONTAJ_SURECI.map((item, i) => (
                <div key={item.adim} className="flex gap-4 p-5 rounded-xl bg-graphite-surface border border-border-hairline">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brass text-graphite-base font-jetbrains text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-saira font-semibold text-sm text-text-primary mb-1">{item.adim}</h3>
                    <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.detay}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Semptomlar */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-status-warning-bg border border-status-warning-border/20 mb-5">
                  <AlertTriangle className="w-4 h-4 text-status-warning-label" strokeWidth={2} />
                  <span className="text-xs font-semibold text-status-warning-text">DQ200 basınç tüpü belirtileri</span>
                </div>
                <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Bu Belirtiler Varsa Gelin</h2>
                <ul className="flex flex-col gap-3">
                  {SEMPTOMLAR.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-saira text-sm text-text-primary leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-graphite-elevated border border-border-subtle rounded-xl p-8">
                <h3 className="font-saira font-semibold text-xl text-text-primary mb-3 text-center">Hata Kodunuzu Bize Gönderin</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-5 text-center">
                  Araç bilginizi ve varsa hata kodlarını WhatsApp&apos;tan gönderin.
                  Hangi parçanın doğru seçenek olduğunu hızlıca belirtelim.
                </p>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors mb-3">
                  <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                  WhatsApp&apos;tan Yazın
                </a>
                <a href={PHONE_HREF}
                  className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center justify-center gap-2 px-6 py-3 transition-colors">
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* İlgili hizmetler */}
        <section className="py-12 bg-graphite-base border-t border-border-hairline">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="font-saira text-text-secondary text-sm mb-5">İlgili DSG hizmetlerimiz</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/hizmetler/dsg-sanziman-tamiri/"
                className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-6 py-3 text-sm transition-colors">
                <Wrench className="w-4 h-4" strokeWidth={2.5} />
                DSG Şanzıman Tamiri
              </Link>
              <Link href="/hizmetler/zf-sanziman-tamiri/"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors text-sm">
                ZF Şanzıman Servisi →
              </Link>
            </div>
          </div>
        </section>

    </main>
    </>
  );
}
