"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[8px] font-secondary font-semibold whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[#E5E5E5] disabled:border disabled:border-[#F2F2F2] disabled:text-[#C3C3C3] disabled:opacity-100 disabled:shadow-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#00A7F8] text-white shadow hover:bg-[#0085C6] active:bg-[#006593] disabled:bg-[#E5E5E5] disabled:text-[#C3C3C3] disabled:border-[#F2F2F2] disabled:shadow-none disabled:hover:bg-[#E5E5E5]",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800 disabled:bg-[#E5E5E5] disabled:text-[#C3C3C3] disabled:border-[#F2F2F2] disabled:shadow-none disabled:hover:bg-[#E5E5E5]",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-5 py-2 text-base leading-[96%] box-border",
        sm: "h-8 rounded-[8px] px-3 text-xs",
        lg: "h-10 rounded-[8px] px-8",
        xl: "h-12 rounded-[8px] px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
