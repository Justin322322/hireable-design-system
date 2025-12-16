"use client";

import { motion } from "framer-motion";
import React from "react";
import { availabilitySlots } from "../../constants";
import { CloseIcon, CopyIcon, PlusCircleIcon } from "../shared/icons";

interface AvailabilitySlotsPhaseProps {
  isIsolating: boolean;
}

/**
 * Phase showing availability time slots
 */
export function AvailabilitySlotsPhase({
  isIsolating,
}: AvailabilitySlotsPhaseProps) {
  return (
    <motion.div
      key="slots"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-1 flex-col justify-center gap-3 sm:gap-4"
    >
      {availabilitySlots.map((slot, index) => {
        const isSelected = index === 1;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isIsolating && !isSelected ? 0 : 1,
              y: 0,
              scale: isIsolating && isSelected ? 1.05 : 1,
              filter: isIsolating && !isSelected ? "blur(5px)" : "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              delay: isIsolating ? 0 : 0.35 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`flex w-full items-center justify-between gap-2 transition-colors duration-500 sm:gap-4 ${
              isIsolating && isSelected
                ? "rounded-xl bg-white/50 p-2 shadow-sm"
                : "p-2"
            }`}
          >
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#00324b] text-xs font-semibold text-white sm:size-10 sm:text-sm">
                {slot.day}
              </div>

              <div className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-4">
                <TimeSlotBadge time={slot.startTime} />
                <span className="font-text-s text-xs leading-[1.2] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm">
                  -
                </span>
                <TimeSlotBadge time={slot.endTime} />
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <IconButton icon={<CloseIcon />} label="Remove slot" />
              <IconButton icon={<PlusCircleIcon />} label="Edit slot" />
              <IconButton icon={<CopyIcon />} label="Select slot" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function TimeSlotBadge({ time }: { time: string }) {
  return (
    <div className="relative flex h-7 min-w-[70px] items-center justify-center rounded-full border border-white bg-[rgba(250,250,250,0.98)] px-2 py-1.5 sm:h-8 sm:min-w-[85px] sm:px-3 sm:py-2">
      <span className="font-text-s relative z-10 text-xs leading-[1.2] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-sm">
        {time}
      </span>
      <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0px_0.5px_4px_0px_#c3c3c3]" />
    </div>
  );
}

function IconButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className="flex size-4 shrink-0 cursor-pointer items-center justify-center opacity-60 hover:opacity-100"
    >
      {icon}
    </button>
  );
}
