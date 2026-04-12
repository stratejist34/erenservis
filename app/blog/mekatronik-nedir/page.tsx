import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import Link from 'next/link';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Mekatronik Nedir? DSG Şanzıman Mekatronik Kart Rehberi | Eren Servis',
  description:
    'DSG mekatronik nedir, ne işe yarar, nasıl arızalanır? DQ200 ve DQ250 mekatronik kart farkları, arıza belirtileri ve tamir süreci. Bostancı uzman servis rehberi.',
  keywords: [
    'mekatronik nedir',
    'dsg mekatronik ne işe yarar',
    'mekatronik kart nedir',
    'dq200 mekatronik',
    'dq250 mekatronik',
    'dsg şanzıman beyni',
    'mekatronik arıza belirtileri',
  ],
  alternates: {
    canonical: 'https://erenservis.net/blog/mekatronik-nedir/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const BELIRTILER = [
  'Gösterge panelinde anahtar simgesi veya "Şanzıman Servisi" uyarısı',
  'Vites geçişlerinde sarsıntı, vuruntu veya gecikmeli tepki',
  'Araç yalnızca tek sayılı (1-3-5-7) ya da yalnızca çift viteslerde kalıyor',
  'Hata kodu okumada P17xx veya P189x serisi kodlar',
  'Geri vitese geçememe ya da D modundan çıkamama',
];

const MODELLER = [
  {
    kod: 'DQ200',
    tip: '7 İleri — Kuru Kavrama',
    araclar: 'VW Golf 6/7, Polo, Audi A3, Seat Leon, Skoda Fabia',
    ozellik: 'Mekatronik ve kavrama tek ünite içinde. Basınç tüpü çatlaması sık görülen kronik arızadır. Erken teşhis ile kart tamiri genellikle yeterlidir.',
  },
  {
    kod: 'DQ250',
    tip: '6 İleri — Islak Kavrama',
    araclar: 'VW Passat B7/B8, Tiguan, Audi A4/A6, Skoda Octavia/Superb',
    ozellik: 'Kavrama yağ banyosunda çalışır. Daha uzun ömürlü fakat yağ kirliliği mekatroniği etkiler. 60.000 km\'de yağ değişimi kritiktir.',
  },
];

const ERKEN_TESHIS = [
  'İlk belirtide getirilen araçlarda kart tamiri yeterli olur — değişim gerekmez',
  'Gecikilen her 5.000 km metal kirliliğini artırır ve kartın yanma riskini yükseltir',
  'Kavrama + mekatronik birlikte değerlendirilmezse yeni kart 3 ayda tekrar bozulur',
  'Ücretsiz hata kodu okuma ile tamir mi değişim mi sorusu aynı günde yanıtlanır',
];

export default function MekatronikNedirPage() {
  const faqItems = TRANSMISSION_FAQS['mekatronik-nedir'] ?? [];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mekatronik Nedir? DSG Şanzıman Mekatronik Kart Rehberi',
    description: 'DSG mekatronik nedir, ne işe yarar, nasıl arızalanır? DQ200 ve DQ250 mekatronik kart farkları ve arıza belirtileri.',
    datePublished: '2026-04-11',
    author: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    publisher: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://erenservis.net/blog/mekatronik-nedir/' },
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
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="hero-deep pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              Teknik Rehber
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            Mekatronik{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Nedir?
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            DSG şanzımanın elektronik ve hidrolik kontrolünü birleştiren mekatronik ünite, vites geçişlerini
            milisaniyeler içinde yönetir. Arızalandığında araç genellikle sürülemez hale gelir.{' '}
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
            Mekatronik, DSG şanzımanın &quot;beyni&quot; olarak tanımlanır. İki ana bileşenden oluşur:{' '}
            <strong>elektronik kontrol kartı</strong> (vitesleri hesaplar, sensörleri okur) ve{' '}
            <strong>hidrolik ünite</strong> (kavrama ve vites geçişlerini fiziksel olarak yönetir). Bu iki sistem
            tek bir ünite içinde birleştirildiği için arıza hem yazılım hem de mekanik kökenli olabilir.
            Doğru tanı konmadan yapılan değişim gereksiz masrafa yol açar.
          </p>
        </div>

        {/* Arıza Belirtileri */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Mekatronik Arıza Belirtileri</h2>
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
          <h2 className="text-2xl font-bold text-content-text mb-6">DQ200 ve DQ250 Mekatronik Farkı</h2>
          <div className="grid gap-4">
            {MODELLER.map((model) => (
              <div key={model.kod} className="p-5 rounded-xl bg-white border border-content-border shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-bold text-content-text">{model.kod}</h3>
                      <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full">{model.tip}</span>
                    </div>
                    <p className="text-xs text-content-muted mb-2">{model.araclar}</p>
                    <p className="text-sm text-content-text leading-relaxed">{model.ozellik}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Erken Teşhis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Neden Erken Teşhis Kritik?</h2>
          <div className="bg-surface-0 rounded-2xl p-6 text-white">
            <ul className="space-y-3">
              {ERKEN_TESHIS.map((madde) => (
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
            href="/blog/dsg-mekatronik-ariza-fiyati/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-content-border text-content-text font-semibold hover:bg-content-secondary transition"
          >
            Arıza Fiyat Rehberi &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="hero-deep py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-hero-text mb-4">Mekatronik Sorununuz mu Var?</h2>
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
