import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from '@/components/ui/hero-header'
import { ClientLogosSection } from '@/components/sections'
import { ParallaxY, ParallaxBackground, ParallaxScale, ParallaxMulti } from '@/components/ui/parallax'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export const HeroSection = () => {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">

                    {/* Elemento principal con parallax suave */}
                    <ParallaxY speed={0.3} className="absolute left-0 top-0">
                        <div className="w-[35rem] h-[80rem] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(52,81,141,0.08)_0,rgba(52,81,141,0.02)_50%,transparent_80%)]" />
                    </ParallaxY>

                    {/* Elemento medio con parallax más intenso */}
                    <ParallaxMulti
                        effects={{
                            y: { speed: 0.5, direction: 'down' },
                            x: { speed: 0.2 }
                        }}
                        className="absolute left-0 top-0"
                    >
                        <div className="h-[80rem] w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,199,183,0.06)_0,rgba(0,199,183,0.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    </ParallaxMulti>

                    {/* Elemento sutil con escala */}
                    <ParallaxScale speed={0.1} className="absolute left-0 top-0">
                        <div className="h-[80rem] -translate-y-[350px] w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(58,119,211,0.04)_0,rgba(58,119,211,0.02)_80%,transparent_100%)]" />
                    </ParallaxScale>
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <ParallaxBackground speed={0.4} className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block">
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="background"
                                    className="w-full h-full object-cover opacity-20"
                                    width="2072"
                                    height="1380"
                                />
                            </ParallaxBackground>
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#contacto"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border border-brand-primary/20 p-1 pl-4 shadow-md shadow-brand-primary/5 transition-all duration-300 dark:border-t-brand-accent/20 dark:shadow-brand-secondary/20 hover:border-brand-accent/40">
                                        <span className="text-brand-primary dark:text-brand-accent text-sm font-medium">Transformamos tu negocio con tecnología</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-brand-primary/30 dark:bg-brand-accent/30"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>

                                    <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-heading">
                                        Desarrollo Web y <span className="text-gradient">Automatización</span> para PYMEs
                                    </h1>
                                    <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                                        Sitios web que venden más y sistemas que ahorran tiempo. Especializados en hacer crecer PYMEs con tecnología simple y efectiva.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link href="#contacto">
                                            Comenzar Proyecto
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline">
                                        <Link href="#servicios">
                                            Ver Servicios
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <ParallaxScale speed={0.15} className="relative mx-auto max-w-6xl">
                                    <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                        <ParallaxY speed={0.2}>
                                            <img
                                                className="bg-background aspect-[16/9] relative hidden rounded-2xl dark:block"
                                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="Dashboard de automatización empresarial"
                                                width="2015"
                                                height="1134"
                                            />
                                        </ParallaxY>
                                        <ParallaxY speed={0.25}>
                                            <img
                                                className="z-2 border-border/25 aspect-[16/9] relative rounded-2xl border dark:hidden"
                                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="Dashboard de automatización empresarial"
                                                width="2070"
                                                height="1164"
                                            />
                                        </ParallaxY>
                                    </div>
                                </ParallaxScale>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <ClientLogosSection />
            </main>
        </>
    )
} 