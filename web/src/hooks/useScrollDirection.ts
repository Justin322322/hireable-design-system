import { throttle } from "lodash-es";
import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect scroll direction
 *
 * @param threshold - Minimum scroll distance before hiding (default: 100)
 * @returns boolean indicating if scrolling up (navbar should be visible)
 *
 * @example
 * const isScrollingUp = useScrollDirection(100);
 */

export const useScrollDirection = (threshold: number = 100): boolean => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsScrollingUp(true);
      } else if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > threshold
      ) {
        // Scrolling down and past threshold
        setIsScrollingUp(false);
      }

      // Always show navbar at the top
      if (currentScrollY < 10) {
        setIsScrollingUp(true);
      }

      lastScrollY.current = currentScrollY;
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      throttledHandleScroll.cancel();
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [threshold]);

  return isScrollingUp;
};
