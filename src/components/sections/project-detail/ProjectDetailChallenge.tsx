import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface ProjectDetailChallengeProps {
    challenge?: {
        title: string;
        items: string[];
    };
}

export const ProjectDetailChallenge = ({ challenge }: ProjectDetailChallengeProps) => {
    if (!challenge || !challenge.items || challenge.items.length === 0) return null;

    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-brand-primary dark:text-white flex items-center gap-3 font-heading">
                <AlertCircle className="text-brand-accent w-6 h-6" />
                {challenge.title || 'El Desafío'}
            </h3>
            <div className="bg-muted/30 dark:bg-gray-800/30 p-8 rounded-2xl border-l-4 border-brand-accent">
                <ul className="flex flex-col gap-4">
                    {challenge.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="text-brand-accent mt-1 size-4 shrink-0" />
                            <span className="text-foreground/80 dark:text-gray-200 font-body">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
