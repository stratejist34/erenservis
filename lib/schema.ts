// lib/schema.ts
// Merkezi schema fabrikası — tüm sayfalar buradan import eder, hardcoded yazılmaz.

import type { FaqItem } from './sanziman-faq';
import { BRANDS, buildBrandTransmissionTitle } from './brands';
import type { TransmissionFamily } from './transmissions';
import type { Brand } from './brands';

/* ── TYPES ───────────────────────────────────────────────────────────────── */

export interface LocalBusinessParams {
  url: string;
}

export interface ServiceParams {
  name: string;
  description: string;
  url: string;
  /** Görüntüleme için metin ("55.000 – 72.000 TL") — sadece description'da kullanılır */
  priceRange?: string;
  /** Numeric min fiyat (TRY) — Google rich snippet için */
  minPrice?: number;
  /** Numeric max fiyat (TRY) — Google rich snippet için */
  maxPrice?: number;
  areaServed?: string[];     // örn: ["Bostancı", "Kadıköy", "İstanbul"]
}

export interface ArticleParams {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  /** AIO: AI'ın okuyacağı bölümleri işaret eden CSS seçiciler */
  speakableCssSelectors?: string[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/* ── BUSINESS IDENTITY (tek kaynak) ─────────────────────────────────────── */

const BUSINESS_NODE = {
  '@type': ['LocalBusiness', 'AutoRepair', 'Organization'] as const,
  '@id': 'https://erenservis.net/#business',
  name: 'Eren Servis',
  description:
    "Bostancı'nın DSG ve otomatik şanzıman uzmanı. DQ200, DQ250, DQ381 " +
    'mekatronik, kavrama ve CVT tamiri.',
  url: 'https://erenservis.net',
  telephone: '+90 532 715 37 51',
  address: {
    '@type': 'PostalAddress' as const,
    streetAddress: 'Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4',
    addressLocality: 'Bostancı',
    addressRegion: 'İstanbul',
    postalCode: '34744',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates' as const,
    latitude: 40.9656025,
    longitude: 29.1093912,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:30',
      closes: '18:30',
    },
  ],
  priceRange: '₺₺',
  areaServed: ['Bostancı', 'Kadıköy', 'Üsküdar', 'Maltepe', 'İstanbul'],
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.6',
    reviewCount: '35',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: ['https://www.google.com/maps/place/Eren+Volkswagen+Servis+Bostanc%C4%B1/@40.9656025,29.1093912'],
  logo: {
    '@type': 'ImageObject' as const,
    '@id': 'https://erenservis.net/#logo',
    url: 'https://erenservis.net/images/erenlogo.webp',
    contentUrl: 'https://erenservis.net/images/erenlogo.webp',
  },
  image: {
    '@type': 'ImageObject' as const,
    url: 'https://erenservis.net/og-image.jpg',
    width: 1200,
    height: 630,
  },
};

/** Pure @id pointer — entity tam tanımı BUSINESS_NODE'da, her yerde bu kullanılır. */
export const BUSINESS_REF = { '@id': 'https://erenservis.net/#business' } as const;

/* ── LOCAL BUSINESS (site geneli — layout'a bir kez eklenir) ────────────── */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function buildLocalBusinessSchema(_params?: LocalBusinessParams) {
  return {
    '@context': 'https://schema.org',
    ...BUSINESS_NODE,
  };
}

/* ── FAQ PAGE ────────────────────────────────────────────────────────────── */
// FaqItem = { q: string; a: string } — lib/sanziman-faq.ts ile aynı format

export function buildFAQSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

/* ── SERVICE ─────────────────────────────────────────────────────────────── */

export function buildServiceSchema(params: ServiceParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: params.url,
    provider: BUSINESS_REF,
    areaServed: params.areaServed ?? ['Bostancı', 'İstanbul'],
    ...((params.minPrice != null || params.priceRange) && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'TRY',
        ...(params.minPrice != null && { minPrice: params.minPrice }),
        ...(params.maxPrice != null && { maxPrice: params.maxPrice }),
        ...(params.priceRange && { description: params.priceRange }),
      },
    }),
  };
}

/* ── ARTICLE ─────────────────────────────────────────────────────────────── */

export function buildArticleSchema(params: ArticleParams) {
  const articleId = `${params.url}#article`;
  const imageId = `${params.url}#primaryimage`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': articleId,
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    author: {
      '@type': 'Person',
      '@id': 'https://erenservis.net/#author',
      name: 'Eren Servis Teknik Ekibi',
      url: 'https://erenservis.net/hakkimizda/',
      worksFor: { '@id': 'https://erenservis.net/#business' },
    },
    publisher: { '@id': 'https://erenservis.net/#business' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: params.speakableCssSelectors ?? [
        'h1',
        '.prose > p:first-of-type',
        '.prose h2',
        '.faq-section h3',
      ],
    },
    ...(params.imageUrl && {
      image: {
        '@type': 'ImageObject',
        '@id': imageId,
        url: params.imageUrl,
        width: 1200,
        height: 630,
        caption: params.title,
      },
      primaryImageOfPage: { '@id': imageId },
    }),
  };
}

/* ── BREADCRUMB ──────────────────────────────────────────────────────────── */

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* ── BRAND LIST (ItemList) ───────────────────────────────────────────────── */

export function buildBrandListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Marka bazında şanzıman tamiri hizmetleri',
    itemListElement: BRANDS.map((brand, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: buildBrandTransmissionTitle(brand),
        serviceType: 'Şanzıman Tamiri',
        provider: BUSINESS_REF,
        url: `https://erenservis.net/arac/${brand.slug}/`,
      },
    })),
  };
}

/* ── TRANSMISSION (Product entity) ──────────────────────────────────────── */

export interface TransmissionSchemaParams {
  transmission: TransmissionFamily;
  relatedBrands: Brand[];
  url: string;
}

export function buildTransmissionSchema(params: TransmissionSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.transmission.fullName,
    alternateName: params.transmission.codes,
    description: params.transmission.description,
    manufacturer: {
      '@type': 'Organization',
      name: params.transmission.manufacturer,
    },
    category: 'Otomatik Şanzıman',
    url: params.url,
    brand: params.relatedBrands.map((b) => ({
      '@type': 'Brand',
      name: b.name,
    })),
    offers: {
      '@type': 'Offer',
      seller: BUSINESS_REF,
      areaServed: 'Bostancı, İstanbul',
    },
  };
}

/* ── HOW TO ──────────────────────────────────────────────────────────────── */

export interface HowToSchemaParams {
  name: string;
  description: string;
  totalTime: string;
  estimatedCostValue: string;
  estimatedCostCurrency: string;
  steps: { name: string; text: string }[];
}

export function buildHowToSchema(params: HowToSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    totalTime: params.totalTime,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      value: params.estimatedCostValue,
      currency: params.estimatedCostCurrency,
    },
    step: params.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/* ── HELPER ──────────────────────────────────────────────────────────────── */

export function schemaToString(schema: object): string {
  return JSON.stringify(schema);
}
