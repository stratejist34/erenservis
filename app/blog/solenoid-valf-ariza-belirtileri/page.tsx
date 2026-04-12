import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import Link from 'next/link';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Solenoid Valf Arıza Belirtileri | DSG Solenoid Değişimi — Eren Servis',
  description:
    'DSG solenoid valf arıza belirtileri: sarsıntı, vites kaçırma, P17xx kodları. DQ200 ve DQ250 solenoid farkları, temizlik mi değişim mi? Bostancı uzman servis.',
  keywords: [
    'solenoid valf arıza belirtileri',
    'dsg solenoid arızası',
    'solenoid valf değişimi',
    'dq200 solenoid',
    'dsg vites sorunu',
    'solenoid valf temizliği',
    'dsg şanzıman solenoid fiyatı',
  ],
  alternates: {
    canonical: 'https://erenservis.net/blog/solenoid-valf-ariza-belirtileri/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const BELIRTILER = [
  'Vites değiştirirken ani sarsıntı veya darbe hissi',
  'Belirli vitese geçememe ya da geri vitese girmeme',
  'PRNDS ışıklarının yanıp sönmesi, limp mode\'a girme',
  'OBD okumada P17xx serisi (hidrolik/basınç) arıza kodları',
  'Isındıkça artan semptomlar — soğukta normal, sıcakta sorun',
];

const MODELLER = [
  {
    kod: 'DQ200',
    tip: 'Kuru Kavrama — 7 İleri',
    ozellik: 'Solenoidler mekatronik gövde içinde basınç tüpü ile birlikte çalışır. Tüp çatlaması basınç düşürür ve solenoidler yanıt veremez hale gelir. Temizlik öncesi mutlaka basınç testi yapılmalıdır.',
  },
  {
    kod: 'DQ250',
    tip: 'Islak Kavrama — 6 İleri',
    ozellik: 'Solenoidler sürekli yağ banyosunda çalışır. Kirli veya eskimiş yağ solenoid tıkanıklığının başlıca nedenidir. 60.000 km\'de yağ değişimi bu arızayı büyük ölçüde önler.',
  },
];

const NEDEN_ONEMLI = [
  'Solenoid tıkanıklığı sürüş sırasında şanzımanı boşa çıkarabilir — trafik güvenliği riski',
  'Limp mode\'da kalan araçla uzun süre kullanım dişli grubuna kalıcı hasar verir',
  'Erken temizlik ile çözülen arıza, geç kalındığında komple mekatronik değişimine dönüşür',
  'Ücretsiz hata kodu okuma ile temizlik mi değişim mi aynı günde netleşir',
];

export default function SolenoidValfArızaBelirtileriPage() {
  const faqItems = TRANSMISSION_FAQS['solenoid-valf-ariza-belirtileri'] ?? [];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Solenoid Valf Arıza Belirtileri | DSG Solenoid Değişimi',
    description: 'DSG solenoid valf arıza belirtileri ve çözümü. DQ200 ve DQ250 solenoid farkları, temizlik mi değişim mi?',
    datePublished: '2026-04-11',
    author: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    publisher: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://erenservis.net/blog/solenoid-valf-ariza-belirtileri/' },
  };

  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null;

  return (
    <main className="bg-[#070B11]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="hero-deep pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              DSG Arıza Belirtileri
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            Solenoid Valf{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Arıza Belirtileri
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            DSG şanzımanda solenoid valf, her vites geçişinde yağ akışını ve basıncı yöneten kritik bir
            parçadır. Tıkandığında veya arızalandığında araç limp mode&apos;a girer.{' '}
            <strong className="text-hero-muted font-medium">Bostancı — ücretsiz ön tanı.</strong>
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

      {/* İçerik */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-content-text text-lg leading-relaxed">
            Solenoid valf, DSG mekatronik ünitesi içindeki elektrikli-hidrolik anahtardır. Her vites değişiminde
            açılıp kapanarak doğru kavramaya basınç iletir. Kirlilik, aşınma veya elektriksel arıza nedeniyle
            yanıt vermez hale geldiğinde şanzıman yanlış vitese kilitlenir ya da tamamen boşa çıkar.{' '}
            <strong>Komple mekatronik değişiminden önce solenoid arızası mutlaka ayırt edilmelidir</strong> —
            maliyeti onlarca bin TL fark eder.
          </p>
        </div>

        {/* Arıza Belirtileri */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Solenoid Valf Arıza Belirtileri</h2>
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

        {/* DQ200 vs DQ250 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">DQ200 ve DQ250 Solenoid Farkı</h2>
          <div className="grid gap-4">
            {MODELLER.map((model) => (
              <div key={model.kod} className="p-5 rounded-xl bg-[#070B11] border border-content-border shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-bold text-content-text">{model.kod}</h3>
                      <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full">{model.tip}</span>
                    </div>
                    <p className="text-sm text-content-text leading-relaxed mt-1">{model.ozellik}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Neden Önemli */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Neden Ertelenmemeli?</h2>
          <div className="bg-surface-0 rounded-2xl p-6 text-white">
            <ul className="space-y-3">
              {NEDEN_ONEMLI.map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        {faqItems.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-content-text mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="p-5 rounded-xl bg-content-secondary border border-content-border">
                  <h3 className="font-bold text-content-text mb-2">{item.q}</h3>
                  <p className="text-content-muted text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* İç Linkler */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-content-border">
          <Link
            href="/hizmetler/dsg-mekatronik-kart/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition"
          >
            Mekatronik Kart Fiyatları
          </Link>
          <Link
            href="/blog/mekatronik-nedir/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-content-border text-content-text font-semibold hover:bg-content-secondary transition"
          >
            Mekatronik Nedir? &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="hero-deep py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-hero-text mb-4">Solenoid Sorununuz mu Var?</h2>
          <p className="text-hero-muted mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:00-18:00
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
