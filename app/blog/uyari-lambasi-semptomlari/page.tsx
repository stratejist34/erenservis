import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';
import Link from 'next/link';


export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Uyarı Lambası | P Işığı ve Anahtar İşareti Yanıyor Bostancı',
  description:
    'DSG şanzıman uyarı lambası belirtileri. P ışığı yanıyor, anahtar işareti yanıyor ne demek? Mekatronik, sensör ve kavrama arızaları. Bostancı uzman servis.',
  keywords: [
    'dsg p ışığı yanıyor',
    'dsg anahtar işareti yanıyor',
    'dsg arıza lambası',
    'şanzıman uyarı ışığı',
    'dsg şanzıman arıza lambası',
    'dsg p lambası nedir',
  ],
  alternates: {
    canonical: 'https://erenservis.net/blog/uyari-lambasi-semptomlari/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const P_ISIGI = [
  'Park kilidi algısı hatalı olabilir',
  'Vites kolu müşürü veya fren müşürü kontrol edilmelidir',
  'Araç P&apos;den çıkmıyorsa zorlamayın',
  'Mekatronik haberleşme hatası olabilir',
];

const ANAHTAR_ISARETI = [
  'Elektronik arıza kaydı vardır',
  'Geçişlerde sarsıntı, vuruntu, gecikme görülebilir',
  'Cihazla arıza tespiti şarttır',
  'Adaptasyon bozukluğu veya sensör arızası olabilir',
];

const ARIZA_LAMBASI = [
  'Mekatronik ünitesinde sorun olabilir',
  'Baskı-balata aşınması veya yağ sıcaklığı yüksekliği',
  'Sensör veya vites konumu hatası',
  'Şanzıman kendini korumaya alabilir (limp mode)',
];

const FAQ = [
  { soru: 'Sürmeye devam edilir mi?', cevap: 'Kısa mesafe bile risktir. Aracı zorlamadan servise ulaştırın.' },
  { soru: 'Her P ışığı büyük arıza mıdır?', cevap: 'Hayır, bazen sensör hatası olabilir ama kontrol şarttır.' },
  { soru: 'Bostancı İstanbul&apos;da hızlı teşhis mümkün mü?', cevap: 'Evet, uzman DSG kontrolüyle sorun netleşir.' },
];

export default function UyariLambasiPage() {
  return (
    <main className="bg-[#070B11]">
      {/* Hero */}
      <section className="hero-deep pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              DSG Arıza Belirtileri
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            DSG Uyarı{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Lambası ve İşaretleri
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            DSG P ışığı yanıyor, anahtar işareti yanıyor ne demek? 
            <strong className="text-hero-muted font-medium">Bostancı erken teşhis</strong> ile büyük masraf önlenir.
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
            Bostancı İstanbul&apos;da DSG araçlarda görülen uyarılar erken fark edilirse büyük masraf önlenebilir. 
            <strong> DSG P ışığı yanıyor</strong>, <strong>DSG anahtar işareti yanıyor</strong>, 
            <strong> DSG arıza lambası</strong> ve <strong>şanzıman uyarı ışığı</strong> genelde mekatronik, sensör, 
            vites konumu veya kavrama sorunlarına işaret eder.
          </p>
        </div>

        {/* P Işığı */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-accent" />
            DSG P Işığı Yanıyor
          </h2>
          <div className="bg-content-secondary rounded-2xl p-6 border border-content-border">
            <ul className="space-y-3">
              {P_ISIGI.map((item) => (
                <li key={item} className="flex items-start gap-3 text-content-text">
                  <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Anahtar İşareti */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-accent" />
            DSG Anahtar İşareti Yanıyor
          </h2>
          <div className="bg-content-secondary rounded-2xl p-6 border border-content-border">
            <ul className="space-y-3">
              {ANAHTAR_ISARETI.map((item) => (
                <li key={item} className="flex items-start gap-3 text-content-text">
                  <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Arıza Lambası */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-accent" />
            DSG Arıza Lambası Ne Anlatır?
          </h2>
          <div className="bg-content-secondary rounded-2xl p-6 border border-content-border">
            <ul className="space-y-3">
              {ARIZA_LAMBASI.map((item) => (
                <li key={item} className="flex items-start gap-3 text-content-text">
                  <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ne Yapmalı */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Ne Yapmalı, Maliyet Ne Kadar?</h2>
          <div className="bg-surface-0 rounded-2xl p-6 text-white">
            <ul className="space-y-3">
              {[
                'Aracı zorlamayın, özellikle yoğun İstanbul trafiğinde kullanımı azaltın',
                'Yol testi ve bilgisayarlı kontrol yaptırın',
                'Maliyet arızaya göre değişir: sensör düşük, mekatronik ve kavrama daha yüksektir',
                'Bostancı İstanbul\'da uzman DSG servisi ile hızlı teşhis',
              ].map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {madde}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.soru} className="p-5 rounded-xl bg-content-secondary border border-content-border">
                <h3 className="font-bold text-content-text mb-2">{item.soru}</h3>
                <p className="text-content-muted text-sm">{item.cevap}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-content-border">
          <Link
            href="/hizmetler/dsg-mekatronik-kart/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition"
          >
            Mekatronik Servisi
          </Link>
          <Link
            href="/blog/dsg-vuruntu-semptomlari/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-content-border text-content-text font-semibold hover:bg-content-secondary transition"
          >
            Vuruntu Belirtileri &rarr;
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="hero-deep py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-hero-text mb-4">DSG Uyarı Lambası Yanıyor?</h2>
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
