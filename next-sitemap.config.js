/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://erenservis.net',
  // robots.txt elle yönetiliyor (public/robots.txt) — üzerine yazılmasın
  generateRobotsTxt: false,
  trailingSlash: true,
  exclude: ['/v1', '/v1/', '/v2', '/v2/', '/v4', '/v4/'],
};
