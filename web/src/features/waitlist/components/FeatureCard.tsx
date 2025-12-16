"use client";

import { GlassCard } from "@/components/ui";
import { useCardScale } from "@/hooks/useCardScale";
import { motion } from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const CARD_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(12px)",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
  },
} as const;

interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  cardRef?: React.RefObject<HTMLDivElement | null>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

/**
 * Reusable feature card component
 * Extracts common pattern from FirstCard, MiddleCard, LastCard
 */
export const FeatureCard = ({
  title,
  description,
  children,
  cardRef,
  onMouseEnter,
  onMouseLeave,
}: FeatureCardProps): React.ReactElement => {
  const { scale } = useCardScale();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const isActiveRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  // Use hysteresis: enter at 25%, exit only when completely out of viewport
  const checkVisibility = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementHeight = rect.height;
    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const visibleRatio = Math.max(0, visibleHeight / elementHeight);

    if (!isActiveRef.current && visibleRatio >= 0.25) {
      // Enter: need 25% visible
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

  // Memoize style objects to prevent recreation on every render
  const cardStyle = useMemo(
    () => ({
      height: 280 * scale,
      maxWidth: 424 * scale,
    }),
    [scale]
  );

  const transformStyle = useMemo(
    () => ({
      transform: `scale(${scale})`,
      transformOrigin: "center" as const,
    }),
    [scale]
  );

  return (
    <motion.div
      ref={containerRef}
      className="flex w-full max-w-[424px] flex-1 flex-col items-center gap-6 text-center sm:gap-10 lg:items-start lg:text-left"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={CARD_VARIANTS}
    >
      <div className="flex w-full flex-col items-center gap-[11px] lg:items-start">
        <h2 className="font-text-large-b flex w-full items-center justify-center text-(length:--text-large-b-font-size) leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-black [font-style:var(--text-large-b-font-style)] lg:justify-start">
          {title}
        </h2>
        <p className="font-text-medium flex w-full items-center justify-center text-(length:--text-medium-font-size) leading-(--text-medium-line-height) font-(--text-medium-font-weight) tracking-(--text-medium-letter-spacing) text-neutral-600 [font-style:var(--text-medium-font-style)] lg:justify-start">
          {description}
        </p>
      </div>

      <GlassCard
        ref={cardRef}
        className="mx-auto w-full"
        style={cardStyle}
        innerClassName="flex items-center justify-center px-0 sm:px-3 py-12"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex size-full items-center justify-center">
          <div style={transformStyle}>{children}</div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
