"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { MicrophoneIcon, PhoneOffIcon, VideoIcon } from "../shared/icons";

/**
 * Final phase showing the video call screen
 */
export function CallScreenPhase() {
  return (
    <motion.div
      key="call"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col items-center justify-center gap-6 py-10"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing Circles */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="border-client/50 absolute rounded-full border"
            initial={{ width: "100%", height: "100%", opacity: 0.8 }}
            animate={{
              width: ["100%", "250%"],
              height: ["100%", "250%"],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut",
            }}
          />
        ))}

        <div className="relative z-10 size-20 overflow-hidden rounded-full border-2 border-white shadow-lg sm:size-24">
          <Image
            src="/images/Camille-Mercado.svg"
            alt="Camille Mercado"
            fill
            sizes="(max-width: 640px) 80px, 96px"
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="font-text-large-b text-base leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-lg">
          Camille Mercado
        </div>
        <p className="font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm">
          Sales Manager
        </p>
      </div>

      <div className="mt-2 flex items-center gap-4">
        <CallButton icon={<MicrophoneIcon />} variant="default" />
        <CallButton icon={<PhoneOffIcon />} variant="hangup" />
        <CallButton icon={<VideoIcon />} variant="default" />
      </div>
    </motion.div>
  );
}

function CallButton({
  icon,
  variant,
}: {
  icon: React.ReactNode;
  variant: "default" | "hangup";
}) {
  if (variant === "hangup") {
    return (
      <div className="flex size-10 items-center justify-center rounded-full bg-[#ff4d4d] text-white transition-transform hover:scale-105">
        {icon}
      </div>
    );
  }

  return (
    <div className="flex size-10 items-center justify-center rounded-full border border-white/70 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] transition-transform hover:scale-105">
      {icon}
    </div>
  );
}
