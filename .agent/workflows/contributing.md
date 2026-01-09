---
description: Rules for contributing new components, demos, and documentation to the design system
---

# Contributing Guidelines

Follow these rules when adding or modifying components in the Hireable Design System.

---

## Core Principles

1. **Never duplicate code in documentation** - Always reference source files via links
2. **Use barrel exports** - Import from `@/components/ui`, not individual files
3. **Single source of truth** - Design tokens live in `globals.css` only
4. **Demos are separate from components** - UI primitives and demos are in different folders

---

## Adding a New Component

### Step 1: Create the Component

Create the component in `src/components/ui/{component-name}.tsx`:

```tsx
// src/components/ui/my-component.tsx
import { cn } from "@/lib/utils";

export interface MyComponentProps {
  // props
}

export function MyComponent({ className, ...props }: MyComponentProps) {
  return <div className={cn("base-styles", className)} {...props} />;
}
```

### Step 2: Export from Barrel

Add export to `src/components/ui/index.ts`:

```ts
export { MyComponent } from "./my-component";
```

### Step 3: Create Demo Component

Create demo in `src/components/demos/{component-name}-demo.tsx`:

```tsx
// src/components/demos/my-component-demo.tsx
"use client";

import { MyComponent } from "@/components/ui";

export default function MyComponentDemo() {
  return <div className="space-y-8">{/* Demo sections */}</div>;
}
```

### Step 4: Register in Component Registry

Add to `src/config/component-registry.ts`:

```ts
import MyComponentDemo from "@/components/demos/my-component-demo";

export const componentRegistry = {
  // ... existing entries
  "my-component": MyComponentDemo,
};
```

### Step 5: Add to Sidebar Navigation

Add entry to `src/config/docs.ts` in the appropriate category:

```ts
{
  title: "My Component",
  href: "/components/my-component",
}
```

### Step 6: Update Documentation

Add reference to `DESIGN_SYSTEM_OUTPUT.md`:

```markdown
| My Component | [my-component.tsx](src/components/ui/my-component.tsx) | Description |
```

> [!CAUTION]
> Never paste component code into documentation. Link to the source file only.

---

## Adding a New Pattern

Patterns are composite components that combine multiple UI primitives.

1. Create in `src/patterns/{pattern-name}.tsx`
2. Add reference to `DESIGN_SYSTEM_OUTPUT.md` patterns table
3. Create demo if needed in `src/components/demos/`

---

## Adding a New Hook

1. Create in `src/hooks/use-{hook-name}.ts`
2. Export from `src/hooks/index.ts`
3. Add reference to `DESIGN_SYSTEM_OUTPUT.md` hooks table

---

## File Naming Conventions

| Type           | Pattern           | Example           |
| -------------- | ----------------- | ----------------- |
| UI Component   | `{name}.tsx`      | `button.tsx`      |
| Demo Component | `{name}-demo.tsx` | `button-demo.tsx` |
| Hook           | `use-{name}.ts`   | `use-toggle.ts`   |
| Pattern        | `{name}.tsx`      | `form-field.tsx`  |

---

## Import Rules

### ✅ Correct

```tsx
import { Button, Input, Card } from "@/components/ui";
import { useDisclosure, useToggle } from "@/hooks";
import { cn } from "@/lib/utils";
```

### ❌ Incorrect

```tsx
import { Button } from "@/components/ui/button";
import { useDisclosure } from "@/hooks/use-disclosure";
```

---

## Design Token Rules

1. **Primitives** → `--color-{palette}-{scale}` (e.g., `--color-blue-500`)
2. **Semantic** → `--{purpose}-{variant}` (e.g., `--brand-primary`)
3. **Component** → `--{component}-{variant}-{state}` (e.g., `--button-primary-default`)

All tokens are defined in `src/app/globals.css`.

> [!IMPORTANT]
> Never hardcode colors. Always use CSS variables from the token system.

---

## Component States

Every interactive component should support these states where applicable:

| State | Token Pattern | Visual Indicator |
|-------|---------------|------------------|
| Default | `--{component}-{variant}-default` | Base appearance |
| Hover | `--{component}-{variant}-hover` | Subtle background/color change |
| Focus | `--border-focused` / `ring` | Focus ring or border |
| Active/Pressed | `--{component}-{variant}-active` | Pressed appearance |
| Disabled | `--{component}-{variant}-disabled` | Reduced opacity, muted colors |
| Loading | — | Spinner or skeleton |
| Error | `--border-error` | Red border/text |
| Success | `--status-success` | Green indicator |

