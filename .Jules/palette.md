# Palette's Journal

## 2024-05-22 – Accessibility of Icon Buttons
**Learning:** `IconButton` component enforces `aria-label` which is excellent. However, general `Button` component when used with icons only might not be as strict.
**Action:** Always check if `Button` is used with just an icon and ensure it has an `aria-label`.

## 2024-05-22 – Input Number Validation
**Learning:** The `Input` component prevents negative signs for number inputs with non-negative min. This is a good micro-UX feature.
**Action:** Consider if similar validation can be added for other input types or improved further.
