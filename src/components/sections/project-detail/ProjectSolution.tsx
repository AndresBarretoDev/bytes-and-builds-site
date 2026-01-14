import React from 'react';
import { Code2 } from 'lucide-react';

interface ProjectSolutionProps {
    solution?: {
        title: string;
        description: string;
        features: { title: string; desc: string }[];
    };
}

export const ProjectSolution = ({ solution }: ProjectSolutionProps) => {
    if (!solution) return null;

    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-brand-primary dark:text-white flex items-center gap-3 font-heading">
                <Code2 className="text-brand-accent" />
                {solution.title || 'La Solución'}
            </h3>
            <div className="prose prose-lg text-muted-foreground dark:text-gray-300 leading-relaxed font-light max-w-none font-body">
                <div dangerouslySetInnerHTML={{ __html: solution.description }} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 not-prose">
                    {solution.features.map((feature, index) => (
                        <div key={index} className="p-5 rounded-xl bg-background dark:bg-gray-800 border border-border hover:border-brand-accent/30 transition-colors">
                            <h4 className="font-bold text-brand-primary dark:text-white mb-2 font-heading">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground leading-snug">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

