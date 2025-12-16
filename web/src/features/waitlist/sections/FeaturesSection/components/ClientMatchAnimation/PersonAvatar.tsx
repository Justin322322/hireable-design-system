import Image from "next/image";
import React from "react";
import type { AnimationPhase } from "./constants";

interface PersonAvatarProps {
  position: "person1" | "person2";
  shouldAnimate: boolean;
  animationPhase: AnimationPhase;
  animationComplete: boolean;
}

const POSITIONS = {
  person1: {
    className: "absolute top-[31px] left-[31px]",
    imageSrc: "/images/Jacob-Smith.svg",
    bgColor: "bg-white",
  },
  person2: {
    className: "absolute top-[166px] left-[304px]",
    imageSrc: "/images/Catalina-Ramos.svg",
    bgColor: "bg-neutral-300",
  },
};

export const PersonAvatar = React.memo<PersonAvatarProps>(
  ({ position, shouldAnimate, animationPhase, animationComplete }) => {
    const config = POSITIONS[position];
    const isComplete = animationPhase === "complete";
    const isPhase2OrComplete =
      animationPhase === "phase2" || animationPhase === "complete";

    const shouldShowColor =
      position === "person1" ? shouldAnimate : isPhase2OrComplete;

    return (
      <div
        className={`${config.className} z-10 inline-flex flex-col items-start gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid bg-white p-[4.77px]`}
        style={{
          borderColor: isComplete ? "#A8D8F0" : "#d4d4d4",
          transition: "border-color 0.3s ease-out",
        }}
      >
        <div
          className={`size-[63.59px] overflow-hidden rounded-[198.73px] ${config.bgColor}`}
          style={{
            filter: shouldShowColor ? "grayscale(0)" : "grayscale(1)",
            transition: shouldAnimate
              ? position === "person1"
                ? "filter 0.3s ease-in-out"
                : "filter 0.5s ease-in-out"
              : "filter 0.2s ease-out",
            willChange: shouldAnimate && !animationComplete ? "filter" : "auto",
          }}
        >
          <Image
            className="size-16 rounded-full object-cover"
            alt="Profile"
            src={config.imageSrc}
            width={64}
            height={64}
            priority
          />
        </div>
      </div>
    );
  }
);

PersonAvatar.displayName = "PersonAvatar";
