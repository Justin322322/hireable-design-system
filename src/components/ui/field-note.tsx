import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Icon, type IconName } from "./icon"

const fieldNoteVariants = cva(
  "flex flex-row items-start p-4 gap-4 w-full rounded-lg font-secondary text-sm leading-tight tracking-normal",
  {
    variants: {
      variant: {
        info: "bg-[var(--fieldnote-info-bg)] text-[var(--fieldnote-info-text)]",
        warning: "bg-[var(--fieldnote-warning-bg)] text-[var(--fieldnote-warning-text)]",
        success: "bg-[var(--fieldnote-success-bg)] text-[var(--fieldnote-success-text)]",
        error: "bg-[var(--fieldnote-error-bg)] text-[var(--fieldnote-error-text)]",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

const variantIcons: Record<string, IconName> = {
  info: "info",
  warning: "warning",
  success: "check_circle",
  error: "error",
}

export interface FieldNoteProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldNoteVariants> {
  /** Hide the icon */
  hideIcon?: boolean
}

const FieldNote = React.forwardRef<HTMLDivElement, FieldNoteProps>(
  ({ className, variant = "info", hideIcon = false, children, ...props }, ref) => {
    const iconName = variantIcons[variant || "info"]
    
    return (
      <div
        ref={ref}
        className={cn(fieldNoteVariants({ variant }), className)}
        {...props}
      >
        {!hideIcon && (
          <Icon icon={iconName} size={20} className="shrink-0" />
        )}
        <div className="flex-1">{children}</div>
      </div>
    )
  }
)
FieldNote.displayName = "FieldNote"

export { FieldNote, fieldNoteVariants }
