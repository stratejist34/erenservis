import type { Metadata } from 'next';
import { CheckCircle2, Clock, MessageCircle, Phone, Settings, ShieldCheck, Wrench } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Aisin Şanzıman Tamiri Bostancı | Toyota, Peugeot, Volvo',
  description:
    'Aisin şanzıman tamiri ve revizyonu. Toyota, Peugeot, Citroen, Opel, Volvo modellerinde valf gövdesi, tork konvertörü, yağ basıncı onarımı. Garantili işçilik.',
  keywords: [
    'aisin şanzıman tamiri',
    'aisin şanzıman arızası',
    'toyota şanzıman tamiri',
    'peugeot şanzıman tamiri',
    'volvo şanzıman tamiri',
    'tam otomatik şanzıman servisi',
    'aisin tf80 tamiri',
  ],
  alternates: {
    canonical: 'https://erenservis.net/hizmetler/aisin-sanziman-tamiri/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const SANZIMAN_TURLERI = [
  {
    tip: 'TF-80SC / TF-81SC (Aisin 6-8 İleri)',
    markalar: 'Toyota, Peugeot, Citroen, Volvo, Ford',
    desc: 'Aisin tabanlı tam otomatik aile. Valf gövdesi aşınması, tork konvertörü kilitleme sorunları ve adaptasyon optimizasyonu.',
  },
  {
    tip: 'U660E / U760E (Toyota/Lexus)',
    markalar: 'Toyota Camry, RAV4, Highlander, Lexus ES/RX',
    desc: 'Toyota özel Aisin üniteleri. Elektronik kontrol ünitesi, yavaş vites geçişleri ve tork konvertörü arızaları.',
  },
  {
    tip: 'AW-1 (Mini Aisin)',
    markalar: 'Mini Cooper, BMW 1-2 Serisi (Front-Wheel)',
    desc: 'Kompakt sınıf Aisin şanzımanları. Yağ basıncı problemleri ve gecikmeli vites geçişleri.',
  },
  {
    tip: '09G / 09M (Aisin 6 İleri)',
    markalar: 'VW Golf, Jetta, Passat, Skoda, Seat',
    desc: 'VW grubunda kullanılan Aisin 6 ileri üniteler. Valf gövdesi revizyonu ve yağ değişimi.',
  },
] as const;

const HIZMET_ADIMLAR = [
  { icon: Settings, baslik: 'Elektronik Tanı', aciklama: 'OBD taraması, yağ analizi ve basınç testleri ile Aisin arıza kaynağı belirlenir.' },
  { icon: Wrench, baslik: 'Demontaj & İnceleme', aciklama: 'Şanzıman sökülerek valf gövdesi, tork konvertörü ve plaka seti detaylı kontrol edilir.' },
  { icon: ShieldCheck, baslik: 'Revizyon', aciklama: 'Aşınmış parçalar orijinal veya OEM eşdeğeri ile yenilenir, yağ basıncı kalibre edilir.' },
  { icon: Clock, baslik: 'Adaptasyon & Test', aciklama: 'Montaj sonrası fabrika adaptasyonu ve kapsamlı yol testi ile vites kalitesi doğrulanır.' },
] as const;

export default function AisinSanzimanTamiriPage() {
  return (
    <main>
      <section className="hero-deep pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              Aisin Uzmanı
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            Aisin Şanzıman{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Tamiri ve Revizyonu
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Toyota, Peugeot, Citroen, Volvo ve Ford Aisin şanzımanlarında uzman revizyon.
            Valf gövdesi, tork konvertörü, elektronik tanı ve <strong className="text-hero-muted font-medium">garantili işçilik</strong>.
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

      <section className="py-16 bg-[#070B11]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-content-text text-center mb-10">Aisin Revizyon Sürecimiz</h2>
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
          <h2 className="text-content-text text-center mb-3">Servis Verdiğimiz Aisin Tipleri</h2>
          <p className="text-content-muted text-center mb-10 max-w-xl mx-auto">
            TF-80SC, U660E, AW-1 ve 09G gibi Türkiye&apos;de yaygın Aisin şanzıman aileleri.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SANZIMAN_TURLERI.map((item) => (
              <div key={item.tip} className="p-6 rounded-2xl bg-[#070B11] border border-content-border shadow-sm">
                <h3 className="text-content-text font-semibold text-base mb-1">{item.tip}</h3>
                <p className="text-xs font-medium text-accent mb-2">{item.markalar}</p>
                <p className="text-content-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#070B11]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 p-7 rounded-2xl bg-content-secondary border border-content-border">
              <h3 className="text-content-text font-bold text-lg mb-3">Aisin Arıza Belirtileri</h3>
              <p className="text-content-muted text-sm leading-relaxed mb-4">
                Aisin şanzımanlarda sık karşılaşılan arıza işaretleri. Erken teşhis maliyeti düşürür:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'Vites geçişlerinde vuruntu ve sarsıntı',
                  'Gecikmeli vitese geçme (özellikle R)',
                  'Şanzıman yağ sızıntıları',
                  'Tork konvertörü kilitleme sorunu',
                  'Yüksek devirde vites tutturamama',
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
                  Aisin şanzımanınızın durumunu önce inceleyelim. Revizyon mu, parça değişimi mi gerektiğini net maliyet tahmini ile açıklayalım.
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
          <h2 className="text-hero-text mb-4">Aisin Şanzıman için Bizi Arayın</h2>
          <p className="text-hero-muted mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 - Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="btn-premium flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/hizmetler/eat-sanziman-tamiri/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all text-sm"
            >
              EAT6 / EAT8 Servisi &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
