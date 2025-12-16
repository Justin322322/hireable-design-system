import { Button } from "@/components/ui";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface HeroContentProps {
  selectedRole: string;
  onJoinWaitlistClick?: () => void;
}

const HeroContentComponent: React.FC<HeroContentProps> = ({
  selectedRole,
  onJoinWaitlistClick,
}) => {
  const isTalent = selectedRole === "talent";
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="relative flex w-full flex-col items-center gap-[40px]">
      {/* SEO H1 - Visually Hidden */}
      <h1 className="sr-only">Hireable PH - Hire Dedicated Filipino Talent</h1>

      {/* Title */}
      <div className="grid w-full grid-cols-1 place-items-center overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <AnimatePresence initial={false}>
          {isTalent ? (
            <motion.h2
              key="talent-title"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="hero-title-text font-display relative col-start-1 row-start-1 -mt-px flex items-center justify-center self-stretch text-center text-[32px] leading-[1.2] font-semibold tracking-[0px] filter-[url(#inner-shadow)] sm:text-[72px]"
            >
              Stop juggling multiple clients
            </motion.h2>
          ) : (
            <motion.h2
              key="client-title"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="hero-title-text font-display relative col-start-1 row-start-1 -mt-px flex items-center justify-center self-stretch text-center text-[32px] leading-[1.2] font-semibold tracking-[0px] filter-[url(#inner-shadow)] sm:text-[72px]"
            >
              Stop settling for divided attention
            </motion.h2>
          )}
        </AnimatePresence>
      </div>

      {/* Description */}
      <div className="grid w-full grid-cols-1 place-items-center overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <AnimatePresence initial={false}>
          {isTalent ? (
            <motion.p
              key="talent-desc"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="relative col-start-1 row-start-1 self-stretch text-center font-['Inter',Helvetica] text-base leading-[24px] font-normal tracking-[0.40px] text-neutral-700 sm:text-xl sm:leading-[30px]"
            >
              Work with one client who pays what you&apos;re worth.
            </motion.p>
          ) : (
            <motion.p
              key="client-desc"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="relative col-start-1 row-start-1 self-stretch text-center font-['Inter',Helvetica] text-base leading-[24px] font-normal tracking-[0.40px] text-neutral-700 sm:text-xl sm:leading-[30px]"
            >
              Find remote workers who focus on your business, not 5 others.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Outer wrapper with gradient border */}
      <div
        className="group relative flex items-center justify-center gap-[4.5px] rounded-full p-[2px] transition-all duration-300 hover:scale-105 sm:p-[3px]"
        style={{
          background: isTalent
            ? "linear-gradient(180deg, #FFCCE0 0%, #FF8AAD 50%, #D4567C 100%)"
            : "linear-gradient(180deg, #9ADEFF 0%, #49C3FF 50%, #005B87 100%)",
          boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.15), 0px 8px 20px 2px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Inner button */}
        <Button
          className="relative flex h-12 w-[180px] items-center justify-center gap-[4.5px] overflow-hidden rounded-full px-6 py-2 shadow-[inset_0px_-1px_0.5px_rgba(255,255,255,0.25)] transition-all duration-300 sm:h-16 sm:w-[233px] sm:gap-2 sm:px-10 sm:py-2 sm:shadow-[inset_0px_-1.5px_0.5px_rgba(255,255,255,0.25)]"
          style={{
            background: isTalent
              ? isHovered
                ? "linear-gradient(90deg, #FFa0c0 0%, #F07090 106.65%)"
                : "linear-gradient(90deg, #FF8AAD 0%, #E05A80 106.65%)"
              : isHovered
                ? "linear-gradient(90deg, #44BEFA 0%, #0996DA 106.65%)"
                : "linear-gradient(90deg, #09A7F4 0%, #0073AA 106.65%)",
          }}
          onClick={onJoinWaitlistClick}
        >
          {/* Shine effect */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          <span className="relative text-center font-['Inter',Helvetica] text-sm leading-[96%] font-semibold whitespace-nowrap text-white sm:text-xl">
            Join the waitlist
          </span>
        </Button>
      </div>

      {/* SVG Filter for Inner Shadow - matches Figma: 0px 1px 4px 0px #00000066 inset */}
      <svg width="0" height="0" className="absolute block">
        <defs>
          <filter
            id="inner-shadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feFlood floodColor="#000000" result="flood" />
            <feComposite
              operator="out"
              in="flood"
              in2="SourceAlpha"
              result="inverse"
            />
            <feGaussianBlur stdDeviation="2" in="inverse" result="blurred" />
            <feOffset dx="0" dy="1" in="blurred" result="offset" />
            <feComposite
              operator="in"
              in="offset"
              in2="SourceAlpha"
              result="shadow"
            />
            <feComponentTransfer in="shadow" result="shadow-opacity">
              <feFuncA type="linear" slope="0.4" />
            </feComponentTransfer>
            <feComposite
              operator="over"
              in="shadow-opacity"
              in2="SourceGraphic"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export const HeroContent = React.memo(HeroContentComponent);
HeroContent.displayName = "HeroContent";
