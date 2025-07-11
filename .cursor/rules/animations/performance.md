---
description: Animation performance optimization rules
globs: "**/*.{tsx,ts}"
alwaysApply: true
---

# Animation Performance Optimization

Critical performance guidelines for smooth, efficient animations that maintain 60fps.

## 🚀 Performance Fundamentals

### **GPU-Accelerated Properties Only**
```tsx
// ✅ FAST - GPU accelerated properties
transform: translateX(10px) translateY(20px) scale(1.1) rotate(5deg)
opacity: 0.8
filter: blur(5px) brightness(1.2)

// ❌ SLOW - Layout-triggering properties
width: "200px"     // Triggers layout
height: "150px"    // Triggers layout
top: "20px"        // Triggers layout
left: "30px"       // Triggers layout
margin: "10px"     // Triggers layout
padding: "15px"    // Triggers layout
```

### **Composite Layer Promotion**
```tsx
// ✅ Force GPU layer for heavy animations
<motion.div 
  className="will-change-transform"  // Promote to composite layer
  style={{ transform: "translateZ(0)" }}  // Force 3D context
>
  {/* Animated content */}
</motion.div>

// ✅ Clean up after animation completes
<motion.div
  style={{ willChange: animating ? "transform" : "auto" }}
  onAnimationComplete={() => setAnimating(false)}
>
  {/* Content */}
</motion.div>
```

## ⚡ Motion-Specific Optimization

### **Efficient Animation Variants**
```tsx
// ✅ Optimized variants structure
const optimizedVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

// ❌ Avoid complex nested transitions
const slowVariants = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      when: "beforeChildren",
      duration: 1,
      ease: [0.17, 0.67, 0.83, 0.67]  // Complex easing
    }
  }
}
```

### **Smart useTransform Usage**
```tsx
// ✅ Efficient scroll transforms
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
})

// Cache transforms to avoid recalculation
const y = useTransform(scrollYProgress, [0, 1], [0, -50])
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

// ✅ Throttle expensive calculations
const throttledY = useTransform(scrollYProgress, (latest) => 
  Math.round(latest * 10) / 10  // Round to 1 decimal place
)
```

### **Animation Cleanup**
```tsx
// ✅ Proper cleanup to prevent memory leaks
useEffect(() => {
  const controls = animate(scope.current, { x: 100 })
  
  return () => {
    controls.stop()  // Stop animation on unmount
  }
}, [])

// ✅ Conditional animations based on viewport
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: true  // Prevent re-triggering for performance
})
```

## 📱 Mobile Performance

### **Reduced Motion for Performance**
```tsx
// ✅ Honor user preferences and device capabilities
const prefersReduced = useReducedMotion()
const isMobile = useMediaQuery("(max-width: 768px)")
const isLowEndDevice = useMediaQuery("(max-device-width: 480px)")

const performantAnimation = (prefersReduced || isMobile || isLowEndDevice)
  ? { opacity: 1 }  // Simple fade only
  : {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3 }
    }
```

### **Touch-Optimized Interactions**
```tsx
// ✅ Efficient touch interactions
const touchVariants = {
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }  // Fast feedback
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}

// Only apply hover on non-touch devices
<motion.div
  variants={touchVariants}
  whileTap="tap"
  whileHover={!isTouchDevice ? "hover" : undefined}
>
  {/* Interactive content */}
</motion.div>
```

## 🎯 Scroll Performance

### **Efficient Scroll Listeners**
```tsx
// ✅ Debounced scroll handling
const { scrollY } = useScroll()
const [throttledScrollY, setThrottledScrollY] = useState(0)

useEffect(() => {
  let timeoutId: NodeJS.Timeout
  
  const unsubscribe = scrollY.on("change", (latest) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      setThrottledScrollY(latest)
    }, 16) // ~60fps
  })
  
  return () => {
    unsubscribe()
    clearTimeout(timeoutId)
  }
}, [scrollY])
```

### **Viewport-Based Loading**
```tsx
// ✅ Only animate what's visible
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: true,
  rootMargin: "50px 0px"  // Preload slightly before visible
})

// Don't render expensive animations until needed
{inView && (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Heavy animation content */}
  </motion.div>
)}
```

## 🔧 Bundle Size Optimization

### **Efficient Motion Imports**
```tsx
// ✅ Import only what you need
import { motion } from "framer-motion"  // Full import for frequent use
import { 
  useScroll, 
  useTransform, 
  useInView 
} from "framer-motion"  // Named imports for specific hooks

// ❌ Don't import entire motion library
import * as Motion from "framer-motion"  // Avoid this
```

### **Animation Presets**
```tsx
// ✅ Create reusable animation presets
export const brandAnimations = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  },
  slideLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

// Use presets instead of inline variants
<motion.div {...brandAnimations.fadeUp}>
  {/* Content */}
</motion.div>
```

## 📊 Performance Monitoring

### **Debug Animation Performance**
```tsx
// ✅ Monitor frame rate during development
if (process.env.NODE_ENV === 'development') {
  // Log heavy animations
  const logPerformance = (animationName: string) => {
    console.time(animationName)
    return () => console.timeEnd(animationName)
  }
  
  const cleanup = logPerformance('ScrollAnimation')
  // Your animation code here
  cleanup()
}
```

### **Performance Checklist**
```tsx
// ✅ Pre-launch performance audit
const animationChecklist = {
  // GPU acceleration
  usesTransformOnly: true,      // No width/height animations
  hasWillChange: true,          // Composite layer promotion
  cleansUpAnimations: true,     // Proper effect cleanup
  
  // Accessibility
  respectsReducedMotion: true,  // useReducedMotion() check
  hasFallbackStates: true,      // Static fallbacks
  
  // Performance
  usesThrottling: true,         // Scroll event throttling
  hasViewportDetection: true,   // Only animate visible content
  optimizedForMobile: true,     // Touch-friendly interactions
}
```

## 🚨 Performance Anti-Patterns

### **Avoid These Mistakes**
```tsx
// ❌ Don't animate layout properties
<motion.div 
  animate={{ width: "100%", height: "200px" }}  // SLOW!
>

// ❌ Don't create animations in render
const badVariants = {  // This creates new object every render!
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

// ❌ Don't use complex easing for simple animations
transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}  // Overkill for simple fade

// ❌ Don't animate without cleanup
useEffect(() => {
  animate(ref.current, { x: 100 })  // No cleanup = memory leak
}, [])
```

## 🎯 Brand-Specific Optimizations

### **Bytes & Builds Performance Targets**
```tsx
// ✅ Performance budgets for brand animations
const performanceTargets = {
  pageLoad: "< 2s First Contentful Paint",
  scrollResponse: "< 16ms per frame (60fps)",
  interactionToResponse: "< 100ms",
  animationDuration: "200-600ms (not longer)",
  staggerDelay: "< 100ms between elements"
}

// ✅ Brand-optimized timing functions
const brandEasing = {
  quick: [0.25, 0.1, 0.25, 1],      // Brand standard
  smooth: [0.4, 0.0, 0.2, 1],       // Material Design
  bounce: [0.68, -0.55, 0.265, 1.55] // Subtle bounce
}
```

---

**Remember**: Smooth animations at 60fps are better than complex animations that stutter. Performance always comes first. 