import React from 'react';
import { ExternalLink, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProjectSidebarProps {
    clientName?: string;
    services?: string[];
    technologies?: string[];
    timeline?: string;
    liveUrl?: string;
    testimonial?: {
        quote: string;
        author: string;
        role: string;
        avatar?: string;
    };
}

export const ProjectSidebar = ({
    clientName,
    services,
    technologies,
    timeline,
    liveUrl,
    testimonial
}: ProjectSidebarProps) => {
    return (
        <aside className="sticky top-28 flex flex-col gap-8">
            {/* Project Details Card */}
            <div className="bg-brand-primary text-white p-6 md:p-8 rounded-2xl shadow-xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-bl-full translate-x-8 -translate-y-8 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6"></div>

                <div className="relative z-10 flex flex-col gap-6">
                    {clientName && (
                        <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Cliente</p>
                            <p className="text-lg font-medium">{clientName}</p>
                        </div>
                    )}

                    {services && (
                        <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Servicios</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {services.map((service) => (
                                    <span key={service} className="px-2 py-1 bg-white/10 rounded text-xs">{service}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {technologies && (
                        <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Tecnologías</p>
                            <div className="flex flex-wrap gap-3 mt-2 text-sm">
                                {technologies.map((tech) => (
                                    <div key={tech} className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {timeline && (
                        <div className="flex flex-col gap-1 pb-2">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Timeline</p>
                            <p className="text-lg font-medium">{timeline}</p>
                        </div>
                    )}

                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                            <Button className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-6 rounded-xl transition-all duration-300 mt-2 shadow-lg shadow-brand-accent/20">
                                <span>Ver Proyecto</span>
                                <ExternalLink size={18} />
                            </Button>
                        </a>
                    )}
                </div>
            </div>

            {/* Testimonial Snippet */}
            {testimonial && (
                <div className="bg-muted/50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <Quote className="text-brand-accent mb-3 size-8" />
                    <p className="italic text-muted-foreground dark:text-gray-400 text-sm leading-relaxed mb-4">
                        "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                        {testimonial.avatar && (
                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                <Image src={testimonial.avatar} alt={testimonial.author} fill className="object-cover" />
                            </div>
                        )}
                        <div>
                            <p className="text-brand-primary dark:text-white text-xs font-bold">{testimonial.author}</p>
                            <p className="text-muted-foreground text-[10px] uppercase">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
};

