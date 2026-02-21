import React from 'react';

interface ProjectStatsProps {
    stats?: { label: string; value: string }[];
}

export const ProjectStats = ({ stats }: ProjectStatsProps) => {
    if (!stats || stats.length === 0) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-border">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-bold text-brand-primary dark:text-white font-heading">
                        {stat.value}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest mt-2 font-medium">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

