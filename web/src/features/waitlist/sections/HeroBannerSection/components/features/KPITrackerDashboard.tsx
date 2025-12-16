import { Card, CardContent, PulsingButton } from "@/components/ui";
import { ChevronDown, Plus, Search } from "lucide-react";
import React, { useState } from "react";

import { GoalDetailView } from "../shared/GoalDetailView";
import { ScrollContainer } from "../shared/ScrollContainer";

// ====================
// Constants and Configuration
// ====================

// Typography classes matching Figma specs
const TYPOGRAPHY = {
  pageTitle:
    "font-['DM_Sans',Helvetica] text-[15.446px] leading-[150%] font-semibold tracking-[0.129px] text-neutral-900",
  tabActive:
    "font-['Nunito_Sans',Helvetica] text-[9.01px] leading-[120%] font-semibold tracking-[0.129px] text-neutral-900",
  tabInactive:
    "font-['Nunito_Sans',Helvetica] text-[9.01px] leading-[120%] font-semibold tracking-[0.129px] text-neutral-700",
  cardTitle:
    "font-['Inter',Helvetica] text-[10.297px] leading-[150%] font-semibold tracking-[0.129px] text-neutral-900",
  cardValue:
    "font-['DM_Sans',Helvetica] text-[20.595px] leading-[120%] font-semibold text-neutral-900",
  badge:
    "font-['Inter',Helvetica] text-[7.723px] leading-[120%] font-normal tracking-[0.129px] text-neutral-700",
  growth:
    "font-['Inter',Helvetica] text-[6.436px] leading-[120%] font-normal tracking-[0.129px] text-[var(--color-success)]",
  statusText:
    "font-['Inter',Helvetica] text-[6.436px] leading-[120%] font-normal tracking-[0.129px] text-neutral-700",
  dateText:
    "font-['Inter',Helvetica] text-[6.436px] leading-[120%] font-normal tracking-[0.107px] text-neutral-700",
  searchPlaceholder:
    "font-['Inter',Helvetica] text-[10.297px] leading-[150%] font-normal tracking-[0.129px] text-[rgba(60,60,67,0.6)]",
  dropdownText:
    "font-['Inter',Helvetica] text-[9.01px] leading-[120%] font-normal tracking-[0.129px] text-neutral-900",
  ctaButton:
    "font-['Inter',Helvetica] text-[9.01px] leading-[96%] font-semibold text-white",
};

// Goal Card Data - matching the exact image provided
const GOALS_DATA = [
  {
    id: 1,
    title: "Grow Yearly Revenue",
    type: "Manual",
    value: "$3,020,000",
    progress: 85.2,
    progressColor: "#00A7F8",
    growth: "+10%",
    date: "FY2025",
  },
  {
    id: 2,
    title: "Increase Monthly Closed Deals",
    type: "Manual",
    value: "26",
    progress: 86.1,
    progressColor: "#00A7F8",
    growth: "+18%",
    date: "FY2025",
  },
  {
    id: 3,
    title: "Improve Lead-to-Client Conversion Rate",
    type: "Automatic",
    value: "78%",
    progress: 77.2,
    progressColor: "#00A7F8",
    status: "1 of 3 key results completed",
    date: "FY2025",
  },
  {
    id: 4,
    title: "Shorten Sales Cycle Duration",
    type: "Automatic",
    value: "85%",
    progress: 84.1,
    progressColor: "#00A7F8",
    status: "1 of 3 key results completed",
    date: "FY2025",
  },
  {
    id: 5,
    title: "Increase Qualified Sales Calls Booked",
    type: "Automatic",
    value: "92%",
    progress: 91,
    progressColor: "#00A7F8",
    status: "2 of 3 key results completed",
    date: "FY2025",
  },
  {
    id: 6,
    title: "Improve Lead Quality (Marketing → Sales Acceptance)",
    type: "Automatic",
    value: "83%",
    progress: 83,
    progressColor: "#00A7F8",
    status: "1 of 3 key results completed",
    date: "FY2025",
  },
  {
    id: 7,
    title: "Increase Average Deal Size",
    type: "Manual",
    value: "$4,800",
    progress: 79.2,
    progressColor: "#00A7F8",
    growth: "+12%",
    date: "FY2025",
  },
  {
    id: 8,
    title: "Grow Active Pipeline Value",
    type: "Manual",
    value: "$820,000",
    progress: 57.4,
    progressColor: "#00A7F8",
    growth: "+17%",
    date: "FY2025",
  },
  {
    id: 9,
    title: "Increase Monthly Closed Deals (Q4)",
    type: "Manual",
    value: "26",
    progress: 64.4,
    progressColor: "#FF8112",
    growth: "+18%",
    date: "FY2025",
  },
  {
    id: 10,
    title: "Increase Outbound Sales Activities",
    type: "Manual",
    value: "320",
    progress: 63.4,
    progressColor: "#FF8112",
    growth: "+14%",
    date: "FY2025",
  },
];

