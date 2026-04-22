import type { MetadataRoute } from 'next';
import postsData from '@/data/posts.json';
import { REHBER_POSTS } from '@/data/rehber-posts';
import { getActiveBrands } from '@/lib/brands';
import { transmissions } from '@/lib/sanziman';

const SITE_URL = 'https://www.erenservis.net';

type PostEntry = {
  slug: string;
  date: string;
};

const STATIC_BLOG_SLUGS = [
  'dsg-hangi-araclarda-var',
  'dsg-mekatronik-ariza-fiyati',
  'dsg-sanziman-omru-bakimi',
  'dsg-vuruntu-semptomlari',
  'edc-sanziman-ariza-belirtileri',
  'mekatronik-nedir',
  'otomatik-sanziman-tamiri-fiyat',
  'solenoid-valf-ariza-belirtileri',
  'uyari-lambasi-semptomlari',
] as const;

const STATIC_REHBER_SLUGS = [
  'cvt-ariza-lambasi',
  'cvt-kayma',
  'cvt-vuruntu',
  'dsg-kavrama-ariza-belirtileri',
  'dsg-kayma-vites-atlama',
  'dsg-sanziman-omru-bakimi',
  'dsg-vuruntu-semptomlari',
  'edc-ariza-lambasi',
  'edc-vuruntu',
  'mekatronik-nedir',
  'otomatik-sanziman-ariza-lambasi',
  'otomatik-sanziman-gecikme',
  'otomatik-sanziman-kayma',
  'otomatik-sanziman-sarsinti',
  'otomatik-sanziman-tamiri-fiyat',
  'otomatik-sanziman-vuruntu',
  'powershift-vuruntu',
  'solenoid-valf-ariza-belirtileri',
  'uyari-lambasi-semptomlari',
  'volant-titresim',
  'zf-aisin-gecikme',
] as const;

const STATIC_HIZMETLER_SLUGS = [
  'aisin-sanziman-tamiri',
  'cvt-sanziman-tamiri',
  'dsg-basinc-tupu',
  'dsg-kavrama-degisimi',
  'dsg-mekatronik-kart',
  'dsg-sanziman-tamiri',
  'dsg-volant-kavrama-paketi',
  'eat-sanziman-tamiri',
  'konvansiyonel-sanziman',
  'sanziman-bakimi',
  'zf-sanziman-tamiri',
] as const;

function url(path: string): string {
  const withSlash = path.endsWith('/') ? path : `${path}/`;
  return `${SITE_URL}${withSlash}`;
}

function toDate(value: string | undefined): Date {
  if (!value) return new Date();
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  entries.push({ url: url('/'), lastModified: now, changeFrequency: 'weekly', priority: 1.0 });

  for (const path of ['/hizmetler', '/sanziman-tipleri', '/blog', '/rehber', '/arac', '/hakkimizda', '/iletisim']) {
    entries.push({
      url: url(path),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  for (const slug of STATIC_HIZMETLER_SLUGS) {
    entries.push({
      url: url(`/hizmetler/${slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  for (const t of transmissions) {
    entries.push({
      url: url(`/sanziman-tipleri/${t.slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  for (const slug of STATIC_REHBER_SLUGS) {
    const match = REHBER_POSTS.find((p) => p.slug === slug);
    entries.push({
      url: url(`/rehber/${slug}`),
      lastModified: toDate(match?.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  for (const slug of STATIC_BLOG_SLUGS) {
    entries.push({
      url: url(`/blog/${slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  const posts = postsData as PostEntry[];
  for (const post of posts) {
    if (STATIC_BLOG_SLUGS.includes(post.slug as (typeof STATIC_BLOG_SLUGS)[number])) continue;
    entries.push({
      url: url(`/blog/${post.slug}`),
      lastModified: toDate(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  entries.push({
    url: url('/arac/dq200'),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  });

  for (const brand of getActiveBrands()) {
    entries.push({
      url: url(`/arac/${brand.slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: brand.tier === 1 ? 0.8 : 0.6,
    });
  }

  return entries;
}
