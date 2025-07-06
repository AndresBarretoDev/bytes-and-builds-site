'use client'

import { Button } from '@/components/ui/button'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/ui/scroll-reveal'
import { ParallaxY, ParallaxCard, ParallaxMulti, ParallaxScale } from '@/components/ui/parallax'
import {
    MessageCircle,
    Lightbulb,
    Code,
    Rocket,
    ArrowRight,
    CheckCircle,
    Calendar,
    FileText,
    Settings,
    Sparkles,
    Target,
    Zap
} from 'lucide-react'
import Link from 'next/link'

const steps = [
    {
        number: "01",
        icon: MessageCircle,
        title: "Consulta inicial",
        subtitle: "Entendemos tu visión",
        description: "Conversamos sobre tus objetivos, desafíos actuales y necesidades específicas. Analizamos tu negocio para diseñar la solución perfecta.",
        duration: "1-2 días",
        deliverables: [
            "Análisis completo de necesidades",
            "Propuesta técnica personalizada",
            "Cronograma y presupuesto detallado"
        ],
        color: "brand-primary"
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Planificación estratégica",
        subtitle: "Diseñamos tu hoja de ruta",
        description: "Creamos un plan detallado que incluye arquitectura técnica, diseño UX/UI y estrategia de implementación adaptada a tu presupuesto.",
        duration: "3-5 días",
        deliverables: [
            "Arquitectura del sistema",
            "Diseños y prototipos interactivos",
            "Plan de implementación por fases"
        ],
        color: "brand-accent"
    },
    {
        number: "03",
        icon: Code,
        title: "Desarrollo y automatización",
        subtitle: "Construimos tu solución",
        description: "Nuestro equipo desarrolla tu solución utilizando las mejores prácticas y tecnologías modernas. Implementamos automáticamente sistemas de calidad.",
        duration: "1-4 semanas",
        deliverables: [
            "Desarrollo completo del sistema",
            "Pruebas automatizadas",
            "Documentación técnica"
        ],
        color: "brand-primary"
    },
    {
        number: "04",
        icon: Rocket,
        title: "Lanzamiento y soporte",
        subtitle: "Tu éxito es nuestro objetivo",
        description: "Lanzamos tu proyecto al mundo y te acompañamos en cada paso. Monitoreo continuo, optimizaciones y soporte técnico garantizado.",
        duration: "Permanente",
        deliverables: [
            "Despliegue en producción",
            "Capacitación del equipo",
            "Soporte técnico 24/7"
        ],
        color: "brand-accent"
    }
]

