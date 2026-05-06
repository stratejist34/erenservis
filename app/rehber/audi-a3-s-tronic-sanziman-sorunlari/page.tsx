import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/audi-a3-s-tronic-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Audi A3 S-Tronic Şanzıman Sorunları | DQ200 ve DQ250',
  description:
    "Audi A3 S-Tronic sorunları, S-Tronic ile DSG farkı, DQ200-DQ250 ayrımı, kavrama-mekatronik tecrübesi ve doğru servis kararı rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Audi A3 S-Tronic Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      "A3'te S-Tronic ile DSG aynı mı, hangi motor hangi DSG'yi kullanır, premium beklentide hangi belirtiler öne çıkar?",
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['audi-a3-s-tronic-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Audi A3 S-Tronic Şanzıman Sorunları: DQ200 ve DQ250 Rehberi',
  description:
    "Audi A3 S-Tronic ile DSG ilişkisinin, motor-şanzıman matrisinin ve saha belirtilerinin açık rehberi.",
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Audi A3 S-Tronic Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const transmissionMatrix = [
  ['1.0 TFSI', 'DQ200', 'Kuru', '7'],
  ['1.2 TFSI', 'DQ200', 'Kuru', '7'],
  ['1.4 TFSI', 'DQ200', 'Kuru', '7'],
  ['1.5 TFSI EVO', 'DQ200 / DQ381', 'Kuru / ıslak', '7'],
  ['1.6 TDI', 'DQ200', 'Kuru', '7'],
  ['1.8 TFSI', 'DQ250', 'Islak', '6 / 7'],
  ['2.0 TDI', 'DQ250 / DQ381', 'Islak', '6 / 7'],
  ['S3 / RS3', 'DQ381 / DQ500 / DQ501', 'Islak', '7'],
] as const;

const commonIssues = [
  'Kalkışta hafif titreme veya 1-2 silkelemesi',
  'Anahtar / dişli ikonu uyarısı',
  'P konumundan çıkmama',
  'Soğukta vites geçiş gecikmesi',
  'Yokuşta hafif geri kaçma',
  'Limp mode veya koruma modu',
  'Vites geçişinde premium hissin kaybolması',
] as const;

const expectationRows = [
  ['Geçiş yumuşaklığı', 'Küçük kalibrasyon kaybı bile daha erken fark edilir'],
  ['Kabin sessizliği', 'Basınç tüpü veya hidrolik sesler daha erken duyulur'],
  ['Marka algısı', 'Yetkili servis dışında çözüm aramayı geciktirebilir'],
] as const;

const mileageRows = [
  ['80.000-120.000 km', 'Anahtar lambası, soğukta gecikme, ilk kalite hissi kaybı', 'Geçiş gecikmesi, yazılım hassasiyeti'],
  ['120.000-150.000 km', '1-2 silkelemesi, geri kaçma, tolerans kodu', 'Limp mode öyküsü, ilk kavrama yorulması'],
  ['150.000+ km', 'Kavrama + basınç tüpü kombo vakalar', 'Kavrama + mekatronik kombo vakalar'],
] as const;

const diagnosisRows = [
  ['Kalkışta hafif titreme + 1-2 silkelemesi', 'Kavrama hattı öne çıkar'],
  ['Anahtar lambası + soğukta gecikme', 'Mekatronik / basınç hattı öne çıkar'],
  ['“Eskisi kadar pürüzsüz değil” hissi', 'Erken kalibrasyon kaybı veya adaptasyon ihtiyacı olabilir'],
  ['Limp mode + 1.8/2.0 motor', 'Islak DSG tarafı daha dikkatli okunmalı'],
] as const;

export default function A3STronicSanzimanSorunlariPage() {
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
              <span>Audi A3 S-Tronic</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Model Rehberi
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Audi A3 S-Tronic Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Audi A3 sahibinin ilk sorusu genelde şudur: “Bende S-Tronic var, DSG ile aynı şey mi?”
              Kısa cevap evet. S-Tronic, Audi&apos;nin DSG için kullandığı isimdir; ama A3 kullanıcısının
              beklentisi ve algısı farklı olduğu için belirtiler daha erken fark edilir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">S-Tronic</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">DSG ailesi</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Premium</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Beklenti farkı</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">DQ200</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">En yaygın A3 ailesi</div>
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
              Audi A3&apos;teki S-Tronic, mekanik olarak DSG ile aynı ailedendir. Bu yüzden Golf ve
              Octavia üzerinde biriken gerçek DSG tecrübesi A3 için de geçerlidir. Farkı oluşturan
              şey çoğu zaman marka algısı ve premium sürüş beklentisidir.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            A3 sahibinin algısı daha hassastır. Golf 7 sürücüsünün fark etmeyebileceği küçük bir
            geçiş sertliği, A3 sahibine hemen “araç eski gibi değil” hissi verir. Bu kötü bir şey
            değildir; çoğu zaman erken uyarıdır.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Doğru yaklaşım, S-Tronic ismine takılmadan şanzımanın hangi DSG ailesine ait olduğunu
            öğrenmek ve sonra kavrama mı mekatronik mi sorusunu veriyle ayırmaktır.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              S-Tronic ile DSG aynı mı?
            </h2>

            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Evet. Volkswagen, Skoda ve Seat bu aileye DSG derken Audi aynı mühendisliği
                S-Tronic adıyla sunar. DQ200, DQ250, DQ381 ve DQ500 gibi temel şanzıman kodları
                markalar arasında ortak kullanılır.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
            A3&apos;te hangi DSG var?
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
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-2 font-saira text-2xl font-semibold text-text-primary">
            A3 S-Tronic&apos;te en sık görülen 7 sorun
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
              A3 sahibinin fark ettiği şey neden farklı?
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Alan</th>
                    <th className="px-4 py-3">A3 etkisi</th>
                  </tr>
                </thead>
                <tbody>
                  {expectationRows.map((row) => (
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
          <h2 className="mb-2 font-saira text-2xl font-semibold text-text-primary">
            Kilometre × belirti tablosu
          </h2>
          <div className="overflow-hidden rounded-xl border border-border-hairline mt-8">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Kilometre</th>
                  <th className="px-4 py-3">DQ200 A3</th>
                  <th className="px-4 py-3">DQ250 / DQ381 A3</th>
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
              A3 özelinde kavrama mı, mekatronik mi?
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
            Yetkili servis mi, uzman özel servis mi?
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <p className="font-saira text-sm leading-7 text-text-secondary">
              A3 sahiplerinin önemli bir kısmı S-Tronic ismi yüzünden yetkili servis dışına çıkmayı
              geciktiriyor. Oysa DSG ailesini gerçekten bilen uzman özel servisler çoğu vakada hem
              daha doğru teşhis koyar hem de komple değişim yerine tamir / revizyon alternatiflerini
              masaya koyar.
            </p>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="audi-a3-s-tronic-sanziman-sorunlari" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/rehber/golf-7-dsg-sanziman-sorunlari/" className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated">
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Karşılaştırma</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">Golf 7 DSG rehberi →</div>
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
              A3 S-Tronic davranışını doğru okuyalım
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Premium his kaybının arkasında gerçek aşınma mı var, yoksa erken kalibrasyon bozulması mı;
              bunu veriyle netleştirelim.
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
