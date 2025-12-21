import * as React from "react"
import { useId } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface FormFieldProps extends React.ComponentProps<"div"> {
  label: string
  error?: string
  helperText?: string
  children?: React.ReactNode
  id?: string
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, label, error, helperText, children, id: idProp, ...props }, ref) => {
    const generatedId = useId()
    const id = idProp || generatedId
    const errorId = `${id}-error`
    const descriptionId = `${id}-description`

    // Clone child to inject id and aria-props if it's a valid element
    const child = React.isValidElement(children)
      ? React.cloneElement(children as React.ReactElement<{ id?: string, "aria-invalid"?: boolean, "aria-describedby"?: string }>, {
          id,
          "aria-invalid": !!error,
          "aria-describedby": error
            ? errorId
            : helperText
            ? descriptionId
            : undefined,
        })
      : children

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        <Label htmlFor={id} className={error ? "text-destructive" : ""}>
          {label}
        </Label>
        {child || <Input id={id} aria-invalid={!!error} aria-describedby={error ? errorId : helperText ? descriptionId : undefined} />}
        {helperText && !error && (
          <p
            id={descriptionId}
            className="text-sm text-muted-foreground"
          >
            {helperText}
          </p>
        )}
        {error && (
          <p
            id={errorId}
            className="text-sm font-medium text-destructive"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }
