import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPosts, getPostBySlug } from '@/lib/data';
import BlogSchema from '@/components/schema/BlogSchema';

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

  return (
    <>
      <BlogSchema
        slug={post.slug}
        title={post.title}
        description={post.yoastDescription || post.excerpt}
        datePublished={post.date}
      />
      <main>

      {/* Post Hero */}
      <section className="bg-graphite-base pt-28 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Post İçerik */}
      <section className="py-16 bg-graphite-base">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <article
            className="prose prose-invert max-w-none prose-headings:font-saira prose-headings:font-semibold prose-headings:text-text-primary prose-headings:tracking-tight prose-p:font-saira prose-p:text-text-secondary prose-a:text-brass hover:prose-a:text-brass-bright prose-strong:text-text-primary prose-li:font-saira prose-li:text-text-secondary prose-hr:border-border-hairline prose-blockquote:border-l-brass prose-blockquote:text-text-secondary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </main>
    </>
  );
}
