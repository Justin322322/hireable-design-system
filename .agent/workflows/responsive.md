---
description: Responsive design system with breakpoints, mobile-first approach, and adaptive component patterns
---

# Responsive System

The Hireable Design System follows a mobile-first responsive approach using Tailwind CSS breakpoints. Components adapt fluidly across screen sizes.

---

## Mobile-First Approach

Write styles for mobile first, then add breakpoint modifiers for larger screens:

```tsx
// ✅ Mobile-first (correct)
<div className="p-4 md:p-6 lg:p-8">
  {/* Starts at p-4, grows to p-6 at md, then p-8 at lg */}
</div>

// ❌ Desktop-first (avoid)
<div className="p-8 sm:p-4">
  {/* Confusing: starts large, then shrinks */}
</div>
```

---

## Breakpoints

Tailwind's default breakpoints (min-width):

| Prefix | Min Width | Target Devices |
|--------|-----------|----------------|
| (none) | 0px | Mobile phones (portrait) |
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops, small desktops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

### Common Device Widths

| Device | Width | Breakpoint Range |
|--------|-------|------------------|
| iPhone SE | 375px | (base) |
| iPhone 14 | 390px | (base) |
| iPhone 14 Pro Max | 430px | (base) |
| iPad Mini | 768px | `md` |
| iPad Pro 11" | 834px | `md` |
| iPad Pro 12.9" | 1024px | `lg` |
| MacBook Air 13" | 1280px | `xl` |
| MacBook Pro 16" | 1728px | `2xl` |
| Desktop 1080p | 1920px | `2xl` |

---

## Layout Patterns

### Container Widths

```tsx
// Centered container with max-width
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// Full width with padding
<div className="w-full px-4 md:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Responsive Grid

```tsx
// 1 → 2 → 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <Card />
  <Card />
  <Card />
</div>

// Sidebar layout (stacked on mobile)
<div className="flex flex-col lg:flex-row gap-6">
  <aside className="w-full lg:w-64 shrink-0">Sidebar</aside>
  <main className="flex-1">Content</main>
</div>
```

### Responsive Flex

```tsx
// Stack on mobile, row on desktop
<div className="flex flex-col md:flex-row gap-4">
  <Item />
  <Item />
</div>

// Reverse order on mobile
<div className="flex flex-col-reverse md:flex-row">
  <Content />
  <Sidebar />
</div>
```

---

## Component Patterns

### Navigation

```tsx
// Mobile: hamburger menu, Desktop: full nav
<nav className="flex items-center justify-between">
  <Logo />
  
  {/* Desktop nav - hidden on mobile */}
  <div className="hidden md:flex gap-6">
    <NavLink href="/about">About</NavLink>
    <NavLink href="/features">Features</NavLink>
  </div>
  
  {/* Mobile menu button - hidden on desktop */}
  <Button className="md:hidden" aria-label="Open menu">
    <MenuIcon />
  </Button>
</nav>
```

### Cards

```tsx
// Card with responsive layout
<Card className="p-4 md:p-6">
  <div className="flex flex-col md:flex-row gap-4">
    <Avatar className="w-12 h-12 md:w-16 md:h-16" />
    <div className="flex-1">
      <h3 className="text-lg md:text-xl font-semibold">Title</h3>
      <p className="text-sm md:text-base text-muted-foreground">Description</p>
    </div>
  </div>
</Card>
```

### Tables

```tsx
// Horizontal scroll on mobile, full table on desktop
<div className="overflow-x-auto">
  <table className="min-w-full">
    {/* Table content */}
  </table>
</div>

// Or convert to card layout on mobile
<div className="hidden md:block">
  <Table />
</div>
<div className="md:hidden space-y-4">
  {data.map(item => <MobileCard key={item.id} data={item} />)}
</div>
```

### Modals/Drawers

```tsx
// Full screen on mobile, centered modal on desktop
<Dialog>
  <DialogContent className="
    w-full h-full 
    md:w-auto md:h-auto 
    md:max-w-lg md:rounded-lg
  ">
    {/* Content */}
  </DialogContent>
</Dialog>

// Bottom sheet on mobile, side drawer on desktop
<Drawer>
  <DrawerContent className="
    inset-x-0 bottom-0 
    md:inset-y-0 md:right-0 md:left-auto
    rounded-t-xl md:rounded-none md:rounded-l-xl
  ">
    {/* Content */}
  </DrawerContent>
</Drawer>
```

### Forms

```tsx
// Two column on desktop, stacked on mobile
<form className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <FormField label="First Name" />
    <FormField label="Last Name" />
  </div>
  <FormField label="Email" />
  <FormField label="Message" />
