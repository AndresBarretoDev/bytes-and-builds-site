import { Variants, Easing } from 'motion/react';

// Animation timing configurations
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

export const EASING = {
  ease: [0.25, 0.1, 0.25, 1] as Easing,
  easeIn: [0.4, 0, 1, 1] as Easing,
  easeOut: [0, 0, 0.2, 1] as Easing,
  easeInOut: [0.4, 0, 0.2, 1] as Easing,
  bounce: [0.175, 0.885, 0.32, 1.275] as Easing,
} as const;

// Fade animations
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

// Scale animations
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const scaleInBounce: Variants = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
  exit: { opacity: 0, scale: 0.3 },
};

export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// Slide animations
export const slideInLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
};

export const slideInRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

export const slideInUp: Variants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};

export const slideInDown: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
};

// Stagger animations for containers
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.easeIn,
    },
  },
};

// Loading animations
export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const spin: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Utility function to create custom animations
export const createAnimation = (
  from: Record<string, any>,
  to: Record<string, any>,
  duration: number = ANIMATION_DURATION.normal,
  easing: Easing = EASING.easeOut
): Variants => ({
  initial: from,
  animate: {
    ...to,
    transition: { duration, ease: easing },
  },
  exit: from,
});

// Preset configurations for common use cases
export const PRESET_ANIMATIONS = {
  // Quick fade for text/small elements
  quickFade: {
    ...fadeIn,
    animate: {
      ...fadeIn.animate,
      transition: { duration: ANIMATION_DURATION.fast },
    },
  },

  // Smooth slide for hero sections
  heroSlide: {
    ...fadeInUp,
    animate: {
      ...fadeInUp.animate,
      transition: { duration: ANIMATION_DURATION.slow, ease: EASING.easeOut },
    },
  },

  // Bouncy scale for buttons/CTAs
  buttonScale: {
    ...scaleInBounce,
    animate: {
      ...scaleInBounce.animate,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
      },
    },
  },

  // Gentle hover for cards
  cardHover: {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -4,
      transition: { duration: ANIMATION_DURATION.fast, ease: EASING.easeOut },
    },
  },
} as const;
