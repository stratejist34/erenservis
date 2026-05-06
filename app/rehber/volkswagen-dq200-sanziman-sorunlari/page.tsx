import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/volkswagen-dq200-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Volkswagen DQ200 Şanzıman Sorunları | Kuru DSG Rehberi',
  description:
    'Volkswagen DQ200 DSG şanzımanda kronik sorunlar, P17BF, basınç tüpü, 1-2 silkelemesi ve kuru kavrama davranışı için karar rehberi.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Volkswagen DQ200 Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      'Polo, Golf, Jetta ve benzeri VW modellerindeki 7 ileri kuru kavrama DQ200 DSG’de en sık görülen mekatronik ve kavrama sorunları.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['volkswagen-dq200-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Volkswagen DQ200 Şanzıman Sorunları: 7 İleri Kuru Kavrama DSG Rehberi',
  description:
    'Volkswagen DQ200 DSG’de kuru kavrama karakteri, basınç tüpü, P17BF, silkeleme ve doğru tamir yaklaşımı.',
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Volkswagen DQ200 Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const modelRows = [
  ['Polo', '1.0 TSI / 1.2 TSI / 1.4 TSI', 'DQ200 çok yaygın'],
  ['Golf', '1.2 TSI / 1.4 TSI / 1.6 TDI', 'DQ200 çok yaygın'],
  ['Jetta', '1.2 TSI / 1.4 TSI / 1.6 TDI', 'DQ200 yaygın'],
  ['T-Roc / Taigo', 'Düşük torklu TSI versiyonları', 'Yeni nesil DQ200 uygulamaları'],
  ['Passat', 'Bazı 1.4 TSI / 1.6 TDI varyantları', 'Her Passat DQ200 değildir'],
] as const;

const commonIssues = [
  ['Basınç tüpü / akümülatör', 'P17BF, P189C, anahtar lambası, geç bağlama'],
  ['1-2 silkelemesi', 'Kuru kavrama ısınması ve tolerans yorgunluğu'],
  ['P konumundan çıkmama', 'Mekatronik ve P kilidi hattı'],
  ['Geri vitesin gelmemesi', 'Çatal, basınç veya kart tarafı'],
  ['Soğukta gecikme', 'Basınç üretim süresi uzaması'],
] as const;

const dryClutchNotes = [
  'DQ200’de kavrama diskleri yağ banyosu içinde çalışmaz.',
  'Dur-kalk trafikte ve yarım debriyaj benzeri kullanımda daha hızlı ısınır.',
  'Isı arttıkça silkeleme, kararsız bağlama ve kavrama yüzeyi sertleşmesi daha görünür olur.',
  'Bu yüzden aynı DSG etiketi taşısa da DQ200, DQ250 veya DQ381 ile aynı davranmaz.',
] as const;

const diagnosisRows = [
  ['P17BF / P189C + anahtar lambası', 'Basınç tüpü ve mekatronik hattı ilk şüphedir'],
  ['1-2 silkelemesi + tolerans limiti', 'Kavrama hattı öne çıkar'],
  ['P’den çıkmama + soğukta gecikme', 'Mekatronik / P kilidi / basınç tarafı'],
  ['Koku + silkeleme + kayma', 'Kavrama artık fiziksel olarak yorulmuş olabilir'],
] as const;

export default function VolkswagenDq200SanzimanSorunlariPage() {
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
              <span>Volkswagen DQ200</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Matris Rehberi
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Volkswagen DQ200 Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              DQ200, Volkswagen grubunun özellikle düşük torklu motorlarında yıllarca çok yaygın
              kullanıldı. Hafif, verimli ve ekonomik bir DSG ailesidir; ama kuru kavrama yapısı
              nedeniyle bazı kronik davranışları vardır.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">DQ200</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">7 ileri kuru DSG</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">0AM / 0CW</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Teknik aile kodları</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Erken Teşhis</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Masrafı küçültür</div>
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
              DQ200 sorunlarının özeti şudur: <strong>kuru kavrama ısınması</strong> ile
              <strong> mekatronik basınç hattı</strong> aynı şanzımanda buluşur. Bu yüzden silkeleme,
              P17BF, anahtar lambası ve geri viteste kararsızlık gibi belirtiler aynı aile içinde sık
              görülür.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            İnternetteki “sorunlu DSG” söyleminin büyük kısmı aslında tek bir aileyi hedef alır:
            DQ200. Bu, tüm DSG’lerin aynı derecede riskli olduğu anlamına gelmez. Sorun çoğu zaman
            doğru aileyi, doğru belirtiyle okuyamamaktır.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Eren’de DQ200’e yaklaşımımız, ezbere komple değişim değil; önce gerçek hattı ayırmaktır.
            Bazen konu yalnız{' '}
            <Link
              href="/hizmetler/dsg-basinc-tupu/"
              className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:decoration-brass"
            >
              basınç tüpü
            </Link>{' '}
            seviyesinde kalır, bazen de kavrama ile birlikte okunması gerekir.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Hangi Volkswagen modellerinde görülür?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Model</th>
                    <th className="px-4 py-3">Motor tarafı</th>
                    <th className="px-4 py-3">Not</th>
                  </tr>
                </thead>
                <tbody>
                  {modelRows.map((row) => (
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
            Sorunun temeli: kuru kavrama ne demek?
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
              {dryClutchNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              DQ200’de en sık görülen kronik sorunlar
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Sorun</th>
                    <th className="px-4 py-3">Tipik imza</th>
                  </tr>
                </thead>
                <tbody>
                  {commonIssues.map((row) => (
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
            P17BF neden bu kadar bilinir?
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <p className="font-saira text-sm leading-7 text-text-secondary">
              Çünkü sahada DQ200’ün en klasik mekatronik-basınç hattı uyarılarından biridir. Bu kod
              çoğu zaman akümülatör/basınç tüpü, basınç üretimi veya ilgili mekatronik davranışına
              işaret eder. Önemli olan, bu kodu “direkt komple kart değişir” diye okumamaktır.
            </p>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Belirtiye göre ilk yorum
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
            Eren’de DQ200’e nasıl yaklaşıyoruz?
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
              <li>Önce canlı veri ve hata koduyla basınç hattı mı, kavrama hattı mı ayrılır.</li>
              <li>Basınç tüpü, sensör, solenoid ve P kilidi ayrı ayrı okunur.</li>
              <li>Gereksiz kart değişimi yerine mümkün olan en doğru kapsam seçilir.</li>
              <li>Kavrama değişiyorsa adaptasyon ve yol testi atlanmaz.</li>
            </ul>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="volkswagen-dq200-sanziman-sorunlari" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/rehber/golf-7-dsg-sanziman-sorunlari/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Model</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Golf 7 DSG şanzıman sorunları →
              </div>
            </Link>
            <Link
              href="/rehber/dsg-kavrama-tolerans-limiti/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG kavrama tolerans limiti →
              </div>
            </Link>
            <Link
              href="/rehber/dsg-1-2-vites-silkeleme/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG 1-2 vites silkelemesi →
              </div>
            </Link>
            <Link
              href="/blog/dq200-mekatronik-tamiri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DQ200 mekatronik tamiri →
              </div>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Volkswagen DQ200 belirtilerini erken okuyalım
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              P17BF, 1-2 silkelemesi veya anahtar lambasını tek tek değil, aynı kuru DSG ailesinin
              parçaları olarak okuyup doğru hatta müdahale edelim.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+905327153751"
                className="inline-block rounded-full bg-brass-bright px-6 py-3 font-saira font-semibold text-graphite-base transition-colors hover:bg-brass"
              >
                0532 715 37 51
              </a>
              <Link
                href="/iletisim/"
                className="inline-block rounded-full border border-border-subtle px-6 py-3 font-saira font-medium text-text-secondary transition-colors hover:border-brass hover:text-text-primary"
              >
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
