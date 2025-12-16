"use client";

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

/**
 * AnimatedCounter Component
 *
 * Animates a number from one value to another using framer-motion.
 * Useful for progress indicators, stats, and counters.
 */
export const AnimatedCounter = ({
  from,
  to,
  duration,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration,
      ease: "linear",
      onUpdate(value) {
        node.textContent = prefix + Math.round(value) + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, duration, suffix, prefix]);

  return <div ref={nodeRef} className={className} />;
};
