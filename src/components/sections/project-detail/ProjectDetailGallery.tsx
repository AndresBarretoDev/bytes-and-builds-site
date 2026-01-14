import React from 'react';
import { ImageGallery } from '@/components/ui/image-gallery';
import { ImageIcon } from 'lucide-react';

interface ProjectDetailGalleryProps {
    images?: string[];
    title?: string;
}

export const ProjectDetailGallery = ({ images, title }: ProjectDetailGalleryProps) => {
    if (!images || images.length === 0) return null;

    return (
        <section className="flex flex-col gap-6 pt-16 pb-10">
            <h3 className="text-2xl font-bold text-brand-primary dark:text-white flex items-center gap-3 font-heading">
                <ImageIcon className="text-brand-accent w-6 h-6" />
                {title || 'Showcase Visual'}
            </h3>
            <div className="w-full">
                <ImageGallery images={images} />
            </div>
        </section>
    );
};

