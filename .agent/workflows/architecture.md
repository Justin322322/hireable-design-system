---
description: Architecture overview of the Hireable Design System with current problems and improvement opportunities
---

# Design System Architecture

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + CSS Variables
- **Components**: Radix UI primitives + CVA (class-variance-authority)
- **Package Manager**: Bun

---

## Project Structure

```
hireable-design-systems/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── globals.css             # ⭐ Design Tokens (SOURCE OF TRUTH)
│   │   ├── components/[slug]/      # Dynamic component demo routes
│   │   ├── patterns/               # Pattern demo pages
│   │   └── resources/              # Resource pages
│   │
│   ├── components/
│   │   ├── ui/                     # ⭐ UI Primitives
│   │   │   └── index.ts            # Barrel exports
│   │   ├── demos/                  # Component demo implementations
│   │   ├── layout/                 # Layout components
│   │   └── docs/                   # Documentation components
│   │
│   ├── config/
│   │   ├── docs.ts                 # Sidebar navigation config
│   │   └── component-registry.ts   # Dynamic component registry
│   │
│   ├── hooks/                      # Custom React hooks
│   │   └── index.ts                # Barrel exports
│   ├── patterns/                   # Composite patterns
│   ├── data/                       # Static data & mock APIs
│   └── lib/                        # Utilities (cn, etc.)
│
└── .agent/
    └── workflows/                  # AI agent workflows
```

---

## Token Architecture (3-Layer System)

```css
/* LAYER 1: Primitives → Raw color values */
--color-blue-500: oklch(0.65 0.19 230);

/* LAYER 2: Semantic → Intent-based references */
--brand-primary: var(--color-blue-500);

/* LAYER 3: Component → Component-specific */
--button-primary-default: var(--brand-primary);
```

**File**: `src/app/globals.css`

---

## Architecture Improvements (Completed Dec 26, 2025)

### 1. ✅ Duplicate Component Locations - RESOLVED

Components are now properly separated:

| Location                     | Purpose                |
| ---------------------------- | ---------------------- |
| `src/components/ui/*.tsx`    | Actual implementations |
| `src/components/demos/*.tsx` | Demo implementations   |

### 2. ✅ Deep Folder Nesting - RESOLVED

Now using dynamic routing:

```
src/app/components/[slug]/page.tsx  # Single dynamic route
src/components/demos/*.tsx           # All demos in one folder
src/config/component-registry.ts     # Maps slugs to demos
```

### 3. ✅ Component Barrel Exports - RESOLVED

Created `src/components/ui/index.ts`:

```tsx
import { Button, Input, Card } from "@/components/ui";
```

### 4. ✅ Redundant Documentation - RESOLVED

`DESIGN_SYSTEM_OUTPUT.md` now references source files instead of duplicating code.

---

## Quick Reference

| Item               | Location                             |
| ------------------ | ------------------------------------ |
| Design Tokens      | `src/app/globals.css`                |
| UI Components      | `src/components/ui/`                 |
| Barrel Export      | `src/components/ui/index.ts`         |
| Component Demos    | `src/components/demos/`              |
| Component Registry | `src/config/component-registry.ts`   |
| Hooks              | `src/hooks/`                         |
| Patterns           | `src/patterns/`                      |
| Demo Routes        | `src/app/components/[slug]/page.tsx` |

---

## Improvement Roadmap (Completed ✅)

- [x] Create barrel exports (`src/components/ui/index.ts`)
- [x] Flatten demo page structure (dynamic `[slug]` routing)
- [x] Update `DESIGN_SYSTEM_OUTPUT.md` to reference (not duplicate)
- [x] Migrate all imports to use barrel exports