// ====================
// Components
// ====================

// CTA Button with icon
const CTAButton: React.FC = () => (
  <button className="bg-client flex h-[23.17px] cursor-pointer flex-row items-center justify-center gap-[2.57px] rounded-[5.149px] px-[7.723px] py-[5.149px]">
    <Plus className="size-[10.3px] text-white" strokeWidth={2} />
    <span className={TYPOGRAPHY.ctaButton}>Add goal</span>
  </button>
);

// Tab component
const Tab: React.FC<{ label: string; isActive: boolean }> = ({
  label,
  isActive,
}) => (
  <div
    className={`flex h-[23.17px] flex-col items-center justify-center gap-[6.44px] px-0 py-[5.149px] ${
      isActive ? "border-client border-b-[1.287px]" : ""
    }`}
  >
    <div className="flex flex-row items-center gap-[2.57px] rounded-[2.574px] px-0 py-0">
      <span
        className={isActive ? TYPOGRAPHY.tabActive : TYPOGRAPHY.tabInactive}
      >
        {label}
      </span>
    </div>
  </div>
);

// Search bar component
const SearchBar: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`flex h-[28.32px] flex-row items-center gap-[2.57px] rounded-[5.149px] border-[0.644px] border-neutral-300 bg-white px-[7.723px] ${
      className ?? "w-[248.66px]"
    }`}
  >
    <Search className="size-[15.45px] text-neutral-900" strokeWidth={1.5} />
    <span className={TYPOGRAPHY.searchPlaceholder}>Search</span>
  </div>
);

// Dropdown component
const Dropdown: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex h-[28.32px] w-[121.75px] flex-row items-center justify-between gap-[5.15px] rounded-[5.149px] border-[0.644px] border-neutral-300 bg-white px-[10.297px] py-[7.723px]">
    <span className={TYPOGRAPHY.dropdownText}>{label}</span>
    <ChevronDown
      className="size-[15.45px] text-neutral-900"
      strokeWidth={1.5}
    />
  </div>
);

