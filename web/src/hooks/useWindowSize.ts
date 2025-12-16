"use client";

import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Hook to get window dimensions with SSR-safe initialization and debounced resize.
 * Returns 0 for both dimensions until after hydration to prevent mismatch.
 */
export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    function handleResize() {
      // Debounce resize events to prevent excessive re-renders
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100);
    }

    // Set initial size immediately after mount
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return windowSize;
}
