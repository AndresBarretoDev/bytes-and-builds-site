import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface ProjectDetailTestimonialProps {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
}

export const ProjectDetailTestimonial = ({ quote, author, role, avatar }: ProjectDetailTestimonialProps) => {
    return (
        <div className="bg-muted/30 dark:bg-gray-800 p-8 rounded-2xl border border-border dark:border-gray-700">
            <Quote className="text-brand-accent mb-4 w-10 h-10" />
            <p className="italic text-muted-foreground dark:text-gray-400 text-base leading-relaxed mb-6 font-light">
                "{quote}"
            </p>
            <div className="flex items-center gap-4">
                {avatar ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-accent/20">
                        <Image src={avatar} alt={author} fill className="object-cover" />
                    </div>
                ) : (
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold border-2 border-brand-accent/20">
                        {author.charAt(0)}
                    </div>
                )}
                <div>
                    <p className="text-brand-primary dark:text-white text-sm font-bold">{author}</p>
                    <p className="text-muted-foreground text-[11px] uppercase tracking-wider font-medium">{role}</p>
                </div>
            </div>
        </div>
    );
};

