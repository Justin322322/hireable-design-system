import { useEffect, useMemo, useState } from "react";
import { useWindowSize } from "./useWindowSize";

interface UseCardScaleOptions {
  contentWidth?: number;
  padding?: number;
}

/**
 * Reusable hook for calculating responsive card scale
 * Used by FirstCard, MiddleCard, LastCard in FeaturesSection
 */
export function useCardScale(options: UseCardScaleOptions = {}) {
  const { contentWidth = 408, padding = 60 } = options;
  const { width } = useWindowSize();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const scale = useMemo(() => {
    // Always return 1 before mount to match server render
    if (!hasMounted || width === 0) return 1;

    const availableWidth = width - padding;

    if (availableWidth < contentWidth) {
      return availableWidth / contentWidth;
    }

    return 1;
  }, [width, hasMounted, contentWidth, padding]);

  return { scale, hasMounted };
}
