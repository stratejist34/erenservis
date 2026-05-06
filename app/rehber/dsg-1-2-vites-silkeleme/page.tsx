import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/dsg-1-2-vites-silkeleme/';

export const metadata: Metadata = {
  title: 'DSG 1-2 Vites Silkelemesi | Kavrama mı Mekatronik mi?',
  description:
    "DSG'de 1'den 2'ye geçişte silkeleme neden olur? DQ200 ve DQ250 ayrımı, kavrama-mekatronik teşhisi, adaptasyon sınırı ve servis kararı rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'DSG 1-2 Vites Silkelemesi | Eren Otomatik Şanzıman Servisi',
    description:
      "DQ200 ve DQ250'de 1'den 2'ye geçerken silkeleme neden olur, ne zaman beklenmez, adaptasyon ne zaman yeterli kalır?",
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['dsg-1-2-vites-silkeleme'] ?? [];

const articleSchema = buildArticleSchema({
  title: "DSG 1'den 2'ye Geçerken Silkeleme: Kavrama mı, Mekatronik mi?",
  description:
    "DSG'de 1'den 2'ye geçişte silkeleme, kavrama-mekatronik ayrımı, adaptasyon sınırı ve doğru servis kararı.",
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'DSG 1-2 Vites Silkeleme', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const transmissionRows = [
  ['DQ200', 'Çok yaygın', 'Kavrama disk yorulması, basınç tüpü, solenoid'],
  ['DQ250', 'Yaygın', 'Kavrama paketi yıpranması, mekatronik basınç düşüklüğü'],
  ['DQ381', 'Daha az', 'Yazılım veya adaptasyon tarafı'],
  ['DQ500', 'Yaygın', 'Ağır araç + ıslak kavrama yorulması'],
] as const;

const clutchSignals = [
  'Kalkışta sarsıntı ve geri tepme hissi',
  '2→3 ve 3→4 geçişlerinde de vuruntu',
  'Devir yükseliyor ama ivme geç geliyor',
  'Yanık kavrama kokusu',
  'Yoğun trafikten sonra belirgin titreme',
] as const;

const mechatronicSignals = [
  'Soğukta belirgin gecikme, ısınınca düzelme',
  'Anahtar / dişli ikonu yanıp sönmesi',
  'Tek seferlik bile olsa boşa düşme öyküsü',
  'Limp mode veya koruma modu geçmişi',
  'Basınç, solenoid veya P kilidi hata kodları',
] as const;

export default function Dsg12VitesSilkelemePage() {
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
              <span>DSG 1-2 Silkeleme</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Mikro Semptom
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              DSG 1&apos;den 2&apos;ye geçerken silkeleme
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              DSG&apos;nizde 1. vitesten 2. vitese geçişte merdiven çıkıyor gibi sarsıntı,
              kısa vuruntu veya düzensiz bağlama hissediyorsanız bu çoğu zaman erken bir uyarıdır.
              Ama her vakada doğrudan kavrama değişimi gerekmez.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">DQ200</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">En yaygın aile</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">3 Yol</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Kavrama / mekatronik / adaptasyon</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Erken</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Teşhis avantajı</div>
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
              1-2 silkelemesi çoğu vakada <strong>kavrama tarafını düşündürür</strong>; ancak
              basınç tüpü, solenoid veya adaptasyon kaybı da aynı davranışı üretebilir. Özellikle
              DQ200&apos;de doğru teşhis yapılmazsa yenilenen kavrama kısa sürede aynı semptomu
              tekrar verebilir.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            DSG çift kavramalı yapıda çalışır. 1&apos;den 2&apos;ye geçişte tek sayılı vitesleri taşıyan
            kavrama bırakırken çift sayılı hattı taşıyan diğer kavrama devreye girer. Bu geçiş
            pürüzsüz olması gerekirken darbe, sarsıntı veya kararsızlık hissediliyorsa içeride
            bir eşik bozulmuş demektir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            İyi haber şu: erken yakalanan vakalarda konu bazen yalnız{' '}
            <Link
              href="/blog/dq200-mekatronik-tamiri/"
              className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:decoration-brass"
            >
              mekatronik tarafında küçük bir müdahale
            </Link>{' '}
            ya da adaptasyon seviyesinde çözülebilir. Geç kalınırsa kavrama + mekatronik kombosuna
            döner.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              En sık hangi DSG&apos;de görülür?
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Şanzıman</th>
                    <th className="px-4 py-3">Sıklık</th>
                    <th className="px-4 py-3">En sık kaynak</th>
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
            Silkeleme her zaman kavrama mıdır?
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <p className="font-saira text-base leading-7 text-text-secondary">
              Hayır. Sahada en sık gördüğümüz hata, 1-2 silkelemesini otomatik olarak
              “kavrama bitmiş” diye okumaktır. Oysa aynı belirti üç farklı hat üzerinden
              gelebilir: kavrama yorgunluğu, mekatronik basınç sorunu veya adaptasyon kaybı.
              Bu yüzden veri olmadan verilen “direkt değişim” kararı yarım teşhistir.
            </p>
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
                  Kavrama tarafına işaret edenler
                </div>
                <ul className="space-y-2 font-saira text-sm text-text-secondary">
                  {clutchSignals.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
                <div className="mb-3 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
                  Mekatronik / basınç tarafına işaret edenler
                </div>
                <ul className="space-y-2 font-saira text-sm text-text-secondary">
                  {mechatronicSignals.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Adaptasyon ne zaman çözer, ne zaman çözmez?
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-green-800">Çözebilir</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-green-900">
                <li>Yağ değişimi sonrası yeni başlayan hafif kararsızlıklarda</li>
                <li>Akü değişimi veya yazılım güncellemesi sonrasında</li>
                <li>Kavrama aşınma değeri henüz düşük seviyedeyse</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-red-800">Çözmez</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-red-900">
                <li>Adaptasyon yapıldıktan kısa süre sonra belirti aynı şiddetle geri dönüyorsa</li>
                <li>Kavrama kayması, koku veya çoklu vites geçişinde sarsıntı başladıysa</li>
                <li>Hidrolik basınç fiziksel olarak düşükse</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sürmeye devam edilir mi?
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
                <p className="font-saira text-sm leading-7 text-text-secondary">
                  Belirti yalnız 1-2 geçişinde, performans normalse ve lamba yoksa kısa süreli
                  kullanım mümkün olabilir. Ama kayma, koku, boşa düşme veya ek uyarı lambası
                  varsa beklemek yerine kontrol gerekir. Ertelenen 1-2 silkelemesi çoğu zaman
                  kavrama → mekatronik → kombine tamir zincirine döner.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Servise gitmeden önce kontrol listesi
          </h2>

          <div className="relative pl-6">
            <div className="absolute bottom-2 left-2 top-2 w-px bg-border-hairline" />
            {[
              'Belirti soğukta mı, ısınınca mı artıyor?',
              'Yokuşta veya trafikte şiddetleniyor mu?',
              'Lamba, koku, kayma gibi eşlikçi belirti var mı?',
              'Son yağ değişimi veya yazılım işlemi ne zaman yapıldı?',
              'Şanzıman tipi DQ200 mü, DQ250 mi?',
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
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="dsg-1-2-vites-silkeleme" />
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
              href="/hizmetler/dsg-kavrama-degisimi/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG kavrama değişimi →
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
              1-2 silkelemesini büyümeden netleştirelim
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Kavrama mı, mekatronik mi, yoksa yalnız adaptasyon mu gerektiğini ücretsiz ön tanı
              ile kısa sürede netleştirelim.
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
