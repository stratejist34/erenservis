import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench, Clock, ShieldCheck, Settings } from 'lucide-react';
import Link from 'next/link';
import {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  schemaToString,
} from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'CVT Şanzıman Tamiri Bostancı | Resetleme & Revizyon | Eren Servis',
  description:
    'Bostancı\'da CVT şanzıman tamiri, resetleme ve revizyonu. Nissan JATCO, Toyota K310, Honda, Hyundai IVT. Metal kayış, yağ değişimi ve elektronik kalibrasyon. 6 ay garanti.',
  keywords: [
    'cvt şanzıman tamiri',
    'cvt şanzıman resetleme',
    'cvt şanzıman servisi bostancı',
    'nissan cvt tamiri',
    'toyota cvt şanzıman',
    'jatco cvt',
    'cvt kayış değişimi',
    'cvt yağ değişimi',
  ],
  alternates: {
    canonical: 'https://www.erenservis.net/hizmetler/cvt-sanziman-tamiri/',
  },
  openGraph: {
    title: 'CVT Şanzıman Tamiri Bostancı | Eren Servis',
    description: 'JATCO, Aisin, Toyota, Honda CVT şanzıman resetleme, kayış değişimi ve revizyonu. 6 ay garanti.',
    url: 'https://www.erenservis.net/hizmetler/cvt-sanziman-tamiri/',
    images: [{ url: 'https://www.erenservis.net/og-image.jpg', width: 1200, height: 630 }],
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const CVT_MARKALAR = [
  {
    marka: 'Nissan / Infiniti',
    model: 'Juke, Qashqai, X-Trail, Note, Micra',
    desc: 'Nissan JATCO CVT (JF010, JF011, JF015E, RE0F10A) — kayış aşınması, yağ kirlenmesi, solenoid arızaları.',
  },
  {
    marka: 'Toyota',
    model: 'Corolla, Auris, CH-R, Yaris, RAV4 Hybrid',
    desc: 'Toyota K310/K313/K114 CVT ve e-CVT hibrit modellerde yağ değişimi, filtre temizliği, TCU kalibrasyon.',
  },
  {
    marka: 'Honda',
    model: 'Civic, HR-V, Jazz, CR-V',
    desc: 'Honda CVT titremesi, sürüklenme hissi ve yüksek devir sorularında revizyon. HCF-2 yağ spesifikasyonu.',
  },
  {
    marka: 'Hyundai / Kia',
    model: 'i20, i30, Tucson, Sportage, Rio',
    desc: 'Hyundai ve Kia IVT (Smart Stream) şanzımanlarda kayış aşınması, yağ değişimi ve elektronik arıza tespiti.',
  },
  {
    marka: 'Mitsubishi',
    model: 'ASX, Eclipse Cross, Lancer',
    desc: 'JATCO JF011E CVT ailesi — kayış, konik kasnak ve yağ sistemi revizyonu.',
  },
  {
    marka: 'Subaru / Diğer',
    model: 'Lineartronic, Audi Multitronic',
    desc: 'Subaru Lineartronic ve eski Audi Multitronic (01J) dahil tüm CVT ailelerine bakım.',
  },
];

const BELIRTILER = [
  'Hızlanırken motor devri aniden yükseliyor ama araç hızlanmıyor (kayma hissi)',
  'Düşük hızda titreme veya sarsıntı — primer/sekonder puli hasar belirtisi',
  'Yokuş çıkışında güç kaybı veya geriye kayma',
  '"CVT arızası" veya "Şanzıman kontrol" uyarı ışığı',
  'Şanzıman fazla ısınıyor, yanmış yağ kokusu',
  'CVT yağ rengi karardı (normalde yeşil/amber olmalı)',
  'Vites kolu P–R–D arası geçişte gecikme veya sarsıntı',
];

const HIZMET_ADIMLAR = [
  { icon: Settings, baslik: 'Elektronik Tanı', aciklama: 'Hata kodları ve CVT veri akışı incelenir. Kayış/zincir durumu, yağ sıcaklığı ve hat basıncı ölçülür.' },
  { icon: Wrench, baslik: 'Mekanik İnceleme', aciklama: 'Gerekirse CVT demonte edilerek metal kayış/zincir, konik puliler ve yağ pompası kontrol edilir.' },
  { icon: ShieldCheck, baslik: 'OEM Parça ile Onarım', aciklama: 'Marka orijinal veya eşdeğer kalite parça. CVT yağı daima marka spesifikasyonuna göre seçilir.' },
  { icon: Clock, baslik: 'Resetleme & Test', aciklama: 'Onarım sonrası TCU öğrenme sıfırlaması, adaptasyon ve yol testi yapılır — 6 ay garanti.' },
];

const CVT_YAG_TABLOSU = [
  { marka: 'Nissan / Infiniti', yag: 'NS-2 / NS-3', not: 'JF010 → NS-2, JF011/JF015E → NS-3' },
  { marka: 'Toyota', yag: 'CVT Fluid TC / FE', not: 'K310/K313 → TC; hibrit e-CVT → FE' },
  { marka: 'Honda', yag: 'HCF-2', not: 'Eski HCF-1 yerine HCF-2 kullanılmalı' },
  { marka: 'Hyundai / Kia', yag: 'SP-IV / CVT-1', not: 'IVT modellerde SP-IV spec — muadil risklidir' },
  { marka: 'Subaru', yag: 'Lineartronic High-Torque CVTF', not: 'Marka onaylı dışı yağ garanti iptali' },
  { marka: 'Mitsubishi', yag: 'Dia Queen CVTF-J1', not: 'JATCO tabanlı modellerde' },
];

const CVT_ARIZA_NEDENLERI = [
  {
    baslik: 'Yağ bozulması ve yanlış spesifikasyon',
    aciklama:
      'CVT şanzımanlarda ilk kırılma çoğu zaman mekanik değil, yağ kalitesinden başlar. Yanlış viskozite veya geç kalmış değişim metal kayışın puli yüzeyinde tutunmasını bozar.',
  },
  {
    baslik: 'Solenoid ve valf gövdesi basınç hataları',
    aciklama:
      'Hat basıncı düştüğünde araçta kayma, yüksek devir ve gecikmeli tepki başlar. Bu aşama doğru teşhis edilirse komple revizyon yerine valf gövdesi tarafında çözüm mümkün olabilir.',
  },
  {
    baslik: 'Metal kayış / zincir ve puli aşınması',
    aciklama:
      'İleri aşamada kayış veya zincir yüzeyi parlatır, konik kasnakta iz bırakır. Bu durumda yalnız resetleme yapmak sorunu gizler ama çözmez.',
  },
];

const MODEL_BAZLI_SENARYOLAR = [
  {
    baslik: 'Nissan JATCO',
    modeller: 'Qashqai, Juke, X-Trail, Micra',
    durum:
      'Yüksek devir, çekiş düşüşü ve ısınma uyarısı en sık gördüğümüz kombinasyon. Özellikle gecikmiş NS-3 yağ değişimi, JF015E ve JF011E ailesinde maliyeti büyütür.',
    link: '/rehber/cvt-kayma/',
    linkLabel: 'CVT kayma rehberi',
  },
  {
    baslik: 'Toyota CVT / e-CVT',
    modeller: 'Corolla, C-HR, Yaris, Auris',
    durum:
      'Toyota tarafında her titreme mekanik revizyon anlamına gelmez. Kalibrasyon, yağ kalitesi ve hibrit kullanım karakteri birlikte değerlendirilmelidir.',
    link: '/arac/toyota/',
    linkLabel: 'Toyota şanzıman sayfası',
  },
  {
    baslik: 'Honda CVT',
    modeller: 'Civic, HR-V, Jazz, CR-V',
    durum:
      'Kalkış titremesi ve sabit hızda devir dalgalanması HCF-2 dışı yağ kullanımında sık görülür. Erken bakım ile büyük revizyon çoğu zaman ötelenebilir.',
    link: '/rehber/otomatik-sanziman-sarsinti/',
    linkLabel: 'Sarsıntı rehberi',
  },
  {
    baslik: 'Hyundai / Kia IVT',
    modeller: 'i20, i30, Tucson, Rio, Sportage',
    durum:
      'IVT sistemlerinde yazılım-adaptasyon ile mekanik arızayı ayırmak kritik. Kullanıcı şikâyeti yalnız “çekiş düştü” gibi genel olabilir; canlı veri olmadan karar verilmemeli.',
    link: '/arac/hyundai/',
    linkLabel: 'Hyundai şanzıman sayfası',
  },
];

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS['cvt-sanziman'] ?? [];

const serviceSchema = buildServiceSchema({
  name: 'CVT Şanzıman Tamiri ve Resetleme',
  description:
    "Bostancı'da CVT şanzıman tamiri, resetleme ve revizyonu. Nissan JATCO, Toyota, Honda, Hyundai, " +
    'Kia CVT şanzıman metal kayış/zincir değişimi, yağ ve elektronik kalibrasyon. 6 ay garanti.',
  url: 'https://www.erenservis.net/hizmetler/cvt-sanziman-tamiri/',
  minPrice: 8500,
  maxPrice: 65000,
  areaServed: ['Bostancı', 'Kadıköy', 'Üsküdar', 'Maltepe', 'İstanbul'],
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net' },
  { name: 'Hizmetler', url: 'https://www.erenservis.net/hizmetler/' },
  { name: 'CVT Şanzıman Tamiri', url: 'https://www.erenservis.net/hizmetler/cvt-sanziman-tamiri/' },
]);

export default function CvtSanzımanTamiriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema) }} />
      {faqItems.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema) }} />
      <main>

        {/* Hero */}
        <section className="bg-graphite-base pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
              <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
                CVT Uzman Servisi
              </span>
            </div>
            <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
              CVT Şanzıman Tamiri{' '}
              <span className="text-brass">Bostancı</span>
            </h1>
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              Nissan, Toyota, Honda, Hyundai, Kia ve tüm CVT şanzımanlarda kayış/zincir değişimi,
              resetleme ve elektronik kalibrasyon.{' '}
              <strong className="text-text-primary font-medium">6 ay garanti.</strong>
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

        {/* CVT Nedir */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">CVT Şanzıman Nedir, Nasıl Çalışır?</h2>
            <div className="flex flex-col gap-4 font-saira text-text-secondary leading-relaxed">
              <p>
                CVT (Continuously Variable Transmission — Sürekli Değişken Şanzıman), sabit vites dişlileri
                yerine iki konik puli arasında gerilmiş bir <strong className="text-text-primary font-medium">metal kayış veya zincir</strong> ile
                çalışır. Pulilerin çapı elektronik kontrol ünitesi tarafından değiştirilerek çevrim oranı
                sürekli ayarlanır — bu yüzden vites geçişi hissedilmez, motor her zaman en verimli devirde tutulur.
              </p>
              <p>
                CVT&apos;nin en büyük avantajı yakıt ekonomisi ve yumuşak sürüş; en büyük zayıflığı ise
                <strong className="text-text-primary font-medium"> yağ kalitesine aşırı duyarlılık</strong>.
                Kirli veya yanlış spesifikasyonlu yağ metal kayış ile puli yüzeyi arasındaki sürtünme katsayısını
                bozar, kayma başlar ve aşınma hızlanır. Bu nedenle CVT şanzımanlarda yağ değişimi,
                konvansiyonel otomatiklerden <strong className="text-text-primary font-medium">çok daha kritiktir</strong>.
              </p>
              <p>
                Eren Servis&apos;te JATCO (Nissan/Mitsubishi), Toyota K-serisi, Honda, Hyundai IVT ve Subaru
                Lineartronic dahil tüm CVT ailelerinde tanı, resetleme ve revizyon hizmeti veriyoruz.
                CVT&apos;de vuruntu tipik bir belirti değildir; eğer vites geçişlerinde darbe hissediyorsanız{' '}
                <Link href="/rehber/cvt-vuruntu/" className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors">
                  CVT&apos;de vuruntu neden olur
                </Link>{' '}
                başlıklı rehberimiz, bunun kontrol ünitesi mi yoksa mekanik bir uyarı mı olduğunu ayırt etmenize yardım eder.
              </p>
            </div>
          </div>
        </section>

        {/* Adımlar */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-10">Servis Sürecimiz</h2>
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

        {/* Markalar */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Servis Verdiğimiz CVT Markalar</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
              JATCO, Aisin ve marka özgün CVT şanzımanların tamamına bakım ve revizyon hizmeti verilmektedir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CVT_MARKALAR.map((item) => (
                <div key={item.marka} className="p-5 rounded-xl bg-graphite-elevated border border-border-hairline shadow-sm">
                  <h3 className="font-saira font-semibold text-base text-text-primary mb-1">{item.marka}</h3>
                  <p className="font-jetbrains text-xs text-brass mb-2">{item.model}</p>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CVT Yağ Rehberi */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">Markaya Göre CVT Yağ Rehberi</h2>
            <p className="font-saira text-text-secondary mb-8 max-w-2xl">
              CVT şanzımanlar yanlış yağla çalıştırıldığında metal kayış ve puli yüzeyine kalıcı hasar verir.
              Marka onaylı yağ kullanımı garanti süresince zorunludur.
            </p>
            <div className="overflow-x-auto border border-border-hairline rounded-xl">
              <table className="w-full font-saira text-sm">
                <thead className="bg-graphite-surface">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-text-primary">Marka</th>
                    <th className="text-left px-4 py-3 font-semibold text-text-primary">Yağ Spesifikasyonu</th>
                    <th className="text-left px-4 py-3 font-semibold text-text-primary hidden sm:table-cell">Not</th>
                  </tr>
                </thead>
                <tbody>
                  {CVT_YAG_TABLOSU.map((row, i) => (
                    <tr key={row.marka} className={i % 2 === 0 ? 'bg-graphite-elevated' : 'bg-graphite-surface'}>
                      <td className="px-4 py-3 text-text-primary font-medium">{row.marka}</td>
                      <td className="px-4 py-3 text-brass font-jetbrains text-xs">{row.yag}</td>
                      <td className="px-4 py-3 text-text-secondary text-xs hidden sm:table-cell">{row.not}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-saira text-xs text-text-secondary mt-4 italic">
              Üretici spesifikasyonu dışındaki muadil yağlar kayış hasarını hızlandırır ve
              revizyon maliyetini 4–5 katına çıkarabilir.
            </p>
          </div>
        </section>

        {/* CVT Resetleme */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">CVT Resetleme (TCU Adaptasyon) Nedir?</h2>
            <div className="flex flex-col gap-4 font-saira text-text-secondary leading-relaxed">
              <p>
                CVT şanzımanlar kullanıldıkça TCU (şanzıman kontrol ünitesi) sürücü alışkanlıklarına ve kavrama
                aşınmasına göre öğrenme değerleri biriktirir. Kavrama değişimi, yağ değişimi veya solenoid tamiri
                sonrası bu eski değerler yanlış noktalarda tepki vermeye başlar —
                <strong className="text-text-primary font-medium"> sarsıntı, gecikme ve yükseklik kaybı</strong> gibi
                belirtiler ortaya çıkar.
              </p>
              <p>
                <strong className="text-text-primary font-medium">CVT resetleme</strong>, TCU&apos;nun
                bu adaptasyon verilerini fabrika değerine döndürüp yeni bir öğrenme döngüsü başlatmasıdır.
                Nissan JATCO&apos;da &quot;CVT Conform&quot;, Toyota&apos;da &quot;Reset Memory&quot; adıyla
                yapılan işlem, OBD tarayıcı üzerinden yaklaşık 20–30 dakikada tamamlanır. İşlem sonrası
                40–60 km&apos;lik bir adaptasyon yol testi gereklidir.
              </p>
              <p>
                Resetleme <strong className="text-text-primary font-medium">her CVT arızasını çözmez</strong> —
                mekanik bir hasar varsa (kayış, puli, solenoid) önce o giderilmeli, resetleme en son adımda
                yapılmalıdır. Bu sıralamaya uyulmazsa yeni öğrenilen değerler yine yanlış davranışlar üretir.
              </p>
            </div>
          </div>
        </section>

        {/* Arıza Nedenleri */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">CVT Arızasının Kök Nedenleri</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              CVT tarafında en pahalı hata, semptomu doğru okuyamadan “şanzıman komple bitmiş” kararı vermektir.
              Biz önce yağ, basınç ve mekanik aşınma seviyesini birbirinden ayırıyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {CVT_ARIZA_NEDENLERI.map((item) => (
                <div key={item.baslik} className="p-6 rounded-xl bg-graphite-surface border border-border-hairline">
                  <h3 className="font-saira font-semibold text-text-primary mb-3">{item.baslik}</h3>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.aciklama}</p>
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
                  <span className="text-xs font-semibold text-status-warning-text">Erken müdahale maliyeti düşürür</span>
                </div>
                <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">CVT Arıza Belirtileri</h2>
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
                <h3 className="font-saira font-semibold text-xl text-text-primary mb-3">CVT için Önemli Uyarı</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-6">
                  CVT şanzımanlar yağ kalitesine son derece duyarlıdır. Marka dışı veya süresi
                  dolmuş CVT yağı kayış hasarını hızlandırır. Düzenli CVT yağı değişimi
                  revizyon maliyetinin çok altındadır.
                </p>
                <a href={PHONE_HREF}
                  className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center justify-center gap-2 px-6 py-3 transition-colors">
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Randevu Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Karar Rehberi: Tamir mi Değişim mi */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8 text-center">Tamir mi, Revizyon mu, Değişim mi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 rounded-xl bg-graphite-elevated border border-border-hairline">
                <div className="font-jetbrains text-[10px] font-bold text-brass uppercase tracking-[0.2em] mb-2">Hafif</div>
                <h3 className="font-saira font-semibold text-text-primary mb-3">Yağ Değişimi + Resetleme</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-3">
                  Titreme yeni başladı, hata kodu yok, yağ karardı. 40–60 bin km periyodik bakım penceresinde.
                </p>
                <p className="font-jetbrains text-xs text-text-primary font-semibold">₺ 8.500 – 14.000</p>
              </div>
              <div className="p-6 rounded-xl bg-graphite-elevated border border-brass/30">
                <div className="font-jetbrains text-[10px] font-bold text-brass uppercase tracking-[0.2em] mb-2">Orta</div>
                <h3 className="font-saira font-semibold text-text-primary mb-3">Solenoid / Valf Gövdesi Revizyonu</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-3">
                  Hata kodu var, hat basıncı düşük, spesifik bir viteste kayma. Mekanik sağlam.
                </p>
                <p className="font-jetbrains text-xs text-text-primary font-semibold">₺ 18.000 – 32.000</p>
              </div>
              <div className="p-6 rounded-xl bg-graphite-elevated border border-border-hairline">
                <div className="font-jetbrains text-[10px] font-bold text-brass uppercase tracking-[0.2em] mb-2">Ağır</div>
                <h3 className="font-saira font-semibold text-text-primary mb-3">Komple Revizyon / Şanzıman Değişimi</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-3">
                  Kayış kopmuş, puli yüzeyi derin çizilmiş, metal talaş yağda. Erken belirtiler görmezden gelinmiş.
                </p>
                <p className="font-jetbrains text-xs text-text-primary font-semibold">₺ 42.000 – 65.000</p>
              </div>
            </div>
            <p className="font-saira text-xs text-text-secondary text-center mt-6 italic max-w-2xl mx-auto">
              Fiyatlar 2026 yılı Bostancı ortalamasıdır, araç modeline ve arıza durumuna göre değişir.
              Kesin fiyat ücretsiz ön tanı sonrasında belirlenir.
            </p>
          </div>
        </section>

        {/* Model Bazlı Karar Notları */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Marka ve Model Bazlı CVT Karar Notları</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              Aynı “kayma” şikâyeti Nissan JATCO’da farklı, Toyota e-CVT’de farklı anlama gelebilir.
              Bu yüzden teşhisi şanzıman ailesine göre yapıyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {MODEL_BAZLI_SENARYOLAR.map((item) => (
                <div key={item.baslik} className="p-6 rounded-xl bg-graphite-elevated border border-border-hairline">
                  <h3 className="font-saira font-semibold text-text-primary mb-1">{item.baslik}</h3>
                  <p className="font-jetbrains text-xs text-brass mb-3">{item.modeller}</p>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">{item.durum}</p>
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

        {/* Bakım Periyodu */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">CVT Bakım Periyodu</h2>
            <ul className="flex flex-col gap-4 font-saira">
              <li className="flex items-start gap-3">
                <span className="font-jetbrains text-xs font-bold text-brass mt-1 shrink-0">40–60k</span>
                <span className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-text-primary font-medium">CVT yağ + filtre değişimi.</strong>{' '}
                  Üreticiler &quot;ömürlük yağ&quot; dese de gerçek hayatta İstanbul trafiğinde bu mesafe aşılmamalı.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-jetbrains text-xs font-bold text-brass mt-1 shrink-0">80k</span>
                <span className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-text-primary font-medium">Kontrol taraması.</strong>{' '}
                  Hat basıncı, kayış kayma yüzdesi ve TCU öğrenme değerleri ölçülür.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-jetbrains text-xs font-bold text-brass mt-1 shrink-0">120–150k</span>
                <span className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-text-primary font-medium">Önleyici revizyon penceresi.</strong>{' '}
                  Belirti olmasa bile solenoid temizliği ve yağ panı inspection yapılmalı.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Ne Zaman Güçlendirilmiş İşlem Gerekir */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Hangi Durumda Resetleme Yetmez?</h2>
            <div className="flex flex-col gap-4 font-saira text-text-secondary leading-relaxed">
              <p>
                CVT resetleme doğru vakada çok faydalıdır; ama metal talaşı oluşmuşsa, puli yüzeyi çizilmişse veya hat
                basıncı ciddi biçimde düşmüşse tek başına çözüm olmaz. Bu noktada resetleme sadece semptomu kısa süreliğine
                yumuşatır.
              </p>
              <p>
                Özellikle şu üç durumda mekanik inceleme zorunlu hale gelir:
                sürekli yüksek devirde ilerleme, geri viteste belirgin gecikme ve yağ karterinde metal partikül görülmesi.
                Bu belirtiler varsa doğrudan{' '}
                <Link
                  href="/rehber/otomatik-sanziman-gecikme/"
                  className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors"
                >
                  gecikme semptom rehberine
                </Link>{' '}
                ve ardından servis kontrolüne geçmek daha sağlıklıdır.
              </p>
              <p>
                Amacımız her arızayı “komple revizyon” diye satmak değil; hafif, orta ve ağır senaryoları ayırıp mümkün olan
                en doğru müdahaleyi seçmektir. Bu da maliyetin gereksiz büyümesini önler.
              </p>
            </div>
          </div>
        </section>

        {/* Neden Eren Servis */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-10">Neden Eren Servis?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { rakam: '15+', etiket: 'Yıl Deneyim', aciklama: 'Sadece otomatik şanzıman — genel oto servis değil' },
                { rakam: '6 Ay', etiket: 'Garanti', aciklama: 'Tüm işçilik ve parça değişimlerinde yazılı garanti' },
                { rakam: 'OEM', etiket: 'Orijinal Yağ', aciklama: 'Üretici spesifikasyonuna uygun CVT yağı' },
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
            <h2 className="font-saira text-lg font-semibold text-text-primary mb-6 text-center">İlgili Hizmetler ve Rehberler</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/hizmetler/dsg-sanziman-tamiri/', label: 'DSG Şanzıman Tamiri' },
                { href: '/hizmetler/aisin-sanziman-tamiri/', label: 'Aisin Şanzıman' },
                { href: '/rehber/cvt-kayma/', label: 'CVT Kayma Rehberi' },
                { href: '/rehber/cvt-vuruntu/', label: 'CVT Vuruntu Rehberi' },
                { href: '/rehber/cvt-ariza-lambasi/', label: 'CVT Arıza Lambası' },
                { href: '/arac/toyota/', label: 'Toyota Şanzıman Servisi' },
                { href: '/arac/nissan/', label: 'Nissan Şanzıman Servisi' },
                { href: '/blog/en-iyi-sanziman-yagi/', label: 'Şanzıman Yağı Rehberi' },
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
            <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">CVT Şanzımanınız İçin Bizi Arayın</h2>
            <p className="font-saira text-text-secondary mb-8">
              Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi–Cumartesi 08:30–18:30
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={PHONE_HREF}
                className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <Link href="/hizmetler/dsg-sanziman-tamiri/"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm">
                DSG Şanzıman Servisi →
              </Link>
            </div>
          </div>
        </section>

    </main>
    </>
  );
}
