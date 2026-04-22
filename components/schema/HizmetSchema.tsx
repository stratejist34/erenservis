/**
 * HizmetSchema — Server component
 * Her hizmet sayfasına 1 satırda Service + FAQ (varsa) + Breadcrumb schema ekler.
 *
 * Kullanım:
 *   <HizmetSchema
 *     slug="dsg-kavrama-degisimi"
 *     name="DSG Kavrama Değişimi"
 *     description="..."
 *     breadcrumbLabel="DSG Kavrama"
 *     minPrice={55000}
 *     maxPrice={72000}
 *   />
 *
 * FAQ: lib/sanziman-faq.ts'te aynı slug varsa otomatik eklenir.
 * areaServed ve areaServedList sabit — değişmez.
 */

import {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  schemaToString,
} from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export interface HizmetSchemaProps {
  slug: string;
  name: string;
  description: string;
  breadcrumbLabel: string;
  /** Görüntüleme için metin, örn: "55.000 – 72.000 TL" */
  priceRange?: string;
  /** Numeric min fiyat (TRY) */
  minPrice?: number;
  /** Numeric max fiyat (TRY) */
  maxPrice?: number;
}

const AREA_SERVED = ['Bostancı', 'Kadıköy', 'Üsküdar', 'Maltepe', 'İstanbul'];

export default function HizmetSchema({
  slug,
  name,
  description,
  breadcrumbLabel,
  priceRange,
  minPrice,
  maxPrice,
}: HizmetSchemaProps) {
  const url = `https://www.erenservis.net/hizmetler/${slug}/`;
  const faqItems = TRANSMISSION_FAQS[slug] ?? [];

  const serviceSchema = buildServiceSchema({
    name,
    description,
    url,
    priceRange,
    minPrice,
    maxPrice,
    areaServed: AREA_SERVED,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://www.erenservis.net' },
    { name: 'Hizmetler', url: 'https://www.erenservis.net/hizmetler/' },
    { name: breadcrumbLabel, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema) }}
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
