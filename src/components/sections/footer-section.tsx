'use client'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
    servicios: [
        { name: 'Desarrollo Web', href: '/#servicios' },
        { name: 'Automatización', href: '/#servicios' },
        { name: 'Consultoría', href: '/#servicios' },
        { name: 'Soporte', href: '/#servicios' }
    ],
    recursos: [
        { name: 'Casos de Éxito', href: '/#proyectos' }
    ]
}

export const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t border-border">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Main Footer Content */}
                <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <Logo size="sm" priority={true} />
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 text-brand-accent" />
                                <a href="mailto:info@bytesandbuilds.com" className="hover:text-foreground transition-colors">
                                    info@bytesandbuilds.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 text-brand-accent" />
                                <a href="tel:+573103269651" className="hover:text-foreground transition-colors">
                                    +57 310 326 9651
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 text-brand-accent" />
                                <span>Bogotá, Colombia</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.instagram.com/bytes_and_builds/"
                                className="flex items-center justify-center w-11 h-11 rounded-lg bg-card border border-border hover:border-brand-accent/40 transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram de Bytes & Builds"
                            >
                                <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-brand-accent transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/bytes-and-builds/"
                                className="flex items-center justify-center w-11 h-11 rounded-lg bg-card border border-border hover:border-brand-accent/40 transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn de Bytes & Builds"
                            >
                                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-brand-accent transition-colors" />
                            </a>

                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground">Servicios</h3>
                        <nav aria-label="Enlaces de servicios" className="space-y-3">
                            {footerLinks.servicios.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Resources Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground">Recursos</h3>
                        <nav aria-label="Enlaces de recursos" className="space-y-3">
                            {footerLinks.recursos.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA in Footer */}
                        <div className="pt-4" hidden>
                            <Button size="sm" asChild className="w-full">
                                <Link href="/#contacto">
                                    Iniciar Proyecto
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {currentYear} Bytes & Builds. Todos los derechos reservados.
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <Link href="/privacidad" className="text-muted-foreground hover:text-foreground transition-colors">
                            Privacidad
                        </Link>
                        <Link href="/terminos" className="text-muted-foreground hover:text-foreground transition-colors">
                            Términos
                        </Link>
                        <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 