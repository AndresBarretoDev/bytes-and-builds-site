'use client';

import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

/**
 * Componente invisible que fuerza a Lenis a posicionarse en el tope
 * cuando la página monta. Resuelve el bug de navegación client-side
 * donde Next.js no restaura el scroll al navegar entre rutas dinámicas.
 */
export const ScrollToTop = () => {
    const lenis = useLenis();

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};
