"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// ============================================================================
// RADIO CARD - Card-based selection component (no visible radio indicator)
// ============================================================================

export interface RadioCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Unique value for this option */
  value: string
  /** Title/label for the card */
  title: string
  /** Description text below the title */
  description: string
  /** Whether this card is currently selected */
  selected?: boolean
  /** Callback when the card is selected */
  onSelect?: () => void
}

/**
 * A card-based radio selection component.
 * Per Figma spec, the card itself is the selectable element with no visible radio button.
 * Use within a group of RadioCards for mutual exclusivity via state management.
 * 
 * @example
 * ```tsx
 * const [selected, setSelected] = useState<string | null>(null);
 * 
 * <div className="flex gap-4">
 *   <RadioCard
 *     value="option1"
 *     title="Option 1"
 *     description="Description for option 1"
 *     selected={selected === "option1"}
 *     onSelect={() => setSelected("option1")}
 *   />
 *   <RadioCard
 *     value="option2"
 *     title="Option 2"
 *     description="Description for option 2"
 *     selected={selected === "option2"}
 *     onSelect={() => setSelected("option2")}
 *   />
 * </div>
 * ```
 */
const RadioCard = React.forwardRef<HTMLButtonElement, RadioCardProps>(
  ({ className, title, description, selected, onSelect, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        // Base styles
        "box-border flex flex-col items-start p-1 gap-2.5 flex-1 border rounded-lg cursor-pointer transition-all text-left",
        // Focus styles
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-border-focused focus-visible:ring-offset-2",
        // Selection state
        selected 
          ? "border-border-focused" 
          : "border-border hover:border-border-hover",
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-start p-4 gap-1 w-full bg-background rounded">
        <span className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
          {title}
        </span>
        <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground">
          {description}
        </span>
      </div>
    </button>
  )
)
RadioCard.displayName = "RadioCard"

export { RadioCard }
