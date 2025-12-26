# Design System Implementation

This document provides an overview of the design system with links to source files.
**Last Updated**: December 26, 2025

> [!IMPORTANT]
> Always import from barrel exports when available. Never duplicate component code—this document references source files only.

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── globals.css               # Design tokens (SOURCE OF TRUTH)
│   └── components/[slug]/        # Dynamic component demo routes
├── components/
│   ├── ui/                       # Core UI primitives
│   │   └── index.ts              # Barrel exports
│   ├── demos/                    # Component demo implementations
│   ├── layout/                   # Layout components (sidebar, search)
│   └── docs/                     # Documentation components
├── patterns/                     # Composite patterns
├── hooks/                        # Custom React hooks
│   └── index.ts                  # Barrel exports
├── config/
│   ├── docs.ts                   # Sidebar navigation config
│   └── component-registry.ts     # Dynamic component registry
└── lib/
    └── utils.ts                  # cn() utility
```

---

## 🎨 Design Tokens

**Source**: [globals.css](src/app/globals.css)

### Token Layers (3-Tier System)

| Layer          | Pattern                           | Example                    |
| -------------- | --------------------------------- | -------------------------- |
| **Primitives** | `--color-{palette}-{scale}`       | `--color-blue-500`         |
| **Semantic**   | `--{purpose}-{variant}`           | `--brand-primary`          |
| **Component**  | `--{component}-{variant}-{state}` | `--button-primary-default` |

---

## 🧩 Components

**Barrel Export**: `import { Button, Input, Card } from "@/components/ui"`

### Actions

| Component | Source                                     | Description                                               |
| --------- | ------------------------------------------ | --------------------------------------------------------- |
| Button    | [button.tsx](src/components/ui/button.tsx) | Primary, secondary, tertiary, destructive, ghost variants |
| Toggle    | [toggle.tsx](src/components/ui/toggle.tsx) | Toggle button                                             |

### Forms

| Component   | Source                                               | Description         |
| ----------- | ---------------------------------------------------- | ------------------- |
| Input       | [input.tsx](src/components/ui/input.tsx)             | Text input field    |
| Checkbox    | [checkbox.tsx](src/components/ui/checkbox.tsx)       | Checkbox with label |
| Radio Group | [radio-group.tsx](src/components/ui/radio-group.tsx) | Radio button group  |
| Select      | [select.tsx](src/components/ui/select.tsx)           | Dropdown select     |
| Switch      | [switch.tsx](src/components/ui/switch.tsx)           | Toggle switch       |
| Label       | [label.tsx](src/components/ui/label.tsx)             | Form labels         |

### Display

| Component | Source                                           | Description                   |
| --------- | ------------------------------------------------ | ----------------------------- |
| Avatar    | [avatar.tsx](src/components/ui/avatar.tsx)       | User avatars with fallback    |
| Badge     | [badge.tsx](src/components/ui/badge.tsx)         | Status badges                 |
| Card      | [card.tsx](src/components/ui/card.tsx)           | Container with header/content |
| Icon      | [icon.tsx](src/components/ui/icon.tsx)           | Icon component wrapper        |
| Separator | [separator.tsx](src/components/ui/separator.tsx) | Visual divider                |
| Text      | [text.tsx](src/components/ui/text.tsx)           | Polymorphic typography        |
| Stack     | [stack.tsx](src/components/ui/stack.tsx)         | Flexbox layout primitive      |

### Feedback

| Component | Source                                       | Description         |
| --------- | -------------------------------------------- | ------------------- |
| Dialog    | [dialog.tsx](src/components/ui/dialog.tsx)   | Modal dialog        |
| Drawer    | [drawer.tsx](src/components/ui/drawer.tsx)   | Slide-out panel     |
| Toaster   | [toaster.tsx](src/components/ui/toaster.tsx) | Toast notifications |

### Navigation

| Component       | Source                                                       | Description         |
| --------------- | ------------------------------------------------------------ | ------------------- |
| Breadcrumb      | [breadcrumb.tsx](src/components/ui/breadcrumb.tsx)           | Breadcrumb trail    |
| Navigation Menu | [navigation-menu.tsx](src/components/ui/navigation-menu.tsx) | Nav menu system     |
| Tabs            | [tabs.tsx](src/components/ui/tabs.tsx)                       | Tab navigation      |
| App Sidebar     | [app-sidebar.tsx](src/components/ui/app-sidebar.tsx)         | Application sidebar |

### Utility

| Component       | Source                                                       | Description          |
| --------------- | ------------------------------------------------------------ | -------------------- |
| Visually Hidden | [visually-hidden.tsx](src/components/ui/visually-hidden.tsx) | A11y hidden content  |
| Worktrait Tag   | [worktrait-tag.tsx](src/components/ui/worktrait-tag.tsx)     | Custom tag component |

---

## 🧱 Patterns

| Pattern     | Source                                            | Description                    |
| ----------- | ------------------------------------------------- | ------------------------------ |
| FormField   | [form-field.tsx](src/patterns/form-field.tsx)     | Label + Input + Error + Helper |
| ModalLayout | [modal-layout.tsx](src/patterns/modal-layout.tsx) | Dialog composition             |

---

## 🧠 Hooks

**Barrel Export**: `import { useDisclosure, useToggle, useToast } from "@/hooks"`

| Hook          | Source                                           | Purpose                 |
| ------------- | ------------------------------------------------ | ----------------------- |
| useDisclosure | [use-disclosure.ts](src/hooks/use-disclosure.ts) | Modal/drawer open state |
| useToggle     | [use-toggle.ts](src/hooks/use-toggle.ts)         | Boolean toggle state    |
| useToast      | [use-toast.ts](src/hooks/use-toast.ts)           | Toast notifications     |

---

## 🎭 Component Demos

All demos are in `src/components/demos/` and registered in [component-registry.ts](src/config/component-registry.ts).

| Demo              | Source                                                                    | Route                         |
| ----------------- | ------------------------------------------------------------------------- | ----------------------------- |
| Avatar Demo       | [avatar-demo.tsx](src/components/demos/avatar-demo.tsx)                   | `/components/avatar`          |
| Badge Demo        | [badge-demo.tsx](src/components/demos/badge-demo.tsx)                     | `/components/badge`           |
| Breadcrumb Demo   | [breadcrumb-demo.tsx](src/components/demos/breadcrumb-demo.tsx)           | `/components/breadcrumb`      |
| Button Demo       | [button-demo.tsx](src/components/demos/button-demo.tsx)                   | `/components/button`          |
| Card Demo         | [card-demo.tsx](src/components/demos/card-demo.tsx)                       | `/components/card`            |
| Chart Demo        | [chart-demo.tsx](src/components/demos/chart-demo.tsx)                     | `/components/chart`           |
| Checkbox Demo     | [checkbox-demo.tsx](src/components/demos/checkbox-demo.tsx)               | `/components/checkbox`        |
| Dialog Demo       | [dialog-demo.tsx](src/components/demos/dialog-demo.tsx)                   | `/components/dialog`          |
| Drawer Demo       | [drawer-demo.tsx](src/components/demos/drawer-demo.tsx)                   | `/components/drawer`          |
| Dropdown Demo     | [dropdown-demo.tsx](src/components/demos/dropdown-demo.tsx)               | `/components/dropdown`        |
| Input Demo        | [input-demo.tsx](src/components/demos/input-demo.tsx)                     | `/components/input`           |
| Kanban Demo       | [kanban-demo.tsx](src/components/demos/kanban-demo.tsx)                   | `/components/kanban`          |
| Modal Demo        | [modal-demo.tsx](src/components/demos/modal-demo.tsx)                     | `/components/modal`           |
| Navigation Demo   | [navigation-menu-demo.tsx](src/components/demos/navigation-menu-demo.tsx) | `/components/navigation-menu` |
| Radio Button Demo | [radio-button-demo.tsx](src/components/demos/radio-button-demo.tsx)       | `/components/radio-button`    |
| Separator Demo    | [separator-demo.tsx](src/components/demos/separator-demo.tsx)             | `/components/separator`       |
| Sidebar Demo      | [sidebar-demo.tsx](src/components/demos/sidebar-demo.tsx)                 | `/components/sidebar`         |
| Tabs Demo         | [tabs-demo.tsx](src/components/demos/tabs-demo.tsx)                       | `/components/tabs`            |
| Toast Demo        | [toast-demo.tsx](src/components/demos/toast-demo.tsx)                     | `/components/toast`           |
| Toggle Demo       | [toggle-demo.tsx](src/components/demos/toggle-demo.tsx)                   | `/components/toggle`          |
| Description Box   | [description-box-demo.tsx](src/components/demos/description-box-demo.tsx) | `/components/description-box` |
| Field Notes       | [field-notes-demo.tsx](src/components/demos/field-notes-demo.tsx)         | `/components/field-notes`     |

---

## 📘 Usage Examples

> [!TIP]
> For live examples, visit the component demo pages at `/components/{name}`.

### Button

```tsx
import { Button } from "@/components/ui";

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="lg">Large</Button>
<Button size="md">Medium</Button>
<Button size="sm">Small</Button>
```

### Input

```tsx
import { Input } from "@/components/ui";

