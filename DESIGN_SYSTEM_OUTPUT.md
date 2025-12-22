# Design System Implementation - Complete Output

This document provides the complete, production-ready design system implementation with all required components, documentation, and validation.

---

## 📁 Folder Structure

```
src/
├── app/
│   └── globals.css           # Design tokens (colors, radius, shadows, spacing docs)
├── components/
│   └── ui/                   # Core components (primitives)
│       ├── button.tsx        # Button with variant, size, asChild
│       ├── input.tsx         # Input with variant, size (enhanced)
│       ├── text.tsx          # Polymorphic typography
│       ├── stack.tsx         # Flexbox layout primitive
│       ├── label.tsx         # Form label
│       └── dialog.tsx        # Radix Dialog wrapper
├── patterns/                 # Composite patterns
│   ├── form-field.tsx        # Label + Input + Error + Helper
│   └── modal-layout.tsx      # Dialog composition (with "use client")
├── hooks/                    # Logic hooks (no JSX)
│   ├── index.ts              # Barrel export
│   ├── use-disclosure.ts     # Modal/drawer state
│   └── use-toggle.ts         # Boolean toggle
├── docs/
│   ├── components-api.md     # Complete API documentation
│   └── snippets.ts           # Copy-paste ready examples
└── lib/
    └── utils.ts              # cn() utility for class merging
```

---

## 🎨 Design Tokens

All tokens are centralized in `src/app/globals.css` using Tailwind v4 CSS variables.

### Colors

```css
/* Light mode */
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}

/* Dark mode */
.dark {
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
}
```

### Radius

```css
--radius: 0.625rem;
--radius-sm: calc(var(--radius) - 4px);
--radius-md: calc(var(--radius) - 2px);
--radius-lg: var(--radius);
--radius-xl: calc(var(--radius) + 4px);
--radius-2xl: calc(var(--radius) + 8px);
```

### Shadows

```css
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

### Utilities

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🧩 Components (Code)

### Button

```tsx
// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

#### API

| Prop        | Type                                                                          | Default     | Description            |
| ----------- | ----------------------------------------------------------------------------- | ----------- | ---------------------- |
| `variant`   | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Visual style           |
| `size`      | `"default" \| "sm" \| "lg" \| "icon"`                                         | `"default"` | Size                   |
| `asChild`   | `boolean`                                                                     | `false`     | Merge props onto child |
| `className` | `string`                                                                      | -           | Escape hatch           |

---

### Input

```tsx
// src/components/ui/input.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border bg-transparent transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input shadow-sm",
        filled: "border-transparent bg-muted",
        ghost: "border-transparent hover:bg-accent",
      },
      size: {
        default: "h-9 px-3 py-1 text-sm",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-11 px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
```

#### API

| Prop        | Type                               | Default     | Description  |
| ----------- | ---------------------------------- | ----------- | ------------ |
| `variant`   | `"default" \| "filled" \| "ghost"` | `"default"` | Visual style |
| `size`      | `"default" \| "sm" \| "lg"`        | `"default"` | Size         |
| `className` | `string`                           | -           | Escape hatch |

---

### Text

```tsx
// src/components/ui/text.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
    weight: {
      default: "",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, weight, as, ...props }, ref) => {
    const Tag = as || mapVariantToTag(variant);

    return React.createElement(Tag, {
      className: cn(textVariants({ variant, weight, className })),
      ref,
      ...props,
    });
  }
);
Text.displayName = "Text";

function mapVariantToTag(variant?: TextProps["variant"]): React.ElementType {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "p":
      return "p";
    case "blockquote":
      return "blockquote";
    case "list":
      return "ul";
    default:
      return "p";
  }
}

export { Text, textVariants };
```

#### API

| Prop        | Type                                                                             | Default     | Description        |
| ----------- | -------------------------------------------------------------------------------- | ----------- | ------------------ |
| `variant`   | `"h1" \| "h2" \| "h3" \| "h4" \| "p" \| "lead" \| "large" \| "small" \| "muted"` | `"p"`       | Typography variant |
| `weight`    | `"default" \| "normal" \| "medium" \| "semibold" \| "bold"`                      | `"default"` | Font weight        |
| `as`        | `React.ElementType`                                                              | Auto        | Override element   |
| `className` | `string`                                                                         | -           | Escape hatch       |

---

