'use client'

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ParallaxY, ParallaxMulti, ParallaxScale } from '@/components/ui/parallax';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import {
    Code,
    Settings,
    MessageSquare,
    Zap,
    Globe,
    Bot
} from "lucide-react";

export const ServicesBentoSection = () => {
    return (
        <section id="servicios" className="relative py-16 md:py-20 overflow-hidden scroll-mt-24">
            {/* Subtle Background Effects with Parallax */}
            <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-muted/10 to-background" />

                <ParallaxY speed={0.2} className="absolute top-1/4 left-1/4">
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-primary/6 to-brand-accent/6 rounded-full blur-3xl" />
                </ParallaxY>

                <ParallaxMulti
                    effects={{
                        y: { speed: 0.3, direction: 'down' },
                        x: { speed: 0.1, direction: 'up' }
                    }}
                    className="absolute bottom-1/4 right-1/4"
                >
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-accent/6 to-brand-primary/6 rounded-full blur-3xl" />
                </ParallaxMulti>

                <ParallaxScale speed={0.05} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[600px] h-[200px] bg-brand-primary/3 rounded-full blur-3xl" />
                </ParallaxScale>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 text-brand-accent text-sm font-medium mb-6 border border-brand-accent/20">
                        <Zap className="w-4 h-4" />
                        Nuestros Servicios
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                        Soluciones que{' '}
                        <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">
                            impulsan tu crecimiento
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Combinamos desarrollo web profesional con automatización inteligente
                        para crear soluciones digitales que realmente funcionen para tu negocio.
                    </p>
                    </div>
                </ScrollReveal>

                {/* Bento Grid */}
                <ScrollReveal direction="up" delay={0.3}>
                    <BentoGrid className="max-w-6xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={cn(
                                // Adaptamos los brand colors
                                "bg-card border-border hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5",
                                // Layout: Desarrollo Web será el destacado (col-span-2)
                                i === 0 ? "md:col-span-2" : "",
                                // Automatización también destacado pero en diferente posición
                                i === 3 ? "md:col-span-2" : ""
                            )}
                        />
                    ))}
                    </BentoGrid>
                </ScrollReveal>
            </div>
        </section>
    );
};

// Componente para el header visual de cada servicio con imágenes
const ServiceHeader = ({ imageUrl, icon: Icon }: { imageUrl: string, icon: any }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative overflow-hidden">
        {/* Imagen de fondo */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Overlay para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60" />
        {/* Elementos decorativos */}
        <div className="absolute bottom-4 right-4">
            <Icon className="w-8 h-8 text-white drop-shadow-lg" />
        </div>
        <div className="absolute top-4 left-4 w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm" />
        <div className="absolute top-8 left-8 w-3 h-3 bg-white/40 rounded-full backdrop-blur-sm" />
    </div>
);

const items = [
    {
        title: "Desarrollo Web",
        description: "Sitios web profesionales que convierten visitantes en clientes. Optimizados para velocidad, SEO y conversiones.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3"
            icon={Globe}
        />,
        icon: <Code className="h-4 w-4 text-brand-primary" />,
    },
    {
        title: "Consultoría Digital",
        description: "Te ayudamos a definir la estrategia digital perfecta para tu negocio y objetivos específicos.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3"
            icon={MessageSquare}
        />,
        icon: <MessageSquare className="h-4 w-4 text-brand-accent" />,
    },
    {
        title: "Soporte Continuo",
        description: "Mantenimiento, actualizaciones y soporte técnico para que tu sitio siempre funcione perfecto.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            icon={Settings}
        />,
        icon: <Settings className="h-4 w-4 text-brand-secondary" />,
    },
    {
        title: "Automatización Inteligente",
        description: "Sistemas que trabajan por ti 24/7. Automatiza procesos repetitivos y ahorra tiempo valioso para crecer.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3"
            icon={Bot}
        />,
        icon: <Bot className="h-4 w-4 text-brand-accent" />,
    },
]; 