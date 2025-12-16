import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  PulsingButton,
} from "@/components/ui";
import { motion, type HTMLMotionProps } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import type { Candidate } from "./types";

interface CandidateCardProps {
  candidate: Candidate;
  isNew?: boolean;
  onProfileClick?: (candidate: Candidate) => void;
}

export const CandidateCard = React.memo(
  React.forwardRef<HTMLDivElement, CandidateCardProps>(
    ({ candidate, isNew = false, onProfileClick }, ref) => {
      const motionProps: HTMLMotionProps<"div"> = useMemo(
        () => ({
          layout: true,
          initial: isNew ? { opacity: 0, y: -60, scale: 0.95 } : false,
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: {
            layout: {
              type: "spring" as const,
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            },
            opacity: { duration: 0.4, ease: "easeOut" },
            y: {
              type: "spring" as const,
              stiffness: 350,
              damping: 28,
              mass: 0.6,
            },
            scale: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
          },
        }),
        [isNew]
      );

      return (
        <motion.div
          ref={ref}
          {...motionProps}
          className="pointer-events-auto relative z-10"
        >
          {/* Pulsing button isolated outside the card */}
          {candidate.name === "Camille Mercado" && (
            <div className="absolute top-[8px] left-[105px] z-20">
              <PulsingButton
                color="#00A7F8"
                onClick={(e) => {
                  e.stopPropagation();
                  onProfileClick?.(candidate);
                }}
              />
            </div>
          )}
          <Card
            className={`h-[90px] w-[199px] rounded-[4px] border-[0.5px] border-solid border-neutral-300 bg-white transition-colors ${candidate.name === "Camille Mercado" ? "cursor-pointer hover:bg-[var(--color-neutral-150)]" : ""}`}
            onClick={
              candidate.name === "Camille Mercado"
                ? () => onProfileClick?.(candidate)
                : undefined
            }
            role={candidate.name === "Camille Mercado" ? "button" : undefined}
            tabIndex={candidate.name === "Camille Mercado" ? 0 : undefined}
            onKeyDown={
              candidate.name === "Camille Mercado"
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onProfileClick?.(candidate);
                    }
                  }
                : undefined
            }
          >
            <CardContent className="flex h-full flex-col items-start gap-[6px] p-[8px]">
              <div className="relative flex w-full items-start justify-between self-stretch">
                <div className="relative flex h-[26.19px] flex-1 grow items-center gap-[5.24px]">
                  <Avatar className="size-[26.19px] rounded-[81.85px]">
                    <AvatarImage src={candidate.avatar} alt={candidate.name} />
                    <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="relative flex flex-1 grow flex-col items-start gap-[2.62px]">
                    <div className="relative mt-[-0.65px] flex w-fit items-center gap-1 font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-semibold tracking-[0.13px] whitespace-nowrap text-neutral-900">
                      {candidate.name}
                    </div>
                    <div className="relative self-stretch font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-normal tracking-[0.13px] text-neutral-700">
                      {candidate.role}
                    </div>
                  </div>
                </div>

                <button className="flex size-4 cursor-pointer items-center justify-center text-neutral-300 hover:text-neutral-700">
                  <Image
                    src="/icons/icon-components-3.svg"
                    alt="Menu"
                    width={13}
                    height={13}
                    priority={false}
                    loading="lazy"
                  />
                </button>
              </div>

              <div className="relative flex w-full items-center justify-between gap-2 self-stretch">
                <div className="flex items-center gap-[3.93px] font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-normal tracking-[0.13px] text-neutral-700">
                  <span>{candidate.salary}</span>
                  <span>•</span>
                  <span>{candidate.experience}</span>
                </div>
                {candidate.matchStatus && (
                  <span className="rounded-[3px] bg-[var(--color-success-light)] px-1.5 py-0.5 font-['Inter',Helvetica] text-[7px] leading-[9px] font-semibold tracking-[0.13px] whitespace-nowrap text-[var(--color-success)] uppercase">
                    {candidate.matchStatus}
                  </span>
                )}
              </div>

              <div className="relative mt-auto flex w-full items-center justify-between self-stretch">
                <div className="font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-normal tracking-[0.13px] text-neutral-200">
                  Activity Title
                </div>
                <button className="flex size-4 items-center justify-center rounded-full bg-neutral-100">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 2L5 4L3 6"
                      stroke="#9e9e9e"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      );
    }
  )
);

CandidateCard.displayName = "CandidateCard";
