# Cursor Rules - Bytes & Builds 2025

Modern development guidelines for the Bytes & Builds project using the latest best practices.

## 🎯 Core Principles
- **TypeScript First**: Type safety and developer experience
- **Motion-Enhanced UX**: Smooth, accessible animations
- **Brand Consistency**: Bytes & Builds identity in every component
- **Performance Focus**: Web Vitals and user experience optimization

## 📁 Rules Structure

### Core Development
- [`typescript.md`](core/typescript.md) - TypeScript patterns and best practices
- [`react.md`](core/react.md) - React 19+ with hooks and Server Components
- [`nextjs.md`](core/nextjs.md) - Next.js 15+ App Router patterns
- [`performance.md`](core/performance.md) - Web Vitals optimization

### UI & Design
- [`styling.md`](ui/styling.md) - Tailwind CSS and responsive design
- [`components.md`](ui/components.md) - Component architecture and patterns
- [`accessibility.md`](ui/accessibility.md) - WCAG compliance and a11y

### Brand Identity
- [`design-system.md`](brand/design-system.md) - Bytes & Builds brand colors and tokens
- [`buttons.md`](brand/buttons.md) - **CRITICAL** Button system rules

### Animations (New for 2025)
- [`motion.md`](animations/motion.md) - Framer Motion/Motion patterns
- [`scroll.md`](animations/scroll.md) - Lenis and scroll interactions
- [`performance.md`](animations/performance.md) - Animation optimization

### Project Organization
- [`file-structure.md`](project/file-structure.md) - File organization and imports
- [`naming.md`](project/naming.md) - Naming conventions

## 🚨 Critical Rules (Always Apply)
1. **Brand Colors**: Use only Bytes & Builds color palette
2. **Button System**: Never override Button component styling
3. **Motion Accessibility**: Respect `prefers-reduced-motion`
4. **TypeScript Strict**: No `any` types without justification

## ⚡ Quick Reference

### Brand Colors
```css
--brand-primary: #1f2a44    /* Main brand (darker blue) */
--brand-secondary: #34518d  /* Secondary (lighter blue) */
--brand-accent: #00c7b7     /* Accent (teal) */
--brand-blue: #3a77d3       /* Variant (light blue) */
```

### Animation Standards
```tsx
// Respect user preferences
const prefersReduced = useReducedMotion()

// Use brand-consistent timing
const transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
```

### File Structure
```
src/
├── components/ui/          # Shadcn components
├── components/sections/    # Page sections
├── components/animations/  # Animation components
├── lib/                   # Utilities
└── types/                 # TypeScript definitions
```

---

**Last Updated**: January 2025 | **Next Review**: June 2025 