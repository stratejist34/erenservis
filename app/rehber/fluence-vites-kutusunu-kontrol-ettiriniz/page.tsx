import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/fluence-vites-kutusunu-kontrol-ettiriniz/';

export const metadata: Metadata = {
  title: 'Fluence Vites Kutusunu Kontrol Ettiriniz | EDC Uyarı Rehberi',
  description:
    'Renault Fluence ve Megane’da “Vites kutusunu kontrol ettiriniz” uyarısı ne demek? EDC beyin, kavrama, aktüatör ve akü kaynaklı senaryolar.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Fluence Vites Kutusunu Kontrol Ettiriniz | Eren Otomatik Şanzıman Servisi',
    description:
      'Fluence veya Megane EDC’de çıkan “Vites kutusunu kontrol ettiriniz” uyarısı hangi durumda ciddi, hangi durumda geçici? Karar rehberi.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-06',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['fluence-vites-kutusunu-kontrol-ettiriniz'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Renault Fluence “Vites Kutusunu Kontrol Ettiriniz” Uyarısı',
  description:
    'Fluence ve Megane EDC’de çıkan vites kutusunu kontrol ettiriniz uyarısının anlamı, sebepleri ve doğru servis kararı.',
  url: PAGE_URL,
  datePublished: '2026-05-06',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Fluence Vites Kutusunu Kontrol Ettiriniz', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const symptomRows = [
  ['Koruma modu / limp mode', 'Araç yalnız sınırlı viteslerle ilerlemeye başlar'],
  ['Geri vitesin gelmemesi', 'R konumuna geçmez veya gecikmeli tepki verir'],
  ['D harfinin kaybolması', 'Gösterge tarafında vites bilgisi kararsızlaşır'],
  ['Yokuş kalkış desteği uyarısı', 'Bazen ana uyarıya eşlik eden ikinci sinyal olur'],
] as const;

const causeRows = [
  ['EDC beyin / TCM', 'Isınınca hata verme, soğuyunca normale dönme', 'Mikro lehim ve elektronik iletişim hattı'],
  ['Kavrama aşınması', 'Silkeleme, bağırma, geçişte metalik his', 'Tolerans sınırı ve fiziksel yıpranma'],
  ['Aktüatör / vites seçici', 'Belirli viteslerde takılı kalma, geri vites problemi', 'Motor ve dişli mekanizması'],
  ['Akü / voltaj', 'Özellikle ilk marşta sahte uyarı, dalgalı davranış', 'Düşük voltaj hassasiyeti'],
] as const;

const decisionRows = [
  ['Uyarı geldi, kontak kapatınca düzeldi', 'Sorun geçmiş sayılmaz; özellikle beyin ısınma senaryosu düşünülür'],
  ['Uyarı + silkeleme uzun süredir vardı', 'Kavrama hattı güçlü adaydır'],
  ['Uyarı + geri vitese geçmeme', 'Aktüatör veya seçici tarafı öne çıkar'],
  ['Uyarı + sabah ilk marşta voltaj sorunu', 'Akü ve voltaj sağlığı kontrol edilmelidir'],
] as const;

export default function FluenceVitesKutusunuKontrolEttirinizPage() {
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
              <span>Fluence Vites Kutusunu Kontrol Ettiriniz</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Mikro Semptom
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Fluence “Vites kutusunu kontrol ettiriniz” uyarısı
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Renault Fluence ve çoğu zaman Megane 3 EDC kullanıcılarının en tedirgin olduğu mesajlardan
              biri budur. Uyarı geldiğinde araç bazen vitesleri kaybeder, bazen de kontağı kapatıp
              açınca geçici olarak normale döner.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">EDC</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Ana şanzıman ailesi</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4 Neden</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Beyin, kavrama, aktüatör, voltaj</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Panik Yok</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Ama beklemek de yok</div>
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
              Bu uyarı çoğu zaman EDC şanzımanın kendini korumaya aldığını gösterir. Sebep
              <strong> beyin ısınması</strong>, <strong>kavrama toleransının bitmesi</strong>,
              <strong> aktüatör arızası</strong> veya <strong>voltaj düşüklüğü</strong> olabilir.
              Kontağı kapatınca sönmesi sorunun geçtiği anlamına gelmez.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            EDC sisteminde bu mesaj genellikle araç hareket halindeyken ve çoğunlukla trafikte dur-kalk
            sonrası görünür. En sık hata, bunu “geçici elektronik naz” sanıp kullanmaya devam etmektir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Doğru yaklaşım, uyarının hangi davranışla birlikte geldiğini okumaktır: silkeleme mi vardı,
            geri viteste problem mi oldu, yoksa yalnız ısınınca mı ortaya çıktı?
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Uyarı geldiğinde araçta neler olur?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Davranış</th>
                    <th className="px-4 py-3">Ne görürsünüz?</th>
                  </tr>
                </thead>
                <tbody>
                  {symptomRows.map((row) => (
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
            Arızanın 4 temel nedeni
          </h2>
          <div className="overflow-hidden rounded-xl border border-border-hairline">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Hat</th>
                  <th className="px-4 py-3">İmza</th>
                  <th className="px-4 py-3">İlk yorum</th>
                </tr>
              </thead>
              <tbody>
                {causeRows.map((row) => (
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
              Kontağı kapatıp açmak çözüm mü?
            </h2>
            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Hayır. Bu yalnız beynin anlık olarak sıfırlanmasıdır. Özellikle ısınınca hata veren EDC
                beyin vakalarında araç bir süre normale dönebilir; ama sonraki trafikte hata tekrar gelir.
                Bu geçici rahatlama, gerçek sorunun büyümesini gizler.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
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
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Eren’de çözüm yaklaşımı
            </h2>
            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
                <li>Önce voltaj ve akü sağlığı dışlanır.</li>
                <li>Sonra beyin, kavrama ve aktüatör hattı hata kodu + davranış ile ayrılır.</li>
                <li>Gerekiyorsa beyin revizyonu, gerekiyorsa kavrama işlemi planlanır.</li>
                <li>Yetkisiz “önce değiştirelim, sonra bakarız” yaklaşımından kaçınılır.</li>
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
              href="/rehber/edc-ariza-lambasi/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">EDC</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Renault EDC arıza lambası →
              </div>
            </Link>
            <Link
              href="/rehber/otomatik-vites-kavrama-sorunu/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Genel</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Otomatik vites kavrama sorunu →
              </div>
            </Link>
            <Link
              href="/rehber/sanziman-arizasi-nasil-anlasilir/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Genel</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Şanzıman arızası nasıl anlaşılır? →
              </div>
            </Link>
            <Link
              href="/arac/renault/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Marka</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Renault şanzıman servisi →
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="fluence-vites-kutusunu-kontrol-ettiriniz" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Uyarıyı büyümeden netleştirelim
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              “Vites kutusunu kontrol ettiriniz” mesajı bazen beyin, bazen kavrama, bazen de voltaj
              sorunudur. Gereksiz parça değişimi yerine doğru hattı ayıralım.
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
