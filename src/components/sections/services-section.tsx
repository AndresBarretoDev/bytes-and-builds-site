'use client'

import { Button } from '@/components/ui/button'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/ui/scroll-reveal'
import { ParallaxY, ParallaxCard, ParallaxMulti, ParallaxScale } from '@/components/ui/parallax'
import {
    Globe,
    Zap,
    Settings,
    ArrowRight,
    CheckCircle,
    Code,
    Smartphone,
    Sparkles,
    Star
} from 'lucide-react'
import Link from 'next/link'



const services = [
    {
        icon: Globe,
        title: "Desarrollo web profesional",
        description: "Sitios web modernos que convierten visitantes en clientes. Optimizados para velocidad, SEO y conversión.",
        features: [
            "Diseño responsive y moderno",
            "Optimización SEO avanzada",
            "Integración con sistemas CRM",
            "Análitica y seguimiento de conversiones"
        ],
        highlighted: true,
        buttonText: "Ver proyectos",
        buttonHref: "#casos-de-exito",
        gradient: "from-brand-primary/3 to-brand-accent/3"
    },
    {
        icon: Zap,
        title: "Automatización de procesos",
        description: "Sistemas que automatizan tareas repetitivas y optimizan las operaciones de tu PYME para mayor eficiencia.",
        features: [
            "Automatización de facturación",
            "Gestión automatizada de inventarios",
            "Workflows de aprobaciones",
            "Integración con herramientas existentes"
        ],
        highlighted: false,
        buttonText: "Conocer más",
        buttonHref: "#automatizacion",
        gradient: "from-brand-accent/3 to-brand-primary/3"
    },
    {
        icon: Smartphone,
        title: "Aplicaciones móviles",
        description: "Apps nativas y web progresivas que extienden tu presencia digital y mejoran la experiencia del cliente.",
        features: [
            "Desarrollo iOS y Android",
            "Progressive Web Apps (PWA)",
            "Sincronización con sistemas web",
            "Notificaciones push inteligentes"
        ],
        highlighted: false,
        buttonText: "Ver demos",
        buttonHref: "#demos",
        gradient: "from-brand-primary/2 to-brand-accent/4"
    }
]

export const ServicesSection = () => {
    return (
        <section id="servicios" className="relative py-16 md:py-20 overflow-hidden">
            {/* Subtle Background Effects with Parallax */}
            <div aria-hidden className="absolute inset-0 -z-10">
                <ParallaxY speed={0.3} className="absolute top-0 left-1/4">
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-primary/6 to-brand-accent/6 rounded-full blur-3xl" />
                </ParallaxY>

                <ParallaxMulti
                    effects={{
                        y: { speed: 0.4, direction: 'down' },
                        x: { speed: 0.1 }
                    }}
                    className="absolute bottom-0 right-1/4"
                >
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-accent/6 to-brand-primary/6 rounded-full blur-3xl" />
                </ParallaxMulti>

                <ParallaxScale speed={0.08} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-64 h-64 bg-brand-primary/3 rounded-full blur-2xl" />
                </ParallaxScale>
            </div>

            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 text-brand-primary text-sm font-medium mb-6 border border-brand-primary/20">
                            <Sparkles className="w-4 h-4" />
                            Nuestros servicios
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                            Soluciones digitales para{' '}
                            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">
                                PYMEs en crecimiento
                            </span>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Especializados en desarrollo web y automatización para pequeñas y medianas empresas.
                            Transformamos operaciones manuales en sistemas eficientes que impulsan el crecimiento.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <ScrollStagger staggerDelay={0.2}>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon

                            return (
                                <ScrollStaggerItem key={index}>
                                    <ParallaxCard intensity="light">
                                        <div className={`
                        group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:border-brand-primary/40
                        ${service.highlighted
                                                ? 'bg-card border-brand-primary/20 shadow-lg shadow-brand-primary/5'
                                                : 'bg-card border-border hover:shadow-lg hover:shadow-brand-primary/5'
                                            }
                      `}>




                                            {/* Floating Particles Effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute top-4 right-6 w-2 h-2 bg-brand-accent/50 rounded-full animate-pulse" />
                                                <div className="absolute top-8 right-12 w-1 h-1 bg-brand-primary/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                                                <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-brand-accent/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 space-y-6">
                                                {/* Minimal Icon */}
                                                <div className="relative">
                                                    <div className={`
                      inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300
                      ${service.highlighted
                                                            ? 'bg-brand-primary text-white'
                                                            : 'bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white'
                                                        }
                    `}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-semibold text-foreground group-hover:text-brand-primary transition-colors duration-300">
                                                    {service.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {service.description}
                                                </p>

                                                {/* Features with modern styling */}
                                                <ul className="space-y-3">
                                                    {service.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center gap-3 text-sm group/feature">
                                                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-accent/20 text-brand-accent transition-all duration-300 group-hover/feature:bg-brand-accent group-hover/feature:text-white shrink-0">
                                                                <CheckCircle className="w-3 h-3" />
                                                            </div>
                                                            <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300">
                                                                {feature}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* CTA Button */}
                                                <div className="pt-6">
                                                    <Button
                                                        variant={service.highlighted ? "default" : "outline"}
                                                        size="lg"
                                                        asChild
                                                        className="w-full group/btn overflow-hidden relative"
                                                    >
                                                        <Link href={service.buttonHref}>
                                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                                {service.buttonText}
                                                                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                                            </span>


                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>


                                        </div>
                                    </ParallaxCard>
                                </ScrollStaggerItem>
                            )
                        })}
                    </div>
                </ScrollStagger>

                {/* Modern Bottom CTA */}
                <ScrollReveal direction="up" delay={0.4}>
                    <div className="text-center mt-20">
                        <ParallaxScale speed={0.1} className="relative max-w-4xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-accent/5 to-brand-primary/5 rounded-3xl blur-xl" />

                            <div className="relative bg-card/80 backdrop-blur-sm border border-brand-primary/20 rounded-3xl p-8 md:p-12">
                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    <div className="text-left sm:text-center flex-1">
                                        <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                                            ¿No estás seguro qué necesitas?
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Conversemos sobre tu proyecto. Consulta gratuita sin compromiso.
                                        </p>
                                    </div>

                                    <Button size="lg" asChild className="shrink-0 group/cta">
                                        <Link href="#contacto">
                                            <Sparkles className="w-5 h-5 mr-2" />
                                            Agendar consulta
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/cta:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </ParallaxScale>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    )
} 