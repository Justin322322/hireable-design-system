# Components API Documentation

This document provides comprehensive API documentation for all design system components.

---

## Button

A versatile button component with multiple variants and sizes.

### Props

| Prop        | Type                                                                          | Default     | Description                                 |
| ----------- | ----------------------------------------------------------------------------- | ----------- | ------------------------------------------- |
| `variant`   | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Visual style variant                        |
| `size`      | `"default" \| "sm" \| "lg" \| "icon"`                                         | `"default"` | Size of the button                          |
| `asChild`   | `boolean`                                                                     | `false`     | Merge props onto child element (Radix Slot) |
| `disabled`  | `boolean`                                                                     | `false`     | Disable the button                          |
| `className` | `string`                                                                      | -           | Additional CSS classes (escape hatch)       |

### Accessibility

- ✅ Automatic focus ring on keyboard navigation
- ✅ Disabled state removes from tab order
- ✅ Uses semantic `<button>` element by default
- ✅ Supports `aria-*` attributes pass-through

### Usage Guidelines

- Use `default` variant for primary actions
- Use `destructive` for dangerous/irreversible actions
- Use `outline` or `ghost` for secondary actions
- Use `asChild` to render as a different element (e.g., `<Link>`)

---

## Input

Form input field with variant and size support.

### Props

| Prop        | Type                               | Default     | Description                           |
| ----------- | ---------------------------------- | ----------- | ------------------------------------- |
| `variant`   | `"default" \| "filled" \| "ghost"` | `"default"` | Visual style variant                  |
| `size`      | `"default" \| "sm" \| "lg"`        | `"default"` | Size of the input                     |
| `type`      | `string`                           | `"text"`    | HTML input type                       |
| `disabled`  | `boolean`                          | `false`     | Disable the input                     |
| `className` | `string`                           | -           | Additional CSS classes (escape hatch) |

### Accessibility

- ✅ Focus ring on keyboard navigation
- ✅ Proper disabled state styling
- ✅ Supports `aria-invalid` for error states
- ✅ Supports `aria-describedby` for helper/error text

### Usage Guidelines

- Always pair with a `<Label>` or use `FormField` pattern
- Use `variant="filled"` for forms on light backgrounds
- Use `variant="ghost"` for inline editing

---

## Text

Polymorphic typography component with semantic HTML.

### Props

| Prop        | Type                                                                                                       | Default     | Description                           |
| ----------- | ---------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------- |
| `variant`   | `"h1" \| "h2" \| "h3" \| "h4" \| "p" \| "blockquote" \| "list" \| "lead" \| "large" \| "small" \| "muted"` | `"p"`       | Typography variant                    |
| `weight`    | `"default" \| "normal" \| "medium" \| "semibold" \| "bold"`                                                | `"default"` | Font weight override                  |
| `as`        | `React.ElementType`                                                                                        | Auto        | Override rendered element             |
| `className` | `string`                                                                                                   | -           | Additional CSS classes (escape hatch) |

### Accessibility

- ✅ Renders semantic HTML by default (`h1`, `h2`, `p`, etc.)
- ✅ Use `as` prop to override when needed for DOM structure
- ✅ Proper heading hierarchy maintained

### Usage Guidelines

- Let `variant` determine the HTML element when possible
- Use `as` only when you need visual styling different from semantic meaning
- Maintain proper heading hierarchy (h1 → h2 → h3)

---

## Stack

Flexbox layout primitive for consistent spacing.

### Props

