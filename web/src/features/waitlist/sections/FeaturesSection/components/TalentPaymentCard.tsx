"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SlotDigit } from "./SlotDigit";

/**
 * TalentPaymentCard Component
 *
 * Displays a payment received animation with slot-machine style numbers.
 * Features animated circles and checkmark on hover/center.
 * Used in the talent view of the LastCard section.
 */
const TalentPaymentCardComponent = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isCentered, setIsCentered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Set mounted state immediately
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !isMobile || !cardRef.current) return;

    const checkIfCentered = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const elementCenter = rect.top + rect.height / 2;

      const centerThreshold = viewportHeight * 0.2;
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

      setIsCentered(distanceFromCenter <= centerThreshold);
    };

    window.addEventListener("scroll", checkIfCentered, { passive: true });
    window.addEventListener("resize", checkIfCentered);
    checkIfCentered();

    return () => {
      window.removeEventListener("scroll", checkIfCentered);
      window.removeEventListener("resize", checkIfCentered);
    };
  }, [isMobile, isMounted]);

  const shouldAnimate = useMemo(
    () => isMounted && (isMobile ? isCentered : isHovering),
    [isMobile, isCentered, isHovering, isMounted]
  );

  return (
    <motion.div
      ref={cardRef}
      className="relative flex h-[264px] w-[408px] flex-col items-center rounded-lg bg-white"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ filter: "blur(0px)" }}
      animate={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {/* Ellipse rings container with gradient mask - only bottom fade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 65%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 65%)",
        }}
      >
        {/* Inner ellipse (Elipse_1) - 186.24px */}
        <svg className="absolute top-[80px] left-1/2 size-[186.24px] -translate-x-1/2 -translate-y-1/2 overflow-visible">
          <defs>
            <linearGradient
              id="innerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#737373" />
              <stop offset="100%" stopColor="#E5E5E5" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="93.12"
            cy="93.12"
            stroke="url(#innerGradient)"
            strokeWidth="0.8"
            fill="none"
            initial={{
              pathLength: 1,
              rotate: -90,
              strokeWidth: 0.8,
              r: 92.62,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              rotate: shouldAnimate ? 270 : -90,
              opacity: shouldAnimate ? [0, 1, 1, 1] : 0,
            }}
            transition={{
              duration: 0.6,
              delay: shouldAnimate ? 0.3 : 0,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
            }}
            style={{ originX: "50%", originY: "50%" }}
          />
        </svg>

        {/* Outer ellipse (Elipse_2) - 274px */}
        <svg className="absolute top-[80px] left-1/2 size-[274px] -translate-x-1/2 -translate-y-1/2 overflow-visible">
          <defs>
            <linearGradient
              id="outerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#737373" />
              <stop offset="100%" stopColor="#E5E5E5" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="137"
            cy="137"
            stroke="url(#outerGradient)"
            strokeWidth="0.8"
            fill="none"
            initial={{
              pathLength: 1,
              rotate: -90,
              strokeWidth: 0.8,
              r: 136.5,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              rotate: shouldAnimate ? 270 : -90,
              opacity: shouldAnimate ? [0, 1, 1, 1] : 0,
            }}
            transition={{
              duration: 0.6,
              delay: shouldAnimate ? 0.5 : 0,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
            }}
            style={{ originX: "50%", originY: "50%" }}
          />
        </svg>
      </div>

      {/* Icon container - centered horizontally, at top: 40px */}
      <motion.div
        className="bg-neutral-150 absolute top-[40px] left-1/2 z-20 flex size-[80px] -translate-x-1/2 items-center justify-center rounded-full border-[0.83px] border-neutral-300 shadow-[0px_5px_6.67px_rgba(0,0,0,0.1)]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: shouldAnimate ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {/* Inner white circle with checkmark */}
        <div className="flex size-[66.67px] items-center justify-center rounded-full border-[0.83px] border-neutral-300 bg-white shadow-[0px_5px_6.67px_rgba(0,0,0,0.1)]">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <motion.path
              d="M4 12L9 17L20 6"
              stroke="#616161"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: shouldAnimate ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
                delay: shouldAnimate ? 0.3 : 0,
                ease: "easeOut",
              }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Heading section - always visible */}
      <div className="absolute top-[147px] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-[13px]">
        {/* $1200.00 - Slot machine style */}
        <div className="flex h-[52px] items-center justify-center">
          <span className="font-['DM_Sans'] text-[40px] leading-[52px] font-semibold text-black">
            $
          </span>
          <SlotDigit
            targetDigit={1}
            shouldAnimate={shouldAnimate}
            delay={0}
            width={30}
          />
          <span className="font-['DM_Sans'] text-[40px] leading-[52px] font-semibold text-black">
            ,
          </span>
          <SlotDigit
            targetDigit={2}
            shouldAnimate={shouldAnimate}
            delay={0.1}
          />
          <SlotDigit
            targetDigit={0}
            shouldAnimate={shouldAnimate}
            delay={0.2}
          />
          <SlotDigit
            targetDigit={0}
            shouldAnimate={shouldAnimate}
            delay={0.3}
          />
          <span className="font-['DM_Sans'] text-[40px] leading-[52px] font-semibold text-black">
            .
          </span>
          <SlotDigit
            targetDigit={0}
            shouldAnimate={shouldAnimate}
            delay={0.4}
          />
          <SlotDigit
            targetDigit={0}
            shouldAnimate={shouldAnimate}
            delay={0.5}
          />
        </div>

        {/* Payment Received - Inter, 400, 20px */}
        <div className="flex h-[30px] items-center justify-center font-['Inter'] text-[20px] leading-[150%] font-normal tracking-[0.4px] whitespace-nowrap text-black">
          Payment Received
        </div>
      </div>
    </motion.div>
  );
};

export const TalentPaymentCard = React.memo(TalentPaymentCardComponent);
TalentPaymentCard.displayName = "TalentPaymentCard";
