import React from 'react';
import { FileText } from 'lucide-react';

interface ProjectDetailOverviewProps {
    text: string;
}

export const ProjectDetailOverview = ({ text }: ProjectDetailOverviewProps) => {
    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-brand-primary dark:text-white flex items-center gap-3 font-heading">
                <FileText className="text-brand-accent w-6 h-6" />
                Resumen del proyecto
            </h3>
            <div className="prose prose-lg text-muted-foreground dark:text-gray-300 leading-relaxed font-light max-w-none">
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    );
};

