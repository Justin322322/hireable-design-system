import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex w-full rounded-lg border bg-background font-secondary text-sm transition-colors placeholder:text-text-tertiary focus-visible:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "border-input hover:border-foreground focus:border-border-focused focus-visible:border-border-focused",
        filled: "border-transparent bg-muted",
        ghost: "border-transparent hover:bg-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, disabled, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          textareaVariants({ variant }),
          "min-h-[131px] resize-y p-4",
          disabled && "border-input text-neutral-muted placeholder:text-neutral-muted cursor-not-allowed bg-background opacity-100",
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
