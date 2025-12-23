import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-secondary font-normal uppercase tracking-wider transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-success/15 text-success rounded-[2.57px] px-1.5 text-[6.43px] leading-none h-[12.87px]",
        secondary: "bg-neutral-subtle text-text-tertiary border border-button-tertiary-border rounded-[5.15px] px-2 text-[7.72px] leading-none h-[19.3px] box-border",
        destructive:
          "bg-danger text-danger-foreground shadow rounded-md px-2.5 py-0.5 text-xs font-semibold leading-none h-[19.3px]",
        outline: "bg-success/10 text-success border border-success rounded-[5.15px] px-2 text-[7.72px] leading-none h-[19.3px] box-border",
        success: "border-client/60 bg-client/10 text-client/80 shadow-none rounded-md px-2.5 py-0.5 text-xs font-semibold",
        danger:
          "border-danger/60 bg-danger/10 text-danger/80 shadow-none rounded-md px-2.5 py-0.5 text-xs font-semibold",
        warning:
          "border-warning/60 bg-warning/10 text-warning/80 shadow-none rounded-md px-2.5 py-0.5 text-xs font-semibold",
        muted: "border-button-tertiary-border bg-muted text-text-tertiary shadow-none rounded-md px-2.5 py-0.5 text-xs font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

export { Badge, type BadgeVariant };
