/**
 * @deprecated Use StatsCard from @/components/ui instead.
 * This file re-exports the unified component for backward compatibility.
 */
import { StatsCard as BaseStatsCard } from "@/components/ui";
import { STATS_DATA } from "./constants";

interface StatsCardProps {
  stat: (typeof STATS_DATA)[0];
  delay?: number;
}

/**
 * Wrapper around the unified StatsCard component.
 * Maintains backward compatibility with existing usage.
 */
export const StatsCard: React.FC<StatsCardProps> = ({ stat }) => (
  <div className="min-h-px min-w-px flex-1">
    <BaseStatsCard
      title={stat.title}
      value={stat.value}
      icon={stat.icon}
      subtitle={stat.subtitle}
      pills={stat.pills}
      progress={stat.progress}
      progressColor={stat.progressColor}
    />
  </div>
);
