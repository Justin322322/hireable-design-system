import type { RoleType } from "@/stores";
import Image from "next/image";
import React from "react";
import {
  activeTrials,
  endedTrials,
  endingSoonTrials,
  evaluationTrials,
  safariIcons,
  safariRightIcons,
  sidebarBottomItems,
  sidebarMainItems,
  sidebarMainItemsTalent,
  sidebarTeamItems,
  sidebarTeamItemsTalent,
  sidebarTrialsItemsTalent,
  statsCards,
} from "../constants";
import {
  LazyAIMatchmakingDashboard,
  LazyBrowseJobsDashboard,
  LazyCandidateProfileDrawer,
  LazyKPITrackerDashboard,
  LazyOfferDrawer,
  LazyTalentKanbanDashboard,
  LazyTrialDetailDashboard,
  LazyWorkerBenefitsDashboard,
} from "./LazyDashboards";
import {
  BrowserChrome,
  DashboardFilters,
  DashboardHeader,
  DashboardSidebar,
  StatsCard,
  TrialsSection,
} from "./index";

interface DashboardContainerProps {
  selectedRole: RoleType;
  activeFeature: string;
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (collapsed: boolean) => void;
  showTrialDetail: boolean;
  setShowTrialDetail: (show: boolean) => void;
  selectedCandidateName: string | null;
  setSelectedCandidateName: (name: string | null) => void;
  onCandidateSelect: (candidate: { name: string } | null) => void;
}

const DashboardContainerComponent: React.FC<DashboardContainerProps> = ({
  selectedRole,
  activeFeature,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  showTrialDetail,
  setShowTrialDetail,
  selectedCandidateName,
  setSelectedCandidateName,
  onCandidateSelect,
}) => {
  return (
    <div className="relative h-[998px] w-[1280px] origin-top-left scale-(--dashboard-scale)">
      <div className="absolute top-[705px] left-0 h-[293px] w-[1280px]">
        <Image
          className="size-full"
          alt="Element sleek"
          src="/images/20251001-1754-sleek-monitor-concept-simple-compose-01k6fk1e84efz.png"
          width={1280}
          height={293}
        />
        {/* Vanishing point gradient - bottom half fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-linear-to-b from-transparent via-neutral-50/90 via-60% to-neutral-50" />
      </div>

      <div className="absolute top-0 left-0 flex w-[1280px] flex-col items-start gap-[9.467px] rounded-[16px] bg-black p-[11.361px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]">
        <div className="bg-neutral-150 relative h-[701px] w-full overflow-hidden rounded-lg">
          <div className="bg-neutral-150 flex h-[701px] w-full flex-col overflow-hidden rounded-lg">
            <BrowserChrome
              leftIcons={safariIcons}
              rightIcons={safariRightIcons}
            />

            <div className="relative h-[657px] overflow-hidden rounded-[16px_16px_0px_0px] bg-white">
              <DashboardHeader
                selectedRole={selectedRole}
                activeFeature={activeFeature}
                isSidebarCollapsed={isSidebarCollapsed}
                showTrialDetail={showTrialDetail}
              />

              <div
                className="absolute flex items-start overflow-hidden bg-white transition-all duration-300 ease-in-out"
                style={{
                  top: activeFeature === "KPI Tracker" ? 0 : 54,
                  height: activeFeature === "KPI Tracker" ? 657 : 602,
                  left: isSidebarCollapsed ? 72 : 180,
                  width: isSidebarCollapsed ? 1185.28 : 1077.28,
                }}
              >
                {activeFeature === "AI Matchmaking" ? (
                  <LazyAIMatchmakingDashboard
                    onCandidateSelect={onCandidateSelect}
                  />
                ) : activeFeature === "AI Compatibility Matching" ? (
                  <LazyBrowseJobsDashboard />
                ) : activeFeature === "Worker Benefits Package" ? (
                  <LazyWorkerBenefitsDashboard />
                ) : activeFeature === "KPI Tracker" ? (
                  <LazyKPITrackerDashboard />
                ) : activeFeature === "Kanban Pipeline Management" ? (
                  <LazyTalentKanbanDashboard />
                ) : showTrialDetail ? (
                  <LazyTrialDetailDashboard />
                ) : (
                  <div className="relative mb-[-349.80px] flex w-full flex-col items-start gap-[20.59px] overflow-hidden rounded-[5.24px] px-[25.74px] pt-0 pb-[15.44px]">
                    <div className="relative flex w-full flex-col items-start gap-[6.55px] self-stretch">
                      <div className="relative flex w-full items-center gap-[10.3px] self-stretch">
                        {statsCards.map((stat, index) => (
                          <StatsCard key={index} stat={stat} />
                        ))}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-col items-start gap-[15.44px] self-stretch">
                      <DashboardFilters />

                      <TrialsSection
                        title="Active Trials"
                        trials={activeTrials}
                        onPulsingButtonClick={() => setShowTrialDetail(true)}
                        onCardClick={(trialName) => {
                          if (trialName === "Mikaela Santos") {
                            setShowTrialDetail(true);
                          }
                        }}
                      />

                      <TrialsSection
                        title="Ending Soon"
                        trials={endingSoonTrials}
                      />

                      <TrialsSection
                        title="For Evaluation"
                        trials={evaluationTrials}
                      />

                      <TrialsSection title="Ended" trials={endedTrials} />
                    </div>
                  </div>
                )}
              </div>

              <DashboardSidebar
                mainItems={
                  selectedRole === "talent"
                    ? sidebarMainItemsTalent
                    : sidebarMainItems
                }
                teamItems={
                  selectedRole === "talent"
                    ? sidebarTeamItemsTalent
                    : sidebarTeamItems
                }
                trialsItems={
                  selectedRole === "talent"
                    ? sidebarTrialsItemsTalent
                    : undefined
                }
                bottomItems={sidebarBottomItems}
                activeFeature={activeFeature}
                onCollapsedChange={setIsSidebarCollapsed}
                selectedRole={selectedRole}
              />

              {/* Chatbot Icon */}
              <div
                className="absolute z-20 flex items-center justify-center"
                style={{
                  width: 56.62,
                  height: 56.62,
                  right: 16,
                  bottom: 16,
                }}
              >
                <Image
                  src="/icons/chatbot-icon.svg"
                  alt="Chatbot"
                  width={28}
                  height={28}
                  className="size-full"
                />
              </div>

              {/* Candidate Profile Drawer - rendered at this level to cover sidebar and header */}
              {selectedCandidateName && (
                <LazyCandidateProfileDrawer
                  isOpen={!!selectedCandidateName}
                  onClose={() => setSelectedCandidateName(null)}
                  candidateName={selectedCandidateName}
                />
              )}

              {/* Offer Drawer - rendered at this level for proper positioning */}
              {activeFeature === "Worker Benefits Package" && (
                <LazyOfferDrawer isOpen={true} onClose={() => {}} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vanishing point gradient */}
      <div className="pointer-events-none absolute bottom-0 left-[calc(50%-640px)] hidden h-[150px] w-[1280px] bg-[linear-gradient(180deg,rgba(250,250,250,0)_0%,rgba(250,250,250,1)_100%)] sm:block" />
    </div>
  );
};

export const DashboardContainer = React.memo(DashboardContainerComponent);
DashboardContainer.displayName = "DashboardContainer";
