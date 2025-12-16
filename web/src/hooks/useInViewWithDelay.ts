"use client";

import { useInView } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

interface UseInViewWithDelayOptions {
  /**
   * Amount of element that must be visible (0-1)
   * @default 0.3
   */
  amount?: number;
  /**
   * Delay in ms before setting inView to false (prevents jumping)
   * @default 500
   */
  exitDelay?: number;
  /**
   * If true, only triggers once and never resets
   * @default false
   */
  once?: boolean;
}

/**
 * Wrapper around framer-motion's useInView that adds exit delay
 * to prevent jarring animation resets when scrolling.
 */
export function useInViewWithDelay(
  ref: RefObject<HTMLElement | null>,
  options: UseInViewWithDelayOptions = {}
): boolean {
  const { amount = 0.3, exitDelay = 500, once = false } = options;

  const isInView = useInView(ref, { once, amount });
  const [debouncedInView, setDebouncedInView] = useState(false);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasTriggeredOnce = useRef(false);

  useEffect(() => {
    if (isInView) {
      // Clear any pending exit timer
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
      setDebouncedInView(true);
      hasTriggeredOnce.current = true;
    } else if (!once || !hasTriggeredOnce.current) {
      // Delay the exit to prevent jumping
      if (!exitTimerRef.current && debouncedInView) {
        exitTimerRef.current = setTimeout(() => {
          setDebouncedInView(false);
          exitTimerRef.current = null;
        }, exitDelay);
      }
    }

    return () => {
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
      }
    };
  }, [isInView, exitDelay, once, debouncedInView]);

  return debouncedInView;
}
