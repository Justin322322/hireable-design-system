import { AnimatePresence } from "framer-motion";
import React, { useMemo } from "react";
import { CandidateCard } from "./CandidateCard";
import type { Candidate } from "./types";

// Memoized pipeline column header
export const PipelineColumnHeader = React.memo<{
  title: string;
  count: number;
}>(({ title, count }) => (
  <div className="relative flex h-[15.71px] items-center gap-[5.24px]">
    <span className="font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-semibold tracking-[0.13px] text-neutral-900">
      {title}
    </span>
    <span className="flex h-[15.71px] min-w-[15.71px] items-center justify-center rounded-full bg-neutral-100 px-[5.24px] font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-medium text-neutral-600">
      {count}
    </span>
  </div>
));

PipelineColumnHeader.displayName = "PipelineColumnHeader";

interface PipelineColumnCardsProps {
  candidates: Candidate[];
  columnIndex: number;
  revealedCards: Set<string>;
  newestCardKey: string | null;
  onProfileClick: (candidate: Candidate) => void;
}

// Optimized component for pipeline column cards
export const PipelineColumnCards = React.memo<PipelineColumnCardsProps>(
  ({
    candidates,
    columnIndex,
    revealedCards,
    newestCardKey,
    onProfileClick,
  }) => {
    const visibleCandidates = useMemo(() => {
      const visible = [];
      for (let i = 0; i < candidates.length; i++) {
        if (revealedCards.has(`${columnIndex}-${i}`)) {
          visible.push({
            candidate: candidates[i],
            originalIdx: i,
          });
        }
      }
      // Reverse so newest card is at top
      return visible.reverse();
    }, [candidates, columnIndex, revealedCards]);

    return (
      <div className="relative z-0 flex h-[496.71px] w-[209px] flex-col items-start gap-[5px] overflow-hidden rounded-[5px] bg-[var(--color-neutral-150)] p-[5px]">
        <AnimatePresence mode="popLayout">
          {visibleCandidates.map(({ candidate, originalIdx }) => {
            const cardKey = `${columnIndex}-${originalIdx}`;
            return (
              <CandidateCard
                key={`${candidate.name}-${originalIdx}-${cardKey}`}
                candidate={candidate}
                isNew={cardKey === newestCardKey}
                onProfileClick={onProfileClick}
              />
            );
          })}
        </AnimatePresence>
        {candidates.length === 0 && <div className="size-full" />}
      </div>
    );
  }
);

PipelineColumnCards.displayName = "PipelineColumnCards";
