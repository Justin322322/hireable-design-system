---
description: Accessibility (A11y) guidelines for building inclusive components following WCAG 2.1 AA standards
---

# Accessibility Guidelines

All components in the Hireable Design System must meet WCAG 2.1 AA compliance. Accessibility is not optional—it's a core requirement.

---

## WCAG 2.1 AA Requirements

### Perceivable

1. **Text alternatives** - All non-text content has text alternatives
2. **Captions/transcripts** - Media has captions or transcripts
3. **Adaptable** - Content can be presented in different ways
4. **Distinguishable** - Content is easy to see and hear

### Operable

1. **Keyboard accessible** - All functionality available via keyboard
2. **Enough time** - Users have enough time to read and use content
3. **Seizures** - No content that causes seizures (no flashing > 3/sec)
4. **Navigable** - Users can navigate and find content

### Understandable

1. **Readable** - Text is readable and understandable
2. **Predictable** - Pages behave predictably
3. **Input assistance** - Help users avoid and correct mistakes

### Robust

1. **Compatible** - Content works with assistive technologies

---

## Color Contrast Requirements

| Element Type | Minimum Ratio | Example |
|--------------|---------------|---------|
| Normal text (< 18px) | 4.5:1 | Body text, labels |
| Large text (≥ 18px or 14px bold) | 3:1 | Headings |
| UI components & graphics | 3:1 | Buttons, icons, borders |
| Disabled states | No requirement | Greyed out elements |

### Testing Contrast

```bash
# Use browser DevTools
# Chrome: Inspect element → Styles → Color picker shows contrast ratio

# Online tools
# - WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
# - Contrast Ratio: https://contrast-ratio.com/
```

### Token Compliance

All semantic color tokens in `globals.css` should pass contrast requirements:

```css
/* ✅ Good: High contrast text */
--text-base: var(--color-neutral-950);     /* On white: ~18:1 */
--text-muted: var(--color-neutral-650);    /* On white: ~4.5:1 */

/* ⚠️ Check: Ensure sufficient contrast */
--text-subtle: var(--color-neutral-700);   /* Must be ≥ 4.5:1 */
```

---

## Keyboard Navigation

### Required Keys

| Key | Expected Behavior |
|-----|-------------------|
| `Tab` | Move focus to next interactive element |
| `Shift + Tab` | Move focus to previous interactive element |
| `Enter` | Activate buttons, links, submit forms |
| `Space` | Activate buttons, toggle checkboxes/switches |
| `Escape` | Close modals, drawers, dropdowns, cancel |
| `Arrow keys` | Navigate within composite widgets (menus, tabs, radio groups) |
| `Home/End` | Jump to first/last item in lists |

### Focus Order

Focus order must follow visual/logical reading order:

```tsx
// ✅ Good: Natural DOM order
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>

// ❌ Bad: Using tabindex > 0 to force order
<div tabIndex={5}>First</div>
<div tabIndex={1}>Second</div>
```

### Focus Management Patterns

#### Modal/Drawer Focus Trap

```tsx
// When modal opens:
// 1. Save previous focus
// 2. Move focus to modal (or first focusable element)
// 3. Trap focus within modal
// 4. On close, restore focus to trigger element

import { useEffect, useRef } from "react";

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Save current focus
      previousFocusRef.current = document.activeElement as HTMLElement;
      // Focus modal
      modalRef.current?.focus();
    } else {
      // Restore focus
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      {children}
    </div>
  );
}
```

#### Skip Links

```tsx
// Add skip link as first focusable element
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## ARIA Patterns

### Required Attributes by Component

| Component | Required ARIA |
|-----------|---------------|
| Button | `aria-label` (if icon-only), `aria-pressed` (toggle), `aria-expanded` (menu trigger) |
| Dialog/Modal | `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby` |
| Drawer | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Menu/Dropdown | `role="menu"`, `aria-haspopup`, `aria-expanded`, items: `role="menuitem"` |
| Tabs | `role="tablist"`, tabs: `role="tab"`, `aria-selected`, panels: `role="tabpanel"` |
| Alert/Toast | `role="alert"` or `role="status"`, `aria-live="polite"` or `"assertive"` |
| Progress | `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |
| Form Fields | `aria-invalid`, `aria-describedby` (for errors), `aria-required` |

