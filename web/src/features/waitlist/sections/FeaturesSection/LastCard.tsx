"use client";

import { useSelectedRole } from "@/stores";
import React from "react";
import { FeatureCard } from "../../components/FeatureCard";
import { AnimatedProgressCard, TalentPaymentCard } from "./components";
import {
  LAST_CARD_CLIENT_CONTENT,
  LAST_CARD_TALENT_CONTENT,
} from "./constants";

function LastCardComponent(): React.ReactElement {
  const selectedRole = useSelectedRole();

  const isTalent = selectedRole === "talent";
  const content = isTalent
    ? LAST_CARD_TALENT_CONTENT
    : LAST_CARD_CLIENT_CONTENT;

  return (
    <FeatureCard title={content.title} description={content.description}>
      {isTalent ? <TalentPaymentCard /> : <AnimatedProgressCard />}
    </FeatureCard>
  );
}

export const LastCard = React.memo(LastCardComponent);
LastCard.displayName = "LastCard";
