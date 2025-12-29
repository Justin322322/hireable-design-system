"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, Avatar, AvatarImage, AvatarFallback } from "@/components/ui";
import { cva, type VariantProps } from "class-variance-authority";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// ============================================================================
// TALENT CARD - Displays talent/user info in a compact horizontal card
// Also supports Active Test Card pattern with icon-based avatars
// ============================================================================

const talentCardVariants = cva(
  "flex flex-row items-center gap-2 p-4 rounded-lg transition-all cursor-pointer",
  {
    variants: {
      state: {
        enabled: "border border-neutral-muted hover:border-foreground hover:shadow-md",
        hover: "border border-foreground shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
        pressed: "border border-client shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
      },
    },
    defaultVariants: {
      state: "enabled",
    },
  }
);

// ============================================================================
// COMPONENT TYPES
// ============================================================================

export interface TalentCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof talentCardVariants> {
  /** Primary text (name or title) */
  name: string;
  /** Secondary text (role or subtitle) */
  role: string;
  /** Avatar image URL (optional) */
  avatar?: string;
  /** Custom icon element for avatar (optional - overrides avatar image) */
  avatarIcon?: React.ReactNode;
  /** Custom className for avatar styling */
  avatarClassName?: string;
  /** Click handler */
  onCardClick?: () => void;
}

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Talent Card - Displays talent/user info in a compact horizontal card
 * Also works as Active Test Card with icon-based avatar
 *
 * @example Talent Card (with photo)
 * <TalentCard
 *   name="Juan Dela Cruz"
 *   role="Sales Manager"
 *   avatar="/images/juan-delacruz.svg"
 *   onCardClick={() => viewProfile()}
 * />
 *
 * @example Active Test Card (with icon)
 * <TalentCard
 *   name="Sales Manager"
 *   role="Nairobi"
 *   avatarIcon={<TestIcon />}
 *   avatarClassName="bg-[#B1A0FF]"
 *   onCardClick={() => viewTest()}
 * />
 */
export const TalentCard = React.forwardRef<HTMLDivElement, TalentCardProps>(
  (
    {
      className,
      name,
      role,
      avatar,
      avatarIcon,
      avatarClassName,
      state,
      onCardClick,
      ...props
    },
    ref
  ) => {
    // Get initials for fallback (only used when no avatar or avatarIcon)
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    return (
      <Card
        ref={ref}
        className={cn(talentCardVariants({ state }), className)}
        onClick={onCardClick}
        {...props}
      >
        {/* Avatar - supports image, custom icon, or initials fallback */}
        {avatarIcon ? (
          // Custom icon avatar (for Active Test Card pattern)
          <div className={cn(
            "flex items-center justify-center size-10 rounded-full",
            avatarClassName || "bg-neutral-subtle"
          )}>
            {avatarIcon}
          </div>
        ) : (
          // Standard avatar with image or initials
          <Avatar size="lg">
            {avatar && <AvatarImage src={avatar} alt={name} />}
            <AvatarFallback className={cn(
              "bg-neutral-subtle text-text-tertiary text-sm",
              avatarClassName
            )}>
              {initials}
            </AvatarFallback>
          </Avatar>
        )}

        {/* Name + Role */}
        <div className="flex flex-col items-start gap-1 flex-1">
          <span className="font-secondary font-semibold text-sm text-foreground leading-[120%] tracking-[0.2px]">
            {name}
          </span>
          <span className="font-secondary font-normal text-xs text-text-tertiary leading-[120%] tracking-[0.2px]">
            {role}
          </span>
        </div>

        {/* Chevron Right */}
        <ChevronRightIcon sx={{ width: 24, height: 24 }} className="text-foreground" />
      </Card>
    );
  }
);

TalentCard.displayName = "TalentCard";

