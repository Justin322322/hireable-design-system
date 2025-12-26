import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focused disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - uses --button-primary-default bg, white text
        default:
          "bg-button-primary-default text-button-primary-foreground shadow hover:bg-button-primary-hover active:bg-button-primary-active disabled:bg-button-primary-disabled disabled:text-button-primary-disabled-foreground disabled:shadow-none",
        primary:
          "bg-button-primary-default text-button-primary-foreground shadow hover:bg-button-primary-hover active:bg-button-primary-active disabled:bg-button-primary-disabled disabled:text-button-primary-disabled-foreground disabled:shadow-none",
        // Secondary - uses --button-secondary-default bg, --button-secondary-foreground text
        secondary:
          "bg-button-secondary-default text-button-secondary-foreground shadow-sm hover:bg-button-secondary-hover active:bg-button-secondary-active disabled:bg-button-primary-disabled disabled:text-button-primary-disabled-foreground",
        // Tertiary - uses --button-tertiary-default bg, --button-tertiary-border, --button-tertiary-foreground text
        tertiary:
          "bg-button-tertiary-default text-button-tertiary-foreground border border-button-tertiary-border shadow-sm hover:bg-button-tertiary-hover active:bg-button-tertiary-active disabled:bg-button-primary-disabled disabled:text-button-primary-disabled-foreground disabled:border-transparent",
        // Client - blue #00A7F8 style for CTAs and upload buttons
        client:
          "bg-client text-white shadow hover:bg-client-hover active:bg-client-active disabled:bg-button-primary-disabled disabled:text-button-primary-disabled-foreground disabled:shadow-none",
        // Legacy variants for backward compatibility
        destructive:
          "bg-button-destructive-default text-button-destructive-foreground shadow-sm hover:bg-button-destructive-hover",
        outline:
          "border border-button-tertiary-border bg-button-tertiary-default text-button-tertiary-foreground shadow-sm hover:bg-button-tertiary-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-client underline-offset-4 disabled:text-muted-foreground disabled:opacity-50",
      },
      size: {
        // Figma: Large = 48px, padding 8px 20px, font-size 16px
        lg: "h-12 px-5 py-2 text-base",
        // Figma: Base = 44px, padding 8px 20px, font-size 14px
        default: "h-11 px-5 py-2 text-sm",
        base: "h-11 px-5 py-2 text-sm",
        // Figma: Medium = 40px, padding 8px 16px, font-size 14px
        md: "h-10 px-4 py-2 text-sm",
        // Figma: Small = 36px, padding 8px 12px, font-size 12px
        sm: "h-9 px-3 py-2 text-xs",
        // Icon only variants - circular (border-radius: 100px)
        "icon-lg": "h-12 w-12 rounded-full",
        "icon-base": "h-11 w-11 rounded-full",
        "icon-md": "h-10 w-10 rounded-full",
        "icon-sm": "h-9 w-9 rounded-full",
        // Legacy icon size
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
