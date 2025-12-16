"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useViewportCenter } from "@/hooks/useViewportCenter";
import { useSelectedRole } from "@/stores";
import React, { useCallback, useRef, useState } from "react";
import { FeatureCard } from "../../components/FeatureCard";
import { ClientMatchAnimation } from "./components";
import { TalentChatMessages } from "./components/TalentChatMessages";

const TALENT_CONTENT = {
  title: "Negotiate upfront, openly.",
  description: "Comment on rates and KPIs before you start.",
};

const CLIENT_CONTENT = {
  title: "Match minds, not just skills.",
  description:
    "Stop hiring great portfolios attached to difficult personalities.",
};

const MiddleCardComponent = (): React.ReactElement => {
  const selectedRole = useSelectedRole();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const cardRef = useRef<HTMLDivElement>(null);

  const isTalent = selectedRole === "talent";
  const content = isTalent ? TALENT_CONTENT : CLIENT_CONTENT;

  const isCentered = useViewportCenter(cardRef, {
    threshold: 0.2,
    enabled: isMobile,
  });

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const shouldAnimate = isMobile ? isCentered : isHovered;

  return (
    <FeatureCard
      title={content.title}
      description={content.description}
      cardRef={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hidden preload images */}
      <div className="sr-only" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Jacob-Smith.svg" alt="" width={1} height={1} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Catalina-Ramos.svg" alt="" width={1} height={1} />
      </div>

      {isTalent ? (
        <TalentChatMessages shouldAnimate={shouldAnimate} />
      ) : (
        <ClientMatchAnimation shouldAnimate={shouldAnimate} />
      )}
    </FeatureCard>
  );
};

export const MiddleCard = React.memo(MiddleCardComponent);
MiddleCard.displayName = "MiddleCard";
