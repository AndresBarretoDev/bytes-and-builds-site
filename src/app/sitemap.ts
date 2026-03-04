import { MetadataRoute } from 'next'
import { WordPressService } from '@/lib/wordpress'

// Se regenera automáticamente en el servidor cada hora sin necesidad de deploy
export const revalidate = 3600

const BASE_URL = 'https://bytesandbuilds.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Páginas estáticas
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/proyectos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/privacidad`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/terminos`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Páginas dinámicas: proyectos desde WordPress
    try {
        const projects = await WordPressService.getProjects()
        const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
            url: `${BASE_URL}/proyectos/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))
        return [...staticRoutes, ...projectRoutes]
    } catch {
        // Si WordPress no responde, al menos devolvemos las rutas estáticas
        return staticRoutes
    }
}
