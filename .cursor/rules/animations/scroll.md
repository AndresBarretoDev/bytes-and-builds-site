---
description: Lenis smooth scroll and scroll interaction patterns
globs: "**/*.{tsx,ts}"
alwaysApply: true
---

# Scroll Interactions & Lenis

Advanced scroll-based animations and smooth scrolling with Lenis integration.

## 🌊 Lenis Smooth Scroll

### **Current Setup (Already Configured)**
```tsx
// ✅ ReactLenis Provider is already configured
import { ReactLenis } from 'lenis/react'

// In layout.tsx - already implemented
<ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
  {children}
</ReactLenis>
```

### **Lenis Integration with Motion**
```tsx
// ✅ Using Lenis with Framer Motion
import { useLenis } from 'lenis/react'

const MyComponent = () => {
  const lenis = useLenis(({ scroll, velocity, direction, progress }) => {
    // Use scroll data for custom animations
  })

  // Programmatic scrolling
  const scrollToSection = () => {
    lenis?.scrollTo('#section', { 
      offset: -100,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  }
}
```

## 📏 Scroll-Triggered Animations

### **1. Parallax Effects (Core Pattern)**
```tsx
// ✅ Element-based parallax
const ref = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
})

// Subtle movement (recommended)
const y = useTransform(scrollYProgress, [0, 1], [0, -50])
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

<motion.div ref={ref} style={{ y, opacity }}>
  {/* Background elements, images, etc. */}
</motion.div>
```

### **2. Section Reveals with Momentum**
```tsx
// ✅ Progressive section reveal
const { ref, inView } = useInView({
  threshold: 0.2,
  triggerOnce: true
})

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1 
    }
  }
}

<motion.section
  ref={ref}
  variants={sectionVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>
  {/* Section content */}
</motion.section>
```

### **3. Horizontal Scroll Sections**
```tsx
// ✅ Horizontal scroll gallery/showcase
const horizontalRef = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: horizontalRef,
  offset: ["start end", "end start"]
})

const x = useTransform(
  scrollYProgress, 
  [0, 1], 
  ["0%", "-75%"]  // Adjust based on content width
)

<div ref={horizontalRef} className="h-screen overflow-hidden">
  <motion.div 
    style={{ x }}
    className="flex w-[400%] h-full"  // 4x width for 4 items
  >
    {projects.map((project, i) => (
      <div key={i} className="w-1/4 h-full flex-shrink-0">
        {/* Project showcase */}
      </div>
    ))}
  </motion.div>
</div>
```

### **4. Scroll-Driven Counters/Progress**
```tsx
// ✅ Animated counters based on scroll
const { ref, inView } = useInView({ threshold: 0.5 })
const count = useMotionValue(0)
const rounded = useTransform(count, latest => Math.round(latest))

useEffect(() => {
  if (inView) {
    const controls = animate(count, 100, { 
      duration: 2,
      ease: "easeOut"
    })
    return controls.stop
  }
}, [inView])

<motion.div ref={ref}>
  <motion.span>{rounded}</motion.span>%
</motion.div>
```

## 🎭 Advanced Scroll Patterns

### **5. Sticky Scroll Reveals**
```tsx
// ✅ Content reveals while section is sticky
const containerRef = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end start"]
})

const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0, 1])
const opacity2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
const opacity3 = useTransform(scrollYProgress, [0.6, 1], [0, 1])

<div ref={containerRef} className="h-[300vh]"> {/* 3x viewport height */}
  <div className="sticky top-0 h-screen flex items-center justify-center">
    <motion.div style={{ opacity: opacity1 }}>Phase 1</motion.div>
    <motion.div style={{ opacity: opacity2 }}>Phase 2</motion.div>
    <motion.div style={{ opacity: opacity3 }}>Phase 3</motion.div>
  </div>
</div>
```

### **6. Morphing Elements**
```tsx
// ✅ Elements that transform while scrolling
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start center", "end center"]
})

const borderRadius = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  ["0px", "20px", "50px"]
)

const scale = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [1, 1.1, 0.9]
)

<motion.div 
  style={{ 
    borderRadius, 
    scale,
    backgroundColor: useTransform(
      scrollYProgress,
      [0, 1],
      ["rgb(31, 42, 68)", "rgb(0, 199, 183)"] // brand colors
    )
  }}
>
  {/* Morphing content */}
</motion.div>
```

## 🎯 Performance Optimization

### **Scroll Event Optimization**
```tsx
// ✅ Throttled scroll listeners
const { scrollY } = useScroll()
const throttledY = useTransform(scrollY, (value) => 
  Math.round(value / 10) * 10  // Throttle to every 10px
)

// ✅ Use will-change for animated elements
<motion.div 
  style={{ y: throttledY }}
  className="will-change-transform"
>
  {/* Animated content */}
</motion.div>
```

### **Intersection Observer Efficiency**
```tsx
// ✅ Efficient viewport detection
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: true,  // Only trigger once for performance
  rootMargin: "-20% 0% -20% 0%"  // Trigger earlier/later
})
```

## 🎨 Brand-Specific Scroll Patterns

### **Bytes & Builds Service Cards**
```tsx
// ✅ Service cards with scroll-based reveal
const serviceRef = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: serviceRef,
  offset: ["start end", "center start"]
})

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
}

{services.map((service, i) => (
  <motion.div
    key={i}
    ref={i === 0 ? serviceRef : undefined}
    custom={i}
    variants={cardVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
  >
    {/* Service card content */}
  </motion.div>
))}
```

### **Process Timeline Scroll**
```tsx
// ✅ Process steps revealed progressively
const processRef = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: processRef,
  offset: ["start center", "end center"]
})

const progress = useTransform(scrollYProgress, [0, 1], [0, 100])

<div ref={processRef}>
  {/* Progress line */}
  <motion.div 
    className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-accent to-primary"
    style={{ 
      height: useTransform(progress, (p) => `${p}%`)
    }}
  />
  
  {steps.map((step, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: useTransform(progress, [i * 25, (i + 1) * 25], [0, 1]),
        x: useTransform(progress, [i * 25, (i + 1) * 25], [-20, 0])
      }}
    >
      {/* Step content */}
    </motion.div>
  ))}
</div>
```

## 📱 Mobile Scroll Considerations

### **Touch-Friendly Interactions**
```tsx
// ✅ Mobile-optimized scroll behavior
const isMobile = useMediaQuery("(max-width: 768px)")

const scrollConfig = isMobile 
  ? {
      offset: ["start 80%", "end 20%"],  // Larger trigger areas
      threshold: 0.3  // Lower threshold for touch
    }
  : {
      offset: ["start end", "end start"],
      threshold: 0.1
    }
```

### **Reduced Motion Respect**
```tsx
// ✅ Honor accessibility preferences
const prefersReduced = useReducedMotion()

const scrollAnimations = prefersReduced 
  ? { opacity: 1 }  // Simple fade only
  : {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
```

## 🔧 Lenis Configuration

### **Optimal Settings for Bytes & Builds**
```tsx
// ✅ Performance-tuned Lenis setup
<ReactLenis 
  root 
  options={{
    lerp: 0.1,           // Smooth factor (0-1)
    duration: 1.2,       // Scroll duration
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  }}
>
  {children}
</ReactLenis>
```

---

**Key Principle**: Scroll animations should feel natural and enhance content discovery, not overwhelm the user. 