### Stack

```tsx
// src/components/ui/stack.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const stackVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  defaultVariants: {
    direction: "column",
    gap: 2,
    align: "stretch",
    justify: "start",
    wrap: false,
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  as?: React.ElementType;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction,
      gap,
      align,
      justify,
      wrap,
      as: Component = "div",
      ...props
    },
    ref
  ) => {
    return (
      <Component
        className={cn(
          stackVariants({ direction, gap, align, justify, wrap, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Stack.displayName = "Stack";

export { Stack, stackVariants };
```

#### API

| Prop        | Type                                                      | Default     | Description          |
| ----------- | --------------------------------------------------------- | ----------- | -------------------- |
| `direction` | `"row" \| "column"`                                       | `"column"`  | Flex direction       |
| `gap`       | `0-10`                                                    | `2`         | Gap between items    |
| `align`     | `"start" \| "center" \| "end" \| "stretch" \| "baseline"` | `"stretch"` | Cross-axis alignment |
| `justify`   | `"start" \| "center" \| "end" \| "between" \| "around"`   | `"start"`   | Main-axis alignment  |
| `wrap`      | `boolean`                                                 | `false`     | Allow wrapping       |
| `as`        | `React.ElementType`                                       | `"div"`     | Override element     |

---

## 🧠 Hooks (Code)

### useDisclosure

```ts
// src/hooks/use-disclosure.ts
import { useState, useCallback } from "react";

export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  setOpen: (open: boolean) => void;
}

export function useDisclosure(initialState = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState(initialState);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    setOpen: setIsOpen,
  };
}
```

---

### useToggle

```ts
// src/hooks/use-toggle.ts
import { useState, useCallback } from "react";

export interface UseToggleReturn {
  isOn: boolean;
  toggle: () => void;
  setMethod: (value: boolean) => void;
}

export function useToggle(initialState = false): UseToggleReturn {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = useCallback(() => setIsOn((prev) => !prev), []);
  const setMethod = useCallback((value: boolean) => setIsOn(value), []);

  return {
    isOn,
    toggle,
    setMethod,
  };
}
```

---

### Hooks Index

```ts
// src/hooks/index.ts
export { useDisclosure, type UseDisclosureReturn } from "./use-disclosure";
export { useToggle, type UseToggleReturn } from "./use-toggle";
```

---

## 🧱 Patterns (Code)

### FormField

```tsx
// src/patterns/form-field.tsx
import * as React from "react";
import { useId } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends React.ComponentProps<"div"> {
  label: string;
  error?: string;
  helperText?: string;
  children?: React.ReactNode;
  id?: string;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { className, label, error, helperText, children, id: idProp, ...props },
    ref
  ) => {
    const generatedId = useId();
    const id = idProp || generatedId;
    const errorId = `${id}-error`;
    const descriptionId = `${id}-description`;

    // Clone child to inject id and aria-props if it's a valid element
    const child = React.isValidElement(children)
      ? React.cloneElement(
          children as React.ReactElement<{
            id?: string;
            "aria-invalid"?: boolean;
            "aria-describedby"?: string;
          }>,
          {
            id,
            "aria-invalid": !!error,
            "aria-describedby": error
              ? errorId
              : helperText
              ? descriptionId
              : undefined,
          }
        )
      : children;

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        <Label htmlFor={id} className={error ? "text-destructive" : ""}>
          {label}
        </Label>
        {child || (
          <Input
            id={id}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? descriptionId : undefined
            }
          />
        )}
        {helperText && !error && (
          <p id={descriptionId} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm font-medium text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";

export { FormField };
```

#### API

| Prop         | Type        | Default  | Description   |
| ------------ | ----------- | -------- | ------------- |
| `label`      | `string`    | Required | Label text    |
| `error`      | `string`    | -        | Error message |
| `helperText` | `string`    | -        | Helper text   |
| `id`         | `string`    | Auto     | Input ID      |
| `children`   | `ReactNode` | -        | Input element |

---

### ModalLayout

```tsx
// src/patterns/modal-layout.tsx
"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface ModalLayoutProps {
  title: string;
  description?: string;
  trigger?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ModalLayout({
  title,
  description,
  trigger,
  children,
  footer,
  isOpen,
  onOpenChange,
}: ModalLayoutProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="py-4">{children}</div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
```

#### API

