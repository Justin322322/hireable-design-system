import { useInViewWithDelay } from "@/hooks";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { checkinNames, suggestedActions } from "../../constants";
import { CheckinContent } from "./CheckinContent";
import { CheckinHeader } from "./CheckinHeader";
import { useCheckinAnimation } from "./useCheckinAnimation";

interface WeeklyCheckinCardProps {
  isMobile: boolean;
}

export const WeeklyCheckinCard = React.memo(
  ({ isMobile }: WeeklyCheckinCardProps): React.ReactElement => {
    const checkinCardRef = useRef<HTMLDivElement>(null);
    // Use delayed exit to prevent jarring resets when scrolling
    const isCheckinCardInView = useInViewWithDelay(checkinCardRef, {
      amount: 0.3,
      exitDelay: 800,
    });
    const [isCheckinHovered, setIsCheckinHovered] = useState(false);

    const { state, suggestedActionsRef } = useCheckinAnimation({
      isMobile,
      isInView: isCheckinCardInView,
      isHovered: isCheckinHovered,
      namesCount: checkinNames.length,
    });

    return (
      <div
        ref={checkinCardRef}
        className="flex h-[350px] w-full items-start justify-center"
        onMouseEnter={() => setIsCheckinHovered(true)}
        onMouseLeave={() => setIsCheckinHovered(false)}
      >
        <motion.div
          layout
          className="feature-card flex w-auto max-w-[600px] flex-col items-center gap-0! overflow-hidden p-0!"
          transition={{
            layout: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <motion.div
            layout
            className="relative flex w-full flex-col items-center gap-2 overflow-hidden border-0 bg-transparent shadow-none"
          >
            <CheckinHeader
              showLoadingPhase={state.showLoadingPhase}
              showProcessingPhase={state.showProcessingPhase}
              showTrendsPhase={state.showTrendsPhase}
              showSecondTrendPhase={state.showSecondTrendPhase}
              showThirdTrendPhase={state.showThirdTrendPhase}
              showAnalyzingPhase={state.showAnalyzingPhase}
              showCompletionPhase={state.showCompletionPhase}
              loadingProgress={state.loadingProgress}
            />

            {/* Spacer for absolute header */}
            <div className="h-[54px] w-full shrink-0" />

            <CheckinContent
              showLoadingPhase={state.showLoadingPhase}
              showProcessingPhase={state.showProcessingPhase}
              showTrendsPhase={state.showTrendsPhase}
              showSecondTrendPhase={state.showSecondTrendPhase}
              showThirdTrendPhase={state.showThirdTrendPhase}
              showAnalyzingPhase={state.showAnalyzingPhase}
              showCompletionPhase={state.showCompletionPhase}
              showSuggestedActions={state.showSuggestedActions}
              suggestedActionsHeight={state.suggestedActionsHeight}
              currentNameIndex={state.currentNameIndex}
              checkinNames={checkinNames}
              suggestedActions={suggestedActions}
              suggestedActionsRef={suggestedActionsRef}
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }
);

WeeklyCheckinCard.displayName = "WeeklyCheckinCard";
