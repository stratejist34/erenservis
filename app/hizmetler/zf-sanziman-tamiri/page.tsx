import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, Wrench, Clock, ShieldCheck, Settings } from 'lucide-react';
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
  title: 'ZF Şanzıman Tamiri Bostancı | Eren Otomatik Şanzıman Servisi',
  description:
    'Bostancı\'da ZF şanzıman tamiri ve revizyonu. ZF 8HP, ZF 6HP ve tüm ZF otomatik şanzıman modelleri. BMW, Mercedes, Audi, Land Rover. 6 ay garanti.',
  keywords: [
    'zf şanzıman tamiri',
    'zf şanzıman servisi bostancı',
    'zf 8hp tamiri',
    'zf 6hp tamiri',
    'bmw otomatik şanzıman tamiri',
    'mercedes otomatik şanzıman',
    'zf sanziman revizyonu',
  ],
  alternates: {
    canonical: 'https://www.erenservis.net/hizmetler/zf-sanziman-tamiri/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const ZF_MODELLER = [
  {
    model: 'ZF 8HP (8 ileri otomatik)',
    araclar: 'BMW 3/5/7 Serisi, Audi A4/A6/A8, Alfa Romeo, Land Rover, Maserati',
    desc: 'En yaygın lüks segment şanzıman ailesi. Solenoid arızaları, mekatronik ünitesi, tork konvertörü tamiri.',
  },
  {
    model: 'ZF 6HP (6 ileri otomatik)',
    araclar: 'BMW E46/E60/E90, Audi A6 öncesi nesil, Jaguar, Rolls-Royce',
    desc: 'Uzun ömürlü ancak bakım gerektiren platform. Adaptasyon sıfırlama, şanzıman yağı ve filtre değişimi.',
  },
  {
    model: 'ZF 9HP (9 ileri)',
    araclar: 'Land Rover Discovery Sport, Range Rover Evoque, Jeep Cherokee',
    desc: 'Kompakt SUV segmenti. Valf gövdesi ve solenoid paket tamiri.',
  },
  {
    model: 'ZF Diğer Modeller',
    araclar: 'ZF 5HP, ZF 6HP26, ZF 8HP45/70/75',
    desc: 'Tüm ZF şanzıman ailelerinde tanı, bakım ve revizyon hizmeti verilmektedir.',
  },
];

const BELIRTILER = [
  'Şanzıman vites geçişlerinde sertlik veya sarsıntı',
  '"Şanzıman arızası" veya "Düşük güç modu" uyarısı',
  'Uzun süre viteste kalma veya geç vites alma',
  'Şanzıman yağ sızıntısı (kırmızı yağ lekesi)',
  'Hareket halinde ani güç kesintisi',
  'D konumunda araç hareket etmeme veya gecikme',
];

const HIZMET_ADIMLAR = [
  {
    icon: Settings,
    baslik: 'Elektronik Tanı',
    aciklama: 'ISTA, XENTRY veya evrensel OBD cihazı ile hata kodları ve şanzıman verisi okunur.',
  },
  {
    icon: Wrench,
    baslik: 'Mekanik Revizyon',
    aciklama: 'Tork konvertörü, mekatronik ünitesi, solenoid paketi ve yağ pompası incelenir.',
  },
  {
    icon: ShieldCheck,
    baslik: 'OEM Parça ile Onarım',
    aciklama: 'ZF orijinal veya kalite eşdeğer parça kullanılır. Tüm parçalar belgeli.',
  },
  {
    icon: Clock,
    baslik: 'Adaptasyon & Test',
    aciklama: 'Onarım sonrası TCU adaptasyonu yapılır, yol testi ile doğrulanır.',
  },
];

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS['zf-otomatik'] ?? [];

const serviceSchema = buildServiceSchema({
  name: 'ZF Şanzıman Tamiri',
  description:
    "Bostancı'da ZF şanzıman tamiri ve revizyonu. ZF 8HP, ZF 6HP ve tüm ZF otomatik şanzıman " +
    'modelleri. BMW, Mercedes, Audi, Land Rover. 6 ay garanti.',
  url: 'https://www.erenservis.net/hizmetler/zf-sanziman-tamiri/',
  areaServed: ['Bostancı', 'Kadıköy', 'Üsküdar', 'Maltepe', 'İstanbul'],
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net' },
  { name: 'Hizmetler', url: 'https://www.erenservis.net/hizmetler/' },
  { name: 'ZF Şanzıman Tamiri', url: 'https://www.erenservis.net/hizmetler/zf-sanziman-tamiri/' },
]);

export default function ZfSanzımanTamiriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema) }} />
      <main>

        {/* Hero */}
        <section className="bg-graphite-base pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
              <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
                Uzman ZF Şanzıman Servisi
              </span>
            </div>
            <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
              ZF Şanzıman Tamiri{' '}
              <span className="text-brass">Bostancı</span>
            </h1>
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              ZF 8HP, ZF 6HP ve tüm ZF otomatik şanzıman ailelerinde tamir ve revizyon.
              BMW, Audi, Mercedes, Land Rover ve diğer markalar için{' '}
              <strong className="text-text-primary font-medium">garantili servis</strong>.
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

        {/* Hizmet Adımları */}
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

        {/* ZF Modeller */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Servis Verdiğimiz ZF Modelleri</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
              ZF Friedrichshafen&apos;in lüks ve premium segment için geliştirdiği tüm otomatik şanzıman ailelerinde hizmet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ZF_MODELLER.map((item) => (
                <div key={item.model} className="p-6 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                  <h3 className="font-saira font-semibold text-base text-text-primary mb-1">{item.model}</h3>
                  <p className="font-jetbrains text-xs text-brass mb-2">{item.araclar}</p>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.desc}</p>
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
                <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">ZF Şanzıman Arıza Belirtileri</h2>
                <p className="font-saira text-sm text-text-secondary mb-6">
                  ZF şanzımanlar hassas ve sofistike yapılarıyla uzun ömürlüdür. Ancak erken belirtiler göz ardı edilirse
                  onarım maliyeti katlanarak artar. D konumuna alınca bir–iki saniyeden uzun sürede tepki veren
                  araçlarda{' '}
                  <Link href="/rehber/zf-aisin-gecikme/" className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors">
                    ZF ve Aisin kaynaklı gecikmeli vites geçişi
                  </Link>{' '}
                  rehberimiz mekatronik mi tork konvertör mü ayrıştırmayı gösterir.
                </p>
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
                <h3 className="font-saira font-semibold text-xl text-text-primary mb-3">Ücretsiz ZF Tanı</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-6">
                  ZF şanzıman arızasında erken tanı kritiktir. Aracınızı getirin, elektronik tanıyı
                  ücretsiz yapalım ve size net maliyet bilgisi verelim.
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

        {/* Alt CTA */}
        <section className="bg-graphite-base py-14 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">ZF Şanzımanınız İçin Bizi Arayın</h2>
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
                href="/hizmetler/dsg-sanziman-tamiri/"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
              >
                DSG Şanzıman Servisi →
              </Link>
            </div>
          </div>
        </section>

    </main>
    </>
  );
}
