'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'
import { useActiveSection } from '@/hooks/use-active-section'

const menuItems = [
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Contacto', href: '#contacto' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    // Observamos las secciones del menú + el home para limpiar el estado al subir
    const activeSection = useActiveSection([...menuItems.map(item => item.href), '#home'])

    // Optimización: Uso de IntersectionObserver para el estado Scrolled (Sentinel)
    React.useEffect(() => {
        const sentinel = document.createElement('div')
        sentinel.style.position = 'absolute'
        sentinel.style.top = '50px'
        sentinel.style.width = '1px'
        sentinel.style.height = '1px'
        sentinel.style.pointerEvents = 'none'
        document.body.prepend(sentinel)

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolled(!entry.isIntersecting)
            },
            { threshold: 0 }
        )

        observer.observe(sentinel)
        return () => {
            observer.disconnect()
            sentinel.remove()
        }
    }, [])

    const handleMenuToggle = () => {
        setMenuState(!menuState)
    }

    return (
        <header>
            <nav
                aria-label="Navegación principal"
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-2 group">
                <div className={cn(
                    'mx-auto mt-2 max-w-6xl px-6 transition-all duration-500 lg:px-12',
                    isScrolled && 'bg-background/60 max-w-4xl rounded-2xl border border-border/40 backdrop-blur-xl lg:px-5 shadow-sm'
                )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo size="sm" priority={true} />
                            </Link>

                            <button
                                onClick={handleMenuToggle}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        {/* Menú Desktop con Indicador Deslizante */}
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm relative">
                                {menuItems.map((item) => {
                                    const isActive = activeSection === item.href;
                                    return (
                                        <li key={item.name} className="relative py-1">
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "transition-all duration-300 block",
                                                    isActive
                                                        ? "text-foreground font-bold"
                                                        : "text-foreground/80 font-medium hover:text-brand-primary"
                                                )}
                                            >
                                                <span>{item.name}</span>
                                            </Link>

                                            {/* Línea Indicadora Deslizante */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-indicator"
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 380,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setMenuState(false)}
                                                className={cn(
                                                    "transition-all duration-300 block",
                                                    activeSection === item.href
                                                        ? "text-brand-primary font-bold"
                                                        : "text-foreground/80 font-medium"
                                                )}
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className="lg:inline-flex">
                                    <Link href="#contacto">
                                        <span>Comenzar Proyecto</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
