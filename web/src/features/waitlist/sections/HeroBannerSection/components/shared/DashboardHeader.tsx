import React from "react";

interface DashboardHeaderProps {
  selectedRole: string;
  activeFeature?: string;
  isSidebarCollapsed?: boolean;
  showTrialDetail?: boolean;
}

const DashboardHeaderComponent: React.FC<DashboardHeaderProps> = ({
  selectedRole,
  activeFeature = "Test Period",
  isSidebarCollapsed = false,
  showTrialDetail = false,
}) => {
  const isTalent = selectedRole === "talent";

  let title = "Trials";
  if (showTrialDetail) {
    title = "Trials";
  } else if (isTalent) {
    if (activeFeature === "Kanban Pipeline Management") {
      title = "Job Board";
    } else if (activeFeature === "AI Compatibility Matching") {
      title = "Job Board";
    } else if (activeFeature === "Worker Benefits Package") {
      title = "Job Board";
    }
  } else {
    if (activeFeature === "AI Matchmaking") {
      title = "My Applications";
    } else if (activeFeature === "KPI Tracker") {
      title = "";
    }
  }

  // Hide header for KPI Tracker only
  if (activeFeature === "KPI Tracker") {
    return null;
  }

  return (
    <header
      className="absolute top-0 flex items-center justify-between px-[25.74px] py-[15.44px] transition-all duration-300 ease-in-out"
      style={{
        left: isSidebarCollapsed ? 72 : 180,
        width: isSidebarCollapsed ? 1185.28 : 1077.28,
      }}
    >
      <div className="relative flex flex-1 grow items-center gap-[6.55px]">
        <h2 className="relative mt-[-0.65px] w-fit text-center font-['DM_Sans',Helvetica] text-[15.7px] leading-[23.6px] font-bold tracking-[0.13px] whitespace-nowrap text-neutral-900">
          {title}
        </h2>
        {activeFeature === "AI Matchmaking" && (
          <span className="trial-badge trial-badge-text ml-2 px-2 py-0.5 text-[10px] font-medium">
            TEST DRIVE
          </span>
        )}
      </div>

      <div>
        {isTalent ? (
          <button className="flex size-[23.57px] cursor-pointer items-center justify-center rounded-[57.16px] hover:bg-gray-100">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="4" r="1" fill="#212121" />
              <circle cx="8" cy="8" r="1" fill="#212121" />
              <circle cx="8" cy="12" r="1" fill="#212121" />
            </svg>
          </button>
        ) : null}
      </div>
    </header>
  );
};

export const DashboardHeader = React.memo(DashboardHeaderComponent);
DashboardHeader.displayName = "DashboardHeader";
