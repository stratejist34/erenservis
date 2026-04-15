import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { getPosts, getPostBySlug } from '@/lib/data';
import BlogSchema from '@/components/schema/BlogSchema';

export const dynamic = 'force-static';

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

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

  const categoryLabel = post.categories?.[0] ?? 'Blog';

  return (
    <>
      <BlogSchema
        slug={post.slug}
        title={post.title}
        description={post.yoastDescription || post.excerpt}
        datePublished={post.date}
      />
      <main className="bg-graphite-base">

      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              {categoryLabel}
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-xl mx-auto mb-8">
              {post.excerpt}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2.5 px-7 py-3.5 text-base transition-colors"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold text-base hover:border-brass hover:text-text-primary transition-all"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-16 bg-graphite-base">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <article
            className="prose prose-invert max-w-none prose-headings:font-saira prose-headings:font-semibold prose-headings:text-text-primary prose-headings:tracking-tight prose-p:font-saira prose-p:text-text-secondary prose-a:text-brass hover:prose-a:text-brass-bright prose-strong:text-text-primary prose-li:font-saira prose-li:text-text-secondary prose-hr:border-border-hairline prose-blockquote:border-l-brass prose-blockquote:text-text-secondary prose-table:font-saira prose-th:text-text-primary prose-td:text-text-secondary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-graphite-base py-14 text-center border-t border-border-hairline">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
            Şanzıman Sorununuzu Konuşalım
          </h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/blog/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
            >
              Diğer Yazılar &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
