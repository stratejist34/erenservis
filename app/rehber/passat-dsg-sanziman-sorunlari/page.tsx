import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/passat-dsg-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Passat DSG Şanzıman Sorunları | DQ250, DQ381 ve DQ500 Rehberi',
  description:
    "Volkswagen Passat'ta DSG şanzıman sorunları, DQ250-DQ381-DQ500 farkları, uzun yol ve filo kullanımında en sık belirtiler ve doğru servis kararı.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Passat DSG Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      "Passat'ta ıslak DSG davranışı, DQ250 ve DQ500 belirtileri, mekatronik mi kavrama mı ayrımı ve yağ disiplini rehberi.",
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['passat-dsg-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Passat DSG Şanzıman Sorunları: DQ250, DQ381 ve DQ500 Rehberi',
  description:
    "Passat'ta en sık görülen DSG belirtileri, ıslak çift kavrama yapısının farkları, uzun yol ve filo kullanımında yorulma davranışı.",
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Passat DSG Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const transmissionMatrix = [
  ['1.4 TSI', 'DQ200 (eski yıllar) / DQ381', 'Kuru / Islak', '7'],
  ['1.5 TSI EVO', 'DQ381', 'Islak', '7'],
  ['1.6 TDI', 'DQ200 (eski) / DQ250', 'Kuru / Islak', '7 / 6'],
  ['2.0 TDI', 'DQ250 / DQ381', 'Islak', '6 / 7'],
  ['2.0 TDI BiTurbo', 'DQ500', 'Islak', '7'],
  ['2.0 TSI', 'DQ250 / DQ381', 'Islak', '6 / 7'],
] as const;

const commonIssues = [
  'Soğukta vites geçiş gecikmesi',
  'Limp mode veya geçici koruma modu',
  'Hidrolik basınç düşüklüğü uyarısı',
  'Yüksek kilometrede kalkış sarsıntısı',
  'Yağ kaçağı veya seviye düşmesi',
  'Ani boşa düşme veya geç bağlama',
  'DQ381 tarafında yazılım kararsızlığı',
] as const;

const mileageRows = [
  ['0-100.000 km', 'Çoğu araç temiz; yağ planı izlenir', 'Çoğu araç temiz; yağ + filtre planı yapılır'],
  ['100.000-140.000 km', 'Gecikme ve basınç uyarısı başlangıcı', 'Hafif geçiş gecikmeleri'],
  ['140.000-180.000 km', 'Limp mode öyküsü, ilk kavrama yorgunluğu', 'Kavrama yorulma başlangıcı'],
  ['180.000-220.000 km', 'Kavrama + mekatronik kombo vakalar', 'Hidrolik basınç ve mekatronik müdahalesi'],
  ['220.000+ km', 'Kapsamlı revizyon olasılığı', 'Kavrama paketi ve kart revizyonu daha sık'],
] as const;

export default function PassatDsgSanzimanSorunlariPage() {
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
              <span>Passat DSG</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Model Rehberi
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Passat DSG Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Passat&apos;ta DSG davranışı Golf ve Octavia&apos;dan farklıdır. Büyük kasa, yüksek
              tork ve uzun yol kilometresi nedeniyle DQ250, DQ381 ve DQ500 gibi ıslak DSG
              ailelerinde mekatronik basınç ve yağ disiplini daha belirleyici hale gelir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">3</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Ana DSG ailesi</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">60K</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Yağ disiplini</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Filo+</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Yüksek km profili</div>
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
              Passat DSG vakalarında ana risk çoğu zaman kuru kavrama değil,{' '}
              <strong>ıslak DSG&apos;de basınç ve mekatronik hattının yorulmasıdır.</strong>{' '}
              Özellikle DQ250 ve DQ500 tarafında yağ + filtre disiplini atlanırsa küçük
              gecikme ve uyarı lambaları daha büyük tamir zincirine dönebilir.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            Passat, Türkiye&apos;de hem uzun yol kullanan bireysel sahipler hem de şirket /
            filo araçları arasında çok yaygın. Bu yüzden aynı modelde iki ayrı yıpranma
            profili görüyoruz: bakımlı uzun yol Passat&apos;ı ile yoğun kilometre yapan filo
            Passat&apos;ı aynı kilometrede çok farklı davranabilir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Eğer sizde belirti daha çok geç bağlama, soğukta gecikme, ani boşa düşme veya
            arada bir koruma modu şeklindeyse, önce{' '}
            <Link
              href="/blog/dsg-mekatronik-ariza-belirtileri/"
              className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:decoration-brass"
            >
              mekatronik belirtileri
            </Link>{' '}
            tarafına bakmak gerekir. Yüksek kilometreli sarsıntı ve kayma ise kavrama
            paketini de gündeme sokar.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Passat&apos;ta hangi DSG var?
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

            <div className="mt-5 rounded-xl border border-border-hairline bg-graphite-base p-4">
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Pratik kural: eski 1.6 TDI ve bazı 1.4 TSI Passat&apos;larda DQ200 görülebilir;
                2.0 TDI ve 2.0 TSI tarafında ise çoğu zaman DQ250 veya DQ381 vardır. 4Motion
                ve yüksek torklu versiyonlar DQ500 tarafına yaklaşır.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-2 font-saira text-2xl font-semibold text-text-primary">
            Passat&apos;ta en sık görülen 7 şanzıman sorunu
          </h2>
          <p className="mb-8 font-saira text-sm text-text-secondary">
            Bu modelde ilk semptomlar çoğu zaman basınç ve mekatronik hattından gelir.
          </p>

          <div className="grid gap-3">
            {commonIssues.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-border-hairline bg-graphite-surface p-5"
              >
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
              DQ250 ve DQ500 Passat&apos;ta nasıl farklı yorulur?
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
                <div className="mb-2 font-jetbrains text-xs font-semibold uppercase tracking-[0.16em] text-iron-light">
                  DQ250
                </div>
                <p className="mb-3 font-saira text-sm font-semibold text-text-primary">
                  2.0 TDI ve 2.0 TSI Passat&apos;larda en sık görülen ıslak DSG
                </p>
                <ul className="space-y-2 font-saira text-sm text-text-secondary">
                  <li>100-140 bin km aralığında ilk gecikme ve basınç uyarıları başlayabilir.</li>
                  <li>140-180 bin km aralığında kavrama + mekatronik birlikte yorulabilir.</li>
                  <li>Yağ ihmali varsa hidrolik blok davranışı daha erken bozulur.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
                <div className="mb-2 font-jetbrains text-xs font-semibold uppercase tracking-[0.16em] text-iron-light">
                  DQ500
                </div>
                <p className="mb-3 font-saira text-sm font-semibold text-text-primary">
                  4Motion ve yüksek torklu Passat versiyonlarında daha dayanıklı ama daha pahalı hat
                </p>
                <ul className="space-y-2 font-saira text-sm text-text-secondary">
                  <li>İlk dönemlerde temiz kalır; yağ kalitesi davranışı doğrudan etkiler.</li>
                  <li>160 bin km sonrasında kavrama ve mekatronik eş zamanlı yorulabilir.</li>
                  <li>Yanlış yağ veya gecikmiş bakım toplam maliyeti hızla büyütür.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-2 font-saira text-2xl font-semibold text-text-primary">
            Kilometre × belirti tablosu
          </h2>
          <p className="mb-8 font-saira text-sm text-text-secondary">
            Filo araçlarında bu eşikler genelde 30-50 bin km daha erkene kayar.
          </p>

          <div className="overflow-hidden rounded-xl border border-border-hairline">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Kilometre</th>
                  <th className="px-4 py-3">DQ250</th>
                  <th className="px-4 py-3">DQ500</th>
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
              Kavrama mı, mekatronik mi?
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
                <div className="mb-3 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
                  Mekatronik / basınç tarafı baskınsa
                </div>
                <ul className="space-y-2 font-saira text-sm text-text-secondary">
                  <li>Soğukta belirgin vites gecikmesi</li>
                  <li>Limp mode veya geçici koruma modu</li>
                  <li>Hidrolik basınç düşüklüğü kodları</li>
                  <li>Ani boşa düşme veya geç bağlama</li>
                  <li>Yağ kaçağı ve seviye düşmesi</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
                <div className="mb-3 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
                  Kavrama tarafı baskınsa
                </div>
                <ul className="space-y-2 font-saira text-sm text-text-secondary">
                  <li>Yüksek kilometrede kalkış sarsıntısı</li>
                  <li>Yüklü kullanımda kayma hissi</li>
                  <li>Yüksek tork çıkışında performans kaybı</li>
                  <li>Uzun süre ihmal edilmiş kombo vakalar</li>
                  <li>Volantla beraber büyüyen titreşim zinciri</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Adaptasyon ne zaman yeter, ne zaman yetmez?
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-green-800">Yeterli olabilir</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-green-900">
                <li>Yağ + filtre değişimi sonrasında yeni başlayan hafif davranış farkları</li>
                <li>Akü veya yazılım güncellemesi sonrası oluşan küçük kararsızlıklar</li>
                <li>Basınç ve sıcaklık değerleri hâlâ normal aralıkta ise</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-red-800">Yetersiz kalır</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-red-900">
                <li>Fiziksel hidrolik basınç düşüklüğü varsa</li>
                <li>Pres regülatör veya sensör davranışı bozulduysa</li>
                <li>Yağ kaçağı mevcutsa</li>
                <li>Adaptasyon yapıldıktan kısa süre sonra belirti geri dönüyorsa</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Servis kararı — adım adım
            </h2>

            <div className="relative pl-6">
              <div className="absolute bottom-2 left-2 top-2 w-px bg-border-hairline" />
              {[
                'Şanzıman tipini kesinleştir: DQ250, DQ381 veya DQ500',
                'Kullanım profilini ayır: bireysel uzun yol mu, filo mu?',
                'VCDS / orijinal cihazla tarama yaptır',
                'Canlı veri ile basınç ve yağ sıcaklığını gör',
                'Yağ seviyesi ve kaçak kontrolünü ihmal etme',
                'Adaptasyon önerildiyse uygula, kısa izleme yap',
                'Fiziksel müdahale gerekiyorsa yazılı teklif al',
              ].map((step, index) => (
                <div key={step} className="relative mb-6 last:mb-0">
                  <div className="absolute -left-6 top-1 h-4 w-4 rounded-full border-2 border-border-brass bg-graphite-base" />
                  <div className="mb-1 font-jetbrains text-xs text-brass">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="font-saira text-sm leading-7 text-text-secondary">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="passat-dsg-sanziman-sorunlari" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/blog/dsg-mekatronik-ariza-belirtileri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG mekatronik arıza belirtileri →
              </div>
            </Link>
            <Link
              href="/hizmetler/dsg-mekatronik-kart/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG mekatronik kart tamiri →
              </div>
            </Link>
            <Link
              href="/rehber/dsg-sanziman-omru-bakimi/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Bakım</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG ömrü ve bakım disiplini →
              </div>
            </Link>
            <Link
              href="/hizmetler/dsg-sanziman-tamiri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Ana hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG şanzıman tamiri →
              </div>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Passat DSG belirtileriniz büyümeden netleştirelim
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Uzun yol Passat&apos;ı ile filo Passat&apos;ı aynı şekilde yorulmaz. Ücretsiz ön tanı
              ile önce hangi hattın sorun ürettiğini netleştirip sonra doğru müdahaleye geçelim.
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
