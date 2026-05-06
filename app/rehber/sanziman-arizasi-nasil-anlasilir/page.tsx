import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/sanziman-arizasi-nasil-anlasilir/';

export const metadata: Metadata = {
  title: 'Şanzıman Arızası Nasıl Anlaşılır? | İlk Belirti Rehberi',
  description:
    'Şanzıman arızası gecikme, vuruntu, ses, koku, kaçak ve uyarı lambasıyla nasıl anlaşılır? İlk karar rehberi ve risk işaretleri.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Şanzıman Arızası Nasıl Anlaşılır? | Eren Otomatik Şanzıman Servisi',
    description:
      'Otomatik şanzıman arızası tek bir belirtiyle değil, davranış kombinasyonuyla anlaşılır. Gecikme, vuruntu, koku ve lamba için hızlı karar rehberi.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['sanziman-arizasi-nasil-anlasilir'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Şanzıman Arızası Nasıl Anlaşılır?',
  description:
    'Şanzıman arızasında gecikme, vuruntu, yeni başlayan ses, yanık koku, yağ kaçağı ve uyarı lambası nasıl okunur?',
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Şanzıman Arızası Nasıl Anlaşılır?', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const signs = [
  ['Geç bağlama', 'D veya R konumunda araç hemen tepki vermiyor, kısa boşluk hissi oluşuyor'],
  ['Vuruntu / sarsıntı', 'Vites değişiminde arkadan itilme veya sert geçiş hissi var'],
  ['Yeni başlayan ses', 'Uğultu, ıslık veya mekanik tıkırtı daha önce yokken ortaya çıktı'],
  ['Koku / kaçak', 'Yanık koku veya park yerinde yağ izi fiziksel uyarı veriyor'],
] as const;

const decisionRules = [
  'Belirti aralıklıysa önemsiz değildir; çoğu zaman erken yakalama fırsatıdır.',
  'Belirtiye lamba eşlik ediyorsa sistem de sorunu kaydetmiş demektir.',
  'Koku + vuruntu + gecikme birlikte varsa beklemek maliyeti büyütebilir.',
] as const;

const quickCheckItems = [
  'Sorun soğukken mi, ısınınca mı belirginleşiyor?',
  'D veya R konumunda gecikme var mı?',
  'Yokuşta davranış daha mı kötü?',
  'Zeminde yağ izi veya koku değişimi var mı?',
  'Uyarı lambası eşlik ediyor mu?',
] as const;

export default function SanzimanArizasiNasilAnlasilirPage() {
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
              <span>Şanzıman Arızası Nasıl Anlaşılır?</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Genel Rehber
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Şanzıman arızası nasıl anlaşılır?
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Şanzıman arızası çoğu zaman tek bir belirtiyle değil, davranış kombinasyonuyla anlaşılır.
              Sadece ses, sadece koku veya sadece gecikme bazen yanıltıcı olabilir; doğru okuma bu
              belirtilerin birlikte nasıl davrandığına bakar.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4 İşaret</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Gecikme, vuruntu, ses, koku</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Kombinasyon</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Tek belirti yetmeyebilir</div>
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
              Şanzıman arızası; <strong>geç bağlama</strong>, <strong>vuruntu</strong>,
              <strong> yeni başlayan ses</strong>, <strong>yanık koku</strong>,
              <strong> yağ kaçağı</strong> ve <strong>uyarı lambası</strong> ile anlaşılır.
              En kritik eşik, bu belirtilerin birlikte görülmesidir.
            </p>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              En temel 4 işaret
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {signs.map(([title, detail]) => (
                <div key={title} className="rounded-xl border border-border-hairline bg-graphite-base p-5">
                  <h3 className="mb-2 font-saira text-lg font-semibold text-text-primary">{title}</h3>
                  <p className="font-saira text-sm leading-7 text-text-secondary">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            İlk karar mantığı
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <ol className="space-y-4 pl-5">
              {decisionRules.map((rule) => (
                <li key={rule} className="font-saira text-sm leading-7 text-text-secondary">
                  {rule}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Neden geç fark edilir?
            </h2>

            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Çünkü birçok sürücü davranış değişimini sürüş tarzına, yokuşa, havaya veya yakıta bağlar.
                Oysa şanzıman sorunları çoğu zaman önce küçük kararsızlıklarla başlar. Arıza ışığının
                yanmasını beklemek, birçok vakada geç kalmaktır.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Hızlı kontrol listesi
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
              {quickCheckItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/rehber/otomatik-sanziman-ariza-lambasi/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Otomatik şanzıman arıza lambası →
              </div>
            </Link>
            <Link
              href="/rehber/otomatik-sanziman-vuruntu/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Otomatik şanzımanda vuruntu →
              </div>
            </Link>
            <Link
              href="/rehber/otomatik-sanziman-gecikme/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Otomatik şanzımanda gecikme →
              </div>
            </Link>
            <Link
              href="/rehber/dsg-yag-kacagi-belirtileri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG yağ kaçağı belirtileri →
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="sanziman-arizasi-nasil-anlasilir" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Belirtiyi birlikte daraltalım
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Araç hangi durumda sorun çıkarıyor, hangi lambayı yakıyor ve hangi davranışı değiştiriyor;
              bunları birlikte okuyup doğru hatta yönlenelim.
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
