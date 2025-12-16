"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useViewportCenter } from "@/hooks/useViewportCenter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

/**
 * AnimatedProgressCard Component
 *
 * Displays an employee progress card with animated progress bars.
 * Shows overall progress and trial progress with animated counters.
 * Used in the client view of the LastCard section.
 */
export const AnimatedProgressCard = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const cardRef = useRef<HTMLDivElement>(null);

  // Use optimized viewport center detection with exit delay
  const isCentered = useViewportCenter(cardRef, {
    threshold: 0.2,
    enabled: isMobile,
    exitDelay: 800,
  });

  // Memoized event handlers
  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  const shouldAnimate = useMemo(
    () => (isMobile ? isCentered : isHovering),
    [isMobile, isCentered, isHovering]
  );

  useEffect(() => {
    if (!shouldAnimate) {
      setIsComplete(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, [shouldAnimate]);

  return (
    <div
      ref={cardRef}
      className="relative flex h-[269.43px] w-[408px] flex-col items-center justify-start overflow-hidden rounded-[7.7px] pt-[21px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex w-[371px] flex-col items-start gap-[26.53px] overflow-hidden rounded-[6.63px] border-[0.83px] border-solid border-neutral-300 bg-white p-[13.27px] shadow-[0px_5.77px_7.7px_#0000001a]">
        <div className="flex w-full items-start justify-between">
          <div className="flex h-[33.16px] flex-1 items-center gap-[6.63px]">
            <div className="size-[33.16px] overflow-hidden rounded-[103.64px] bg-white">
              <Image
                className="size-[33px] rounded-full object-cover"
                alt="Isabel Reyes"
                src="/images/Isabel-Reyes.svg"
                width={33}
                height={33}
                priority
              />
            </div>
            <div className="flex flex-1 flex-col items-start gap-[3.32px]">
              <div className="font-text-s text-[13px] leading-(--text-s-line-height) font-bold tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[11.6px]">
                Isabel Reyes
              </div>
              <div className="font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]">
                Product Designer
              </div>
            </div>
          </div>
          <div
            className={cn(
              "pointer-events-none inline-flex flex-col items-center justify-center gap-[8.29px] rounded-[96.23px] border-[0.41px] border-solid px-2 py-1",
              isComplete
                ? "border-matched-green bg-matched-green/10"
                : "border-client bg-client/10"
            )}
          >
            <div
              className={cn(
                "font-text-s text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) [font-style:var(--text-s-font-style)] sm:text-[7px]",
                isComplete ? "text-matched-green" : "text-client"
              )}
            >
              {isComplete ? "COMPLETED" : "ON TRACK"}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[13.27px]">
          <div className="flex w-full flex-col items-start gap-[1.66px]">
            <div className="flex h-[16.58px] w-full items-center justify-between">
              <div className="flex flex-1 items-center gap-[3.32px]">
                <Image
                  className="size-[11.61px]"
                  alt="Component"
                  src="/icons/component-18-7.svg"
                  width={12}
                  height={12}
                  priority
                />
                <div className="font-text-s text-[11px] leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[9.9px]">
                  Overall Progress
                </div>
              </div>
              {shouldAnimate ? (
                <AnimatedCounter
                  from={0}
                  to={100}
                  duration={2.8}
                  suffix="%"
                  className="font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]"
                />
              ) : (
                <div className="font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]">
                  0%
                </div>
              )}
            </div>
            <div className="flex h-[16.58px] w-full items-center gap-[3.32px]">
              <div className="flex h-[8.29px] flex-1 flex-col items-start justify-center gap-[19.9px] overflow-hidden rounded-[82.91px] bg-(--color-neutral-150)">
                <motion.div
                  className="bg-client h-full rounded-[82.91px]"
                  initial={{ width: "0%" }}
                  animate={{ width: shouldAnimate ? "100%" : "0%" }}
                  transition={{
                    duration: shouldAnimate ? 2.8 : 0.3,
                    ease: shouldAnimate ? "linear" : "easeOut",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-[1.66px]">
            <div className="flex h-[16.58px] w-full items-center justify-between">
              <div className="flex flex-1 items-center gap-[3.32px]">
                <Image
                  className="size-[11.61px]"
                  alt="Icon components"
                  src="/icons/icon-calendar.svg"
                  width={12}
                  height={12}
                  priority
                />
                <div className="font-text-s text-[11px] leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[9.9px]">
                  Trial Progress
                </div>
              </div>
              {shouldAnimate ? (
                <AnimatedCounter
                  from={1}
                  to={30}
                  duration={2.79}
                  suffix=" / 30 days"
                  className="font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]"
                />
              ) : (
                <div className="font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]">
                  1 / 30 days
                </div>
              )}
            </div>
            <div className="flex h-[16.58px] w-full items-center gap-[3.32px]">
              <div className="flex h-[8.29px] flex-1 flex-col items-start justify-center gap-[19.9px] overflow-hidden rounded-[82.91px] bg-(--color-neutral-150)">
                <motion.div
                  className="h-full rounded-[82.91px] bg-neutral-300"
                  initial={{ width: "3.33%" }}
                  animate={{ width: shouldAnimate ? "100%" : "3.33%" }}
                  transition={{
                    duration: shouldAnimate ? 2.79 : 0.3,
                    ease: shouldAnimate ? "linear" : "easeOut",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className={cn(
          "mt-2 flex h-[46px] w-[371px] items-center justify-center gap-2 rounded-[8px] border-[0.96px] border-solid px-[19.25px] py-2 transition-all duration-400",
          isComplete
            ? "border-client bg-client hover:bg-client-hover cursor-pointer opacity-100"
            : "cursor-not-allowed border-(--color-neutral-150) bg-neutral-200 opacity-60"
        )}
        disabled={!isComplete}
      >
        <div
          className={cn(
            "font-text-s flex items-center justify-center text-center text-base leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) whitespace-nowrap [font-style:var(--text-s-font-style)] sm:text-[15.4px]",
            isComplete ? "text-white" : "text-neutral-300"
          )}
        >
          Hire as full-time
        </div>
      </button>
    </div>
  );
};
