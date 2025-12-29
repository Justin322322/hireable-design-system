import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * UserRoleCard - Large selection card with image for onboarding/role selection
 * 
 * @example
 * ```tsx
 * <UserRoleCard
 *   title="I'm a Remote Talent"
 *   description="Find global opportunities and work with great teams."
 *   image="/images/talent-select.svg"
 *   variant="enabled"
 *   onClick={() => selectRole('talent')}
 * />
 * ```
 */

export type UserRoleCardVariant = "enabled" | "hover" | "pressed" | "selected";

export interface UserRoleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Image URL or path */
  image: string;
  /** Visual state variant */
  variant?: UserRoleCardVariant;
  /** Click handler */
  onClick?: () => void;
  /** Custom class name */
  className?: string;
  /** Card height */
  height?: number;
  /** Title font family (for role-specific styling) */
  titleFont?: "primary" | "secondary";
  /** Selected state (controlled) */
  selected?: boolean;
}

export const UserRoleCard = React.forwardRef<HTMLDivElement, UserRoleCardProps>(
  (
    {
      title,
      description,
      image,
      variant = "enabled",
      onClick,
      className,
      height = 192,
      titleFont = "primary",
      selected = false,
      ...props
    },
    ref
  ) => {
    const [internalVariant, setInternalVariant] = React.useState<UserRoleCardVariant>(variant);

    React.useEffect(() => {
      if (selected) {
        setInternalVariant("selected");
      } else {
        setInternalVariant(variant);
      }
    }, [variant, selected]);

    const getVariantStyles = () => {
      const baseStyles = "border transition-all cursor-pointer";
      
      switch (internalVariant) {
        case "hover":
          return cn(
            baseStyles,
            "border-button-tertiary-border bg-button-tertiary-hover"
          );
        case "pressed":
        case "selected":
          return cn(
            baseStyles,
            "border-border-focused bg-button-secondary-default"
          );
        case "enabled":
        default:
          return cn(
            baseStyles,
            "border-button-tertiary-border bg-background"
          );
      }
    };

    const getTitleStyles = () => {
      const baseStyles = "text-xl leading-[150%] tracking-[0.4px] text-foreground";
      
      if (titleFont === "secondary") {
        return cn(baseStyles, "font-secondary font-semibold");
      }
      return cn(baseStyles, "font-nunito font-bold");
    };

    const getDescriptionStyles = () => {
      const baseStyles = "text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground";
      
      if (titleFont === "secondary") {
        return cn(baseStyles, "font-secondary");
      }
      return cn(baseStyles, "font-nunito");
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full max-w-[720px] items-center gap-4 rounded-2xl p-2",
          getVariantStyles(),
          className
        )}
        style={{ height }}
        onClick={onClick}
        onMouseEnter={() => !selected && setInternalVariant("hover")}
        onMouseLeave={() => !selected && setInternalVariant(variant)}
        onMouseDown={() => !selected && setInternalVariant("pressed")}
        onMouseUp={() => !selected && setInternalVariant("hover")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick?.();
          }
        }}
        {...props}
      >
        <div className="flex flex-1 items-center gap-2 md:gap-4 rounded-lg bg-background py-0 pl-4 pr-4 md:pl-6 md:pr-10 h-full">
          <div className="flex flex-1 flex-col gap-1 md:gap-3">
            <h3 className={cn(getTitleStyles(), "text-lg md:text-xl")}>{title}</h3>
            <p className={cn(getDescriptionStyles(), "text-xs md:text-sm")}>{description}</p>
          </div>
          <div className="shrink-0 flex items-center justify-center">
            <div className="relative w-20 h-20 md:w-[140px] md:h-[140px]">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 80px, 140px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

UserRoleCard.displayName = "UserRoleCard";
