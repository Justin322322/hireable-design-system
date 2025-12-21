import { useState, useCallback } from "react"

export interface UseToggleReturn {
  isOn: boolean
  toggle: () => void
  setMethod: (value: boolean) => void
}

export function useToggle(initialState = false): UseToggleReturn {
  const [isOn, setIsOn] = useState(initialState)

  const toggle = useCallback(() => setIsOn((prev) => !prev), [])
  const setMethod = useCallback((value: boolean) => setIsOn(value), [])

  return {
    isOn,
    toggle,
    setMethod,
  }
}
