"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect media query matches with SSR-safe initialization.
 * Always returns false on server to prevent hydration mismatch.
 */
export function useMediaQuery(query: string): boolean {
  // Always start with false to match server render
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial value after mount
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
