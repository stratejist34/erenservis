import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 yıl
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'],
    cpus: 4,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  async headers() {
    return [
      {
        // Statik HTML sayfaları — CDN'de 1 saat, stale-while-revalidate 24 saat
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Next.js static asset'leri — immutable, 1 yıl
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Public klasöründeki statik dosyalar
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // sitemap ve robots
        source: '/:file(sitemap.xml|robots.txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // === Şanzıman sayfaları — yeni URL yapısına yönlendir ===
      {
        source: '/zf-sanziman-servisi',
        destination: '/hizmetler/zf-sanziman-tamiri/',
        permanent: true,
      },
      {
        source: '/zf-sanziman-servisi/',
        destination: '/hizmetler/zf-sanziman-tamiri/',
        permanent: true,
      },
      {
        source: '/dsg-sanziman-servisi',
        destination: '/hizmetler/dsg-sanziman-tamiri/',
        permanent: true,
      },
      {
        source: '/dsg-sanziman-servisi/',
        destination: '/hizmetler/dsg-sanziman-tamiri/',
        permanent: true,
      },
      {
        source: '/dsg-sanziman-tamiri',
        destination: '/hizmetler/dsg-sanziman-tamiri/',
        permanent: true,
      },
      {
        source: '/dsg-sanziman-tamiri/',
        destination: '/hizmetler/dsg-sanziman-tamiri/',
        permanent: true,
      },
      {
        source: '/wt-wolfs-tech-dsg-basinc-tupu',
        destination: '/hizmetler/dsg-basinc-tupu/',
        permanent: true,
      },
      {
        source: '/wt-wolfs-tech-dsg-basinc-tupu/',
        destination: '/hizmetler/dsg-basinc-tupu/',
        permanent: true,
      },
      // === Marka bazlı genel servis sayfaları — ana sayfaya yönlendir ===
      {
        source: '/volkswagen-servis-bostanci',
        destination: '/',
        permanent: true,
      },
      {
        source: '/volkswagen-servis-bostanci/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/volkswagen-servisi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/volkswagen-servisi/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bostanci-audi-servis',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bostanci-audi-servis/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bostanci-porsche-servis',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bostanci-porsche-servis/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bostanci-seat-servis',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bostanci-seat-servis/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/audi-ozel-servis',
        destination: '/',
        permanent: true,
      },
      {
        source: '/audi-ozel-servis/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/skoda-ozel-servis',
        destination: '/',
        permanent: true,
      },
      {
        source: '/skoda-ozel-servis/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/seat-ozel-servis',
        destination: '/',
        permanent: true,
      },
      {
        source: '/seat-ozel-servis/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/porsche-ozel-servis',
        destination: '/',
        permanent: true,
      },
      {
        source: '/porsche-ozel-servis/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hizmetlerimiz',
        destination: '/hizmetler/',
        permanent: true,
      },
      {
        source: '/hizmetlerimiz/',
        destination: '/hizmetler/',
        permanent: true,
      },
      // Blog → Rehber taşımaları
      {
        source: '/blog/dsg-kavrama-ariza-belirtileri',
        destination: '/rehber/dsg-kavrama-ariza-belirtileri/',
        permanent: true,
      },
      {
        source: '/blog/dsg-kavrama-ariza-belirtileri/',
        destination: '/rehber/dsg-kavrama-ariza-belirtileri/',
        permanent: true,
      },
      // Marka kategori sayfaları
      {
        source: '/marka/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/markalar',
        destination: '/',
        permanent: true,
      },
      {
        source: '/markalar/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
