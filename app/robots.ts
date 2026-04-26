import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'Qwantify', allow: '/' },
      { userAgent: 'Bravecrawl', allow: '/' },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Ecosiabot', allow: '/' },
    ],
    sitemap: 'https://www.harikacreative.com/sitemap.xml',
  }
}
