import { useSelectedRole } from "@/stores";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

// Animation constants
const getMovingMap = (color: string): Record<Direction, string> => ({
  TOP: `radial-gradient(20.7% 50% at 50% 0%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`,
  LEFT: `radial-gradient(16.6% 43.1% at 0% 50%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`,
  BOTTOM: `radial-gradient(20.7% 50% at 50% 100%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`,
  RIGHT: `radial-gradient(16.2% 41.2% at 100% 50%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`,
});

const getHighlightGradient = (color: string): string =>
  `radial-gradient(75% 181.15942028985506% at 50% 50%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`;

const ANIMATION_DURATION = 1.5;
const HOVER_DURATION = 0.5;

const rotateDirection = (currentDirection: Direction): Direction => {
  const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
  const currentIndex = directions.indexOf(currentDirection);
  const nextIndex = (currentIndex - 1 + directions.length) % directions.length;
  return directions[nextIndex];
};

// Hover state colors from Figma design
const HOVER_COLORS = {
  // Text colors on hover (from Figma)
  headingColor: "#797979", // Base heading on hover
  headingColorAlt: "#BABABA", // Lighter overlay heading on hover
  paragraphColor: "#616161",
  // CTA button hover styles
  ctaOuterGradient: "linear-gradient(180deg, #ACE2FD -22.19%, #E1F5FF 100%)",
  ctaInnerGradient:
    "linear-gradient(180deg, #E8F7FF 0%, #CCEDFF 46.63%, #CCEDFF 100%)",
  ctaShadow:
    "0px 6px 16px 2px rgba(85, 195, 255, 0.24), 0px 2px 4px rgba(0, 0, 0, 0.1)",
  // Glow effect
  glowColor: "#86D4FF",
  glowOpacity: 0.85,
};

export const useCallToActionAnimation = () => {
  const selectedRole = useSelectedRole();
  const [direction, setDirection] = useState<Direction>("TOP");
  const [hovered, setHovered] = useState<boolean>(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const isTalent = selectedRole === "talent";
  const accentColor = isTalent
    ? "rgba(255, 107, 157, 1)"
    : "rgba(134, 212, 255, 1)"; // #86D4FF for client
  const textAccentColor = isTalent ? "rgba(255, 107, 157, 0.8)" : "#BABABA";
  const textAccentColorAlt = isTalent ? "rgba(255, 107, 157, 0.9)" : "#616161";

  const MOVING_MAP = getMovingMap(accentColor);
  const HIGHLIGHT_GRADIENT = getHighlightGradient(accentColor);

  useEffect(() => {
    if (!hovered && isInView) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, ANIMATION_DURATION * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, isInView]);

  return {
    ref,
    direction,
    hovered,
    setHovered,
    isTalent,
    textAccentColor,
    textAccentColorAlt,
    MOVING_MAP,
    HIGHLIGHT_GRADIENT,
    HOVER_DURATION,
    ANIMATION_DURATION,
    HOVER_COLORS,
  };
};
