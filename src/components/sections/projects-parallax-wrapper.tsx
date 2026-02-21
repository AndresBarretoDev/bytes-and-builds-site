import { WordPressService, WPProject } from '@/lib/wordpress';
import { ProjectsParallaxSection } from './projects-parallax-section';

/**
 * ProjectsParallaxWrapper (Server Component)
 * 
 * Responsable de la lógica de negocio:
 * 1. Obtener datos de WordPress.
 * 2. Aplicar lógica de duplicación y shuffling para el efecto infinito.
 */
export async function ProjectsParallaxWrapper() {
    try {
        const realProjects = await WordPressService.getProjects();

        if (!realProjects || realProjects.length === 0) {
            return null;
        }

        // LÓGICA DE INFINITO Y SHUFFLE
        // Queremos al menos 15-20 elementos para que el Parallax se vea denso
        const TARGET_COUNT = 20;
        const displayProjects: WPProject[] = [];
        let counter = 0;

        while (displayProjects.length < TARGET_COUNT) {
            // Clonamos y barajamos el array original para que no se vea el patrón
            const shuffled = [...realProjects].sort(() => Math.random() - 0.5);
            
            shuffled.forEach((p) => {
                counter++;
                displayProjects.push({
                    ...p,
                    // Generamos un ID único incremental para evitar problemas de keys en React
                    id: counter
                });
            });
        }

        // Limitamos al target exacto
        const finalProjects = displayProjects.slice(0, TARGET_COUNT);

        return <ProjectsParallaxSection projects={finalProjects} />;
    } catch (error) {
        console.error("Error loading projects from WordPress:", error);
        // Fallback: Si falla la API, podríamos mostrar nada o una versión estática mínima
        return null;
    }
}

