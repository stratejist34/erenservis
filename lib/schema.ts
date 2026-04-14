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
  priceRange?: string;       // örn: "18000-42000 TL"
  areaServed?: string[];     // örn: ["Bostancı", "Kadıköy", "İstanbul"]
}

export interface ArticleParams {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/* ── BUSINESS IDENTITY (tek kaynak) ─────────────────────────────────────── */

const BUSINESS_NODE = {
  '@type': 'AutoRepair' as const,
  '@id': 'https://erenservis.vercel.app/#business',
  name: 'Eren Servis',
  description:
    "Bostancı'nın DSG ve otomatik şanzıman uzmanı. DQ200, DQ250, DQ381 " +
    'mekatronik, kavrama ve CVT tamiri.',
  url: 'https://erenservis.vercel.app',
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
  sameAs: ['https://www.google.com/maps/place/Eren+Volkswagen+Servis+Bostanc%C4%B1/@40.9656025,29.1093912'],
};

/** Lightweight reference to Eren Servis for use inside other schemas. */
export const BUSINESS_REF = {
  '@type': 'AutoRepair' as const,
  '@id': 'https://erenservis.vercel.app/#business',
  name: 'Eren Servis',
  url: 'https://erenservis.vercel.app',
};

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
    ...(params.priceRange && {
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TRY',
          description: params.priceRange,
        },
      },
    }),
  };
}

/* ── ARTICLE ─────────────────────────────────────────────────────────────── */

export function buildArticleSchema(params: ArticleParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    author: {
      '@type': 'Organization',
      name: 'Eren Servis',
      url: 'https://erenservis.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Eren Servis',
      url: 'https://erenservis.vercel.app',
    },
    ...(params.imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: params.imageUrl,
      },
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
        url: `https://erenservis.vercel.app/arac/${brand.slug}/`,
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

/* ── HELPER ──────────────────────────────────────────────────────────────── */

export function schemaToString(schema: object): string {
  return JSON.stringify(schema);
}
