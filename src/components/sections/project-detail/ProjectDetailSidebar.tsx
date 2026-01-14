import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';

interface ProjectDetailSidebarProps {
    client?: string;
    services?: string[];
    technologies?: string[];
    timeline?: string;
    liveUrl?: string;
}

export const ProjectDetailSidebar = ({ client, services, technologies, timeline, liveUrl }: ProjectDetailSidebarProps) => {
    return (
        <div className="flex flex-col gap-8">
            <div className="bg-brand-primary text-white p-6 md:p-8 rounded-2xl shadow-xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-bl-full translate-x-8 -translate-y-8 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6"></div>

                <div className="relative z-10 flex flex-col gap-6">
                    {client && (
                        <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Cliente</p>
                            <p className="text-lg font-medium">{client}</p>
                        </div>
                    )}

                           {services && services.length > 0 && (
                               <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                                   <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Servicios</p>
                                   <div className="flex flex-wrap gap-2 mt-3">
                                       {services.map((service, index) => (
                                           <Tag key={index}>{service}</Tag>
                                       ))}
                                   </div>
                               </div>
                           )}

                    {technologies && technologies.length > 0 && (
                        <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Tech Stack</p>
                            <div className="flex flex-wrap gap-3 mt-2 text-sm">
                                {technologies.map((tech, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                                        {tech}
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
                        <Button asChild className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-6 px-4 rounded-xl transition-all duration-300 mt-2 shadow-lg shadow-brand-accent/20">
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                                Ver proyecto en vivo
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

