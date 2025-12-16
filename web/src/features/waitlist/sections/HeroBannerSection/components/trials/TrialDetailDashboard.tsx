import React, { useState } from "react";
import { GoalDetailView } from "../shared/GoalDetailView";
import { ScrollContainer } from "../shared/ScrollContainer";
import {
  Breadcrumbs,
  FilterDropdown,
  GoalCard,
  GOALS_DATA,
  JobDetailsCard,
  ProfileCard,
  SearchInput,
  STATS_DATA,
  StatsCard,
  SuccessAdvisorButton,
  TYPOGRAPHY,
} from "./trial-detail";

export const TrialDetailDashboard: React.FC = () => {
  const [showGoalDetail, setShowGoalDetail] = useState(false);

  // Show goal detail view when pulsing button is clicked
  if (showGoalDetail) {
    return (
      <ScrollContainer className="relative mb-[-349.80px] h-[601px] w-full rounded-[5.24px] bg-white">
        <GoalDetailView />
      </ScrollContainer>
    );
  }

  return (
    <div className="pointer-events-none relative mb-[-349.80px] flex w-full flex-col items-start gap-[15.44px] overflow-hidden rounded-[5.24px] bg-white px-[25.74px] pt-[15.44px] pb-[15.44px]">
      {/* Container */}
      <div className="flex h-[601px] w-full flex-col items-start gap-[15.44px]">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Main container */}
        <div className="flex min-h-px w-full min-w-px flex-1 flex-col items-start gap-[20.59px]">
          {/* Profile and Job details cards */}
          <div className="flex w-full items-start gap-[10.3px]">
            <ProfileCard />
            <JobDetailsCard />
          </div>

          {/* Stats row */}
          <div className="flex w-full items-center gap-[10.3px]">
            {STATS_DATA.map((stat, index) => (
              <StatsCard key={stat.id} stat={stat} delay={0.2 + index * 0.05} />
            ))}
          </div>

          {/* Goals section */}
          <div className="flex w-full flex-col items-start gap-[10.3px]">
            {/* Section header */}
            <div className="flex items-center justify-center">
              <span className={TYPOGRAPHY.sectionTitle}>Goals</span>
            </div>

            {/* Search and filters */}
            <div className="flex w-full items-center justify-between">
              <SearchInput />
              <div className="flex w-[248.61px] items-center gap-[5.15px]">
                <FilterDropdown label="All Status" />
                <FilterDropdown label="All Progress" />
              </div>
            </div>

            {/* Goals grid - 4 cards per row */}
            <div className="grid w-full grid-cols-4 gap-[10.3px]">
              {GOALS_DATA.map((goal, index) => (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                  delay={0.3 + index * 0.03}
                  showPulsingButton={goal.title === "Close New Deals"}
                  onPulsingButtonClick={() => setShowGoalDetail(true)}
                  onCardClick={() => setShowGoalDetail(true)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Success Advisor floating button */}
        <SuccessAdvisorButton />
      </div>
    </div>
  );
};
