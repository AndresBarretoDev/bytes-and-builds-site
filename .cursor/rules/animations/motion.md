---
description: Framer Motion / Motion patterns and best practices for Bytes & Builds
globs: "**/*.{tsx,ts}"
alwaysApply: true
---

# Motion Animation Patterns

Modern animation patterns using Framer Motion / Motion library for premium user experiences.

## 🎯 Core Animation Principles

### **Brand-Consistent Motion**
- Use **Bytes & Builds brand colors** in all animations
- **Respect user preferences** with `useReducedMotion()`
- **Performance first** - prefer transforms over layout changes
- **Purposeful animations** - every animation should have meaning

### **Timing & Easing Standards**
```tsx
// ✅ Brand-consistent timing
const brandTiming = {
  fast: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
  normal: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  slow: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}

// ✅ Scroll-based timing
const scrollTiming = {
  stagger: 0.1,
  duration: 0.6,
  ease: "easeOut"
}
```

## 🎬 Common Animation Patterns

### **1. Scroll Reveal (Enhanced)**
```tsx
// ✅ Current pattern - enhanced for parallax
import { ScrollReveal } from '@/components/ui/scroll-reveal'

<ScrollReveal direction="up" delay={0.2} className="parallax-element">
  <YourComponent />
</ScrollReveal>

// ✅ With parallax integration
const ref = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
})

const y = useTransform(scrollYProgress, [0, 1], [0, -50])
```

### **2. Parallax Scroll Effects**
```tsx
// ✅ Parallax with useScroll + useTransform
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], [0, -100])
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

<motion.div style={{ y, opacity }}>
  {/* Content that moves with scroll */}
</motion.div>

// ✅ Section-based parallax
const ref = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
})

const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
```

### **3. Stagger Animations**
```tsx
// ✅ List items with stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item, i) => (
    <motion.div key={i} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### **4. Text Animations**
```tsx
// ✅ Word-by-word reveal (Free Motion)
const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
}

// Split text into words manually (free alternative)
const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(' ')
  
  return (
    <motion.div variants={textVariants} initial="hidden" animate="visible">
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
```

### **5. Hover Interactions**
```tsx
// ✅ Card hover with brand colors
const cardVariants = {
  rest: { 
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(31 42 68 / 0.1)"
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgb(0 199 183 / 0.2)",
    transition: { duration: 0.2 }
  }
}

<motion.div
  variants={cardVariants}
  initial="rest"
  whileHover="hover"
  className="cursor-pointer"
>
  {/* Card content */}
</motion.div>
```

### **6. Layout Animations**
```tsx
// ✅ Shared layout for smooth transitions
<motion.div layoutId="unique-id" className="card">
  {/* Content that can change */}
</motion.div>

// ✅ Auto-animate layout changes
<motion.div layout className="container">
  {/* Children that may reorder */}
</motion.div>
```

## 🎨 Brand-Specific Animation Patterns

### **Gradient Text Animation (Signature)**
```tsx
// ✅ Brand gradient text with animation
<motion.span
  className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
  style={{
    backgroundSize: "200% 100%",
  }}
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "linear"
  }}
>
  Transformación Digital
</motion.span>
```

### **Brand Color Reveal**
```tsx
// ✅ Progressive color reveal with brand colors
const colorVariants = {
  hidden: { 
    background: "transparent",
    color: "rgb(148 163 184)" // neutral
  },
  visible: { 
    background: "rgb(31 42 68)", // brand-primary
    color: "rgb(254 254 254)", // brand-white
    transition: { duration: 0.5, ease: "easeOut" }
  }
}
```

## 📱 Responsive Animation

### **Mobile-First Considerations**
```tsx
// ✅ Reduce motion on mobile
const isMobile = useMediaQuery("(max-width: 768px)")
const prefersReduced = useReducedMotion()

const animationProps = prefersReduced || isMobile 
  ? { animate: { opacity: 1 } } 
  : { 
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    }

<motion.div {...animationProps}>
  {/* Content */}
</motion.div>
```

## ⚡ Performance Optimization

### **GPU-Accelerated Properties**
```tsx
// ✅ Use transform properties (GPU accelerated)
transform: "translateY(-10px) scale(1.05)"
opacity: 0.8

// ❌ Avoid layout-triggering properties
width: "200px" // Triggers layout
height: "150px" // Triggers layout
top: "20px" // Triggers layout
```

### **Efficient Scroll Handling**
```tsx
// ✅ Use viewport-based triggers
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: true
})

// ✅ Debounce expensive scroll calculations
const { scrollY } = useScroll()
const yRange = useTransform(scrollY, [0, 1000], [0, 100])
```

## 🚨 Accessibility Rules

### **Respect User Preferences**
```tsx
// ✅ Always check for reduced motion
const prefersReduced = useReducedMotion()

const animations = prefersReduced 
  ? { opacity: 1 } 
  : { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5 } 
    }
```

### **Focus Management**
```tsx
// ✅ Maintain focus indicators
const focusVariants = {
  focused: {
    boxShadow: "0 0 0 2px rgb(0 199 183)", // brand-accent
    transition: { duration: 0.1 }
  }
}
```

## 🔧 Common Patterns for Bytes & Builds

### **Service Card Animation**
```tsx
const serviceCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 20px 25px -5px rgb(31 42 68 / 0.15)",
    transition: { duration: 0.2 }
  }
}
```

### **CTA Section Animation**
```tsx
const ctaVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
}
```

---

**Remember**: Every animation should feel purposeful and enhance the user experience, not distract from it. 