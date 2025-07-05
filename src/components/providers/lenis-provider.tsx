'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

type LenisProviderProps = {
  children: ReactNode;
};

const LenisProvider = ({ children }: LenisProviderProps) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Suavidad de la interpolación (0-1)
        duration: 1.2, // Duración de la animación en segundos
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing personalizado
        orientation: 'vertical', // Orientación del scroll
        gestureOrientation: 'vertical', // Orientación de los gestos
        smoothWheel: true, // Suavizar eventos de rueda
        syncTouch: false, // Desactivar sincronización táctil (mejor UX en iOS)
        wheelMultiplier: 1, // Multiplicador para eventos de rueda
        touchMultiplier: 1, // Multiplicador para eventos táctiles
        infinite: false, // Scroll infinito (false para web institucional)
        autoResize: true, // Redimensionar automáticamente
        overscroll: true, // Permitir overscroll
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
