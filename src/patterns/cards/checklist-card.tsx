"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui";
import { cva, type VariantProps } from "class-variance-authority";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// ============================================================================
// CHECKLIST CARD - Displays checklist items with icon, title, and description
// Used for employer onboarding checklists, setup steps, etc.
// ============================================================================

const checklistCardVariants = cva(
  "flex flex-row items-center gap-6 p-4 rounded-lg transition-all cursor-pointer",
  {
    variants: {
      state: {
        enabled: "border border-neutral-muted hover:border-foreground hover:shadow-md",
        hover: "border border-foreground shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
        pressed: "border border-client shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
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

export interface ChecklistCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof checklistCardVariants> {
  /** 
   * Pre-sized icon element to display (32x32 recommended).
   * Expects a ReactElement (not a string or number).
   */
  icon: React.ReactElement<{ sx?: Record<string, unknown>; style?: React.CSSProperties; className?: string }>;
  /** Title text */
  title: string;
  /** Description text */
  description: string;
  /** Click handler */
  onCardClick?: () => void;
}

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Checklist Card - Displays checklist items with icon, title, and description
 * Used for employer onboarding checklists, setup steps, etc.
 *
 * @example
 * <ChecklistCard
 *   icon={<PersonIcon sx={{ fontSize: 32 }} />} // Icon must be pre-sized
 *   title="Add company profile"
 *   description="Upload your logo"
 *   onCardClick={() => handleSetup()}
 * />
 */
export const ChecklistCard = React.forwardRef<HTMLDivElement, ChecklistCardProps>(
  (
    {
      className,
      icon,
      title,
      description,
      state,
      onCardClick,
      ...props
    },
    ref
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if ((e.key === "Enter" || e.key === " ") && onCardClick) {
        e.preventDefault();
        onCardClick();
      }
    };

    return (
      <Card
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label={title}
        className={cn(checklistCardVariants({ state }), "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
        onClick={onCardClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {/* Icon Container - 64x64 container with gray background, inner icon should be 32x32 */}
        <div className="flex items-center justify-center size-16 bg-neutral-subtle rounded-[6.4px] shrink-0">
          <span className="text-icon">{icon}</span>
        </div>

        {/* Title + Description */}
        <div className="flex flex-col items-start gap-2 flex-1">
          <span className="font-secondary font-semibold text-base text-foreground leading-[150%] tracking-[0.2px]">
            {title}
          </span>
          <span className="font-secondary font-normal text-sm text-text-tertiary leading-[120%] tracking-[0.2px]">
            {description}
          </span>
        </div>

        {/* Chevron Right */}
        <ChevronRightIcon sx={{ width: 24, height: 24 }} className="text-foreground shrink-0" />
      </Card>
    );
  }
);

ChecklistCard.displayName = "ChecklistCard";
