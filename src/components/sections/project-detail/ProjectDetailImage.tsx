import React from 'react';
import Image from 'next/image';

interface ProjectDetailImageProps {
    src: string;
    alt: string;
}

export const ProjectDetailImage = ({ src, alt }: ProjectDetailImageProps) => {
    return (
        <section className="w-full pb-12">
            <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-xl shadow-2xl bg-gray-100 dark:bg-gray-800 group">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

