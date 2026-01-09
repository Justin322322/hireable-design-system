---
description: Typography system with type scale, font weights, line heights, and usage guidelines
---

# Typography System

The Hireable Design System uses a structured typography system to ensure consistency, readability, and hierarchy across all components and pages.

---

## Font Families

| Token | Font | Usage |
|-------|------|-------|
| `--font-sans` | DM Sans | Primary - headings, UI elements, body text |
| `--font-secondary` | Inter | Secondary - data tables, technical content |
| `--font-nunito` | Nunito Sans | Accent - special callouts |

### Font Loading

Fonts are loaded via `next/font` in `src/app/layout.tsx`:

```tsx
import { DM_Sans, Inter, Nunito_Sans } from "next/font/google";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});
```

---

## Type Scale

Based on a modular scale with 1rem (16px) base and ~1.25 ratio.

| Token/Class | Size | Line Height | Usage |
|-------------|------|-------------|-------|
| `text-xs` | 12px (0.75rem) | 1.5 (18px) | Captions, helper text, badges |
| `text-sm` | 14px (0.875rem) | 1.5 (21px) | Secondary text, labels, small buttons |
| `text-base` | 16px (1rem) | 1.5 (24px) | Body text, default |
| `text-lg` | 18px (1.125rem) | 1.5 (27px) | Lead paragraphs, emphasized body |
| `text-xl` | 20px (1.25rem) | 1.4 (28px) | Drawer titles, section headers |
| `text-2xl` | 24px (1.5rem) | 1.33 (32px) | Card titles, h3 |
| `text-3xl` | 30px (1.875rem) | 1.27 (38px) | Page section titles, h2 |
| `text-4xl` | 36px (2.25rem) | 1.22 (44px) | Page titles, h1 |
| `text-5xl` | 48px (3rem) | 1.17 (56px) | Hero headlines |

---

## Font Weights

| Token/Class | Weight | Usage |
|-------------|--------|-------|
| `font-normal` | 400 | Body text, descriptions |
| `font-medium` | 500 | Labels, buttons, emphasis |
| `font-semibold` | 600 | Subheadings, important labels |
| `font-bold` | 700 | Headings, strong emphasis |

---

## Line Heights

| Token/Class | Value | Usage |
|-------------|-------|-------|
| `leading-none` | 1 | Single-line text only |
| `leading-tight` | 1.25 | Headings, compact UI |
| `leading-snug` | 1.375 | Subheadings |
| `leading-normal` | 1.5 | Body text (default) |
| `leading-relaxed` | 1.625 | Long-form content |
| `leading-loose` | 2 | Spacious reading |

### Recommended Pairings

```tsx
// Headings: tighter line height
<h1 className="text-4xl font-bold leading-tight">Page Title</h1>
<h2 className="text-3xl font-semibold leading-snug">Section Title</h2>
<h3 className="text-2xl font-semibold leading-snug">Subsection</h3>

// Body: normal line height
<p className="text-base leading-normal">Body paragraph...</p>
<p className="text-sm leading-normal text-muted-foreground">Secondary text...</p>
```

---

## Letter Spacing (Tracking)

| Token/Class | Value | Usage |
|-------------|-------|-------|
| `tracking-tighter` | -0.05em | Large display text |
| `tracking-tight` | -0.025em | Headings |
| `tracking-normal` | 0 | Body text (default) |
| `tracking-wide` | 0.025em | Buttons, all-caps labels |
| `tracking-wider` | 0.05em | Small all-caps text |
| `tracking-widest` | 0.1em | Decorative all-caps |

### Common Patterns

```tsx
// All-caps labels need wider tracking
<span className="text-xs font-medium uppercase tracking-wide">
  Status
</span>

// Large headings benefit from tighter tracking
<h1 className="text-5xl font-bold tracking-tight">
  Welcome
</h1>
```

---

## Heading Hierarchy

Always follow proper heading hierarchy for accessibility:

```tsx
// ✅ Correct hierarchy
<h1>Page Title</h1>           {/* One per page */}
  <h2>Main Section</h2>
    <h3>Subsection</h3>
      <h4>Detail</h4>
  <h2>Another Section</h2>

// ❌ Never skip levels
<h1>Page Title</h1>
  <h4>Subsection</h4>         {/* Skipped h2, h3 */}
```

### Semantic vs. Visual

Use heading tags for structure, classes for styling:

```tsx
// When you need h2 structure but h3 styling
<h2 className="text-2xl font-semibold">Section Title</h2>

// Never use heading tags just for styling
// ❌ Bad
<h3>Just want bold text</h3>

// ✅ Good
<p className="text-lg font-semibold">Just want bold text</p>
```

---

## Text Colors

Use semantic color tokens for text:

| Token | Usage |
|-------|-------|
| `text-foreground` | Primary text (default) |
| `text-muted-foreground` | Secondary text, descriptions |
| `text-text-tertiary` | Tertiary text, placeholders |
| `text-destructive` | Error text |
| `text-primary-foreground` | Text on primary backgrounds |

```tsx
<h1 className="text-foreground">Primary heading</h1>
<p className="text-muted-foreground">Supporting description</p>
<span className="text-destructive">Error message</span>
```

---

## Typography Components

### Text Component

Use the `Text` component for semantic text rendering:

```tsx
import { Text } from "@/components/ui";

<Text variant="h1">Page Title</Text>
<Text variant="h2">Section Title</Text>
<Text variant="body">Paragraph content...</Text>
<Text variant="small" muted>Helper text</Text>
```

---

## Common Patterns

### Page Header

```tsx
<header className="space-y-2">
  <h1 className="text-4xl font-bold tracking-tight">
    Page Title
  </h1>
  <p className="text-lg text-muted-foreground">
    Brief description of the page content.
  </p>
</header>
```

### Card Title

```tsx
<div className="space-y-1">
  <h3 className="text-xl font-semibold leading-tight">
    Card Title
  </h3>
  <p className="text-sm text-muted-foreground">
    Card description
  </p>
</div>
```

### Form Labels

```tsx
<label className="text-sm font-medium leading-none">
  Field Label
</label>
<p className="text-xs text-muted-foreground">
  Helper text for the field
</p>
```

### Drawer Title

```tsx
<h2 className="font-semibold text-xl leading-normal tracking-wide text-foreground">
  Drawer Title
</h2>
```

---

## Responsive Typography

Scale typography for different screen sizes:

```tsx
// Responsive heading
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Title
</h1>

// Responsive body
<p className="text-sm md:text-base">
  Content adjusts to screen size
</p>
```

---

## Truncation & Overflow

```tsx
// Single line truncation
<p className="truncate">
  This text will be truncated with ellipsis...
</p>

// Multi-line truncation (2 lines)
<p className="line-clamp-2">
  This text will show 2 lines then truncate...
</p>

// No wrapping
<span className="whitespace-nowrap">
  Keep on single line
</span>
```

---

## Accessibility Requirements

1. **Minimum size**: Body text should be at least 16px
2. **Contrast**: See `accessibility.md` for contrast ratios
3. **Resizing**: Text must remain readable at 200% zoom
4. **Line length**: Aim for 45-75 characters per line
5. **Heading hierarchy**: Never skip levels

---

## DO NOT

- ❌ Use pixel values directly in components (use Tailwind classes)
- ❌ Skip heading levels (h1 → h3)
- ❌ Use heading tags purely for styling
- ❌ Set body text smaller than 12px
- ❌ Use low contrast text colors
- ❌ Mix font families randomly
