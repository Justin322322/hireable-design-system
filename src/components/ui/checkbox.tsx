"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  size?: "sm" | "md" | "lg";
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size = "sm", label, disabled, checked, onChange, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    const sizeClasses = {
      sm: "size-4 rounded-[3.2px]",
      md: "size-6 rounded",
      lg: "size-7 rounded",
    };

    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
    };

    const gapClasses = {
      sm: "gap-2",
      md: "gap-2",
      lg: "gap-3",
    };

    const labelClasses = {
      sm: "text-sm font-secondary leading-[1.2] tracking-[0.2px]",
      md: "text-base font-nunito leading-[1.5] tracking-[0.2px]",
      lg: "text-base font-nunito leading-[1.5] tracking-[0.2px]",
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked);
    };

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          "inline-flex items-center cursor-pointer",
          gapClasses[size],
          disabled && "cursor-not-allowed opacity-70",
          className
        )}
      >
        {/* Hidden native checkbox for accessibility */}
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only peer"
          {...props}
        />
        
        {/* Visual checkbox */}
        <div
          className={cn(
            "relative shrink-0 flex items-center justify-center transition-colors",
            sizeClasses[size],
            // Idle state (unchecked)
            !checked && !disabled && "bg-background border border-button-tertiary-border hover:border-border-hover",
            // Active/Checked state
            checked && !disabled && "bg-button-primary-default",
            // Disabled states
            disabled && !checked && "bg-muted border border-border-disabled",
            disabled && checked && "bg-button-primary-disabled",
            // Focus ring (from peer)
            "peer-focus-visible:ring-2 peer-focus-visible:ring-border-focused peer-focus-visible:ring-offset-2"
          )}
          aria-hidden="true"
        >
          {checked && (
            <Icon
              icon="check"
              size={iconSizes[size] as 16 | 20 | 24}
              className={cn(
                // Checked state
                !disabled && "text-button-primary-foreground",
                // Disabled state
                disabled && "text-button-primary-disabled-foreground"
              )}
            />
          )}
        </div>

        {/* Label text */}
        {label && (
          <span
            className={cn(
              labelClasses[size],
              !disabled && "text-foreground",
              disabled && "text-button-primary-disabled-foreground"
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
