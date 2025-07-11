'use client'

import { Timeline } from '@/components/ui/timeline'
import { Button } from '@/components/ui/button'
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
    Zap,
    Clock,
    Users
} from 'lucide-react'
import Link from 'next/link'

/**
 * Timeline Section Component using Aceternity UI Timeline
 * 
 * Alternative presentation of the development process with scroll-based animations.
 * Features animated timeline beam that follows scroll progress.
 */
export function TimelineSection() {
    const data = [
        {
            title: "Consulta inicial",
            content: (
                <div>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl flex items-center justify-center border border-brand-primary/20">
                                    <MessageCircle className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Conversación estratégica
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Entendemos tu negocio, objetivos y desafíos específicos.
                                        Analizamos tu mercado y competencia para diseñar la estrategia digital perfecta.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card/50 border border-border/50 rounded-2xl p-6">
                                <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    <Target className="w-4 h-4 text-brand-accent" />
                                    Objetivos de esta etapa
                                </h5>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Análisis de necesidades del negocio
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Definición de objetivos medibles
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Estudio de competencia
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-brand-primary/5 via-brand-accent/5 to-brand-primary/5 rounded-2xl p-8 border border-brand-primary/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Calendar className="w-5 h-5 text-brand-primary" />
                                    <span className="font-medium text-foreground">Duración típica</span>
                                </div>
                                <p className="text-2xl font-bold text-brand-primary mb-2">1-2 semanas</p>
                                <p className="text-sm text-muted-foreground">
                                    Reuniones presenciales o virtuales para entender completamente tu visión
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h5 className="font-medium text-foreground flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-brand-accent" />
                                    Entregables
                                </h5>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                                        <span className="text-sm text-muted-foreground">Documento de requerimientos</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                                        <span className="text-sm text-muted-foreground">Propuesta técnica personalizada</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                                        <span className="text-sm text-muted-foreground">Cronograma de proyecto</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Planificación estratégica",
            content: (
                <div>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl flex items-center justify-center border border-brand-primary/20">
                                    <Lightbulb className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Arquitectura y diseño
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Diseñamos la arquitectura técnica y la experiencia de usuario.
                                        Creamos wireframes, prototipos y definimos la tecnología más adecuada.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card/50 border border-border/50 rounded-2xl p-6">
                                <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    <Settings className="w-4 h-4 text-brand-accent" />
                                    Proceso de planificación
                                </h5>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Diseño de arquitectura escalable
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Prototipado de interfaz de usuario
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Selección de stack tecnológico
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-brand-accent/5 via-brand-primary/5 to-brand-accent/5 rounded-2xl p-8 border border-brand-accent/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-5 h-5 text-brand-accent" />
                                    <span className="font-medium text-foreground">Duración típica</span>
                                </div>
                                <p className="text-2xl font-bold text-brand-accent mb-2">2-3 semanas</p>
                                <p className="text-sm text-muted-foreground">
                                    Planificación detallada y aprobación de prototipos
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h5 className="font-medium text-foreground flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-brand-accent" />
                                    Resultados clave
                                </h5>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full animate-ping" />
                                        <span className="text-sm text-muted-foreground">Wireframes interactivos</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full animate-ping" />
                                        <span className="text-sm text-muted-foreground">Arquitectura técnica documentada</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full animate-ping" />
                                        <span className="text-sm text-muted-foreground">Plan de desarrollo detallado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Desarrollo y automatización",
            content: (
                <div>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl flex items-center justify-center border border-brand-primary/20">
                                    <Code className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Construcción y optimización
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Desarrollamos tu solución con las mejores prácticas.
                                        Implementamos automatizaciones que optimizan tus procesos de negocio.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card/50 border border-border/50 rounded-2xl p-6">
                                <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-brand-accent" />
                                    Metodología ágil
                                </h5>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Sprints de 2 semanas con entregas
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Testing continuo de calidad
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Feedback e iteraciones constantes
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-brand-primary/5 via-brand-accent/5 to-brand-primary/5 rounded-2xl p-8 border border-brand-primary/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Code className="w-5 h-5 text-brand-primary" />
                                    <span className="font-medium text-foreground">Duración típica</span>
                                </div>
                                <p className="text-2xl font-bold text-brand-primary mb-2">4-8 semanas</p>
                                <p className="text-sm text-muted-foreground">
                                    Desarrollo, testing y optimización completa
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h5 className="font-medium text-foreground flex items-center gap-2">
                                    <Target className="w-4 h-4 text-brand-accent" />
                                    Tecnologías utilizadas
                                </h5>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center gap-2 p-2 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" />
                                        <span className="text-xs text-muted-foreground">React/Next.js</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" />
                                        <span className="text-xs text-muted-foreground">Node.js</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" />
                                        <span className="text-xs text-muted-foreground">TypeScript</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" />
                                        <span className="text-xs text-muted-foreground">AI/Automation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Lanzamiento y soporte",
            content: (
                <div>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl flex items-center justify-center border border-brand-primary/20">
                                    <Rocket className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Despliegue y crecimiento
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Lanzamos tu solución al mercado y te acompañamos en el crecimiento.
                                        Monitoreo continuo, optimizaciones y soporte técnico especializado.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card/50 border border-border/50 rounded-2xl p-6">
                                <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    <Users className="w-4 h-4 text-brand-accent" />
                                    Soporte incluido
                                </h5>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Monitoreo 24/7 de rendimiento
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Actualizaciones de seguridad
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        Capacitación del equipo
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-brand-accent/5 via-brand-primary/5 to-brand-accent/5 rounded-2xl p-8 border border-brand-accent/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Rocket className="w-5 h-5 text-brand-accent" />
                                    <span className="font-medium text-foreground">Tiempo de lanzamiento</span>
                                </div>
                                <p className="text-2xl font-bold text-brand-accent mb-2">1-2 días</p>
                                <p className="text-sm text-muted-foreground">
                                    Despliegue y configuración en ambiente de producción
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h5 className="font-medium text-foreground flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-brand-accent" />
                                    Garantías incluidas
                                </h5>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm text-muted-foreground">3 meses de soporte gratuito</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm text-muted-foreground">Garantía de satisfacción</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm text-muted-foreground">Documentación completa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Final */}
                    <div className="mt-12 bg-gradient-to-br from-brand-primary/5 via-brand-accent/5 to-brand-primary/5 rounded-3xl p-8 md:p-12 border border-brand-primary/10">
                        <div className="text-center space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-3xl leading-tight bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">
                                    ¿Listo para transformar tu negocio?
                                </h3>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Comencemos hoy mismo el proceso que llevará tu empresa al siguiente nivel digital.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="group">
                                    <Link href="/contacto">
                                        Iniciar mi proyecto
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/casos-estudio">
                                        Ver casos de éxito
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return <Timeline data={data} />;
} 