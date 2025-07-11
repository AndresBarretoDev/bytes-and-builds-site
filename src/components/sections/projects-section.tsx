'use client'

import { Button } from '@/components/ui/button'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/ui/scroll-reveal'
import { ParallaxY, ParallaxCard } from '@/components/ui/parallax'
import { ExternalLink, Github, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'
import Link from 'next/link'

const projects = [
    {
        id: 1,
        title: "E-commerce Dental",
        subtitle: "Clínica Odontológica Dr. Martínez",
        description: "Sitio web con sistema de citas online que aumentó las reservas en 250%",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
        tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
        metrics: {
            increase: "250%",
            metric: "Aumento en citas"
        },
        links: {
            demo: "https://clinica-martinez.com",
            github: null
        }
    },
    {
        id: 2,
        title: "Dashboard de Ventas",
        subtitle: "Distribuidora Los Andes",
        description: "Sistema de gestión que automatizó inventario y redujo errores en 80%",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Vue.js", "Node.js", "MongoDB", "Chart.js"],
        metrics: {
            increase: "80%",
            metric: "Reducción de errores"
        },
        links: {
            demo: "https://dashboard-losandes.com",
            github: null
        }
    },
    {
        id: 3,
        title: "Plataforma de Cursos",
        subtitle: "Academia Digital ProSkills",
        description: "LMS que permite a instructores vender cursos online con pagos automatizados",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        tags: ["React", "Firebase", "Stripe", "Video.js"],
        metrics: {
            increase: "400%",
            metric: "Crecimiento estudiantes"
        },
        links: {
            demo: "https://proskills-academy.com",
            github: null
        }
    }
]

export const ProjectsSection = () => {
    return (
        <section className="relative py-16 md:py-20 overflow-hidden">
            {/* Background with subtle parallax */}
            <div aria-hidden className="absolute inset-0 -z-10">
                <ParallaxY speed={0.2} className="absolute top-1/3 right-0">
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-primary/4 to-brand-accent/4 rounded-full blur-3xl" />
                </ParallaxY>
                <ParallaxY speed={0.15} className="absolute bottom-1/3 left-0">
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-accent/4 to-brand-primary/4 rounded-full blur-3xl" />
                </ParallaxY>
            </div>

            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 text-brand-accent text-sm font-medium mb-6 border border-brand-accent/20">
                            <TrendingUp className="w-4 h-4" />
                            Casos de Éxito
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                            Proyectos que{' '}
                            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">
                                transforman negocios
                            </span>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Conoce algunos proyectos reales donde aplicamos tecnología para resolver problemas específicos
                            y generar crecimiento medible en PYMEs como la tuya.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
                <ScrollStagger staggerDelay={0.2}>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                        {projects.map((project, index) => (
                            <ScrollStaggerItem key={project.id}>
                                <ParallaxCard intensity="light">
                                    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/10">

                                        {/* Project Image */}
                                        <div className="relative overflow-hidden aspect-[16/10]">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Overlay Actions */}
                                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {project.links.demo && (
                                                    <Button size="sm" asChild className="h-8 w-8 p-0">
                                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.links.github && (
                                                    <Button size="sm" variant="outline" asChild className="h-8 w-8 p-0">
                                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                            <Github className="w-3 h-3" />
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>

                                            {/* Metric Badge */}
                                            <div className="absolute bottom-4 left-4">
                                                <div className="bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                                                    <TrendingUp className="w-3 h-3 inline mr-1" />
                                                    {project.metrics.increase} {project.metrics.metric}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-6 space-y-4">
                                            <div className="space-y-2">
                                                <div className="text-sm text-brand-accent font-medium">
                                                    {project.subtitle}
                                                </div>
                                                <h3 className="text-xl font-semibold text-foreground group-hover:text-brand-primary transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Link */}
                                            {project.links.demo && (
                                                <div className="pt-2">
                                                    <a
                                                        href={project.links.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm text-brand-accent hover:text-brand-primary transition-colors group/link"
                                                    >
                                                        Ver proyecto
                                                        <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </ParallaxCard>
                            </ScrollStaggerItem>
                        ))}
                    </div>
                </ScrollStagger>

                {/* CTA to See More */}
                <ScrollReveal direction="up" delay={0.4}>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-4 p-6 bg-card border border-border rounded-2xl">
                            <div className="space-y-2 text-left">
                                <h3 className="text-lg font-semibold text-foreground">
                                    ¿Quieres ver tu proyecto aquí?
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Conversemos sobre cómo podemos hacer crecer tu negocio
                                </p>
                            </div>
                            <Button asChild className="shrink-0">
                                <Link href="#contacto">
                                    <Users className="w-4 h-4 mr-2" />
                                    Empezar proyecto
                                </Link>
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
} 