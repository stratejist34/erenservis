import type { Metadata } from 'next';
import { getPosts } from '@/lib/data';
import { REHBER_POSTS } from '@/data/rehber-posts';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog | Eren Servis — Otomatik Şanzıman Rehberi',
  description:
    'Otomatik şanzıman bakımı, DSG tamiri ve CVT hakkında uzman ipuçları ve rehber yazılar.',
  alternates: {
    canonical: 'https://erenservis.net/blog/',
  },
};

export default async function BlogPage() {
  const jsonPosts = await getPosts();

  // Rehber yazıları + JSON posts birleştir, date'e göre desc sort
  const allPosts = [
    ...REHBER_POSTS.map((p) => ({
      id: p.slug,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      href: p.href,
    })),
    ...jsonPosts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      href: `/blog/${p.slug}/`,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main>
      {/* Page Hero */}
      <section className="bg-graphite-base pt-28 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              Bilgi Merkezi
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-4">
            Şanzıman Blog
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
            DSG, CVT ve otomatik şanzıman hakkında uzman görüşleri ve pratik rehberler.
          </p>
        </div>
      </section>

      {/* Blog Listesi */}
      <section className="py-16 bg-graphite-base">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {allPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">📝</div>
              <h2 className="font-saira text-xl font-semibold text-text-primary mb-2">
                Makaleler yakında eklenecek
              </h2>
              <p className="font-saira text-text-secondary">
                WordPress içerik aktarımı tamamlandıktan sonra makaleler burada görünecek.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post) => (
                <article
                  key={post.id}
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
          )}
        </div>
      </section>
    </main>
  );
}
