"use client";

import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";

const SECTION_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(10px)",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
  },
} as const;

interface FeatureSectionBlockProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable section block for FeaturesListSection
 * Extracts repeated title + description + content pattern
 */
export const FeatureSectionBlock = ({
  title,
  description,
  children,
  className = "",
}: FeatureSectionBlockProps): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const isActiveRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  // Use hysteresis: enter at 20%, exit only when completely out of viewport
  const checkVisibility = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementHeight = rect.height;
    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const visibleRatio = Math.max(0, visibleHeight / elementHeight);

    if (!isActiveRef.current && visibleRatio >= 0.2) {
      // Enter: need 20% visible
      isActiveRef.current = true;
      setIsInView(true);
    } else if (isActiveRef.current && visibleRatio <= 0) {
      // Exit: only when completely out of viewport
      isActiveRef.current = false;
      setIsInView(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        checkVisibility();
        rafRef.current = null;
      });
    };

    checkVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [checkVisibility]);

  return (
    <motion.div
      ref={containerRef}
      className={`flex w-full flex-col items-center gap-10 overflow-hidden px-4 py-28 sm:gap-14 sm:px-10 sm:py-40 lg:px-20 lg:py-48 ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={SECTION_VARIANTS}
    >
      <div className="flex w-full max-w-[632px] flex-col items-center gap-4 px-4">
        <h2 className="hero-title-text font-heading-s relative -mt-px flex w-full items-center justify-center text-center text-2xl leading-[1.2] font-(--heading-s-font-weight) tracking-(--heading-s-letter-spacing) [font-style:var(--heading-s-font-style)] sm:text-3xl sm:leading-(--heading-s-line-height) lg:text-(length:--heading-s-font-size)">
          {title}
        </h2>
        <p className="font-text-s relative flex items-center justify-center text-center text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-base lg:text-(length:--text-s-font-size)">
          {description}
        </p>
      </div>
      {children}
    </motion.div>
  );
};
