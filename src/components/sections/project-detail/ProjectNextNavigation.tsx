import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WPProject } from '@/lib/wordpress';

interface ProjectNextNavigationProps {
    nextProject: WPProject | null;
}

export const ProjectNextNavigation = ({ nextProject }: ProjectNextNavigationProps) => {
    if (!nextProject) return null;

    return (
        <section className="w-full bg-muted/30 dark:bg-gray-900 border-t border-border mt-12 py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <p className="text-muted-foreground text-sm font-medium mb-1 uppercase tracking-wider">Siguiente Proyecto</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-primary dark:text-white font-heading">
                        {nextProject.title}
                    </h2>
                </div>
                <Link 
                    href={nextProject.link}
                    className="group flex items-center gap-4 text-brand-primary dark:text-white font-bold text-xl no-underline"
                >
                    <span className="group-hover:mr-2 transition-all">Ver Proyecto</span>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md group-hover:bg-brand-accent group-hover:text-white transition-all">
                        <ArrowRight size={24} />
                    </div>
                </Link>
            </div>
        </section>
    );
};

