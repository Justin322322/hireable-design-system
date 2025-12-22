---
description: Fix Tailwind canonical class suggestions from linter
---

# Tailwind Canonical Class Fix Workflow

This workflow uses `eslint-plugin-tailwindcss` to automatically fix Tailwind CSS class names to their canonical (shorter) forms.

## Quick Fix

// turbo

1. **Auto-fix all Tailwind canonical class issues:**

   ```bash
   bun run fix:tailwind
   ```

2. **Run ESLint fix (may have limited effect with Tailwind v4):**
   ```bash
   bun run lint:fix
   ```

## Manual Commands

2. **Check for issues only (no fix):**

   ```bash
   bun run lint
   ```

3. **Fix a specific file:**
   ```bash
   bunx eslint --fix src/app/components/card/page.tsx
   ```

## Common Auto-Fixed Replacements

| Legacy/Long Form    | Canonical Form (Auto-fixed) |
| ------------------- | --------------------------- |
| `flex-shrink-0`     | `shrink-0`                  |
| `flex-grow-0`       | `grow-0`                    |
| `flex-grow`         | `grow`                      |
| `leading-[1.5]`     | `leading-normal`            |
| `leading-[1.25]`    | `leading-tight`             |
| `leading-[2]`       | `leading-loose`             |
| `overflow-ellipsis` | `text-ellipsis`             |
| `top-[1px]`         | `top-px`                    |
| `z-[1]`             | `z-1`                       |
| `min-w-[8rem]`      | `min-w-32`                  |
| `h-[var(--x)]`      | `h-(--x)`                   |
| `w-[var(--x)]`      | `w-(--x)`                   |
| `min-w-[var(--x)]`  | `min-w-(--x)`               |
| `data-[disabled]:*` | `data-disabled:*`           |

## Configured Rules

The following rules are enabled in `eslint.config.mjs`:

- **tailwindcss/classnames-order** - Sorts class names
- **tailwindcss/enforces-negative-arbitrary-values** - Enforces negative values
- **tailwindcss/enforces-shorthand** - Enforces shorthand classes (auto-fix!)
- **tailwindcss/no-unnecessary-arbitrary-value** - Warns on unnecessary arbitrary values
