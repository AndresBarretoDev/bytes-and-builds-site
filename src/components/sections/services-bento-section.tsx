'use client'

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
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
        <section className="relative py-16 md:py-20 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 text-brand-accent text-sm font-medium mb-6 border border-brand-accent/20">
                        <Zap className="w-4 h-4" />
                        Nuestros Servicios
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
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

                {/* Bento Grid */}
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
            imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            icon={Globe}
        />,
        icon: <Code className="h-4 w-4 text-brand-primary" />,
    },
    {
        title: "Consultoría Digital",
        description: "Te ayudamos a definir la estrategia digital perfecta para tu negocio y objetivos específicos.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            icon={MessageSquare}
        />,
        icon: <MessageSquare className="h-4 w-4 text-brand-accent" />,
    },
    {
        title: "Soporte Continuo",
        description: "Mantenimiento, actualizaciones y soporte técnico para que tu sitio siempre funcione perfecto.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            icon={Settings}
        />,
        icon: <Settings className="h-4 w-4 text-brand-secondary" />,
    },
    {
        title: "Automatización Inteligente",
        description: "Sistemas que trabajan por ti 24/7. Automatiza procesos repetitivos y ahorra tiempo valioso para crecer.",
        header: <ServiceHeader
            imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            icon={Bot}
        />,
        icon: <Bot className="h-4 w-4 text-brand-accent" />,
    },
]; 