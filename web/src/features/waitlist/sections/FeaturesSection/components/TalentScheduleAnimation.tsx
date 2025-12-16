"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TalentScheduleAnimationProps {
  shouldAnimate: boolean;
}

export const TalentScheduleAnimation = ({
  shouldAnimate,
}: TalentScheduleAnimationProps) => {
  const [isJoinMeetingPressed, setIsJoinMeetingPressed] = useState(false);

  // Animation sequence - only for button press
  useEffect(() => {
    if (shouldAnimate) {
      // Press join meeting button after unblur
      const joinTimer = setTimeout(() => {
        setIsJoinMeetingPressed(true);
      }, 800);

      return () => {
        clearTimeout(joinTimer);
      };
    } else {
      setIsJoinMeetingPressed(false);
    }
  }, [shouldAnimate]);

  return (
    <motion.div
      className="relative flex h-[264px] w-[408px] flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4"
      initial={{ filter: "blur(0px)" }}
      animate={{
        filter: "blur(0px)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex w-full max-w-[360px] flex-col justify-center gap-3">
        {/* Candidate profile - hidden by default, appears on hover */}
        <motion.div
          className="flex items-center gap-3 px-2 sm:gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: shouldAnimate ? 1 : 0,
            y: shouldAnimate ? 0 : -10,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/images/Camille-Mercado.svg"
            alt="Camille Mercado"
            width={48}
            height={48}
            className="size-10 shrink-0 rounded-full object-cover sm:size-12"
          />
          <div className="flex flex-col">
            <span className="font-['Inter'] text-sm leading-[120%] font-semibold tracking-[0.2px] text-neutral-900">
              Camille Mercado
            </span>
            <span className="font-['Inter'] text-xs leading-[120%] font-normal tracking-[0.2px] text-neutral-700">
              Sales Manager
            </span>
          </div>
        </motion.div>

        {/* Meeting card - animates down on hover */}
        <motion.div
          className="relative w-full overflow-hidden rounded border border-neutral-200 bg-white p-3 shadow-[0px_2px_8px_rgba(0,0,0,0.08)] sm:p-4"
          initial={{ y: 0 }}
          animate={{
            y: shouldAnimate ? 20 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="bg-client absolute top-0 bottom-0 left-0 w-1" />
          <div className="flex w-full flex-col gap-3 pl-2">
            <div className="flex w-full items-start justify-between gap-2">
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="font-['Inter'] text-base leading-[120%] font-bold tracking-[0.2px] text-neutral-900">
                  Interview Call
                </div>
                <p className="font-['Inter'] text-xs leading-[120%] font-normal tracking-[0.2px] text-neutral-700">
                  Jan 30, 2025
                </p>
              </div>
              <button
                aria-label="More options"
                className="cursor-pointer text-neutral-700 hover:text-neutral-900"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 4C8.36819 4 8.66667 3.70152 8.66667 3.33333C8.66667 2.96514 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.96514 7.33333 3.33333C7.33333 3.70152 7.63181 4 8 4Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex w-full items-center justify-between gap-2">
              <div className="bg-schedule-time-bg flex items-center rounded-full border border-solid border-white px-3 py-2 shadow-[inset_0px_0.5px_4px_0px_var(--color-schedule-time-shadow)]">
                <span className="text-schedule-time-text font-['Inter'] text-xs leading-[120%] font-normal tracking-[0.2px]">
                  9:30 am - 10:00 am
                </span>
              </div>
              <motion.button
                animate={{
                  scale: isJoinMeetingPressed ? 0.95 : 1,
                }}
                transition={{ duration: 0.1 }}
                className={`border-client flex h-[32px] cursor-pointer items-center justify-center gap-2 rounded-[4px] border px-[12px] py-[6px] font-['Inter'] text-xs font-medium whitespace-nowrap transition-colors ${
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
      </div>
    </motion.div>
  );
};
