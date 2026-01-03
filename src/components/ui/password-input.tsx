"use client"

import * as React from "react"
import { Icon } from "./icon"
import { Input, type InputProps } from "./input"
import { cn } from "@/lib/utils"

export type PasswordInputProps = Omit<InputProps, "type">

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [capsLockActive, setCapsLockActive] = React.useState(false)

    const checkCapsLock = (
      e: React.KeyboardEvent | React.MouseEvent
    ) => {
      if (e.getModifierState("CapsLock")) {
        setCapsLockActive(true)
      } else {
        setCapsLockActive(false)
      }
    }

    return (
      <div className="relative flex items-center">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          ref={ref}
          {...props}
          onKeyDown={(e) => {
            checkCapsLock(e)
            props.onKeyDown?.(e)
          }}
          onKeyUp={(e) => {
            checkCapsLock(e)
            props.onKeyUp?.(e)
          }}
          onClick={(e) => {
            checkCapsLock(e)
            props.onClick?.(e)
          }}
        />
        {capsLockActive && (
          <div
            className="absolute right-12 flex items-center justify-center text-warning"
            title="Caps Lock is on"
            role="alert"
            aria-live="polite"
          >
            <Icon icon="warning" size={20} />
            <span className="sr-only">Caps Lock is on</span>
          </div>
        )}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 flex h-4 w-4 items-center justify-center text-icon hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <Icon
            icon={showPassword ? "visibility_off" : "visibility"}
            size={20}
            className="text-icon"
          />
        </button>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
