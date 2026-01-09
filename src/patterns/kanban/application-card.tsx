"use client";

import * as React from "react";
import { Card, CardContent, Badge, Button, Icon, type IconName } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * ApplicationCard - Job application card for kanban boards
 * 
 * @example
 * ```tsx
 * <ApplicationCard
 *   company="TechCorp"
 *   position="Frontend Developer"
 *   metadata={[
 *     { value: "$120k - $150k" },
 *     { value: "5+ years" }
 *   ]}
 *   badge={{ label: "FULL-TIME", variant: "default" }}
 *   timestamp="2 hours ago"
 *   footer={{ label: "Activity Title", action: { onClick: () => {} } }}
 * />
 * ```
 */

export interface ApplicationCardMetadata {
  label?: string;
  value: string;
  icon?: IconName;
}

export interface ApplicationCardBadge {
  label: string;
  variant?: "default" | "ontrack" | "atrisk" | "offtrack" | "complete";
  matched?: boolean;
}

export interface ApplicationCardFooter {
  label?: string;
  action?: {
    icon?: IconName;
    onClick?: () => void;
    ariaLabel?: string;
  };
}

export interface ApplicationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Company name */
  company: string;
  /** Job position */
  position: string;
  /** Array of metadata (salary, experience, etc.) */
  metadata?: ApplicationCardMetadata[];
  /** Badge configuration */
  badge?: ApplicationCardBadge;
  /** Timestamp text */
  timestamp?: string;
  /** Footer configuration */
  footer?: ApplicationCardFooter;
  /** Click handler */
  onClick?: () => void;
  /** Custom class name */
  className?: string;
}

export const ApplicationCard = React.forwardRef<HTMLDivElement, ApplicationCardProps>(
  (
    {
      company,
      position,
      metadata = [],
      badge,
      timestamp,
      footer,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const isClickable = !!onClick;

    return (
      <Card
        ref={ref}
        className={cn(
          "w-full max-w-[300px] rounded-lg border border-button-tertiary-border bg-background",
          isClickable && "cursor-pointer hover:bg-muted transition-colors",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <CardContent className="flex flex-col items-start gap-2 p-3">
          {/* Header with company and timestamp */}
          <div className="flex w-full items-center justify-between">
            <p className="text-xs leading-tight font-normal tracking-normal text-muted-foreground truncate flex-1">
              {company}
            </p>
            {timestamp && (
              <p className="text-xs leading-tight font-normal tracking-normal text-muted-foreground shrink-0 ml-2">
                {timestamp}
              </p>
            )}
          </div>

          {/* Position */}
          <p className="w-full truncate text-base leading-normal font-semibold tracking-normal text-foreground">
            {position}
          </p>

          {/* Metadata */}
          {metadata.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs leading-tight font-normal tracking-normal text-muted-foreground flex-wrap">
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

          {/* Badge */}
          {badge && (
            <Badge
              variant={badge.matched ? "ontrack" : badge.variant || "default"}
              className="px-2 py-1 text-xs leading-tight font-normal tracking-normal"
            >
              {badge.label}
            </Badge>
          )}

          {/* Footer */}
          {footer && (
            <div className="flex w-full items-center justify-between py-1">
              <p className="text-xs leading-tight font-normal tracking-normal text-foreground truncate flex-1">
                {footer.label || "—"}
              </p>
              {footer.action && (
                <Button
                  size="icon"
                  className="bg-client hover:bg-client-active flex h-5 w-5 items-center justify-center rounded-full p-0 shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    footer.action?.onClick?.();
                  }}
                  aria-label={footer.action.ariaLabel || "View details"}
                >
                  <Icon
                    icon={footer.action.icon || "chevron_right"}
                    size={14}
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

ApplicationCard.displayName = "ApplicationCard";
