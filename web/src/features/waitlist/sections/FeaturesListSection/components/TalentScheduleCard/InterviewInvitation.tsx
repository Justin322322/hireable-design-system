"use client";

import Image from "next/image";
import { ClockIcon, LocationIcon } from "../shared/icons";

interface InterviewInvitationProps {
  /** Whether to use compact mobile layout */
  compact?: boolean;
}

/**
 * Interview invitation panel showing interviewer info and meeting details
 */
export function InterviewInvitation({
  compact = false,
}: InterviewInvitationProps) {
  if (compact) {
    return (
      <div className="flex w-full flex-col gap-3 border-b border-neutral-300 bg-[rgba(255,255,255,0.24)] p-4">
        <div className="flex items-center gap-3">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-white">
            <Image
              src="/images/Jacob-Smith.svg"
              alt="Jacob Smith"
              width={48}
              height={48}
              className="size-full object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <span className="truncate font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.2px] text-neutral-700">
              Jacob Smith
            </span>
            <span className="truncate font-['Inter'] text-[14px] leading-[150%] font-semibold tracking-[0.2px] text-neutral-900">
              Interview Invitation
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <ClockIcon size={14} />
            <span className="font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.21px] text-neutral-700">
              30 mins.
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <LocationIcon size={14} />
            <span className="font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.21px] text-neutral-700">
              Zoom
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-[460px] w-[240px] flex-col justify-between border-r border-neutral-300 bg-[rgba(255,255,255,0.24)]"
      style={{ padding: "24px" }}
    >
      <div className="flex flex-col" style={{ gap: "24px" }}>
        <div className="flex flex-col" style={{ gap: "12px" }}>
          <div className="relative size-12 overflow-hidden rounded-full bg-white">
            <Image
              src="/images/Jacob-Smith.svg"
              alt="Jacob Smith"
              width={48}
              height={48}
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.2px] text-neutral-700">
              Jacob Smith
            </span>
            <span className="font-['Inter'] text-[14px] leading-[150%] font-semibold tracking-[0.2px] text-neutral-900">
              Interview Invitation
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <ClockIcon size={14} className="shrink-0" />
            <span className="font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.21px] text-neutral-700">
              30 mins.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LocationIcon size={14} className="shrink-0" />
            <span className="font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.21px] text-neutral-700">
              Zoom
            </span>
          </div>
        </div>
      </div>

      <button className="flex h-8 w-full items-center justify-center rounded border-[0.75px] border-neutral-300 bg-transparent font-['Inter'] text-[11px] leading-[96%] font-semibold text-neutral-900 transition-colors hover:bg-[rgba(0,0,0,0.02)]">
        Send a message
      </button>
    </div>
  );
}
