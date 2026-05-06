import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/dsg-yokusta-geri-kacirma/';

export const metadata: Metadata = {
  title: 'DSG Yokuşta Geri Kaçırma | Kavrama mı, Mekatronik mi?',
  description:
    "DSG yokuşta geri kaçırıyorsa sebep kavrama mı, hill-hold mu, mekatronik basınç mı? DQ200-DQ250 ayrımı ve güvenli sürüş kararı rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'DSG Yokuşta Geri Kaçırma | Eren Otomatik Şanzıman Servisi',
    description:
      "DSG rampada geri kaçıyorsa hangi durumda normal sayılmaz, ne zaman risklidir, ne zaman kavrama veya basınç tüpü düşünülür?",
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['dsg-yokusta-geri-kacirma'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'DSG Yokuşta Geri Kaçırıyor: Kavrama mı, Hill-Hold mu, Mekatronik mi?',
  description:
    "DSG'de yokuşta geri kaçma davranışının kavrama, mekatronik basınç ve hill-hold ayrımıyla okunması.",
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'DSG Yokuşta Geri Kaçırma', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const causeRows = [
  ['Kavrama', 'Geri kaçma + kayma + 1-2 silkelemesi + koku', 'Kavrama disk yorgunluğu, baskı zayıflığı'],
  ['Mekatronik / basınç', 'Soğukta tutmama + lamba + uzun motor sesi', 'Basınç tüpü, solenoid, hidrolik basınç düşüklüğü'],
  ['Hill-hold / sensör', 'Yalnız eğimde sorun, düz zeminde normal davranış', 'Eğim sensörü, ABS/ESC iletişimi, ayar/yazılım'],
] as const;

const transmissionRows = [
  ['DQ200', 'Çok yaygın', 'Basınç tüpü + kavrama kombinasyonu'],
  ['DQ250', 'Yaygın', 'Hidrolik basınç ve kavrama paketi birlikte okunur'],
  ['DQ381', 'Daha az', 'Hill-hold veya yazılım tarafı daha sık düşünülür'],
  ['DQ500', 'Orta', 'Ağır araçlarda ıslak kavrama yorulması'],
] as const;

const driveRows = [
  ['Yumuşak eğimde kısa geri kayma, başka belirti yok', 'Kısa süreli kullanım mümkün, erken kontrol'],
  ['Geri kaçma + soğukta gecikme', 'Uzun yola çıkmayın, servis öncelikli'],
  ['Geri kaçma + kayma hissi', 'Dik rampalardan kaçının, yakın servis'],
  ['Geri kaçma + yanık koku veya lamba', 'Sürmeyin, çekici daha güvenli'],
  ['Düz zeminde D konumunda da tutmama', 'Kritik, sürmeyin'],
] as const;

const precheckItems = [
  'Belirti yalnız rampada mı, düz zeminde de oluyor mu?',
  'Geri kaçmaya kayma, koku veya lamba eşlik ediyor mu?',
  'Araç soğukken mi daha belirgin, ısınınca düzeliyor mu?',
  'Hill-hold ayarı araç menüsünde aktif mi?',
  'Daha önce basınç tüpü, kavrama veya mekatronik işlemi yapıldı mı?',
] as const;

export default function DsgYokustaGeriKacirmaPage() {
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
              <span>DSG Yokuşta Geri Kaçırma</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Mikro Semptom
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              DSG yokuşta geri kaçırıyor
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Rampada dururken araç bir-iki saniye geriye kayıyor ya da gaza bastığınız hâlde önce
              geri sonra ileri gidiyorsa bu tek başına “kavrama bitti” demek değildir. Kavrama,
              mekatronik basıncı ve hill-hold sistemi birbirini taklit edebilir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">3 Hat</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Kavrama / basınç / hill-hold</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">DQ200</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">En sık vaka</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Risk</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Rampada önemlidir</div>
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
              Yokuşta geri kaçma, <strong>kavrama yorgunluğu</strong> kadar <strong>basınç tüpü /
              mekatronik</strong> ve <strong>hill-hold</strong> tarafını da düşündürür. Doğru karar,
              hangi hatta eşlik eden belirti olduğuna göre verilir.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            DSG&apos;li bir araçta durduğunuzda kavrama ayrılmış olmalı, freni bıraktığınızda ise
            hill-hold birkaç saniye aracı tutmalıdır. Geri kaçma bu iki davranıştan birinin düzgün
            çalışmadığını gösterir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Özellikle DQ200 tarafında{' '}
            <Link
              href="/hizmetler/dsg-basinc-tupu/"
              className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:decoration-brass"
            >
              basınç tüpü
            </Link>{' '}
            ve kavrama birlikte değerlendirilmelidir. Hill-hold tarafı atlanırsa da gereksiz kavrama
            değişimi kararı çıkabilir.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Üç ana sebep hattı
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Hat</th>
                    <th className="px-4 py-3">İmza</th>
                    <th className="px-4 py-3">Tipik sebep</th>
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
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Hill-hold bu işin neresinde?
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <p className="font-saira text-sm leading-7 text-text-secondary">
              Hill-hold, frenden ayağınızı çektiğinizde rampada fren basıncını kısa süre tutar.
              Eğer eğim sensörü, ABS/ESC iletişimi veya ayar tarafında sorun varsa şanzıman sağlıklı
              olsa bile geri kaçma yaşanabilir. Bu yüzden “yalnız eğimde oluyor, düz zeminde her şey
              normal” tarifini ciddiye almak gerekir.
            </p>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              En sık hangi DSG ailesinde görülür?
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Şanzıman</th>
                    <th className="px-4 py-3">Sıklık</th>
                    <th className="px-4 py-3">En tipik kaynak</th>
                  </tr>
                </thead>
                <tbody>
                  {transmissionRows.map((row) => (
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
            Güvenlik riski ne zaman büyür?
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-green-800">Düşük risk</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-green-900">
                <li>Yumuşak eğimde kısa süreli geri kayma</li>
                <li>Gaz verildiğinde hemen toparlama</li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-amber-800">Orta risk</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-amber-900">
                <li>Dik rampada belirgin geri kayma</li>
                <li>Trafikte dar alanlarda tedirgin eden tutmama</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-red-800">Yüksek risk</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-red-900">
                <li>Yanık koku + geri kaçma + kayma kombinasyonu</li>
                <li>Düz zeminde bile D konumunda tutmama</li>
                <li>Ek lamba ve boşa düşme öyküsü</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sürmeye devam edilir mi?
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Durum</th>
                    <th className="px-4 py-3">Karar</th>
                  </tr>
                </thead>
                <tbody>
                  {driveRows.map((row) => (
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
            Adaptasyon ne zaman çözebilir?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-green-800">Çözebilir</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-green-900">
                <li>Yağ değişimi veya yazılım sonrası başladıysa</li>
                <li>Kavrama aşınması hâlâ sınır içindeyse</li>
                <li>Başka belirti yoksa</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-red-800">Çözmez</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-red-900">
                <li>Basınç tüpü veya solenoid tarafı zayıfsa</li>
                <li>Kavrama fiziksel olarak yorulduysa</li>
                <li>Hill-hold sensör/modül kaynaklıysa</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Servise gitmeden önce kontrol listesi
            </h2>

            <div className="relative pl-6">
              <div className="absolute bottom-2 left-2 top-2 w-px bg-border-hairline" />
              {precheckItems.map((step, index) => (
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

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Eren&apos;de teşhis nasıl ilerler?
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
              <li>TCU, ABS ve ESC tarafı birlikte taranır.</li>
              <li>Hill-hold davranışı ve eğim sensörü verisi kontrol edilir.</li>
              <li>Mekatronik basıncı ve kavrama tepki süresi canlı veride okunur.</li>
              <li>Belirti rampada yol testiyle yeniden üretilir.</li>
              <li>Sonra yalnız baskın sebep hattına müdahale edilir.</li>
            </ul>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="dsg-yokusta-geri-kacirma" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/rehber/dsg-kavrama-ariza-belirtileri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG kavrama arıza belirtileri →
              </div>
            </Link>
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
              href="/rehber/dsg-kavrama-tolerans-limiti/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG kavrama tolerans limiti →
              </div>
            </Link>
            <Link
              href="/hizmetler/dsg-basinc-tupu/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG basınç tüpü →
              </div>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Rampada tutmama nedenini netleştirelim
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Kavrama mı, basınç mı, hill-hold mu sorusunu veriyle ayıralım; gereksiz parça
              değişimi yerine doğru hatta müdahale edelim.
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
