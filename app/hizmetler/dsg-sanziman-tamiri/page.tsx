import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench, Clock, ShieldCheck, Settings } from 'lucide-react';
import Link from 'next/link';
import {
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  schemaToString,
} from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Şanzıman Tamiri Bostancı | DQ200 DQ250 DQ381 | Eren Otomatik Şanzıman Servisi',
  description:
    'Bostancı\'da DSG şanzıman tamiri. DQ200, DQ250, DQ381 mekatronik, kavrama ve solenoid servisi. 6 ay garanti, ücretsiz ön tanı, orijinal parça.',
  keywords: [
    'dsg şanzıman tamiri',
    'dsg şanzıman servisi bostancı',
    'dq200 tamiri',
    'dq250 tamiri',
    's-tronic tamiri',
    'dsg bakımı',
    'dsg kart tamiri',
  ],
  alternates: {
    canonical: 'https://www.erenservis.net/hizmetler/dsg-sanziman-tamiri/',
  },
  openGraph: {
    title: 'DSG Şanzıman Tamiri Bostancı | Eren Otomatik Şanzıman Servisi',
    description: 'DQ200, DQ250, DQ381 mekatronik, kavrama ve solenoid servisi. 6 ay garanti, ücretsiz ön tanı.',
    url: 'https://www.erenservis.net/hizmetler/dsg-sanziman-tamiri/',
    images: [{ url: 'https://www.erenservis.net/og-image.jpg', width: 1200, height: 630 }],
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const DSG_MODELLER = [
  {
    model: 'DQ200 (7 ileri kuru kavramalı)',
    desc: 'Volkswagen, Audi, Skoda, Seat 1.0–1.4 TSI motorlarda yaygın. Mechatronik arızası, kavrama paketi, yağ sızdırmazlık.',
  },
  {
    model: 'DQ250 (6 ileri ıslak kavramalı)',
    desc: 'Golf GTI, Audi S3, yüksek torklu uygulamalar. Kavrama aşınması, solenoid arızası, yağ değişimi.',
  },
  {
    model: 'DQ381 / DQ500 (7 ileri yüksek tork)',
    desc: 'Golf R, Tiguan R, Arteon, Audi S4. Valf gövdesi, kavrama hidrolik sistemi, TCU arızaları.',
  },
  {
    model: 'S-Tronic (Audi)',
    desc: 'DQ200 ve DQ250 tabanlı Audi uygulamaları. Tüm S-Tronic modelleri servis kapsamındadır.',
  },
];

const BELIRTILER = [
  'Viteste sarsıntı veya vuruntu hissi',
  'Düşük hızda titreme (özellikle DQ200)',
  'Vites geçişlerinde gecikme veya sertlik',
  '"Şanzıman arızası" uyarı ışığı',
  'Motor devri artarken aracın geç hızlanması',
  'DSG yağ sızıntısı',
];

const DSG_KARSILASTIRMA = [
  { ozellik: 'Vites Sayısı', dq200: '7 ileri', dq250: '6 ileri', dq381: '7 ileri' },
  { ozellik: 'Kavrama Tipi', dq200: 'Kuru çift kavrama', dq250: 'Islak çift kavrama', dq381: 'Islak çift kavrama' },
  { ozellik: 'Maks. Tork', dq200: '250 Nm', dq250: '350 Nm', dq381: '420 Nm' },
  { ozellik: 'Uygulama', dq200: '1.0–1.4 TSI, 1.6 TDI', dq250: '1.8–2.0 TSI/TDI', dq381: '2.0 TFSI yüksek tork' },
  { ozellik: 'Yaygın Arıza', dq200: 'Mekatronik, basınç tüpü, kavrama aşınması', dq250: 'Solenoid tıkanma, yağ kokusu', dq381: 'Valf gövdesi, TCU yazılım' },
  { ozellik: 'Yağ Aralığı', dq200: 'Kuru — yalnız mekatronik yağı', dq250: '60.000 km', dq381: '60.000 km' },
];

const ARIZA_KODLARI = [
  { kod: 'P17BF', ad: 'Mekatronik Basınç Tüpü Kaçağı', aciklama: 'DQ200 kuru kavrama — basınç tüpü çatlağı. Parça değişimi ile çözülür.' },
  { kod: 'P189C', ad: 'Kavrama A Bağlantı', aciklama: 'Kavrama 1 bağlantı hatası. Kavrama paketi veya solenoid kontrolü gerekir.' },
  { kod: 'P0841', ad: 'Şanzıman Sıvı Basınç Sensörü', aciklama: "Yağ basınç sensörü veya valf gövdesi hatası. DQ250/DQ381'de sık görülür." },
  { kod: 'P173E', ad: 'Mekatronik Yazılım', aciklama: 'TCU yazılım uyumsuzluğu — güncelleme veya programlama çözer.' },
  { kod: 'P0810', ad: 'Kavrama Pozisyon Hatası', aciklama: 'Kavrama sensörü veya mekanik aşınma. Road test + canlı veri ile ayrıştırılır.' },
  { kod: 'P070D', ad: 'Vites Seçici Sensör', aciklama: 'Selector kol sensörü veya TCU haberleşmesi. Elektronik ağırlıklı arıza.' },
];

const DSG_KARAR_AKISI = [
  {
    baslik: 'Kalkışta titreme ve düşük hızda silkme',
    aciklama:
      'En sık DQ200 kuru kavrama tarafında görülür. Kavrama aşınması, adaptasyon sapması veya mekatronik basınç dengesizliği birlikte değerlendirilmelidir.',
    link: '/rehber/dsg-kavrama-ariza-belirtileri/',
    linkLabel: 'DSG kavrama belirtileri',
  },
  {
    baslik: 'Vites geçişinde sert vuruntu',
    aciklama:
      'DQ250 ve DQ381 tarafında solenoid kirlenmesi, valf gövdesi davranışı veya yağ kalitesi daha öne çıkar. Her vuruntu doğrudan kavrama seti anlamına gelmez.',
    link: '/rehber/dsg-vuruntu-semptomlari/',
    linkLabel: 'DSG vuruntu rehberi',
  },
  {
    baslik: 'Devir artıyor ama araç gecikmeli hızlanıyor',
    aciklama:
      'Kayma, kavrama yüzeyi ve basınç üretimiyle ilgilidir. Bu semptom ilerlediyse yalnız yazılım güncellemesi yetmez; mekanik tarafta aşınma aranmalıdır.',
    link: '/rehber/dsg-kayma-vites-atlama/',
    linkLabel: 'DSG kayma rehberi',
  },
];

const DSG_MODEL_SENARYOLARI = [
  {
    baslik: 'Volkswagen / Skoda / Seat DQ200',
    modeller: 'Golf, Polo, Octavia, Leon, Fabia',
    aciklama:
      'Şehir içi kullanım, yokuşta bekleme ve sık dur-kalk DQ200 kavrama ömrünü doğrudan etkiler. P17BF ve titreme şikâyeti bu ailede öne çıkar.',
    link: '/arac/volkswagen/',
    linkLabel: 'Volkswagen şanzıman sayfası',
  },
  {
    baslik: 'Volkswagen / Audi DQ250',
    modeller: 'Passat, Tiguan, A3, A4, Golf GTI',
    aciklama:
      'Islak kavrama yapısı daha dayanıklıdır ama yağ değişimi ihmal edildiğinde solenoid ve valf gövdesi sorunları büyür. Bu ailede bakım geçmişi çok önemlidir.',
    link: '/hizmetler/sanziman-bakimi/',
    linkLabel: 'Şanzıman bakım sayfası',
  },
  {
    baslik: 'DQ381 / yüksek tork DSG',
    modeller: 'Arteon, Golf R, Tiguan 2.0 TSI, bazı Audi uygulamaları',
    aciklama:
      'Yüksek torklu kullanımda yazılım, hidrolik tepki ve valf gövdesi davranışı birlikte okunmalıdır. Özellikle sert kullanım geçmişi maliyeti etkiler.',
    link: '/blog/dsg-mekatronik-ariza-fiyati/',
    linkLabel: 'Mekatronik fiyat rehberi',
  },
  {
    baslik: 'Audi S-Tronic',
    modeller: 'A3, A4, A5, Q3, Q5',
    aciklama:
      'S-Tronic kullanıcıları çoğu zaman arızayı farklı isimle tarif eder; ancak kök problem DSG ailesiyle aynıdır. Audi tarafında doğru varyantı ayırmak kritik önemdedir.',
    link: '/arac/audi/',
    linkLabel: 'Audi şanzıman sayfası',
  },
];

const HIZMET_ADIMLAR = [
  {
    icon: Settings,
    baslik: 'Elektronik Tanı',
    aciklama: 'OBD diagnostik cihazı ile hata kodları okunur, TCU verileri analiz edilir.',
  },
  {
    icon: Wrench,
    baslik: 'Mekanik İnceleme',
    aciklama: 'Şanzıman demonte edilerek kavrama paketi, mechatronik ünitesi ve valf gövdesi kontrol edilir.',
  },
  {
    icon: ShieldCheck,
    baslik: 'Orijinal Parça ile Onarım',
    aciklama: 'OEM veya orijinal eşdeğer parça ile tamir. Kullanılan tüm parçalar belgelenir.',
  },
  {
    icon: Clock,
    baslik: 'Test & Teslim',
    aciklama: 'Tamir sonrası TCU adaptasyonu, road test ve 6 ay işçilik garantisi ile teslim.',
  },
];

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS['dsg-sanziman-tamiri'] ?? [];

const serviceSchema = buildServiceSchema({
  name: 'DSG Şanzıman Tamiri',
  description:
    "Bostancı'da DSG şanzıman tamiri ve bakımı. DQ200, DQ250, DQ381 ve tüm DSG modelleri. " +
    'Sertifikalı teknisyen, orijinal parça, 6 ay garanti.',
  url: 'https://www.erenservis.net/hizmetler/dsg-sanziman-tamiri/',
  minPrice: 14000,
  maxPrice: 90000,
  areaServed: ['Bostancı', 'Kadıköy', 'Üsküdar', 'Maltepe', 'İstanbul'],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net' },
  { name: 'Hizmetler', url: 'https://www.erenservis.net/hizmetler/' },
  { name: 'DSG Şanzıman Tamiri', url: 'https://www.erenservis.net/hizmetler/dsg-sanziman-tamiri/' },
]);

export default function DsgSanzımanTamiriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema) }} />
      {faqItems.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(buildFAQSchema(faqItems)) }} />
      )}
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/images/mechanic-close.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px) saturate(0.6) brightness(0.7)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.72) 100%)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
              <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
                Uzman DSG Servisi
              </span>
            </div>
            <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
              DSG Şanzıman Tamiri{' '}
              <span className="text-brass">Bostancı</span>
            </h1>
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              DQ200, DQ250, DQ381 ve tüm DSG modelleri. Mechatronik ünitesi, kavrama paketi ve
              elektronik kontrol ünitesi tamirinde{' '}
              <strong className="text-text-primary font-medium">15 yılı aşkın deneyim</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2.5 px-7 py-3.5 text-base transition-colors"
              >
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

        {/* DSG Nedir */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DSG Şanzıman Nedir, Nasıl Çalışır?</h2>
            <div className="flex flex-col gap-4 font-saira text-text-secondary leading-relaxed">
              <p>
                DSG (Direct-Shift Gearbox — Direkt Geçişli Şanzıman), Volkswagen Grubu&apos;nun geliştirdiği
                <strong className="text-text-primary font-medium"> çift kavramalı otomatik şanzıman</strong> teknolojisidir.
                Tek kavrama yerine iki ayrı kavrama grubu kullanır: biri tek numaralı vitesleri (1, 3, 5, 7),
                diğeri çift numaralı vitesleri (2, 4, 6, R) taşır. Bir vites dahil iken bir sonraki vites
                zaten hazır durumdadır — geçiş milisaniyeler içinde ve güç kesilmeden gerçekleşir.
              </p>
              <p>
                DSG&apos;nin iki temel varyantı vardır: <strong className="text-text-primary font-medium">DQ200 (kuru çift kavrama)</strong> düşük
                torklu 1.0–1.4 TSI motorlarda, <strong className="text-text-primary font-medium">DQ250 ve DQ381 (ıslak çift kavrama)</strong> ise
                yüksek torklu motorlarda kullanılır. Audi&apos;de bu sistem
                <strong className="text-text-primary font-medium"> S-Tronic</strong> adıyla satılır — donanım neredeyse aynıdır.
              </p>
              <p>
                DSG&apos;nin beyni <strong className="text-text-primary font-medium">mekatronik ünitesi</strong>dir — yazılım, solenoid
                valfler ve hidrolik kontrolü bir arada tutan kompakt bir ECU+hidrolik paket. Sarsıntı, gecikme
                ve vuruntu gibi DSG arızalarının büyük çoğunluğu bu ünitenin kendisinden veya onu besleyen
                basınç sistemiden kaynaklanır.
              </p>
            </div>
          </div>
        </section>

        {/* DQ200 vs DQ250 vs DQ381 */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3 text-center">DQ200 vs DQ250 vs DQ381 Karşılaştırma</h2>
            <p className="font-saira text-text-secondary text-center mb-8 max-w-2xl mx-auto">
              Hangi DSG tipinin arızası farklı yaklaşım gerektirir — motor kodunuz ve vites sayınız hangi gruba girdiğinizi belirler.
            </p>
            <div className="overflow-x-auto border border-border-hairline rounded-xl">
              <table className="w-full font-saira text-sm">
                <thead className="bg-graphite-surface">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-text-primary">Özellik</th>
                    <th className="text-left px-4 py-3 font-semibold text-brass">DQ200</th>
                    <th className="text-left px-4 py-3 font-semibold text-brass">DQ250</th>
                    <th className="text-left px-4 py-3 font-semibold text-brass">DQ381</th>
                  </tr>
                </thead>
                <tbody>
                  {DSG_KARSILASTIRMA.map((row, i) => (
                    <tr key={row.ozellik} className={i % 2 === 0 ? 'bg-graphite-elevated' : 'bg-graphite-surface'}>
                      <td className="px-4 py-3 text-text-primary font-medium">{row.ozellik}</td>
                      <td className="px-4 py-3 text-text-secondary text-xs sm:text-sm">{row.dq200}</td>
                      <td className="px-4 py-3 text-text-secondary text-xs sm:text-sm">{row.dq250}</td>
                      <td className="px-4 py-3 text-text-secondary text-xs sm:text-sm">{row.dq381}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Hizmet Adımları */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-10">Nasıl Çalışıyoruz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HIZMET_ADIMLAR.map((adim, i) => (
                <div key={adim.baslik} className="flex flex-col items-center text-center p-6 rounded-xl bg-graphite-surface border border-border-hairline">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brass/8 text-brass mb-4">
                    <adim.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <span className="font-jetbrains text-[10px] font-bold text-brass uppercase tracking-[0.22em] mb-1">ADIM {i + 1}</span>
                  <h3 className="font-saira font-semibold text-base text-text-primary mb-2">{adim.baslik}</h3>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{adim.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DSG Modeller */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Servis Verdiğimiz DSG Modelleri</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
              Volkswagen Grubu&apos;nun tüm DSG ve S-Tronic şanzıman ailelerinde uzman servis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DSG_MODELLER.map((item) => (
                <div key={item.model} className="p-6 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                  <h3 className="font-saira font-semibold text-base text-text-primary mb-2">{item.model}</h3>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Karar Akışı */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Belirtiye Göre İlk Karar Akışı</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              DSG arızasında doğru karar, semptomu hangi alt sistemin ürettiğini ayırmakla başlar. Biz önce kavrama mı,
              mekatronik mi, yağ-basınç mı sorusunu netleştiriyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {DSG_KARAR_AKISI.map((item) => (
                <div key={item.baslik} className="p-6 rounded-xl bg-graphite-surface border border-border-hairline">
                  <h3 className="font-saira font-semibold text-text-primary mb-3">{item.baslik}</h3>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">{item.aciklama}</p>
                  <Link
                    href={item.link}
                    className="font-saira text-sm font-semibold text-text-primary underline decoration-brass/40 underline-offset-2 hover:decoration-brass transition-colors"
                  >
                    {item.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Belirtiler */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-status-warning-bg border border-status-warning-border/20 mb-5">
                  <AlertTriangle className="w-4 h-4 text-status-warning-label" strokeWidth={2} />
                  <span className="text-xs font-semibold text-status-warning-text">Bu belirtileri görüyorsanız erken gelin</span>
                </div>
                <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DSG Arıza Belirtileri</h2>
                <ul className="flex flex-col gap-3">
                  {BELIRTILER.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-saira text-sm text-text-primary leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
                <h3 className="font-saira font-semibold text-xl text-text-primary mb-3">Ücretsiz Ön Tanı</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-6">
                  Aracınızı getirin, elektronik tanıyı ücretsiz yapalım. DSG arızasını erken tespit
                  etmek, onarım maliyetini önemli ölçüde düşürür.
                </p>
                <a
                  href={PHONE_HREF}
                  className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center justify-center gap-2 px-6 py-3 transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Randevu Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sık Arıza Kodları */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">Sık Karşılaşılan DSG Arıza Kodları</h2>
            <p className="font-saira text-text-secondary mb-8 max-w-2xl">
              OBD tarayıcıda gördüğünüz kod hangi parçanın suçlandığını söyler — ama her kod mekanik arıza
              anlamına gelmez. Bazı kodlar yalnızca elektronik veya yazılım kaynaklıdır. Kod çekmeden önce göstergedeki{' '}
              <Link href="/rehber/uyari-lambasi-semptomlari/" className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors">
                DSG uyarı ışığı ve P–anahtar sembollerinin anlamlarını
              </Link>{' '}
              doğrulamak, hangi sistemin şikâyet ettiğini daraltmanızı sağlar.
            </p>
            <div className="flex flex-col gap-3">
              {ARIZA_KODLARI.map((k) => (
                <div key={k.kod} className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl bg-graphite-elevated border border-border-hairline">
                  <div className="font-jetbrains text-sm font-bold text-brass sm:w-20 shrink-0">{k.kod}</div>
                  <div className="flex-1">
                    <h3 className="font-saira font-semibold text-text-primary text-sm mb-1">{k.ad}</h3>
                    <p className="font-saira text-sm text-text-secondary leading-relaxed">{k.aciklama}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-saira text-xs text-text-secondary mt-6 italic">
              Liste özet geçer — detaylı canlı veri (live data) analizi olmadan arıza kodu tek başına
              kesin teşhis koymaz. Aynı kod farklı araçta farklı parça hatasına işaret edebilir.
            </p>
          </div>
        </section>

        {/* Model Bazlı Senaryolar */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Araç ve Şanzıman Ailesine Göre Senaryolar</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              Aynı “DSG arızası” ifadesi farklı ailelerde farklı maliyet ve çözüm anlamına gelir. Bu yüzden marka ve şanzıman
              varyantını birlikte okuyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DSG_MODEL_SENARYOLARI.map((item) => (
                <div key={item.baslik} className="p-6 rounded-xl bg-graphite-elevated border border-border-hairline">
                  <h3 className="font-saira font-semibold text-text-primary mb-1">{item.baslik}</h3>
                  <p className="font-jetbrains text-xs text-brass mb-3">{item.modeller}</p>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">{item.aciklama}</p>
                  <Link
                    href={item.link}
                    className="font-saira text-sm font-semibold text-text-primary underline decoration-brass/40 underline-offset-2 hover:decoration-brass transition-colors"
                  >
                    {item.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fiyat Şeffaflığı */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8 text-center">DSG Tamiri Fiyat Aralığı</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 rounded-xl bg-graphite-elevated border border-border-hairline">
                <div className="font-jetbrains text-[10px] font-bold text-brass uppercase tracking-[0.2em] mb-2">Hafif</div>
                <h3 className="font-saira font-semibold text-text-primary mb-3">Yağ + Filtre + Adaptasyon</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-3">
                  DQ250/DQ381 ıslak kavrama için 60 bin km periyodik bakım penceresi.
                </p>
                <p className="font-jetbrains text-xs text-text-primary font-semibold">₺ 14.000 – 22.000</p>
              </div>
              <div className="p-6 rounded-xl bg-graphite-elevated border border-brass/30">
                <div className="font-jetbrains text-[10px] font-bold text-brass uppercase tracking-[0.2em] mb-2">Orta</div>
                <h3 className="font-saira font-semibold text-text-primary mb-3">Mekatronik / Basınç Tüpü / Solenoid</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-3">
                  DQ200&apos;de P17BF hata kodu, mekatronik kart veya basınç tüpü onarımı.
                </p>
                <p className="font-jetbrains text-xs text-text-primary font-semibold">₺ 28.000 – 52.000</p>
              </div>
              <div className="p-6 rounded-xl bg-graphite-elevated border border-border-hairline">
                <div className="font-jetbrains text-[10px] font-bold text-brass uppercase tracking-[0.2em] mb-2">Ağır</div>
                <h3 className="font-saira font-semibold text-text-primary mb-3">Kavrama Paketi / Komple Revizyon</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-3">
                  Kavrama aşınması, volant titremesi veya tam demontaj gerektiren arızalar.
                </p>
                <p className="font-jetbrains text-xs text-text-primary font-semibold">₺ 55.000 – 90.000</p>
              </div>
            </div>
            <p className="font-saira text-xs text-text-secondary text-center mt-6 italic max-w-2xl mx-auto">
              Fiyatlar 2026 yılı Bostancı ortalamasıdır, araç modeli ve arıza durumuna göre değişir.
              Kesin fiyat ücretsiz ön tanı sonrasında belirlenir.
            </p>
          </div>
        </section>

        {/* Bakım Periyodu */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DSG Bakım Periyodu</h2>
            <ul className="flex flex-col gap-4 font-saira">
              <li className="flex items-start gap-3">
                <span className="font-jetbrains text-xs font-bold text-brass mt-1 shrink-0">60k</span>
                <span className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-text-primary font-medium">DQ250 / DQ381 — yağ + filtre değişimi.</strong>{' '}
                  Islak kavramalı DSG&apos;de yağ kavrama ile temas halindedir; aşınma metal talaşı yağa karışır.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-jetbrains text-xs font-bold text-brass mt-1 shrink-0">DQ200</span>
                <span className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-text-primary font-medium">Kuru kavrama — yalnız mekatronik yağı 60k&apos;da.</strong>{' '}
                  Kavrama yağlı değildir, sadece hidrolik besleme yağı değişir.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-jetbrains text-xs font-bold text-brass mt-1 shrink-0">80k</span>
                <span className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-text-primary font-medium">Kontrol taraması.</strong>{' '}
                  Hata kodları, kavrama aşınma yüzdesi ve basınç sensörü değerleri ölçülür.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-jetbrains text-xs font-bold text-brass mt-1 shrink-0">120k+</span>
                <span className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-text-primary font-medium">Önleyici kavrama değerlendirmesi.</strong>{' '}
                  DQ200&apos;de bu aralıkta kavrama aşınması kritik seviyeye yaklaşır, adaptasyon verisi izlenmeli.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Müdahale Eşiği */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Ne Zaman Bakım, Ne Zaman Tamir, Ne Zaman Revizyon?</h2>
            <div className="flex flex-col gap-4 font-saira text-text-secondary leading-relaxed">
              <p>
                Hafif senaryoda yağ, filtre ve adaptasyon işlemi yeterli olabilir. Bu genelde ıslak kavramalı DSG ailesinde,
                bakım gecikmiş ama mekanik hasar başlamamış araçlarda görülür.
              </p>
              <p>
                Orta seviyede mekatronik, solenoid veya basınç tüpü odaklı müdahale gerekir. Özellikle DQ200 tarafında
                elektronik ve hidrolik belirtileri mekanik kavrama aşınmasıyla karıştırmamak önemlidir.
              </p>
              <p>
                Ağır senaryoda kavrama paketi, volant veya komple revizyon gündeme gelir. Eğer araçta aynı anda titreme,
                kayma ve hata kodu birlikte varsa, yalnız adaptasyon yapmak sorunu erteleyebilir ama çözmez.
              </p>
            </div>
          </div>
        </section>

        {/* Neden Eren Otomatik Şanzıman */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-10">Neden Eren Otomatik Şanzıman?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { rakam: '15+', etiket: 'Yıl Deneyim', aciklama: 'Sadece DSG ve otomatik şanzıman — genel oto servis değil' },
                { rakam: '6 Ay', etiket: 'Garanti', aciklama: 'Tüm işçilik ve parça değişimlerinde yazılı garanti' },
                { rakam: 'OEM', etiket: 'Orijinal Parça', aciklama: 'VW Grup orijinal veya OE eşdeğer parça kullanımı' },
                { rakam: '0 ₺', etiket: 'Ön Tanı', aciklama: 'Hata kodu okuma ve temel analiz ücretsizdir' },
              ].map((item) => (
                <div key={item.etiket} className="p-6 rounded-xl bg-graphite-elevated border border-border-hairline text-center">
                  <p className="font-saira font-bold text-3xl text-brass mb-1">{item.rakam}</p>
                  <p className="font-jetbrains text-xs font-semibold text-text-primary uppercase tracking-widest mb-2">{item.etiket}</p>
                  <p className="font-saira text-xs text-text-secondary leading-relaxed">{item.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* İlgili Hizmetler */}
        <section className="py-12 bg-graphite-base border-t border-border-hairline">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-lg font-semibold text-text-primary mb-6 text-center">İlgili DSG Hizmetleri</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/hizmetler/dsg-mekatronik-kart/', label: 'Mekatronik Kart' },
                { href: '/hizmetler/dsg-kavrama-degisimi/', label: 'Kavrama Değişimi' },
                { href: '/hizmetler/dsg-basinc-tupu/', label: 'Basınç Tüpü' },
                { href: '/hizmetler/sanziman-bakimi/', label: 'Şanzıman Bakımı' },
                { href: '/hizmetler/dsg-volant-kavrama-paketi/', label: 'Volant + Kavrama' },
                { href: '/rehber/dsg-kayma-vites-atlama/', label: 'DSG Kayma Rehberi' },
                { href: '/rehber/dsg-sanziman-omru-bakimi/', label: 'DSG Ömrü ve Bakımı' },
                { href: '/arac/volkswagen/', label: 'Volkswagen Şanzıman' },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="flex items-center justify-center px-4 py-3 rounded-xl border border-border-hairline text-text-secondary font-saira text-sm font-semibold hover:border-brass hover:text-text-primary transition-colors text-center">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqItems.length > 0 && (
          <section className="py-16 bg-graphite-surface">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8 text-center">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.q} className="p-5 rounded-xl bg-graphite-elevated border border-border-hairline">
                    <h3 className="font-saira font-semibold text-text-primary mb-2">{item.q}</h3>
                    <p className="font-saira text-text-secondary text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Alt CTA */}
        <section className="bg-graphite-base py-14 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">DSG Şanzımanınız İçin Bizi Arayın</h2>
            <p className="font-saira text-text-secondary mb-8">
              Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi–Cumartesi 08:30–18:30
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <Link
                href="/hizmetler/zf-sanziman-tamiri/"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
              >
                ZF Şanzıman Servisi →
              </Link>
            </div>
          </div>
        </section>

    </main>
    </>
  );
}