### State Implementation Example

```tsx
const buttonVariants = cva("...", {
  variants: {
    variant: {
      primary: [
        "bg-button-primary-default text-button-primary-foreground",
        "hover:bg-button-primary-hover",
        "active:bg-button-primary-active",
        "focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:bg-button-primary-disabled disabled:text-button-primary-disabled-foreground",
      ].join(" "),
    },
  },
});
```

---

## Props Documentation Template

Document all component props using TypeScript interfaces with JSDoc comments:

```tsx
/**
 * Button component for user actions.
 *
 * @example
 * <Button variant="primary" size="lg">Click me</Button>
 *
 * @see {@link accessibility.md} for keyboard and screen reader requirements
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "tertiary" | "destructive";

  /**
   * Size of the button
   * @default "default"
   */
  size?: "sm" | "default" | "lg" | "icon";

  /**
   * Shows loading spinner and disables interaction
   * @default false
   */
  isLoading?: boolean;

  /**
   * Icon to display before button text
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon to display after button text
   */
  rightIcon?: React.ReactNode;
}
```

### Required Props Documentation

Every component interface should include:

1. **Extends native HTML attributes** where applicable
2. **JSDoc `@example`** showing basic usage
3. **Default values** documented with `@default`
4. **Required props** clearly marked (no `?`)

---

## Accessibility Checklist

Before shipping any component, verify accessibility requirements from `accessibility.md`:

### Keyboard Navigation

- [ ] All interactive elements are focusable (`tabIndex={0}` or native focusable)
- [ ] Focus order follows visual/logical order
- [ ] Focus indicator is visible (ring or outline)
- [ ] `Enter`/`Space` activates buttons and controls
- [ ] `Escape` closes modals, drawers, dropdowns
- [ ] Arrow keys navigate composite widgets (menus, tabs, radio groups)

### Screen Reader Support

- [ ] Component has appropriate `role` attribute
- [ ] Buttons have accessible labels (`aria-label` for icon-only)
- [ ] State changes are announced (`aria-live`, `aria-expanded`, `aria-selected`)
- [ ] Form fields have associated labels (`htmlFor`/`id` or wrapping `<label>`)
- [ ] Error messages linked with `aria-describedby`
- [ ] Decorative images have `aria-hidden="true"` or empty `alt=""`

### Visual Accessibility

- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)
- [ ] Information not conveyed by color alone
- [ ] Focus indicators visible on all backgrounds
- [ ] Text remains readable at 200% zoom

### Motion

- [ ] Animations respect `prefers-reduced-motion`
- [ ] No content flashes more than 3 times/second

### Required ARIA by Component Type

| Component | Required ARIA |
|-----------|---------------|
| Button (icon-only) | `aria-label="Description"` |
| Modal/Dialog | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Drawer | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Dropdown | `aria-haspopup="menu"`, `aria-expanded` |
| Menu item | `role="menuitem"` |
| Tabs | `role="tablist"`, tabs: `role="tab"`, `aria-selected` |
| Tab panel | `role="tabpanel"`, `aria-labelledby` |
| Alert/Toast | `role="alert"` or `role="status"` |
| Progress | `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |
| Switch | `role="switch"`, `aria-checked` |
| Form field (error) | `aria-invalid="true"`, `aria-describedby="error-id"` |

---

## Checklist Before Committing

### File Structure

- [ ] Component created in `src/components/ui/`
- [ ] Exported from barrel `src/components/ui/index.ts`
- [ ] Demo created in `src/components/demos/`
- [ ] Registered in `src/config/component-registry.ts`
- [ ] Added to sidebar in `src/config/docs.ts`
- [ ] Reference added to `DESIGN_SYSTEM_OUTPUT.md`

### Code Quality

- [ ] Uses design tokens (no hardcoded colors)
- [ ] Uses barrel imports
- [ ] Props documented with TypeScript + JSDoc
- [ ] All states implemented (hover, focus, disabled, etc.)

### Accessibility (see checklist above)

- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Color contrast passes
- [ ] Reduced motion supported (if animated)

### Testing

- [ ] Component renders without errors
- [ ] All variants/sizes render correctly
- [ ] Demo page shows all use cases
- [ ] Tested at multiple breakpoints