import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface CheckinHeaderProps {
  showLoadingPhase: boolean;
  showProcessingPhase: boolean;
  showTrendsPhase: boolean;
  showSecondTrendPhase: boolean;
  showThirdTrendPhase: boolean;
  showAnalyzingPhase: boolean;
  showCompletionPhase: boolean;
  loadingProgress: number;
}

export const CheckinHeader = React.memo(
  ({
    showLoadingPhase,
    showProcessingPhase,
    showTrendsPhase,
    showSecondTrendPhase,
    showThirdTrendPhase,
    showAnalyzingPhase,
    showCompletionPhase,
    loadingProgress,
  }: CheckinHeaderProps) => {
    const isSpotting =
      showProcessingPhase ||
      showTrendsPhase ||
      showSecondTrendPhase ||
      showThirdTrendPhase;

    return (
      <motion.div className="absolute top-0 left-0 z-50 flex w-full flex-col items-center justify-center gap-1 overflow-hidden px-4 pt-4 pb-2 sm:gap-1.5">
        <div className="relative grid grid-cols-1 grid-rows-1 place-items-center">
          {/* Ghost element to reserve space */}
          <div className="font-text-large-b collapse col-start-1 row-start-1 text-center text-lg leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) whitespace-nowrap [font-style:var(--text-large-b-font-style)] opacity-0">
            Collecting Weekly Checkin
          </div>

          <AnimatePresence mode="popLayout" initial={false}>
            {!showLoadingPhase ? (
              <HeaderText key="header-collecting">
                Collecting Weekly Checkin
              </HeaderText>
            ) : isSpotting ? (
              <HeaderText key="header-spotting" className="gap-1.5">
                <motion.span layout>Spotting Problems</motion.span>
                <motion.span layout>•</motion.span>
                <motion.span
                  key="progress-nums"
                  layout
                  className="inline-block min-w-10 text-left tabular-nums"
                >
                  {Math.round(loadingProgress)}%
                </motion.span>
              </HeaderText>
            ) : showAnalyzingPhase ? (
              <HeaderText key="header-analyzing">Analyzing trends</HeaderText>
            ) : showCompletionPhase ? (
              <HeaderText key="header-completion">
                We Spot 3 Problems
              </HeaderText>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }
);

CheckinHeader.displayName = "CheckinHeader";

const HeaderText = React.memo(
  ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <motion.div
      layout
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(4px)", transition: { duration: 0.15 } }}
      transition={{ duration: 0.25, layout: { duration: 0.35 } }}
      className={`font-text-large-b z-10 col-start-1 row-start-1 flex items-center justify-center text-center text-lg leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-large-b-font-style)] ${className}`}
    >
      {children}
    </motion.div>
  )
);

HeaderText.displayName = "HeaderText";
