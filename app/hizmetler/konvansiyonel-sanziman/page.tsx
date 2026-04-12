import type { Metadata } from 'next';
import { CheckCircle2, Clock, MessageCircle, Phone, Settings, ShieldCheck, Wrench } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Aisin ve Tam Otomatik Sanziman Tamiri Bostanci | Eren Servis',
  description:
    'Aisin, EAT6, EAT8 ve tam otomatik sanziman tamiri. Peugeot, Citroen, Opel, Toyota, Ford ve klasik hidrolik otomatik ailelerde revizyon, tork konvertoru ve valf govdesi hizmeti.',
  keywords: [
    'otomatik sanziman tamiri',
    'aisin sanziman tamiri',
    'eat6 sanziman tamiri',
    'eat8 sanziman tamiri',
    'tam otomatik sanziman servisi',
    'peugeot otomatik sanziman tamiri',
    'opel otomatik sanziman tamiri',
  ],
  alternates: {
    canonical: 'https://erenservis.net/hizmetler/konvansiyonel-sanziman/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const SANZIMAN_TURLERI = [
  {
    tip: 'Aisin ve EAT6 / EAT8',
    markalar: 'Peugeot, Citroen, Opel, Toyota, Volvo',
    desc: "Türkiye'de sık görülen tam otomatik aile. Valf gövdesi, tork konvertörü, yağ basıncı ve geçiş kalitesi odaklı revizyon.",
  },
  {
    tip: 'Mercedes 722 Serisi (NAG1/NAG2)',
    markalar: 'Mercedes C, E, S, ML, GL Serisi',
    desc: '5G-Tronic ve 7G-Tronic. Mechatronik birimi, tork konvertoru kilitleme arizalari ve yag gecirmezlik kontrolu.',
  },
  {
    tip: 'ZF 4HP / 5HP',
    markalar: 'BMW, Audi, Volvo, eski nesil premium platformlar',
    desc: "ZF'nin koklu torku yuksek sanziman aileleri. Komple revizyon, adaptasyon ve guncellenmis parca.",
  },
  {
    tip: 'Ford / GM Otomatik',
    markalar: 'Ford Mondeo, Focus, Opel Astra, Insignia',
    desc: 'Ford tam otomatik aileleri ile PowerShift etkisini ayirarak teshis ederiz; GM tarafinda valf govdesi ve gecis sertligi kontrol edilir.',
  },
] as const;

const HIZMET_ADIMLAR = [
  { icon: Settings, baslik: 'Tani & Olcum', aciklama: 'Sanziman yagi analizi, elektronik tani ve basinc testleri ile arizanin kaynagi belirlenir.' },
  { icon: Wrench, baslik: 'Tam Demontaj', aciklama: 'Sanziman komple sokulerek tum mekanik bilesenler incelenir, asinmis parcalar tespit edilir.' },
  { icon: ShieldCheck, baslik: 'Revizyon & Yenileme', aciklama: 'Valf govdesi, plaka seti, o-ringler ve tork konvertoru birlikte degerlendirilir.' },
  { icon: Clock, baslik: 'Adaptasyon & Test', aciklama: 'Montaj sonrasi yag degisimi, adaptasyon ve kapsamli yol testi uygulanir.' },
] as const;

export default function KonvansiyonelSanzimanPage() {
  return (
    <main>
      <section className="hero-deep pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              Aisin ve Tam Otomatik
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            Aisin ve Tam Otomatik{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Sanziman Tamiri
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Aisin, EAT6, EAT8 ve klasik tam otomatik sanziman ailelerinde Peugeot, Citroen, Opel, Toyota ve Ford odakli revizyon.
            Deneyimli teknisyen, orijinal parca, <strong className="text-hero-muted font-medium">garantili iscilik</strong>.
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
          <h2 className="text-content-text text-center mb-10">Revizyon Surecimiz</h2>
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
          <h2 className="text-content-text text-center mb-3">Servis Verdigimiz Sanziman Tipleri</h2>
          <p className="text-content-muted text-center mb-10 max-w-xl mx-auto">
            Aisin tabanli tam otomatik, EAT6 / EAT8, Mercedes 722 ve klasik hidrolik sanziman aileleri.
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
              <h3 className="text-content-text font-bold text-lg mb-3">Revizyon mu, Komple Yenileme mi?</h3>
              <p className="text-content-muted text-sm leading-relaxed mb-4">
                Her sanziman arizasi komple yenileme gerektirmez. Ariza tespitinden sonra en ekonomik ve kalici cozumu birlikte degerlendiririz:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'Valf govdesi revizyonu',
                  'Tork konvertoru yenileme',
                  'Plaka seti ve conta yenileme',
                  'Komple revizyon kiti',
                  'Yeniden uretilmis sanziman secenegi',
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
                <h3 className="text-white font-bold text-xl mb-3">Ucretsiz On Tani</h3>
                <p className="text-fg-muted text-sm leading-relaxed mb-6">
                  Sanzimaninizin durumunu once inceleyelim. Tamir mi, revizyon mu, yoksa yenileme mi gerektigini net maliyet tahmini ile birlikte aciklayalim.
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
          <h2 className="text-hero-text mb-4">Aisin ve Tam Otomatik Icin Bizi Arayin</h2>
          <p className="text-hero-muted mb-8">
            Bostanci Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 - Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="btn-premium flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/hizmetler/cvt-sanziman-tamiri/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all text-sm"
            >
              CVT ve semptom takibi &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
