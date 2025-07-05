'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  scaleInBounce,
  hoverScale,
  staggerContainer,
  staggerItem,
  pageTransition,
  PRESET_ANIMATIONS,
  ANIMATION_DURATION,
} from '@/lib/animations';

interface AnimatedProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: keyof typeof ANIMATION_DURATION;
  onClick?: () => void;
}

// Base animated container
export const Animated = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
  onClick,
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeIn}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

// Fade animations
export const FadeIn = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeIn}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInUp = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeInUp}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInDown = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeInDown}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInLeft = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeInLeft}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInRight = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeInRight}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Scale animations
export const ScaleIn = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={scaleIn}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleInBounce = ({
  children,
  className,
  delay = 0,
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={scaleInBounce}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Slide animations
export const SlideInUp = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={slideInUp}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInDown = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={slideInDown}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={slideInLeft}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={slideInRight}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Interactive animations
export const HoverScale = ({ children, className, onClick }: AnimatedProps) => (
  <motion.div
    variants={hoverScale}
    whileHover="hover"
    whileTap="tap"
    className={cn('cursor-pointer', className)}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export const CardHover = ({ children, className, onClick }: AnimatedProps) => (
  <motion.div
    variants={PRESET_ANIMATIONS.cardHover}
    whileHover="hover"
    className={cn('cursor-pointer', className)}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

// Stagger animations
export const StaggerContainer = ({
  children,
  className,
  delay = 0,
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={staggerContainer}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
  delay = 0,
  duration = 'normal',
}: AnimatedProps) => (
  <motion.div
    variants={staggerItem}
    transition={{
      duration: ANIMATION_DURATION[duration],
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Page transition wrapper
export const PageTransition = ({ children, className }: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
    className={className}
  >
    {children}
  </motion.div>
);

// Preset animations for common use cases
export const QuickFade = ({
  children,
  className,
  delay = 0,
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={PRESET_ANIMATIONS.quickFade}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HeroSlide = ({
  children,
  className,
  delay = 0,
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={PRESET_ANIMATIONS.heroSlide}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ButtonScale = ({
  children,
  className,
  onClick,
}: AnimatedProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={PRESET_ANIMATIONS.buttonScale}
    whileHover="hover"
    whileTap="tap"
    className={cn('cursor-pointer', className)}
    onClick={onClick}
  >
    {children}
  </motion.div>
);
