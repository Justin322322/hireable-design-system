---
description: Motion and animation guidelines with duration tokens, easing functions, and reduced motion support
---

# Motion System

Motion adds polish and provides feedback in the Hireable Design System. When used well, animations guide users and make interfaces feel responsive. When overused, they create friction.

---

## Core Principles

1. **Purposeful** - Every animation should have a reason (feedback, guidance, continuity)
2. **Fast** - UI animations should be quick (150-300ms for most interactions)
3. **Subtle** - Prefer understated motion over dramatic effects
4. **Accessible** - Always respect `prefers-reduced-motion`

---

## Duration Tokens

| Token | Duration | Usage |
|-------|----------|-------|
| `--duration-instant` | 0ms | Immediate state changes, reduced motion fallback |
| `--duration-fast` | 100ms | Micro-interactions (hover, focus) |
| `--duration-normal` | 150ms | Default UI transitions |
| `--duration-moderate` | 200ms | Component state changes |
| `--duration-slow` | 300ms | Complex transitions, modals/drawers entering |
| `--duration-slower` | 500ms | Page transitions, large reveals |

### Add to globals.css

```css
:root {
  --duration-instant: 0ms;
  --duration-fast: 100ms;
  --duration-normal: 150ms;
  --duration-moderate: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
}
```

### Tailwind Usage

```tsx
// Using Tailwind's built-in duration classes
<div className="transition-all duration-150">  {/* 150ms */}
<div className="transition-colors duration-200">  {/* 200ms */}

// Or with CSS variables
<div className="transition-all duration-(--duration-normal)">
```

---

## Easing Functions

| Token | Curve | Usage |
|-------|-------|-------|
| `--ease-linear` | `linear` | Progress bars, loading indicators |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving (fade out) |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering (fade in) |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default for most transitions |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful, bouncy effects |

### Add to globals.css

```css
:root {
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Tailwind Usage

```tsx
// Tailwind built-in
<div className="transition-transform ease-out">
<div className="transition-opacity ease-in-out">

// Most common: ease-out for entering, ease-in for leaving
```

---

## Common Animation Patterns

### Hover States

```tsx
// Button hover
<Button className="transition-colors duration-150 hover:bg-button-primary-hover">

// Card hover with lift
<Card className="transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">

// Link hover
<a className="transition-colors duration-100 hover:text-primary">
```

### Focus States

```tsx
// Focus ring animation
<Input className="transition-shadow duration-150 focus:ring-2 focus:ring-ring" />

// Focus with border color
<Button className="transition-[box-shadow,border-color] duration-150 focus:border-primary" />
```

### Fade Transitions

```tsx
// Fade in
<div className="animate-in fade-in duration-200">

// Fade out
<div className="animate-out fade-out duration-150">

// Conditional fade
<div className={cn(
  "transition-opacity duration-200",
  isVisible ? "opacity-100" : "opacity-0"
)}>
```

### Slide Transitions

```tsx
// Slide in from bottom (drawer)
<Drawer className="animate-in slide-in-from-bottom duration-300">

// Slide in from right
<div className="animate-in slide-in-from-right duration-200">

// Slide out
<div className="animate-out slide-out-to-bottom duration-200">
```

### Scale Transitions

```tsx
// Modal enter
<Dialog className="animate-in fade-in zoom-in-95 duration-200">

// Modal exit
<Dialog className="animate-out fade-out zoom-out-95 duration-150">

// Button press
<Button className="transition-transform active:scale-95">
```

---

## Component-Specific Motion

### Buttons

```tsx
// Standard button transitions
<Button className="transition-colors duration-150">

// With press effect
<Button className="transition-all duration-150 active:scale-[0.98]">
```

### Modals/Dialogs

```tsx
// Enter: fade + scale up
<DialogContent className="
  animate-in 
  fade-in-0 
  zoom-in-95 
  duration-200
">

// Overlay: fade
<DialogOverlay className="
  animate-in 
  fade-in-0 
  duration-200
">
```

### Drawers

```tsx
// Enter from right
<DrawerContent className="
  animate-in 
  slide-in-from-right 
  duration-300
  ease-out
">

