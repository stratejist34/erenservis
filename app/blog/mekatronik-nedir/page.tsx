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
    <main className="bg-graphite-base">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              Teknik Rehber
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            Mekatronik{' '}
            <span className="text-brass">Nedir?</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            DSG şanzımanın elektronik ve hidrolik kontrolünü birleştiren mekatronik ünite, vites geçişlerini
            milisaniyeler içinde yönetir. Arızalandığında araç genellikle sürülemez hale gelir.{' '}
            <strong className="text-text-primary font-medium">Bostancı — ücretsiz ön tanı.</strong>
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

      {/* İçerik */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="font-saira text-text-primary text-lg leading-relaxed">
            Mekatronik, DSG şanzımanın &quot;beyni&quot; olarak tanımlanır. İki ana bileşenden oluşur:{' '}
            <strong>elektronik kontrol kartı</strong> (vitesleri hesaplar, sensörleri okur) ve{' '}
            <strong>hidrolik ünite</strong> (kavrama ve vites geçişlerini fiziksel olarak yönetir). Bu iki sistem
            tek bir ünite içinde birleştirildiği için arıza hem yazılım hem de mekanik kökenli olabilir.
            Doğru tanı konmadan yapılan değişim gereksiz masrafa yol açar.
          </p>
        </div>

        {/* Arıza Belirtileri */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Mekatronik Arıza Belirtileri</h2>
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

        {/* DQ200 vs DQ250 */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DQ200 ve DQ250 Mekatronik Farkı</h2>
          <div className="grid gap-4">
            {MODELLER.map((model) => (
              <div key={model.kod} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brass/8 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-brass" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-saira font-semibold text-text-primary">{model.kod}</h3>
                      <span className="font-jetbrains text-xs text-brass bg-brass/8 px-2 py-0.5 rounded-full">{model.tip}</span>
                    </div>
                    <p className="font-jetbrains text-xs text-iron-light mb-2">{model.araclar}</p>
                    <p className="font-saira text-sm text-text-primary leading-relaxed">{model.ozellik}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Erken Teşhis */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Neden Erken Teşhis Kritik?</h2>
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-6">
            <ul className="space-y-3">
              {ERKEN_TESHIS.map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <span className="font-saira text-sm text-text-primary">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        {faqItems.length > 0 && (
          <section className="mb-12">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline">
                  <h3 className="font-saira font-semibold text-text-primary mb-2">{item.q}</h3>
                  <p className="font-saira text-text-secondary text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* İç Linkler */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border-hairline">
          <Link
            href="/hizmetler/dsg-mekatronik-kart/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            Mekatronik Kart Fiyatları
          </Link>
          <Link
            href="/blog/dsg-mekatronik-ariza-fiyati/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors"
          >
            Arıza Fiyat Rehberi &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">Mekatronik Sorununuz mu Var?</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:00-18:00
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
  );
}
