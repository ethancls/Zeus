/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ethancls.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://ethancls.com/sitemap.xml',
      'https://ethancls.com/server-sitemap.xml',
    ],
  },
  exclude: ['/404', '/500'],
  generateIndexSitemap: true,
  outDir: 'public',
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
}
  