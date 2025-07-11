'use client'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
    servicios: [
        { name: 'Desarrollo Web', href: '#servicios' },
        { name: 'Automatización', href: '#servicios' },
        { name: 'Consultoría', href: '#servicios' },
        { name: 'Soporte', href: '#servicios' }
    ],
    recursos: [
        { name: 'Casos de Éxito', href: '#proyectos' },
        { name: 'Blog', href: '#blog' },
        { name: 'Preguntas Frecuentes', href: '#faq' },
        { name: 'Guías', href: '#recursos' }
    ]
}

export const FooterSection = () => {
    return (
        <footer className="bg-muted/30 border-t border-border">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Main Footer Content */}
                <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <Logo className="w-8 h-8" />
                            <span className="text-xl font-bold text-foreground">Bytes & Builds</span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed max-w-md">
                            Transformamos PYMEs con tecnología simple y efectiva.
                            Sitios web que venden más y sistemas que ahorran tiempo.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 text-brand-accent" />
                                <a href="mailto:hola@bytesbuilds.com" className="hover:text-foreground transition-colors">
                                    hola@bytesbuilds.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 text-brand-accent" />
                                <a href="tel:+5491123456789" className="hover:text-foreground transition-colors">
                                    +54 9 11 2345-6789
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 text-brand-accent" />
                                <span>Buenos Aires, Argentina</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/bytesbuilds"
                                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border hover:border-brand-accent/40 transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4 text-muted-foreground group-hover:text-brand-accent transition-colors" />
                            </a>
                            <a
                                href="https://linkedin.com/company/bytesbuilds"
                                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border hover:border-brand-accent/40 transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-brand-accent transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com/bytesbuilds"
                                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border hover:border-brand-accent/40 transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-brand-accent transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-foreground">Servicios</h4>
                        <nav className="space-y-3">
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
                        <h4 className="text-lg font-semibold text-foreground">Recursos</h4>
                        <nav className="space-y-3">
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
                        <div className="pt-4">
                            <Button size="sm" asChild className="w-full">
                                <Link href="#contacto">
                                    Iniciar Proyecto
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © 2025 Bytes & Builds. Todos los derechos reservados.
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <Link href="#privacidad" className="text-muted-foreground hover:text-foreground transition-colors">
                            Privacidad
                        </Link>
                        <Link href="#terminos" className="text-muted-foreground hover:text-foreground transition-colors">
                            Términos
                        </Link>
                        <Link href="#cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 