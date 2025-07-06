---
description: CRITICAL button system rules - NO EXCEPTIONS
globs: "**/*.{tsx,ts}"
alwaysApply: true
---

# Button System Rules - MANDATORY

## 🚨 CRITICAL BUTTON RULES - NO EXCEPTIONS

**These rules are NON-NEGOTIABLE and must be followed at all times.**

### **Rule #1: Always Use Button Component**
- **ALWAYS use the Button component** from `@/components/ui/button`
- **NEVER create custom button elements** with `<button>` tags
- **NEVER import buttons** from external sources without adaptation

### **Rule #2: No Custom Overrides**
- **NEVER add custom className overrides** to buttons
- **NEVER use styling classes** like `rounded-xl`, `px-5`, `h-10.5`, `py-3`, etc.
- **NEVER wrap buttons** in custom styled divs that modify appearance
- **NEVER use inline styles** on Button components

### **Rule #3: Use Only Approved Variants**
```tsx
// ✅ APPROVED VARIANTS
'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'accent' | 'blue' | 'destructive'
```

### **Rule #4: Use Only Approved Sizes**
```tsx
// ✅ APPROVED SIZES  
'sm' | 'default' | 'lg' | 'xl' | 'icon'
```

## ✅ CORRECT Button Usage Examples

```tsx
// ✅ Perfect - using approved variants and sizes
<Button size="lg">Primary Action</Button>
<Button variant="outline" size="lg">Secondary Action</Button>
<Button variant="accent" size="xl">Call to Action</Button>
<Button variant="ghost" size="sm">Subtle Action</Button>
<Button variant="link">Text Link Style</Button>

// ✅ With proper props
<Button 
  variant="accent" 
  size="lg"
  disabled={isLoading}
  onClick={handleSubmit}
>
  {isLoading ? "Loading..." : "Submit"}
</Button>

// ✅ Icon buttons
<Button variant="ghost" size="icon">
  <Icon className="h-4 w-4" />
</Button>
```

## ❌ WRONG Button Usage Examples

```tsx
// ❌ NEVER do these things
<Button className="rounded-xl px-5 text-base">Text</Button>
<Button className="h-12 w-32 bg-blue-500">Text</Button>
<Button style={{ padding: '12px 24px' }}>Text</Button>

// ❌ NEVER wrap in styled containers
<div className="bg-primary/10 p-0.5 rounded-xl">
  <Button>Text</Button>
</div>

// ❌ NEVER create custom buttons
<button className="custom-button-class">Text</button>
<div className="button-like-styling">Text</div>

// ❌ NEVER use external button components
import { Button as ExternalButton } from 'some-library'
<ExternalButton>Text</ExternalButton>
```

## 🎨 Button Variants Reference

### Available Variants
| Variant | Usage | Brand Color |
|---------|-------|-------------|
| `default` | Primary actions | `bg-primary` |
| `secondary` | Secondary actions | `bg-secondary` |
| `outline` | Alternative actions | `border-primary` |
| `ghost` | Subtle actions | `hover:bg-primary/10` |
| `link` | Text-like buttons | `text-primary` |
| `accent` | Call-to-actions | `bg-accent` |
| `blue` | Special actions | `bg-blue-variant` |
| `destructive` | Delete/danger | `bg-destructive` |

### Available Sizes
| Size | Height | Padding | Use Case |
|------|--------|---------|----------|
| `sm` | 36px | px-3 | Compact interfaces |
| `default` | 40px | px-4 | Standard buttons |
| `lg` | 44px | px-6 | Primary CTAs |
| `xl` | 48px | px-8 | Hero sections |
| `icon` | 40px | p-2 | Icon-only buttons |

## 🛠️ Premium Button Features

**All buttons automatically include:**
- ✅ **10px border radius** (rounded-lg)
- ✅ **Subtle shadows** with brand colors
- ✅ **Hover animations** and transitions
- ✅ **Loading states** with proper feedback
- ✅ **Focus indicators** for accessibility
- ✅ **Brand color integration**
- ✅ **Responsive sizing**

## 🔧 If You Need Different Styling

**NEVER override with className. Instead:**

1. **Modify the Button component** in `@/components/ui/button.tsx`
2. **Add new variants** to the variants object
3. **Create new sizes** in the size configuration
4. **Extend the component** with new props if needed

```tsx
// ✅ Correct way to extend - modify the source component
const buttonVariants = cva(
  // base classes
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: {
        // existing variants...
        custom: "bg-gradient-to-r from-primary to-accent", // Add new variant
      },
      size: {
        // existing sizes...
        xxl: "h-14 px-10 text-lg", // Add new size
      }
    }
  }
)
```

## 🚨 Error Reporting

**If buttons don't work as expected:**
- **REPORT immediately** - don't try to "fix" with custom CSS
- **Check Button component** for issues first
- **Verify brand colors** are properly applied
- **Ensure accessibility** features are maintained

## 🔍 Button Checklist

Before deploying any button:
- [ ] Uses `@/components/ui/button` component
- [ ] No custom className overrides
- [ ] Uses approved variant and size
- [ ] Maintains 10px border radius automatically
- [ ] Shows proper hover/focus states
- [ ] Loading states work correctly
- [ ] Accessible to keyboard navigation
- [ ] Brand colors are correctly applied

---

**Remember**: The Button component is a cornerstone of our design system. Breaking these rules breaks the entire visual consistency of Bytes & Builds. 