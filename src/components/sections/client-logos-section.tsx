import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

/**
 * ClientLogosSection Component
 * 
 * Reutilizable section that displays client logos in an infinite scroll animation.
 * 
 * Features:
 * - Infinite horizontal scroll with seamless loop
 * - Hover effects: pause animation and colorize logos
 * - Grayscale logos by default with color on hover
 * - Responsive design with gradient fade edges
 * - Proper typography using font-heading (Jakarta)
 * 
 * To customize:
 * 1. Replace clientLogos array with your actual client logos
 * 2. Update title and description text as needed
 * 3. Modify CTA link href and text
 * 4. Adjust animation speed by changing duration in CSS
 */

const clientLogos = [
    {
        name: "Cliente Ejemplo 1",
        src: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
        height: "32"
    },
    {
        name: "Cliente Ejemplo 2",
        src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
        height: "24"
    },
    {
        name: "Cliente Ejemplo 3",
        src: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg",
        height: "24"
    },
    {
        name: "Cliente Ejemplo 4",
        src: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
        height: "32"
    },
    {
        name: "Cliente Ejemplo 5",
        src: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg",
        height: "24"
    },
    {
        name: "Cliente Ejemplo 6",
        src: "https://cdn.worldvectorlogo.com/logos/hubspot-2.svg",
        height: "32"
    },
    {
        name: "Cliente Ejemplo 7",
        src: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg",
        height: "24"
    },
    {
        name: "Cliente Ejemplo 8",
        src: "https://cdn.worldvectorlogo.com/logos/airtable.svg",
        height: "32"
    }
]

export const ClientLogosSection = () => {
    return (
        <section className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6 leading-tight">
                        Empresas que confían en{' '}
                        <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">
                            nuestro trabajo
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Trabajamos con PYMEs ambiciosas que buscan crecer y profesionalizar sus operaciones digitales
                    </p>
                </div>

                {/* Infinite Scroll Animation */}
                <div className="relative overflow-hidden">
                    {/* Gradient overlays */}
                    <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                    {/* Infinite scroll container */}
                    <div className="flex animate-infinite-scroll hover:pause-animation">
                        {/* First set of logos */}
                        <div className="flex items-center space-x-16 px-8">
                            {clientLogos.map((client, index) => (
                                <div key={`first-${index}`} className="flex-shrink-0">
                                    <Image
                                        className="opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 w-auto"
                                        src={client.src}
                                        alt={client.name}
                                        height={parseInt(client.height)}
                                        width={parseInt(client.height) * 3} // Assuming a 3:1 aspect ratio
                                        style={{ height: `${client.height}px`, width: `${parseInt(client.height) * 3}px` }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Duplicate set for seamless loop */}
                        <div className="flex items-center space-x-16 px-8">
                            {clientLogos.map((client, index) => (
                                <div key={`second-${index}`} className="flex-shrink-0">
                                    <Image
                                        className="opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 w-auto"
                                        src={client.src}
                                        alt={client.name}
                                        height={parseInt(client.height)}
                                        width={parseInt(client.height) * 3} // Assuming a 3:1 aspect ratio
                                        style={{ height: `${client.height}px`, width: 'auto' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to action link */}
                <div className="text-center mt-12">
                    <Link
                        href="#casos-de-exito"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-brand-primary transition-colors duration-300 group">
                        <span>Conoce nuestros casos de éxito</span>
                        <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
} 