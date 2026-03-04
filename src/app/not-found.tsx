import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { PageSubNav } from '@/components/sections/project-detail/ProjectDetailNav'
import { FooterSection } from '@/components/sections'
import { ParallaxY, ParallaxScale } from '@/components/ui/parallax'

export const metadata: Metadata = {
    title: 'Página no encontrada',
    description: 'La página que buscas no existe o fue movida.',
}

export default function NotFound() {
    return (
        <>
            <PageSubNav
                backHref="/"
                backLabel="Volver al inicio"
                badgeLabel="Error 404"
            />

            <main
                id="main-content"
                className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden bg-gradient-to-br from-background via-brand-primary/5 to-background"
            >
                {/* Blobs decorativos de fondo */}
                <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
                    <ParallaxY speed={0.2} className="absolute top-1/4 left-1/4">
                        <div className="w-96 h-96 bg-gradient-to-r from-brand-primary/6 to-brand-accent/6 rounded-full blur-3xl" />
                    </ParallaxY>
                    <ParallaxScale speed={0.05} className="absolute top-1/2 right-1/4 -translate-y-1/2">
                        <div className="w-80 h-80 bg-gradient-to-r from-brand-accent/6 to-brand-primary/6 rounded-full blur-3xl" />
                    </ParallaxScale>
                </div>

                <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center text-center gap-8">

                    {/* Ilustración */}
                    <ScrollReveal direction="up" delay={0.1} className="w-full max-w-lg">
                        <Image
                            src="/images/page_not_found_image.svg"
                            alt="Ilustración de página no encontrada"
                            width={600}
                            height={400}
                            priority
                            className="w-full h-auto"
                        />
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.2} className="space-y-3">
                        <h1 className="text-2xl md:text-4xl font-bold font-heading text-foreground">
                            Esta página no existe
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
                            Parece que el enlace que seguiste está roto o la página fue movida.
                            No te preocupes, desde aquí puedes volver al inicio.
                        </p>
                    </ScrollReveal>

                    {/* CTAs */}
                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="flex flex-row items-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/">Volver al inicio</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/#proyectos">Ver proyectos</Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </main>

            <FooterSection />
        </>
    )
}
