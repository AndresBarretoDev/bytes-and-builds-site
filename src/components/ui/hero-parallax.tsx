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



export const HeroParallax = ({
    products,
}: {
    products: ProductCardProps['product'][];
}) => {
    const productsPerRow = 5;
    const numberOfRows = Math.ceil(products.length / productsPerRow);

    // Cálculo dinámico equilibrado: ni tan largo como antes (333vh) ni tan corto como recién (240vh)
    const baseHeight = 220; // vh base para el efecto (Punto medio entre 180 y 250)
    const baseRows = 3;
    const heightInVh = Math.max(200, Math.min(350, baseHeight * (numberOfRows / baseRows)));

    const rows = [];
    for (let i = 0; i < numberOfRows; i++) {
        rows.push(products.slice(i * productsPerRow, (i + 1) * productsPerRow));
    }

    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <>

            <div
                ref={ref}
                style={{ height: `${heightInVh}vh` }}
                className="pt-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
            >
                <Header />
                <motion.div
                    style={{
                        rotateX,
                        rotateZ,
                        translateY,
                        opacity,
                    }}
                    className=""
                >
                    {rows.map((row, index) => (
                        <motion.div
                            key={index}
                            className={`flex ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : 'flex-row'} space-x-20 mb-20`}
                        >
                            {row.map((product) => (
                                <ProductCard
                                    product={product}
                                    translate={index % 2 === 0 ? translateX : translateXReverse}
                                    key={product.id}
                                />
                            ))}
                        </motion.div>
                    ))}
                </motion.div>
                {/* CTA to See More */}
                <ScrollReveal
                    direction="up"
                    delay={0.4}
                    className="absolute left-0 right-0 mx-auto"
                    style={{ bottom: `calc(${heightInVh}vh - 93%)` }}
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
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                Nuestros <br /> <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">Proyectos</span>
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                Transformamos ideas en soluciones digitales escalables. Cada proyecto refleja nuestra
                pasión por la innovación y nuestro compromiso con la excelencia técnica.
            </p>
        </div>
    );
};

