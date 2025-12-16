"use client";

import { useReducedMotion } from "framer-motion";
import React from "react";
import { AnimatedSVG } from "./AnimatedSVG";
import { pathAnimationStyles } from "./constants";
import { LogoWithAnimation } from "./LogoWithAnimation";
import { PersonAvatar } from "./PersonAvatar";
import { StaticContent } from "./StaticContent";
import { useMatchAnimation } from "./useMatchAnimation";

interface ClientMatchAnimationProps {
  shouldAnimate: boolean;
}

export const ClientMatchAnimation = React.memo<ClientMatchAnimationProps>(
  ({ shouldAnimate }) => {
    const prefersReducedMotion = useReducedMotion();
    const { animationPhase, animationComplete, containerStyle } =
      useMatchAnimation(shouldAnimate);

    // Use reduced motion: skip animations entirely
    if (prefersReducedMotion) {
      return (
        <div className="relative h-[269.43px] w-[408px] overflow-hidden rounded-[7.7px]">
          <StaticContent isAnimated={shouldAnimate} />
        </div>
      );
    }

    return (
      <>
        <style>{pathAnimationStyles}</style>
        <div
          className="relative h-[269.43px] w-[408px] overflow-hidden rounded-[7.7px]"
          style={containerStyle}
        >
          <AnimatedSVG
            shouldAnimate={shouldAnimate}
            animationPhase={animationPhase}
          />

          <PersonAvatar
            position="person1"
            shouldAnimate={shouldAnimate}
            animationPhase={animationPhase}
            animationComplete={animationComplete}
          />

          <LogoWithAnimation
            shouldAnimate={shouldAnimate}
            animationPhase={animationPhase}
            animationComplete={animationComplete}
          />

          <PersonAvatar
            position="person2"
            shouldAnimate={shouldAnimate}
            animationPhase={animationPhase}
            animationComplete={animationComplete}
          />
        </div>
      </>
    );
  }
);

ClientMatchAnimation.displayName = "ClientMatchAnimation";
