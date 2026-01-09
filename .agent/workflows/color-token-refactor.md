---
description: Rules for refactoring color tokens to follow single source of truth with semantic and component-level tokens
---

# Color Token Refactor Rules

## Role

Senior design systems engineer working on a scalable design system (Material-inspired).

## Task

Refactor existing color tokens to follow a single source of truth with semantic and component-level tokens.

---

## Rules (Must Follow Strictly)

1. **Single Primitive Per Hex Value**: Create one and only one base/primitive color token per hex value. Do not duplicate hex values across different base tokens.

2. **Semantic Layer Required**: Introduce semantic tokens for use cases such as background, text, border, and state.

3. **Component-Specific Tokens**: Introduce component-specific tokens (e.g., buttons) that reference semantic or base tokens.

4. **No Direct Primitive Usage**: Never use primitive tokens directly inside components. Components must reference semantic or component tokens.

5. **Reference-Only Higher Levels**: All higher-level tokens must reference lower-level tokens, not redefine values.

6. **Hierarchical Naming**: Naming must be hierarchical and scalable, not flat. Avoid names like `buttonColorPrimary`. Use `button.primary.bg` pattern instead.

---

## Token Layers to Implement

### Layer 1: Primitive Tokens

Actual color values stored once.

```css
/* Pattern: --color-{palette}-{scale} */
--color-blue-500: oklch(0.65 0.19 230); /* #00A7F8 */
--color-blue-600: oklch(0.52 0.15 230); /* #0085C6 */
--color-red-500: oklch(0.58 0.22 25); /* #EB5757 */
--color-green-500: oklch(0.64 0.17 145); /* #27AE60 */
```

### Layer 2: Semantic Tokens

Intent-based usage referencing primitives.

```css
/* Pattern: --{purpose}-{variant} */
--bg-primary: var(--color-blue-500);
--bg-secondary: var(--color-blue-100);
--text-primary: var(--color-neutral-900);
--text-on-primary: var(--color-white);
--border-default: var(--color-neutral-200);
--bg-primary-hover: var(--color-blue-600);
--border-focused: var(--color-blue-500);
```

### Layer 3: Component Tokens

Component-specific needs referencing semantic or base tokens.

```css
/* Pattern: --{component}-{variant}-{property} */
--button-primary-bg: var(--bg-primary);
--button-primary-text: var(--text-on-primary);
--button-primary-bg-hover: var(--bg-primary-hover);
--input-border: var(--border-default);
--input-border-focus: var(--border-focused);
```

---

## Color Contrast Requirements (WCAG 2.1 AA)

All color pairings must meet minimum contrast ratios for accessibility:

| Element Type | Minimum Ratio | Example Pairings |
|--------------|---------------|------------------|
| Normal text (< 18px) | **4.5:1** | Body text on backgrounds |
| Large text (≥ 18px or 14px bold) | **3:1** | Headings on backgrounds |
| UI components & graphics | **3:1** | Buttons, icons, borders |
| Disabled states | No requirement | Intentionally low contrast |

### Testing Contrast

```bash
# Browser DevTools
# Chrome/Edge: Inspect element → Styles → Click color swatch → Shows contrast ratio

# Online tools
# - WebAIM: https://webaim.org/resources/contrastchecker/
# - Contrast Ratio: https://contrast-ratio.com/

# CLI tools
# - contrast-ratio npm package
```

### Verified Contrast Pairings

When defining tokens, verify these critical pairings:

```css
/* ✅ Text on white background - must be ≥ 4.5:1 */
--text-base: var(--color-neutral-950);     /* ~18:1 on white */
--text-muted: var(--color-neutral-650);    /* ~4.5:1 on white */
--text-subtle: var(--color-neutral-700);   /* Verify ≥ 4.5:1 */

/* ✅ Text on colored backgrounds */
--button-primary-foreground: var(--color-white);  /* On blue-500: ~4.5:1 */
--button-destructive-foreground: var(--color-white);  /* On red-500: verify */

/* ✅ Interactive element borders - must be ≥ 3:1 */
--border-base: var(--color-neutral-300);   /* 3:1 on white */
--border-focus: var(--color-blue-500);     /* High visibility */
```

### Contrast Checklist for New Tokens

- [ ] Text on `--bg-base` meets 4.5:1
- [ ] Text on `--bg-muted` meets 4.5:1
- [ ] Text on primary/brand colors meets 4.5:1
- [ ] Border colors meet 3:1 against adjacent colors
- [ ] Focus indicators meet 3:1 against background
- [ ] Error/success/warning text meets 4.5:1

### Common Contrast Failures to Avoid

```css
/* ❌ Light gray text on white - often fails */
--text-placeholder: var(--color-neutral-400);  /* May be < 4.5:1 */

/* ✅ Use darker shade for placeholder */
--text-placeholder: var(--color-neutral-500);  /* Verify ≥ 4.5:1 */

/* ❌ Colored text on colored background - tricky */
--text-warning: var(--color-amber-400);  /* On white: may fail */

/* ✅ Use darker shade for warning text */
--text-warning: var(--color-amber-600);  /* Better contrast */
```

---

## Dark Mode Token Mapping

