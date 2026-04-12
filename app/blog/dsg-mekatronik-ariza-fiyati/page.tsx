import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import Link from 'next/link';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Mekatronik Arıza Fiyatı 2026 | Tamir & Revizyon — Eren Servis',
  description:
    'DSG mekatronik arıza fiyatları 2026. DQ200 ve DQ250 kart tamiri, güçlendirilmiş tüp ve revizyon maliyetleri. 12 ay garantili uzman servis.',
  keywords: [
    'dsg mekatronik arıza fiyatı',
    'mekatronik kart tamiri fiyatı 2026',
    'dq200 mekatronik fiyatı',
    'dq250 mekatronik tamiri',
    'dsg mekatronik değişimi',
    'güçlendirilmiş basınç tüpü',
    'dsg şanzıman beyin fiyatı',
  ],
  alternates: {
    canonical: 'https://erenservis.net/blog/dsg-mekatronik-ariza-fiyati/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const BELIRTILER = [
  'Gösterge panelinde "Şanzıman Hatası" veya "Güvenli Şekilde Durun" uyarısı',
  'Aracın yalnızca tek (1-3-5-7) veya çift (2-4-6-R) viteslerde kalması',
  'Kalkışta aşırı kararsızlık, vites geçişinde 2–3 saniyelik gecikme',
  'Hata kodu okumada P17BF (Hidrolik Pompa) veya P189C (Yetersiz Basınç)',
];

const FIYAT_TABLOSU = [
  { islem: 'Elektronik Kart Onarımı', dq200: '8.500 – 14.500 TL', dq250: '11.000 – 18.000 TL' },
  { islem: 'Güçlendirilmiş Basınç Tüpü', dq200: '9.000 – 13.000 TL', dq250: '—' },
  { islem: 'Komple Hidrolik Ünite Revizyonu', dq200: '16.000 – 24.000 TL', dq250: '19.000 – 28.000 TL' },
  { islem: 'Sıfır Orijinal Ünite Değişimi', dq200: '42.000 – 52.000 TL', dq250: '48.000 – 65.000 TL' },
];

const ADIMLAR = [
  { no: '01', baslik: 'Yağ Analizi', aciklama: 'Metal toz kirliliği ölçülür. Kirlilik varsa mekatronik öncesi iç temizlik zorunludur.' },
  { no: '02', baslik: 'Basınç Testi', aciklama: 'Hidrolik pompanın çalışma verimliliği ve basınç oluşturma kapasitesi kontrol edilir.' },
  { no: '03', baslik: 'Temizlik Sonrası Montaj', aciklama: 'Şanzıman iç kirlilikten arındırılmadan mekatronik takılmaz — aksi hâlde arıza 3 ayda tekrarlar.' },
];

