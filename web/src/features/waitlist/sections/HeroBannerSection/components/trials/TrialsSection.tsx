import React from "react";
import type { TrialData } from "../../types";
import { TrialCard } from "./TrialCard";

interface TrialsSectionProps {
  title: string;
  trials: readonly TrialData[];
  onPulsingButtonClick?: () => void;
  onCardClick?: (trialName: string) => void;
}

const TrialsSectionComponent: React.FC<TrialsSectionProps> = ({
  title,
  trials,
  onPulsingButtonClick,
  onCardClick,
}) => {
  return (
    <div className="relative flex w-full flex-col items-start gap-[10.3px] self-stretch px-0 pt-0 pb-[10.3px]">
      <h3 className="relative self-stretch font-['Inter',Helvetica] text-[10.3px] leading-[150%] font-semibold tracking-[0.13px] text-neutral-900">
        {title}
      </h3>

      <div className="grid w-full grid-cols-4 items-start gap-[10.3px] self-stretch">
        {trials.map((trial, index) => (
          <TrialCard
            key={index}
            trial={trial}
            index={index}
            onPulsingButtonClick={onPulsingButtonClick}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export const TrialsSection = React.memo(TrialsSectionComponent);
TrialsSection.displayName = "TrialsSection";
