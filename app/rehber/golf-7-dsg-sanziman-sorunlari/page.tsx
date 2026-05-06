import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/golf-7-dsg-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Golf 7 DSG Şanzıman Sorunları | DQ200 ve DQ250 Rehberi',
  description:
    "Golf 7 DSG sorunları, DQ200-DQ250 farkı, en sık belirtiler, kavrama-mekatronik ayrımı ve doğru servis kararı rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Golf 7 DSG Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      "Golf 7'de hangi DSG var, hangi kilometrede hangi belirti görülür, DQ200 ve DQ250 nasıl ayrılır?",
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['golf-7-dsg-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Golf 7 DSG Şanzıman Sorunları: DQ200 ve DQ250 Rehberi',
  description:
    "Golf 7 DSG sahipleri için motor-şanzıman matrisi, saha belirtileri, kavrama ve mekatronik ayrımı.",
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Golf 7 DSG Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const transmissionMatrix = [
  ['1.0 TSI', 'DQ200', 'Kuru çift kavrama', '7'],
  ['1.2 TSI', 'DQ200', 'Kuru çift kavrama', '7'],
  ['1.4 TSI', 'DQ200', 'Kuru çift kavrama', '7'],
  ['1.6 TDI', 'DQ200', 'Kuru çift kavrama', '7'],
  ['1.5 TSI EVO', 'DQ200 / DQ381', 'Kuru / ıslak', '7'],
  ['2.0 TDI', 'DQ250 / DQ381', 'Islak çift kavrama', '6 / 7'],
  ['GTI / R', 'DQ250 / DQ381 / DQ500', 'Islak çift kavrama', '6 / 7'],
] as const;

const commonIssues = [
  'Kalkışta sarsıntı ve 1-2 silkelemesi',
  'Anahtar / dişli ikonu yanıp sönmesi',
  'P konumundan çıkmama',
  'Soğukta vites geçiş gecikmesi',
  'Yokuşta geri kaçma',
  'Limp mode veya koruma modu',
  'Kavrama tolerans limiti kodu',
] as const;

const mileageRows = [
  ['0-80.000 km', 'Çoğu zaman temiz profil', 'Yağ + filtre planı yapılır'],
  ['80.000-120.000 km', 'Anahtar lambası, soğukta gecikme', 'Geçiş gecikmesi başlangıcı'],
  ['120.000-160.000 km', '1-2 silkelemesi, geri kaçma, tolerans kodu', 'Limp mode öyküsü, ilk kavrama yorgunluğu'],
  ['160.000+ km', 'Kavrama + basınç tüpü kombo vakalar', 'Kavrama + mekatronik kombo vakalar'],
] as const;

const diagnosisRows = [
  ['Kalkışta sarsıntı + 1-2 silkelemesi', 'Kavrama hattı öne çıkar'],
  ['Anahtar lambası + soğukta gecikme', 'Mekatronik / basınç hattı öne çıkar'],
  ['Boşa düşme + limp mode', 'Mekatronik tarafı acilleşir'],
  ['Silkeleme + tolerans kodu', 'Kavrama ve canlı veri birlikte okunur'],
] as const;

export default function Golf7DsgSanzimanSorunlariPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [articleSchema, breadcrumbSchema, faqSchema],
          }),
        }}
      />

      <main className="min-h-screen bg-graphite-base">
        <section className="bg-graphite-base px-4 pt-28 pb-12">
          <div className="mx-auto max-w-2xl">
            <nav className="mb-6 flex items-center gap-2 text-xs text-text-secondary">
              <Link href="/" className="transition-colors hover:text-text-primary">
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link href="/rehber/" className="transition-colors hover:text-text-primary">
                Rehber
              </Link>
              <span>/</span>
              <span>Golf 7 DSG</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Model Rehberi
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Golf 7 DSG Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Golf 7, Türkiye&apos;de en yaygın DSG&apos;li modellerden biri. Bu yüzden DQ200 ve DQ250
              davranışını en net gördüğümüz saha da bu model. İyi bakımda çok uzun ömürlü olabilir;
              yanlış teşhiste ise masraf hızlı büyür.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">DQ200</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">En yaygın Golf 7</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">2 Hat</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Kavrama / mekatronik</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Bakım</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Ömür belirleyici</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="mb-3 text-xs font-bold uppercase tracking-wider text-amber-700">
              Kısa cevap
            </div>
            <p className="text-sm leading-relaxed text-amber-900">
              Golf 7 DSG vakalarının büyük kısmı DQ200 tarafında çıkar. En kritik ayrım,{' '}
              <strong>kavrama mı yoruldu, mekatronik mi basıncı kaybetti</strong> sorusunu doğru
              cevaplamaktır.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            Golf 7&apos;de DSG ömrünü belirleyen şey yalnız model değil, kullanım şeklidir. Şehir içi
            yoğun trafikte kullanılan 1.6 TDI DQ200 ile uzun yol gören bir 2.0 TDI DQ250 aynı
            kilometrede çok farklı davranabilir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Bu rehberde motor-şanzıman eşleşmesini, saha belirtilerini ve Golf 7 özelinde{' '}
            <Link
              href="/blog/dsg-mekatronik-ariza-belirtileri/"
              className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:decoration-brass"
            >
              mekatronik ile kavrama ayrımını
            </Link>{' '}
            pratik şekilde topluyoruz.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Golf 7&apos;de hangi DSG var?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Motor</th>
                    <th className="px-4 py-3">Şanzıman</th>
                    <th className="px-4 py-3">Kavrama</th>
                    <th className="px-4 py-3">İleri</th>
                  </tr>
                </thead>
                <tbody>
                  {transmissionMatrix.map((row) => (
                    <tr key={row[0]} className="border-t border-border-hairline bg-graphite-base">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3 font-saira text-sm text-text-secondary">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-2 font-saira text-2xl font-semibold text-text-primary">
            Golf 7&apos;de en sık görülen 7 DSG sorunu
          </h2>
          <div className="grid gap-3 mt-8">
            {commonIssues.map((item, index) => (
              <div key={item} className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
                <div className="mb-2 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="font-saira text-base font-semibold text-text-primary">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              DQ200 ve DQ250 Golf 7&apos;de nasıl farklı davranır?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
                <div className="mb-2 font-jetbrains text-xs font-semibold uppercase tracking-[0.16em] text-iron-light">
                  DQ200
                </div>
                <ul className="space-y-2 font-saira text-sm text-text-secondary">
                  <li>1-2 silkelemesi ve soğukta gecikme daha sık görülür.</li>
                  <li>Basınç tüpü ve P kilidi hattı erken uyarı verebilir.</li>
                  <li>Yoğun şehir içi kullanım kavrama ömrünü ciddi etkiler.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
                <div className="mb-2 font-jetbrains text-xs font-semibold uppercase tracking-[0.16em] text-iron-light">
                  DQ250 / DQ381
                </div>
                <ul className="space-y-2 font-saira text-sm text-text-secondary">
                  <li>Yağ disiplini atlanırsa hidrolik basınç davranışı bozulur.</li>
                  <li>Limp mode ve gecikme daha tipik ilk sinyallerdir.</li>
                  <li>Yüksek torkla kavrama ve mekatronik birlikte yorulabilir.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-2 font-saira text-2xl font-semibold text-text-primary">
            Kilometre × belirti tablosu
          </h2>
          <div className="overflow-hidden rounded-xl border border-border-hairline mt-8">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Kilometre</th>
                  <th className="px-4 py-3">DQ200</th>
                  <th className="px-4 py-3">DQ250 / DQ381</th>
                </tr>
              </thead>
              <tbody>
                {mileageRows.map((row) => (
                  <tr key={row[0]} className="border-t border-border-hairline bg-graphite-base align-top">
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 font-saira text-sm leading-6 text-text-secondary">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Golf 7&apos;de kavrama mı, mekatronik mi?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Belirti kombinasyonu</th>
                    <th className="px-4 py-3">İlk yorum</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnosisRows.map((row) => (
                    <tr key={row[0]} className="border-t border-border-hairline bg-graphite-base align-top">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3 font-saira text-sm leading-6 text-text-secondary">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Adaptasyon ne zaman yeterli olabilir?
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-green-800">Yeterli olabilir</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-green-900">
                <li>Yağ değişimi veya akü işlemi sonrası küçük davranış farkı başladıysa</li>
                <li>Kavrama aşınma verileri henüz sınırın altındaysa</li>
                <li>Belirti yeni başladıysa ve ek lamba yoksa</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-red-800">Yetmez</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-red-900">
                <li>Basınç tüpü veya solenoid fiziksel olarak zayıfsa</li>
                <li>Kavrama tolerans limiti ve kayma birlikte görülüyorsa</li>
                <li>Adaptasyon sonrası belirti kısa sürede geri dönüyorsa</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="golf-7-dsg-sanziman-sorunlari" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/rehber/dsg-1-2-vites-silkeleme/" className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated">
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">DSG 1-2 vites silkelemesi →</div>
            </Link>
            <Link href="/rehber/dsg-anahtar-isareti-yanip-sonuyor/" className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated">
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">DSG anahtar işareti →</div>
            </Link>
            <Link href="/hizmetler/dsg-kavrama-degisimi/" className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated">
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">DSG kavrama değişimi →</div>
            </Link>
            <Link href="/blog/dq200-mekatronik-tamiri/" className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated">
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">DQ200 mekatronik tamiri →</div>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Golf 7 DSG belirtilerini erkenden ayıralım
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              DQ200 mü, DQ250 mi; kavrama mı, mekatronik mi sorusunu veriyle netleştirip gereksiz
              parça değişiminden kaçınalım.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a href="tel:+905327153751" className="inline-block rounded-full bg-brass-bright px-6 py-3 font-saira font-semibold text-graphite-base transition-colors hover:bg-brass">
                0532 715 37 51
              </a>
              <Link href="/iletisim/" className="inline-block rounded-full border border-border-subtle px-6 py-3 font-saira font-medium text-text-secondary transition-colors hover:border-brass hover:text-text-primary">
                İletişim sayfasına git →
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-16">
          <h2 className="mb-6 font-saira text-xl font-semibold text-text-primary">
            Randevu veya soru
          </h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
