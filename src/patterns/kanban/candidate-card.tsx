"use client";

import * as React from "react";
import { Card, CardContent, Avatar, AvatarFallback, Badge, Button, Icon, type IconName } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * CandidateCard - Candidate profile card for kanban boards
 * 
 * @example
 * ```tsx
 * <CandidateCard
 *   name="Jane Smith"
 *   role="Product Designer"
 *   avatar="/avatars/jane.jpg"
 *   metadata={[
 *     { value: "$100k - $130k" },
 *     { value: "8+ years" }
 *   ]}
 *   badge={{ label: "95% MATCH", variant: "ontrack" }}
 *   footer={{ label: "Activity Title", actions: { menu: () => {}, details: () => {} } }}
 * />
 * ```
 */

export interface CandidateCardMetadata {
  label?: string;
  value: string;
  icon?: IconName;
}

export interface CandidateCardBadge {
  label: string;
  variant?: "default" | "ontrack" | "atrisk" | "offtrack" | "complete";
  shape?: "badge" | "pill";
}

export interface CandidateCardFooter {
  label?: string;
  actions?: {
    menu?: {
      onClick?: () => void;
      icon?: IconName;
      ariaLabel?: string;
    };
    details?: {
      onClick?: () => void;
      icon?: IconName;
      ariaLabel?: string;
    };
  };
}

export interface CandidateCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Candidate name */
  name: string;
  /** Job role */
  role: string;
  /** Avatar image URL (optional) */
  avatar?: string;
  /** Array of metadata (salary, experience, etc.) */
  metadata?: CandidateCardMetadata[];
  /** Badge configuration (match status, etc.) */
  badge?: CandidateCardBadge;
  /** Footer configuration */
  footer?: CandidateCardFooter;
  /** Click handler for entire card */
  onClick?: () => void;
  /** Custom class name */
  className?: string;
  /** Avatar size */
  avatarSize?: number;
}

export const CandidateCard = React.forwardRef<HTMLDivElement, CandidateCardProps>(
  (
    {
      name,
      role,
      avatar,
      metadata = [],
      badge,
      footer,
      onClick,
      className,
      avatarSize = 40,
      ...props
    },
    ref
  ) => {
    const isClickable = !!onClick;
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    return (
      <Card
        ref={ref}
        className={cn(
          "h-[135px] w-full max-w-[300px] rounded-md border border-button-tertiary-border bg-background",
          isClickable && "cursor-pointer hover:bg-muted transition-colors",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <CardContent className="flex h-full flex-col items-start gap-[9px] p-3">
          {/* Header with avatar, name, role, and menu */}
          <div className="relative flex w-full items-start justify-between">
            <div className="relative flex flex-1 items-center gap-2 min-w-0">
              <Avatar style={{ width: avatarSize, height: avatarSize }} className="shrink-0">
                {avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={avatar} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <AvatarFallback className="bg-neutral-muted text-sm font-medium text-muted-foreground">
                    {initials}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="relative flex flex-1 flex-col items-start gap-1 min-w-0">
                <div className="text-sm leading-tight font-semibold tracking-normal text-foreground truncate w-full">
                  {name}
                </div>
                <div className="text-xs leading-tight font-normal tracking-normal text-muted-foreground truncate w-full">
                  {role}
                </div>
              </div>
            </div>
            {footer?.actions?.menu && (
              <Button
                variant="ghost"
                size="icon"
                aria-label={footer.actions.menu.ariaLabel || "More options"}
                className="flex h-6 w-6 items-center justify-center text-icon hover:text-foreground shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  footer.actions?.menu?.onClick?.();
                }}
              >
                <Icon icon={footer.actions.menu.icon || "more_horiz"} size={20} />
              </Button>
            )}
          </div>

          {/* Metadata and badge */}
          <div className="relative flex w-full items-center justify-between gap-2">
            {metadata.length > 0 && (
              <div className="flex items-center gap-1.5 text-xs leading-tight font-normal tracking-normal text-muted-foreground flex-wrap flex-1 min-w-0">
                {metadata.map((item, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span>•</span>}
                    <span className="flex items-center gap-1">
                      {item.icon && <Icon icon={item.icon} size={16} aria-hidden="true" />}
                      {item.label && <span>{item.label}:</span>}
                      <span>{item.value}</span>
                    </span>
                  </React.Fragment>
                ))}
              </div>
            )}
            {badge && (
              <Badge
                variant={badge.variant || "ontrack"}
                shape={badge.shape || "badge"}
                className="px-[6px] py-[3px] text-xs leading-tight font-semibold tracking-normal uppercase shrink-0"
              >
                {badge.label}
              </Badge>
            )}
          </div>

          {/* Footer */}
          {footer && (
            <div className="relative mt-auto flex w-full items-center justify-between">
              <div className="text-xs leading-tight font-normal tracking-normal text-icon truncate flex-1">
                {footer.label || "—"}
              </div>
              {footer.actions?.details && (
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={footer.actions.details.ariaLabel || "Open details"}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-subtle text-icon hover:bg-neutral-subtle/80 hover:text-foreground shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    footer.actions?.details?.onClick?.();
                  }}
                >
                  <Icon
                    icon={footer.actions.details.icon || "chevron_right"}
                    size={14}
                    aria-hidden="true"
                  />
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);

CandidateCard.displayName = "CandidateCard";
