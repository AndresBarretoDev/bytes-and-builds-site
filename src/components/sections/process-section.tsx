'use client'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { ParallaxY, ParallaxMulti, ParallaxScale } from '@/components/ui/parallax'
import { ProcessCard, type ProcessStep } from '@/components/ui/process-card'
import {
    MessageCircle,
    Lightbulb,
    Code,
    Rocket,
    Settings
} from 'lucide-react'

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
        <section className="relative py-16 md:py-40 overflow-hidden">
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
                        const isEven = index % 2 === 0

                        return (
                            <ScrollReveal
                                key={index}
                                direction={isEven ? "left" : "right"}
                                delay={0.2 + (index * 0.1)}
                            >
                                <ProcessCard
                                    step={step}
                                    index={index}
                                    totalSteps={steps.length}
                                    isEven={isEven}
                                />
                            </ScrollReveal>
                        )
                    })}
                </div>

            </div>
        </section>
    )
} 