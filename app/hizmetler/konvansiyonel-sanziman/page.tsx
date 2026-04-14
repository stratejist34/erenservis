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
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              Aisin ve Tam Otomatik
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            Aisin ve Tam Otomatik{' '}
            <span className="text-brass">Sanziman Tamiri</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Aisin, EAT6, EAT8 ve klasik tam otomatik sanziman ailelerinde Peugeot, Citroen, Opel, Toyota ve Ford odakli revizyon.
            Deneyimli teknisyen, orijinal parca, <strong className="text-text-primary font-medium">garantili iscilik</strong>.
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
          <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-10">Revizyon Surecimiz</h2>
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
          <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Servis Verdigimiz Sanziman Tipleri</h2>
          <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
            Aisin tabanli tam otomatik, EAT6 / EAT8, Mercedes 722 ve klasik hidrolik sanziman aileleri.
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
              <h3 className="font-saira font-semibold text-lg text-text-primary mb-3">Revizyon mu, Komple Yenileme mi?</h3>
              <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">
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
                  <li key={item} className="flex items-center gap-2 font-saira text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-brass shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-graphite-elevated border border-border-subtle rounded-xl p-7 text-center flex flex-col justify-between">
              <div>
                <h3 className="font-saira font-semibold text-xl text-text-primary mb-3">Ucretsiz On Tani</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-6">
                  Sanzimaninizin durumunu once inceleyelim. Tamir mi, revizyon mu, yoksa yenileme mi gerektigini net maliyet tahmini ile birlikte aciklayalim.
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
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">Aisin ve Tam Otomatik Icin Bizi Arayin</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostanci Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 - Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/hizmetler/cvt-sanziman-tamiri/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
            >
              CVT ve semptom takibi &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
