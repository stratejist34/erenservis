import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, CarFront, Gauge, Layers3, Sparkles } from 'lucide-react';
import { REHBER_POSTS } from '@/data/rehber-posts';
import { buildBreadcrumbSchema, schemaToString } from '@/lib/schema';
import { RehberFilter } from './RehberFilter';

export const dynamic = 'force-static';

const PAGE_URL = 'https://www.erenservis.net/rehber/';
const PAGE_TITLE =
  'Şanzıman Rehberi | Eren Otomatik Şanzıman Servisi - DSG, CVT, ZF, EDC';
const PAGE_DESC =
  'Otomatik şanzıman arıza belirtileri, semptom analizleri ve marka özel rehberler. DSG, CVT, ZF, Aisin, EDC ve PowerShift sahipleri için Bostancı uzman serisi.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
    siteName: 'Eren Otomatik Şanzıman Servisi',
    locale: 'tr_TR',
    type: 'website',
  },
};

const CATEGORY_LABELS: Record<string, string> = {
  genel: 'Genel',
  dsg: 'DSG',
  edc: 'EDC',
  cvt: 'CVT',
  zf: 'ZF',
  aisin: 'Aisin',
  eat8: 'EAT8',
  powershift: 'PowerShift',
  renault: 'Renault',
  ford: 'Ford',
  bmw: 'BMW',
  peugeot: 'Peugeot',
  seat: 'Seat',
  honda: 'Honda',
  toyota: 'Toyota',
  audi: 'Audi',
  volkswagen: 'Volkswagen',
  skoda: 'Skoda',
  dq200: 'DQ200',
  model: 'Model',
  matrix: 'Marka x Şanzıman',
  uyari: 'Uyarı',
  semptom: 'Semptom',
  ariza: 'Arıza',
  volant: 'Volant',
  kavrama: 'Kavrama',
  'ariza-lambasi': 'Arıza Lambası',
  gecikme: 'Gecikme',
  kayma: 'Kayma',
  sarsinti: 'Sarsıntı',
  vuruntu: 'Vuruntu',
};

const ENTRY_PATHS = [
  {
    title: 'Arıza Belirtisine Göre Bakın',
    text: 'Titreme, vuruntu, uyarı lambası veya vites kaçırma yaşıyorsanız buradan başlayın.',
    href: '/rehber/sanziman-arizasi-nasil-anlasilir/',
    cta: 'Belirtileri inceleyin',
    icon: Gauge,
  },
  {
    title: 'Aracınıza Göre Rehber Seçin',
    text: 'Golf, Passat, Civic, Corolla veya Megane gibi modellere özel sorunları karşılaştırın.',
    href: '/rehber/golf-7-dsg-sanziman-sorunlari/',
    cta: 'Model rehberlerine gidin',
    icon: CarFront,
  },
  {
    title: 'Şanzıman Tipinizi Öğrenin',
    text: 'DSG, CVT, EDC, EAT8, ZF veya Aisin şanzımanların bakım ve arıza belirtileri farklıdır.',
    href: '/hizmetler/dsg-sanziman-tamiri/',
    cta: 'Şanzıman tiplerine bakın',
    icon: Layers3,
  },
];

