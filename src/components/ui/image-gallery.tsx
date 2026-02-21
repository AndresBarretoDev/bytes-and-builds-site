'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Lightbox } from './lightbox';

interface ImageGalleryProps {
    images: string[];
}

interface ColumnItem {
    src: string;
    originalIndex: number;
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const isOpen = selectedIndex !== null;

    if (!images || images.length === 0) return null;

    // Distribute images into 3 columns for masonry-like effect
    const columns: ColumnItem[][] = [[], [], []];
    images.forEach((img, i) => {
        columns[i % 3].push({ src: img, originalIndex: i });
    });

    const handleClose = () => setSelectedIndex(null);
    const handleNext = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex + 1) % images.length);
    };
    const handlePrev = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative flex w-full flex-col items-center justify-center py-6">
            <div className="mx-auto grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {columns.map((colItems, colIndex) => (
                    <div key={colIndex} className="grid gap-6">
                        {colItems.map((item, index) => {
                            const isPortrait = (colIndex + index) % 2 === 0;
                            const ratio = isPortrait ? 3 / 4 : 4 / 3;

                            return (
                                <AnimatedImage
                                    key={`${colIndex}-${index}`}
                                    alt={`Project image ${colIndex}-${index}`}
                                    src={item.src}
                                    ratio={ratio}
                                    onClick={() => setSelectedIndex(item.originalIndex)}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>

            <Lightbox
                images={images}
                selectedIndex={selectedIndex ?? 0}
                isOpen={isOpen}
                onClose={handleClose}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </div>
    );
}

interface AnimatedImageProps {
    alt: string;
    src: string;
    className?: string;
    placeholder?: string;
    ratio: number;
    onClick?: () => void;
}

function AnimatedImage({ alt, src, ratio, placeholder, onClick }: AnimatedImageProps) {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [isLoading, setIsLoading] = React.useState(true);
    const [imgSrc, setImgSrc] = React.useState(src);
    const imgRef = React.useRef<HTMLImageElement>(null);

    // Manejar imágenes que ya están en caché para evitar que se queden en gris
    React.useEffect(() => {
        if (imgRef.current?.complete) {
            setIsLoading(false);
        }
    }, [imgSrc]);

    const handleError = () => {
        if (placeholder) {
            setImgSrc(placeholder);
        }
    };

    return (
        <AspectRatio
            ref={ref}
            ratio={ratio}
            className="bg-muted relative size-full rounded-2xl border overflow-hidden shadow-sm cursor-zoom-in group"
            onClick={onClick}
        >
            <img
                ref={imgRef}
                alt={alt}
                src={imgSrc}
                className={cn(
                    'size-full rounded-2xl object-cover opacity-0 transition-all duration-700 ease-out scale-105 group-hover:scale-110',
                    {
                        'opacity-100 scale-100': isInView && !isLoading,
                    },
                )}
                onLoad={() => setIsLoading(false)}
                loading="lazy"
                onError={handleError}
            />
            {/* Hover overlay más sutil */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
        </AspectRatio>
    );
}
