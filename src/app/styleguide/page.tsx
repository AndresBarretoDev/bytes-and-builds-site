'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    Download,
    Send,
    ArrowRight,
    Loader2,
    Play,
    Mail,
    Phone,
    ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { ThemeToggle } from '@/components/theme-toggle'

export default function StyleGuide() {
    const [isLoading, setIsLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    const handleLoadingDemo = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 2000)
    }

    const toggleDisabled = () => setIsDisabled(!isDisabled)

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="container mx-auto flex items-center justify-between px-4 py-6 border-b">
                <Logo size="lg" priority />
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/">← Volver al Home</Link>
                    </Button>
                    <ThemeToggle />
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12 space-y-16">

                {/* Introduction */}
                <section className="text-center space-y-6">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-brand-primary via-brand-blue to-brand-accent bg-clip-text text-transparent">
                        Style Guide
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Sistema de diseño y componentes de Bytes & Builds
                    </p>
                </section>

                {/* Button System */}
                <section className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Sistema de Botones Premium</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Botones con animaciones sutiles, diseñados para maximizar conversiones y mantener consistencia visual.
                            Bordes redondeados, sombras sutiles y micro-interactions que elevan la experiencia del usuario.
                        </p>
                    </div>

                    {/* Primary Buttons */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-brand-primary mb-2">Botones Primarios</h3>
                            <p className="text-muted-foreground mb-6">
                                Para acciones principales como "Comenzar Proyecto" o "Contactar"
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button size="lg" className="w-full">
                                        Comenzar Proyecto
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Default Large</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button className="w-full">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Contactar
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Con Ícono</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button
                                        className="w-full"
                                        onClick={handleLoadingDemo}
                                        loading={isLoading}
                                        loadingText="Enviando..."
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Enviar
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Loading State</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button size="xl" className="w-full">
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                        Extra Large
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">XL Size</p>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Buttons */}
                        <div>
                            <h3 className="text-2xl font-semibold text-brand-secondary mb-2">Botones Secundarios</h3>
                            <p className="text-muted-foreground mb-6">
                                Para acciones de soporte y navegación secundaria
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="secondary" size="lg" className="w-full">
                                        Saber Más
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Secondary Large</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="secondary" className="w-full">
                                        <Download className="w-4 h-4 mr-2" />
                                        Descargar
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Con Ícono</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button
                                        variant="secondary"
                                        className="w-full"
                                        disabled={isDisabled}
                                        onClick={toggleDisabled}
                                    >
                                        {isDisabled ? 'Deshabilitado' : 'Deshabilitar'}
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Toggle Disabled</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="secondary" size="sm" className="w-full">
                                        <Play className="w-4 h-4 mr-2" />
                                        Demo
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Small Secondary</p>
                                </div>
                            </div>
                        </div>

                        {/* Outline Buttons */}
                        <div>
                            <h3 className="text-2xl font-semibold text-brand-blue mb-2">Botones Outline</h3>
                            <p className="text-muted-foreground mb-6">
                                Para acompañamiento y acciones alternativas
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="outline" size="lg" className="w-full">
                                        Ver Servicios
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Outline Large</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="outline" className="w-full">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Llamar
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Con Ícono</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="outline" className="w-full">
                                        Cotizar
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Ícono Derecha</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="outline" size="sm" className="w-full">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Abrir
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Small Outline</p>
                                </div>
                            </div>
                        </div>

                        {/* New Variants: Accent & Blue */}
                        <div>
                            <h3 className="text-2xl font-semibold text-brand-accent mb-2">Variantes Especiales</h3>
                            <p className="text-muted-foreground mb-6">
                                Accent y Blue para casos especiales
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="accent" size="lg" className="w-full">
                                        Destacado
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Accent Variant</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="blue" className="w-full">
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Blue Variant
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Blue Variant</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="ghost" className="w-full">
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Ghost
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Ghost Style</p>
                                </div>

                                <div className="space-y-3 p-6 rounded-lg border bg-card/50">
                                    <Button variant="link" className="w-full">
                                        Link Style
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">Link Variant</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Demo */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-2">Demo de Formulario de Contacto</h3>
                            <p className="text-muted-foreground mb-6">
                                Ejemplo de uso en contexto real
                            </p>

                            <div className="bg-muted/30 rounded-2xl p-8 max-w-md mx-auto space-y-6">
                                <div className="text-center space-y-2">
                                    <h4 className="text-xl font-semibold">¿Listo para empezar?</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Elige cómo quieres contactarnos
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            <Phone className="w-4 h-4 mr-2" />
                                            Llamar
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            <Mail className="w-4 h-4 mr-2" />
                                            Email
                                        </Button>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full"
                                        onClick={handleLoadingDemo}
                                        loading={isLoading}
                                        loadingText="Enviando mensaje..."
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Comenzar Proyecto
                                    </Button>

                                    <Button variant="ghost" className="w-full">
                                        ¿Prefieres una videollamada?
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography System */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Sistema Tipográfico</h2>
                        <p className="text-lg text-muted-foreground">
                            Plus Jakarta Sans para títulos, Inter para cuerpo
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-brand-primary">Títulos (Plus Jakarta Sans)</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-6xl font-bold">Display</p>
                                    <p className="text-xs text-muted-foreground">text-6xl font-bold</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold">Heading 1</p>
                                    <p className="text-xs text-muted-foreground">text-4xl font-bold</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-semibold">Heading 2</p>
                                    <p className="text-xs text-muted-foreground">text-3xl font-semibold</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-semibold">Heading 3</p>
                                    <p className="text-xs text-muted-foreground">text-2xl font-semibold</p>
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Heading 4</p>
                                    <p className="text-xs text-muted-foreground">text-xl font-medium</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-brand-accent">Cuerpo (Inter)</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-lg">Body Large - Para subtítulos importantes y texto destacado que necesita mayor presencia visual.</p>
                                    <p className="text-xs text-muted-foreground">text-lg</p>
                                </div>
                                <div>
                                    <p className="text-base">Body Regular - Este es el texto principal que se usa para párrafos y contenido general del sitio web.</p>
                                    <p className="text-xs text-muted-foreground">text-base</p>
                                </div>
                                <div>
                                    <p className="text-sm">Body Small - Para información adicional, etiquetas y texto secundario que complementa el contenido principal.</p>
                                    <p className="text-xs text-muted-foreground">text-sm</p>
                                </div>
                                <div>
                                    <p className="text-xs">Caption - Para metadatos, créditos, disclaimers y texto muy pequeño.</p>
                                    <p className="text-xs text-muted-foreground">text-xs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Color System */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Paleta de Colores Bytes & Builds</h2>
                        <p className="text-lg text-muted-foreground">
                            Colores corporativos y variaciones para diferentes contextos
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        <div className="space-y-4">
                            <div className="h-24 bg-brand-primary rounded-lg shadow-lg"></div>
                            <div className="text-center">
                                <p className="font-semibold">Primary</p>
                                <p className="text-sm text-muted-foreground">#34518d</p>
                                <p className="text-xs text-muted-foreground">Botones principales</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-24 bg-brand-secondary rounded-lg shadow-lg"></div>
                            <div className="text-center">
                                <p className="font-semibold">Secondary</p>
                                <p className="text-sm text-muted-foreground">#1f2a44</p>
                                <p className="text-xs text-muted-foreground">Botones secundarios</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-24 bg-brand-accent rounded-lg shadow-lg"></div>
                            <div className="text-center">
                                <p className="font-semibold">Accent</p>
                                <p className="text-sm text-muted-foreground">#00c7b7</p>
                                <p className="text-xs text-muted-foreground">Acentos y highlights</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-24 bg-brand-blue rounded-lg shadow-lg"></div>
                            <div className="text-center">
                                <p className="font-semibold">Blue</p>
                                <p className="text-sm text-muted-foreground">#3a77d3</p>
                                <p className="text-xs text-muted-foreground">Links y CTA especiales</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-24 bg-brand-white border-2 border-muted rounded-lg shadow-lg"></div>
                            <div className="text-center">
                                <p className="font-semibold">White</p>
                                <p className="text-sm text-muted-foreground">#fefefe</p>
                                <p className="text-xs text-muted-foreground">Fondos y textos</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Animation Features */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Animaciones y Micro-Interactions</h2>
                        <p className="text-lg text-muted-foreground">
                            Los botones incluyen animaciones sutiles al hacer hover y click
                        </p>
                    </div>

                    <div className="bg-muted/20 rounded-2xl p-8 space-y-6">
                        <h3 className="text-xl font-semibold text-center">Características Premium de los Botones</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto">
                                    <ArrowRight className="w-6 h-6 text-brand-primary" />
                                </div>
                                <h4 className="font-semibold">Hover Scale</h4>
                                <p className="text-sm text-muted-foreground">Escala sutil al hacer hover (1.02x)</p>
                            </div>

                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mx-auto">
                                    <Send className="w-6 h-6 text-brand-accent" />
                                </div>
                                <h4 className="font-semibold">Lift Effect</h4>
                                <p className="text-sm text-muted-foreground">Elevación de 2px con sombra mejorada</p>
                            </div>

                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto">
                                    <Play className="w-6 h-6 text-brand-blue" />
                                </div>
                                <h4 className="font-semibold">Active Press</h4>
                                <p className="text-sm text-muted-foreground">Compresión al hacer click (0.98x)</p>
                            </div>

                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                                    <Loader2 className="w-6 h-6 text-brand-secondary" />
                                </div>
                                <h4 className="font-semibold">Loading States</h4>
                                <p className="text-sm text-muted-foreground">Spinner animado con texto personalizable</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t bg-card/30 mt-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <Logo size="sm" />
                        <div className="text-center text-sm text-muted-foreground md:text-right">
                            <p>© 2024 Bytes & Builds. Todos los derechos reservados.</p>
                            <p className="mt-1">
                                Style Guide - Sistema de Diseño Premium
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
} 