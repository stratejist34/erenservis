/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.erenservis.net',
  // robots.txt elle yönetiliyor (public/robots.txt) — üzerine yazılmasın
  generateRobotsTxt: false,
  trailingSlash: true,
  exclude: [
    '/v1', '/v1/', '/v2', '/v2/', '/v4', '/v4/',
    // Eski /sanziman/* route kaldırıldı, 301 redirect yönetimi yapılıyor
    '/sanziman', '/sanziman/', '/sanziman/*',
    // Next.js'in app/icon.png, app/apple-icon.png'dan otomatik ürettiği routes
    '/icon.png', '/icon.png/',
    '/apple-icon.png', '/apple-icon.png/',
    '/favicon-32.png', '/favicon-32.png/',
    '/favicon-512.png', '/favicon-512.png/',
  ],
};
