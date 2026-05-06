import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/renault-edc-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Renault EDC Şanzıman Sorunları | Beyin ve Kavrama Rehberi',
  description:
    'Renault Clio, Megane, Fluence, Kadjar ve Talisman EDC şanzıman sorunları: beyin ısınması, titreme, kavrama aşınması ve doğru servis kararı.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Renault EDC Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      'Renault EDC şanzımanda beyin mi, kavrama mı? Clio, Megane, Fluence, Kadjar ve Talisman için semptom, aile ve çözüm rehberi.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-06',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['renault-edc-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Renault EDC Şanzıman Sorunları',
  description:
    'Renault EDC şanzımanda beyin ısınması, kavrama titremesi, aktüatör sorunları ve kuru-ıslak kavrama farkları için karar rehberi.',
  url: PAGE_URL,
  datePublished: '2026-05-06',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Renault EDC Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const modelRows = [
  ['Clio / Captur', '6 ileri kuru EDC', 'Şehir içi dur-kalkta kavrama yıpranması daha görünür olabilir'],
  ['Fluence / Megane 3', '6 ileri kuru EDC', 'Beyin ısınması ve “vites kutusunu kontrol ettiriniz” hattı sık sorulur'],
  ['Megane 4 1.3 TCe / Kadjar / Talisman', '7 ileri ıslak EDC', 'Yağ disiplini ve sıcaklık yönetimi daha kritik hâle gelir'],
] as const;

const issueRows = [
  ['“Vites kutusunu kontrol ettiriniz” uyarısı', 'EDC beyin / TCM, aktüatör veya voltaj hattı'],
  ['Kalkışta titreme ve 1-2 geçişte silkeleme', 'Kuru kavrama aşınması veya camlaşma'],
  ['Sıcakken koruma moduna düşme', 'Beyin ısınması ve iletişim kopması'],
  ['D veya R konumunda geç bağlanma', 'Aktüatör, seçici mekanizma veya kavrama toleransı'],
] as const;

const decisionRows = [
  ['Uyarı sıcak trafikte geliyor, soğuyunca düzeliyor', 'Beyin ısınması ve elektronik iletişim hattı öne çıkar'],
  ['Uzun süredir silkeleme vardı, sonra uyarı geldi', 'Kavrama aşınması ana adaydır; beyin ikincil eşlik ediyor olabilir'],
  ['Geri vites nazlanıyor veya hiç gelmiyor', 'Aktüatör ve vites seçici tarafı kontrol edilmelidir'],
  ['Yalnız sabah ilk marşta uyarı çıkıyor', 'Akü, voltaj ve bağlantı sağlığı dışlanmadan karar verilmemelidir'],
] as const;

const solutionSteps = [
  'Önce akü ve voltaj sağlığı kontrol edilir; zayıf voltajın sahte EDC arızası üretmesi engellenir.',
  'Sonra beyin, kavrama ve aktüatör tarafı hata kodu ile gerçek sürüş davranışı birlikte okunur.',
  'Beyin arızası doğrulanırsa gereksiz komple değişim yerine revizyon olasılığı değerlendirilir.',
  'Kavrama hattı öndeyse yalnız parça değişimi değil, adaptasyon ve yol testi standardı uygulanır.',
] as const;

