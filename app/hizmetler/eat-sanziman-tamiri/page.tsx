import type { Metadata } from 'next';
import { CheckCircle2, Clock, MessageCircle, Phone, Settings, ShieldCheck, Wrench } from 'lucide-react';
import Link from 'next/link';

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

export default function EATSanzimanTamiriPage() {
  return (
    <main>
      <section className="hero-deep pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              EAT6 / EAT8 Uzmanı
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            EAT6 ve EAT8{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Şanzıman Tamiri
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Peugeot, Citroen, Opel ve Ford EAT şanzımanlarında uzman revizyon.
            Valf gövdesi, mekatronik onarım, tork konvertörü ve <strong className="text-hero-muted font-medium">garantili işçilik</strong>.
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

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-content-text text-center mb-10">EAT Revizyon Sürecimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIZMET_ADIMLAR.map((adim, index) => (
              <div key={adim.baslik} className="flex flex-col items-center text-center p-6 rounded-2xl bg-content-secondary border border-content-border">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                  <adim.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-accent mb-1">ADIM {index + 1}</span>
                <h3 className="text-content-text font-semibold text-base mb-2">{adim.baslik}</h3>
                <p className="text-content-muted text-sm leading-relaxed">{adim.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-content-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-content-text text-center mb-3">Servis Verdiğimiz EAT Tipleri</h2>
          <p className="text-content-muted text-center mb-10 max-w-xl mx-auto">
            EAT6 (TF-80SC) ve EAT8 (TG-81SC) - PSA ve Ford gruplarında yaygın kullanılan tam otomatik aile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SANZIMAN_TURLERI.map((item) => (
              <div key={item.tip} className="p-6 rounded-2xl bg-white border border-content-border shadow-sm">
                <h3 className="text-content-text font-semibold text-base mb-1">{item.tip}</h3>
                <p className="text-xs font-medium text-accent mb-2">{item.markalar}</p>
                <p className="text-content-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 p-7 rounded-2xl bg-content-secondary border border-content-border">
              <h3 className="text-content-text font-bold text-lg mb-3">EAT Arıza Belirtileri</h3>
              <p className="text-content-muted text-sm leading-relaxed mb-4">
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
                  <li key={item} className="flex items-center gap-2 text-sm text-content-text">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-surface-0 rounded-2xl p-7 text-center flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-xl mb-3">Ücretsiz Ön Tanı</h3>
                <p className="text-fg-muted text-sm leading-relaxed mb-6">
                  EAT şanzımanınızın durumunu önce inceleyelim. Valf gövdesi mi, mekatronik mi revizyon gerektiğini net maliyet tahmini ile açıklayalım.
                </p>
              </div>
              <a href={PHONE_HREF} className="btn-premium flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold">
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Randevu Al
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-deep py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-hero-text mb-4">EAT Şanzıman için Bizi Arayın</h2>
          <p className="text-hero-muted mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 - Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="btn-premium flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/hizmetler/aisin-sanziman-tamiri/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all text-sm"
            >
              Diğer Aisin Servisi &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
