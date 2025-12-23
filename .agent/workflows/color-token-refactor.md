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

---

## DO NOT

- ❌ Collapse everything into a single token
- ❌ Create multiple tokens with the same hex value
- ❌ Skip semantic intent layers
- ❌ Use flat naming like `buttonColorPrimary`
- ❌ Reference raw hex/oklch values in components
