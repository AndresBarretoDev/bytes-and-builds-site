---
description: TypeScript patterns and best practices for 2025
globs: "**/*.{ts,tsx}"
alwaysApply: true
---

# TypeScript Best Practices

Modern TypeScript patterns for type safety and developer experience in 2025.

## 🎯 Core Principles

- **Strict mode always**: Enable strict TypeScript settings
- **Interfaces over types**: For object definitions (better for extending)
- **Types for unions**: Primitives and computed types
- **No `any`**: Use `unknown` when type is uncertain

## 🏗️ Type Organization

### **File Structure**
```
types/
├── api/
│   ├── user.types.ts
│   └── auth.types.ts
├── components/
│   ├── button.types.ts
│   └── form.types.ts
├── global.types.ts
└── index.ts
```

### **Interface Naming**
```tsx
// ✅ Clear, descriptive names
interface UserProfile {
  id: string
  email: string
  name: string
}

interface ButtonProps {
  variant: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
}

// ✅ Use PascalCase for interfaces and types
interface ServiceCardData {
  title: string
  description: string
  features: string[]
}

type AnimationDirection = 'up' | 'down' | 'left' | 'right'
```

## 🔧 Component Patterns

### **Props Interfaces**
```tsx
// ✅ Component-specific props interface
interface HeroSectionProps {
  title: string
  subtitle?: string
  ctaText: string
  onCtaClick: () => void
  backgroundImage?: string
}

// ✅ Extend HTML attributes when needed
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'default' | 'outline' | 'accent'
  size: 'sm' | 'default' | 'lg'
  isLoading?: boolean
}

// ✅ Generic components
interface CardProps<T = any> {
  data: T
  onSelect?: (item: T) => void
  render: (item: T) => React.ReactNode
}
```

### **Event Handlers**
```tsx
// ✅ Strongly typed event handlers
interface FormProps {
  onSubmit: (data: FormData) => void | Promise<void>
  onChange: (field: string, value: string) => void
  onError: (error: ValidationError) => void
}

// ✅ Mouse/touch events
interface InteractiveProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void
}
```

## 🎨 Brand-Specific Types

### **Animation Types**
```tsx
// ✅ Motion animation types
interface AnimationConfig {
  duration: number
  ease: string | number[]
  delay?: number
}

interface ScrollRevealProps {
  direction: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  children: React.ReactNode
}

// ✅ Brand color types
type BrandColor = 'primary' | 'secondary' | 'accent' | 'blue-variant'
type BrandGradient = 'primary-to-accent' | 'secondary-to-primary'
```

### **API Response Types**
```tsx
// ✅ Consistent API response structure
interface ApiResponse<T> {
  data: T
  status: 'success' | 'error'
  message?: string
  timestamp: string
}

interface ServiceData {
  id: string
  title: string
  description: string
  features: string[]
  pricing: {
    amount: number
    currency: string
    period: 'monthly' | 'yearly'
  }
}

// ✅ Error handling types
interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
}
```

## ⚡ Advanced Patterns

### **Utility Types**
```tsx
// ✅ Create reusable utility types
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Partial<T> = { [P in keyof T]?: T[P] }

// ✅ Brand-specific utilities
type WithBrandColors<T> = T & {
  brandColor?: BrandColor
  gradient?: BrandGradient
}

type AnimatedComponent<T> = WithBrandColors<T> & {
  animation?: AnimationConfig
  parallax?: boolean
}
```

### **Conditional Types**
```tsx
// ✅ Smart component typing
type ConditionalProps<T> = T extends { href: string }
  ? LinkProps
  : ButtonProps

// ✅ Animation-aware props
type WithAnimation<T, IsAnimated extends boolean> = IsAnimated extends true
  ? T & { animationConfig: AnimationConfig }
  : T
```

### **Template Literal Types**
```tsx
// ✅ CSS-in-TS with brand constraints
type BrandColorClass = `text-${BrandColor}` | `bg-${BrandColor}` | `border-${BrandColor}`
type SpacingClass = `p-${number}` | `m-${number}` | `gap-${number}`

// ✅ Animation class types
type AnimationClass = 
  | 'animate-pulse' 
  | 'animate-ping' 
  | 'animate-bounce'
  | 'animate-gradient'
```

## 🚨 Error Prevention

### **Type Guards**
```tsx
// ✅ Runtime type checking
function isValidEmail(value: unknown): value is string {
  return typeof value === 'string' && /\S+@\S+\.\S+/.test(value)
}

function isServiceData(data: unknown): data is ServiceData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'title' in data
  )
}

// ✅ Brand color validation
function isBrandColor(color: string): color is BrandColor {
  return ['primary', 'secondary', 'accent', 'blue-variant'].includes(color)
}
```

### **Assertion Functions**
```tsx
// ✅ Type assertions with error handling
function assertIsServiceData(data: unknown): asserts data is ServiceData {
  if (!isServiceData(data)) {
    throw new Error('Invalid service data structure')
  }
}

function assertNonNull<T>(value: T | null | undefined): asserts value is T {
  if (value == null) {
    throw new Error('Value cannot be null or undefined')
  }
}
```

## 🔄 State Management Types

### **Zustand Store Types**
```tsx
// ✅ Store state interface
interface AppState {
  user: UserProfile | null
  theme: 'light' | 'dark'
  isLoading: boolean
  errors: ApiError[]
}

// ✅ Store actions interface
interface AppActions {
  setUser: (user: UserProfile | null) => void
  toggleTheme: () => void
  setLoading: (loading: boolean) => void
  addError: (error: ApiError) => void
  clearErrors: () => void
}

// ✅ Combined store type
type AppStore = AppState & AppActions
```

## 📝 Form Types

### **Form Data & Validation**
```tsx
// ✅ Form field types
interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  serviceInterest: ServiceData['id'][]
}

interface FormFieldError {
  field: keyof ContactFormData
  message: string
  type: 'required' | 'invalid' | 'custom'
}

// ✅ Form state
interface FormState<T> {
  data: T
  errors: FormFieldError[]
  isSubmitting: boolean
  isValid: boolean
}
```

## 🎯 Performance Types

### **Lazy Loading Types**
```tsx
// ✅ Dynamic imports with types
type LazyComponent<T = {}> = React.LazyExoticComponent<React.ComponentType<T>>

interface LazyLoadConfig {
  fallback: React.ComponentType
  errorBoundary?: React.ComponentType<{ error: Error }>
  preload?: boolean
}
```

## 🔧 Configuration

### **TSConfig.json Standards**
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  }
}
```

---

**Remember**: Good TypeScript types are documentation that never goes out of date. 