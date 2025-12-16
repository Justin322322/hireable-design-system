import { useMemo } from "react";
import { pipelineData } from "./constants";
import type { Candidate } from "./types";

interface CardSequenceItem {
  columnIndex: number;
  cardIndex: number;
  candidate: Candidate;
}

// Pre-compute and memoize the card sequence
export const useCardSequence = (): CardSequenceItem[] => {
  return useMemo(() => {
    const sequence: CardSequenceItem[] = [];

    const maxCards = Math.max(
      ...pipelineData.map((col) => col.candidates.length)
    );

    // Interleave cards from different columns for a more dynamic effect
    for (let cardIdx = 0; cardIdx < maxCards; cardIdx++) {
      for (let colIdx = 0; colIdx < pipelineData.length; colIdx++) {
        const candidate = pipelineData[colIdx].candidates[cardIdx];
        if (candidate) {
          sequence.push({ columnIndex: colIdx, cardIndex: cardIdx, candidate });
        }
      }
    }

    return sequence;
  }, []);
};
