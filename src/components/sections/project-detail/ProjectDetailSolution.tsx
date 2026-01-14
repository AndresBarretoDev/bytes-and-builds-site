import React from 'react';
import { Code2 } from 'lucide-react';

interface ProjectDetailSolutionProps {
    text: string;
    features?: { title: string; desc: string }[];
}

export const ProjectDetailSolution = ({ text, features }: ProjectDetailSolutionProps) => {
    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-brand-primary dark:text-white flex items-center gap-3 font-heading">
                <Code2 className="text-brand-accent w-6 h-6" />
                La Solución
            </h3>
            <div className="prose prose-lg text-muted-foreground dark:text-gray-300 leading-relaxed font-light max-w-none">
                <div dangerouslySetInnerHTML={{ __html: text }} />
                
                {features && features.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 not-prose">
                        {features.map((feature, index) => (
                            <div key={index} className="p-5 rounded-xl bg-background dark:bg-gray-800 border border-border dark:border-gray-700 shadow-sm">
                                <h4 className="font-bold text-brand-primary dark:text-white mb-2 font-heading">{feature.title}</h4>
                                <p className="text-sm text-muted-foreground dark:text-gray-400 leading-snug">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

