---
description: Bytes & Builds brand identity and design system rules
globs: "**/*.{tsx,ts,css}"
alwaysApply: true
---

# Brand Identity & Design System - Bytes & Builds

**CRITICAL RULE**: Always maintain Bytes & Builds brand colors and identity across all components.

## 🎨 Brand Colors (Updated 2025)

### Primary Palette
```css
/* Main brand colors - NEVER change these */
--brand-primary: #1f2a44      /* Main brand (darker blue) - PRIMARY PROMINENCE */
--brand-secondary: #34518d    /* Secondary (lighter blue) */
--brand-accent: #00c7b7       /* Accent (teal/turquoise) */
--brand-blue: #3a77d3         /* Variant (light blue) */
--brand-white: #fefefe        /* Off-white */
```

### CSS Variables Structure
```css
/* Light mode */
:root {
  --primary: 31 42 68;        /* #1f2a44 */
  --secondary: 52 81 141;     /* #34518d */
  --accent: 0 199 183;        /* #00c7b7 */
  --blue-variant: 58 119 211; /* #3a77d3 */
}

/* Dark mode variants */
.dark {
  --primary: 52 81 141;       /* Lighter for dark mode */
  --secondary: 31 42 68;      /* Darker for dark mode */
  --accent: 0 199 183;        /* Same accent */
  --blue-variant: 58 119 211; /* Same variant */
}
```

## 🚨 Component Adaptation Rules

### External Component Integration
- **ALL components** from shadcn/ui, 21st.dev, or external sources **MUST** be adapted to use Bytes & Builds brand colors
- **NEVER use default colors** from external components
- **FIRST priority** when importing/adapting components is brand color adaptation
- Use CSS variables (--primary, --accent, etc.) for consistency

### Color Application Standards
```tsx
// ✅ DO: Use brand colors with semantic naming
className="bg-primary text-primary-foreground"
className="border-accent hover:bg-accent/10"
className="text-secondary"

// ❌ DON'T: Use arbitrary colors
className="bg-blue-600 text-white"
className="border-cyan-400"
className="text-slate-700"
```

### Gradient Patterns
```tsx
// ✅ Brand-consistent gradients
className="bg-gradient-to-r from-primary via-secondary to-blue-variant"
className="bg-gradient-to-br from-primary/90 via-accent/20 to-transparent"

// ✅ Text gradients (signature pattern)
className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
```

## 🎭 Animation Integration

### Brand-Consistent Motion
```tsx
// Use brand colors in animations
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: { duration: 3, repeat: Infinity, ease: "linear" }
}

// Hover states with brand colors
className="hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
```

## 🔧 Implementation Checklist

- [ ] **Color Contrast**: Maintain WCAG AA compliance with brand colors
- [ ] **Dark Mode**: Both light and dark mode variants use appropriate brand adaptations
- [ ] **Interactive Elements**: Buttons, links, highlights use brand colors
- [ ] **Gradients**: Use brand color combinations, not external palettes
- [ ] **Hover States**: Brand-consistent interaction feedback
- [ ] **Focus States**: Accessible focus indicators with brand colors

## ⚠️ Common Mistakes to Avoid

```tsx
// ❌ Using external color systems
className="bg-indigo-600"        // Use bg-primary instead
className="text-emerald-500"     // Use text-accent instead
className="border-sky-400"       // Use border-blue-variant instead

// ❌ Hardcoded hex values
style={{ color: '#6366f1' }}    // Use CSS variables instead

// ❌ Non-brand gradients
className="bg-gradient-to-r from-purple-600 to-blue-600"  // Use brand gradients
```

## 📋 Brand Color Reference

| Element Type | Primary Color | Secondary Usage | Accent Usage |
|--------------|---------------|-----------------|--------------|
| Headers      | `text-primary` | `text-secondary` | Gradients |
| Buttons      | `bg-primary` | `bg-secondary` | `bg-accent` |
| Links        | `text-accent` | `hover:text-primary` | Focus states |
| Borders      | `border-primary` | `border-secondary` | Active states |
| Backgrounds  | `bg-primary/5` | `bg-secondary/5` | `bg-accent/5` |

---

**Remember**: Brand consistency is not optional - it's what differentiates Bytes & Builds from generic templates. 