import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-secondary font-normal leading-tight tracking-normal transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--badge-default-bg)] text-[var(--badge-default-text)]",
        ontrack:
          "bg-[var(--badge-ontrack-bg)] text-[var(--badge-ontrack-text)]",
        atrisk: "bg-[var(--badge-atrisk-bg)] text-[var(--badge-atrisk-text)]",
        offtrack:
          "bg-[var(--badge-offtrack-bg)] text-[var(--badge-offtrack-text)]",
        complete:
          "bg-[var(--badge-complete-bg)] text-[var(--badge-complete-text)]",
      },
      shape: {
        pill: "rounded-full",
        badge: "rounded",
      },
      size: {
        sm: "h-6 px-2 py-1 text-xs",
        lg: "h-8 px-3 py-2 text-sm gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "pill",
      size: "sm",
    },
  }
);

const dotColors: Record<string, string> = {
  default: "bg-[var(--badge-default-text)]",
  ontrack: "bg-[var(--badge-ontrack-text)]",
  atrisk: "bg-[var(--badge-atrisk-text)]",
  offtrack: "bg-[var(--badge-offtrack-text)]",
  complete: "bg-[var(--badge-complete-text)]",
};

const borderColors: Record<string, string> = {
  default: "border-[var(--badge-default-border)]",
  ontrack: "border-[var(--badge-ontrack-border)]",
  atrisk: "border-[var(--badge-atrisk-border)]",
  offtrack: "border-[var(--badge-offtrack-border)]",
  complete: "border-[var(--badge-complete-border)]",
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  hasDot?: boolean;
  hasBorder?: boolean;
  hasRemoveButton?: boolean;
  onRemove?: () => void;
}

function Badge({
  className,
  variant = "default",
  shape,
  size,
  hasDot,
  hasBorder,
  hasRemoveButton,
  onRemove,
  children,
  ...props
}: BadgeProps) {
  const variantKey = variant || "default";
  const dotClass = dotColors[variantKey];
  const borderClass = hasBorder ? borderColors[variantKey] : "";

  return (
    <div
      className={cn(
        badgeVariants({ variant, shape, size }),
        hasBorder && `border-[0.5px] ${borderClass}`,
        (hasDot || hasRemoveButton) && "flex-row gap-1",
        className
      )}
      {...props}
    >
      {hasDot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full opacity-75", dotClass)}
        />
      )}
      <span>{children}</span>
      {hasRemoveButton && (
        <button
          type="button"
          onClick={onRemove}
          className="w-3 h-3 flex items-center justify-center text-icon hover:text-icon-active focus:outline-none focus-visible:ring-1 focus-visible:ring-current rounded-sm transition-colors"
          aria-label="Remove"
        >          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 2.5L9.5 9.5M2.5 9.5L9.5 2.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

export { Badge, badgeVariants, type BadgeVariant };
