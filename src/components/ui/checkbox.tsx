import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
}

function Checkbox({ className, size = "sm", label, disabled, checked }: CheckboxProps) {
  const sizeClasses = {
    sm: "size-4 rounded-[3.2px]",
    md: "size-6 rounded",
    lg: "size-7 rounded",
  };

  const iconSizes = {
    sm: 12,
    md: 18,
    lg: 20,
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

  const checkboxElement = (
    <div
      className={cn(
        "relative shrink-0 flex items-center justify-center",
        sizeClasses[size],
        // Idle state (unchecked)
        !checked && !disabled && "bg-background border border-button-tertiary-border",
        // Active/Checked state
        checked && !disabled && "bg-button-primary-default",
        // Disabled state
        disabled && "bg-button-primary-disabled"
      )}
    >
      {checked && (
        <Check
          size={iconSizes[size]}
          strokeWidth={2.5}
          className={cn(
            // Checked state
            !disabled && "text-button-primary-foreground",
            // Disabled state
            disabled && "text-button-primary-disabled-foreground"
          )}
        />
      )}
    </div>
  );

  if (label) {
    return (
      <div
        className={cn(
          "inline-flex items-center",
          gapClasses[size],
          className
        )}
      >
        {checkboxElement}
        <span
          className={cn(
            labelClasses[size],
            !disabled && "text-foreground",
            disabled && "text-button-primary-disabled-foreground"
          )}
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("inline-flex", className)}>
      {checkboxElement}
    </div>
  );
}

export { Checkbox };
