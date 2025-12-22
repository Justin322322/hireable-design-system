"use client"

import * as React from "react"
import { Icon } from "@/components/ui/icon"
import { Input } from "@/components/ui/input"

export function PasswordInputDemo() {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="space-y-2 max-w-sm">
      <label htmlFor="password" className="text-sm font-medium">
        Password
      </label>
      <div className="relative flex items-center">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 flex h-4 w-4 items-center justify-center text-icon hover:text-foreground"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <Icon icon={showPassword ? "visibility_off" : "visibility"} size={20} className="text-icon" />
        </button>
      </div>
    </div>
  )
}
