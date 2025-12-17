import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-secondary font-normal uppercase tracking-wider transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-[#27AE60]/8 text-[#27AE60] rounded-[2.57px] px-1.5 text-[6.43px] leading-none h-[12.87px]",
        secondary: "bg-gray-50 text-gray-600 border-[0.643px] border-gray-300 rounded-[5.15px] px-2 text-[7.72px] leading-none h-[19.3px] box-border",
        destructive:
          "bg-red-600 text-white shadow rounded-md px-2.5 py-0.5 text-xs font-semibold leading-none h-[19.3px]",
        outline: "bg-[#EEF9F2] text-[#27AE60] border-[0.643px] border-[#27AE60] rounded-[5.15px] px-2 text-[7.72px] leading-none h-[19.3px] box-border",
        success: "border-client/60 bg-[#00a7f814] text-client/80 shadow-none rounded-md px-2.5 py-0.5 text-xs font-semibold",
        danger:
          "border-[#eb5757]/60 bg-[#eb575714] text-[#eb5757]/80 shadow-none rounded-md px-2.5 py-0.5 text-xs font-semibold",
        warning:
          "border-warning-amber/60 bg-[#f2c94c14] text-warning-amber/80 shadow-none rounded-md px-2.5 py-0.5 text-xs font-semibold",
        muted: "border-neutral-300 bg-[#f2f2f2] text-neutral-700 shadow-none rounded-md px-2.5 py-0.5 text-xs font-semibold",
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
