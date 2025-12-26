"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg border bg-background font-secondary text-sm transition-colors hover:border-border-hover file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-border-focused disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        filled: "border-transparent bg-muted",
        ghost: "border-transparent hover:bg-accent",
      },
      size: {
        default: "h-11 px-4 py-3",
        sm: "h-9 px-3 py-2 text-xs",
        lg: "h-12 px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, min, onKeyDown, ...props }, ref) => {
    const { variant, size, ...inputProps } = props

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Prevent negative signs if type is number and min >= 0
      if (
        type === "number" &&
        min !== undefined &&
        !isNaN(Number(min)) &&
        Number(min) >= 0 &&
        (e.key === "-" || e.key === "Minus")
      ) {
        e.preventDefault()
      }
      onKeyDown?.(e)
    }

    return (
      <input
        type={type}
        min={min}
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        onKeyDown={handleKeyDown}
        {...inputProps}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