// Exit to right
<DrawerContent className="
  animate-out 
  slide-out-to-right 
  duration-200
  ease-in
">
```

### Dropdowns/Menus

```tsx
// Dropdown enter
<DropdownContent className="
  animate-in 
  fade-in-0 
  zoom-in-95 
  duration-150
">

// Dropdown exit
<DropdownContent className="
  animate-out 
  fade-out-0 
  zoom-out-95 
  duration-100
">
```

### Toasts

```tsx
// Toast enter (slide + fade)
<Toast className="
  animate-in 
  slide-in-from-top-full 
  fade-in-0 
  duration-300
">

// Toast exit
<Toast className="
  animate-out 
  slide-out-to-right-full 
  fade-out-0 
  duration-200
">
```

### Accordions/Collapsibles

```tsx
// Content reveal
<AccordionContent className="
  overflow-hidden
  transition-all
  data-[state=open]:animate-accordion-down
  data-[state=closed]:animate-accordion-up
">
```

---

## Loading States

### Spinner

```tsx
<Spinner className="animate-spin duration-700" />
```

### Skeleton/Shimmer

```tsx
// Pulsing skeleton
<div className="animate-pulse bg-muted rounded" />

// Shimmer effect (requires custom keyframes)
<div className="animate-shimmer bg-gradient-to-r from-muted via-muted-foreground/10 to-muted" />
```

### Progress Bar

```tsx
// Determinate progress
<div 
  className="transition-all duration-300 ease-out" 
  style={{ width: `${progress}%` }}
/>

// Indeterminate progress
<div className="animate-indeterminate-progress" />
```

---

## Reduced Motion Support

**Always** provide reduced motion alternatives:

### CSS Approach

```css
/* In globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### React Hook

```tsx
// src/hooks/use-reduced-motion.ts
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}
```

### Component Usage

```tsx
import { useReducedMotion } from "@/hooks";

function AnimatedCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Card
      className={cn(
        "transition-transform",
        !prefersReducedMotion && "hover:-translate-y-1"
      )}
    >
      {/* Transforms disabled when user prefers reduced motion */}
    </Card>
  );
}
```

### Framer Motion

```tsx
import { motion, useReducedMotion } from "framer-motion";

function Modal({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## When NOT to Animate

| Scenario | Reason |
|----------|--------|
| Critical content rendering | Delays information |
| High-frequency updates | Performance impact |
| Text content | Distracting |
| Large layout shifts | Jarring, can cause motion sickness |
| User hasn't interacted yet | Unexpected movement |

---

## Performance Guidelines

1. **Prefer transform and opacity** - These are GPU-accelerated
2. **Avoid animating layout** - `width`, `height`, `top`, `left` cause reflows
3. **Use will-change sparingly** - Only for known heavy animations
4. **Limit concurrent animations** - More than 3-4 simultaneous animations feels chaotic

```tsx
// ✅ GPU-accelerated (good)
<div className="transition-transform duration-200 hover:translate-x-2">
<div className="transition-opacity duration-200 hover:opacity-80">

// ❌ Causes layout reflow (avoid)
<div className="transition-all duration-200 hover:w-[200px]">
<div className="transition-all duration-200 hover:h-[100px]">
```

---

## Quick Reference

| Interaction | Duration | Easing |
|-------------|----------|--------|
| Hover color change | 100-150ms | ease-out |
| Focus ring | 150ms | ease-out |
| Button press | 100ms | ease-out |
| Dropdown open | 150ms | ease-out |
| Modal enter | 200ms | ease-out |
| Modal exit | 150ms | ease-in |
| Drawer enter | 300ms | ease-out |
| Drawer exit | 200ms | ease-in |
| Toast enter | 300ms | ease-out |
| Page transition | 300-500ms | ease-in-out |

---

## DO NOT

- ❌ Use animations longer than 500ms for UI feedback
- ❌ Animate text or content users need to read
- ❌ Use flashy or bouncy effects for business applications
- ❌ Forget reduced motion support
- ❌ Animate layout properties (width, height, top, left)
- ❌ Use `animation-delay` without purpose
- ❌ Flash content more than 3 times per second (seizure risk)
