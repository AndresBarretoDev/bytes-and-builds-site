'use client'

import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { ParallaxY, ParallaxMulti, ParallaxScale } from '@/components/ui/parallax'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { motion } from 'motion/react'

export function ValuePropositionHighlightSection() {
    return (
        <section className="relative overflow-hidden">
            {/* Subtle Background Effects with Parallax */}
            <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-muted/10 to-background" />

                <ParallaxY speed={0.2} className="absolute top-1/4 right-1/4">
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-primary/6 to-brand-accent/6 rounded-full blur-3xl" />
                </ParallaxY>

                <ParallaxMulti
                    effects={{
                        y: { speed: 0.3, direction: 'down' },
                        x: { speed: 0.1, direction: 'up' }
                    }}
                    className="absolute bottom-1/4 left-1/4"
                >
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-accent/6 to-brand-primary/6 rounded-full blur-3xl" />
                </ParallaxMulti>

                <ParallaxScale speed={0.05} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[600px] h-[200px] bg-brand-primary/3 rounded-full blur-3xl" />
                </ParallaxScale>
            </div>

            <HeroHighlight>
                <ScrollReveal direction="up" delay={0.2}>
                    <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                        En Bytes & Builds transformamos ideas en{' '}
                        <Highlight>
                            soluciones digitales escalables
                        </Highlight>{' '}
                        que impulsan el crecimiento de tu negocio.
                    </h1>
                </ScrollReveal>
            </HeroHighlight>
        </section>
    )
} 