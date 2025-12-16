import { motion } from "framer-motion";
import React from "react";
import { ANIMATION_PHASES, type AnimationPhase } from "./constants";

interface AnimatedSVGProps {
  shouldAnimate: boolean;
  animationPhase: AnimationPhase;
}

export const AnimatedSVG = React.memo<AnimatedSVGProps>(
  ({ shouldAnimate, animationPhase }) => {
    const isPhase2OrComplete =
      animationPhase === "phase2" || animationPhase === "complete";

    return (
      <svg
        className="pointer-events-none absolute inset-0 size-full"
        style={{ zIndex: 5 }}
      >
        <defs>
          <linearGradient
            id="rainbowGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF2FC5" />
            <stop offset="33%" stopColor="#FB2E6F" />
            <stop offset="66%" stopColor="#FF8112" />
            <stop offset="100%" stopColor="#FF8112" />
          </linearGradient>

          {/* Mask for vector-2 path (person to logo) */}
          <mask id="vector2Mask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              style={{
                transform: shouldAnimate
                  ? "translateX(0%)"
                  : "translateX(-100%)",
                transition: shouldAnimate
                  ? "transform 2s ease-in-out"
                  : "transform 0.3s ease-out",
              }}
            />
          </mask>

          {/* Mask for vector-1 path (logo to person) */}
          <mask id="vector1Mask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              style={{
                transform: shouldAnimate
                  ? "translateX(0%)"
                  : "translateX(-100%)",
                transition: shouldAnimate
                  ? `transform 1.5s ease-in-out ${ANIMATION_PHASES.RAINBOW_PATH2_START}s`
                  : "transform 0.3s ease-out",
              }}
            />
          </mask>

          {/* Mask for hiding grey line 1 */}
          <mask id="greyLine1HideMask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <motion.path
              d="M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686"
              stroke="black"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={
                isPhase2OrComplete ? { pathLength: 1 } : { pathLength: 0 }
              }
              transition={
                isPhase2OrComplete
                  ? {
                      duration: ANIMATION_PHASES.BLUE_PATH_DURATION,
                      ease: "easeInOut",
                    }
                  : { duration: 0.2 }
              }
            />
          </mask>

          {/* Mask for hiding grey line 2 */}
          <mask id="greyLine2HideMask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <motion.path
              d="M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0"
              stroke="black"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={
                isPhase2OrComplete ? { pathLength: 1 } : { pathLength: 0 }
              }
              transition={
                isPhase2OrComplete
                  ? {
                      duration: ANIMATION_PHASES.BLUE_PATH_DURATION,
                      ease: "easeInOut",
                    }
                  : { duration: 0.2 }
              }
            />
          </mask>
        </defs>

        {/* Grey base lines - masked to be "eaten" by blue lines */}
        <g transform="translate(67, -9)" mask="url(#greyLine1HideMask)">
          <path
            d="M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686"
            className="stroke-neutral-300"
            strokeWidth="0.962264"
            fill="none"
            strokeDasharray="3.85 3.85"
          />
        </g>

        <g transform="translate(204, 133)" mask="url(#greyLine2HideMask)">
          <path
            d="M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0"
            className="stroke-neutral-300"
            strokeWidth="0.962264"
            fill="none"
            strokeDasharray="3.85 3.85"
          />
        </g>

        {/* Animated rainbow colored paths */}
        <g transform="translate(67, -9)">
          <path
            d="M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686"
            stroke="url(#rainbowGradient)"
            strokeWidth="0.962264"
            fill="none"
            strokeDasharray="3.85 3.85"
            mask="url(#vector2Mask)"
          />
        </g>

        <g transform="translate(204, 133)">
          <path
            d="M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0"
            stroke="url(#rainbowGradient)"
            strokeWidth="0.962264"
            fill="none"
            strokeDasharray="3.85 3.85"
            mask="url(#vector1Mask)"
          />
        </g>

        {/* Blue strike paths */}
        {isPhase2OrComplete && (
          <g style={{ opacity: 1, animation: `fadeIn 0.1s ease-out forwards` }}>
            <g transform="translate(67, -9)">
              <motion.path
                d="M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686"
                stroke="#7FCFFF"
                strokeWidth="1.5"
                strokeOpacity="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={shouldAnimate ? { pathLength: 1 } : { pathLength: 0 }}
                transition={
                  shouldAnimate
                    ? {
                        duration: ANIMATION_PHASES.BLUE_PATH_DURATION,
                        ease: "easeInOut",
                      }
                    : { duration: 0.2 }
                }
              />
            </g>
            <g transform="translate(204, 133)">
              <motion.path
                d="M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0"
                stroke="#7FCFFF"
                strokeWidth="1.5"
                strokeOpacity="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={shouldAnimate ? { pathLength: 1 } : { pathLength: 0 }}
                transition={
                  shouldAnimate
                    ? {
                        duration: ANIMATION_PHASES.BLUE_PATH_DURATION,
                        ease: "easeInOut",
                      }
                    : { duration: 0.2 }
                }
              />
            </g>
          </g>
        )}
      </svg>
    );
  }
);

AnimatedSVG.displayName = "AnimatedSVG";
