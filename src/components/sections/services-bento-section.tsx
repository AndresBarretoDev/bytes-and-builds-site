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
const ServiceHeader = ({ imageUrl }: { imageUrl: string }) => (
    <div className="w-full h-48 md:h-56 rounded-xl relative overflow-hidden group/image flex-shrink-0">
        {/* Imagen de fondo */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover/image:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Overlay para mejor contraste - Sutil gradiente oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Elementos decorativos minimalistas */}
        <div className="absolute top-4 left-4 flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/10 rounded-full" />
        </div>
    </div>
);

const items = [
    {
        title: "Desarrollo Web",
        description: "Sitios web de alto rendimiento diseñados para convertir visitantes en clientes fieles. Optimizamos cada detalle para SEO, velocidad y una experiencia de usuario impecable.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
        />,
        // icon: <Code className="h-5 w-5 text-brand-primary" />,
    },
    {
        title: "Consultoría Digital",
        description: "Estrategia técnica para escalar tu negocio. Te ayudamos a elegir las herramientas correctas y optimizar tu flujo de trabajo digital.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?q=80&w=2070&auto=format&fit=crop"
        />,
        // icon: <MessageSquare className="h-5 w-5 text-brand-accent" />,
    },
    {
        title: "Soporte Continuo",
        description: "Tu tranquilidad es nuestra prioridad. Mantenimiento proactivo y soporte técnico especializado para que nunca dejes de operar.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop"
        />,
        // icon: <Settings className="h-5 w-5 text-brand-primary" />,
    },
    {
        title: "Automatización Inteligente",
        description: "Elimina tareas repetitivas y reduce errores humanos. Creamos sistemas autónomos que trabajan 24/7, permitiéndote enfocar tu energía en lo que realmente importa.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        />,
        // icon: <Zap className="h-5 w-5 text-brand-accent" />,
    },
]; 