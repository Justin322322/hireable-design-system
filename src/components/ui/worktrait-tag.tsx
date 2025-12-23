"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const worktraitTagVariants = cva(
  "inline-flex flex-row justify-center items-center rounded-full py-2 px-3 gap-1",
  {
    variants: {
      variant: {
        "decision-making": "bg-worktrait-decision",
        adaptability: "bg-worktrait-adapt",
        responsiveness: "bg-worktrait-response",
        "time-management": "bg-worktrait-time",
        cooperativeness: "bg-worktrait-coop",
        communication: "bg-worktrait-comm",
      },
      size: {
        lg: "",
        md: "",
      },
    },
    defaultVariants: {
      variant: "decision-making",
      size: "lg",
    },
  }
);

export interface WorktraitTagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof worktraitTagVariants> {
  icon?: React.ReactNode;
  label: string;
}

function WorktraitTag({
  className,
  variant,
  size,
  icon,
  label,
  ...props
}: WorktraitTagProps) {
  const isLarge = size === "lg";
  
  // Icon container: 16px (w-4) for large, 14px (w-3.5) for medium
  const iconClasses = isLarge
    ? "size-4 flex-none shrink-0"
    : "size-3.5 flex-none shrink-0";
  
  // Text styling based on Figma specs
  const textClasses = isLarge
    ? "font-nunito font-medium text-sm leading-[1.2] tracking-[0.2px] uppercase text-foreground flex-none whitespace-nowrap"
    : "font-secondary font-normal text-xs leading-[1.2] tracking-[0.2px] text-foreground flex-none whitespace-nowrap";

  return (
    <div
      className={cn(worktraitTagVariants({ variant, size }), className)}
      {...props}
    >
      {icon && (
        <span className={cn(iconClasses, "flex items-center justify-center text-foreground")}>
          {icon}
        </span>
      )}
      <span className={textClasses}>{label}</span>
    </div>
  );
}

export { WorktraitTag, worktraitTagVariants };
