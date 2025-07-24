"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect, RefObject } from "react";

export const BackgroundBeamsWithCollision = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    const beams = [
        {
            initialX: 10,
            translateX: 10,
            duration: 7,
            repeatDelay: 3,
            delay: 2,
        },
        {
            initialX: 600,
            translateX: 600,
            duration: 3,
            repeatDelay: 3,
            delay: 4,
        },
        {
            initialX: 100,
            translateX: 100,
            duration: 7,
            repeatDelay: 7,
            className: "h-6",
        },
        {
            initialX: 400,
            translateX: 400,
            duration: 5,
            repeatDelay: 14,
            delay: 4,
        },
        {
            initialX: 800,
            translateX: 800,
            duration: 11,
            repeatDelay: 2,
            className: "h-20",
        },
        {
            initialX: 1000,
            translateX: 1000,
            duration: 4,
            repeatDelay: 2,
            className: "h-12",
        },
        {
            initialX: 1200,
            translateX: 1200,
            duration: 6,
            repeatDelay: 4,
            delay: 2,
            className: "h-6",
        },
    ];

    return (
        <div
            ref={parentRef}
            className={cn(
                "h-[99vh] relative flex items-center w-full justify-center overflow-hidden",
                // h-screen if you want bigger
                className
            )}
        >
            {beams.map((beam) => (
                <CollisionMechanism
                    key={beam.initialX + "beam-idx"}
                    beamOptions={beam}
                    containerRef={containerRef}
                    parentRef={parentRef}
                />
            ))}

            {children}
            <div
                ref={containerRef}
                className="absolute bottom-0 w-full inset-x-0 pointer-events-none h-[2px]"
                style={{ background: "transparent" }}
            ></div>
        </div>
    );
};

type CollisionMechanismProps = {
    containerRef: RefObject<HTMLDivElement | null>;
    parentRef: RefObject<HTMLDivElement | null>;
    beamOptions?: {
        initialX?: number;
        translateX?: number;
        initialY?: number;
        translateY?: number;
        rotate?: number;
        className?: string;
        duration?: number;
        delay?: number;
        repeatDelay?: number;
    };
};

const CollisionMechanism = React.forwardRef<HTMLDivElement, CollisionMechanismProps>(
    ({ parentRef, containerRef, beamOptions = {} }, ref) => {
        const beamRef = useRef<HTMLDivElement>(null);
        const [collision, setCollision] = useState<{
            detected: boolean;
            coordinates: { x: number; y: number } | null;
        }>({
            detected: false,
            coordinates: null,
        });
        const [beamKey, setBeamKey] = useState(0);
        const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

        useEffect(() => {
            const checkCollision = () => {
                if (
                    beamRef.current &&
                    containerRef.current &&
                    parentRef.current &&
                    !cycleCollisionDetected
                ) {
                    const beamRect = beamRef.current.getBoundingClientRect();
                    const containerRect = containerRef.current.getBoundingClientRect();
                    const parentRect = parentRef.current.getBoundingClientRect();

                    // Detectar colisión justo en el borde inferior
                    if (beamRect.bottom >= containerRect.top - 2) {
                        const relativeX =
                            beamRect.left - parentRect.left + beamRect.width / 2;
                        // Y exactamente en el fondo
                        const relativeY = parentRef.current.offsetHeight;
                        setCollision({
                            detected: true,
                            coordinates: {
                                x: relativeX,
                                y: relativeY,
                            },
                        });
                        setCycleCollisionDetected(true);
                    }
                }
            };

            const animationInterval = setInterval(checkCollision, 30);

            return () => clearInterval(animationInterval);
        }, [cycleCollisionDetected, containerRef, parentRef]);

        useEffect(() => {
            if (collision.detected && collision.coordinates) {
                setTimeout(() => {
                    setCollision({ detected: false, coordinates: null });
                    setCycleCollisionDetected(false);
                }, 2000);

                setTimeout(() => {
                    setBeamKey((prevKey) => prevKey + 1);
                }, 2000);
            }
        }, [collision]);

        return (
            <>
                <motion.div
                    key={beamKey}
                    ref={beamRef}
                    animate="animate"
                    initial={{
                        translateY: beamOptions.initialY || "-200px",
                        translateX: beamOptions.initialX || "0px",
                        rotate: beamOptions.rotate || 0,
                    }}
                    variants={{
                        animate: {
                            translateY: beamOptions.translateY || "3000px",
                            translateX: beamOptions.translateX || "0px",
                            rotate: beamOptions.rotate || 0,
                        },
                    }}
                    transition={{
                        duration: beamOptions.duration || 8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        delay: beamOptions.delay || 0,
                        repeatDelay: beamOptions.repeatDelay || 0,
                    }}
                    className={cn(
                        "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-[#1f2a44] via-[#34518d] to-transparent shadow-lg shadow-[#1f2a44]/30",
                        beamOptions.className
                    )}
                />
                <AnimatePresence>
                    {collision.detected && collision.coordinates && (
                        <Explosion
                            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
                            className=""
                            style={{
                                left: `${collision.coordinates.x}px`,
                                top: `${collision.coordinates.y}px`,
                                transform: "translate(-50%, 0)",
                                bottom: 0,
                            }}
                        />
                    )}
                </AnimatePresence>
            </>
        );
    }
);

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
    const spans = Array.from({ length: 35 }, (_, index) => ({
        id: index,
        initialX: 0,
        initialY: 0,
        directionX: Math.floor(Math.random() * 120 - 60),
        directionY: Math.floor(Math.random() * -80 - 30),
    }));

    return (
        <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
            {/* Solo partículas/goteras, sin flash ni barra ni anillo */}
            {spans.map((span) => (
                <motion.span
                    key={span.id}
                    initial={{ x: span.initialX, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                        x: span.directionX,
                        y: span.directionY,
                        opacity: 0,
                        scale: 0.2,
                    }}
                    transition={{
                        duration: Math.random() * 2.5 + 1.5,
                        ease: "easeOut",
                        delay: Math.random() * 0.15,
                    }}
                    className="absolute h-5 w-5 rounded-full bg-gradient-to-b from-[#1f2a44] to-[#34518d] opacity-95 shadow-xl shadow-[#1f2a44]/40"
                />
            ))}
        </div>
    );
}