"use client";

import React, { useCallback, useState } from "react";
import { useHeroState } from "../../hooks/useHeroState";
import { FeaturePills } from "./components";
import { DashboardContainer } from "./components/DashboardContainer";
import { HeroHeader } from "./components/HeroHeader";
import { ImagePreloader } from "./components/ImagePreloader";
import { getFeaturePills, userRoleOptions } from "./constants";

interface HeroBannerSectionProps {
  onJoinWaitlistClick?: () => void;
}

const HeroBannerSectionComponent = ({
  onJoinWaitlistClick,
}: HeroBannerSectionProps): React.ReactElement => {
  const {
    selectedRole,
    setSelectedRole,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    activeFeature,
    setActiveFeature,
    showTrialDetail,
    setShowTrialDetail,
    dashboardStyle,
  } = useHeroState();

  // Simple state to track selected candidate for the drawer
  const [selectedCandidateName, setSelectedCandidateName] = useState<
    string | null
  >(null);

  const handleCandidateSelect = useCallback(
    (candidate: { name: string } | null) => {
      setSelectedCandidateName(candidate?.name || null);
    },
    []
  );

  // Close candidate drawer when switching features
  React.useEffect(() => {
    setSelectedCandidateName(null);
  }, [activeFeature]);

  return (
    <section
      id="hero"
      className="relative flex w-full flex-col items-center gap-[40px] overflow-x-hidden px-4 pt-[80px] pb-[80px] lg:gap-[80px] lg:px-20"
    >
      <ImagePreloader />

      <HeroHeader
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        userRoleOptions={userRoleOptions}
        onJoinWaitlistClick={onJoinWaitlistClick}
      />

      <div className="relative inline-flex w-full flex-col items-center gap-3 px-4 sm:gap-4 sm:px-0">
        <FeaturePills
          pills={getFeaturePills(selectedRole)}
          activeFeature={activeFeature}
          onFeatureChange={setActiveFeature}
          selectedRole={selectedRole}
          maxWidth={dashboardStyle.width}
        />

        <div className="no-drag flex max-h-[50vh] w-full justify-center sm:max-h-none">
          <div style={dashboardStyle} className="max-h-[50vh] sm:max-h-none">
            <DashboardContainer
              selectedRole={selectedRole}
              activeFeature={activeFeature}
              isSidebarCollapsed={isSidebarCollapsed}
              setIsSidebarCollapsed={setIsSidebarCollapsed}
              showTrialDetail={showTrialDetail}
              setShowTrialDetail={setShowTrialDetail}
              selectedCandidateName={selectedCandidateName}
              setSelectedCandidateName={setSelectedCandidateName}
              onCandidateSelect={handleCandidateSelect}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroBannerSection = React.memo(HeroBannerSectionComponent);
HeroBannerSection.displayName = "HeroBannerSection";
