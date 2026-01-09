import * as React from "react";
import { Card, CardContent, Badge, ProgressBar, type ProgressBarVariant } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * GoalCard - Display goal/objective with progress tracking
 * 
 * @example
 * ```tsx
 * <GoalCard
 *   title="Increase user engagement by 25%"
 *   badge={{ label: "Automatic", variant: "default" }}
 *   progress={68}
 *   metrics={[
 *     { label: "key results completed", current: 3, total: 5 },
 *     { label: "Due", value: "Dec 31, 2024" }
 *   ]}
 * />
 * ```
 */

export interface GoalCardMetric {
  label: string;
  current?: number;
  total?: number;
  value?: string;
}

export interface GoalCardBadge {
  label: string;
  variant?: "default" | "ontrack" | "atrisk" | "offtrack" | "complete";
}

export interface GoalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Goal title */
  title: string;
  /** Badge configuration (type, status, etc.) */
  badge?: GoalCardBadge;
  /** Progress percentage (0-100) */
  progress: number;
  /** Array of metrics to display */
  metrics?: GoalCardMetric[];
  /** Click handler */
  onClick?: () => void;
  /** Custom class name */
  className?: string;
  /** Progress bar variant */
  progressVariant?: ProgressBarVariant;
  /** Show hover effect */
  hoverable?: boolean;
}

export const GoalCard = React.forwardRef<HTMLDivElement, GoalCardProps>(
  (
    {
      title,
      badge,
      progress,
      metrics = [],
      onClick,
      className,
      progressVariant = "ontrack",
      hoverable = true,
      ...props
    },
    ref
  ) => {
    const isClickable = !!onClick;
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
      <Card
        ref={ref}
        className={cn(
          "w-full max-w-sm",
          isClickable && "cursor-pointer",
          hoverable && "transition-colors hover:bg-muted hover:border-border",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <CardContent className="flex flex-col items-start gap-5 p-4">
          {/* Header with title and badge */}
          <div className="flex items-start justify-between w-full gap-3">
            <div className="flex-1 flex items-center">
              <p className="font-semibold text-sm text-foreground leading-normal tracking-[0.02em]">
                {title}
              </p>
            </div>
            {badge && (
              <Badge
                variant={badge.variant || "default"}
                className="px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0"
              >
                {badge.label}
              </Badge>
            )}
          </div>

          {/* Progress section */}
          <div className="flex flex-col gap-2 w-full">
            {/* Progress percentage */}
            <div className="flex items-center">
              <span className="font-semibold text-2xl text-foreground leading-tight">
                {clampedProgress}%
              </span>
            </div>

            {/* Progress bar */}
            <ProgressBar variant={progressVariant} value={clampedProgress} width="100%" />

            {/* Metrics */}
            {metrics.length > 0 && (
              <div className="flex items-center justify-between w-full flex-wrap gap-2">
                {metrics.map((metric, index) => (
                  <span
                    key={index}
                    className="text-xs text-neutral-600 leading-tight tracking-[0.02em]"
                  >
                    {metric.current !== undefined && metric.total !== undefined
                      ? `${metric.current} of ${metric.total} ${metric.label}`
                      : metric.value
                      ? `${metric.label}: ${metric.value}`
                      : metric.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
);

GoalCard.displayName = "GoalCard";
