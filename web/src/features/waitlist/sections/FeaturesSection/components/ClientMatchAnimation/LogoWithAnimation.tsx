import React from "react";
import { ANIMATION_PHASES, type AnimationPhase } from "./constants";
import { HireableLogo } from "./HireableLogo";

interface LogoWithAnimationProps {
  shouldAnimate: boolean;
  animationPhase: AnimationPhase;
  animationComplete: boolean;
}

export const LogoWithAnimation = React.memo<LogoWithAnimationProps>(
  ({ shouldAnimate, animationPhase, animationComplete }) => {
    const isComplete = animationPhase === "complete";

    return (
      <div className="absolute top-[106px] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
        <div
          className="inline-flex flex-col items-center justify-center gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid bg-white p-[11.55px]"
          style={{
            borderColor: isComplete ? "#A8D8F0" : "#d4d4d4",
            boxShadow: isComplete
              ? "0 0 12px 4px rgba(0, 167, 248, 0.2)"
              : "0 0 0 0 rgba(0, 167, 248, 0)",
            transition: isComplete
              ? "border-color 0.3s ease-out, box-shadow 0.3s ease-out"
              : "border-color 0.2s ease-out, box-shadow 0.2s ease-out",
            willChange:
              shouldAnimate && !animationComplete ? "box-shadow" : "auto",
          }}
        >
          <div className="relative h-[34.69px] w-[34.64px] overflow-hidden">
            {/* Grayscale base */}
            <div
              className="absolute inset-0"
              style={{ filter: "grayscale(1)" }}
            >
              <HireableLogo />
            </div>

            {/* Colored version with CSS clip-path animation */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: shouldAnimate
                  ? "inset(0% 0% 0% 0%)"
                  : "inset(0% 100% 0% 0%)",
                transition: shouldAnimate
                  ? `clip-path ${ANIMATION_PHASES.LOGO_COLOR_DURATION}s ease-out ${ANIMATION_PHASES.LOGO_COLOR_START}s`
                  : "clip-path 0.2s ease-out",
                willChange:
                  shouldAnimate && !animationComplete ? "clip-path" : "auto",
              }}
            >
              <HireableLogo />
            </div>
          </div>
        </div>

        {/* "Matched" popup */}
        {shouldAnimate && isComplete && (
          <div
            className="absolute -top-[72px] left-1/2"
            style={{
              animation: `popIn 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards`,
            }}
          >
            <div className="feature-capsule-rounded px-4 py-2">
              <span className="font-text-s text-sm leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) whitespace-nowrap text-[var(--color-matched-green)] [font-style:var(--text-s-font-style)]">
                Matched
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
);

LogoWithAnimation.displayName = "LogoWithAnimation";
