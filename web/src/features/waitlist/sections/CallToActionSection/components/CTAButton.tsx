"use client";

import { CTA_STYLES } from "../constants";

interface CTAButtonProps {
  /** Click handler */
  onClick?: () => void;
  /** Whether button is in hovered/active state */
  isActive: boolean;
  /** Whether to use talent (pink) or client (blue) theme */
  isTalent: boolean;
  /** Mouse enter handler */
  onMouseEnter: () => void;
  /** Mouse leave handler */
  onMouseLeave: () => void;
}

/**
 * CTA button with gradient border and hover effects
 */
export function CTAButton({
  onClick,
  isActive,
  isTalent,
  onMouseEnter,
  onMouseLeave,
}: CTAButtonProps) {
  const hoverStyles = isTalent ? CTA_STYLES.talent : CTA_STYLES.client;

  return (
    <div
      className="cta-button-outer transition-all duration-300 ease-out"
      data-theme={isTalent ? "talent" : "client"}
      style={{
        background: isActive
          ? hoverStyles.ctaOuter
          : CTA_STYLES.default.ctaOuter,
        boxShadow: isActive
          ? hoverStyles.ctaShadow
          : CTA_STYLES.default.ctaShadow,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={onClick}
        className="cta-button-inner transition-all duration-300 ease-out"
        data-theme={isTalent ? "talent" : "client"}
        style={{
          background: isActive
            ? hoverStyles.ctaInner
            : CTA_STYLES.default.ctaInner,
        }}
      >
        <span
          className="text-center font-['Inter',Helvetica] text-xl leading-[150%] font-medium tracking-[0.4px] whitespace-nowrap"
          style={{ color: CTA_STYLES.default.buttonText }}
        >
          Join waitlist
        </span>
      </button>
    </div>
  );
}
