---
description: Spacing system with base unit, scale tokens, and layout conventions for consistent UI spacing
---

# Spacing System

The Hireable Design System uses a consistent spacing system based on Tailwind CSS's default scale. All spacing follows a 4px base unit for pixel-perfect alignment.

---

## Base Unit

**4px** is the base spacing unit. All spacing values are multiples of 4px.

This ensures:
- Consistent visual rhythm
- Pixel-perfect alignment on standard screens
- Easy mental math (8px = 2 units, 16px = 4 units)

---

## Spacing Scale

Tailwind's default spacing scale (used throughout the system):

| Class | Value | Pixels | Common Usage |
|-------|-------|--------|--------------|
| `0` | 0 | 0px | Reset spacing |
| `px` | 1px | 1px | Hairline borders |
| `0.5` | 0.125rem | 2px | Micro adjustments |
| `1` | 0.25rem | 4px | Tight spacing, icon gaps |
| `1.5` | 0.375rem | 6px | Small gaps |
| `2` | 0.5rem | 8px | Related elements, inline spacing |
| `2.5` | 0.625rem | 10px | Compact padding |
| `3` | 0.75rem | 12px | Small component padding |
| `4` | 1rem | 16px | Default component padding |
| `5` | 1.25rem | 20px | Medium padding |
| `6` | 1.5rem | 24px | Section spacing, drawer padding |
| `8` | 2rem | 32px | Large gaps, section margins |
| `10` | 2.5rem | 40px | Major section breaks |
| `12` | 3rem | 48px | Page section spacing |
| `16` | 4rem | 64px | Large layout spacing |
| `20` | 5rem | 80px | Hero/header spacing |
| `24` | 6rem | 96px | Major page breaks |

---

## Component Spacing Conventions

### Buttons

| Size | Padding | Height | Gap (icon + text) |
|------|---------|--------|-------------------|
| `sm` | `px-3 py-1.5` | `h-8` (32px) | `gap-1.5` (6px) |
| `default` | `px-4 py-2` | `h-10` (40px) | `gap-2` (8px) |
| `lg` | `px-5 py-2.5` | `h-11` (44px) | `gap-2` (8px) |
| `icon` | `p-2` | `h-10 w-10` | — |

### Inputs

| Size | Padding | Height |
|------|---------|--------|
| `sm` | `px-3 py-1.5` | `h-8` (32px) |
| `default` | `px-3 py-2` | `h-10` (40px) |
| `lg` | `px-4 py-3` | `h-12` (48px) |

### Cards

```tsx
// Standard card padding
<Card className="p-6">  {/* 24px all sides */}
  <CardHeader className="pb-4">  {/* 16px bottom */}
  <CardContent className="space-y-4">  {/* 16px between children */}
</Card>
```

### Drawers (per drawer-patterns.md)

| Section | Padding |
|---------|---------|
| Header | `px-6 py-4` (24px x 16px) |
| Content | `p-6` (24px) |
| Footer | `px-6 py-6` (24px) |
| Section gap | `gap-6` (24px) |

### Modals

| Section | Padding |
|---------|---------|
| Container | `p-6` (24px) |
| Header | `pb-4` (16px bottom) |
| Footer | `pt-6` (24px top) |

---

## Layout Spacing

### Page Layout

```tsx
// Standard page container
<main className="px-6 py-8 md:px-8 lg:px-12">
  <div className="max-w-7xl mx-auto space-y-8">
    {/* Page content */}
  </div>
</main>
```

### Section Spacing

| Context | Gap | Class |
|---------|-----|-------|
| Related items | 8px | `gap-2` or `space-y-2` |
| Form fields | 16px | `gap-4` or `space-y-4` |
| Card sections | 24px | `gap-6` or `space-y-6` |
| Page sections | 32-48px | `gap-8` to `gap-12` |

### Stack Patterns

```tsx
// Tight stack (related elements)
<div className="space-y-2">
  <Label>Field Label</Label>
  <Input />
  <p className="text-xs text-muted-foreground">Helper text</p>
</div>

// Standard stack (form sections)
<form className="space-y-6">
  <FormField />
  <FormField />
  <FormField />
</form>

// Loose stack (page sections)
<div className="space-y-12">
  <Section />
  <Section />
</div>
```

