import * as React from "react";
import { Card, CardContent, Button, Icon, Badge, type IconName } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * ProfileCard - Display user/candidate profile information
 * 
 * @example
 * ```tsx
 * <ProfileCard
 *   name="John Doe"
 *   role="Senior Developer"
 *   metadata={[
 *     { value: "$120k - $150k" },
 *     { value: "5+ years" }
 *   ]}
 *   matchPercentage={80}
 *   footer={{ label: "Last active 2 hours ago", action: { onClick: () => {} } }}
 * />
 * ```
 */

export type ProfileCardState = "enabled" | "hover" | "pressed";
export type ProfileCardType = "active" | "inactive";

export interface ProfileCardMetadata {
  label?: string;
  value: string;
  icon?: IconName;
}

export interface ProfileCardFooter {
  label?: string;
  action?: {
    label?: string;
    icon?: IconName;
    onClick?: () => void;
    ariaLabel?: string;
  };
}

export interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Profile name */
  name: string;
  /** Profile role/title */
  role: string;
  /** Avatar image URL or custom React node */
  avatar?: string | React.ReactNode;
  /** Array of metadata items (salary, experience, etc.) */
  metadata?: ProfileCardMetadata[];
  /** Match percentage (0-100), shows badge when provided */
  matchPercentage?: number;
  /** Footer configuration */
  footer?: ProfileCardFooter;
  /** Card type - affects footer styling */
  type?: ProfileCardType;
  /** Visual state for demo purposes */
  state?: ProfileCardState;
  /** Avatar size in pixels */
  avatarSize?: number;
  /** Show hover effect (default: true) */
  hoverable?: boolean;
}

export const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  (
    {
      name,
      role,
      avatar,
      metadata = [],
      matchPercentage,
      footer,
      type = "active",
      state = "enabled",
      className,
      avatarSize = 56,
      hoverable = true,
      ...props
    },
    ref
  ) => {
    // Normalize and validate matchPercentage
    let normalizedMatchPercentage: number | undefined;
    if (matchPercentage !== undefined && matchPercentage !== null) {
      if (!Number.isFinite(matchPercentage)) {
        console.warn(`ProfileCard: matchPercentage must be a finite number, received: ${matchPercentage}`);
        normalizedMatchPercentage = undefined;
      } else {
        const rounded = Math.round(matchPercentage);
        const clamped = Math.max(0, Math.min(100, rounded));
        
        if (matchPercentage !== clamped) {
          console.warn(`ProfileCard: matchPercentage should be between 0-100, received: ${matchPercentage}, normalized to: ${clamped}`);
        }
        
        normalizedMatchPercentage = clamped;
      }
    }

    const isActive = type === "active";
    const showMatchBadge = normalizedMatchPercentage !== undefined && normalizedMatchPercentage > 0;
    const isClickable = !!props.onClick;

    return (
      <Card
        ref={ref}
        className={cn(
          "w-full max-w-sm shadow-none",
          isClickable && "cursor-pointer",
          hoverable && "transition-colors hover:border-foreground active:border-client",
          state === "hover" && "border-foreground",
          state === "pressed" && "border-client",
          className
        )}
        {...props}
      >
        <CardContent className="flex flex-col items-start gap-2.5 p-4">
          {/* Header with avatar and name */}
          <div className="flex flex-row items-center gap-2.5 w-full">
            {/* Avatar */}
            <div
              className="shrink-0 rounded-full bg-muted flex items-center justify-center overflow-hidden"
              style={{ width: avatarSize, height: avatarSize }}
            >
              {typeof avatar === "string" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={avatar} alt={name} className="w-full h-full object-cover" />
              ) : avatar ? (
                avatar
              ) : (
                <span className="text-muted-foreground font-medium">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                </span>
              )}
            </div>

            {/* Name and role */}
            <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
              <p className="font-semibold text-sm text-foreground leading-tight truncate w-full">
                {name}
              </p>
              <p className="font-normal text-xs text-foreground leading-tight truncate w-full">
                {role}
              </p>
            </div>
          </div>

          {/* Metadata with optional match badge */}
          {(metadata.length > 0 || showMatchBadge) && (
            <div className="flex flex-row items-center gap-6 w-full text-xs text-foreground flex-wrap">
              {metadata.map((item, index) => (
                <span key={index} className="flex items-center gap-1">
                  {item.icon && <Icon icon={item.icon} size={14} aria-hidden="true" />}
                  {item.label && <span className="text-muted-foreground">{item.label}:</span>}
                  <span>{item.value}</span>
                </span>
              ))}
              {showMatchBadge && (
                <Badge
                  variant="complete"
                  size="sm"
                  shape="badge"
                  className="h-5 px-2 py-1 text-xs uppercase"
                >
                  {normalizedMatchPercentage}% matched
                </Badge>
              )}
            </div>
          )}

          {/* Footer */}
          {footer && (
            <div className="flex flex-row items-center justify-between gap-4 w-full">
              <span
                className={cn(
                  "text-xs truncate flex-1",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {footer.label || "—"}
              </span>
              {footer.action && (
                <Button
                  size="sm"
                  className={cn(
                    "rounded-full w-6 h-6 p-0 shrink-0",
                    isActive
                      ? "bg-client hover:bg-client-active"
                      : "bg-muted hover:bg-muted"
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    footer.action?.onClick?.();
                  }}
                  aria-label={footer.action.ariaLabel || footer.action.label || "Action"}
                  disabled={!isActive}
                >
                  <Icon
                    icon={footer.action.icon || "chevron_right"}
                    size={16}
                    className="text-white"
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

ProfileCard.displayName = "ProfileCard";
