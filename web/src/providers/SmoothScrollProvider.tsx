/**
 * Smooth Scroll Provider - Initializes Lenis smooth scroll
 *
 * This is a thin wrapper component that initializes Lenis and stores
 * the instance in the UI store. Components can access it via useLenis().
 */

"use client";

import { useSetLenis } from "@/stores";
import Lenis from "lenis";
import React, { useEffect } from "react";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider = ({
  children,
}: SmoothScrollProviderProps): React.ReactElement => {
  const setLenis = useSetLenis();

  useEffect(() => {
    const lenisInstance = new Lenis({
      // Smooth scroll duration
      duration: 1.2,
      // Easing function for smooth scroll
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Scroll direction
      orientation: "vertical",
      // Gesture orientation
      gestureOrientation: "vertical",
      // Smooth scroll on touch devices
      touchMultiplier: 2,
      // Infinite scroll
      infinite: false,
      // Sync scroll to wrapped element
      syncTouch: false,
    });

    setLenis(lenisInstance);

    // Animation frame loop
    let rafId: number;
    function raf(time: number): void {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
      setLenis(null);
    };
  }, [setLenis]);

  return <>{children}</>;
};
