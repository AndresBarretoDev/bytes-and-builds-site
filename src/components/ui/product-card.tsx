"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionValue } from "motion/react";

export interface ProductCardProps {
    product: {
        id: number;
        title: string;
        link: string;
        thumbnail: string;
        subtitle?: string;
        description?: string;
        badge?: string;
        technologies?: string[];
        cta?: string;
    };
    translate: MotionValue<number>;
}

export const ProductCard = ({ product, translate }: ProductCardProps) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.id}
            className="group/product h-96 w-[30rem] relative shrink-0"
        >
            <Image
                src={product.thumbnail}
                height={600}
                width={600}
                className="object-cover object-left-top absolute h-full w-full inset-0"
                alt={product.title}
            />

            {/* Overlay con gradiente */}
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-black/80 pointer-events-none transition-opacity duration-300"></div>

            {/* Badge flotante */}
            {product.badge && (
                <div className="absolute top-4 left-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
                    <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.badge}
                    </span>
                </div>
            )}

            {/* Ícono CTA superior derecho */}
            {product.link && (
                <Link
                    href={product.link}
                    className="absolute top-4 right-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 z-10"
                >
                    <div className="bg-brand-primary hover:bg-brand-secondary text-white p-3 rounded-lg transition-colors duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </Link>
            )}

            {/* Contenido principal */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 text-white">

                {/* Título */}
                <h2 className="text-xl font-bold mb-2">
                    {product.title}
                </h2>

                {/* Descripción */}
                {product.subtitle && (
                    <p className="text-gray-200 text-sm mb-3 line-clamp-2">
                        {product.subtitle}
                    </p>
                )}

                {/* Tecnologías */}
                {product.technologies && product.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {product.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}; 