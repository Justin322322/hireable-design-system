"use client";

import throttle from "lodash/throttle";
import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export function useThrottledWindowSize(wait = 100): WindowSize {
  // Initialize with 0 to prevent hydration mismatch
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Use lodash throttle to limit the rate of updates
    const throttledHandleResize = throttle(handleResize, wait);

    // Initial call to set correct size after mount
    handleResize();

    window.addEventListener("resize", throttledHandleResize);
    return () => {
      throttledHandleResize.cancel();
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, [wait]);

  return windowSize;
}
