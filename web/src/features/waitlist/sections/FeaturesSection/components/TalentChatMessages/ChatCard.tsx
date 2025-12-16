"use client";

import Image from "next/image";
import type { ConversationCard } from "./types";

interface ChatCardContentProps {
  card: ConversationCard;
}

export const ChatCardContent = ({ card }: ChatCardContentProps) => (
  <>
    <div
      className="size-10 shrink-0 overflow-hidden rounded-full"
      style={{ background: card.bgColor }}
    >
      <Image
        src={card.avatar}
        alt={card.name}
        width={40}
        height={40}
        className="size-full object-cover"
      />
    </div>
    <div className="flex flex-1 flex-col items-start gap-1">
      <span className="font-['Inter'] text-[14px] leading-[120%] font-semibold tracking-[0.2px] text-neutral-900">
        {card.name}
      </span>
      <span className="font-['Inter'] text-[12px] leading-[120%] font-normal tracking-[0.2px] text-neutral-900">
        {card.message}
      </span>
    </div>
  </>
);
