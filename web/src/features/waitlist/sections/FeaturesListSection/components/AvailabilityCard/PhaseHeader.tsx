"use client";

import { AnimatePresence, motion } from "framer-motion";

interface PhaseHeaderProps {
  showSendInvites: boolean;
  showCandidateSelects: boolean;
  showCallScreen: boolean;
}

interface HeaderContent {
  title: string;
  description: string;
}

const PHASE_CONTENT: Record<string, HeaderContent> = {
  availability: {
    title: "Set Your Availability",
    description: "Choose the days and times you're open for interviews.",
  },
  invites: {
    title: "Send interview invites",
    description: "Invite candidates to interviews with a simple drag-and-drop",
  },
  selects: {
    title: "Candidate selects schedule",
    description:
      "They pick a slot, and both sides receive instant confirmation.",
  },
};

/**
 * Animated header that changes based on current phase
 */
export function PhaseHeader({
  showSendInvites,
  showCandidateSelects,
  showCallScreen,
}: PhaseHeaderProps) {
  const getPhaseKey = () => {
    if (showCallScreen) return null;
    if (showCandidateSelects) return "selects";
    if (showSendInvites) return "invites";
    return "availability";
  };

  const phaseKey = getPhaseKey();

  if (!phaseKey) return null;

  const content = PHASE_CONTENT[phaseKey];

  return (
    <div className="relative w-full shrink-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={phaseKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full flex-col items-start gap-1.5 sm:gap-2"
        >
          <div className="font-text-large-b text-base leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-lg">
            {content.title}
          </div>
          <p className="font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm">
            {content.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
