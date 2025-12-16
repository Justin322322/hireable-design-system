import { cn } from "@/lib/utils";
import * as React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  innerClassName?: string;
}

const GlassCard = React.memo(
  React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, innerClassName, children, ...props }, ref) => {
      return (
        <div ref={ref} className={cn("glass-card-outer", className)} {...props}>
          <div className="glass-card-line-top" />
          <div className="glass-card-line-bottom" />
          <div className={cn("glass-card-inner", innerClassName)}>
            <div className="glass-card-inner-line-top" />
            <div className="glass-card-inner-line-bottom" />
            {children}
          </div>
        </div>
      );
    }
  )
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
