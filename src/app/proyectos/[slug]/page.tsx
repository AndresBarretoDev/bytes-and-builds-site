import { WordPressService } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { FooterSection } from '@/components/sections';
// import { HeroHeader } from '@/components/ui/hero-header'; // Eliminado para usar Nav minimalista

// Importación de componentes de detalle (Responsabilidad Única)
import { ProjectDetailNav } from '@/components/sections/project-detail/ProjectDetailNav';
import { ProjectDetailHero } from '@/components/sections/project-detail/ProjectDetailHero';
import { ProjectDetailImage } from '@/components/sections/project-detail/ProjectDetailImage';
import { ProjectDetailOverview } from '@/components/sections/project-detail/ProjectDetailOverview';
import { ProjectDetailChallenge } from '@/components/sections/project-detail/ProjectDetailChallenge';
import { ProjectDetailSolution } from '@/components/sections/project-detail/ProjectDetailSolution';
import { ProjectDetailStats } from '@/components/sections/project-detail/ProjectDetailStats';
import { ProjectDetailSidebar } from '@/components/sections/project-detail/ProjectDetailSidebar';
import { ProjectDetailTestimonial } from '@/components/sections/project-detail/ProjectDetailTestimonial';
import { ProjectDetailNext } from '@/components/sections/project-detail/ProjectDetailNext';

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

/**
 * Genera los parámetros estáticos para Next.js (ISR)
 */
export async function generateStaticParams() {
    try {
        const projects = await WordPressService.getProjects();
        return projects.map((project) => ({
            slug: project.slug,
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

/**
 * ProjectDetailPage - Orquestador de la vista de detalle
 * 
 * Sigue el principio de composición: ensambla componentes especializados.
 */
export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = await WordPressService.getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const nextProject = await WordPressService.getNextProject(project.id);

    return (
        <div className="min-h-screen bg-background relative overflow-x-hidden">
            {/* Navegación Minimalista de Retorno */}
            <ProjectDetailNav />

            <main className="flex-grow">
                <div className="flex flex-col items-center w-full">

                    {/* 1. Hero Section */}
                    <div className="w-full px-6 md:px-10 lg:px-40 flex justify-center pt-10">
                        <div className="w-full max-w-[1200px]">
                            <ProjectDetailHero
                                badge={project.badge || "Case Study"}
                                title={project.title}
                                subtitle={project.subtitle}
                            />
                        </div>
                    </div>

                    {/* 2. Main Image */}
                    <div className="w-full px-4 md:px-10 lg:px-40 flex justify-center">
                        <div className="w-full max-w-[1200px]">
                            <ProjectDetailImage
                                src={project.thumbnail}
                                alt={project.title}
                            />
                        </div>
                    </div>

                    {/* 3. Main Content Grid */}
                    <section className="w-full px-6 md:px-10 lg:px-40 py-12 flex justify-center">
                        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                            {/* Columna Izquierda (Narrativa) */}
                            <div className="lg:col-span-8 flex flex-col gap-16">

                                <ProjectDetailOverview text={project.description} />

                                {project.challenge && (
                                    <ProjectDetailChallenge challenge={project.challenge} />
                                )}

                                {project.solution && (
                                    <ProjectDetailSolution
                                        text={project.solution.description}
                                        features={project.solution.features}
                                    />
                                )}

                                {project.stats && (
                                    <ProjectDetailStats stats={project.stats} />
                                )}

                            </div>

                            {/* Columna Derecha (Sidebar Sticky) */}
                            <div className="lg:col-span-4 relative">
                                <div className="flex flex-col gap-8 sticky top-28">
                                    <ProjectDetailSidebar
                                        client={project.clientName}
                                        services={project.services}
                                        technologies={project.technologies}
                                        timeline={project.timeline}
                                        liveUrl={project.liveUrl}
                                    />

                                    {project.testimonial && (
                                        <ProjectDetailTestimonial
                                            quote={project.testimonial.quote}
                                            author={project.testimonial.author}
                                            role={project.testimonial.role}
                                            avatar={project.testimonial.avatar}
                                        />
                                    )}
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* 4. Footer de Navegación */}
                    {nextProject && (
                        <ProjectDetailNext
                            title={nextProject.title}
                            slug={nextProject.slug}
                        />
                    )}

                </div>
            </main>

            <FooterSection />
        </div>
    );
}
