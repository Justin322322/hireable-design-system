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

## Checklist Before Committing

- [ ] Component created in `src/components/ui/`
- [ ] Exported from barrel `src/components/ui/index.ts`
- [ ] Demo created in `src/components/demos/`
- [ ] Registered in `src/config/component-registry.ts`
- [ ] Added to sidebar in `src/config/docs.ts`
- [ ] Reference added to `DESIGN_SYSTEM_OUTPUT.md`
- [ ] Uses design tokens (no hardcoded colors)
- [ ] Uses barrel imports
