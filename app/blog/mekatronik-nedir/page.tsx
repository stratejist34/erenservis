import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import Link from 'next/link';
import BlogSchema from '@/components/schema/BlogSchema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Mekatronik Nedir? Arıza Belirtileri ve 2026 Tamir Maliyeti',
  description:
    'Vuruntu, anahtar simgesi, tek viteste kalma — mekatronik arızasının 5 belirtisi. DQ200/DQ250 farkı, tamir mi değişim mi ve 2026 maliyet rehberi. Bostancı ücretsiz ön tanı.',
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
    canonical: 'https://www.erenservis.net/blog/mekatronik-nedir/',
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
  return (
    <>
      <BlogSchema
        slug="mekatronik-nedir"
        title="DSG Mekatronik Nedir? Arıza Belirtileri ve 2026 Tamir Maliyeti"
        description="Vuruntu, anahtar simgesi, tek viteste kalma — mekatronik arızasının 5 belirtisi. DQ200/DQ250 farkı, tamir mi değişim mi ve 2026 maliyet rehberi. Bostancı ücretsiz ön tanı."
        datePublished="2026-04-11"
        dateModified="2026-04-16"
      />
      <main className="bg-graphite-base">

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

        {/* Nasıl Çalışır */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Mekatronik Nasıl Çalışır?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-graphite-surface border border-border-hairline">
              <h3 className="font-saira font-semibold text-text-primary mb-2">Elektronik Kontrol Kartı</h3>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                Hız, devir ve yük sensörlerinden gelen verileri milisaniyeler içinde işler. Hangi
                vitese geçileceğine, kavramanın ne zaman ve ne kadar baskılanacağına bu kart karar
                verir. Yazılım güncelleme ya da kart tamiri bu katmanı etkiler.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-graphite-surface border border-border-hairline">
              <h3 className="font-saira font-semibold text-text-primary mb-2">Hidrolik Ünite</h3>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                Kartın verdiği kararı fiziksel harekete çevirir. Solenoid valfler, basınç tüpü ve
                pompa bu katmanda yer alır. Yağ kirliliği veya basınç kaybı önce burada belirir;
                karta zarar vermeden önce müdahale edilebilir.
              </p>
            </div>
          </div>
          <p className="font-saira text-sm text-text-secondary leading-relaxed mt-4 px-1">
            İki katman tek bir plastik–alüminyum gövde içinde birleştirildiği için arızayı
            lokalize etmek kritiktir. Yalnızca elektronik katman etkilendiyse kart tamiri yeterlidir;
            yalnızca hidrolik katman etkilendiyse solenoid veya basınç tüpü değişimi yapılır.
            Her iki katman da hasar görmüşse komple ünite değişimi gerekebilir.
          </p>
        </section>

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

        {/* Tamir mi Değişim mi */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Tamir mi, Değişim mi?</h2>
          <div className="overflow-x-auto rounded-xl border border-border-hairline">
            <table className="w-full font-saira text-sm">
              <thead>
                <tr className="bg-graphite-surface border-b border-border-hairline">
                  <th className="text-left px-5 py-3 text-text-primary font-semibold">Durum</th>
                  <th className="text-left px-5 py-3 text-brass font-semibold">Tamir</th>
                  <th className="text-left px-5 py-3 text-text-secondary font-semibold">Değişim</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Erken dönem — P17xx hata, belirti yeni başladı', '✓', '—'],
                  ['Solenoid ya da sensör arızası (hidrolik katman)', '✓', '—'],
                  ['Kart iletken yolları yanmış / kırık', '—', '✓'],
                  ['Metal toz kirliliği mekatroniğe ulaşmış', '—', '✓'],
                  ['İlk tamir girişimi başarısız olduysa', '—', '✓'],
                  ['Yağ kirliliği erken dönem, kart sağlam', '✓', '—'],
                ].map(([durum, tamir, degisim]) => (
                  <tr key={durum} className="border-b border-border-hairline last:border-0">
                    <td className="px-5 py-3 text-text-secondary">{durum}</td>
                    <td className="px-5 py-3 text-brass font-semibold">{tamir}</td>
                    <td className="px-5 py-3 text-text-secondary">{degisim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-saira text-xs text-text-secondary mt-3 px-1">
            Kesin karar yalnızca diyagnoz sonrası verilir — araç görülmeden yapılan tahminler yanıltıcı olabilir.
          </p>
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

        {/* 2026 Maliyet Özeti */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">2026 Maliyet Özeti</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { islem: 'Kart Tamiri', aralik: '14.000 – 25.000 TL', aciklama: 'Erken teşhis, kart sağlamsa' },
              { islem: 'Komple Ünite Değişimi', aralik: '55.000 – 68.000 TL', aciklama: 'Orijinal yeni mekatronik set' },
              { islem: 'Revizyonlu Ünite', aralik: '45.000 TL\'den başlar', aciklama: 'Sertifikalı yenileme' },
            ].map((item) => (
              <div key={item.islem} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline">
                <p className="font-jetbrains text-xs text-iron-light mb-1">{item.islem}</p>
                <p className="font-saira font-semibold text-brass text-lg mb-1">{item.aralik}</p>
                <p className="font-saira text-xs text-text-secondary">{item.aciklama}</p>
              </div>
            ))}
          </div>
          <p className="font-saira text-xs text-text-secondary mt-3 px-1">
            Fiyatlar Nisan 2026 itibarıyla geçerlidir, döviz kuruna göre değişim gösterebilir.{' '}
            <Link href="/hizmetler/dsg-mekatronik-kart/" className="text-brass hover:underline">
              Ayrıntılı fiyat listesi →
            </Link>
          </p>
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
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:30-18:30
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
