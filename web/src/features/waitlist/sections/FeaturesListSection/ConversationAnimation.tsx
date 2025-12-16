"use client";

import { useInViewWithDelay, useMediaQuery } from "@/hooks";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  sender: "client" | "candidate";
  text: string;
  name: string;
  avatar: string;
}

const CLIENT_CONVERSATION: Message[] = [
  {
    id: 1,
    sender: "candidate",
    name: "Isabel Reyes",
    text: "Can we align on the KPI? 4% conversion in 30 days feels realistic.",
    avatar: "/images/Isabel-Reyes.svg",
  },
  {
    id: 2,
    sender: "client",
    name: "Jacob Smith",
    text: "Agreed. Let's set 4% as the KPI for the Test Period.",
    avatar: "/images/Jacob-Smith.svg",
  },
  {
    id: 3,
    sender: "candidate",
    name: "Isabel Reyes",
    text: "What's the budget for A/B testing tools?",
    avatar: "/images/Isabel-Reyes.svg",
  },
  {
    id: 4,
    sender: "client",
    name: "Jacob Smith",
    text: "$500/month for tools. Does that work?",
    avatar: "/images/Jacob-Smith.svg",
  },
  {
    id: 5,
    sender: "candidate",
    name: "Isabel Reyes",
    text: "Perfect! I'll include weekly progress reports.",
    avatar: "/images/Isabel-Reyes.svg",
  },
];

const TALENT_CONVERSATION: Message[] = [
  {
    id: 1,
    sender: "candidate",
    name: "Isabel Reyes",
    text: "Given the workload and creative research involved, can we adjust the rate to $2,200/month?",
    avatar: "/images/Isabel-Reyes.svg",
  },
  {
    id: 2,
    sender: "client",
    name: "Jacob Smith",
    text: "That's reasonable — your portfolio shows great motion depth.",
    avatar: "/images/Jacob-Smith.svg",
  },
  {
    id: 3,
    sender: "candidate",
    name: "Isabel Reyes",
    text: "I appreciate that! I'm confident I can deliver high-impact visuals.",
    avatar: "/images/Isabel-Reyes.svg",
  },
];

interface ConversationAnimationProps {
  isTalent?: boolean;
}

export const ConversationAnimation = ({
  isTalent = false,
}: ConversationAnimationProps): React.ReactElement => {
  const conversation = isTalent ? TALENT_CONVERSATION : CLIENT_CONVERSATION;
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const wasAnimatingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use delayed exit to prevent jarring resets
  const isInView = useInViewWithDelay(containerRef, {
    amount: 0.3,
    exitDelay: 800,
  });

  const resetAnimation = useCallback(() => {
    setMessages([]);
    setCurrentIndex(0);
  }, []);

  // Start/reset animation based on viewport
  useEffect(() => {
    const shouldAnimate = isMobile ? isInView : isInView || isHovered;

    if (shouldAnimate && !wasAnimatingRef.current) {
      // Starting animation
      resetAnimation();
      setIsAnimating(true);
      wasAnimatingRef.current = true;
    } else if (!shouldAnimate && wasAnimatingRef.current) {
      // Leaving viewport - reset for next time
      setIsAnimating(false);
      wasAnimatingRef.current = false;
      // Keep messages visible briefly, then reset
      setTimeout(() => {
        resetAnimation();
      }, 300);
    }
  }, [isMobile, isInView, isHovered, resetAnimation]);

  useEffect(() => {
    if (!isAnimating) return;

    if (currentIndex < conversation.length) {
      const delay = currentIndex === 0 ? 500 : 1200;
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, conversation[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
    // Animation completed - messages stay visible until viewport exit
  }, [currentIndex, isAnimating, conversation]);

  // Render message bubble component
  const MessageBubble = ({ message }: { message: Message }) => (
    <div className="flex items-start gap-2">
      <div className="size-10 shrink-0 overflow-hidden rounded-full bg-white">
        <Image
          src={message.avatar}
          alt={message.name}
          width={40}
          height={40}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 rounded-2xl bg-white p-3">
        <span className="font-['Inter'] text-sm leading-[120%] font-semibold tracking-[0.2px] text-neutral-900">
          {message.name}
        </span>
        <p className="font-['Inter'] text-sm leading-[120%] font-normal tracking-[0.2px] text-neutral-900">
          {message.text}
        </p>
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full px-4 py-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Invisible placeholder to reserve space - prevents layout shift */}
      <div className="invisible flex flex-col gap-4" aria-hidden="true">
        {conversation.map((message) => (
          <MessageBubble key={`placeholder-${message.id}`} message={message} />
        ))}
      </div>

      {/* Animated messages overlay */}
      <div className="absolute inset-x-0 top-0 flex flex-col gap-4 px-4">
        <AnimatePresence mode="sync">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              layout={false}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <MessageBubble message={message} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
