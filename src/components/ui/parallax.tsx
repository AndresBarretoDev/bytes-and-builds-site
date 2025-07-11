'use client';

import { motion } from 'motion/react';
import { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';
import {
    useParallax,
    useParallaxX,
    useParallaxScale,
    useParallaxRotate,
    useParallaxMulti,
} from '@/hooks/use-parallax';

interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    direction?: 'up' | 'down';
}

/**
 * Componente Parallax básico - Movimiento vertical
 * 
 * @example
 * <ParallaxY speed={0.5}>
 *   <div>Contenido que se mueve con parallax</div>
 * </ParallaxY>
 */
export const ParallaxY = ({
    children,
    className,
    speed = 0.5,
    direction = 'up',
}: ParallaxProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { y } = useParallax(ref, { speed, direction });

    return (
        <div ref={ref} className={cn('relative', className)}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    );
};

/**
 * Componente Parallax horizontal
 */
export const ParallaxX = ({
    children,
    className,
    speed = 0.5,
    direction = 'up',
}: ParallaxProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { x } = useParallaxX(ref, { speed, direction });

    return (
        <div ref={ref} className={cn('relative', className)}>
            <motion.div style={{ x }}>{children}</motion.div>
        </div>
    );
};

/**
 * Componente Parallax con escala
 */
export const ParallaxScale = ({
    children,
    className,
    speed = 0.2,
}: Omit<ParallaxProps, 'direction'>) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scale } = useParallaxScale(ref, { speed });

    return (
        <div ref={ref} className={cn('relative', className)}>
            <motion.div style={{ scale }}>{children}</motion.div>
        </div>
    );
};

/**
 * Componente Parallax con rotación
 */
export const ParallaxRotate = ({
    children,
    className,
    speed = 10,
}: Omit<ParallaxProps, 'direction'>) => {
    const ref = useRef<HTMLDivElement>(null);
    const { rotate } = useParallaxRotate(ref, { speed });

    return (
        <div ref={ref} className={cn('relative', className)}>
            <motion.div style={{ rotate }}>{children}</motion.div>
        </div>
    );
};

/**
 * Componente Parallax avanzado con múltiples efectos
 */
interface ParallaxMultiProps {
    children: ReactNode;
    className?: string;
    effects: {
        y?: { speed?: number; direction?: 'up' | 'down' };
        x?: { speed?: number; direction?: 'up' | 'down' };
        scale?: { speed?: number };
        rotate?: { speed?: number };
        opacity?: { start?: number; end?: number };
    };
}

export const ParallaxMulti = ({ children, className, effects }: ParallaxMultiProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const transforms = useParallaxMulti(ref, effects);

    return (
        <div ref={ref} className={cn('relative', className)}>
            <motion.div style={transforms}>{children}</motion.div>
        </div>
    );
};

/**
 * Componente para backgrounds con parallax - Perfecto para efectos de fondo
 */
interface ParallaxBackgroundProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    overlay?: boolean;
}

export const ParallaxBackground = ({
    children,
    className,
    speed = 0.3,
    overlay = false,
}: ParallaxBackgroundProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { y } = useParallax(ref, { speed, direction: 'up' });

    return (
        <div ref={ref} className={cn('relative overflow-hidden', className)}>
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                {children}
            </motion.div>
            {overlay && (
                <div className="absolute inset-0 bg-black/20 z-10" />
            )}
        </div>
    );
};

/**
 * Componente Parallax para texto - Optimizado para títulos y texto
 */
interface ParallaxTextProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    blur?: boolean;
}

export const ParallaxText = ({
    children,
    className,
    speed = 0.3,
    blur = false,
}: ParallaxTextProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { y } = useParallax(ref, { speed });

    return (
        <div ref={ref} className={cn('relative', className)}>
            <motion.div
                style={{
                    y,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

/**
 * Componente Parallax para cards/elementos flotantes
 */
interface ParallaxCardProps {
    children: ReactNode;
    className?: string;
    intensity?: 'light' | 'medium' | 'strong';
}

export const ParallaxCard = ({
    children,
    className,
    intensity = 'medium',
}: ParallaxCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const speeds = {
        light: { y: 0.2, scale: 0.05 },
        medium: { y: 0.4, scale: 0.1 },
        strong: { y: 0.6, scale: 0.15 },
    };

    const { y, scale } = useParallaxMulti(ref, {
        y: { speed: speeds[intensity].y },
        scale: { speed: speeds[intensity].scale },
    });

    return (
        <div ref={ref} className={cn('relative', className)}>
            <motion.div style={{ y, scale }}>{children}</motion.div>
        </div>
    );
};

/**
 * Componente Parallax para logos/elementos decorativos
 */
export const ParallaxFloat = ({
    children,
    className,
    speed = 0.3,
}: Omit<ParallaxProps, 'direction'>) => {
    const ref = useRef<HTMLDivElement>(null);
    const { y, rotate } = useParallaxMulti(ref, {
        y: { speed },
        rotate: { speed: speed * 10 },
    });

    return (
        <div ref={ref} className={cn('relative', className)}>
            <motion.div style={{ y, rotate }}>{children}</motion.div>
        </div>
    );
}; 