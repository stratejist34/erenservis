import type { NextConfig } from "next";
import os from "node:os";

// Build-time paralelliğini makinedeki fiziksel çekirdek sayısına göre seç.
// Hosts with very low core counts (1-2) still benefit from a minimum of 2.
const BUILD_CPUS = Math.max(2, Math.min(os.cpus().length, 8));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  typescript: { ignoreBuildErrors: false },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 yıl
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'],
    cpus: BUILD_CPUS,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  async headers() {
    return [
      {
        // Statik HTML sayfaları — CDN'de 1 saat + güvenlik headerları
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
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
      // Kırık slug savunması — yazılmamış dsg-mekatronik-ariza-belirtileri
      {
        source: '/rehber/dsg-mekatronik-ariza-belirtileri',
        destination: '/rehber/solenoid-valf-ariza-belirtileri/',
        permanent: true,
      },
      {
        source: '/rehber/dsg-mekatronik-ariza-belirtileri/',
        destination: '/rehber/solenoid-valf-ariza-belirtileri/',
        permanent: true,
      },
      {
        source: '/blog/dsg-mekatronik-ariza-belirtileri',
        destination: '/hizmetler/dsg-mekatronik-kart/',
        permanent: true,
      },
      {
        source: '/blog/dsg-mekatronik-ariza-belirtileri/',
        destination: '/hizmetler/dsg-mekatronik-kart/',
        permanent: true,
      },
      // === Eski /sanziman/:slug → yeni /sanziman-tipleri/:slug ===
      { source: '/sanziman/aisin-eat', destination: '/sanziman-tipleri/aisin-eat/', permanent: true },
      { source: '/sanziman/aisin-eat/', destination: '/sanziman-tipleri/aisin-eat/', permanent: true },
      { source: '/sanziman/renault-edc', destination: '/sanziman-tipleri/renault-edc/', permanent: true },
      { source: '/sanziman/renault-edc/', destination: '/sanziman-tipleri/renault-edc/', permanent: true },
      { source: '/sanziman/ford-powershift', destination: '/sanziman-tipleri/ford-powershift/', permanent: true },
      { source: '/sanziman/ford-powershift/', destination: '/sanziman-tipleri/ford-powershift/', permanent: true },
      { source: '/sanziman/mercedes-7g-tronic', destination: '/sanziman-tipleri/mercedes-7g-9g-tronic/', permanent: true },
      { source: '/sanziman/mercedes-7g-tronic/', destination: '/sanziman-tipleri/mercedes-7g-9g-tronic/', permanent: true },
      { source: '/sanziman/mercedes-9g-tronic', destination: '/sanziman-tipleri/mercedes-7g-9g-tronic/', permanent: true },
      { source: '/sanziman/mercedes-9g-tronic/', destination: '/sanziman-tipleri/mercedes-7g-9g-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq200', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq200/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq250', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq250/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq381', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq381/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq400e', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq400e/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq500', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/dsg-dq500/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/s-tronic-dl382', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/s-tronic-dl382/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/s-tronic-dl501', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/s-tronic-dl501/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/zf-8hp', destination: '/sanziman-tipleri/zf-otomatik/', permanent: true },
      { source: '/sanziman/zf-8hp/', destination: '/sanziman-tipleri/zf-otomatik/', permanent: true },
      { source: '/sanziman/zf-8hp-phev', destination: '/sanziman-tipleri/zf-otomatik/', permanent: true },
      { source: '/sanziman/zf-8hp-phev/', destination: '/sanziman-tipleri/zf-otomatik/', permanent: true },
      { source: '/sanziman/toyota-cvt', destination: '/sanziman-tipleri/cvt-sanziman/', permanent: true },
      { source: '/sanziman/toyota-cvt/', destination: '/sanziman-tipleri/cvt-sanziman/', permanent: true },
      { source: '/sanziman/honda-cvt', destination: '/sanziman-tipleri/cvt-sanziman/', permanent: true },
      { source: '/sanziman/honda-cvt/', destination: '/sanziman-tipleri/cvt-sanziman/', permanent: true },
      { source: '/sanziman/nissan-jatco-cvt', destination: '/sanziman-tipleri/cvt-sanziman/', permanent: true },
      { source: '/sanziman/nissan-jatco-cvt/', destination: '/sanziman-tipleri/cvt-sanziman/', permanent: true },
      { source: '/sanziman/fiat-dct', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/fiat-dct/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/hyundai-kia-dct', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/hyundai-kia-dct/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/hyundai-kia-dct8', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      { source: '/sanziman/hyundai-kia-dct8/', destination: '/sanziman-tipleri/dsg-s-tronic/', permanent: true },
      // Wildcard fallback: yeni slug çıkarsa veya elle yazılan uydurma slug olursa
      { source: '/sanziman', destination: '/sanziman-tipleri/', permanent: true },
      { source: '/sanziman/', destination: '/sanziman-tipleri/', permanent: true },
      { source: '/sanziman/:slug*', destination: '/sanziman-tipleri/', permanent: true },
      // Marka kategori sayfaları — tüm varyantlar anasayfaya
      { source: '/marka', destination: '/', permanent: true },
      { source: '/marka/', destination: '/', permanent: true },
      { source: '/marka/:slug', destination: '/', permanent: true },
      { source: '/marka/:slug/', destination: '/', permanent: true },
      { source: '/marka/:slug*', destination: '/', permanent: true },
      { source: '/markalar', destination: '/', permanent: true },
      { source: '/markalar/', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
