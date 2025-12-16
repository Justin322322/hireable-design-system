"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { RoleIconsGroup } from "../../components/RoleIconsGroup";
import { CTAButton, GlowText } from "./components";
import { CTA_CONTENT, CTA_STYLES, GLOW_OPACITY } from "./constants";
import { useCallToActionAnimation } from "./hooks/useCallToActionAnimation";

const CTA_VARIANTS = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
  },
} as const;

interface CallToActionSectionProps {
  onJoinWaitlistClick?: () => void;
}

const CallToActionSectionComponent = ({
  onJoinWaitlistClick,
}: CallToActionSectionProps): React.ReactElement => {
  const { ref, hovered, setHovered, isTalent } = useCallToActionAnimation();
  const animateRef = useRef<HTMLElement>(null);
  const isInView = useInView(animateRef, {
    once: false,
    amount: 0.45,
    margin: "0px",
  });

  const content = isTalent ? CTA_CONTENT.talent : CTA_CONTENT.client;
  const glowColors = isTalent ? CTA_STYLES.talent : CTA_STYLES.client;

  return (
    <motion.section
      ref={animateRef}
      className="relative flex w-full flex-col items-center justify-center gap-[104px] px-4 py-[180px] sm:px-10 lg:px-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={CTA_VARIANTS}
    >
      {/* Preserve original ref for hover/light logic */}
      <div
        ref={ref}
        className="flex w-full max-w-[742px] flex-col items-center gap-10"
      >
        <div className="flex w-full flex-col items-center gap-4">
          <GlowText
            text={content.heading}
            isGlowing={hovered}
            glowColors={glowColors}
            glowOpacity={GLOW_OPACITY}
            variant="heading"
          />

          <GlowText
            text={content.paragraph}
            isGlowing={hovered}
            glowColors={glowColors}
            glowOpacity={GLOW_OPACITY}
            variant="paragraph"
          />
        </div>

        <CTAButton
          onClick={onJoinWaitlistClick}
          isActive={hovered}
          isTalent={isTalent}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />

        <RoleIconsGroup
          className="mt-16"
          hovered={hovered}
          isTalent={isTalent}
        />
      </div>
    </motion.section>
  );
};

export const CallToActionSection = React.memo(CallToActionSectionComponent);
CallToActionSection.displayName = "CallToActionSection";