export const ProcessSection = () => {
    return (
        <section className="relative py-16 md:py-20 overflow-hidden">
            {/* Subtle Background with Parallax */}
            <div aria-hidden className="absolute inset-0 -z-10">
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

            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 text-brand-primary text-sm font-medium mb-6 border border-brand-primary/20">
                            <Settings className="w-4 h-4" />
                            Nuestra metodología
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                            De la idea al{' '}
                            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">
                                éxito digital
                            </span>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Un proceso probado que transforma ideas en soluciones digitales exitosas.
                            Transparente, eficiente y enfocado en resultados medibles.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Process Steps */}
                <div className="space-y-20">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        const isEven = index % 2 === 0

                        return (
                            <ScrollReveal
                                key={index}
                                direction={isEven ? "left" : "right"}
                                delay={0.2 + (index * 0.1)}
                            >
                                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>

                                    {/* Content */}
                                    <div className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                                        <div className="space-y-6">
                                            {/* Step Number & Icon */}
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${step.color}/10 text-${step.color} transition-all duration-300 hover:bg-${step.color} hover:text-white`}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>

                                                    {/* Step number badge */}
                                                    <div className={`absolute -top-1 -right-1 w-6 h-6 bg-${step.color} text-white text-xs font-bold rounded-full flex items-center justify-center`}>
                                                        {step.number}
                                                    </div>
                                                </div>

                                                <div className="flex-1">
                                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${step.color}/10 text-${step.color} text-sm font-medium`}>
                                                        <Calendar className="w-3 h-3" />
                                                        {step.duration}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Title & Subtitle */}
                                            <div className="space-y-2">
                                                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                                                    {step.title}
                                                </h3>
                                                <p className={`text-lg font-medium text-${step.color}`}>
                                                    {step.subtitle}
                                                </p>
                                            </div>

                                            {/* Description */}
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Deliverables */}
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                                                    <FileText className="w-4 h-4 text-brand-accent" />
                                                    Entregables
                                                </h4>
                                                <ul className="space-y-3">
                                                    {step.deliverables.map((deliverable, deliverableIndex) => (
                                                        <li key={deliverableIndex} className="flex items-center gap-3 group/item">
                                                            <div className={`flex items-center justify-center w-5 h-5 rounded-full bg-${step.color}/20 text-${step.color} transition-all duration-300 group-hover/item:bg-${step.color} group-hover/item:text-white shrink-0`}>
                                                                <CheckCircle className="w-3 h-3" />
                                                            </div>
                                                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                                                                {deliverable}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual */}
                                    <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                                        <ParallaxCard intensity={isEven ? "medium" : "light"}>
                                            <div className="relative">
                                                {/* Main Card */}
                                                <div className={`relative overflow-hidden rounded-2xl bg-card border border-${step.color}/20 p-6 md:p-8 transition-all duration-500 hover:shadow-lg hover:shadow-${step.color}/10`}>

                                                    {/* Background Pattern */}
                                                    <div className="absolute inset-0 opacity-10">
                                                        <ParallaxY speed={0.1}>
                                                            <div className={`absolute top-4 right-4 w-32 h-32 bg-${step.color}/20 rounded-full blur-2xl`} />
                                                        </ParallaxY>
                                                        <ParallaxY speed={0.15}>
                                                            <div className={`absolute bottom-4 left-4 w-24 h-24 bg-${step.color}/30 rounded-full blur-xl`} />
                                                        </ParallaxY>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="relative z-10 space-y-6">
                                                        {/* Large Icon */}
                                                        <div className="relative">
                                                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${step.color}/10 text-${step.color} transition-all duration-300 hover:bg-${step.color} hover:text-white`}>
                                                                <Icon className="w-8 h-8" />
                                                            </div>

                                                            {/* Floating particles */}
                                                            <div className="absolute inset-0 opacity-60">
                                                                <div className={`absolute top-2 right-2 w-2 h-2 bg-${step.color}/50 rounded-full animate-pulse`} />
                                                                <div className={`absolute top-4 right-4 w-1 h-1 bg-${step.color}/50 rounded-full animate-ping`} style={{ animationDelay: '0.5s' }} />
                                                                <div className={`absolute top-3 right-6 w-1.5 h-1.5 bg-${step.color}/30 rounded-full animate-bounce`} style={{ animationDelay: '1s' }} />
                                                            </div>
                                                        </div>

                                                        {/* Mini Progress Bar */}
                                                        <div className="space-y-3">
                                                            <div className="flex items-center justify-between text-sm">
                                                                <span className="text-muted-foreground">Progreso</span>
                                                                <span className={`text-${step.color} font-medium`}>
                                                                    {Math.round(((index + 1) / steps.length) * 100)}%
                                                                </span>
                                                            </div>
                                                            <div className="w-full bg-border rounded-full h-1.5">
                                                                <div
                                                                    className={`bg-${step.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                                                                    style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Stats */}
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className={`text-center p-3 rounded-xl bg-${step.color}/5 border border-${step.color}/10`}>
                                                                <div className={`text-lg font-bold text-${step.color}`}>
                                                                    {step.deliverables.length}
                                                                </div>
                                                                <div className="text-xs text-muted-foreground">Entregables</div>
                                                            </div>
                                                            <div className={`text-center p-3 rounded-xl bg-${step.color}/5 border border-${step.color}/10`}>
                                                                <div className={`text-lg font-bold text-${step.color}`}>
                                                                    {step.duration.includes('semana') ? step.duration.split('-')[0] + 'sem' : step.duration}
                                                                </div>
                                                                <div className="text-xs text-muted-foreground">Duración</div>
                                                            </div>
                                                        </div>

                                                        {/* Action Button */}
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className={`w-full border-${step.color}/20 hover:bg-${step.color}/10 hover:border-${step.color}/40`}
                                                        >
                                                            <Sparkles className="w-4 h-4 mr-2" />
                                                            Ver detalles
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </ParallaxCard>
                                    </div>

                                </div>
                            </ScrollReveal>
                        )
                    })}
                </div>

                {/* Enhanced CTA Section */}
                <ScrollReveal direction="up" delay={0.6}>
                    <ParallaxScale speed={0.08} className="text-center mt-24">
                        <div className="relative max-w-4xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 rounded-3xl blur-2xl" />

                            <div className="relative bg-gradient-to-br from-card/90 to-card/95 backdrop-blur-sm border border-brand-primary/20 rounded-3xl p-8 md:p-12">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left Content */}
                                    <div className="text-left space-y-6">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                                                ¿Listo para iniciar tu{' '}
                                                <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
                                                    transformación digital?
                                                </span>
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Conversemos sobre tu proyecto. Te acompañamos en cada paso del proceso
                                                para garantizar el éxito de tu inversión.
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button size="lg" asChild className="group/cta">
                                                <Link href="#contacto">
                                                    <Target className="w-5 h-5 mr-2" />
                                                    Comenzar proyecto
                                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/cta:translate-x-1" />
                                                </Link>
                                            </Button>

                                            <Button variant="outline" size="lg" asChild className="group/cta2">
                                                <Link href="#casos-de-exito">
                                                    <Zap className="w-5 h-5 mr-2" />
                                                    Ver casos de éxito
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Right Visual */}
                                    <div className="relative">
                                        <div className="grid grid-cols-2 gap-4">
                                            <ParallaxY speed={0.1}>
                                                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 backdrop-blur-sm border border-brand-primary/20 rounded-2xl p-4 text-center">
                                                    <div className="text-2xl font-bold text-brand-primary mb-1">4</div>
                                                    <div className="text-xs text-muted-foreground">Fases probadas</div>
                                                </div>
                                            </ParallaxY>

                                            <ParallaxY speed={0.15}>
                                                <div className="bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 backdrop-blur-sm border border-brand-accent/20 rounded-2xl p-4 text-center mt-6">
                                                    <div className="text-2xl font-bold text-brand-accent mb-1">100%</div>
                                                    <div className="text-xs text-muted-foreground">Transparencia</div>
                                                </div>
                                            </ParallaxY>

                                            <ParallaxY speed={0.2}>
                                                <div className="bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 backdrop-blur-sm border border-brand-accent/20 rounded-2xl p-4 text-center">
                                                    <div className="text-2xl font-bold text-brand-accent mb-1">24/7</div>
                                                    <div className="text-xs text-muted-foreground">Soporte</div>
                                                </div>
                                            </ParallaxY>

                                            <ParallaxY speed={0.25}>
                                                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 backdrop-blur-sm border border-brand-primary/20 rounded-2xl p-4 text-center mt-6">
                                                    <div className="text-2xl font-bold text-brand-primary mb-1">∞</div>
                                                    <div className="text-xs text-muted-foreground">Posibilidades</div>
                                                </div>
                                            </ParallaxY>
                                        </div>

                                        {/* Floating Badge */}
                                        <ParallaxMulti
                                            effects={{
                                                y: { speed: 0.3 },
                                                rotate: { speed: 1 }
                                            }}
                                            className="absolute -top-3 -right-3"
                                        >
                                            <div className="bg-gradient-to-r from-brand-accent to-brand-primary text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                                                <Sparkles className="w-3 h-3 inline mr-1" />
                                                Garantizado
                                            </div>
                                        </ParallaxMulti>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ParallaxScale>
                </ScrollReveal>

            </div>
        </section>
    )
} 