// Goal Card component - memoized to prevent re-renders
const GoalCardComponent: React.FC<{
  goal: (typeof GOALS_DATA)[0];
  showPulsingButton?: boolean;
  onPulsingButtonClick?: () => void;
}> = ({ goal, showPulsingButton = false, onPulsingButtonClick }) => (
  <div>
    <Card
      className={`relative flex h-[119.71px] w-[251px] flex-col items-start rounded-[5.149px] border-[0.644px] border-neutral-300 bg-white p-[10.297px] transition-colors duration-200 ${
        onPulsingButtonClick ? "hover:bg-neutral-150 cursor-pointer" : ""
      }`}
      onClick={onPulsingButtonClick}
    >
      <CardContent className="flex h-full w-full flex-col justify-between p-0">
        {/* Header Row */}
        <div className="flex w-full flex-row items-start justify-between">
          {/* Title */}
          <div className="flex max-w-[192.11px] flex-1 items-center">
            <span className={`${TYPOGRAPHY.cardTitle} line-clamp-2`}>
              {goal.title}
            </span>
          </div>
          {/* Type Badge */}
          <div className="flex h-[14.15px] flex-col items-center justify-center rounded-[64.359px] border-[0.322px] border-neutral-300/40 bg-neutral-300/10 px-[5.149px] py-[2.574px]">
            <span className={TYPOGRAPHY.badge}>{goal.type}</span>
          </div>
        </div>

        {/* Progress Section */}
        <div className="flex w-full flex-col items-start gap-[5.15px]">
          {/* Value */}
          <div className="flex flex-row items-center gap-[5.62px]">
            <span className={TYPOGRAPHY.cardValue}>{goal.value}</span>
            {showPulsingButton && (
              <div className="relative h-0 w-[30px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <PulsingButton
                    onClick={(e) => {
                      e.stopPropagation();
                      onPulsingButtonClick?.();
                    }}
                    color="#00A7F8"
                    ariaLabel="View goal details"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="bg-neutral-150 flex h-[5.15px] w-full flex-col items-start justify-center rounded-[64.359px]">
            <div
              className="h-[5.15px] rounded-[64.359px]"
              style={{
                width: `${goal.progress}%`,
                backgroundColor: goal.progressColor,
              }}
            />
          </div>

          {/* Status Row */}
          <div className="flex w-full flex-row items-center justify-between">
            {/* Status or Growth */}
            <div className="flex flex-row items-center gap-[2.57px]">
              {goal.growth && (
                <>
                  <span className={TYPOGRAPHY.growth}>{goal.growth}</span>
                  <span className={TYPOGRAPHY.statusText}>
                    from last update
                  </span>
                </>
              )}
              {goal.status && (
                <span className={TYPOGRAPHY.statusText}>{goal.status}</span>
              )}
            </div>
            {/* Date */}
            <div className="flex flex-row items-center justify-center gap-[5.36px] p-[4.291px]">
              <span className={TYPOGRAPHY.dateText}>{goal.date}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const GoalCard = React.memo(GoalCardComponent);

// ====================
// Main Component
// ====================

const KPITrackerDashboardComponent: React.FC = () => {
  const [showGoalDetail, setShowGoalDetail] = useState(false);

  // Show goal detail view when pulsing button is clicked
  if (showGoalDetail) {
    return (
      <ScrollContainer className="relative mb-[-349.80px] h-[657px] w-full rounded-[5.24px] bg-white">
        <GoalDetailView
          goalTitle="Grow Yearly Revenue"
          goalType="Manual"
          description="Drive consistent revenue growth by acquiring new clients and expanding existing retainers to reach the annual target of $4M."
          currentValue={3020000}
          targetValue={4000000}
          progressPercentage={76}
          daysRemaining={33}
          trialEndDate="FY2025"
          talentName="Revenue Team"
          formatAsCurrency={true}
          showBackToGoals={true}
          chartLabel="Progress"
        />
      </ScrollContainer>
    );
  }

  return (
    <div className="pointer-events-none relative mb-[-349.80px] flex h-[632px] w-[1077px] flex-col items-start overflow-hidden rounded-[5.24px] bg-white px-[20.595px] py-[15.446px]">
      {/* Container */}
      <div className="flex h-[601.11px] w-[1035.81px] flex-col items-start gap-[15.45px]">
        {/* Header Section */}
        <div className="flex w-full flex-col items-start">
          {/* Top Block - Title and CTA */}
          <div className="flex w-full flex-row items-start justify-between">
            {/* Page Title */}
            <div className="flex flex-col items-start justify-center">
              <h3 className={TYPOGRAPHY.pageTitle}>Goals & KPIs</h3>
            </div>
            {/* CTA Button */}
            <CTAButton />
          </div>

          {/* Toolbar - Tabs */}
          <div className="mt-[5.149px] flex w-full flex-row items-start border-b-[0.644px] border-neutral-300 pt-[5.149px]">
            <div className="flex flex-row items-center gap-[15.45px]">
              <Tab label="Dashboard" isActive={true} />
              <Tab label="Archived" isActive={false} />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-1 flex-col items-start gap-[10.3px]">
          {/* Search and Filter Row */}
          <div className="flex w-full flex-row items-center justify-between gap-[10px]">
            <SearchBar className="w-[251px]" />
            <div className="flex flex-row items-center gap-[5.15px]">
              <Dropdown label="All Status" />
              <Dropdown label="All Progress" />
            </div>
          </div>

          {/* Goal Cards Grid */}
          <div className="flex flex-1 flex-row flex-wrap content-start items-start gap-[10.3px]">
            {GOALS_DATA.map((goal) => (
              <GoalCard
                key={goal.id}
                goal={goal}
                showPulsingButton={goal.title === "Grow Yearly Revenue"}
                onPulsingButtonClick={
                  goal.title === "Grow Yearly Revenue"
                    ? () => setShowGoalDetail(true)
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const KPITrackerDashboard = React.memo(KPITrackerDashboardComponent);
KPITrackerDashboard.displayName = "KPITrackerDashboard";
