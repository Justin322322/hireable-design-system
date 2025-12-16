"use client";

import { useInViewWithDelay, useWindowSize } from "@/hooks";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { CalendarGrid } from "./CalendarGrid";
import { InterviewInvitation } from "./InterviewInvitation";
import { TimeSlotPicker } from "./TimeSlotPicker";

interface TalentScheduleCardProps {
  isMobile: boolean;
}

export const TalentScheduleCard = React.memo(
  ({ isMobile }: TalentScheduleCardProps): React.ReactElement => {
    const cardRef = useRef<HTMLDivElement>(null);
    // Use delayed exit to prevent jarring resets when scrolling
    const isCardInView = useInViewWithDelay(cardRef, {
      amount: 0.3,
      exitDelay: 800,
    });
    const [isHovered, setIsHovered] = useState(false);
    const [showTimeSlots, setShowTimeSlots] = useState(false);
    const hasTriggeredRef = useRef(false);

    const { width } = useWindowSize();

    // Check if we should use mobile layout (under 640px)
    const useMobileLayout = width > 0 && width < 640;

    // Calculate scale based on expanded width to prevent layout shift
    // Always use expanded width (844px) for scale calculation
    const scale = useMemo(() => {
      if (width === 0) return 1;
      if (useMobileLayout) return 1;
      const expandedWidth = 844;
      const availableWidth = Math.min(width - 32, 900);
      return Math.min(1, availableWidth / expandedWidth);
    }, [width, useMobileLayout]);

    const shouldAnimate = isMobile ? isCardInView : isHovered;

    useEffect(() => {
      // Prevent re-triggering while already showing
      if (shouldAnimate && hasTriggeredRef.current) return;

      if (shouldAnimate) {
        hasTriggeredRef.current = true;
        const timer = setTimeout(() => setShowTimeSlots(true), 300);
        return () => clearTimeout(timer);
      } else {
        // Reset when leaving viewport (mobile) or unhover (desktop)
        hasTriggeredRef.current = false;
        setShowTimeSlots(false);
      }
    }, [shouldAnimate]);

    // Mobile layout - pass showTimeSlots which is already controlled by the effect above
    if (useMobileLayout) {
      return (
        <div
          ref={cardRef}
          className="flex w-full justify-center px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="feature-card flex w-full max-w-[380px] flex-col sm:max-w-[420px]">
            <InterviewInvitation compact />
            <CalendarGrid compact />
            <TimeSlotPicker isVisible={showTimeSlots} compact />
          </div>
        </div>
      );
    }

    // Fixed container width to prevent layout shift
    const containerWidth = 844;
    const cardWidth = showTimeSlots ? 844 : 596;

    return (
      <div
        ref={cardRef}
        className="flex w-full justify-center px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fixed width container prevents layout shift */}
        <div
          style={{
            width: `${containerWidth * scale}px`,
            height: `${460 * scale}px`,
          }}
          className="flex items-start justify-center"
        >
          <motion.div
            className="feature-card flex p-0!"
            style={{
              height: "460px",
              transform: `scale(${scale})`,
              transformOrigin: "top center",
            }}
            initial={{ width: "596px" }}
            animate={{ width: `${cardWidth}px` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-full w-full">
              <InterviewInvitation />
              <CalendarGrid />
              <TimeSlotPicker isVisible={showTimeSlots} />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
);

TalentScheduleCard.displayName = "TalentScheduleCard";
