"use client";

import { motion } from "framer-motion";
import { MOBILE_TIME_SLOTS, TIME_SLOTS } from "./constants";

interface TimeSlotPickerProps {
  /** Whether time slots panel is visible */
  isVisible: boolean;
  /** Whether to use compact mobile layout */
  compact?: boolean;
}

/**
 * Animated time slot picker panel
 */
export function TimeSlotPicker({
  isVisible,
  compact = false,
}: TimeSlotPickerProps) {
  const slots = compact ? MOBILE_TIME_SLOTS : TIME_SLOTS;

  if (compact) {
    return (
      <motion.div
        className="flex w-full flex-col gap-3 overflow-hidden bg-[rgba(255,255,255,0.24)]"
        initial={{ height: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 }}
        animate={{
          height: isVisible ? "auto" : 0,
          paddingTop: isVisible ? 16 : 0,
          paddingBottom: isVisible ? 16 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ minHeight: isVisible ? "auto" : 0 }}
      >
        <motion.span
          className="px-4 font-['Inter'] text-[13px] leading-[150%] font-bold tracking-[0.2px] text-neutral-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.2, delay: isVisible ? 0.1 : 0 }}
        >
          Friday April 23
        </motion.span>

        <div className="grid grid-cols-2 gap-2 px-4">
          {slots.map((time, index) => (
            <motion.button
              key={time}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 10,
              }}
              transition={{
                duration: 0.25,
                delay: isVisible ? 0.1 + index * 0.03 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-client hover:bg-client flex h-[36px] w-full items-center justify-center rounded border border-white bg-[var(--color-schedule-time-bg)] font-['Inter'] text-[13px] font-medium shadow-[inset_0px_0.5px_4px_0px_var(--color-schedule-time-shadow)] transition-colors hover:text-white hover:shadow-none"
            >
              {time}
            </motion.button>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex h-[460px] flex-col border-r border-neutral-300 bg-[rgba(255,255,255,0.24)]"
      initial={{ width: 0, opacity: 0, padding: 0 }}
      animate={{
        width: isVisible ? "248px" : 0,
        opacity: isVisible ? 1 : 0,
        padding: isVisible ? "24px" : 0,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ gap: isVisible ? "20px" : 0 }}
    >
      <motion.span
        className="font-['Inter'] text-[16px] leading-[150%] font-bold tracking-[0.2px] whitespace-nowrap text-neutral-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2, delay: isVisible ? 0.2 : 0 }}
      >
        Friday April 23
      </motion.span>

      <div className="flex flex-col" style={{ gap: "6px" }}>
        {slots.map((time, index) => (
          <motion.button
            key={time}
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : 20,
            }}
            transition={{
              duration: 0.25,
              delay: isVisible ? 0.15 + index * 0.03 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-client hover:bg-client flex h-[38px] w-full items-center justify-center rounded border border-white bg-[var(--color-schedule-time-bg)] font-['Inter'] text-[14px] font-medium whitespace-nowrap shadow-[inset_0px_0.5px_4px_0px_var(--color-schedule-time-shadow)] transition-colors hover:text-white hover:shadow-none"
          >
            {time}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
