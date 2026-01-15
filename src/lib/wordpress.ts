/**
 * WordPress API Service
 * 
 * Clean implementation for fetching and mapping WordPress data.
 * Uses Basic Authentication with WordPress Application Passwords.
 */

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const WP_USER = process.env.WORDPRESS_API_USER;
const WP_PASSWORD = process.env.WORDPRESS_APP_PASSWORD;

export interface WPProject {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    subtitle: string;
    description: string;
    badge: string;
    technologies: string[];
    link: string;
    // Campos para el layout avanzado
    clientName?: string;
    services?: string[];
    timeline?: string;
    liveUrl?: string;
    gallery?: {
        title: string;
        images: string[];
    };
    challenge?: {
        title: string;
        items: string[];
    };
    solution?: {
        title: string;
        description: string;
        features: { title: string; desc: string }[];
    };
    stats?: { label: string; value: string }[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
        avatar?: string;
    };
}

async function fetchWP(endpoint: string) {
    const authToken = Buffer.from(`${WP_USER}:${WP_PASSWORD}`).toString('base64');

    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            'Authorization': `Basic ${authToken}`,
            'Content-Type': 'application/json',
        },
        next: { revalidate: process.env.NODE_ENV === 'development' ? 10 : 3600 },
    });

    if (!response.ok) {
        throw new Error(`WordPress API Error: ${response.statusText} (${response.status})`);
    }

    return response.json();
}

export const WordPressService = {
    /**
     * Obtiene todos los proyectos mapeados al formato de la UI
     */
    async getProjects(): Promise<WPProject[]> {
        const posts = await fetchWP('/projects?_embed&per_page=100');
        return posts.map((post: any) => this.mapProject(post, 'list'));
    },

    /**
     * Obtiene un proyecto específico por su slug
     */
    async getProjectBySlug(slug: string): Promise<WPProject | null> {
        const posts = await fetchWP(`/projects?slug=${slug}&_embed`);
        if (!posts.length) return null;
        return this.mapProject(posts[0], 'detail');
    },

    /**
     * Mapeador central: Sección 1 (Slugs directos) + Secciones 2-5 (Plan Maestro)
     */
    mapProject(post: any, mode: 'list' | 'detail'): WPProject {
        const acf = post.acf || {};

        return {
            id: post.id,
            title: acf.custom_title || post.title.rendered,
            slug: post.slug,
            link: `/proyectos/${post.slug}`,
            thumbnail: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || `https://picsum.photos/800/600?random=${Math.random() * post.id}.webp`,

            // SECCIÓN 1: Slugs correctos confirmados por el usuario
            subtitle: acf.subtitle || 'Proyecto Destacado',
            description: acf.description || (mode === 'list'
                ? post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 150)
                : post.content.rendered),
            badge: acf.badge || '',
            clientName: acf.client_name,
            timeline: acf.timeline,
            liveUrl: acf.live_url,
            services: acf.services,
            gallery: acf.gallery_group ? {
                title: acf.gallery_group.gallery_title || "Showcase Visual",
                images: Array.isArray(acf.gallery_group.gallery_items)
                    ? acf.gallery_group.gallery_items.map((item: any) => {
                        if (typeof item === 'string') return item;
                        return item.url || item.source_url || item;
                    })
                    : []
            } : undefined,
            technologies: acf.technologies
                ? (Array.isArray(acf.technologies) ? acf.technologies : (typeof acf.technologies === 'string' ? acf.technologies.split(',').map((t: string) => t.trim()) : []))
                : [],

            // SECCIONES 2-5: Plan Maestro Final
            challenge: acf.challenge_group ? {
                title: acf.challenge_group.challenge_title || "El Desafío",
                items: Array.isArray(acf.challenge_group.challenge_items)
                    ? acf.challenge_group.challenge_items.map((i: any) => i.item_text)
                    : []
            } : undefined,

            solution: acf.solution_group ? {
                title: "La Solución",
                description: acf.solution_group.solution_text,
                features: Array.isArray(acf.solution_group.solution_features)
                    ? acf.solution_group.solution_features.map((f: any) => ({
                        title: f.feature_title,
                        desc: f.feature_desc
                    }))
                    : []
            } : undefined,

            stats: Array.isArray(acf.project_stats)
                ? acf.project_stats.map((s: any) => ({
                    label: s.stat_label,
                    value: s.stat_value
                }))
                : undefined,

            testimonial: acf.testimonial_group ? {
                quote: acf.testimonial_group.client_quote,
                author: acf.testimonial_group.author_name,
                role: acf.testimonial_group.author_role,
                avatar: acf.testimonial_group.author_avatar
            } : undefined,
        };
    },

    /**
     * Obtiene el siguiente proyecto para la navegación
     */
    async getNextProject(currentId: number): Promise<{ title: string; slug: string } | null> {
        const projects = await this.getProjects();
        const currentIndex = projects.findIndex(p => p.id === currentId);
        if (currentIndex === -1 || projects.length <= 1) return null;

        const nextProject = projects[(currentIndex + 1) % projects.length];
        return { title: nextProject.title, slug: nextProject.slug };
    }
};
