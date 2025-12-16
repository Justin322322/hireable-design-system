import { useInView } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { HeaderTabs } from "./HeaderTabs";
import { PipelineColumnCards, PipelineColumnHeader } from "./PipelineColumn";
import { pipelineData } from "./constants";
import type { Candidate } from "./types";
import { useCardSequence } from "./useCardSequence";

interface AIMatchmakingDashboardProps {
  onCandidateSelect?: (candidate: { name: string } | null) => void;
}

const AIMatchmakingDashboardComponent: React.FC<
  AIMatchmakingDashboardProps
> = ({ onCandidateSelect }) => {
  const [revealedCards, setRevealedCards] = useState<Set<string>>(new Set());
  const [newestCardKey, setNewestCardKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const revealIndexRef = useRef(0);

  const handleProfileClick = useCallback(
    (candidate: Candidate) => {
      onCandidateSelect?.(candidate);
    },
    [onCandidateSelect]
  );

  const cardSequence = useCardSequence();

  // Use useCallback for the reveal function to prevent recreating on each render
  const revealNextCard = useCallback(() => {
    if (revealIndexRef.current >= cardSequence.length) {
      setNewestCardKey(null);
      return false;
    }

    const card = cardSequence[revealIndexRef.current];
    const cardKey = `${card.columnIndex}-${card.cardIndex}`;

    setNewestCardKey(cardKey);
    setRevealedCards((prev) => {
      const next = new Set(prev);
      next.add(cardKey);
      return next;
    });

    revealIndexRef.current += 1;
    return true;
  }, [cardSequence]);

  useEffect(() => {
    if (!isInView) return;

    // Use requestAnimationFrame for better timing
    let animationFrameId: number;
    let lastTime = 0;
    const interval = 280; // 280ms between each card

    const animate = (time: number) => {
      if (time - lastTime >= interval) {
        const hasMore = revealNextCard();
        lastTime = time;

        if (!hasMore) {
          cancelAnimationFrame(animationFrameId);
          return;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, revealNextCard]);

  // Memoize pipeline columns to prevent re-renders
  const pipelineColumns = useMemo(
    () =>
      pipelineData.map((column, colIndex) => (
        <div
          key={`${column.title}-${colIndex}`}
          className="relative flex flex-col items-start gap-[5px]"
        >
          <PipelineColumnHeader title={column.title} count={column.count} />
          <PipelineColumnCards
            candidates={column.candidates}
            columnIndex={colIndex}
            revealedCards={revealedCards}
            newestCardKey={newestCardKey}
            onProfileClick={handleProfileClick}
          />
        </div>
      )),
    [revealedCards, newestCardKey, handleProfileClick]
  );

  return (
    <div
      ref={containerRef}
      className="pointer-events-none relative mb-[-349.80px] flex w-full flex-col items-start gap-6 overflow-hidden rounded-[5.24px] px-5 pt-0 pb-10"
    >
      <HeaderTabs />

      {/* Back to Jobs Button */}
      <button className="flex cursor-pointer items-center gap-1 font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-normal tracking-[0.13px] text-neutral-700 hover:text-neutral-900">
        <ChevronLeft className="size-[9px]" />
        Back to Jobs
      </button>

      {/* Pipeline Columns */}
      <div className="scrollbar-hide relative flex w-full items-start gap-[10.48px] self-stretch overflow-x-auto">
        {pipelineColumns}
      </div>
    </div>
  );
};
export const AIMatchmakingDashboard = React.memo(
  AIMatchmakingDashboardComponent
);

// Export Candidate type for parent component
export type { Candidate };

AIMatchmakingDashboard.displayName = "AIMatchmakingDashboard";
