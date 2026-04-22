import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Phone, MessageCircle, CalendarDays, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { getPosts, getPostBySlug } from '@/lib/data';
import BlogSchema from '@/components/schema/BlogSchema';
import PostServiceBlock from '@/components/blog/PostServiceBlock';
import { getPostServiceBlock } from '@/lib/post-service-blocks';
import { HOWTO_PAGES } from '@/lib/howto-pages-dsg';
import { buildHowToSchema, schemaToString } from '@/lib/schema';
import TableOfContents, { type TocItem } from '@/components/blog/TableOfContents';

export const dynamic = 'force-static';

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

// ─── Yardımcı Fonksiyonlar ─────────────────────────────────────────────────

function stripHtml(value: string) {
  return value.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Başlık metninden URL-safe ID üretir (Türkçe karakter desteğiyle).
 */
function createHeadingId(text: string): string {
  return stripHtml(text)
    .toLocaleLowerCase('tr-TR')
    .replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u')
    .replace(/ö/g, 'o').replace(/ı/g, 'i').replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/**
 * HTML içeriğindeki H2/H3 başlıklarına id ekler ve ToC item listesi döner.
 */
function injectHeadingIds(html: string): { processed: string; tocItems: TocItem[] } {
  const tocItems: TocItem[] = [];
  const usedIds = new Set<string>();

  const processed = html.replace(
    /<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi,
    (_match, tag: string, attrs: string, text: string) => {
      const baseId = createHeadingId(text) || 'bolum';
      let id = baseId;
      let counter = 1;
      while (usedIds.has(id)) {
        id = `${baseId}-${counter}`;
        counter++;
      }
      usedIds.add(id);
      const level = parseInt(tag.substring(1), 10);
      tocItems.push({ id, text: stripHtml(text), level });
      return `<${tag}${attrs} id="${id}">${text}</${tag}>`;
    }
  );

  return { processed, tocItems };
}

/**
 * HTML içerikten "?" ile biten H3/H4 başlıkları FAQ olarak parse eder.
 * sanziman-faq.ts'te kayıt yoksa schema fallback olarak kullanılır.
 */
function extractFaqItems(html: string): { q: string; a: string }[] {
  const items: { q: string; a: string }[] = [];
  const parts = html.split(/<h[34][^>]*>/i);
  for (let i = 1; i < parts.length; i++) {
    const closeIdx = parts[i].search(/<\/h[34]>/i);
    if (closeIdx === -1) continue;
    const headingText = stripHtml(parts[i].substring(0, closeIdx));
    if (!headingText.endsWith('?')) continue;
    const question = headingText.startsWith('S: ') ? headingText.slice(3) : headingText;
    const afterHeading = parts[i].substring(closeIdx + 5).trim();
    const pMatch = afterHeading.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    let answer = pMatch
      ? stripHtml(pMatch[1])
      : stripHtml(afterHeading.split(/<h/i)[0]);
    if (answer.startsWith('C: ')) answer = answer.slice(3);
    if (answer.length > 20) items.push({ q: question, a: answer });
    if (items.length >= 5) break;
  }
  return items;
}

/**
 * İçeriği 3 parçaya böler:
 * part1 → InlineCTA → part2 → faqContent
 * Split noktası: ilk </table> sonrası veya 3. H2 başlangıcı
 */
function splitContent(html: string): {
  part1: string;
  part2: string;
  faqContent: string;
} {
  // FAQ başlangıcını bul (? ile biten h3/h4)
  const faqMatch = html.match(/<h[34][^>]*>[^<]*\?[^<]*<\/h[34]>/i);
  const faqStartIndex = faqMatch?.index ?? -1;
  const contentBeforeFaq =
    faqStartIndex !== -1 ? html.substring(0, faqStartIndex) : html;
  const faqContent = faqStartIndex !== -1 ? html.substring(faqStartIndex) : '';

  let part1 = contentBeforeFaq;
  let part2 = '';

  // İlk tablo varsa, tablo sonrasından böl
  const tableIndex = contentBeforeFaq.indexOf('</table>');
  if (tableIndex !== -1) {
    const splitPoint = tableIndex + '</table>'.length;
    part1 = contentBeforeFaq.substring(0, splitPoint);
    part2 = contentBeforeFaq.substring(splitPoint);
  } else {
    // 3. H2 başlangıcında böl
    const headingRegex = /<h2[^>]*>/gi;
    let headingCount = 0;
    let splitPoint = -1;
    let match: RegExpExecArray | null;
    while ((match = headingRegex.exec(contentBeforeFaq)) !== null) {
      headingCount++;
      if (headingCount === 3) {
        splitPoint = match.index;
        break;
      }
    }
    if (splitPoint !== -1) {
      part1 = contentBeforeFaq.substring(0, splitPoint);
      part2 = contentBeforeFaq.substring(splitPoint);
    }
  }

  return { part1, part2, faqContent };
}

// ─── Inline CTA Bileşeni ──────────────────────────────────────────────────

function InlineCTA() {
  return (
    <div className="my-10 rounded-2xl bg-graphite-surface border border-border-brass/40 p-6 sm:p-8">
      <p className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em] mb-2">
        Ücretsiz Ön Tanı
      </p>
      <p className="font-saira text-xl font-semibold text-text-primary mb-2">
        Şanzımanınızla ilgili sorunuzu hemen cevaplayalım
      </p>
      <p className="font-saira text-sm text-text-secondary mb-5">
        Bostancı — Pazartesi&ndash;Cumartesi 08:00&ndash;18:00
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors text-sm"
        >
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          {PHONE}
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
          WhatsApp&apos;tan Yaz
        </a>
      </div>
    </div>
  );
}

// ─── Route Tipleri ────────────────────────────────────────────────────────

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.yoastTitle || post.title;
  const description = post.yoastDescription || post.excerpt;
  const publishedTime = post.date;
  const modifiedTime = post.dateModified ?? post.date;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.erenservis.net/blog/${slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.erenservis.net/blog/${slug}/`,
      siteName: 'Eren Servis',
      locale: 'tr_TR',
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: ['Eren Otomatik Şanzıman Servisi'],
    },
  };
}

// ─── Sayfa Bileşeni ───────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const categoryLabel = post.categories?.[0] ?? 'Blog';
  const serviceBlock = getPostServiceBlock(post.slug);
  const howToData = HOWTO_PAGES[post.slug];
  const contentFaqItems = extractFaqItems(post.content);
  const hasTags = post.tags && post.tags.length > 0;
  const publishedDate = formatDate(post.date);
  const modifiedDate = post.dateModified ? formatDate(post.dateModified) : null;
  const showModified = modifiedDate && modifiedDate !== publishedDate;

  // Heading ID'lerini enjekte et → ToC + anchor link desteği
  const { processed: contentWithIds, tocItems } = injectHeadingIds(post.content);
  const { part1, part2, faqContent } = splitContent(contentWithIds);
  const hasSplit = part2.length > 0 || faqContent.length > 0;

  const proseClasses =
    'prose prose-invert max-w-none ' +
    'prose-headings:font-saira prose-headings:font-semibold prose-headings:text-text-primary prose-headings:tracking-tight ' +
    'prose-p:font-saira prose-p:text-text-secondary ' +
    'prose-a:text-brass hover:prose-a:text-brass-bright ' +
    'prose-strong:text-text-primary ' +
    'prose-li:font-saira prose-li:text-text-secondary ' +
    'prose-hr:border-border-hairline ' +
    'prose-blockquote:border-l-brass prose-blockquote:text-text-secondary ' +
    'prose-table:font-saira prose-th:text-text-primary prose-td:text-text-secondary';

  return (
    <>
      <BlogSchema
        slug={post.slug}
        title={post.title}
        description={post.yoastDescription || post.excerpt}
        datePublished={post.date}
        dateModified={post.dateModified}
        contentFaqItems={contentFaqItems}
      />
      {howToData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaToString(
              buildHowToSchema({
                name: howToData.name,
                description: howToData.description,
                totalTime: howToData.totalTime,
                estimatedCostValue: howToData.estimatedCost.value,
                estimatedCostCurrency: howToData.estimatedCost.currency,
                steps: howToData.steps,
              })
            ),
          }}
        />
      )}
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
              <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-xl mx-auto mb-6">
                {stripHtml(post.excerpt)}
              </p>
            )}

            {/* Tarih bilgisi */}
            <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
              <span className="inline-flex items-center gap-1.5 font-jetbrains text-[11px] text-text-muted">
                <CalendarDays className="w-3.5 h-3.5 text-brass/70" />
                {publishedDate}
              </span>
              {showModified && (
                <span className="inline-flex items-center gap-1.5 font-jetbrains text-[11px] text-text-muted">
                  <RefreshCw className="w-3.5 h-3.5 text-brass/70" />
                  Güncellendi: {modifiedDate}
                </span>
              )}
            </div>

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

        {/* Servis Bilgi Kutusu */}
        {serviceBlock && <PostServiceBlock block={serviceBlock} />}

        {/* İçerik */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <article>
              {/* Table of Contents — mobile */}
              {tocItems.length >= 3 && (
                <TableOfContents items={tocItems} variant="mobile" />
              )}

              {hasSplit ? (
                <>
                  {/* Bölüm 1 */}
                  <div
                    className={proseClasses}
                    dangerouslySetInnerHTML={{ __html: part1 }}
                  />

                  {/* Inline CTA */}
                  <InlineCTA />

                  {/* Bölüm 2 */}
                  {part2 && (
                    <div
                      className={proseClasses}
                      dangerouslySetInnerHTML={{ __html: part2 }}
                    />
                  )}

                  {/* FAQ bölümü */}
                  {faqContent && (
                    <div
                      className={proseClasses + ' mt-8'}
                      dangerouslySetInnerHTML={{ __html: faqContent }}
                    />
                  )}
                </>
              ) : (
                /* Split bulunamadıysa tek parça */
                <div
                  className={proseClasses}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}

              {/* Tags */}
              {hasTags && (
                <div className="mt-10 pt-8 border-t border-border-hairline flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-hairline bg-graphite-surface px-4 py-1.5 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Son güncelleme */}
              {modifiedDate && (
                <p className="mt-6 font-jetbrains text-[10px] text-text-muted text-center tracking-[0.12em]">
                  Son güncelleme: {modifiedDate}
                </p>
              )}
            </article>
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