---

## Gap vs. Space-Y vs. Margin

### When to use each

| Utility | Use When |
|---------|----------|
| `gap-*` | Flex/Grid containers with consistent spacing |
| `space-y-*` | Vertical stacks where all children need margin |
| `space-x-*` | Horizontal rows where all children need margin |
| `m-*` / `p-*` | Individual element spacing |

```tsx
// ✅ gap: Best for flex/grid layouts
<div className="flex gap-4">
  <Button>One</Button>
  <Button>Two</Button>
</div>

// ✅ space-y: Best for stacking unknown children
<div className="space-y-4">
  {items.map(item => <Item key={item.id} />)}
</div>

// ✅ margin: Best for one-off adjustments
<Button className="mt-4">Submit</Button>
```

---

## Alignment Patterns

### Centering

```tsx
// Center horizontally
<div className="flex justify-center">...</div>
<div className="mx-auto">...</div>

// Center vertically
<div className="flex items-center">...</div>

// Center both
<div className="flex items-center justify-center">...</div>
<div className="grid place-items-center">...</div>
```

### Distributing

```tsx
// Space between (first and last touch edges)
<div className="flex justify-between">...</div>

// Space around (equal space on each side)
<div className="flex justify-around">...</div>

// Space evenly (truly equal gaps)
<div className="flex justify-evenly">...</div>
```

---

## Responsive Spacing

Scale spacing for different viewports:

```tsx
// Padding that grows with screen size
<div className="p-4 md:p-6 lg:p-8">

// Gap that grows with screen size
<div className="grid gap-4 md:gap-6 lg:gap-8">

// Margin adjustments
<section className="mt-8 md:mt-12 lg:mt-16">
```

### Common Responsive Patterns

```tsx
// Mobile-first page padding
<main className="px-4 sm:px-6 lg:px-8">

// Responsive grid gap
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

// Responsive section spacing
<section className="py-12 md:py-16 lg:py-24">
```

---

## Fixed Sizes

For components with fixed dimensions:

| Token | Value | Usage |
|-------|-------|-------|
| `h-8` | 32px | Small buttons, badges |
| `h-10` | 40px | Default buttons, inputs |
| `h-11` | 44px | Large buttons (drawer footers) |
| `h-12` | 48px | Large inputs |
| `h-16` | 64px | Headers (drawer header) |
| `w-8` | 32px | Icon buttons |
| `w-10` | 40px | Standard avatars |
| `w-12` | 48px | Large avatars |

---

## Negative Spacing

For overlapping elements or pulling elements outside containers:

```tsx
// Pull element up
<div className="-mt-4">Overlaps previous element</div>

// Extend beyond container
<div className="-mx-6">Full bleed within parent</div>
```

---

## Common Anti-Patterns

### ❌ Don't

```tsx
// Avoid pixel values in inline styles
<div style={{ padding: "13px" }}>  {/* Not on 4px grid */}

// Avoid mixing approaches inconsistently
<div className="space-y-4">
  <div className="mb-6">  {/* Conflicts with space-y */}
</div>

// Avoid arbitrary values when a token exists
<div className="p-[17px]">  {/* Use p-4 (16px) instead */}
```

### ✅ Do

```tsx
// Use Tailwind scale
<div className="p-4">

// Use consistent approach
<div className="space-y-4">
  <Child />
  <Child />
</div>

// Use arbitrary only when needed for design specs
<div className="h-[312px]">  {/* Modal content height from design */}
```

---

## Reference: Design Tokens

From `globals.css`, modal sizing tokens:

```css
--modal-width-sm: 592px;
--modal-width-lg: 800px;
--modal-height-sm: 440px;
--modal-content-height: 312px;
```

Use these in components:

```tsx
<DialogContent className="w-(--modal-width-sm) h-(--modal-height-sm)">
```

---

## Quick Reference

| Use Case | Recommended |
|----------|-------------|
| Icon gap from text | `gap-2` (8px) |
| Form field spacing | `space-y-4` (16px) |
| Card padding | `p-6` (24px) |
| Button padding | `px-4 py-2` |
| Section spacing | `space-y-8` (32px) |
| Page padding | `px-6 py-8` |
| Drawer padding | `p-6` content, `px-6 py-4` header |
