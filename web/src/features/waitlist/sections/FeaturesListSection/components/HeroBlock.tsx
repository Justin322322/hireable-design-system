"use client";

import { ParticleBackground } from "@/components/shared";
import { motion } from "framer-motion";
import React from "react";
import { TEXT_VARIANTS, TITLE_VARIANTS } from "../constants";

interface HeroBlockProps {
  textRef: React.RefObject<HTMLDivElement | null>;
  isInView: boolean;
  beamColor: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
}

export const HeroBlock = ({
  textRef,
  isInView,
  beamColor,
  heroTitle,
  heroSubtitle,
}: HeroBlockProps) => (
  <div className="relative isolate flex min-h-[600px] w-full flex-col items-center justify-center gap-2.5 overflow-hidden px-4 py-28 sm:min-h-[800px] sm:px-10 sm:py-40 lg:px-20 lg:py-48">
    <div className="pointer-events-none absolute inset-0 z-5 flex items-center justify-center">
      <div
        className="h-[120px] w-full rounded-full blur-[60px] transition-colors duration-500 lg:h-[200px] xl:h-[240px] 2xl:h-[280px]"
        style={{ backgroundColor: `${beamColor}4D` }}
      />
    </div>

    <ParticleBackground className="absolute inset-0 z-15" />

    <div
      ref={textRef}
      className="relative z-20 inline-flex w-full max-w-[672px] flex-col items-center gap-2 px-4 lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1300px]"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={TEXT_VARIANTS}
        className="font-text-large-b relative -mt-px flex items-center justify-center text-center text-lg leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-xl lg:text-[32px]! xl:text-[36px]! 2xl:text-[40px]!"
      >
        {heroSubtitle}
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={TITLE_VARIANTS}
        className="hero-title-text font-display relative -mt-px flex items-center justify-center text-center text-3xl leading-[1.2] font-semibold tracking-[0px] filter-[url(#inner-shadow)] sm:text-5xl sm:leading-(--display-line-height) lg:text-[72px]! xl:text-[84px]! 2xl:text-[96px]!"
      >
        {heroTitle}
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 z-1 h-[1200px] w-full overflow-hidden bg-[linear-gradient(180deg,rgba(250,250,250,0)_0%,rgba(250,250,250,0.08)_100%)] backdrop-blur-[6px] backdrop-brightness-100 [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-2 h-[250px] bg-linear-to-b from-transparent to-white/40" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-2 h-[200px] bg-linear-to-t from-neutral-50 via-neutral-50/80 to-transparent" />
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-2 w-[150px] bg-linear-to-r from-white/40 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-2 w-[150px] bg-linear-to-l from-white/40 to-transparent" />
    </div>
  </div>
);
