"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui";

export type CheckboxSize = "sm" | "md" | "lg";

const sizeConfig = {
  sm: {
    box: "size-4",
    radius: "rounded-[3.2px]",
    iconSize: 16 as const,
    gap: "gap-2",
    labelText: "text-sm font-secondary leading-[1.2] tracking-[0.2px]",
  },
  md: {
    box: "size-6",
    radius: "rounded",
    iconSize: 20 as const,
    gap: "gap-2",
    labelText: "text-base font-nunito leading-normal tracking-[0.2px]",
  },
  lg: {
    box: "size-7",
    radius: "rounded",
    iconSize: 24 as const,
    gap: "gap-3",
    labelText: "text-base font-nunito leading-normal tracking-[0.2px]",
  },
};

export interface CheckboxProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    "onChange"
  > {
  size?: CheckboxSize;
  label?: string;
  /** @deprecated Use onCheckedChange instead. Kept for backward compatibility. */
  onChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      size = "sm",
      label,
      disabled,
      checked,
      defaultChecked,
      onCheckedChange,
      onChange,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const config = sizeConfig[size];

    // Handle both onCheckedChange (Radix) and onChange (legacy) callbacks
    const handleCheckedChange = (
      value: CheckboxPrimitive.CheckedState
    ) => {
      onCheckedChange?.(value);
      // Legacy callback support - only pass boolean (ignore indeterminate)
      if (onChange && typeof value === "boolean") {
        onChange(value);
      }
    };

    const checkboxElement = (
      <CheckboxPrimitive.Root
        ref={ref}
        id={checkboxId}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onCheckedChange={handleCheckedChange}
        className={cn(
          // Base styles
          "peer relative shrink-0 flex items-center justify-center transition-colors",
          config.box,
          config.radius,
          // Idle state (unchecked)
          "border border-button-tertiary-border bg-background",
          "hover:border-border-hover",
          // Focus state
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focused focus-visible:ring-offset-2",
          // Checked state
          "data-[state=checked]:bg-button-primary-default data-[state=checked]:border-button-primary-default",
          "data-[state=indeterminate]:bg-button-primary-default data-[state=indeterminate]:border-button-primary-default",
          // Disabled states
          "disabled:cursor-not-allowed",
          "disabled:data-[state=unchecked]:bg-muted disabled:data-[state=unchecked]:border-border-disabled",
          "disabled:data-[state=checked]:bg-button-primary-disabled disabled:data-[state=checked]:border-button-primary-disabled",
          "disabled:data-[state=indeterminate]:bg-button-primary-disabled disabled:data-[state=indeterminate]:border-button-primary-disabled",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            "flex items-center justify-center text-button-primary-foreground",
            "data-[disabled]:text-button-primary-disabled-foreground"
          )}
        >
          <Icon icon="check" size={config.iconSize} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    if (!label) {
      return checkboxElement;
    }

    return (
      <div
        className={cn(
          "inline-flex items-center cursor-pointer",
          config.gap,
          disabled && "cursor-not-allowed opacity-70"
        )}
      >
        {checkboxElement}
        <label
          htmlFor={checkboxId}
          className={cn(
            config.labelText,
            "cursor-pointer",
            !disabled && "text-foreground",
            disabled && "text-button-primary-disabled-foreground cursor-not-allowed"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
