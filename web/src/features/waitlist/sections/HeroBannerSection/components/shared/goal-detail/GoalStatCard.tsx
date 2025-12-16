/**
 * @deprecated Use StatsCard from @/components/ui instead.
 * This file re-exports the unified component for backward compatibility.
 */
import { StatsCard } from "@/components/ui";
import type { GoalStatCardProps } from "./types";

/**
 * Wrapper around the unified StatsCard component.
 * Maintains backward compatibility with existing usage.
 */
export function GoalStatCard({
  title,
  value,
  icon,
  subtitle,
  valueSubtitle,
  growth,
  progress,
  progressColor = "#00A7F8",
}: GoalStatCardProps) {
  return (
    <StatsCard
      title={title}
      value={value}
      icon={icon}
      subtitle={valueSubtitle || subtitle}
      growth={growth}
      progress={progress}
      progressColor={progressColor}
    />
  );
}
