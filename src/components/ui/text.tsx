import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
    weight: {
      default: "",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "default",
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: React.ElementType
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, weight, as, ...props }, ref) => {
    // Determine the component to render: the 'as' prop, or the mapping from variant.
    // If neither, fallback to 'p'.
    // Important: React JSX requires the component variable to be Capitalized.
    const Tag = as || mapVariantToTag(variant)

    return React.createElement(Tag, {
      className: cn(textVariants({ variant, weight, className })),
      ref,
      ...props
    })
  }
)
Text.displayName = "Text"

function mapVariantToTag(variant?: TextProps['variant']): React.ElementType {
  switch (variant) {
    case 'h1': return 'h1'
    case 'h2': return 'h2'
    case 'h3': return 'h3'
    case 'h4': return 'h4'
    case 'p': return 'p'
    case 'blockquote': return 'blockquote'
    case 'list': return 'ul'
    default: return 'p'
  }
}

export { Text, textVariants }
