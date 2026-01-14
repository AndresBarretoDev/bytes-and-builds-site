import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const ProjectDetailNav = () => {
    return (
        <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto px-6 md:px-10 lg:px-40 h-16 flex items-center justify-between">
                <Link 
                    href="/#proyectos" 
                    className="flex items-center gap-2 text-brand-primary hover:text-brand-accent transition-colors group"
                >
                    <div className="p-1 rounded-full group-hover:bg-brand-accent/10 transition-colors">
                        <ChevronLeft size={20} />
                    </div>
                    <span className="font-medium text-sm">Volver a Proyectos</span>
                </Link>
                
                <div className="hidden md:flex items-center gap-3">
                    <div className="size-2 rounded-full bg-brand-accent animate-pulse" />
                    <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                        Bytes & Builds Case Study
                    </span>
                </div>
            </div>
        </nav>
    );
};
