"use client";

import { InnerShadowFilter } from "@/components/shared";
import { useSelectedRole } from "@/stores";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FeatureSectionBlock } from "../../components/FeatureSectionBlock";
import {
  AvailabilityCard,
  HeroBlock,
  NegotiationCard,
  TalentScheduleCard,
  WeeklyCheckinCard,
  WellnessScoreCard,
} from "./components";
import { FEATURE_CONTENT } from "./content";

const FeaturesListSectionComponent = (): React.ReactElement => {
  const selectedRole = useSelectedRole();
  const textRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isActiveRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  // Use hysteresis: enter at 25%, exit only when completely out of viewport
  const checkVisibility = useCallback(() => {
    if (!textRef.current) return;

    const rect = textRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementHeight = rect.height;
    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const visibleRatio = Math.max(0, visibleHeight / elementHeight);

    if (!isActiveRef.current && visibleRatio >= 0.25) {
      isActiveRef.current = true;
      setIsInView(true);
    } else if (isActiveRef.current && visibleRatio <= 0) {
      isActiveRef.current = false;
      setIsInView(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        checkVisibility();
        rafRef.current = null;
      });
    };

    checkVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [checkVisibility]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isTalent = selectedRole === "talent";
  const content = isTalent ? FEATURE_CONTENT.talent : FEATURE_CONTENT.client;
  const gradientBg = isTalent
    ? "bg-[linear-gradient(180deg,rgba(255,240,245,1)_0%,rgba(255,224,236,1)_18%,rgba(255,107,157,1)_100%)]"
    : "bg-[linear-gradient(180deg,rgba(239,250,255,1)_0%,rgba(215,242,255,1)_18%,rgba(0,120,178,1)_100%)]";
  const gradientShadow = isTalent
    ? "shadow-[0px_8.4px_11.2px_#ff408140]"
    : "shadow-[0px_8.4px_11.2px_#00365040]";
  const beamColor = isTalent ? "#ff6b9d" : "#00A7F8";

  return (
    <section className="flex w-full flex-col items-start">
      <HeroBlock
        textRef={textRef}
        isInView={isInView}
        beamColor={beamColor}
        heroTitle={content.hero.title}
        heroSubtitle={content.hero.subtitle}
      />

      <FeatureSectionBlock
        title={content.wellbeing.title}
        description={content.wellbeing.description}
        className="relative"
      >
        {isTalent ? (
          <WellnessScoreCard isMobile={isMobile} />
        ) : (
          <WeeklyCheckinCard isMobile={isMobile} />
        )}
      </FeatureSectionBlock>

      <FeatureSectionBlock
        title={content.scheduling.title}
        description={content.scheduling.description}
      >
        {isTalent ? (
          <TalentScheduleCard isMobile={isMobile} />
        ) : (
          <AvailabilityCard isMobile={isMobile} />
        )}
      </FeatureSectionBlock>

      <FeatureSectionBlock
        title="Negotiate openly, upfront"
        description="Comment on budgets, KPIs, and objectives before hiring starts. No surprises."
      >
        <NegotiationCard
          gradientBg={gradientBg}
          gradientShadow={gradientShadow}
          isTalent={isTalent}
        />
      </FeatureSectionBlock>

      <InnerShadowFilter />
    </section>
  );
};

export const FeaturesListSection = React.memo(FeaturesListSectionComponent);
FeaturesListSection.displayName = "FeaturesListSection";
