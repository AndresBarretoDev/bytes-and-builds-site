import React from 'react';

interface ProjectHeroProps {
    title: string;
    subtitle: string;
    badge?: string;
}

export const ProjectHero = ({ title, subtitle, badge }: ProjectHeroProps) => {
    return (
        <section className="w-full pt-16 pb-12">
            <div className="flex flex-col gap-6 max-w-3xl">
                {badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 w-fit">
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                        <span className="text-brand-accent text-xs font-bold uppercase tracking-wider">{badge}</span>
                    </div>
                )}
                <h1 className="text-brand-primary dark:text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.03em] font-heading">
                    {title}
                </h1>
                <p className="text-muted-foreground dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mt-2 font-body">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