| Prop           | Type                      | Default  | Description           |
| -------------- | ------------------------- | -------- | --------------------- |
| `title`        | `string`                  | Required | Modal title           |
| `description`  | `string`                  | -        | Modal description     |
| `trigger`      | `ReactNode`               | -        | Trigger element       |
| `children`     | `ReactNode`               | Required | Modal content         |
| `footer`       | `ReactNode`               | -        | Footer actions        |
| `isOpen`       | `boolean`                 | -        | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | -        | Open change callback  |

---

## 📘 Code Snippets

### Button

```tsx
// Basic
<Button>Click me</Button>

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Add /></Button>

// With icon (using MUI icons)
import { Mail } from "@mui/icons-material";

<Button>
  <Mail className="mr-2 size-4" />
  Send Email
</Button>

// As link
<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

### Input

```tsx
// Basic
<Input type="email" placeholder="Email" />

// Variants
<Input variant="default" placeholder="Default input" />
<Input variant="filled" placeholder="Filled input" />
<Input variant="ghost" placeholder="Ghost input" />

// Sizes
<Input size="sm" placeholder="Small" />
<Input size="default" placeholder="Default" />
<Input size="lg" placeholder="Large" />
```

### Text

```tsx
// Basic
<Text>This is a paragraph.</Text>

// Headings
<Text variant="h1">Heading 1</Text>
<Text variant="h2">Heading 2</Text>
<Text variant="h3">Heading 3</Text>

// Utility styles
<Text variant="lead">Lead text</Text>
<Text variant="small">Small text</Text>
<Text variant="muted">Muted text</Text>

// Polymorphic
<Text variant="h1" as="div">Styled as h1, renders as div</Text>
```

### Stack

```tsx
// Vertical (default)
<Stack gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>

// Horizontal
<Stack direction="row" gap={2} align="center">
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</Stack>
```

### FormField

```tsx
// Basic
<FormField label="Email" helperText="We'll never share your email.">
  <Input type="email" placeholder="m@example.com" />
</FormField>

// With error
<FormField label="Username" error="Username is already taken.">
  <Input placeholder="johndoe" />
</FormField>
```

### ModalLayout

```tsx
// Uncontrolled
<ModalLayout
  title="Edit Profile"
  description="Make changes to your profile here."
  trigger={<Button>Edit Profile</Button>}
  footer={<Button>Save changes</Button>}
>
  <FormField label="Name">
    <Input defaultValue="Pedro Duarte" />
  </FormField>
</ModalLayout>

// Controlled with useDisclosure
const { isOpen, setOpen, onClose } = useDisclosure()

<ModalLayout
  isOpen={isOpen}
  onOpenChange={setOpen}
  title="Confirm"
  footer={<Button onClick={onClose}>Close</Button>}
>
  <Text>Modal content here</Text>
</ModalLayout>
```

---

## ✅ Senior Design System Checklist Verification

| Requirement                             | Status  | Notes                                                         |
| --------------------------------------- | ------- | ------------------------------------------------------------- |
| No hardcoded design values              | ✅ PASS | All components use Tailwind utility classes mapping to tokens |
| Tokens are single source of truth       | ✅ PASS | Centralized in globals.css                                    |
| Components are stateless and composable | ✅ PASS | `forwardRef`, `asChild`, `as` patterns                        |
| Public APIs are minimal and consistent  | ✅ PASS | Consistent `variant`, `size`, `className`                     |
| Accessibility implemented by default    | ✅ PASS | Focus rings, ARIA, semantic HTML                              |
| No duplicated logic or styles           | ✅ PASS | Shared `cn()`, hooks, CVA                                     |
| Patterns separated from primitives      | ✅ PASS | `components/ui/` vs `patterns/`                               |
| Code is framework-safe and portable     | ✅ PASS | `"use client"` directives, pure React                         |

---

## 📌 Senior-level Best Practices Summary

1. **Composition over Inheritance**: Used `asChild` and `as` props for polymorphism
2. **Headless UI**: Leveraged Radix UI for complex interactive components
3. **Token Abstraction**: CSS variables decouple design from implementation
4. **Minimal API**: Consistent props across all components
5. **Accessibility by Default**: Built-in, not opt-in
6. **Type Safety**: Full TypeScript with inferred variant types
7. **Framework Portable**: Pure React, works in any environment
