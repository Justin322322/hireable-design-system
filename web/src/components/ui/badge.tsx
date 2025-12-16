import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow",
        outline: "text-foreground",
        success: "border-client/60 bg-[#00a7f814] text-client/80 shadow-none",
        danger:
          "border-[#eb5757]/60 bg-[#eb575714] text-[#eb5757]/80 shadow-none",
        warning:
          "border-warning-amber/60 bg-[#f2c94c14] text-warning-amber/80 shadow-none",
        muted: "border-neutral-300 bg-[#f2f2f2] text-neutral-700 shadow-none",
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
