export interface AnimationState {
  currentNameIndex: number;
  showLoadingPhase: boolean;
  showProcessingPhase: boolean;
  showTrendsPhase: boolean;
  showSecondTrendPhase: boolean;
  showThirdTrendPhase: boolean;
  showAnalyzingPhase: boolean;
  showCompletionPhase: boolean;
  showSuggestedActions: boolean;
  loadingProgress: number;
  suggestedActionsHeight: number;
}

export const INITIAL_STATE: AnimationState = {
  currentNameIndex: 0,
  showLoadingPhase: false,
  showProcessingPhase: false,
  showTrendsPhase: false,
  showSecondTrendPhase: false,
  showThirdTrendPhase: false,
  showAnalyzingPhase: false,
  showCompletionPhase: false,
  showSuggestedActions: false,
  loadingProgress: 0,
  suggestedActionsHeight: 0,
};

/**
 * Animate progress using setInterval instead of RAF for better performance.
 * Updates every 50ms instead of every frame (~16ms).
 */
export function animateProgress(
  from: number,
  to: number,
  duration: number,
  onUpdate: (value: number) => void,
  onComplete?: () => void
): () => void {
  const startTime = Date.now();
  const interval = 50; // Update every 50ms instead of every frame

  const timerId = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = from + (to - from) * progress;
    onUpdate(value);

    if (progress >= 1) {
      clearInterval(timerId);
      onComplete?.();
    }
  }, interval);

  return () => clearInterval(timerId);
}

export function createDelayedAction(
  delay: number,
  action: () => void
): () => void {
  const timer = setTimeout(action, delay);
  return () => clearTimeout(timer);
}
