"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, Button } from "@/components/ui";
import { cva, type VariantProps } from "class-variance-authority";

// ============================================================================
// EMPTY STATE CARD - Displays when there's no data/content to show
// Also supports "Base Card" pattern with label instead of icon
// ============================================================================

const emptyStateCardVariants = cva(
  "flex flex-col gap-6 p-4 rounded-lg transition-all",
  {
    variants: {
      state: {
        enabled: "border-neutral-muted hover:border-foreground hover:shadow-md",
        hover: "border-foreground shadow-md",
        pressed: "border-client shadow-md",
      },
      align: {
        center: "justify-center items-center",
        left: "justify-start items-start",
      },
    },
    defaultVariants: {
      state: "enabled",
      align: "center",
    },
  }
);

// ============================================================================
// COMPONENT TYPES
// ============================================================================

export interface EmptyStateCardAction {
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface EmptyStateCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateCardVariants> {
  /** Icon to display (React element) - optional */
  icon?: React.ReactNode;
  /** Label text displayed above title (e.g., "WHAT'S NEXT") - optional */
  label?: string;
  /** Title text */
  title: string;
  /** Description text */
  description: string;
  /** Primary action - button displayed at the bottom */
  action?: EmptyStateCardAction;
  /** Whether the entire card is interactive/clickable */
  interactive?: boolean;
}

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Empty State Card - Displays when there's no content/data to show
 * Also works as a "Base Card" with label instead of icon
 *
 * @example Empty State (with icon, centered)
 * <EmptyStateCard
 *   icon={<Briefcase className="w-6 h-6" />}
 *   title="No active tests yet"
 *   description="Post a job to start attracting talent."
 *   action={{ label: "Post a job", onClick: () => {} }}
 * />
 *
 * @example Base Card (with label, left-aligned)
 * <EmptyStateCard
 *   label="WHAT'S NEXT"
 *   title="Browse Talents"
 *   description="Find talent that fits your role."
 *   action={{ label: "Browse talents", onClick: () => {} }}
 *   align="left"
 * />
 */
export const EmptyStateCard = React.forwardRef<HTMLDivElement, EmptyStateCardProps>(
  (
    {
      className,
      icon,
      label,
      title,
      description,
      action,
      state,
      align,
      interactive = false,
      onClick,
      ...props
    },
    ref
  ) => {
    // Auto-detect alignment based on content type if not explicitly set
    const effectiveAlign = align ?? (icon ? "center" : "left");

    return (
      <Card
        ref={ref}
        className={cn(
          emptyStateCardVariants({ state, align: effectiveAlign }),
          interactive && "cursor-pointer",
          className
        )}
        onClick={interactive ? onClick : undefined}
        {...props}
      >
        {/* Content wrapper */}
        <div className={cn(
          "flex flex-col gap-2",
          effectiveAlign === "center" ? "justify-center items-center" : "justify-start items-start"
        )}>
          {/* Icon container - only shown if icon is provided */}
          {icon && (
            <div className="flex justify-center items-center p-2 bg-neutral-subtle rounded-lg">
              <span className="text-icon">{icon}</span>
            </div>
          )}

          {/* Label - only shown if label is provided */}
          {label && (
            <span className="font-secondary font-normal text-xs text-button-secondary-foreground uppercase leading-[120%] tracking-[0.2px]">
              {label}
            </span>
          )}

          {/* Title */}
          <h3 className={cn(
            "font-secondary font-semibold text-base text-foreground leading-[150%] tracking-[0.2px]",
            effectiveAlign === "center" && "text-center"
          )}>
            {title}
          </h3>

          {/* Description */}
          <p className={cn(
            "font-secondary font-normal text-sm text-text-tertiary leading-[120%] tracking-[0.2px]",
            effectiveAlign === "center" && "text-center"
          )}>
            {description}
          </p>
        </div>

        {/* Action button */}
        {action && (
          <Button
            variant="secondary"
            size="base"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              action.onClick?.();
            }}
          >
            {action.label}
          </Button>
        )}
      </Card>
    );
  }
);

EmptyStateCard.displayName = "EmptyStateCard";

