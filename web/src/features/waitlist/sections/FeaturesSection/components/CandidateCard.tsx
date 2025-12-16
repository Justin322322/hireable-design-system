"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import type { CandidateCardData } from "../constants";

interface CandidateCardProps {
  card: CandidateCardData;
  index: number;
}

/**
 * CandidateCard Component
 *
 * Renders a single candidate card in the carousel.
 * Applies different styling based on position (focused, top, bottom).
 */
export const CandidateCard = React.memo(
  ({ card, index }: CandidateCardProps) => {
    const isFocused = index === 1;
    const isTop = index === 0;
    const isBottom = index === 2;

    const zIndex = isFocused ? 5 : 1;
    const cardScale = isFocused ? 1 : 0.82;
    let yOffset = 0;
    let opacity = 1;
    let blur = 0;

    if (isTop) {
      yOffset = -115;
      opacity = 0.7;
      blur = 2;
    } else if (isBottom) {
      yOffset = 115;
      opacity = 0.7;
      blur = 2;
    }

    const cardWidth = isFocused ? 282 : 212;
    const isLargeCard = cardWidth === 282;

    return (
      <motion.div
        key={card.id}
        className="absolute"
        style={{
          zIndex,
          willChange: "transform, opacity, filter",
          filter: blur > 0 ? `blur(${blur}px)` : "none",
        }}
        animate={{
          scale: cardScale,
          y: yOffset,
          opacity,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div
          className={`flex flex-col items-start bg-white ${
            isLargeCard
              ? "gap-[7.42px] overflow-hidden rounded-[7.42px] p-[11.14px] shadow-[0px_3.85px_15.4px_3.85px_#00000014]"
              : "gap-[5.57px] rounded-[5.57px] p-[8.35px]"
          }`}
          style={{
            width: `${cardWidth}px`,
          }}
        >
          {/* Card Header */}
          <div
            className={`flex w-full items-center self-stretch ${
              isLargeCard
                ? "h-[37.12px] gap-[7.42px]"
                : "h-[27.84px] gap-[5.57px]"
            }`}
          >
            <div
              className={`overflow-hidden ${
                isLargeCard
                  ? "size-[37.12px] rounded-full"
                  : "size-[27.84px] rounded-full"
              }`}
            >
              <Image
                className="size-full rounded-full object-cover"
                alt={card.name}
                src={card.avatar}
                width={isLargeCard ? 37 : 28}
                height={isLargeCard ? 37 : 28}
                priority
              />
            </div>
            <div
              className={`flex flex-1 flex-col items-start ${
                isLargeCard ? "gap-[3.71px]" : "gap-[2.78px]"
              }`}
            >
              <div
                className={`font-text-s font-bold whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] ${
                  isLargeCard
                    ? "text-[11px] leading-(--text-s-line-height) tracking-(--text-s-letter-spacing) sm:text-[11px]"
                    : "text-[9px] leading-(--text-s-line-height) tracking-(--text-s-letter-spacing) sm:text-[9px]"
                }`}
              >
                {card.name}
              </div>
              <div
                className={`font-text-s text-neutral-700 [font-style:var(--text-s-font-style)] ${
                  isLargeCard
                    ? "text-[9px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[9px]"
                    : "text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[8px]"
                }`}
              >
                {card.role}
              </div>
            </div>
          </div>

          {/* Card Details */}
          <div
            className={`flex w-full items-center ${
              isLargeCard
                ? "h-[20.42px] gap-[16.71px]"
                : "h-[15.31px] gap-[12.53px]"
            }`}
          >
            <div
              className={`inline-flex items-center justify-center ${
                isLargeCard ? "gap-[9.28px]" : "gap-[6.96px]"
              }`}
            >
              <div
                className={`font-text-s whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] ${
                  isLargeCard
                    ? "text-[9px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[9px]"
                    : "text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[8px]"
                }`}
              >
                {card.salary}
              </div>
            </div>
            <div
              className={`font-text-s whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] ${
                isLargeCard
                  ? "text-[9px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[9px]"
                  : "text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[8px]"
              }`}
            >
              {card.experience}
            </div>
            <div
              className={`inline-flex items-center justify-center gap-2 bg-[var(--color-success)]/10 px-2 py-1 ${
                isLargeCard
                  ? "h-[18.56px] rounded-[4.25px]"
                  : "h-[13.92px] rounded-[3.19px]"
              }`}
            >
              <div
                className={`font-text-s whitespace-nowrap text-[var(--color-success)] [font-style:var(--text-s-font-style)] ${
                  isLargeCard
                    ? "text-[8px] leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) sm:text-[8px]"
                    : "text-[7px] leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) sm:text-[7px]"
                }`}
              >
                {card.match}
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div
            className={`flex w-full items-center justify-between px-0 ${
              isLargeCard
                ? "h-[22.27px] py-[3.71px]"
                : "h-[16.71px] py-[2.78px]"
            }`}
          >
            <div
              className={`inline-flex items-center ${
                isLargeCard ? "gap-[7.42px]" : "gap-[5.57px]"
              }`}
            >
              <div
                className={`font-text-s whitespace-nowrap text-neutral-300 [font-style:var(--text-s-font-style)] ${
                  isLargeCard
                    ? "text-[9px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[9px]"
                    : "text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[8px]"
                }`}
              >
                Activity Title
              </div>
            </div>
            <div
              className={`inline-flex items-center bg-neutral-200 ${
                isLargeCard
                  ? "gap-[9.28px] rounded-[92.81px]"
                  : "gap-[6.96px] rounded-[69.61px]"
              }`}
            >
              <Image
                className={isLargeCard ? "size-[14.85px]" : "size-[11.14px]"}
                alt="Icon components"
                src="/icons/icon-components-3.svg"
                width={isLargeCard ? 15 : 11}
                height={isLargeCard ? 15 : 11}
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

CandidateCard.displayName = "CandidateCard";
