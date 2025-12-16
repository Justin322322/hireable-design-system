import { motion } from "framer-motion";
import React from "react";

interface PulsingButtonProps {
  /** Click handler for the button */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Size of the button in pixels (default: 23) */
  size?: number;
  /** Size of the inner dot in pixels (default: 15) */
  dotSize?: number;
  /** Maximum size of the ripple in pixels (default: auto-calculated as 2x size) */
  rippleSize?: number;
  /** Color of the button and ripple (default: #00A7F8) */
  color?: string;
  /** Duration of the ripple animation in seconds (default: 1.5) */
  duration?: number;
  /** Opacity of the ripple at its peak (default: 0.2) */
  rippleOpacity?: number;
  /** Additional class names for positioning */
  className?: string;
  /** Aria label for accessibility */
  ariaLabel?: string;
}

export const PulsingButton: React.FC<PulsingButtonProps> = ({
  onClick,
  size = 23,
  dotSize = 15,
  rippleSize,
  color = "#00A7F8",
  duration = 1.5,
  rippleOpacity = 0.2,
  className = "",
  ariaLabel = "Pulsing notification button",
}) => {
  // Auto-calculate ripple size if not provided (2x button size for proportional effect)
  const actualRippleSize = rippleSize ?? size * 2;
  const scale = actualRippleSize / size;

  return (
    <div
      className={`pointer-events-auto flex items-center justify-center ${className}`}
      style={{ width: actualRippleSize, height: actualRippleSize }}
    >
      {/* Ripple pulse */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale, opacity: [0, rippleOpacity, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      {/* Interactive button */}
      <button
        onClick={(e) => onClick?.(e)}
        className="relative flex cursor-pointer items-center justify-center rounded-full border-[0.64px] border-solid bg-white transition-transform hover:scale-110 active:scale-95"
        style={{
          width: size,
          height: size,
          borderColor: color,
        }}
        aria-label={ariaLabel}
      >
        <div
          className="rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
          }}
        />
      </button>
    </div>
  );
};
