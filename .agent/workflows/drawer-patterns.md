# Drawer Patterns

Standard patterns for building drawer components in the Hireable Design System.

## Structure

All drawers follow a 3-part structure:

```
┌─────────────────────────────────────┐
│ HEADER (64px)                       │
│ - Title (20px, font-semibold)       │
│ - Optional badge                    │
│ - Close button (32px, rounded-full) │
├─────────────────────────────────────┤
│ CONTENT (flex-1, scrollable)        │
│ - Padding: p-6                      │
│ - Gap between sections: gap-6       │
├─────────────────────────────────────┤
│ FOOTER                              │
│ - Padding: px-6 py-6                │
│ - Buttons right-aligned             │
│ - shadow-none on all buttons        │
└─────────────────────────────────────┘
```

## Design Specs

### Header
- Height: 64px (`h-16`)
- Padding: `px-6 py-4`
- Border: `border-b border-neutral-300`
- Title: `font-semibold text-xl leading-[150%] tracking-[0.4px] text-[#181D27]`
- Close button: `w-8 h-8 rounded-full bg-background hover:bg-muted`

### Footer
- Padding: `px-6 py-6`
- Border: `border-t border-neutral-300`
- Buttons: `shadow-none` (important!)
- Alignment: `justify-end`
- Gap: `gap-3`

### Content
- Padding: `p-6`
- Section gap: `gap-6`
- Scrollable: `overflow-y-auto`

## Drawer Types

### 1. CandidateProfileDrawer (Talent Drawer)
Read-only view of candidate profile with:
- Avatar, name, role, salary, experience, location
- Match badge
- Bio, Workplace Tags, Links, Skills
- Performance History (star ratings)
- References

### 2. CreateObjectiveDrawer
Create/Edit form for Objectives, Key Results, and Tasks:
- Props: `mode`, `entityType`, `defaultUpdateMethod`, `initialTitle`, `initialDescription`
- Update methods: Automatic (with Key Results list) or Manual (with measurement fields)

### 3. ObjectiveViewDrawer (Talent View)
Read-only view for Objectives, Key Results, and Tasks:
- Header shows entity type + update method badge (Default/Automatic/Manual)
- Content: Title, Description, Info note
- Automatic: + Key Results section + Tasks section
- Manual: + Measurement fields (disabled)

## Code Example

```tsx
import { 
  CandidateProfileDrawer,
  CreateObjectiveDrawer,
  ObjectiveViewDrawer 
} from "@/patterns/drawers";

// Candidate Profile
<CandidateProfileDrawer data={candidateData} />

// Create Objective
<CreateObjectiveDrawer entityType="objective" />

// Edit Objective (Automatic)
<CreateObjectiveDrawer 
  mode="edit" 
  entityType="objective"
  defaultUpdateMethod="automatic"
  initialTitle="Q1 Revenue Goal"
/>

// View Objective (Talent View)
<ObjectiveViewDrawer 
  entityType="objective"
  data={{
    title: "Increase Q1 Revenue",
    description: "Focus on expanding customer base...",
    updateMethod: "automatic",
    keyResults: [...],
    tasks: [...]
  }}
/>
```

## Button Styling

Always use `shadow-none` on drawer buttons:

```tsx
// Outline button (Cancel/Close)
<Button 
  variant="outline" 
  className="h-11 px-5 border-neutral-300 text-foreground font-medium text-sm capitalize shadow-none"
>
  Close
</Button>

// Primary button
<Button 
  className="h-11 px-5 bg-client hover:bg-client-hover text-white font-medium text-sm capitalize shadow-none"
>
  Save
</Button>
```

## Files

| Component | Location |
|-----------|----------|
| CandidateProfileDrawer | `src/patterns/drawers/candidate-profile-drawer.tsx` |
| CreateObjectiveDrawer | `src/patterns/drawers/create-objective-drawer.tsx` |
| ObjectiveViewDrawer | `src/patterns/drawers/objective-view-drawer.tsx` |
| Barrel exports | `src/patterns/drawers/index.ts` |
| Demo page | `src/components/demos/drawer-demo.tsx` |
