import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { REHBER_POSTS } from '@/data/rehber-posts';
import { buildBreadcrumbSchema, schemaToString } from '@/lib/schema';

export const dynamic = 'force-static';

const PAGE_URL = 'https://www.erenservis.net/rehber/';
const PAGE_TITLE = 'Şanzıman Rehberi | Eren Servis — DSG, CVT, ZF, EDC';
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
  powershift: 'PowerShift',
  renault: 'Renault',
  ford: 'Ford',
  volant: 'Volant',
  kavrama: 'Kavrama',
  'ariza-lambasi': 'Arıza Lambası',
  gecikme: 'Gecikme',
  kayma: 'Kayma',
  sarsinti: 'Sarsıntı',
  vuruntu: 'Vuruntu',
};

export default function RehberHubPage() {
  const posts = [...REHBER_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

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

      <main>
        {/* Hero */}
        <section className="bg-graphite-base pt-28 pb-14 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-brass" strokeWidth={2.5} />
              <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
                Teşhis Rehberi
              </span>
            </div>
            <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-4">
              Şanzıman Rehberi
            </h1>
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
              Arıza belirtileri, semptom analizleri ve marka özel rehberler. DSG, CVT, ZF, Aisin, EDC ve PowerShift için uzman kılavuzu.
            </p>
          </div>
        </section>

        {/* Post Grid */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-xl border border-border-hairline bg-graphite-surface overflow-hidden hover:border-border-brass hover:bg-graphite-elevated transition-all"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-1.5 font-jetbrains text-xs text-iron-light mb-3">
                      <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <h2 className="font-saira text-base font-semibold text-text-primary leading-snug mb-2 line-clamp-2 group-hover:text-brass transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.categories.slice(0, 3).map((cat) => (
                          <span
                            key={cat}
                            className="font-jetbrains text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 rounded border border-border-hairline text-iron-light"
                          >
                            {CATEGORY_LABELS[cat] ?? cat}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 font-saira text-sm font-semibold text-brass hover:underline"
                    >
                      Devamını Oku
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
