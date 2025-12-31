'use client';

import { useEffect, useState } from 'react';

/**
 * Hook para detectar la preferencia del usuario sobre movimiento reducido
 * Respetar esta preferencia es un requisito WCAG 2.1 para accesibilidad
 * 
 * @returns true si el usuario prefiere movimiento reducido
 * 
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 * 
 * const animationVariants = prefersReducedMotion
 *   ? { visible: { opacity: 1 } }
 *   : { visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } };
 * ```
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Verificar la preferencia del usuario
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Establecer el valor inicial
    setPrefersReducedMotion(mediaQuery.matches);

    // Escuchar cambios en la preferencia
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Agregar listener (usar addEventListener si está disponible, sino addListener para compatibilidad)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback para navegadores antiguos
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
};

