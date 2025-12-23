"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"

export type RadioSize = "sm" | "md" | "lg"

const sizeConfig = {
  sm: {
    outer: "size-4 rounded-full",             // 16px outer
    innerSize: 10,                            // inner circle size in px
    gap: "gap-2",                             // 8px gap
    labelText: "text-sm",                     // 14px
  },
  md: {
    outer: "size-6 rounded-full",             // 24px outer
    innerSize: 16,                            // inner circle size in px
    gap: "gap-2",                             // 8px gap
    labelText: "text-sm",                     // 14px
  },
  lg: {
    outer: "size-7 rounded-full",             // 28px outer
    innerSize: 18,                            // inner circle size in px
    gap: "gap-3",                             // 12px gap
    labelText: "text-base",                   // 16px
  },
}

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex flex-col gap-3", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export interface RadioGroupItemProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, "children"> {
  size?: RadioSize
  label?: string
  description?: string
}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size = "sm", label, description, ...props }, ref) => {
  const config = sizeConfig[size]
  const hasDescription = !!description

  const radioButton = (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        // Base styles - use relative for indicator positioning
        "relative transition-colors border shrink-0",
        // Idle state (unchecked)
        "border-button-tertiary-border bg-background",
        // Hover state
        "hover:border-button-primary-default",
        // Focus state
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-border-focused focus-visible:ring-offset-2",
        // Checked state - border matches the inner fill, background stays white
        "data-[state=checked]:border-button-primary-default",
        // Disabled state
        "disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-muted",
        // Size-specific styles
        config.outer,
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
        <svg
          width={config.innerSize}
          height={config.innerSize}
          viewBox={`0 0 ${config.innerSize} ${config.innerSize}`}
          className="text-button-primary-default"
        >
          <circle
            cx={config.innerSize / 2}
            cy={config.innerSize / 2}
            r={config.innerSize / 2}
            fill="currentColor"
          />
        </svg>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )

  if (!label) {
    return radioButton
  }

  return (
    <label
      className={cn(
        "flex cursor-pointer",
        config.gap,
        hasDescription ? "items-start" : "items-center",
        props.disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <span className={cn("flex shrink-0", hasDescription && "pt-1")}>
        {radioButton}
      </span>
      {hasDescription ? (
        <span className="flex flex-col gap-0.5">
          <span className={cn("font-secondary leading-normal tracking-[0.2px] text-foreground", config.labelText)}>
            {label}
          </span>
          <span className="font-secondary text-sm leading-[1.2] tracking-[0.2px] text-muted-foreground">
            {description}
          </span>
        </span>
      ) : (
        <span className={cn("font-secondary leading-[1.2] tracking-[0.2px] text-foreground", config.labelText)}>
          {label}
        </span>
      )}
    </label>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
