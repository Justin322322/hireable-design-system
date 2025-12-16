"use client";

import { motion } from "framer-motion";
import React from "react";

interface SlotDigitProps {
  targetDigit: number;
  shouldAnimate: boolean;
  delay?: number;
  width?: number;
}

/**
 * SlotDigit Component
 *
 * Renders a single digit with slot-machine style animation.
 * Used for animated number displays like payment amounts.
 */
const SlotDigitComponent = ({
  targetDigit,
  shouldAnimate,
  delay = 0,
  width = 28,
}: SlotDigitProps) => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const digitHeight = 52;

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: digitHeight, width }}
    >
      <motion.div
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{
          y: shouldAnimate ? -targetDigit * digitHeight : 0,
        }}
        transition={{
          duration: 1.5,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {digits.map((digit) => (
          <div
            key={digit}
            className="flex items-center justify-center font-['DM_Sans'] text-[40px] font-semibold text-black"
            style={{
              height: digitHeight,
              width: 28,
              lineHeight: `${digitHeight}px`,
            }}
          >
            {digit}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SlotDigit = React.memo(SlotDigitComponent);
SlotDigit.displayName = "SlotDigit";
