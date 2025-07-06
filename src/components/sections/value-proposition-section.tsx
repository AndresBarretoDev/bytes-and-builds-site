'use client'

import { Button } from '@/components/ui/button'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/ui/scroll-reveal'
import { ParallaxY, ParallaxCard, ParallaxMulti, ParallaxScale } from '@/components/ui/parallax'
import {
    TrendingUp,
    Clock,
    DollarSign,
    Users,
    Shield,
    Zap,
    ArrowRight,
    CheckCircle,
    Target,
    Heart,
    Rocket,
    Sparkles
} from 'lucide-react'
import Link from 'next/link'

const benefits = [
    {
        icon: TrendingUp,
        title: "Crecimiento acelerado",
        description: "Aumenta tus ventas hasta 300% con sitios web optimizados para conversión",
        stat: "300%",
        statLabel: "Aumento promedio en ventas",
        gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
        icon: Clock,
        title: "Ahorro de tiempo",
        description: "Automatiza procesos repetitivos y recupera hasta 20 horas semanales",
        stat: "20h",
        statLabel: "Ahorro semanal promedio",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: DollarSign,
        title: "ROI garantizado",
        description: "Recupera tu inversión en los primeros 6 meses o te devolvemos la diferencia",
        stat: "6 meses",
        statLabel: "Para recuperar inversión",
        gradient: "from-purple-500/20 to-pink-500/20"
    }
]

const features = [
    {
        icon: Shield,
        title: "Soporte dedicado",
        description: "Equipo técnico disponible para resolver cualquier inconveniente rápidamente."
    },
    {
        icon: Users,
        title: "Enfoque en PYMEs",
        description: "Entendemos los retos únicos de pequeñas y medianas empresas en crecimiento."
    },
    {
        icon: Zap,
        title: "Implementación rápida",
        description: "Proyectos entregados en tiempo récord sin comprometer la calidad."
    }
]

