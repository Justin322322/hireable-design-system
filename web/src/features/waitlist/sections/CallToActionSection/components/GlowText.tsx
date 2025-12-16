"use client";

interface GlowTextProps {
  /** Text content to display */
  text: string;
  /** Whether the glow effect is active */
  isGlowing: boolean;
  /** Glow color configuration */
  glowColors: {
    glowColor: string;
    glowColorMid: string;
    glowColorRgba: string;
  };
  /** Glow opacity (0-1) */
  glowOpacity: number;
  /** Variant: heading or paragraph */
  variant: "heading" | "paragraph";
}

const HEADING_CLASSES =
  "w-full text-center font-['DM_Sans',Helvetica] text-3xl leading-[120%] font-semibold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px]";

const PARAGRAPH_CLASSES =
  "w-full text-center font-['Inter',Helvetica] text-sm leading-[150%] font-normal tracking-[0.4px] sm:text-base lg:text-xl";

/**
 * Text component with animated glow effect on hover
 */
export function GlowText({
  text,
  isGlowing,
  glowColors,
  glowOpacity,
  variant,
}: GlowTextProps) {
  const isHeading = variant === "heading";
  const baseClasses = isHeading ? HEADING_CLASSES : PARAGRAPH_CLASSES;

  // Gradient position differs for heading vs paragraph
  const gradientPosition = isHeading ? "50% calc(100% + 60px)" : "50% -150px";

  const gradientStyle = {
    backgroundImage: `radial-gradient(ellipse 950px 550px at ${gradientPosition}, ${glowColors.glowColor} 0%, ${glowColors.glowColorMid} 30%, ${glowColors.glowColorRgba} 60%, transparent 85%)`,
    opacity: isGlowing ? glowOpacity : 0,
  };

  const Tag = isHeading ? "h2" : "p";

  return (
    <div className="relative w-full">
      {/* Base text */}
      <Tag
        className={`${baseClasses} ${
          isHeading
            ? "text-[rgba(128,128,128,0.6)] transition-colors duration-300 ease-out [text-shadow:0.25px_0.5px_0.75px_#f5f5f5,0_0_0_#000,0.25px_0.5px_0.75px_#f5f5f5] sm:[text-shadow:0.5px_1px_1.5px_#f5f5f5,0_0_0_#000,0.5px_1px_1.5px_#f5f5f5]"
            : "text-neutral-700"
        }`}
      >
        {text}
      </Tag>

      {/* Glow overlay */}
      <Tag
        className={`${baseClasses} pointer-events-none absolute inset-0 bg-clip-text text-transparent transition-opacity duration-300 ease-out`}
        style={gradientStyle}
      >
        {text}
      </Tag>
    </div>
  );
}
