import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const progressBarVariants = cva(
  "h-2.5 rounded-full transition-all duration-300",
  {
    variants: {
      variant: {
        neutral: "bg-[var(--color-neutral-400)]",
        ontrack: "bg-[var(--brand-primary)]",
        atrisk: "bg-[var(--color-orange-500)]",
        offtrack: "bg-[var(--status-danger)]",
        success: "bg-[var(--status-success)]",
        notstarted: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  /** Progress value (0-100) */
  value?: number;
  /** Whether to show the percentage label */
  showLabel?: boolean;
  /** Width of the progress bar container */
  width?: string;
}

function ProgressBar({
  className,
  variant = "neutral",
  value = 0,
  showLabel = false,
  width = "180px",
  ...props
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      style={{ width }}
      {...props}
    >
      <div className="flex-1 h-2.5 bg-[var(--bg-surface-hover)] rounded-full overflow-hidden">
        <div
          className={cn(progressBarVariants({ variant }))}
          style={{ width: `${clampedValue}%` }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {showLabel && (
        <span className="w-10 text-sm font-secondary leading-[1.2] tracking-[0.2px] text-foreground text-right">
          {clampedValue}%
        </span>
      )}
    </div>
  );
}

type ProgressBarVariant = VariantProps<typeof progressBarVariants>["variant"];

export { ProgressBar, progressBarVariants, type ProgressBarVariant };
