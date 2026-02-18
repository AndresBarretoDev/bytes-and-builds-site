import { WordPressService } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import { FooterSection } from '@/components/sections';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

// Importación de componentes de detalle (Responsabilidad Única)
import { PageSubNav } from '@/components/sections/project-detail/ProjectDetailNav';
import { ProjectDetailHero } from '@/components/sections/project-detail/ProjectDetailHero';
import { ProjectDetailImage } from '@/components/sections/project-detail/ProjectDetailImage';
import { ProjectDetailOverview } from '@/components/sections/project-detail/ProjectDetailOverview';
import { ProjectDetailChallenge } from '@/components/sections/project-detail/ProjectDetailChallenge';
import { ProjectDetailGallery } from '@/components/sections/project-detail/ProjectDetailGallery';
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
 */
export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = await WordPressService.getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const nextProject = await WordPressService.getNextProject(project.id);

    const { testimonial } = project;
    const hasTestimonial = !!(testimonial?.quote && testimonial?.author && testimonial?.role);

    return (
        <div className="min-h-screen bg-background relative">
            {/* Navegación Minimalista de Retorno */}
            <PageSubNav />

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
                            <div className="lg:col-span-8 flex flex-col gap-12">

                                <ScrollReveal direction="up" delay={0.1}>
                                    <ProjectDetailOverview text={project.description} />
                                </ScrollReveal>

                                {project.challenge && (
                                    <ScrollReveal direction="up" delay={0.2}>
                                        <ProjectDetailChallenge challenge={project.challenge} />
                                    </ScrollReveal>
                                )}

                                {project.gallery && (
                                    <ScrollReveal direction="up" delay={0.3}>
                                        <ProjectDetailGallery
                                            images={project.gallery.images}
                                            title={project.gallery.title}
                                        />
                                    </ScrollReveal>
                                )}

                                {project.solution && (
                                    <ScrollReveal direction="up" delay={0.2}>
                                        <ProjectDetailSolution
                                            text={project.solution.description}
                                            features={project.solution.features}
                                        />
                                    </ScrollReveal>
                                )}

                                {project.stats && (
                                    <ScrollReveal direction="up" delay={0.2}>
                                        <ProjectDetailStats stats={project.stats} />
                                    </ScrollReveal>
                                )}

                            </div>

                            {/* Columna Derecha (Sidebar Sticky) */}
                            <div className="lg:col-span-4 relative">
                                <div className="flex flex-col gap-8 sticky top-28 self-start w-full">
                                    <ScrollReveal direction="right" delay={0.4}>
                                        <ProjectDetailSidebar
                                            client={project.clientName}
                                            services={project.services}
                                            technologies={project.technologies}
                                            timeline={project.timeline}
                                            liveUrl={project.liveUrl}
                                        />
                                    </ScrollReveal>

                                    {hasTestimonial && (
                                        <ScrollReveal direction="right" delay={0.5}>
                                            <ProjectDetailTestimonial
                                                quote={testimonial!.quote}
                                                author={testimonial!.author}
                                                role={testimonial!.role}
                                                avatar={testimonial?.avatar}
                                            />
                                        </ScrollReveal>
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
