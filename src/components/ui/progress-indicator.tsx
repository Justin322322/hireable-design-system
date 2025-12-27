"use client";

import * as React from "react";
import { Icon, type IconName } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

// ============================================================================
// PROGRESS INDICATOR - Shows current/total progress with a visual bar
// ============================================================================

export interface ProgressIndicatorProps {
  /** Current progress value */
  current: number;
  /** Total value (used to calculate percentage) */
  total: number;
  /** Label text displayed before the progress numbers */
  label?: string;
  /** Icon name from Material Symbols */
  icon?: IconName;
  /** Width of the progress bar */
  barWidth?: string;
  /** Additional className for styling */
  className?: string;
}

/**
 * A progress indicator showing current/total with a visual progress bar.
 * Commonly used for tracking key results, tasks, or multi-step processes.
 */
export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  current,
  total,
  label = "Progress",
  icon = "account_tree",
  barWidth = "120px",
  className,
}) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className={cn("flex flex-row items-center gap-3", className)}>
      <Icon icon={icon} size={20} className="text-muted-foreground" />
      <span className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-muted-foreground">
        {label}
      </span>
      <span className="text-sm leading-[120%] tracking-[0.2px] text-muted-foreground">
        {current} / {total}
      </span>
      <div
        className="h-2 bg-neutral-100 rounded-full overflow-hidden"
        style={{ width: barWidth }}
      >
        <div
          className="h-full bg-client rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

ProgressIndicator.displayName = "ProgressIndicator";