export default function DSGMekatronikArızaFiyatiPage() {
  const faqItems = TRANSMISSION_FAQS['dsg-mekatronik-ariza-fiyati'] ?? [];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'DSG Mekatronik Arıza Fiyatı 2026: Tamir mi, Değişim mi?',
    description: 'DQ200 ve DQ250 mekatronik arıza fiyatları 2026 güncel listesi. Kart tamiri, hidrolik ünite revizyonu ve güçlendirilmiş basınç tüpü maliyetleri.',
    datePublished: '2026-04-11',
    author: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    publisher: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.net' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://erenservis.net/blog/dsg-mekatronik-ariza-fiyati/' },
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
              Fiyatlar & Revizyon
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            DSG Mekatronik Arıza{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
              Fiyatı 2026
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            DQ200 ve DQ250 mekatronik ünitelerinin %80&apos;ini komple değişim olmadan kurtarıyoruz.
            Kart onarımı, güçlendirilmiş basınç tüpü ve hidrolik revizyon fiyatları.{' '}
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
            DSG şanzımanın &quot;beyni&quot; olan mekatronik ünite, arızalandığında araç sahiplerinin en çok
            korktuğu kalemdir. Ancak arızanın türüne göre fiyat aralığı inanılmaz ölçüde değişir:{' '}
            <strong>kart onarımı 8.500 TL&apos;den başlarken</strong> sıfır ünite değişimi 65.000 TL&apos;ye ulaşabilir.
            Bostancı&apos;daki Eren Servis olarak ücretsiz ön tanı sonrası size net sabit fiyat sunuyoruz.
          </p>
        </div>

        {/* Arıza Belirtileri */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">DSG Mekatronik Arıza Belirtileri</h2>
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

        {/* Fiyat Tablosu */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-2">Mekatronik Fiyat Tablosu — Nisan 2026</h2>
          <p className="text-content-muted text-sm mb-6">
            Fiyatlar arızanın kapsamına göre değişir. Net fiyat ücretsiz ön tanı sonrası yazılı sunulur.
          </p>
          <div className="rounded-2xl border border-content-border overflow-hidden">
            {/* Tablo Başlığı */}
            <div className="grid grid-cols-3 bg-content-secondary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-content-muted">
              <span>İşlem</span>
              <span className="text-center">DQ200 (7 İleri)</span>
              <span className="text-center">DQ250 (6 İleri)</span>
            </div>
            {/* Satırlar */}
            {FIYAT_TABLOSU.map((row, i) => (
              <div
                key={row.islem}
                className={`grid grid-cols-3 px-5 py-4 items-center ${i < FIYAT_TABLOSU.length - 1 ? 'border-b border-content-border' : ''}`}
              >
                <span className="text-sm font-medium text-content-text">{row.islem}</span>
                <span className="text-center text-sm text-accent font-semibold">{row.dq200}</span>
                <span className="text-center text-sm text-accent font-semibold">{row.dq250}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Güçlendirilmiş Basınç Tüpü */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-6">Güçlendirilmiş Basınç Tüpü — DQ200&apos;e Özel</h2>
          <div className="bg-surface-0 rounded-2xl p-6 text-white">
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              DQ200 mekatroniklerinde en sık arıza, hidrolik gövdedeki tüp yuvasının çatlamasıdır.
              Gövde değiştirmek yerine güçlendirilmiş kit uyguluyoruz. Bu yöntem maliyeti %60 düşürür
              ve kronik tekrarı önler.
            </p>
            <ul className="space-y-3">
              {[
                'Komple gövde değişimine kıyasla ortalama %60 tasarruf',
                'Çatlak yuvayı kalıcı olarak kapatan güçlendirilmiş alüminyum kit',
                'İşlem tamamlandıktan sonra 12 ay garanti',
                'Aynı gün teslimat — çoğu vakada araç aynı günü teslim edilir',
              ].map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Neden Tek Başına Yetmez */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-content-text mb-3">Neden Sadece Mekatronik Tamiri Yetmeyebilir?</h2>
          <p className="text-content-muted text-sm mb-6">
            Aşınmış kavramadan yağa karışan metal tozu yeni mekatroniği 3 ayda bozar.
            Bu yüzden Eren Servis&apos;te şu sırayı uyguluyoruz:
          </p>
          <div className="grid gap-4">
            {ADIMLAR.map((adim) => (
              <div key={adim.no} className="p-5 rounded-xl bg-[#070B11] border border-content-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-accent">{adim.no}</span>
                      <h3 className="font-bold text-content-text">{adim.baslik}</h3>
                    </div>
                    <p className="text-content-muted text-sm">{adim.aciklama}</p>
                  </div>
                </div>
              </div>
            ))}
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
            href="/hizmetler/dsg-kavrama-degisimi/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition"
          >
            DSG Kavrama Değişimi
          </Link>
          <Link
            href="/hizmetler/dsg-sanziman-tamiri/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-content-border text-content-text font-semibold hover:bg-content-secondary transition"
          >
            DSG Servis Detayı &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="hero-deep py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-hero-text mb-4">Mekatronik Arızanız mı Var?</h2>
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
