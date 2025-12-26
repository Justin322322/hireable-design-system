"use client"

import * as React from "react"
import { Icon } from "./icon"
import { Input, type InputProps } from "./input"
import { cn } from "@/lib/utils"

export interface CurrencyInputProps
  extends Omit<InputProps, "onChange"> {
  onValueChange?: (value: string) => void
}

const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ className, value, onValueChange, ...props }, ref) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      
      // Remove all non-numeric characters except decimal point
      const cleanValue = inputValue.replace(/[^0-9.]/g, "")
      
      // Ensure only one decimal point
      const parts = cleanValue.split(".")
      if (parts.length > 2) return

      // Format integer part with commas
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      
      const formattedValue = parts.join(".")
      
      if (onValueChange) {
        onValueChange(formattedValue)
      }
    }

    return (
      <div className="relative flex items-center">
        <span className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center text-icon pointer-events-none">
          <Icon icon="attach_money" size={20} />
        </span>
        <Input
          type="text"
          inputMode="decimal"
          className={cn("pl-12", className)}
          value={value}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
CurrencyInput.displayName = "CurrencyInput"

export { CurrencyInput }
