import { HeroParallax } from '@/components/ui/hero-parallax'
import { ParallaxY, ParallaxMulti, ParallaxScale } from '@/components/ui/parallax'
import { WPProject } from '@/lib/wordpress'

interface ProjectsParallaxSectionProps {
    projects: WPProject[];
}

/**
 * ProjectsParallaxSection (Client/Animated View)
 * 
 * Se encarga puramente de la representación visual y animaciones.
 */
export function ProjectsParallaxSection({ projects }: ProjectsParallaxSectionProps) {
    return (
        <section id="proyectos" className="relative scroll-mt-24 overflow-hidden">
            {/* Background Effects */}
            <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
                <ParallaxY speed={0.25} className="absolute top-1/3 right-0">
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-primary/4 to-brand-accent/4 rounded-full blur-3xl" />
                </ParallaxY>

                <ParallaxMulti
                    effects={{
                        y: { speed: 0.35, direction: 'down' },
                        x: { speed: 0.12 }
                    }}
                    className="absolute bottom-1/3 left-0"
                >
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-accent/4 to-brand-primary/4 rounded-full blur-3xl" />
                </ParallaxMulti>

                <ParallaxScale speed={0.05} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[600px] h-[400px] bg-brand-primary/2 rounded-full blur-3xl" />
                </ParallaxScale>
            </div>

            <HeroParallax products={projects} />
        </section>
    )
}
