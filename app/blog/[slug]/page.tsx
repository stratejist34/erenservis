import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPosts, getPostBySlug } from '@/lib/data';

export const dynamic = 'force-static';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.yoastTitle || post.title;
  const description = post.yoastDescription || post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `https://erenservis.net/blog/${slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://erenservis.net/blog/${slug}/`,
      siteName: 'Eren Servis',
      locale: 'tr_TR',
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Eren Servis',
      url: 'https://erenservis.net',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Eren Servis',
      url: 'https://erenservis.net',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://erenservis.net/blog/${slug}/`,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Post Hero */}
      <section className="hero-deep pt-28 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-hero-text mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-hero-muted text-lg leading-relaxed max-w-xl mx-auto">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Post İçerik */}
      <section className="py-16 bg-content-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <article
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </main>
  );
}
