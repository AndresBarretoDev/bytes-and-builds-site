import React from 'react';
import Image from 'next/image';

interface ProjectGalleryProps {
    mainImage: string;
    title: string;
}

export const ProjectGallery = ({ mainImage, title }: ProjectGalleryProps) => {
    return (
        <section className="w-full pb-12">
            <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-muted group">
                <Image
                    src={mainImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