<Input placeholder="Enter email..." />
<Input size="lg" placeholder="Large input" />
```

### Stack

```tsx
import { Stack, Button } from "@/components/ui";

<Stack direction="row" gap={4} align="center">
  <Button variant="tertiary">Cancel</Button>
  <Button>Save</Button>
</Stack>;
```

### FormField Pattern

```tsx
import { FormField } from "@/patterns/form-field";
import { Input } from "@/components/ui";

<FormField label="Email" helperText="We'll never share your email.">
  <Input type="email" placeholder="m@example.com" />
</FormField>

// With error
<FormField label="Username" error="Username is already taken.">
  <Input placeholder="johndoe" />
</FormField>
```

---

## 🔧 Utilities

**Source**: [utils.ts](src/lib/utils.ts)

```ts
import { cn } from "@/lib/utils";

// Merge Tailwind classes
cn("px-4 py-2", condition && "bg-primary", className);
```

---

## 🔗 Quick Reference

| Resource           | Location                           |
| ------------------ | ---------------------------------- |
| Design Tokens      | `src/app/globals.css`              |
| UI Components      | `src/components/ui/`               |
| Component Demos    | `src/components/demos/`            |
| Component Registry | `src/config/component-registry.ts` |
| Sidebar Navigation | `src/config/docs.ts`               |
| Patterns           | `src/patterns/`                    |
| Hooks              | `src/hooks/`                       |
| Utilities          | `src/lib/utils.ts`                 |

---

## 📝 Contributing

1. **Add new component**: Create in `src/components/ui/`, export from `index.ts`
2. **Add demo page**: Create in `src/components/demos/`, register in `component-registry.ts`
3. **Update navigation**: Add entry to `src/config/docs.ts`
4. **Update this doc**: Add reference link (never duplicate code)
