import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectDetailNextProps {
    title: string;
    slug: string;
}

export const ProjectDetailNext = ({ title, slug }: ProjectDetailNextProps) => {
    return (
        <section className="w-full bg-muted/20 dark:bg-gray-900 border-t border-border dark:border-gray-800 py-20 px-6 md:px-10 lg:px-40 flex justify-center">
            <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <p className="text-muted-foreground text-sm font-medium mb-1 uppercase tracking-widest">Siguiente Caso de Estudio</p>
                    <h2 className="text-3xl font-bold text-brand-primary dark:text-white font-heading">{title}</h2>
                </div>
                <Link 
                    href={`/proyectos/${slug}`}
                    className="group flex items-center gap-4 text-brand-primary dark:text-white font-bold text-xl no-underline"
                >
                    <span className="group-hover:mr-2 transition-all">Ver Proyecto</span>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                        <ArrowRight size={24} />
                    </div>
                </Link>
            </div>
        </section>
    );
};