| Prop        | Type                                                      | Default     | Description                           |
| ----------- | --------------------------------------------------------- | ----------- | ------------------------------------- |
| `direction` | `"row" \| "column"`                                       | `"column"`  | Flex direction                        |
| `gap`       | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10`              | `2`         | Gap between items (spacing scale)     |
| `align`     | `"start" \| "center" \| "end" \| "stretch" \| "baseline"` | `"stretch"` | Cross-axis alignment                  |
| `justify`   | `"start" \| "center" \| "end" \| "between" \| "around"`   | `"start"`   | Main-axis alignment                   |
| `wrap`      | `boolean`                                                 | `false`     | Allow flex wrapping                   |
| `as`        | `React.ElementType`                                       | `"div"`     | Override rendered element             |
| `className` | `string`                                                  | -           | Additional CSS classes (escape hatch) |

### Accessibility

- ✅ Semantic `<div>` by default
- ✅ Use `as="nav"`, `as="section"`, etc. for semantic containers
- ✅ No accessibility issues from layout utility

### Usage Guidelines

- Use `direction="column"` for vertical layouts (default)
- Use `direction="row"` with `align="center"` for toolbars
- Use `justify="between"` for space-between layouts

---

## FormField (Pattern)

Composite pattern for form inputs with label, helper text, and error states.

### Props

| Prop         | Type        | Default        | Description                     |
| ------------ | ----------- | -------------- | ------------------------------- |
| `label`      | `string`    | Required       | Label text                      |
| `error`      | `string`    | -              | Error message (shows red)       |
| `helperText` | `string`    | -              | Helper text (hidden when error) |
| `id`         | `string`    | Auto-generated | Input ID for label association  |
| `children`   | `ReactNode` | -              | Input element to wrap           |
| `className`  | `string`    | -              | Additional CSS classes          |

### Accessibility

- ✅ Automatic `htmlFor` association between label and input
- ✅ Error linked via `aria-describedby`
- ✅ `aria-invalid` set when error present
- ✅ Helper text linked via `aria-describedby`

### Usage Guidelines

- Always pass an input component as children
- The pattern auto-generates IDs if not provided
- Use `error` prop to show validation errors

---

## ModalLayout (Pattern)

Composite pattern for modal dialogs with title, content, and footer.

### Props

| Prop           | Type                      | Default  | Description                |
| -------------- | ------------------------- | -------- | -------------------------- |
| `title`        | `string`                  | Required | Modal title                |
| `description`  | `string`                  | -        | Modal description          |
| `trigger`      | `ReactNode`               | -        | Element to trigger modal   |
| `children`     | `ReactNode`               | Required | Modal content              |
| `footer`       | `ReactNode`               | -        | Footer actions             |
| `isOpen`       | `boolean`                 | -        | Controlled open state      |
| `onOpenChange` | `(open: boolean) => void` | -        | Callback when open changes |

### Accessibility

- ✅ Focus trap when open
- ✅ Escape key closes modal
- ✅ Screen reader announcements
- ✅ Returns focus on close
- ✅ Background scroll prevention

### Usage Guidelines

- Use uncontrolled (trigger only) for simple cases
- Use controlled (`isOpen` + `onOpenChange`) with `useDisclosure`
- Always provide clear action buttons in footer

---

## Hooks

### useDisclosure

Manages boolean state for modals, drawers, popovers, etc.

```ts
const {
  isOpen,    // boolean - current state
  onOpen,    // () => void - set to true
  onClose,   // () => void - set to false
  onToggle,  // () => void - toggle state
  setOpen,   // (open: boolean) => void - set directly
} = useDisclosure(initialState?: boolean)
```

**No JSX** - Pure state management hook.

### useToggle

Simple boolean toggle for switches, checkboxes, etc.

```ts
const {
  isOn,      // boolean - current state
  toggle,    // () => void - toggle state
  setMethod, // (value: boolean) => void - set directly
} = useToggle(initialState?: boolean)
```

**No JSX** - Pure state management hook.

---

## Design Token Reference

All components consume tokens from `globals.css`. Never hardcode values.

### Colors

- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`
- `--background`, `--foreground`
- `--border`, `--input`, `--ring`

### Radius

- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`

### Shadows

- `--shadow-xs`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

### Typography

Handled via Tailwind utility classes (`text-sm`, `text-lg`, `font-medium`, etc.)
