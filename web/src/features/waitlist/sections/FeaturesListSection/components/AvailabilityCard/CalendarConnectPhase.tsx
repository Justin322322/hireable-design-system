"use client";

import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { calendarOptions } from "../../constants";

interface CalendarConnectPhaseProps {
  isVisible: boolean;
  shouldShowConnect: boolean;
  buttonClicked: boolean;
}

/**
 * Initial phase showing calendar connection options
 */
export function CalendarConnectPhase({
  isVisible,
  shouldShowConnect,
  buttonClicked,
}: CalendarConnectPhaseProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: 1,
        filter: isVisible ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex flex-col gap-5 sm:gap-6"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-1 px-4 pt-4 pb-2 sm:gap-1.5">
        <div className="font-text-large-b text-center text-base leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-lg">
          Connect your calendar
        </div>
        <p className="font-text-s text-center text-xs leading-normal font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm sm:leading-[1.6]">
          Sync existing calendar so your availability stays up to date.
        </p>
      </div>

      <CardContent className="flex w-full flex-col items-start gap-3 px-4 pb-4 sm:gap-3.5">
        {calendarOptions.map((option, index) => (
          <div key={index} className="w-full">
            <div className="feature-capsule h-[46px] w-full justify-between px-4 py-3 sm:h-[50px] sm:px-5 sm:py-3">
              <div className="flex items-center gap-3">
                <Image
                  className="size-5 shrink-0 sm:size-6"
                  alt="Calendar icon"
                  src={option.icon}
                  width={24}
                  height={24}
                />
                <span className="font-text-s text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-(length:--text-s-font-size)">
                  {option.name}
                </span>
              </div>

              {option.showConnect && (
                <motion.button
                  animate={{
                    opacity: shouldShowConnect || buttonClicked ? 1 : 0,
                    filter:
                      shouldShowConnect || buttonClicked
                        ? "blur(0px)"
                        : "blur(10px)",
                    scale: buttonClicked ? 0.9 : shouldShowConnect ? 1 : 0.8,
                  }}
                  transition={{
                    duration: buttonClicked ? 0.15 : 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-schedule-time-bg pointer-events-auto relative z-10 inline-flex h-8 items-center justify-center gap-1.5 rounded-full border border-solid border-white px-2.5 py-1.5 shadow-[inset_0px_0.5px_4px_0px_#75a9c2] sm:h-9 sm:gap-2 sm:px-3 sm:py-2"
                >
                  <span className="font-text-s text-schedule-time-text text-center text-[11px] leading-[1.2] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap [font-style:var(--text-s-font-style)] sm:text-xs">
                    Connect
                  </span>
                </motion.button>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </motion.div>
  );
}
