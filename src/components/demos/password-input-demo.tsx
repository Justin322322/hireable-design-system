

import { Label, PasswordInput } from "@/components/ui"

export default function PasswordInputDemo() {
  return (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="password">Password</Label>
      <PasswordInput
        id="password"
        placeholder="Enter password"
      />
    </div>
  )
}
