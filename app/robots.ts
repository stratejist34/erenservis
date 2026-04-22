import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.erenservis.net';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/icon.png',
          '/apple-icon.png',
          '/favicon-32.png',
          '/favicon-512.png',
        ],
        disallow: ['/api/', '/sanziman/', '/*?*'],
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'bingbot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
