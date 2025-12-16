"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { candidateProfiles } from "../../constants";
import { CandidateProfileCard } from "../CandidateProfileCard";

interface CandidateInvitesPhaseProps {
  showSendInvites: boolean;
  showCandidateSelects: boolean;
  isCandidateSelected: boolean;
}

/**
 * Phase showing candidate invitation cards
 */
export function CandidateInvitesPhase({
  showSendInvites,
  showCandidateSelects,
  isCandidateSelected,
}: CandidateInvitesPhaseProps) {
  const [visibleCandidates, setVisibleCandidates] = useState<
    typeof candidateProfiles
  >([]);

  // Staggered candidate appearance
  useEffect(() => {
    if (showSendInvites && !showCandidateSelects) {
      setVisibleCandidates([]);
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex >= candidateProfiles.length) {
          clearInterval(interval);
          return;
        }

        const nextCandidate = candidateProfiles[currentIndex];
        if (nextCandidate) {
          setVisibleCandidates((prev) => [nextCandidate, ...prev]);
        }
        currentIndex++;
      }, 800);

      return () => clearInterval(interval);
    } else {
      setVisibleCandidates([]);
    }
  }, [showSendInvites, showCandidateSelects]);

  return (
    <motion.div
      key="candidates"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex w-full flex-col gap-3 overflow-hidden"
      style={{ height: "250px" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {visibleCandidates.map((candidate) => {
          const isCamille = candidate.id === 1;
          return candidate ? (
            <motion.div
              key={candidate.id}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{
                opacity: isCandidateSelected && !isCamille ? 0 : 1,
                y: isCandidateSelected && !isCamille ? -20 : 0,
                scale: isCandidateSelected && !isCamille ? 0.9 : 1,
                zIndex: isCandidateSelected && isCamille ? 20 : 1,
                filter:
                  isCandidateSelected && !isCamille ? "blur(8px)" : "blur(0px)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.4, ease: "easeOut" },
                filter: { duration: 0.3, ease: "easeOut" },
                y: { duration: 0.4, ease: "easeOut" },
                scale: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative w-full"
              style={{
                pointerEvents:
                  isCandidateSelected && !isCamille ? "none" : "auto",
              }}
            >
              <CandidateProfileCard
                {...candidate}
                className={
                  isCandidateSelected && isCamille
                    ? "ring-success/50 ring-1 transition-all duration-300 ring-inset"
                    : "transition-all duration-300"
                }
              />
            </motion.div>
          ) : null;
        })}
      </AnimatePresence>
      {/* Gradient Mask */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-12 bg-linear-to-t from-[#f2f2f2] to-transparent" />
    </motion.div>
  );
}
