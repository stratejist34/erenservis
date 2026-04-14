/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://erenservis.vercel.app',
  generateRobotsTxt: true,
  trailingSlash: true,
  exclude: ['/v1', '/v1/', '/v2', '/v2/', '/v4', '/v4/'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/v1/', '/v2/', '/v4/'] },
    ],
  },
};
