import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";
import { Card, CardContent } from "./card";

export interface StatsCardProps {
  /** Card title displayed at the top */
  title: string;
  /** Main value displayed prominently */
  value: string | number;
  /** Icon path for the top-right icon */
  icon: string;
  /** Optional description text below the value */
  description?: string;
  /** Optional subtitle next to the value */
  subtitle?: string;
  /** Optional growth indicator (e.g., "+10%") */
  growth?: string;
  /** Optional progress bar value (0-100) */
  progress?: number;
  /** Progress bar color (defaults to client blue) */
  progressColor?: string;
  /** Optional pill badges */
  pills?: string[];
  /** Additional className for the outer wrapper */
  className?: string;
  /** Size variant */
  size?: "sm" | "default";
}

const TYPOGRAPHY = {
  statLabel:
    "font-sans text-[9px] leading-[120%] font-semibold tracking-[0.2px] text-neutral-700",
  statValue:
    "font-dm-sans text-[20.59px] leading-[150%] font-semibold text-neutral-900",
  bodySmall:
    "font-sans text-[6.43px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700",
  pillBadge:
    "font-sans text-[6.43px] leading-[120%] font-normal tracking-[0.2px] text-neutral-700",
  description:
    "font-sans text-[6.4px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700",
  growth:
    "font-sans text-[6.43px] leading-[120%] tracking-[0.2px] text-[var(--color-success)]",
};

export const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  (
    {
      title,
      value,
      icon,
      description,
      subtitle,
      growth,
      progress,
      progressColor = "#00A7F8",
      pills,
      className,
      size = "default",
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("min-h-px min-w-px flex-1", className)}>
        <Card
          className={cn(
            "flex h-[86.07px] flex-col rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white p-[10.3px]",
            size === "sm" && "h-auto p-2"
          )}
        >
          <CardContent className="flex h-full flex-col justify-between p-0">
            {/* Title row */}
            <div className="flex w-full items-center justify-between">
              <span className={TYPOGRAPHY.statLabel}>{title}</span>
              <Image
                src={icon}
                alt={title}
                width={12.87}
                height={12.87}
                className="size-[12.87px]"
              />
            </div>

            {/* Value section */}
            <div className="flex w-full flex-col gap-[5.15px]">
              <div className="flex w-full items-end justify-between">
                <div className="flex min-h-px min-w-px flex-1 items-center">
                  <span className={TYPOGRAPHY.statValue}>{value}</span>
                </div>
                {/* Inline subtitle when there's a progress bar */}
                {subtitle && !growth && progress !== undefined && (
                  <span className={TYPOGRAPHY.bodySmall}>{subtitle}</span>
                )}
              </div>

              {/* Growth indicator with optional subtitle */}
              {growth && (
                <div className="flex h-[12.87px] items-center gap-[2.57px]">
                  <span className={TYPOGRAPHY.growth}>{growth}</span>
                  {subtitle && (
                    <span className={TYPOGRAPHY.bodySmall}>{subtitle}</span>
                  )}
                </div>
              )}

              {/* Pill badges */}
              {pills && pills.length > 0 && (
                <div className="flex items-center gap-[5.08px]">
                  {pills.map((pill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center justify-center rounded-full border-[0.32px] border-[rgba(195,195,195,0.4)] bg-[rgba(195,195,195,0.08)] px-[5.15px] py-[2.57px]"
                    >
                      <span className={TYPOGRAPHY.pillBadge}>{pill}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Progress bar (only if no pills) */}
              {progress !== undefined && !pills && (
                <div className="flex h-[12.87px] w-full items-center">
                  <div className="flex h-[10.3px] min-h-px min-w-px flex-1 items-center">
                    <div className="flex h-[5.15px] w-full flex-1 flex-col items-start justify-center overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-[5.15px] min-h-px min-w-px rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min(100, Math.max(0, progress))}%`,
                          backgroundColor: progressColor,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom subtitle/description when no progress bar */}
              {!progress && !growth && !pills && (subtitle || description) && (
                <div className="flex items-center">
                  <span className={TYPOGRAPHY.bodySmall}>
                    {subtitle || description}
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
);

StatsCard.displayName = "StatsCard";
