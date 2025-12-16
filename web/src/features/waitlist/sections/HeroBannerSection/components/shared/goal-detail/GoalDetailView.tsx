"use client";

import { Card, CardContent } from "@/components/ui";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { ActivitySection } from "./ActivitySection";
import { CommentsSection } from "./CommentsSection";
import { GoalStatCard } from "./GoalStatCard";
import { mockActivities, mockComments } from "./constants";
import type { Activity, GoalDetailViewProps } from "./types";

// Lazy load ProgressChart to defer recharts bundle
const ProgressChart = dynamic(
  () => import("./ProgressChart").then((mod) => mod.ProgressChart),
  {
    loading: () => (
      <div className="h-[200.76px] w-full animate-pulse rounded bg-neutral-100" />
    ),
    ssr: false,
  }
);

export function GoalDetailView({
  goalTitle = "Close New Deals",
  goalType = "Manual",
  description = "This goal measures the talent's ability to convert prospects into paying customers by closing new deals within the trial period.",
  currentValue = 2,
  targetValue = 5,
  progressPercentage = 40,
  daysRemaining = 16,
  trialEndDate = "Nov 30, 2025",
  talentName = "Mikaela Santos",
  formatAsCurrency = false,
  showBackToGoals = false,
  chartData,
  chartLabel = "Progress",
  chartYAxisLabel,
  chartYMax,
  chartYTicks,
}: GoalDetailViewProps) {
  const daysProgress = ((30 - daysRemaining) / 30) * 100;

  const formatValue = (value: number) => {
    if (formatAsCurrency) {
      return `${value.toLocaleString()}`;
    }
    return value.toString();
  };

  const activities: Activity[] = formatAsCurrency
    ? [
        {
          id: "1",
          type: "progress",
          message: `Current progress updated to ${formatValue(currentValue)}.`,
          timestamp: "Today at 9:30 AM",
        },
        {
          id: "2",
          type: "update",
          message:
            'Progress updated for "Close 5 major deals" - 2 of 5 completed',
          timestamp: "Today at 9:30 AM",
        },
        {
          id: "3",
          type: "update",
          message:
            'Progress updated for "Close 5 major deals" - 2 of 5 completed',
          timestamp: "Today at 9:30 AM",
        },
      ]
    : mockActivities;

  return (
    <div className="flex w-full flex-col items-start gap-[15.44px] bg-white px-[25.74px] pt-[15.44px] pb-[15.44px]">
      {/* Breadcrumbs or Back to Goals */}
      {showBackToGoals ? (
        <button className="flex items-center gap-[2.57px] text-neutral-700">
          <span className="font-sans text-[7.72px] leading-[120%] font-normal tracking-[0.11px]">
            ← back to goals
          </span>
        </button>
      ) : (
        <div className="flex h-[18px] items-center gap-[2.57px]">
          <div className="flex items-center justify-center py-[2.57px]">
            <span className="font-sans text-[6.74px] leading-[120%] font-normal tracking-[0.11px] text-neutral-700">
              Trials
            </span>
          </div>
          <ChevronRight className="size-[6.86px] text-neutral-700" />
          <div className="flex items-center justify-center py-[2.57px]">
            <span className="font-sans text-[6.74px] leading-[120%] font-normal tracking-[0.11px] text-neutral-700">
              {talentName}
            </span>
          </div>
          <ChevronRight className="size-[6.86px] text-neutral-700" />
          <div className="flex items-center justify-center py-[2.57px]">
            <span className="font-sans text-[6.74px] leading-[120%] font-normal tracking-[0.11px] text-neutral-700">
              {goalTitle}
            </span>
          </div>
        </div>
      )}

      {/* Goal Header */}
      <div className="flex flex-col gap-[5.15px]">
        <div className="flex items-center gap-[5.15px]">
          <h2 className="font-dm-sans text-[12.87px] leading-[120%] font-semibold text-neutral-900">
            {goalTitle}
          </h2>
          <span className="inline-flex items-center justify-center rounded-full border-[0.32px] border-[rgba(195,195,195,0.4)] bg-[rgba(195,195,195,0.08)] px-[5.15px] py-[2.57px]">
            <span className="font-sans text-[7.72px] leading-[120%] font-normal tracking-[0.2px] text-neutral-700">
              {goalType}
            </span>
          </span>
        </div>
        <p className="font-sans text-[7.72px] leading-[120%] tracking-[0.13px] text-neutral-900">
          {description}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex w-full items-center gap-[10.3px]">
        <GoalStatCard
          title="Current Value"
          value={formatValue(currentValue)}
          icon="/icons/icon-kpi-tracker.svg"
          growth="+10%"
          subtitle="from last update"
        />
        <GoalStatCard
          title="Target Value"
          value={formatValue(targetValue)}
          icon="/icons/icon-goals-kpis.svg"
          subtitle="Goal to reach"
        />
        <GoalStatCard
          title="Overall Progress"
          value={`${progressPercentage}%`}
          icon="/icons/icon-completion-rate.svg"
          valueSubtitle="completed toward target"
          progress={progressPercentage}
          progressColor="#00A7F8"
        />
        <GoalStatCard
          title="Days Remaining"
          value={daysRemaining.toString()}
          icon="/icons/icon-calendar.svg"
          valueSubtitle={`Trial ends on ${trialEndDate}`}
          progress={daysProgress}
          progressColor="#C3C3C3"
        />
      </div>

      {/* Progress Chart */}
      <Card className="flex h-[275.53px] w-full flex-col items-start gap-[10.3px] self-stretch rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white p-[10.3px]">
        <CardContent className="flex w-full flex-col gap-[10.3px] p-0">
          <div className="flex h-[13px] items-center gap-[6.43px]">
            <span className="font-sans text-[8.99px] leading-[150%] font-semibold tracking-[0.11px] text-neutral-900">
              Progress Over Time
            </span>
          </div>
          <ProgressChart
            data={chartData}
            formatAsCurrency={formatAsCurrency}
            chartLabel={chartLabel}
            yAxisLabel={chartYAxisLabel}
            yMax={chartYMax}
            yTicks={chartYTicks}
          />
        </CardContent>
      </Card>

      {/* Comments & Activity */}
      <div className="flex w-full items-stretch gap-[10.3px]">
        <CommentsSection comments={mockComments} />
        <ActivitySection activities={activities} />
      </div>
    </div>
  );
}

export default GoalDetailView;
