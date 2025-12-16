import { useEffect, useMemo, useState } from "react";
import { ANIMATION_PHASES, type AnimationPhase } from "./constants";

export function useMatchAnimation(shouldAnimate: boolean) {
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>("idle");
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (shouldAnimate) {
      setAnimationPhase("phase1");
      setAnimationComplete(false);

      // Phase 2: Blue lines appear
      const phase2Timer = setTimeout(() => {
        setAnimationPhase("phase2");
      }, ANIMATION_PHASES.GREY_LINES_HIDE * 1000);

      // Complete: Remove will-change after all animations
      const completeTimer = setTimeout(
        () => {
          setAnimationPhase("complete");
          setAnimationComplete(true);
        },
        (ANIMATION_PHASES.MATCHED_POPUP + 0.5) * 1000
      );

      return () => {
        clearTimeout(phase2Timer);
        clearTimeout(completeTimer);
      };
    } else {
      setAnimationPhase("idle");
      setAnimationComplete(false);
    }
  }, [shouldAnimate]);

  const containerStyle = useMemo(
    () => ({
      willChange:
        shouldAnimate && !animationComplete ? "contents" : ("auto" as const),
    }),
    [shouldAnimate, animationComplete]
  );

  return { animationPhase, animationComplete, containerStyle };
}
