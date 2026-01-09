"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui";
import { cva, type VariantProps } from "class-variance-authority";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckIcon from "@mui/icons-material/Check";

// ============================================================================
// SETUP CARD - Simpler checklist item without left icon, supports "completed" state
// ============================================================================

const setupCardVariants = cva(
  "flex flex-row items-center gap-6 p-4 rounded-lg transition-all cursor-pointer",
  {
    variants: {
      state: {
        enabled: "border border-neutral-muted hover:border-foreground hover:shadow-md",
        hover: "border border-foreground shadow-md",
        pressed: "border border-client shadow-md",        completed: "border border-neutral-muted", // Assuming completed looks like enabled but with checkmark, or maybe different? Figma shows "Property 1=Completed" with neutral border.
      },
    },
    defaultVariants: {
      state: "enabled",
    },
  }
);

// ============================================================================
// COMPONENT TYPES
// ============================================================================

export interface SetupCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof setupCardVariants>, "state"> {
  /** Title text */
  title: string;
  /** Description text */
  description: string;
  /** Current state of the card */
  state?: "enabled" | "hover" | "pressed" | "completed";
  /** Click handler */
  onCardClick?: () => void;
  /** Whether the step is completed (overrides state visual if needed, but here we use state='completed') */
  completed?: boolean;
}

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Setup Card - Simpler checklist item without left icon.
 * Supports "completed" state with a green checkmark.
 *
 * @example
 * <SetupCard
 *   title="Add company profile"
 *   description="Upload your logo"
 *   state="enabled"
 *   onCardClick={() => handleSetup()}
 * />
 */
export const SetupCard = React.forwardRef<HTMLDivElement, SetupCardProps>(
  (
    {
      className,
      title,
      description,
      state = "enabled",
      completed,
      onCardClick,
      ...props
    },
    ref
  ) => {
    // If completed prop is true, force state to completed if not explicitly set (or just handle logic)
    const effectiveState = completed ? "completed" : state;

    return (
      <Card
        ref={ref}
        className={cn(setupCardVariants({ state: effectiveState }), className)}
        onClick={onCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && onCardClick) {
            e.preventDefault();
            onCardClick();
          }
        }}
        aria-label={`${title}: ${description}`}
        aria-pressed={effectiveState === "completed"}
        {...props}
      >
        {/* Title + Description */}
        <div className="flex flex-col items-start gap-2 flex-1">
          <span className="font-secondary font-semibold text-sm text-foreground leading-tight tracking-normal">
            {title}
          </span>
          <span className="font-secondary font-normal text-sm text-text-tertiary leading-tight tracking-normal">
            {description}
          </span>
        </div>

        {/* Right Icon: Chevron or Green Check */}
        {effectiveState === "completed" ? (
          <div className="flex items-center justify-center size-6 bg-success rounded-full shrink-0">
             <CheckIcon sx={{ fontSize: 16 }} className="text-success-foreground" />
          </div>
        ) : (
          <ChevronRightIcon sx={{ width: 24, height: 24 }} className="text-foreground shrink-0" />
        )}
      </Card>
    );
  }
);

SetupCard.displayName = "SetupCard";