export const ValuePropositionSection = () => {
    return (
        <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
            {/* Subtle Background Effects with Parallax */}
            <div aria-hidden className="absolute inset-0 -z-10">
                <ParallaxMulti
                    effects={{
                        y: { speed: 0.3, direction: 'down' },
                        x: { speed: 0.1, direction: 'down' }
                    }}
                    className="absolute top-1/4 right-0"
                >
                    <div className="w-[600px] h-[600px] bg-gradient-to-r from-brand-accent/6 via-brand-primary/6 to-transparent rounded-full blur-3xl" />
                </ParallaxMulti>

                <ParallaxY speed={0.4} className="absolute bottom-1/4 left-0">
                    <div className="w-[500px] h-[500px] bg-gradient-to-r from-brand-primary/6 via-brand-accent/6 to-transparent rounded-full blur-3xl" />
                </ParallaxY>

                <ParallaxScale speed={0.06} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[800px] h-[400px] bg-gradient-to-r from-brand-primary/3 via-brand-accent/3 to-brand-primary/3 rounded-full blur-3xl" />
                </ParallaxScale>
            </div>

            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 text-brand-accent text-sm font-medium mb-6 border border-brand-accent/20">
                            <Heart className="w-4 h-4" />
                            ¿Por qué Bytes & Builds?
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 max-w-4xl mx-auto leading-tight">
                            Transformamos PYMEs con{' '}
                            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">
                                tecnología inteligente
                            </span>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            No somos solo otra agencia digital. Somos especialistas en hacer crecer pequeñas y medianas empresas
                            a través de soluciones tecnológicas que realmente funcionan.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Main Benefits Grid */}
                <ScrollStagger staggerDelay={0.2}>
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon

                            return (
                                <ScrollStaggerItem key={index}>
                                    <ParallaxCard intensity="medium">
                                        <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 transition-all duration-500 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/10">

                                            {/* Floating Particles Effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute top-4 right-6 w-2 h-2 bg-brand-accent/50 rounded-full animate-pulse" />
                                                <div className="absolute top-8 right-12 w-1 h-1 bg-brand-primary/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                                                <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-brand-accent/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 text-center space-y-6">
                                                {/* Minimal Icon */}
                                                <div className="relative inline-block">
                                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white">
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                </div>

                                                {/* Balanced Stat Display */}
                                                <div className="space-y-2 relative">
                                                    <div className="text-3xl md:text-4xl font-bold text-brand-primary">
                                                        {benefit.stat}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground font-medium">
                                                        {benefit.statLabel}
                                                    </div>
                                                </div>

                                                {/* Title & Description with enhanced styling */}
                                                <div className="space-y-3">
                                                    <h3 className="text-xl font-semibold text-foreground group-hover:text-brand-primary transition-colors duration-300">
                                                        {benefit.title}
                                                    </h3>
                                                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </ParallaxCard>
                                </ScrollStaggerItem>
                            )
                        })}
                    </div>
                </ScrollStagger>

                {/* Enhanced Secondary Features */}
                <ScrollReveal direction="up" delay={0.4}>
                    <ParallaxScale speed={0.1} className="relative">
                        {/* Modern Background Card */}
                        <div className="rounded-[2rem] bg-gradient-to-br from-card/80 via-card/95 to-card/80 backdrop-blur-sm border border-border/50 p-12 md:p-16 overflow-hidden">

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute top-8 left-8 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-8 right-8 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl" />
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">

                                {/* Left Content */}
                                <div className="space-y-8">
                                    <div className="space-y-6">
                                        <h3 className="text-3xl md:text-4xl text-foreground leading-tight">
                                            Más que desarrollo,{' '}
                                            <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
                                                somos tu socio tecnológico
                                            </span>
                                        </h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            Entendemos que cada PYME tiene necesidades únicas. Por eso creamos soluciones
                                            personalizadas que se adaptan a tu presupuesto y objetivos de crecimiento.
                                        </p>
                                    </div>

                                    {/* Enhanced Features List */}
                                    <div className="space-y-6">
                                        {features.map((feature, index) => {
                                            const Icon = feature.icon

                                            return (
                                                <div key={index} className="flex items-start gap-4 group/feature p-4 rounded-2xl transition-all duration-300 hover:bg-brand-primary/5">
                                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-accent/10 text-brand-accent transition-all duration-300 group-hover/feature:bg-brand-accent group-hover/feature:text-white shrink-0">
                                                        <Icon className="w-4 h-4" />
                                                    </div>

                                                    <div className="space-y-1 flex-1">
                                                        <h4 className="font-semibold text-foreground group-hover/feature:text-brand-accent transition-colors duration-300">
                                                            {feature.title}
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground leading-relaxed group-hover/feature:text-foreground transition-colors duration-300">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Right Content - Enhanced Stats Grid */}
                                <div className="relative">
                                    <div className="grid grid-cols-2 gap-6">
                                        {/* Floating Stats Cards */}
                                        <div className="space-y-6">
                                            <ParallaxY speed={0.2}>
                                                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 backdrop-blur-sm border border-brand-primary/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                                                    <div className="text-3xl font-bold text-brand-primary mb-2">50+</div>
                                                    <div className="text-sm text-muted-foreground">PYMEs satisfechas</div>
                                                </div>
                                            </ParallaxY>

                                            <ParallaxY speed={0.25}>
                                                <div className="bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 backdrop-blur-sm border border-brand-accent/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                                                    <div className="text-3xl font-bold text-brand-accent mb-2">99%</div>
                                                    <div className="text-sm text-muted-foreground">Proyectos exitosos</div>
                                                </div>
                                            </ParallaxY>
                                        </div>

                                        <div className="space-y-6 mt-8">
                                            <ParallaxY speed={0.15}>
                                                <div className="bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 backdrop-blur-sm border border-brand-accent/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                                                    <div className="text-3xl font-bold text-brand-accent mb-2">24/7</div>
                                                    <div className="text-sm text-muted-foreground">Soporte técnico</div>
                                                </div>
                                            </ParallaxY>

                                            <ParallaxY speed={0.3}>
                                                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 backdrop-blur-sm border border-brand-primary/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                                                    <div className="text-3xl font-bold text-brand-primary mb-2">2 sem</div>
                                                    <div className="text-sm text-muted-foreground">Tiempo promedio</div>
                                                </div>
                                            </ParallaxY>
                                        </div>
                                    </div>

                                    {/* Floating Badge */}
                                    <ParallaxMulti
                                        effects={{
                                            y: { speed: 0.2 },
                                            rotate: { speed: 2 }
                                        }}
                                        className="absolute -top-4 -right-4"
                                    >
                                        <div className="bg-gradient-to-r from-brand-accent to-brand-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <Sparkles className="w-4 h-4 inline mr-1" />
                                            Garantizado
                                        </div>
                                    </ParallaxMulti>
                                </div>
                            </div>
                        </div>
                    </ParallaxScale>
                </ScrollReveal>

                {/* Enhanced CTA */}
                <ScrollReveal direction="up" delay={0.6}>
                    <div className="text-center mt-20">
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 rounded-3xl blur-2xl" />

                            <div className="relative bg-gradient-to-br from-card/90 to-card/95 backdrop-blur-sm border border-brand-primary/20 rounded-3xl p-8 md:p-10">
                                <Rocket className="w-12 h-12 text-brand-accent mx-auto mb-4" />

                                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                                    ¿Listo para transformar tu negocio?
                                </h3>

                                <p className="text-muted-foreground mb-6">
                                    Conversa con nuestro equipo y descubre cómo podemos impulsar tu crecimiento
                                </p>

                                <Button size="lg" asChild className="group/cta">
                                    <Link href="#contacto">
                                        <Target className="w-5 h-5 mr-2" />
                                        Iniciar transformación
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/cta:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    )
} 