"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MoreVerticalIcon } from "../shared/icons";

interface MeetingDetailsPhaseProps {
  showConfirmedCandidate: boolean;
  showMeetingDetails: boolean;
  isJoinMeetingPressed: boolean;
  onJoinMeeting: () => void;
}

/**
 * Phase showing meeting confirmation and join button
 */
export function MeetingDetailsPhase({
  showConfirmedCandidate,
  showMeetingDetails,
  isJoinMeetingPressed,
  onJoinMeeting,
}: MeetingDetailsPhaseProps) {
  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-3 p-1">
      <AnimatePresence mode="popLayout">
        {showConfirmedCandidate && (
          <motion.div
            key="confirmed-candidate"
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 px-2 sm:gap-4"
          >
            <Image
              src="/images/Camille-Mercado.svg"
              alt="Camille Mercado"
              width={48}
              height={48}
              className="size-10 shrink-0 rounded-full object-cover sm:size-12"
            />
            <div className="flex flex-col">
              <span className="font-text-s text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)]">
                Camille Mercado
              </span>
              <span className="font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)]">
                Sales Manager
              </span>
            </div>
          </motion.div>
        )}

        {showMeetingDetails && (
          <motion.div
            key="meeting-card"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="relative w-full overflow-hidden rounded border border-neutral-200 bg-white p-3 sm:p-4"
          >
            <div className="bg-client absolute top-0 bottom-0 left-0 w-1" />
            <div className="flex w-full flex-col gap-3 pl-2">
              <div className="flex w-full items-start justify-between gap-2">
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="font-text-s text-base leading-(--text-s-line-height) font-bold tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)]">
                    Interview Call
                  </div>
                  <p className="font-text-s text-xs leading-[1.2] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)]">
                    Jan 30, 2025
                  </p>
                </div>
                <button
                  aria-label="More options"
                  className="cursor-pointer text-neutral-700 hover:text-neutral-900"
                >
                  <MoreVerticalIcon />
                </button>
              </div>

              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex items-center rounded-full border border-solid border-white bg-[var(--color-schedule-time-bg)] px-3 py-2 shadow-[inset_0px_0.5px_4px_0px_var(--color-schedule-time-shadow)]">
                  <span className="font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-[var(--color-schedule-time-text)] [font-style:var(--text-s-font-style)]">
                    9:30 am - 10:00 am
                  </span>
                </div>
                <motion.button
                  animate={{ scale: isJoinMeetingPressed ? 0.95 : 1 }}
                  transition={{ duration: 0.1 }}
                  onClick={onJoinMeeting}
                  className={`font-text-s border-client hover:bg-client flex h-[32px] cursor-pointer items-center justify-center gap-2 rounded-[4px] border px-[12px] py-[6px] text-xs font-medium whitespace-nowrap transition-colors hover:text-white sm:tracking-(--text-s-letter-spacing) ${
                    isJoinMeetingPressed
                      ? "bg-client text-white"
                      : "text-client bg-[rgba(194,235,255,0.4)]"
                  }`}
                >
                  Join meeting
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
