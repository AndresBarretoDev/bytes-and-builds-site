import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/styleguide', '/home-v2'],
        },
        sitemap: 'https://bytesandbuilds.com/sitemap.xml',
    }
}
