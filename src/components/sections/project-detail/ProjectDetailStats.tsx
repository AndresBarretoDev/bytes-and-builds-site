import React from 'react';

interface ProjectDetailStatsProps {
    stats: { label: string; value: string }[];
}

export const ProjectDetailStats = ({ stats }: ProjectDetailStatsProps) => {
    if (!stats || stats.length === 0) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-border dark:border-gray-800">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                    <span className="text-4xl font-bold text-brand-primary dark:text-white font-heading">{stat.value}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1 font-medium">{stat.label}</span>
                </div>
            ))}
        </div>
    );
};

