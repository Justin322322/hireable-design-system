"use client";

import { RefObject, useCallback, useEffect, useRef, useState } from "react";

interface UseViewportCenterOptions {
  /**
   * Threshold for "centered" detection (0-1, percentage of viewport height)
   * @default 0.2
   */
  threshold?: number;
  /**
   * Enable or disable the observer
   * @default true
   */
  enabled?: boolean;
  /**
   * Delay in ms before setting isCentered to false (prevents jumping)
   * @default 500
   */
  exitDelay?: number;
}

/**
 * Hook to detect when an element is centered in the viewport.
 * Uses hysteresis: activates when near center, deactivates only when completely out of viewport.
 * This prevents shaking/bouncing when element is at the edge of the threshold.
 *
 * @param ref - React ref to the element to observe
 * @param options - Configuration options
 * @returns boolean indicating if the element is centered in viewport
 */
export function useViewportCenter(
  ref: RefObject<HTMLElement | null>,
  options: UseViewportCenterOptions = {}
): boolean {
  const { threshold = 0.2, enabled = true } = options;
  const [isCentered, setIsCentered] = useState(false);
  const isActiveRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const checkCenter = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;
    const elementCenter = rect.top + rect.height / 2;
    const centerThreshold = viewportHeight * threshold;
    const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
    const isNearCenter = distanceFromCenter <= centerThreshold;
    const isInViewport = rect.bottom > 0 && rect.top < viewportHeight;

    if (!isActiveRef.current && isNearCenter && isInViewport) {
      // Enter: element is near center - activate
      isActiveRef.current = true;
      setIsCentered(true);
    } else if (isActiveRef.current && !isInViewport) {
      // Exit: only when completely out of viewport
      isActiveRef.current = false;
      setIsCentered(false);
    }
    // If element is in viewport but not centered, keep current state (hysteresis)
  }, [ref, threshold]);

  useEffect(() => {
    if (!enabled) {
      setIsCentered(false);
      isActiveRef.current = false;
      return;
    }

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        checkCenter();
        rafRef.current = null;
      });
    };

    // Initial check
    checkCenter();

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled, checkCenter]);

  return isCentered;
}