export default function RehberHubPage() {
  const posts = [...REHBER_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const leadPost = posts[0];
  const spotlightPosts = posts.slice(1, 5);

  const topCategories = Array.from(
    posts
      .flatMap((post) => post.categories)
      .reduce((map, category) => {
        map.set(category, (map.get(category) ?? 0) + 1);
        return map;
      }, new Map<string, number>())
      .entries(),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const filterCategories = topCategories.map(([key, count]) => ({
    key,
    count,
    label: CATEGORY_LABELS[key] ?? key,
  }));

  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
    { name: 'Şanzıman Rehberi', url: PAGE_URL },
  ]);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${PAGE_URL}#collection`,
    url: PAGE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESC,
    inLanguage: 'tr-TR',
    hasPart: posts.map((p) => ({
      '@type': 'BlogPosting',
      '@id': `https://www.erenservis.net${p.href}#article`,
      headline: p.title,
      url: `https://www.erenservis.net${p.href}`,
      datePublished: p.date,
      description: p.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(collectionSchema) }}
      />

      <main className="bg-[#f3ede4] text-[#1f1710]">
        <section className="relative overflow-hidden border-b border-[#d8c7b1] pt-28 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(198,160,101,0.22),_transparent_38%),linear-gradient(180deg,#f6f0e7_0%,#efe4d5_100%)]" />
          <div className="absolute right-0 top-12 hidden h-72 w-72 rounded-full bg-[#c6a065]/14 blur-3xl lg:block" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c9af86] bg-white/50 px-4 py-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-[#8b6434]" strokeWidth={2.4} />
                  <span className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b6434]">
                    Otomatik Şanzıman Rehberi
                  </span>
                </div>

                <h1 className="mt-7 max-w-4xl font-saira text-5xl font-semibold leading-[0.94] text-[#1d140d] sm:text-7xl">
                  Aracınızdaki belirti
                  <span className="block text-[#8b6434]">ne anlama geliyor?</span>
                </h1>

                <p className="mt-6 max-w-2xl font-saira text-lg leading-8 text-[#5f5142] sm:text-xl">
                  Vites geçişinde vuruntu, kalkışta titreme, uyarı lambası, yağ kaçağı veya
                  gecikme yaşıyorsanız doğru rehberi buradan seçebilirsiniz.
                </p>

                <p className="mt-8 max-w-xl border-l-2 border-[#c6a065] pl-4 font-saira text-base leading-7 text-[#6b5b48]">
                  DSG, CVT, EDC, ZF ve Aisin şanzımanlarda aynı belirti farklı arızalara işaret
                  edebilir. Bu yüzden önce doğru başlığı seçmek önemlidir.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="border-t border-[#b9925a] pt-4">
                    <div className="font-saira text-4xl font-semibold text-[#1d140d]">
                      {posts.length}
                    </div>
                    <div className="mt-1 font-saira text-sm text-[#6b5b48]">
                      Rehber yazısı
                    </div>
                  </div>
                  <div className="border-t border-[#d2c1ab] pt-4">
                    <div className="font-saira text-4xl font-semibold text-[#1d140d]">
                      DSG
                    </div>
                    <div className="mt-1 font-saira text-sm text-[#6b5b48]">
                      Volkswagen grubu rehberleri
                    </div>
                  </div>
                  <div className="border-t border-[#d2c1ab] pt-4">
                    <div className="font-saira text-4xl font-semibold text-[#1d140d]">CVT</div>
                    <div className="mt-1 font-saira text-sm text-[#6b5b48]">
                      Japon grubu rehberleri
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="overflow-hidden rounded-[30px] border border-[#d5c2aa] bg-[#f8f2ea] shadow-[0_20px_60px_rgba(63,42,19,0.14)]">
                  <div className="relative aspect-[4/4.25]">
                    <Image
                      src="/images/part2/dsg-sanziman-tamiri.webp"
                      alt="Eren Otomatik Şanzıman Servisi'nde DSG mekatronik parça incelemesi"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,11,0.02),rgba(20,15,11,0.58))]" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#17110d]/70 p-4 backdrop-blur">
                      <div className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-[#c6a065]">
                        Servis Notu
                      </div>
                      <p className="mt-2 font-saira text-xl font-semibold leading-tight text-[#fff7ed]">
                        Küçük bir belirti, erken bakılırsa büyük masrafı önleyebilir.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-[#d5c2aa] bg-[#f8f2ea] p-6">
                    <div className="mb-3 inline-flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#8b6434]" />
                      <span className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-[#8b6434]">
                        Ne Zaman Servise Gelmeli?
                      </span>
                    </div>
                    <p className="font-saira text-sm leading-7 text-[#5f5142]">
                      Arıza lambası yanıyorsa, vites geçişleri sertleştiyse veya araç kalkışta
                      titriyorsa geciktirmeden kontrol ettirmeniz gerekir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#251a12] bg-[#17110d] py-12 text-[#f8f2ea]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
              <div>
                <div className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-[#c6a065]">
                  Hızlı Yönlendirme
                </div>
                <h2 className="mt-2 font-saira text-3xl font-semibold">
                  Aracınızdaki soruna göre doğru rehberi bulun
                </h2>
              </div>
              <p className="max-w-xl font-saira text-sm leading-7 text-[#d8cbbb]">
                Arıza belirtisini biliyorsanız semptom rehberlerine, aracınızın modelini
                araştırıyorsanız model rehberlerine, şanzıman tipini öğrenmek istiyorsanız teknik
                rehberlere geçebilirsiniz.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {ENTRY_PATHS.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all hover:-translate-y-0.5 hover:border-[#c6a065]/70 hover:bg-white/[0.07]"
                  >
                    <Icon className="h-6 w-6 text-[#c6a065]" strokeWidth={2.1} />
                    <h3 className="mt-5 font-saira text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-saira text-sm leading-7 text-[#d8cbbb]">
                      {item.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 font-saira text-sm font-semibold text-[#c6a065]">
                      {item.cta}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-[#dccbb5] bg-[#f8f2ea] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-[#8b6434]">
                  Öne Çıkan Rehberler
                </div>
                <h2 className="mt-2 font-saira text-3xl font-semibold text-[#1d140d]">
                  Önce bunlarla başlayın
                </h2>
              </div>
              <p className="max-w-lg font-saira text-sm leading-7 text-[#6b5b48]">
                En çok sorulan arızalar, bakım uyarıları ve model özel sorunlar için hızlı
                başlangıç rehberleri.
              </p>
            </div>

            {leadPost && (
              <article className="grid overflow-hidden rounded-[32px] border border-[#dac8b2] bg-[#201711] text-[#f8f2ea] shadow-[0_24px_60px_rgba(26,16,9,0.24)] lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap gap-2">
                    {leadPost.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[#ddcfbf]"
                      >
                        {CATEGORY_LABELS[cat] ?? cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-6 max-w-2xl font-saira text-4xl font-semibold leading-tight text-[#fff7ed]">
                    {leadPost.title}
                  </h3>
                  <p className="mt-5 max-w-2xl font-saira text-base leading-8 text-[#d3c3b2]">
                    {leadPost.excerpt}
                  </p>

                  <Link
                    href={leadPost.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c6a065] px-5 py-3 font-saira text-sm font-semibold text-[#20160f] transition-transform hover:-translate-y-0.5"
                  >
                    Rehbere Git
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="border-t border-white/10 bg-[linear-gradient(180deg,#2a1f16_0%,#1b140f_100%)] p-8 sm:p-10 lg:border-l lg:border-t-0">
                  <div className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-[#c6a065]">
                    Bu Rehber Ne İşe Yarar?
                  </div>
                  <ul className="mt-5 space-y-4 font-saira text-sm leading-7 text-[#d3c3b2]">
                    <li>Yaşadığınız belirtinin hangi arızalara işaret edebileceğini anlatır.</li>
                    <li>Hangi durumda aracı kullanmamanız gerektiğini netleştirir.</li>
                    <li>Servise gitmeden önce doğru soruları hazırlamanıza yardımcı olur.</li>
                  </ul>
                </div>
              </article>
            )}

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {spotlightPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-[24px] border border-[#ddccba] bg-[#fbf7f1] p-6 shadow-[0_12px_30px_rgba(54,36,17,0.08)] transition-all hover:-translate-y-0.5 hover:border-[#c7aa7f]"
                >
                  <div className="flex flex-wrap gap-1.5">
                    {post.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-[#e4d8c9] bg-white px-2.5 py-1 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[#75624f]"
                      >
                        {CATEGORY_LABELS[cat] ?? cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 font-saira text-2xl font-semibold leading-tight text-[#1d140d]">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-4 font-saira text-sm leading-7 text-[#625343]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="mt-5 inline-flex items-center gap-2 font-saira text-sm font-semibold text-[#8b6434] hover:underline"
                  >
                    Rehbere Git
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <RehberFilter
          posts={posts}
          categories={filterCategories}
          categoryLabels={CATEGORY_LABELS}
        />
      </main>
    </>
  );
}
