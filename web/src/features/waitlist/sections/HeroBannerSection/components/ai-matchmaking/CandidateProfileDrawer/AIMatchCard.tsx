import { PulsingButton } from "@/components/ui";
import Image from "next/image";
import React from "react";

interface AIMatchCardProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export const AIMatchCard: React.FC<AIMatchCardProps> = ({
  isExpanded,
  onToggle,
}) => (
  <div className="w-full">
    <div className="border-client flex w-full flex-col rounded-[5.15px] border-[0.48px] bg-white">
      <div className="flex w-full items-start gap-[1.93px] p-[10.3px]">
        <div className="flex flex-1 flex-col items-start gap-[1.93px]">
          <div className="flex items-center gap-[3.86px]">
            <Image
              src="/icons/AI-Matchmaker-icon.svg"
              alt="AI Matchmaker"
              width={12}
              height={12}
              className="size-[11.58px]"
            />
            <span className="font-['Inter'] text-[9.65px] font-semibold tracking-[0.19px] text-neutral-900 uppercase">
              AI Matchmaker
            </span>
          </div>
          <span className="font-['Inter'] text-[6.76px] tracking-[0.1px] text-neutral-700">
            Why is this candidate a good match?
          </span>
        </div>
        <div className="border-success bg-success-light flex h-[19.3px] w-[72.44px] items-center justify-center gap-[6.18px] rounded-[5.15px] border-[0.64px]">
          <span className="text-success font-['Inter'] text-[7.72px] tracking-[0.13px] uppercase">
            92% MATCHED
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-[8px] p-[10.3px] pt-0 pb-[10.3px]">
        <MatchSection title="WORK STYLE FIT">
          Camille&apos;s collaborative and results-driven personality aligns
          with your team&apos;s preference for structured problem solvers who
          thrive in cross-functional environments.
        </MatchSection>

        {isExpanded && (
          <>
            <MatchSection title="PERFORMANCE HISTORY">
              In her previous role, Camille successfully delivered objectives in
              sales prospecting and pipeline growth, which directly match your
              current objectives for lead generation and revenue expansion.
            </MatchSection>

            <MatchSection title="JOB DESCRIPTION FIT">
              With 4+ years of experience in B2B sales operations and a track
              record of implementing productivity-enhancing strategies,
              Camille&apos;s background matches the role requirements for a
              Sales Prospecting Specialist.
            </MatchSection>
          </>
        )}

        <div className="relative flex w-fit items-center">
          <button
            onClick={onToggle}
            className="text-client cursor-pointer font-['Inter'] text-[9px] tracking-[0.13px] underline"
          >
            {isExpanded ? "less" : "more"}
          </button>
          {!isExpanded && (
            <div className="relative h-0 w-[30px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PulsingButton
                  onClick={onToggle}
                  color="#00A7F8"
                  ariaLabel="Expand AI match details"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const MatchSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="flex flex-col gap-[7.72px]">
    <div className="bg-client/10 flex h-[19.3px] w-fit items-center justify-center gap-[6.18px] rounded-[5.15px] px-[7.72px]">
      <span className="text-client font-['Inter'] text-[7.72px] tracking-[0.13px] uppercase">
        {title}
      </span>
    </div>
    <p className="font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] text-neutral-900">
      {children}
    </p>
  </div>
);
