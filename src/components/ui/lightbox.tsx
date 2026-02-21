'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';

interface LightboxProps {
    images: string[];
    selectedIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export function Lightbox({
    images,
    selectedIndex,
    isOpen,
    onClose,
    onNext,
    onPrev,
}: LightboxProps) {
    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onNext, onPrev, onClose]);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent 
                className="max-w-[100vw] w-screen h-screen border-none bg-black/90 backdrop-blur-2xl p-0 shadow-none gap-0 outline-none"
                hideCloseButton
            >
                {/* Accessibility labels */}
                <DialogTitle className="sr-only">Galería de imágenes</DialogTitle>
                <DialogDescription className="sr-only">
                    Visualización de imagen {selectedIndex + 1} de {images.length}
                </DialogDescription>

                {/* Main Content */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md border border-white/10"
                        aria-label="Cerrar galería"
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-6 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-sm border border-white/5 group active:scale-95"
                        aria-label="Imagen anterior"
                    >
                        <ChevronLeft size={32} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-6 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-sm border border-white/5 group active:scale-95"
                        aria-label="Imagen siguiente"
                    >
                        <ChevronRight size={32} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium backdrop-blur-md border border-white/10">
                        {selectedIndex + 1} / {images.length}
                    </div>

                    {/* Animated Image Wrapper */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.1, y: -20 }}
                            transition={{ 
                                type: "spring", 
                                damping: 25, 
                                stiffness: 300,
                                opacity: { duration: 0.2 }
                            }}
                            className="w-full h-full p-4 md:p-20 flex items-center justify-center select-none"
                            onClick={onClose}
                        >
                            <img
                                src={images[selectedIndex]}
                                alt={`Imagen del proyecto ${selectedIndex + 1}`}
                                className="max-w-full max-h-full rounded-lg object-contain shadow-2xl pointer-events-none"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    );
}

