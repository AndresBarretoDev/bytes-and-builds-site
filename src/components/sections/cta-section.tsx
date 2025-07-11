'use client'

import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { ParallaxY, ParallaxScale, ParallaxMulti } from '@/components/ui/parallax'
import { ArrowRight, Target, Zap, Sparkles } from 'lucide-react'
import Link from 'next/link'

/**
 * CTASection Component
 * 
 * Componente de llamada a la acción elegante y profesional.
 * Diseñado para convertir visitantes en clientes potenciales.
 */
export const CTASection = () => {
    return (
        <section className="relative py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Enhanced CTA Section */}
                <ScrollReveal direction="up" delay={0.6}>
                    <ParallaxScale speed={0.08} className="text-center mt-24">
                        <div className="relative max-w-4xl mx-auto">
                            <div className="absolute inset-0 rounded-3xl blur-2xl" />

                            <div className="relative bg-card backdrop-blur-sm border border-brand-primary/20 rounded-3xl p-8 md:p-12">
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
                                            <div style={{ backgroundColor: '#00c7b7' }} className="text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
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