Dark mode requires remapping semantic tokens to different primitives while keeping component tokens unchanged.

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│ Component Layer (unchanged between modes)                   │
│ --button-primary-bg: var(--bg-primary)                      │
├─────────────────────────────────────────────────────────────┤
│ Semantic Layer (remapped per mode)                          │
│ Light: --bg-primary: var(--color-blue-500)                  │
│ Dark:  --bg-primary: var(--color-blue-400)                  │
├─────────────────────────────────────────────────────────────┤
│ Primitive Layer (both light and dark scales available)      │
│ --color-blue-400: oklch(0.72 0.16 230)                      │
│ --color-blue-500: oklch(0.65 0.19 230)                      │
└─────────────────────────────────────────────────────────────┘
```

### Implementation Pattern

```css
/* ═══════════════════════════════════════════
   PRIMITIVES (always available, mode-agnostic)
   ═══════════════════════════════════════════ */
:root {
  /* Full color scales for both modes */
  --color-neutral-50: oklch(0.985 0 0);
  --color-neutral-100: oklch(0.97 0 0);
  --color-neutral-800: oklch(0.269 0 0);
  --color-neutral-900: oklch(0.205 0 0);
  --color-neutral-950: oklch(0.145 0 0);
  
  --color-blue-400: oklch(0.72 0.16 230);
  --color-blue-500: oklch(0.65 0.19 230);
  --color-blue-600: oklch(0.52 0.15 230);
}

/* ═══════════════════════════════════════════
   SEMANTIC TOKENS - LIGHT MODE (default)
   ═══════════════════════════════════════════ */
:root {
  /* Backgrounds */
  --bg-base: var(--color-white);
  --bg-muted: var(--color-neutral-100);
  --bg-elevated: var(--color-neutral-50);
  --bg-inverse: var(--color-neutral-900);
  
  /* Text */
  --text-base: var(--color-neutral-950);
  --text-muted: var(--color-neutral-650);
  --text-inverse: var(--color-white);
  
  /* Borders */
  --border-base: var(--color-neutral-300);
  --border-muted: var(--color-neutral-200);
  
  /* Brand */
  --brand-primary: var(--color-blue-500);
  --brand-primary-hover: var(--color-blue-600);
}

/* ═══════════════════════════════════════════
   SEMANTIC TOKENS - DARK MODE
   ═══════════════════════════════════════════ */
.dark {
  /* Backgrounds - inverted */
  --bg-base: var(--color-neutral-900);
  --bg-muted: var(--color-neutral-800);
  --bg-elevated: var(--color-neutral-850);
  --bg-inverse: var(--color-white);
  
  /* Text - inverted */
  --text-base: var(--color-neutral-50);
  --text-muted: var(--color-neutral-400);
  --text-inverse: var(--color-neutral-900);
  
  /* Borders - adjusted for dark backgrounds */
  --border-base: var(--color-neutral-700);
  --border-muted: var(--color-neutral-800);
  
  /* Brand - lighter for dark backgrounds */
  --brand-primary: var(--color-blue-400);
  --brand-primary-hover: var(--color-blue-500);
}
```

### Dark Mode Contrast Verification

Dark mode often requires different color choices to maintain contrast:

```css
/* Light mode: dark text on light background */
:root {
  --text-base: var(--color-neutral-950);  /* On white: ~18:1 ✅ */
}

/* Dark mode: light text on dark background */
.dark {
  --text-base: var(--color-neutral-50);   /* On neutral-900: ~15:1 ✅ */
}

/* Light mode: blue-500 on white */
:root {
  --brand-primary: var(--color-blue-500);  /* On white: ~4.5:1 ✅ */
}

/* Dark mode: blue-400 (lighter) on dark background */
.dark {
  --brand-primary: var(--color-blue-400);  /* On neutral-900: ~5:1 ✅ */
}
```

### Dark Mode Checklist

- [ ] All text colors meet 4.5:1 on dark backgrounds
- [ ] Brand colors adjusted for dark mode visibility
- [ ] Borders visible on dark backgrounds (≥ 3:1)
- [ ] Focus indicators visible on dark backgrounds
- [ ] Status colors (success, warning, error) adjusted
- [ ] Shadows/elevation work on dark backgrounds

### Implementing Dark Mode Toggle

```tsx
// Use next-themes or similar
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </Button>
  );
}
```

```css
/* Tailwind dark mode variant */
@custom-variant dark (&:is(.dark *));
```

---

## Expected Output

### 1. Refactored Token Structure

CSS variables following the three-layer hierarchy.

### 2. Reference Examples

```css
/* Primitive (single source) */
--color-blue-500: oklch(0.65 0.19 230);

/* Semantic (references primitive) */
--bg-primary: var(--color-blue-500);

/* Component (references semantic) */
--button-primary-bg: var(--bg-primary);
```

### 3. Theming Support

```css
/* Light mode */
:root {
  --bg-primary: var(--color-blue-500);
  --text-primary: var(--color-neutral-900);
}

/* Dark mode - same tokens, different primitives */
.dark {
  --bg-primary: var(--color-blue-400);
  --text-primary: var(--color-neutral-100);
}
```

### 4. Why This Structure Works

- **No Duplication**: Each hex value exists exactly once in primitives
- **Scalable**: Adding new components only requires component tokens
- **Themeable**: Dark mode/brand changes only modify semantic → primitive mappings
- **Maintainable**: Changing a brand color updates one primitive, cascades everywhere
- **Accessible**: Contrast verified at the semantic layer, inherited by all components

---

## DO NOT

- ❌ Collapse everything into a single token
- ❌ Create multiple tokens with the same hex value
- ❌ Skip semantic intent layers
- ❌ Use flat naming like `buttonColorPrimary`
- ❌ Reference raw hex/oklch values in components
- ❌ Use color pairings that fail WCAG AA contrast
- ❌ Assume light mode colors work in dark mode
- ❌ Define dark mode tokens without verifying contrast
