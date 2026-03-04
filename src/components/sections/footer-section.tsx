'use client'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { Mail, MapPin, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/components/ui/whatsapp-button'

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
                                {/* WhatsApp icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-brand-accent" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors"
                                >
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
                    </div>
                </div>
            </div>
        </footer>
    )
} 