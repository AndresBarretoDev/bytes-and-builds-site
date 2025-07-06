---
description: Project file organization and import standards
globs: "**/*.{ts,tsx,js,jsx}"
alwaysApply: true
---

# File Structure & Organization

Modern project organization patterns for scalable React applications.

## 📁 Directory Structure

### **Current Bytes & Builds Structure**
```
src/
├── components/
│   ├── ui/                    # Shadcn/ui components
│   │   ├── button.tsx
│   │   ├── scroll-reveal.tsx
│   │   └── animated.tsx
│   ├── sections/              # Page sections
│   │   ├── hero-section.tsx
│   │   ├── services-section.tsx
│   │   └── index.ts
│   ├── layout/                # Layout components
│   │   └── header.tsx
│   └── providers/             # Context providers
│       └── lenis-provider.tsx
├── lib/                       # Utilities & configurations
│   ├── utils.ts
│   └── animations.ts
├── types/                     # TypeScript definitions
│   └── global.types.ts
└── app/                       # Next.js App Router
    ├── layout.tsx
    └── page.tsx
```

## 📦 Component Organization

### **Component File Patterns**
```tsx
// ✅ Single component file
export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return <div>...</div>
}

// ✅ Complex component with multiple exports
export function MainComponent(props: MainProps) { /* ... */ }
export function SubComponent(props: SubProps) { /* ... */ }

// Default export for main component
export default MainComponent
```

### **Index Files (Barrel Exports)**
```tsx
// ✅ components/sections/index.ts
export { HeroSection } from './hero-section'
export { ServicesSection } from './services-section'
export { ValuePropositionSection } from './value-proposition-section'
export { ProcessSection } from './process-section'
export { ClientLogosSection } from './client-logos-section'

// ✅ components/ui/index.ts
export { Button } from './button'
export { ScrollReveal } from './scroll-reveal'
export { ScrollStagger } from './scroll-stagger'
```

## 📋 Import Organization

### **Import Order (Enforced)**
```tsx
// 1. External libraries
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

// 2. Internal components
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

// 3. Sections and layout
import { HeroSection, ServicesSection } from '@/components/sections'

// 4. Types
import type { ServiceData, AnimationConfig } from '@/types'

// 5. Utilities and constants
import { brandAnimations } from '@/lib/animations'
import { SERVICES_DATA } from '@/lib/constants'

// 6. Relative imports (last)
import './styles.css'
```

### **Path Aliases (Configured)**
```tsx
// ✅ Use absolute imports with @ prefix
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ServiceData } from '@/types'

// ❌ Avoid relative imports for distant files
import { Button } from '../../../components/ui/button'
import { cn } from '../../lib/utils'
```

## 🎯 Component Naming

### **File Naming Conventions**
```
// ✅ Components: PascalCase
HeroSection.tsx
ServiceCard.tsx
ValuePropositionSection.tsx

// ✅ Utilities: kebab-case
scroll-reveal.tsx
animated-counter.tsx
client-logos-section.tsx

// ✅ Config/lib: kebab-case
utils.ts
animations.ts
constants.ts
```

### **Directory Naming**
```
// ✅ Always lowercase with hyphens
components/ui/
components/sections/
lib/
types/

// ❌ Avoid camelCase or PascalCase for directories
Components/UI/
componentsUI/
```

## 🔧 Feature-Based Organization

### **Grouping Related Components**
```
components/
├── ui/                    # Reusable UI components
│   ├── button/
│   │   ├── Button.tsx
│   │   ├── Button.types.ts
│   │   └── index.ts
│   └── form/
│       ├── FormField.tsx
│       ├── FormValidation.tsx
│       └── index.ts
├── sections/              # Page-specific sections
└── features/              # Business logic features
    └── contact/
        ├── ContactForm.tsx
        ├── ContactValidation.ts
        └── index.ts
```

### **Shared Resources**
```
lib/
├── utils.ts              # Generic utilities
├── animations.ts         # Animation configurations
├── constants.ts          # App constants
├── validations.ts        # Form validations
└── api.ts               # API utilities

types/
├── global.types.ts       # Global type definitions
├── api.types.ts         # API response types
└── components.types.ts   # Component prop types
```

## 📱 Page Organization

### **Next.js App Router Structure**
```
app/
├── layout.tsx            # Root layout
├── page.tsx             # Homepage
├── about/
│   └── page.tsx         # About page
├── services/
│   ├── page.tsx         # Services listing
│   └── [slug]/
│       └── page.tsx     # Individual service
└── contact/
    └── page.tsx         # Contact page
```

### **Page Component Pattern**
```tsx
// ✅ Page component structure
export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <ServicesSection />
      <ValuePropositionSection />
      <ProcessSection />
    </main>
  )
}

// ✅ Page metadata
export const metadata = {
  title: 'Bytes & Builds - Transformación Digital',
  description: 'Desarrollo web y automatización para PYMEs',
}
```

## 🚨 File Organization Rules

### **Keep Files Small**
- **Components**: < 200 lines
- **Utilities**: < 100 lines
- **Types**: < 150 lines
- **Pages**: < 100 lines (mostly composition)

### **Single Responsibility**
```tsx
// ✅ One main export per file
export function ServiceCard(props: ServiceCardProps) {
  // Component logic
}

// ✅ Related helper components are OK
function ServiceIcon({ icon }: { icon: string }) {
  // Helper component
}

// ✅ Export helpers if used elsewhere
export { ServiceIcon }
```

### **Consistent File Extensions**
- **React Components**: `.tsx`
- **TypeScript Utilities**: `.ts`
- **Types Only**: `.types.ts`
- **Constants**: `.constants.ts`
- **Tests**: `.test.tsx` or `.spec.tsx`

## 🔄 Refactoring Guidelines

### **When to Split Files**
1. **File > 200 lines**: Split into smaller components
2. **Multiple responsibilities**: Separate concerns
3. **Reusability**: Extract shared components
4. **Complex logic**: Move to custom hooks

### **When to Create Directories**
1. **3+ related files**: Create feature directory
2. **Shared types**: Create dedicated types directory
3. **Complex component**: Create component directory with index

## 📊 Project Health Metrics

### **File Organization Checklist**
- [ ] **Clear naming**: Files/directories have descriptive names
- [ ] **Logical grouping**: Related files are organized together
- [ ] **Import order**: Consistent import organization
- [ ] **Path aliases**: Using @ imports instead of relative paths
- [ ] **Barrel exports**: Index files for clean imports
- [ ] **Single responsibility**: Each file has one clear purpose

---

**Remember**: Good organization makes code easier to find, understand, and maintain. 