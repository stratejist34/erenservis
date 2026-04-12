import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import Link from 'next/link';


export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'EDC Şanzıman Arıza Belirtileri | Renault Clio Megane Bostancı',
  description:
    'Renault ve Dacia EDC7/EDC8 şanzıman arıza belirtileri. Vuruntu, titreme, geçiş gecikmesi. Clio ve Megane modellerinde erken teşhis ve tedavi. Bostancı uzman servis.',
  keywords: [
    'edc şanzıman arızası',
    'edc vuruntu',
    'clio edc problemi',
    'megane şanzıman arızası',
    'renault edc tamiri',
    'dacia edc arıza belirtileri',
    'edc7 edc8 farkı',
  ],
  alternates: {
    canonical: 'https://erenservis.net/blog/edc-sanziman-ariza-belirtileri/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const BELIRTILER = [
  'Kalkışta ve düşük hızlarda titreme ve vuruntu',
  'Vites geçişlerinde ani sarsıntı ve gecikme',
  'Gösterge panelinde şanzıman arıza lambası',
  'Koruma moduna geçme (vites kaybı)',
  'Yüksek devirde vites yukarı çıkmama',
  'Aktüatör motor sesi ve vuruntusu',
];

const MODELLER = [
  { model: 'Clio 4', sanziman: 'EDC7', belirti: 'Düşük hızda kararsız geçişler, stop-etmeme' },
  { model: 'Clio 5', sanziman: 'EDC8', belirti: 'Daha yumuşak ama yine de vuruntu riski' },
  { model: 'Megane 3', sanziman: 'EDC7', belirti: 'Isınınca sertleşen vites değişimi' },
  { model: 'Megane 4', sanziman: 'EDC8', belirti: 'Adaptasyon sorunları, gecikmeli geçiş' },
  { model: 'Captur', sanziman: 'EDC6/7/8', belirti: 'Model yılına göre farklı EDC nesilleri' },
  { model: 'Dacia Sandero', sanziman: 'EDC', belirti: 'Ekonomik kullanımda erken aşınma' },
];

export default function EDCArizaPage() {
  return (
    <main className="bg-[#070B11]">
      {/* Hero */}
      <section className="hero-deep pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              Renault / Dacia
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            EDC Şanzıman{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Arıza Belirtileri
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Renault ve Dacia modellerindeki EDC7 ve EDC8 şanzımanların arıza belirtileri, 
            erken teşhis ve tedavi yöntemleri. <strong className="text-hero-muted font-medium">Bostancı uzman servis</strong>.
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

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-content-text text-lg leading-relaxed">
            Renault ve Dacia modellerindeki EDC7 ve EDC8 şanzımanlar konforlu sürüş sunar; 
            ancak belirtiler gecikirse onarım maliyeti hızla büyür. Özellikle Bostancı İstanbul 
            trafiğinde sık dur-kalk, ısınma ve bakımsız kullanım, arıza riskini artırır. 
            EDC şanzıman arızası erken teşhis edilirse hem yolda kalma ihtimali azalır hem de 
            kavrama, mekatronik ve yağ kaynaklı büyük hasarlar önlenebilir.
          </p>
        </div>

        {/* Belirtiler */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">En Sık Görülen Arıza Belirtileri</h2>
          <div className="bg-content-secondary rounded-2xl p-6 border border-content-border">
            <ul className="space-y-3">
              {BELIRTILER.map((belirti) => (
                <li key={belirti} className="flex items-start gap-3 text-content-text">
                  <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {belirti}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Model Bazlı */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Model Bazlı Şikayetler</h2>
          <div className="grid gap-4">
            {MODELLER.map((item) => (
              <div key={item.model} className="p-5 rounded-xl bg-[#070B11] border border-content-border shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="font-bold text-content-text">{item.model}</h3>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full w-fit">
                    {item.sanziman}
                  </span>
                </div>
                <p className="text-content-muted text-sm">{item.belirti}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Erken Teşhis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Neden Erken Teşhis Önemli?</h2>
          <div className="bg-surface-0 rounded-2xl p-6 text-white">
            <ul className="space-y-3">
              {[
                'Küçük sensör veya yağ sorunu büyümeden çözülür',
                'Kavrama balata değişimi komple revizyondan ucuzdur',
                'Aktüatör motor onarımı mekatronik değişimden ekonomiktir',
                'Büyük revizyon, çekici ve işçilik maliyeti düşer',
                'Yolda kalma ve güvenlik riski minimize edilir',
              ].map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {madde}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bostancı */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Bostancı&apos;da Doğru Müdahale</h2>
          <p className="text-content-text leading-relaxed mb-4">
            EDC şanzıman onarımı için test sürüşü ve cihazlı arıza tespiti şarttır. 
            Bostancı Oto Sanayi&apos;ndeki atölyemizde Renault ve Dacia EDC şanzımanlarında uzmanlaşmış 
            teknisyenlerimiz, şeffaf maliyet, doğru parça ve garantili işçilik sunar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/hizmetler/dsg-kavrama-degisimi/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition"
            >
              Kavrama Değişimi Bilgi
            </Link>
            <Link
              href="/arac/renault/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-content-border text-content-text font-semibold hover:bg-content-secondary transition"
            >
              Renault Servisi &rarr;
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <div className="prose prose-lg max-w-none border-t border-content-border pt-8">
          <p className="text-content-text leading-relaxed">
            Sonuç olarak, EDC şanzımanda vuruntu veya geçiş sorunu varsa beklememek gerekir. 
            Bostancı İstanbul&apos;da erken teşhis, hem güvenliği korur hem de maliyeti kontrol altında tutar. 
            İlk belirtilerde uzman kontrolü, büyük masraflardan kaçınmanın en etkili yoludur.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="hero-deep py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-hero-text mb-4">EDC Şanzıman Probleminiz mi Var?</h2>
          <p className="text-hero-muted mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 - Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="btn-premium flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/blog/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all text-sm"
            >
              Diğer Yazılar &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
