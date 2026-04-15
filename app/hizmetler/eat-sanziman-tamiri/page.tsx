import type { Metadata } from 'next';
import { CheckCircle2, Clock, MessageCircle, Phone, Settings, ShieldCheck, Wrench } from 'lucide-react';
import Link from 'next/link';
import {
  buildServiceSchema,
  buildBreadcrumbSchema,
  schemaToString,
} from '@/lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'EAT6 / EAT8 Şanzıman Tamiri Bostancı | Peugeot, Citroen, Ford',
  description:
    'EAT6 ve EAT8 şanzıman tamiri, valf gövdesi revizyonu, mekatronik onarım. Peugeot, Citroen, Opel, Ford modellerinde uzman servis. Garantili işçilik.',
  keywords: [
    'eat6 şanzıman tamiri',
    'eat8 şanzıman tamiri',
    'eat şanzıman arızası',
    'peugeot eat6 tamiri',
    'citroen eat8 tamiri',
    'ford otomatik şanzıman tamiri',
    'eat mekatronik onarım',
  ],
  alternates: {
    canonical: 'https://erenservis.net/hizmetler/eat-sanziman-tamiri/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const SANZIMAN_TURLERI = [
  {
    tip: 'EAT6 (Aisin TF-80SC)',
    markalar: 'Peugeot 308, 508, 3008 / Citroen C4, C5 / Ford Mondeo',
    desc: '6 ileri tam otomatik. Valf gövdesi aşınması, tork konvertörü kilitleme sorunları ve adaptasyon hatalarında uzman revizyon.',
  },
  {
    tip: 'EAT8 (Aisin TG-81SC)',
    markalar: 'Peugeot 3008, 5008 / Citroen C5 Aircross / DS / Opel',
    desc: '8 ileri yeni nesil tam otomatik. İleri düzey elektronik kontrol, vites geçiş kalitesi optimizasyonu ve mekatronik onarım.',
  },
  {
    tip: 'EAT6 için Valf Gövdesi',
    markalar: 'Tüm EAT6 şanzımanlar',
    desc: 'EAT6\'da en sık arıza kaynağı. Zamanla aşınan valf gövdesi orijinal veya geliştirilmiş versiyonla değiştirilir.',
  },
  {
    tip: 'EAT Mekatronik Onarım',
    markalar: 'EAT6 ve EAT8',
    desc: 'Elektronik kontrol ünitesi (ECU) arızaları, sensör kalibrasyonu ve yazılım güncellemeleri.',
  },
] as const;

const HIZMET_ADIMLAR = [
  { icon: Settings, baslik: 'Tanı & Ölçüm', aciklama: 'EAT özel OBD taraması, yağ basıncı ve vites geçiş testleri ile arıza kaynağı belirlenir.' },
  { icon: Wrench, baslik: 'Tam Demontaj', aciklama: 'Şanzıman komple sökülerek valf gövdesi, tork konvertörü ve mekatronik birim incelenir.' },
  { icon: ShieldCheck, baslik: 'Revizyon & Yenileme', aciklama: 'Valf gövdesi, o-ringler, tork konvertörü ve gerekirse mekatronik birlikte değerlendirilir.' },
  { icon: Clock, baslik: 'Adaptasyon & Test', aciklama: 'Fabrika adaptasyon prosedürü ve kapsamlı yol testi ile vites kalitesi doğrulanır.' },
] as const;

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: 'EAT6 / EAT8 Şanzıman Tamiri',
  description:
    'EAT6 ve EAT8 şanzıman tamiri, valf gövdesi revizyonu, mekatronik onarım. ' +
    'Peugeot, Citroen, Opel, Ford modellerinde uzman servis. Garantili işçilik.',
  url: 'https://erenservis.net/hizmetler/eat-sanziman-tamiri/',
  areaServed: ['Bostancı', 'Kadıköy', 'Üsküdar', 'Maltepe', 'İstanbul'],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://erenservis.net' },
  { name: 'Hizmetler', url: 'https://erenservis.net/hizmetler/' },
  { name: 'EAT Şanzıman Tamiri', url: 'https://erenservis.net/hizmetler/eat-sanziman-tamiri/' },
]);

export default function EATSanzimanTamiriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema) }} />
      <main>
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              EAT6 / EAT8 Uzmanı
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            EAT6 ve EAT8{' '}
            <span className="text-brass">Şanzıman Tamiri</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Peugeot, Citroen, Opel ve Ford EAT şanzımanlarında uzman revizyon.
            Valf gövdesi, mekatronik onarım, tork konvertörü ve <strong className="text-text-primary font-medium">garantili işçilik</strong>.
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

      <section className="py-16 bg-graphite-base">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-10">EAT Revizyon Sürecimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIZMET_ADIMLAR.map((adim, index) => (
              <div key={adim.baslik} className="flex flex-col items-center text-center p-6 rounded-xl bg-graphite-surface border border-border-hairline">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brass/8 text-brass mb-4">
                  <adim.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="font-jetbrains text-[10px] font-bold text-brass uppercase tracking-[0.22em] mb-1">ADIM {index + 1}</span>
                <h3 className="font-saira font-semibold text-base text-text-primary mb-2">{adim.baslik}</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed">{adim.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-graphite-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Servis Verdiğimiz EAT Tipleri</h2>
          <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
            EAT6 (TF-80SC) ve EAT8 (TG-81SC) - PSA ve Ford gruplarında yaygın kullanılan tam otomatik aile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SANZIMAN_TURLERI.map((item) => (
              <div key={item.tip} className="p-6 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                <h3 className="font-saira font-semibold text-base text-text-primary mb-1">{item.tip}</h3>
                <p className="font-jetbrains text-xs text-brass mb-2">{item.markalar}</p>
                <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-graphite-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 p-7 rounded-xl bg-graphite-surface border border-border-hairline">
              <h3 className="font-saira font-semibold text-lg text-text-primary mb-3">EAT Arıza Belirtileri</h3>
              <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">
                EAT6 ve EAT8&apos;de sık karşılaşılan arıza işaretleri. Erken teşhis maliyeti düşürür:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'Vites geçişlerinde sertlik ve vuruntu',
                  '2\'den 3\'e geçişte takılma',
                  'R viteste gecikme veya zorlanma',
                  'Yağ basıncı düşüklüğü uyarısı',
                  'Adaptasyon hatası ve sarsıntı',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-saira text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-brass shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-graphite-elevated border border-border-subtle rounded-xl p-7 text-center flex flex-col justify-between">
              <div>
                <h3 className="font-saira font-semibold text-xl text-text-primary mb-3">Ücretsiz Ön Tanı</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-6">
                  EAT şanzımanınızın durumunu önce inceleyelim. Valf gövdesi mi, mekatronik mi revizyon gerektiğini net maliyet tahmini ile açıklayalım.
                </p>
              </div>
              <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center justify-center gap-2 px-6 py-3 transition-colors">
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Randevu Al
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">EAT Şanzıman için Bizi Arayın</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 - Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/hizmetler/aisin-sanziman-tamiri/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
            >
              Diğer Aisin Servisi &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
