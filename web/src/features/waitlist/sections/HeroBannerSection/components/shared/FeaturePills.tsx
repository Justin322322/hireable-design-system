import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";

interface FeaturePill {
  icon: string;
  label: string;
  active: boolean;
}

interface FeaturePillsProps {
  pills: readonly FeaturePill[];
  activeFeature: string;
  onFeatureChange: (feature: string) => void;
  selectedRole: string;
  maxWidth?: string | number;
}

const FeaturePillsComponent: React.FC<FeaturePillsProps> = ({
  pills,
  activeFeature,
  onFeatureChange,
  selectedRole,
  maxWidth,
}) => {
  const isTalent = selectedRole === "talent";

  // Memoize filter values to prevent recalculation on every render
  const { activeColor, activeFilter, inactiveFilter } = useMemo(
    () => ({
      activeColor: isTalent ? "text-talent" : "text-client",
      activeFilter: isTalent
        ? "invert(62%) sepia(53%) saturate(2878%) hue-rotate(313deg) brightness(101%) contrast(100%)"
        : "invert(48%) sepia(79%) saturate(2476%) hue-rotate(176deg) brightness(98%) contrast(101%)",
      inactiveFilter: "grayscale(100%) brightness(0.5) opacity(0.7)",
    }),
    [isTalent]
  );

  return (
    <div
      style={{ maxWidth }}
      className="scrollbar-hide mx-auto flex w-full justify-start overflow-x-auto overflow-y-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:justify-center sm:overflow-visible"
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.nav
          key={selectedRole}
          initial={{ x: isTalent ? "-100%" : "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: isTalent ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex flex-row items-center gap-2 sm:gap-1.5 lg:gap-4"
        >
          {pills.map((pill, index) => {
            const isActive = activeFeature === pill.label;
            return (
              <button
                key={index}
                onClick={() => onFeatureChange(pill.label)}
                className="hover:bg-neutral-150 relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-[8px] p-2 transition-all duration-200"
              >
                <Image
                  className="relative size-4 sm:size-5"
                  alt="Icon components"
                  src={pill.icon}
                  width={20}
                  height={20}
                  unoptimized
                  priority
                  style={{
                    filter: isActive ? activeFilter : inactiveFilter,
                    transition: "filter 0.2s ease-in-out",
                  }}
                />
                <span
                  className={`relative -mt-px w-fit text-center font-['Inter',Helvetica] text-sm leading-5 font-medium tracking-[0.20px] whitespace-nowrap transition-colors duration-200 sm:text-base sm:leading-6 ${
                    isActive ? activeColor : "text-neutral-700"
                  }`}
                >
                  {pill.label}
                </span>
              </button>
            );
          })}
        </motion.nav>
      </AnimatePresence>
    </div>
  );
};

export const FeaturePills = React.memo(FeaturePillsComponent);
FeaturePills.displayName = "FeaturePills";
