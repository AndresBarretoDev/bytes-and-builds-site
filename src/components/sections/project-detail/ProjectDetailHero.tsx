import React from 'react';

interface ProjectDetailHeroProps {
    badge?: string;
    title: string;
    subtitle?: string;
}

export const ProjectDetailHero = ({ badge, title, subtitle }: ProjectDetailHeroProps) => {
    return (
        <section className="w-full pt-16 pb-12">
            <div className="flex flex-col gap-4 max-w-3xl">
                {badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 w-fit">
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                        <span className="text-brand-accent text-xs font-bold uppercase tracking-wider">{badge}</span>
                    </div>
                )}
                <h1 className="text-brand-primary dark:text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.03em] font-heading">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-muted-foreground dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mt-2">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

