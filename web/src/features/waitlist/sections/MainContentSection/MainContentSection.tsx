"use client";

import { useSelectedRole } from "@/stores";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { clientRoles, talentCountries } from "./constants";

// Animation variants - moved outside component for performance
const SECTION_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(10px)",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
  },
} as const;

const CONTAINER_VARIANTS = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

const MainContentSectionComponent = (): React.ReactElement => {
  const selectedRole = useSelectedRole();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isActiveRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  // Use hysteresis: enter at 30%, exit only when completely out of viewport
  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = rect.height;
      const visibleHeight =
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const visibleRatio = Math.max(0, visibleHeight / elementHeight);

      if (!isActiveRef.current && visibleRatio >= 0.3) {
        // Enter: need 30% visible
        isActiveRef.current = true;
        setIsSectionInView(true);
      } else if (isActiveRef.current && visibleRatio <= 0) {
        // Exit: only when completely out of viewport
        isActiveRef.current = false;
        setIsSectionInView(false);
      }
    };

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
  }, []);

  // For kicking off the text animation cycle once
  const isInViewOnce = useInView(sectionRef, { once: true, amount: 0.2 });

  // For pausing/resuming the cycle when out of view
  const isCurrentlyInView = useInView(sectionRef);

  const isTalent = useMemo(() => selectedRole === "talent", [selectedRole]);
  const items = useMemo(
    () => (isTalent ? talentCountries : clientRoles),
    [isTalent]
  );

  // Reset index when role changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsExiting(false);
  }, [selectedRole]);

  useEffect(() => {
    // Start the animation cycle when component mounts or comes into view
    if (!isInViewOnce) return;

    // Pause if scrolled out of view
    if (!isCurrentlyInView) return;

    let timeoutId: NodeJS.Timeout;
    const timer = setInterval(() => {
      // Trigger exit animation
      setIsExiting(true);

      // Wait for exit animation to complete before changing index
      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => {
          // Loop back to 0 after reaching the end
          return (prev + 1) % items.length;
        });
        setIsExiting(false);
      }, 400); // Exit animation duration (matches the transition duration)
    }, 1400); // 600ms entrance + 400ms hold + 400ms exit

    return () => {
      clearInterval(timer);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInViewOnce, isCurrentlyInView, items.length]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative z-30 flex w-full flex-col items-center gap-2.5 px-4 pt-20 pb-12 sm:px-10 sm:pt-32 sm:pb-16 lg:px-20 lg:pt-40 lg:pb-20"
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      variants={SECTION_VARIANTS}
    >
      <div className="relative z-10 flex w-full max-w-[1352px] flex-col items-start gap-2">
        <h2
          className="-mt-px flex items-center justify-center self-stretch text-center font-['DM_Sans',sans-serif] text-2xl leading-[1.2] font-semibold text-neutral-900 sm:text-3xl lg:text-[40px]"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {isTalent ? "Time to work globally" : "Time to hire differently"}
        </h2>

        <motion.div
          className="relative flex w-full flex-wrap items-center justify-center gap-x-1 gap-y-0"
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          variants={CONTAINER_VARIANTS}
        >
          {/* Animated text words with background image clipping */}
          {items.map((item, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={index}
                className="relative inline-flex items-center justify-center"
              >
                <p className="inline-flex items-center text-center font-['DM_Sans',Helvetica] text-3xl leading-[1.2] font-semibold tracking-[0] whitespace-nowrap text-[rgba(128,128,128,0.6)] antialiased [text-shadow:0.25px_0.5px_0.75px_#f5f5f5,0_0_0_#000,0.25px_0.5px_0.75px_#f5f5f5] sm:text-5xl sm:leading-[1.2] sm:[text-shadow:0.5px_1px_1.5px_#f5f5f5,0_0_0_#000,0.5px_1px_1.5px_#f5f5f5] md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[115.2px]">
                  {item.text}
                </p>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center overflow-hidden"
                    initial={{
                      clipPath: "inset(100% 0% 0% 0%)",
                      filter: "blur(4px)",
                    }}
                    animate={
                      isExiting
                        ? {
                            clipPath: "inset(0% 0% 100% 0%)",
                            filter: "blur(4px)",
                          }
                        : {
                            clipPath: "inset(0% 0% 0% 0%)",
                            filter: "blur(0px)",
                          }
                    }
                    transition={{
                      duration: isExiting ? 0.4 : 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Image Layer - Top (The actual content) */}
                    <p
                      className="absolute inset-0 inline-flex items-center justify-center bg-clip-text text-center font-['DM_Sans',Helvetica] text-3xl leading-[1.2] font-semibold tracking-[0] whitespace-nowrap text-transparent antialiased sm:text-5xl sm:leading-[1.2] md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[115.2px]"
                      style={{
                        backgroundImage: `url(${item.image}), linear-gradient(135deg, #374151 0%, #1f2937 100%)`,
                        backgroundSize: "cover, 100% 100%",
                        backgroundPosition: "center 20%, center",
                        backgroundRepeat: "no-repeat, no-repeat",
                      }}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
      {/* Gradient fade at bottom for smooth transition */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-[150px] bg-linear-to-t from-neutral-50 via-neutral-50/50 to-transparent" />
    </motion.section>
  );
};

// Memoize component to prevent unnecessary re-renders
export const MainContentSection = React.memo(MainContentSectionComponent);
MainContentSection.displayName = "MainContentSection";
