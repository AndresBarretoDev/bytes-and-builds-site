"use client";

import React from 'react';
import { motion } from "motion/react";

interface ProjectDetailHeroProps {
    badge?: string;
    title: string;
    subtitle?: string;
}

export const ProjectDetailHero = ({ badge, title, subtitle }: ProjectDetailHeroProps) => {
    // Dividir el título por el separador | para aplicar el degradado
    const [mainTitle, gradientTitle] = title.split('|').map(t => t.trim());

    return (
        <section className="w-full pt-16 pb-12">
            <div className="flex flex-col gap-4 max-w-4xl">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 w-fit"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                        <span className="text-brand-accent text-xs font-bold uppercase tracking-wider">{badge}</span>
                    </motion.div>
                )}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-brand-primary dark:text-white text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.1] tracking-[-0.03em] font-heading"
                >
                    {mainTitle}
                    {gradientTitle && (
                        <span className="block bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent pb-2">
                            {gradientTitle}
                        </span>
                    )}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted-foreground dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mt-4"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
};
