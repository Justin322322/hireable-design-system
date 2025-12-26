"use client"

import * as React from "react"
import { CurrencyInput, Label } from "@/components/ui"

export default function CurrencyInputDemo() {
  const [value, setValue] = React.useState("")

  return (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="amount">Amount</Label>
      <CurrencyInput
        id="amount"
        placeholder="0.00"
        value={value}
        onValueChange={setValue}
      />
    </div>
  )
}
