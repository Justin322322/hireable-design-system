/**
 * @deprecated Use StatsCard from @/components/ui instead.
 * This file re-exports the unified component for backward compatibility.
 */
import { StatsCard as BaseStatsCard } from "@/components/ui";
import React from "react";
import type { StatCard } from "../../types";

interface StatsCardProps {
  stat: StatCard;
  index?: number;
  variants?: unknown;
}

/**
 * Wrapper around the unified StatsCard component.
 * Maintains backward compatibility with existing usage.
 */
const StatsCardComponent: React.FC<StatsCardProps> = ({ stat }) => {
  return (
    <div style={{ flex: 1 }}>
      <BaseStatsCard
        title={stat.title}
        value={stat.value}
        icon={stat.icon}
        description={stat.description}
      />
    </div>
  );
};

export const StatsCard = React.memo(StatsCardComponent);
StatsCard.displayName = "StatsCard";
