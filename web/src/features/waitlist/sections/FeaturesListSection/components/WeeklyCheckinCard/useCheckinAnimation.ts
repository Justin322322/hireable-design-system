import { useEffect, useRef, useState } from "react";
import {
  animateProgress,
  createDelayedAction,
  INITIAL_STATE,
  type AnimationState,
} from "./checkinAnimationUtils";

interface UseCheckinAnimationProps {
  isMobile: boolean;
  isInView: boolean;
  isHovered: boolean;
  namesCount: number;
}

export type { AnimationState };

export function useCheckinAnimation({
  isMobile,
  isInView,
  isHovered,
  namesCount,
}: UseCheckinAnimationProps) {
  const [state, setState] = useState<AnimationState>(INITIAL_STATE);
  const suggestedActionsRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  const updateState = (updates: Partial<AnimationState>) =>
    setState((prev) => ({ ...prev, ...updates }));

  const resetState = () => setState(INITIAL_STATE);

  // Name cycling effect
  useEffect(() => {
    const shouldTrigger = isMobile ? isInView : isHovered;

    // Prevent re-triggering while animation is running
    if (shouldTrigger && hasTriggeredRef.current) return;

    if (shouldTrigger) {
      hasTriggeredRef.current = true;

      let cycleCount = 0;
      let intervalId: NodeJS.Timeout | null = null;

      const advanceName = () => {
        setState((prev) => {
          const next = prev.currentNameIndex + 1;
          if (next >= namesCount) {
            cycleCount++;
            if (cycleCount >= 1) {
              // Clear interval when loading phase starts
              if (intervalId) clearInterval(intervalId);
              return { ...prev, showLoadingPhase: true };
            }
            return { ...prev, currentNameIndex: 0 };
          }
          return { ...prev, currentNameIndex: next };
        });
      };

      advanceName();
      intervalId = setInterval(advanceName, 2000);
      return () => {
        if (intervalId) clearInterval(intervalId);
      };
    }

    // Reset when leaving viewport (mobile) or unhover (desktop)
    hasTriggeredRef.current = false;
    updateState({ showSuggestedActions: false });
    return createDelayedAction(850, resetState);
  }, [isMobile, isInView, isHovered, namesCount]);

  // Animation sequence effect
  useEffect(() => {
    if (!state.showLoadingPhase) return;

    updateState({ showProcessingPhase: true, loadingProgress: 0 });
    const cleanups: Array<() => void> = [];

    const runSequence = () => {
      updateState({ showProcessingPhase: false, showTrendsPhase: true });

      cleanups.push(
        animateProgress(
          0,
          35,
          2000,
          (v) => updateState({ loadingProgress: v }),
          () => {
            updateState({ showTrendsPhase: false, showSecondTrendPhase: true });

            cleanups.push(
              animateProgress(
                35,
                65,
                2000,
                (v) => updateState({ loadingProgress: v }),
                () => {
                  updateState({
                    showSecondTrendPhase: false,
                    showThirdTrendPhase: true,
                  });

                  cleanups.push(
                    animateProgress(
                      65,
                      100,
                      2000,
                      (v) => updateState({ loadingProgress: v }),
                      () => {
                        cleanups.push(
                          createDelayedAction(800, () => {
                            updateState({
                              showThirdTrendPhase: false,
                              showAnalyzingPhase: true,
                            });
                            cleanups.push(
                              createDelayedAction(2000, () => {
                                updateState({
                                  showAnalyzingPhase: false,
                                  showCompletionPhase: true,
                                });
                              })
                            );
                          })
                        );
                      }
                    )
                  );
                }
              )
            );
          }
        )
      );
    };

    cleanups.push(createDelayedAction(1800, runSequence));
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [state.showLoadingPhase]);

  // Suggested actions height measurement
  useEffect(() => {
    if (state.showCompletionPhase && suggestedActionsRef.current) {
      return createDelayedAction(500, () => {
        const height = suggestedActionsRef.current?.scrollHeight ?? 0;
        updateState({ suggestedActionsHeight: height });
        setTimeout(() => updateState({ showSuggestedActions: true }), 50);
      });
    }
    updateState({ showSuggestedActions: false, suggestedActionsHeight: 0 });
  }, [state.showCompletionPhase]);

  return { state, suggestedActionsRef };
}
