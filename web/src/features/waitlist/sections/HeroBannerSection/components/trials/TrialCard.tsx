import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
} from "@/components/ui";
import { PulsingButton } from "@/components/ui/PulsingButton";
import Image from "next/image";
import React, { useMemo } from "react";
import type { TrialData } from "../../types";

interface TrialCardProps {
  trial: TrialData;
  index: number;
  width?: string;
  onPulsingButtonClick?: () => void;
  onCardClick?: (trialName: string) => void;
}

const TrialCardComponent: React.FC<TrialCardProps> = ({
  trial,
  index: _index,
  width = "w-[251.18px]",
  onPulsingButtonClick,
  onCardClick,
}) => {
  const trialProgressPercent = useMemo(() => {
    if (!trial.trialProgress.includes("/")) return 0;
    const [current, total] = trial.trialProgress
      .split("/")
      .map((s) => parseInt(s.trim()));
    return (current / total) * 100;
  }, [trial.trialProgress]);

  return (
    <div className={`${width} h-[112.91px] flex-none`}>
      <Card
        className={`hover-neutral relative flex size-full flex-col items-start gap-[15.44px] rounded-[5.15px] border-[0.64px] border-solid border-neutral-300 bg-white p-[10.3px] ${trial.name === "Mikaela Santos" ? "cursor-pointer" : ""}`}
        onClick={
          trial.name === "Mikaela Santos"
            ? () => onCardClick?.(trial.name)
            : undefined
        }
        role={trial.name === "Mikaela Santos" ? "button" : undefined}
        tabIndex={trial.name === "Mikaela Santos" ? 0 : undefined}
        onKeyDown={
          trial.name === "Mikaela Santos"
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onCardClick?.(trial.name);
                }
              }
            : undefined
        }
      >
        {/* Pulsing Button Overlay */}
        {trial.name === "Mikaela Santos" && (
          <PulsingButton
            onClick={(e) => {
              e.stopPropagation();
              onPulsingButtonClick?.();
            }}
            className="absolute top-[8px] left-[105px] z-10"
            ariaLabel="View Mikaela Santos details"
          />
        )}
        <div className="flex w-full flex-col justify-between gap-[15.44px] self-stretch">
          <div className="relative flex w-full items-start justify-between gap-[40.01px]">
            <div className="relative flex h-[26.19px] flex-1 grow items-center gap-[5.24px]">
              <Avatar className="size-[26.19px] rounded-[81.85px]">
                <AvatarImage src={trial.avatar} alt={trial.name} />
                <AvatarFallback>{trial.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="relative flex flex-1 grow flex-col items-start gap-[2.62px]">
                <div className="relative mt-[-0.65px] w-fit font-['Inter',Helvetica] text-[9.2px] leading-[120%] font-semibold tracking-[0.13px] whitespace-nowrap text-neutral-900">
                  {trial.name}
                </div>
                <div className="relative w-fit font-['Inter',Helvetica] text-[7.7px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700">
                  {trial.role}
                </div>
              </div>
            </div>

            <Badge
              variant={trial.statusVariant}
              className="flex h-[14.15px] w-fit min-w-[44px] items-center justify-center rounded-[64.35px] border-[0.32px] border-solid px-[5.15px] py-[2.57px]"
            >
              <span className="text-center font-['Inter',Helvetica] text-[7.7px] leading-[120%] font-normal tracking-[0.13px] whitespace-nowrap">
                {trial.status}
              </span>
            </Badge>
          </div>

          <div className="relative flex w-full flex-col items-start gap-[5.15px] self-stretch">
            {/* Overall Progress */}
            <div className="relative flex w-full flex-col items-start gap-[2.57px] self-stretch">
              <div className="relative flex h-[9.01px] w-full items-center justify-between gap-[5.08px]">
                <div className="relative flex h-[9.01px] grow items-center gap-[2.54px]">
                  <Image
                    className="relative size-[9.01px]"
                    alt="Component"
                    src="/icons/component-18-7.svg"
                    width={9}
                    height={9}
                  />
                  <div className="relative h-[9px] w-[64px] font-['Inter',Helvetica] text-[7.7px] leading-[120%] font-semibold tracking-[0.13px] text-neutral-900">
                    Overall Progress
                  </div>
                </div>
                <div className="relative h-[9px] w-[17px] text-center font-['Inter',Helvetica] text-[7.7px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700">
                  {trial.overallProgress}%
                </div>
              </div>

              <div className="relative flex h-[11.58px] w-full items-center gap-[2.57px] self-stretch">
                <div className="progress-bar-bg relative flex h-[6.43px] w-full flex-col justify-center rounded-[64.35px]">
                  <div
                    className={`h-[6.43px] ${trial.overallProgressColor} rounded-[64.35px]`}
                    style={{ width: `${trial.overallProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Trial Progress */}
            <div className="relative flex w-full flex-col items-start gap-[2.57px] self-stretch">
              <div className="relative flex h-[9.01px] w-full items-center justify-between gap-[5.08px]">
                <div className="relative flex h-[9.01px] grow items-center gap-[2.54px]">
                  <Image
                    className="relative size-[9.01px]"
                    alt="Icon components"
                    src="/icons/icon-calendar.svg"
                    width={9}
                    height={9}
                  />
                  <div className="relative h-[9px] w-[54px] font-['Inter',Helvetica] text-[7.7px] leading-[120%] font-semibold tracking-[0.13px] text-neutral-900">
                    Trial Progress
                  </div>
                </div>
                <div className="relative h-[9px] w-[48px] text-center font-['Inter',Helvetica] text-[7.7px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700">
                  {trial.trialProgress}
                </div>
              </div>

              <div className="relative flex h-[11.58px] w-full items-center gap-[2.57px] self-stretch">
                <div className="progress-bar-bg relative flex h-[6.43px] w-full flex-col justify-center rounded-[64.35px]">
                  <div
                    className={`h-[6.43px] ${trial.trialProgressColor} rounded-[64.35px]`}
                    style={{ width: `${trialProgressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const TrialCard = React.memo(TrialCardComponent);
