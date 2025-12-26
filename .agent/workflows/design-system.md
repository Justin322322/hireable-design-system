---
description: How to work with the design system - find tokens, components, patterns, and documentation
---

# Design System Workflow

Quick reference for navigating and using the Hireable Design System.

---

## 🎨 Finding Design Tokens

**Location**: `src/app/globals.css`

```bash
# View all tokens
view src/app/globals.css

# Search for specific token
grep "button-primary" src/app/globals.css
grep "color-blue" src/app/globals.css
```

### Token Layers

| Layer         | Pattern                           | Example                  |
| ------------- | --------------------------------- | ------------------------ |
| **Primitive** | `--color-{palette}-{scale}`       | `--color-blue-500`       |
| **Semantic**  | `--{purpose}-{variant}`           | `--brand-primary`        |
| **Component** | `--{component}-{variant}-{state}` | `--button-primary-hover` |

---

## 🧩 Finding Components

**Location**: `src/components/ui/`

### Import from barrel (required)

```tsx
import { Button, Input, Card } from "@/components/ui";
```

### List all UI components

```bash
ls src/components/ui/
```

### Core components:

- `button.tsx` - Button with variants
- `input.tsx` - Input with sizes
- `card.tsx` - Card container
- `badge.tsx` - Status badges
- `dialog.tsx` - Modal dialogs
- `drawer.tsx` - Slide-out panels

### View component implementation

```bash
view src/components/ui/button.tsx
```

---

## 📐 Finding Patterns

**Location**: `src/patterns/`

Patterns are composite components that combine UI primitives.

```bash
ls src/patterns/
```

---

## 🪝 Finding Hooks

**Location**: `src/hooks/`

### Import from barrel (required)

```tsx
import { useDisclosure, useToggle, useToast } from "@/hooks";
```

| Hook            | Purpose                 |
| --------------- | ----------------------- |
| `useDisclosure` | Modal/drawer open state |
| `useToggle`     | Boolean toggle state    |
| `useToast`      | Toast notifications     |

---

## 📖 Component Demo Pages

**Location**: `src/components/demos/` (demo implementations)
**Route**: `src/app/components/[slug]/page.tsx` (dynamic routing)
**Registry**: `src/config/component-registry.ts`

Each component has a demo page at `/components/{component-name}`:

- `/components/button`
- `/components/input`
- `/components/card`

---

## 🔍 Common Tasks

### Add a new design token

1. Open `src/app/globals.css`
2. Add primitive in Layer 1 (`:root` section)
3. Reference in Layer 2 (semantic)
4. Use in components via Layer 3 (component tokens)

### Find button colors

```bash
grep "button-" src/app/globals.css
```

### Check what variants a component supports

```bash
# Look for the variants object in the component
grep -A20 "variants:" src/components/ui/button.tsx
```

---

## 📁 Key Files Reference

| What                   | Where                              |
| ---------------------- | ---------------------------------- |
| **All Design Tokens**  | `src/app/globals.css`              |
| **UI Components**      | `src/components/ui/*.tsx`          |
| **Barrel Export**      | `src/components/ui/index.ts`       |
| **Component Demos**    | `src/components/demos/*-demo.tsx`  |
| **Demo Registry**      | `src/config/component-registry.ts` |
| **Sidebar Navigation** | `src/config/docs.ts`               |
| **Patterns**           | `src/patterns/*.tsx`               |
| **Hooks**              | `src/hooks/*.ts`                   |
| **Hooks Barrel**       | `src/hooks/index.ts`               |
| **Layout**             | `src/components/layout/*.tsx`      |
| **Documentation**      | `DESIGN_SYSTEM_OUTPUT.md`          |
| **Architecture**       | `.agent/workflows/architecture.md` |
