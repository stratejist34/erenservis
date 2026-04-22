import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import BlogSchema from '@/components/schema/BlogSchema';


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
    canonical: 'https://www.erenservis.net/blog/edc-sanziman-ariza-belirtileri/',
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
    <>
      <BlogSchema
        slug="edc-sanziman-ariza-belirtileri"
        title="EDC Şanzıman Arıza Belirtileri | Renault Clio Megane Bostancı"
        description="Renault ve Dacia EDC7/EDC8 şanzıman arıza belirtileri. Vuruntu, titreme, geçiş gecikmesi. Clio ve Megane modellerinde erken teşhis ve tedavi. Bostancı uzman servis."
        datePublished="2025-03-15"
      />
      <main className="bg-graphite-base">
      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              Renault / Dacia
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            EDC Şanzıman{' '}
            <span className="text-brass">Arıza Belirtileri</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Renault ve Dacia modellerindeki EDC7 ve EDC8 şanzımanların arıza belirtileri,
            erken teşhis ve tedavi yöntemleri. <strong className="text-text-primary font-medium">Bostancı uzman servis</strong>.
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

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="font-saira text-text-primary text-lg leading-relaxed">
            Renault ve Dacia modellerindeki EDC7 ve EDC8 şanzımanlar konforlu sürüş sunar;
            ancak belirtiler gecikirse onarım maliyeti hızla büyür. Özellikle Bostancı İstanbul
            trafiğinde sık dur-kalk, ısınma ve bakımsız kullanım, arıza riskini artırır.
            EDC şanzıman arızası erken teşhis edilirse hem yolda kalma ihtimali azalır hem de
            kavrama, mekatronik ve yağ kaynaklı büyük hasarlar önlenebilir.
          </p>
        </div>

        {/* Belirtiler */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">En Sık Görülen Arıza Belirtileri</h2>
          <div className="bg-graphite-surface rounded-xl p-6 border border-border-hairline">
            <ul className="space-y-3">
              {BELIRTILER.map((belirti) => (
                <li key={belirti} className="flex items-start gap-3 font-saira text-text-primary">
                  <AlertTriangle className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  {belirti}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Model Bazlı */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Model Bazlı Şikayetler</h2>
          <div className="grid gap-4">
            {MODELLER.map((item) => (
              <div key={item.model} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="font-saira font-semibold text-text-primary">{item.model}</h3>
                  <span className="font-jetbrains text-xs font-semibold text-brass bg-brass/8 px-2 py-0.5 rounded-full w-fit">
                    {item.sanziman}
                  </span>
                </div>
                <p className="font-saira text-text-secondary text-sm">{item.belirti}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Erken Teşhis */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Neden Erken Teşhis Önemli?</h2>
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-6">
            <ul className="space-y-3">
              {[
                'Küçük sensör veya yağ sorunu büyümeden çözülür',
                'Kavrama balata değişimi komple revizyondan ucuzdur',
                'Aktüatör motor onarımı mekatronik değişimden ekonomiktir',
                'Büyük revizyon, çekici ve işçilik maliyeti düşer',
                'Yolda kalma ve güvenlik riski minimize edilir',
              ].map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <span className="font-saira text-sm text-text-primary">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bostancı */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Bostancı&apos;da Doğru Müdahale</h2>
          <p className="font-saira text-text-primary leading-relaxed mb-4">
            EDC şanzıman onarımı için test sürüşü ve cihazlı arıza tespiti şarttır.
            Bostancı Oto Sanayi&apos;ndeki atölyemizde Renault ve Dacia EDC şanzımanlarında uzmanlaşmış
            teknisyenlerimiz, şeffaf maliyet, doğru parça ve garantili işçilik sunar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/hizmetler/dsg-kavrama-degisimi/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
            >
              Kavrama Değişimi Bilgi
            </Link>
            <Link
              href="/arac/renault/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors"
            >
              Renault Servisi &rarr;
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <div className="prose prose-lg max-w-none border-t border-border-hairline pt-8">
          <p className="font-saira text-text-primary leading-relaxed">
            Sonuç olarak, EDC şanzımanda vuruntu veya geçiş sorunu varsa beklememek gerekir.
            Bostancı İstanbul&apos;da erken teşhis, hem güvenliği korur hem de maliyeti kontrol altında tutar.
            İlk belirtilerde uzman kontrolü, büyük masraflardan kaçınmanın en etkili yoludur.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">EDC Şanzıman Probleminiz mi Var?</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 - Pazartesi-Cumartesi 08:30-18:30
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/blog/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
            >
              Diğer Yazılar &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
