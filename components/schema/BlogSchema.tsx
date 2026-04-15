/**
 * BlogSchema — Server component
 * Her blog sayfasına 1 satırda Article + FAQ (varsa) + Breadcrumb schema ekler.
 *
 * Kullanım:
 *   <BlogSchema slug="dsg-vuruntu-semptomlari" title="..." description="..." datePublished="2025-03-01" />
 *
 * FAQ: lib/sanziman-faq.ts'te aynı slug varsa otomatik eklenir, yoksa atlanır.
 */

import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  schemaToString,
} from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export interface BlogSchemaProps {
  slug: string;
  title: string;
  description: string;
  /** ISO tarih: "YYYY-MM-DD" */
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  /** İçerikten otomatik parse edilen FAQ — sanziman-faq.ts boşsa devreye girer */
  contentFaqItems?: { q: string; a: string }[];
}

export default function BlogSchema({
  slug,
  title,
  description,
  datePublished,
  dateModified,
  imageUrl,
  contentFaqItems,
}: BlogSchemaProps) {
  const url = `https://erenservis.net/blog/${slug}/`;
  // sanziman-faq.ts öncelikli; yoksa içerikten parse edilen FAQ kullanılır
  const staticItems = TRANSMISSION_FAQS[slug] ?? [];
  const faqItems =
    staticItems.length > 0
      ? staticItems
      : (contentFaqItems ?? []).map((i) => ({ q: i.q, a: i.a }));

  const articleSchema = buildArticleSchema({
    title,
    description,
    url,
    datePublished,
    dateModified,
    imageUrl,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://erenservis.net' },
    { name: 'Blog', url: 'https://erenservis.net/blog/' },
    { name: title, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(articleSchema) }}
      />
      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaToString(buildFAQSchema(faqItems)) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema) }}
      />
    </>
  );
}
