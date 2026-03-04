"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "motion/react";
import { ProductCard, ProductCardProps } from "./product-card";
import { ProjectCTACard } from "./project-cta-card";
import { ScrollReveal } from "./scroll-reveal";

// ---------------------------------------------------------------------------
// Constantes basadas en las dimensiones reales de Tailwind (base 16px/rem)
// ---------------------------------------------------------------------------
const CARD_H_DESKTOP = 384; // h-96 = 24rem × 16px
const CARD_H_MOBILE = 288; // h-72 = 18rem × 16px
const ROW_GAP = 40;  // mb-10 = 2.5rem × 16px

// Espacio desde el tope del contenedor hasta el inicio de la primera fila de cards.
// Incluye: pt-20 del contenedor (80px) + py-20/py-12 del Header + h1 + párrafo.
const HEADER_H_DESKTOP = 520; // medido: ~80 container + ~441 header desktop
const HEADER_H_MOBILE = 420; // medido: ~80 container + ~340 header mobile

// translateY final de la animación de entrada (scrollYProgress 0 → 0.2)
const MAX_TRANSLATE_Y = 500;

// Espacio extra debajo de la última fila para que no quede recortada por overflow-hidden
const BOTTOM_BUFFER = 200;

// ---------------------------------------------------------------------------
// Helpers de cálculo
// ---------------------------------------------------------------------------

/** Altura total del contenedor en vh para acomodar todas las filas sin recorte. */
function calcHeightVh(viewportH: number, mobile: boolean, rows: number): number {
    const cardH = mobile ? CARD_H_MOBILE : CARD_H_DESKTOP;
    const headerH = mobile ? HEADER_H_MOBILE : HEADER_H_DESKTOP;
    const totalPx = headerH + MAX_TRANSLATE_Y + rows * (cardH + ROW_GAP) + BOTTOM_BUFFER;
    return Math.ceil((totalPx / viewportH) * 100);
}

/**
 * Posición `top` en píxeles para el CTA en desktop.
 * Lo coloca justo debajo de la última fila de cards (después del translateY máximo).
 */
function calcCtaTopPx(rows: number): number {
    return HEADER_H_DESKTOP + MAX_TRANSLATE_Y + rows * (CARD_H_DESKTOP + ROW_GAP) + 24;
}

// ---------------------------------------------------------------------------
// Componente
// ---------------------------------------------------------------------------

export const HeroParallax = ({
    products,
}: {
    products: ProductCardProps['product'][];
}) => {
    const productsPerRow = 5;
    const numberOfRows = Math.ceil(products.length / productsPerRow);

    // Estado calculado en cliente para evitar depender del viewport en SSR
    const [heightVh, setHeightVh] = React.useState(() => calcHeightVh(900, false, numberOfRows));
    const [isMobile, setIsMobile] = React.useState(false);
    const [ctaTopPx, setCtaTopPx] = React.useState(() => calcCtaTopPx(numberOfRows));

    React.useEffect(() => {
        const update = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setHeightVh(calcHeightVh(window.innerHeight, mobile, numberOfRows));
            setCtaTopPx(calcCtaTopPx(numberOfRows));
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [numberOfRows]);

    // Filas de productos
    const rows: ProductCardProps['product'][][] = [];
    for (let i = 0; i < numberOfRows; i++) {
        rows.push(products.slice(i * productsPerRow, (i + 1) * productsPerRow));
    }

    // Scroll y animaciones
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

    return (
        <>
            {/* ── Contenedor del parallax ─────────────────────────────────── */}
            <div
                ref={ref}
                style={{ height: `${heightVh}vh` }}
                className="pt-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
            >
                <Header />

                <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
                    {rows.map((row, index) => (
                        <motion.div
                            key={index}
                            className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                                } gap-4 md:gap-10 mb-10`}
                        >
                            {row.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    translate={index % 2 === 0 ? translateX : translateXReverse}
                                />
                            ))}
                        </motion.div>
                    ))}
                </motion.div>

                <ScrollReveal
                    direction="up"
                    delay={0.4}
                    className="absolute left-0 right-0 w-11/12 mx-auto"
                    style={isMobile ? { bottom: 0 } : { top: `${ctaTopPx}px` }}
                >
                    <ProjectCTACard />
                </ScrollReveal>
            </div>
        </>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-12 md:py-20 px-4 w-full left-0 top-0">
            <h2 className="text-4xl md:text-7xl font-bold dark:text-white leading-tight">
                Nuestros <br />{" "}
                <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">
                    Proyectos
                </span>
            </h2>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                Transformamos ideas en soluciones digitales escalables. Cada proyecto refleja nuestra
                pasión por la innovación y nuestro compromiso con la excelencia técnica.
            </p>
        </div>
    );
};
