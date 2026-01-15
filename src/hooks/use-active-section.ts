import { useState, useEffect, useRef } from 'react';

/**
 * Hook robusto para detectar la sección activa por proximidad
 * @param sectionIds IDs de las secciones a observar
 */
export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>("");
  
  // Usamos una referencia para rastrear el estado de todas las secciones
  const sectionsStatus = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (window.location.pathname !== '/') return;

    // Margen amplio para detectar múltiples secciones a la vez
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -20% 0px", 
      threshold: [0, 0.1, 0.2], // Múltiples puntos de control
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        sectionsStatus.current[entry.target.id] = entry.isIntersecting;
      });

      // Lógica de decisión: Encontrar la sección más alta de las que están visibles
      const activeIds = Object.keys(sectionsStatus.current).filter(
        (id) => sectionsStatus.current[id]
      );

      if (activeIds.length > 0) {
        // De las que están visibles, buscamos la que tenga su tope más arriba en el viewport
        const mostActive = activeIds.reduce((prevId, currentId) => {
          const prevEl = document.getElementById(prevId);
          const currentEl = document.getElementById(currentId);
          
          if (!prevEl || !currentEl) return currentId;
          
          // Comparamos la distancia al tope de la ventana
          return Math.abs(currentEl.getBoundingClientRect().top) < 
                 Math.abs(prevEl.getBoundingClientRect().top) 
                 ? currentId : prevId;
        });

        setActiveSection(`#${mostActive}`);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id.replace('#', ''));
      if (element) observer.observe(element);
    });

    const handleScrollReset = () => {
      if (window.scrollY < 100) {
        setActiveSection("#home");
      }
    };

    window.addEventListener('scroll', handleScrollReset, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollReset);
    };
  }, [sectionIds]);

  return activeSection;
};
