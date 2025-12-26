import * as React from "react";
import { Card, CardContent, Button, Icon } from "@/components/ui";
import type { IconName } from "@/components/ui/icon";
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
 *     { label: "Salary", value: "$120k - $150k" },
 *     { label: "Experience", value: "5+ years" }
 *   ]}
 *   footer={{ label: "Last active 2 hours ago", action: { label: "View", onClick: () => {} } }}
 * />
 * ```
 */

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
  /** Avatar image URL (optional) */
  avatar?: string | React.ReactNode;
  /** Array of metadata items (salary, experience, etc.) */
  metadata?: ProfileCardMetadata[];
  /** Footer configuration */
  footer?: ProfileCardFooter;
  /** Click handler for the entire card */
  onClick?: () => void;
  /** Custom class name */
  className?: string;
  /** Avatar size in pixels */
  avatarSize?: number;
  /** Show hover effect */
  hoverable?: boolean;
}

export const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  (
    {
      name,
      role,
      avatar,
      metadata = [],
      footer,
      onClick,
      className,
      avatarSize = 56,
      hoverable = true,
      ...props
    },
    ref
  ) => {
    const hasAction = footer?.action?.onClick;
    const isClickable = onClick || hasAction;

    return (
      <Card
        ref={ref}
        className={cn(
          "w-full max-w-sm",
          isClickable && "cursor-pointer",
          hoverable && "transition-colors hover:bg-muted hover:border-border",
          className
        )}
        onClick={onClick}
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
              <p className="font-semibold text-sm text-foreground leading-[120%] truncate w-full">
                {name}
              </p>
              <p className="font-normal text-xs text-foreground leading-[120%] truncate w-full">
                {role}
              </p>
            </div>
          </div>

          {/* Metadata */}
          {metadata.length > 0 && (
            <div className="flex flex-row items-center gap-6 w-full text-xs text-foreground flex-wrap">
              {metadata.map((item, index) => (
                <span key={index} className="flex items-center gap-1">
                  {item.icon && <Icon icon={item.icon} size={14} aria-hidden="true" />}
                  {item.label && <span className="text-muted-foreground">{item.label}:</span>}
                  <span>{item.value}</span>
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          {footer && (
            <div className="flex flex-row items-center justify-between gap-4 w-full">
              <span className="text-xs text-foreground truncate flex-1">
                {footer.label || "—"}
              </span>
              {footer.action && (
                <Button
                  size="sm"
                  className="rounded-full w-6 h-6 p-0 bg-client hover:bg-client-active shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    footer.action?.onClick?.();
                  }}
                  aria-label={footer.action.ariaLabel || footer.action.label || "Action"}
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
