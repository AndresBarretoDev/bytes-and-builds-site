"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";

interface ProjectDetailImageProps {
    src: string;
    alt: string;
}

export const ProjectDetailImage = ({ src, alt }: ProjectDetailImageProps) => {
    return (
        <section className="w-full pb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-xl shadow-2xl bg-gray-100 dark:bg-gray-800 group"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl"></div>
            </motion.div>
        </section>
    );
};
