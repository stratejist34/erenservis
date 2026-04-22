import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import Link from 'next/link';
import BlogSchema from '@/components/schema/BlogSchema';


export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Vuruntu Belirtileri | 1→2 ve 2→3 Vuruntu Nedenleri Bostancı',
  description:
    'DSG vuruntu belirtileri ve çözümü. VW, Audi, Seat, Skoda modellerinde 1den 2ye, 2den 3e vuruntu. DQ200/DQ250 erken teşhis ve tedavi. Bostancı uzman servis.',
  keywords: [
    'dsg vuruntu',
    'dsg 2den 3e vuruntu',
    'dsg 1den 2ye vuruntu',
    'dsg vites vuruntusu',
    'dq200 vuruntu',
    'dsg şanzıman vuruntu nedeni',
    'dsg vuruntu çözümü',
  ],
  alternates: {
    canonical: 'https://www.erenservis.net/blog/dsg-vuruntu-semptomlari/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const BELIRTILER = [
  'Kalkışta 1den 2ye vuruntu, silkelenme veya gecikmeli geçiş',
  'Düşük hızda vites vuruntusu ve metalik darbe hissi',
  '2den 3e geçişte sarsıntı, devir dalgalanması',
  'Trafikte ısınınca şikayetin artması',
  'Titreme, kavrama kokusu, arıza lambası yanması',
];

const NEDENLER = [
  { baslik: 'DQ200 Kavrama Aşınması', aciklama: '7 vites kuru kavrama setinde balata aşınması ve mekatronik basınç sorunu.' },
  { baslik: 'DQ250 Yağ/Kavrama Problemi', aciklama: '6 vites ıslak kavramada yağ kirliliği ve geçiş problemi.' },
  { baslik: 'Yazılım Adaptasyon Bozulması', aciklama: 'Uzun süreli kullanımda öğrenilmiş değerlerin bozulması.' },
  { baslik: 'Volan veya Takoz Aşınması', aciklama: 'Motor-şanzıman bağlantısında aşınma kaynaklı vuruntu benzeri his.' },
];

const FAQ = [
  { soru: 'DSG vuruntu normal mi?', cevap: 'Hayır, düzenli vuruntu mutlaka kontrol edilmesi gereken bir arıza işaretidir.' },
  { soru: '1den 2ye vuruntu tehlikeli mi?', cevap: 'İlerlerde çekiş kaybı ve parça ömrünü etkiler, erken müdahale önemlidir.' },
  { soru: 'Çözüm pahalı mı?', cevap: 'Erken teşhis genellikle daha ekonomiktir. Gecikirse kavrama, mekatronik ve volan masrafı artar.' },
];


export default function DSGVuruntuPage() {
  return (
    <>
      <BlogSchema
        slug="dsg-vuruntu-semptomlari"
        title="DSG Vuruntu Belirtileri | 1→2 ve 2→3 Vuruntu Nedenleri Bostancı"
        description="DSG vuruntu belirtileri ve çözümü. VW, Audi, Seat, Skoda modellerinde 1den 2ye, 2den 3e vuruntu. DQ200/DQ250 erken teşhis ve tedavi. Bostancı uzman servis."
        datePublished="2025-03-01"
      />
      <main className="bg-graphite-base">
      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              DSG Arıza Belirtileri
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            DSG Vuruntu{' '}
            <span className="text-brass">Belirtileri ve Çözümü</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            VW, Audi, Seat ve Skoda araçlarda DSG vuruntu, özellikle DQ200 ve DQ250 şanzımanlarda
            1→2 ve 2→3 vuruntu olarak hissedilebilir. <strong className="text-text-primary font-medium">Bostancı erken teşhis</strong>.
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
            DSG şanzımanlar genellikle sorunsuz çalışır ancak belirli kilometrelerde veya
            kullanım koşullarında vuruntu problemleri ortaya çıkabilir. Özellikle
            <strong> 1den 2ye vuruntu</strong> ve <strong>2den 3e vuruntu</strong> en sık
            karşılaşılan şikayetlerdir. Bostancı İstanbul&apos;da erken teşhis, büyük masrafı önler.
          </p>
        </div>

        {/* Belirtiler */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DSG Vuruntu Belirtileri</h2>
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

        {/* Nedenler */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DSG Vuruntu Nedenleri</h2>
          <div className="grid gap-4">
            {NEDENLER.map((neden) => (
              <div key={neden.baslik} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brass/8 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-brass" />
                  </div>
                  <div>
                    <h3 className="font-saira font-semibold text-text-primary mb-1">{neden.baslik}</h3>
                    <p className="font-saira text-text-secondary text-sm">{neden.aciklama}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Erken Teşhis */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Erken Teşhis ve Maliyet</h2>
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-6">
            <ul className="space-y-3">
              {[
                'Test sürüşü + arıza tespitiyle sorun büyümeden yakalanır',
                'Erken müdahalede adaptasyon/yazılım daha düşük maliyetlidir',
                'Gecikirse kavrama, mekatronik ve volan masrafı artar',
                'Bostancı İstanbul\'da DSG uzman kontrolü zaman ve bütçe kazandırır',
              ].map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <span className="font-saira text-sm text-text-primary">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.soru} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline">
                <h3 className="font-saira font-semibold text-text-primary mb-2">{item.soru}</h3>
                <p className="font-saira text-text-secondary text-sm">{item.cevap}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border-hairline">
          <Link
            href="/hizmetler/dsg-sanziman-tamiri/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            DSG Servisi Bilgi
          </Link>
          <Link
            href="/hizmetler/dsg-kavrama-degisimi/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors"
          >
            Kavrama Değişimi &rarr;
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">DSG Vuruntu Probleminiz mi Var?</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 - Pazartesi-Cumartesi 08:00-18:00
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