### Live Regions

```tsx
// For dynamic content updates (toasts, alerts, form errors)
<div role="status" aria-live="polite">
  {/* Polite: announced after current speech */}
  Form saved successfully
</div>

<div role="alert" aria-live="assertive">
  {/* Assertive: interrupts immediately */}
  Error: Required field missing
</div>
```

### Icon Buttons

```tsx
// ✅ Icon-only buttons MUST have aria-label
<IconButton aria-label="Close dialog">
  <XIcon />
</IconButton>

// ✅ Or use visually hidden text
<IconButton>
  <XIcon aria-hidden="true" />
  <span className="sr-only">Close dialog</span>
</IconButton>
```

---

## Screen Reader Support

### Hidden Content

```tsx
// Visually hidden but announced by screen readers
<span className="sr-only">Additional context for screen readers</span>

// Hidden from screen readers (decorative)
<Icon aria-hidden="true" />
<img src="decorative.png" alt="" role="presentation" />
```

### Headings

```tsx
// ✅ Proper heading hierarchy (no skipping levels)
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>

// ❌ Bad: Skipping heading levels
<h1>Page Title</h1>
  <h4>Subsection</h4>  {/* Skipped h2, h3 */}
```

### Form Labels

```tsx
// ✅ Explicit association
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ✅ Implicit (wrapping)
<label>
  Email
  <input type="email" />
</label>

// ✅ Error messages linked
<input id="email" aria-describedby="email-error" aria-invalid="true" />
<span id="email-error" role="alert">Invalid email format</span>
```

---

## Reduced Motion

Support users who prefer reduced motion:

```css
/* In globals.css or component styles */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```tsx
// In React components
import { useReducedMotion } from "@/hooks";

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ 
        duration: prefersReducedMotion ? 0 : 0.3 
      }}
    />
  );
}
```

---

## Component Accessibility Checklist

Before shipping any component, verify:

### Keyboard
- [ ] All interactive elements are focusable
- [ ] Focus order follows visual order
- [ ] Focus is visible (outline or ring)
- [ ] Enter/Space activates buttons
- [ ] Escape closes overlays
- [ ] Arrow keys work for composite widgets

### Screen Readers
- [ ] Component has appropriate role
- [ ] State changes are announced (aria-live)
- [ ] Labels are descriptive
- [ ] Headings follow hierarchy
- [ ] Images have alt text (or are hidden)

### Visual
- [ ] Color contrast meets minimums
- [ ] Information not conveyed by color alone
- [ ] Focus indicators are visible
- [ ] Text can be resized to 200%

### Motion
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No content flashes more than 3 times/second

---

## Testing Tools

### Automated

```bash
# axe-core (browser extension)
# - Chrome: axe DevTools
# - Firefox: axe DevTools

# ESLint plugin
npm install --save-dev eslint-plugin-jsx-a11y

# Lighthouse (built into Chrome DevTools)
# Audits → Accessibility
```

### Manual Testing

1. **Keyboard-only navigation** - Unplug mouse, use only keyboard
2. **Screen reader testing** - NVDA (Windows), VoiceOver (Mac), JAWS
3. **Zoom to 200%** - Ensure content remains usable
4. **High contrast mode** - Test on Windows High Contrast

---

## DO NOT

- ❌ Use `tabindex` values greater than 0
- ❌ Remove focus outlines without replacement
- ❌ Use color alone to convey information
- ❌ Auto-play audio or video
- ❌ Create keyboard traps (except modals)
- ❌ Use `aria-label` on non-interactive elements
- ❌ Hide content from screen readers without reason
