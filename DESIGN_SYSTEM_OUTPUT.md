# Design System Implementation

## 📁 Folder Structure

\`\`\`
src/
├── app/
│   └── globals.css       # Design tokens (colors, radius, shadows)
├── components/
│   └── ui/               # Core components (primitives)
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── stack.tsx
│       ├── text.tsx
│       └── dialog.tsx    # (Radix primitive wrapper)
├── patterns/             # Composite patterns
│   ├── form-field.tsx
│   └── modal-layout.tsx
├── hooks/                # Logic hooks
│   ├── use-disclosure.ts
│   └── use-toggle.ts
└── docs/
    └── snippets.ts       # Copy-paste ready snippets
\`\`\`

## 🎨 Design Tokens

Tokens are centralized in \`src/app/globals.css\` using Tailwind v4 CSS variables.

- **Colors**: \`--primary\`, \`--secondary\`, \`--accent\`, \`--muted\`, etc.
- **Radius**: \`--radius\`, \`--radius-sm\`, \`--radius-md\`, etc.
- **Shadows**: \`--shadow-sm\`, \`--shadow-md\`, \`--shadow-lg\`, etc.
- **Typography**: Handled via \`Text\` component and semantic font variables.

## 🧩 Components & API

### Button
Minimal, variant-driven button component.
- **Props**: \`variant\` (default, destructive, outline, secondary, ghost, link), \`size\` (default, sm, lg, icon), \`asChild\`.
- **Accessibility**: Handles focus rings, disabled states, and ARIA attributes natively. Uses Radix UI `Slot` for composition.

### Input
Form input field.
- **Props**: Standard HTML input attributes.
- **Accessibility**: Focus states, integration with \`Label\`.

### Text
Polymorphic typography component.
- **Props**: \`variant\` (h1-h4, p, lead, large, small, muted), \`weight\`, \`as\`.
- **Accessibility**: Uses correct semantic HTML tags by default.

### Stack
Layout primitive for Flexbox.
- **Props**: \`direction\`, \`gap\`, \`align\`, \`justify\`, \`wrap\`, \`as\`.
- **Accessibility**: \`div\` by default, semantic layout.

## 🧱 Patterns

### FormField
Composes Label, Input, Error, and Helper text.
- **API**: \`label\`, \`error\`, \`helperText\`, \`id\`.
- **Accessibility**: Automatically links label to input (`htmlFor`), and links error/helper text to input via `aria-describedby` and `aria-invalid`.

### ModalLayout
Composes Dialog primitives into a standard modal pattern.
- **API**: \`title\`, \`description\`, \`trigger\`, \`footer\`, \`isOpen\`, \`onOpenChange\`.
- **Accessibility**: Manages focus trap, screen reader announcements, and keyboard navigation (Esc to close).

## 🧠 Hooks

### useDisclosure
Manages boolean state for modals, drawers, etc.
- **Returns**: \`isOpen\`, \`onOpen\`, \`onClose\`, \`onToggle\`, \`setOpen\`.
- **No JSX**.

### useToggle
Simple boolean toggle.
- **Returns**: \`isOn\`, \`toggle\`, \`setMethod\`.
- **No JSX**.

## ✅ Checklist Verification

1.  **No hardcoded design values**: PASS. All styles use Tailwind utility classes which map to tokens (e.g., `bg-primary`, `p-4`).
2.  **Tokens are single source of truth**: PASS. Defined in `globals.css` via CSS variables.
3.  **Components are stateless and composable**: PASS. `Button`, `Input`, `Text`, `Stack` are stateless. `ModalLayout` is controllable.
4.  **Public APIs are minimal and consistent**: PASS. All use `className` as escape hatch, follow standard naming (`variant`, `size`).
5.  **Accessibility is implemented by default**: PASS. `Button` has focus states. `FormField` handles ARIA. `ModalLayout` handles focus management.
6.  **No duplicated logic or styles**: PASS. Shared logic in hooks or primitives (`Label`, `Dialog`).
7.  **Patterns are separated from primitives**: PASS. `patterns/` vs `components/ui/`.
8.  **Code is framework-safe and portable**: PASS. React/Next.js compatible, "use client" directives added where state/context is used.

## 📌 Senior-level Best Practices Summary

- **Composition over Inheritance**: Used `asChild` in Button and composition in Patterns.
- **Headless UI**: Leveraged Radix UI for complex interactive components (Dialog) to ensure accessibility.
- **Token Abstraction**: Used Tailwind v4 theme variables to decouple design values from implementation.
- **DX First**: Provided snippets and strict typing for all props.