export default function RenaultEdcSanzimanSorunlariPage() {
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
              <span>Renault EDC Şanzıman Sorunları</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Marka × Şanzıman
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Renault EDC Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Renault’nun Clio’dan Talisman’a uzanan EDC ailesi, yakıt ekonomisi ve konforu iyi
              bir dengede sunar. Ama özellikle yoğun dur-kalk trafiğinde beyin ısınması,
              kavrama titremesi ve aktüatör tarafındaki sorunlar belirli bir kilometreden sonra
              daha görünür hâle gelir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">EDC</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  Çift kavramalı Renault ailesi
                </div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">2 Hat</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  Beyin ve kavrama en sık ayrım
                </div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Erken Karar</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  Maliyeti büyümeden müdahale
                </div>
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
              Renault EDC arızalarının büyük kısmı <strong>beyin ısınması</strong>,
              <strong> kavrama aşınması</strong> ve daha az sıklıkla <strong>aktüatör</strong>{' '}
              hattında toplanır. “Vites kutusunu kontrol ettiriniz” uyarısı tek başına karar
              verdirmez; silkeleme, sıcaklık davranışı ve geri vites tepkisiyle birlikte
              okunmalıdır.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            EDC, temel mantık olarak DSG’ye akraba bir sistemdir; ama Renault tarafında özellikle
            kuru kavramalı varyantlarda şehir içi kullanım profili çok belirleyici olur. Bu yüzden
            aynı belirti Clio’da başka, Talisman’da başka yoruma açılabilir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Doğru teşhis için önce aracın hangi EDC yapısına sahip olduğu, sonra uyarının hangi
            sürüş koşulunda geldiği netleştirilmelidir.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Hangi Renault hangi EDC yapısını kullanır?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Model grubu</th>
                    <th className="px-4 py-3">Yapı</th>
                    <th className="px-4 py-3">Öne çıkan davranış</th>
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
            En sık görülen EDC sorunları
          </h2>
          <div className="overflow-hidden rounded-xl border border-border-hairline">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Belirti</th>
                  <th className="px-4 py-3">İlk şüphe hattı</th>
                </tr>
              </thead>
              <tbody>
                {issueRows.map((row) => (
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
              Beyin mi, kavrama mı?
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
                  {decisionRows.map((row) => (
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
          <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
            Kuru kavrama ile ıslak kavrama farkı neden önemli?
          </h2>
          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <p className="mb-4 font-saira text-sm leading-7 text-text-secondary">
              Kuru EDC varyantlarında en büyük risk, kavrama yüzeyinin şehir içi kullanımda daha
              hızlı ısınması ve titreme üretmesidir. Islak EDC tarafında ise mekanik dayanım daha
              yüksek olsa da bu kez yağ kalitesi ve bakım disiplini doğrudan belirleyici olur.
            </p>
            <p className="font-saira text-sm leading-7 text-text-secondary">
              Bu yüzden “Renault EDC sorunlu mu?” sorusunun cevabı modelden bağımsız verilemez;
              önce hangi aile kullanıldığı bilinmelidir.
            </p>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Eren’de çözüm yaklaşımı
            </h2>
            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
                {solutionSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/rehber/fluence-vites-kutusunu-kontrol-ettiriniz/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Renault EDC</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Fluence “vites kutusunu kontrol ettiriniz” → 
              </div>
            </Link>

            <Link
              href="/rehber/otomatik-vites-kavrama-sorunu/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Genel Kavrama</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Otomatik vites kavrama sorunu → 
              </div>
            </Link>

            <Link
              href="/rehber/sanziman-arizasi-nasil-anlasilir/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated sm:col-span-2"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Karar Rehberi</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Şanzıman arızası nasıl anlaşılır? →
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-graphite-base px-4 py-12">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border-brass/40 bg-graphite-surface p-6">
            <div className="mb-3 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
              Servis Kararı
            </div>
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              EDC arızasında komple değişim her zaman tek yol değildir
            </h2>
            <p className="mb-5 font-saira text-sm leading-7 text-text-secondary">
              Renault EDC’de doğru ayrım yapılırsa bazı vakalarda beyin revizyonu, bazı vakalarda
              yalnız kavrama müdahalesiyle daha rasyonel çözüm mümkün olur. Önemli olan önce hangi
              hattın gerçekten arıza ürettiğini netleştirmektir.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/iletisim/"
                className="inline-flex items-center justify-center rounded-lg bg-brass px-5 py-3 font-saira text-sm font-semibold text-graphite-base transition-transform hover:-translate-y-0.5"
              >
                Ücretsiz ön tanı için iletişime geçin
              </Link>
              <Link
                href="/hizmetler/dsg-sanziman-tamiri/"
                className="inline-flex items-center justify-center rounded-lg border border-border-hairline px-5 py-3 font-saira text-sm font-semibold text-text-primary transition-colors hover:border-border-brass hover:text-brass"
              >
                Çift kavrama hizmet yaklaşımımızı görün
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <TransmissionFaq slug="renault-edc-sanziman-sorunlari" />
          </div>
        </section>

        <section className="bg-graphite-base px-4 pb-20">
          <div className="mx-auto max-w-2xl">
            <ContactForm
              title="Renault EDC belirtinizi yazın"
              description="Clio, Megane, Fluence, Kadjar veya Talisman EDC’de yaşadığınız belirtiyi yazın; hangi hattın öne çıktığını birlikte netleştirelim."
              source="rehber_renault_edc_sanziman_sorunlari"
              ctaLabel="Ön tanı talep et"
            />
          </div>
        </section>
      </main>
    </>
  );
}
