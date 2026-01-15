'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    direction?: 'up' | 'down' | 'left' | 'right'
    delay?: number
    duration?: number
    distance?: number
    className?: string
    style?: React.CSSProperties
}

export const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    distance = 60,
    className,
    style
}: ScrollRevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        amount: 0.2,
        margin: "0px 0px -100px 0px"
    })

    const directionVariants = {
        up: { y: distance, opacity: 0 },
        down: { y: -distance, opacity: 0 },
        left: { x: distance, opacity: 0 },
        right: { x: -distance, opacity: 0 }
    }

    return (
        <motion.div
            ref={ref}
            initial={directionVariants[direction]}
            animate={isInView ? {
                x: 0,
                y: 0,
                opacity: 1,
                filter: 'blur(0px)'
            } : {
                ...directionVariants[direction],
                filter: 'blur(8px)'
            }}
            transition={{
                type: 'spring',
                damping: 25,
                stiffness: 120,
                duration,
                delay
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

interface ScrollStaggerProps {
    children: ReactNode
    staggerDelay?: number
    className?: string
}

export const ScrollStagger = ({
    children,
    staggerDelay = 0.1,
    className
}: ScrollStaggerProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        amount: 0.2,
        margin: "0px 0px -50px 0px"
    })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.2
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const ScrollStaggerItem = ({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) => {
    return (
        <motion.div
            variants={{
                hidden: {
                    y: 40,
                    opacity: 0,
                    filter: 'blur(8px)'
                },
                visible: {
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                    transition: {
                        type: 'spring',
                        damping: 25,
                        stiffness: 120
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
} 