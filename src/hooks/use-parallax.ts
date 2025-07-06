'use client';

import { useScroll, useTransform, MotionValue } from 'motion/react';
import { RefObject } from 'react';

interface ParallaxOptions {
    speed?: number; // Velocidad del parallax (0.1 = lento, 1 = rápido)
    direction?: 'up' | 'down'; // Dirección del movimiento
    offset?: [number, number]; // Offset de scroll [inicio, fin]
}

/**
 * Hook para crear efectos parallax con Motion y Lenis
 * 
 * @param targetRef - Referencia al elemento target
 * @param options - Configuración del parallax
 * @returns MotionValue para aplicar a transform
 */
export const useParallax = (
    targetRef: RefObject<HTMLElement | HTMLDivElement | null>,
    options: ParallaxOptions = {}
) => {
    const { speed = 0.5, direction = 'up', offset = [0, 1] } = options;

    // Obtenemos el progreso del scroll relativo al elemento
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: [`start end`, `end start`],
    });

    // Calculamos el rango de movimiento
    const range = direction === 'up' ? [-100 * speed, 100 * speed] : [100 * speed, -100 * speed];

    // Transformamos el progreso en valores de desplazamiento
    const y = useTransform(scrollYProgress, offset, range);

    return { y, scrollYProgress };
};

/**
 * Hook para parallax horizontal
 */
export const useParallaxX = (
    targetRef: RefObject<HTMLElement | HTMLDivElement | null>,
    options: ParallaxOptions = {}
) => {
    const { speed = 0.5, direction = 'up', offset = [0, 1] } = options;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: [`start end`, `end start`],
    });

    const range = direction === 'up' ? [-50 * speed, 50 * speed] : [50 * speed, -50 * speed];
    const x = useTransform(scrollYProgress, offset, range);

    return { x, scrollYProgress };
};

/**
 * Hook para parallax de escala
 */
export const useParallaxScale = (
    targetRef: RefObject<HTMLElement | HTMLDivElement | null>,
    options: ParallaxOptions = {}
) => {
    const { speed = 0.2, offset = [0, 1] } = options;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: [`start end`, `end start`],
    });

    const scale = useTransform(scrollYProgress, offset, [1, 1 + speed]);

    return { scale, scrollYProgress };
};

/**
 * Hook para parallax de rotación
 */
export const useParallaxRotate = (
    targetRef: RefObject<HTMLElement | HTMLDivElement | null>,
    options: ParallaxOptions = {}
) => {
    const { speed = 10, offset = [0, 1] } = options;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: [`start end`, `end start`],
    });

    const rotate = useTransform(scrollYProgress, offset, [0, speed]);

    return { rotate, scrollYProgress };
};

/**
 * Hook para efectos de paralaje combinados
 */
export const useParallaxMulti = (
    targetRef: RefObject<HTMLElement | HTMLDivElement | null>,
    effects: {
        y?: { speed?: number; direction?: 'up' | 'down' };
        x?: { speed?: number; direction?: 'up' | 'down' };
        scale?: { speed?: number };
        rotate?: { speed?: number };
        opacity?: { start?: number; end?: number };
    } = {}
) => {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: [`start end`, `end start`],
    });

    // Siempre crear todos los transforms, pero con valores condicionales
    const ySpeed = effects.y?.speed ?? 0;
    const yDirection = effects.y?.direction ?? 'up';
    const yRange = yDirection === 'up' ? [-100 * ySpeed, 100 * ySpeed] : [100 * ySpeed, -100 * ySpeed];
    const y = useTransform(scrollYProgress, [0, 1], effects.y ? yRange : [0, 0]);

    const xSpeed = effects.x?.speed ?? 0;
    const xDirection = effects.x?.direction ?? 'up';
    const xRange = xDirection === 'up' ? [-50 * xSpeed, 50 * xSpeed] : [50 * xSpeed, -50 * xSpeed];
    const x = useTransform(scrollYProgress, [0, 1], effects.x ? xRange : [0, 0]);

    const scaleSpeed = effects.scale?.speed ?? 0;
    const scale = useTransform(scrollYProgress, [0, 1], effects.scale ? [1, 1 + scaleSpeed] : [1, 1]);

    const rotateSpeed = effects.rotate?.speed ?? 0;
    const rotate = useTransform(scrollYProgress, [0, 1], effects.rotate ? [0, rotateSpeed] : [0, 0]);

    const opacityStart = effects.opacity?.start ?? 1;
    const opacityEnd = effects.opacity?.end ?? 1;
    const opacity = useTransform(scrollYProgress, [0, 1], effects.opacity ? [opacityStart, opacityEnd] : [1, 1]);

    return {
        y: effects.y ? y : undefined,
        x: effects.x ? x : undefined,
        scale: effects.scale ? scale : undefined,
        rotate: effects.rotate ? rotate : undefined,
        opacity: effects.opacity ? opacity : undefined,
        scrollYProgress
    };
}; 