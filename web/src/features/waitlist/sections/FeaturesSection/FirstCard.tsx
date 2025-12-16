"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useViewportCenter } from "@/hooks/useViewportCenter";
import { useSelectedRole } from "@/stores";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FeatureCard } from "../../components/FeatureCard";
import { CandidateCard, TalentScheduleAnimation } from "./components";
import {
  type CandidateCardData,
  FIRST_CARD_CLIENT_CONTENT,
  FIRST_CARD_TALENT_CONTENT,
  INITIAL_CARDS,
} from "./constants";

function FirstCardComponent(): React.ReactElement {
  const selectedRole = useSelectedRole();
  const [cards, setCards] = useState<CandidateCardData[]>(INITIAL_CARDS);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const carouselRef = useRef<HTMLDivElement>(null);

  const isCarouselCentered = useViewportCenter(carouselRef, {
    threshold: 0.2,
    enabled: isMobile,
  });

  const isTalent = selectedRole === "talent";
  const content = isTalent
    ? FIRST_CARD_TALENT_CONTENT
    : FIRST_CARD_CLIENT_CONTENT;

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  const handleNext = useCallback(() => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      if (first) newCards.push(first);
      return newCards;
    });
  }, []);

  const wasAnimatingRef = useRef(false);

  useEffect(() => {
    const shouldAnimate = isMobile ? isCarouselCentered : isHovering;

    if (!shouldAnimate) {
      wasAnimatingRef.current = false;
      return;
    }

    if (!wasAnimatingRef.current) {
      wasAnimatingRef.current = true;
      handleNext();
    }

    const interval = setInterval(handleNext, 1800);
    return () => clearInterval(interval);
  }, [isHovering, isCarouselCentered, isMobile, handleNext]);

  const shouldAnimate = isMobile ? isCarouselCentered : isHovering;

  return (
    <FeatureCard
      title={content.title}
      description={content.description}
      cardRef={carouselRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isTalent ? (
        <TalentScheduleAnimation shouldAnimate={shouldAnimate} />
      ) : (
        <div className="relative h-[269.43px] w-[408px] overflow-hidden rounded-[7.7px]">
          <div className="relative flex h-full items-center justify-center">
            {cards.slice(0, 3).map((card, index) => (
              <CandidateCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      )}
    </FeatureCard>
  );
}

export const FirstCard = React.memo(FirstCardComponent);
FirstCard.displayName = "FirstCard";