</form>
```

### Buttons

```tsx
// Full width on mobile, auto width on desktop
<Button className="w-full md:w-auto">
  Submit
</Button>

// Button group: stacked on mobile, inline on desktop
<div className="flex flex-col md:flex-row gap-2 md:gap-3">
  <Button variant="outline" className="w-full md:w-auto">Cancel</Button>
  <Button className="w-full md:w-auto">Save</Button>
</div>
```

---

## Typography Scaling

```tsx
// Responsive headings
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Page Title
</h1>

<h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
  Section Title
</h2>

// Responsive body text
<p className="text-sm md:text-base">
  Body content that adjusts for readability.
</p>
```

---

## Spacing Scaling

```tsx
// Responsive padding
<section className="py-8 md:py-12 lg:py-16">

// Responsive gaps
<div className="grid gap-4 md:gap-6 lg:gap-8">

// Responsive margins
<div className="mt-4 md:mt-6 lg:mt-8">
```

---

## Visibility Utilities

| Class | Effect |
|-------|--------|
| `hidden` | Hide on all screens |
| `hidden md:block` | Hide on mobile, show on md+ |
| `md:hidden` | Show on mobile, hide on md+ |
| `invisible` | Hidden but takes up space |
| `sr-only` | Visually hidden, accessible to screen readers |

```tsx
// Mobile-only element
<div className="md:hidden">
  Mobile navigation
</div>

// Desktop-only element
<div className="hidden md:block">
  Desktop sidebar
</div>

// Tablet and up
<div className="hidden sm:block">
  Larger screen content
</div>
```

---

## Responsive Images

```tsx
// Responsive image with aspect ratio
<div className="relative aspect-video md:aspect-[4/3] lg:aspect-[16/9]">
  <Image
    src="/image.jpg"
    alt="Description"
    fill
    className="object-cover"
  />
</div>

// Responsive image sizes
<Image
  src="/image.jpg"
  alt="Description"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  fill
/>
```

---

## Touch vs. Pointer

Consider touch targets on mobile:

```tsx
// Larger touch targets on mobile
<Button className="h-12 px-6 md:h-10 md:px-4">
  Touch-friendly
</Button>

// Minimum touch target: 44x44px (Apple HIG) or 48x48px (Material)
<IconButton className="w-12 h-12 md:w-10 md:h-10" aria-label="Menu">
  <MenuIcon />
</IconButton>
```

---

## Testing Responsive Designs

### Browser DevTools

1. Chrome: `Cmd/Ctrl + Shift + M` for device mode
2. Test at each breakpoint boundary (639px, 640px, 767px, 768px, etc.)
3. Test with both portrait and landscape orientations

### Breakpoint Debugging

```tsx
// Add during development to see current breakpoint
<div className="fixed bottom-4 right-4 p-2 bg-black text-white text-xs rounded z-50">
  <span className="sm:hidden">XS</span>
  <span className="hidden sm:inline md:hidden">SM</span>
  <span className="hidden md:inline lg:hidden">MD</span>
  <span className="hidden lg:inline xl:hidden">LG</span>
  <span className="hidden xl:inline 2xl:hidden">XL</span>
  <span className="hidden 2xl:inline">2XL</span>
</div>
```

---

## Common Breakpoint Patterns

### Hide/Show

```tsx
// Hide on small screens
<Sidebar className="hidden lg:block" />

// Show different components
<MobileNav className="lg:hidden" />
<DesktopNav className="hidden lg:flex" />
```

### Adjust Layout

```tsx
// Column direction on mobile, row on desktop
<div className="flex flex-col lg:flex-row">

// Different column counts
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
```

### Adjust Sizing

```tsx
// Full width on mobile, fixed width on desktop
<aside className="w-full lg:w-80">

// Responsive max-width
<div className="max-w-sm md:max-w-md lg:max-w-lg">
```

---

## Quick Reference

| Pattern | Mobile | Tablet (md) | Desktop (lg+) |
|---------|--------|-------------|---------------|
| Navigation | Hamburger | Hamburger or tabs | Full nav |
| Sidebar | Hidden/drawer | Collapsible | Always visible |
| Grid | 1 column | 2 columns | 3-4 columns |
| Cards | Stacked | 2 per row | 3-4 per row |
| Modal | Full screen | Centered | Centered |
| Tables | Card view | Scrollable | Full table |
| Buttons | Full width | Auto width | Auto width |

---

## DO NOT

- ❌ Use desktop-first (large → small) approach
- ❌ Hide critical content on any screen size
- ❌ Make touch targets smaller than 44x44px on mobile
- ❌ Use horizontal scroll for primary content
- ❌ Rely only on hover states (touch devices can't hover)
- ❌ Test only on your device size
- ❌ Use fixed pixel widths for fluid layouts
