import { useThrottledWindowSize } from "@/hooks/useThrottledWindowSize";
import { useSelectedRole, useSetSelectedRole } from "@/stores";
import { useEffect, useMemo, useState } from "react";
import { getFeaturePills } from "../sections/HeroBannerSection/constants";

export const useHeroState = () => {
  const selectedRole = useSelectedRole();
  const setSelectedRole = useSetSelectedRole();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showTrialDetail, setShowTrialDetail] = useState(false);
  const { width } = useThrottledWindowSize(16); // ~60fps

  // Get first feature for current role
  const firstFeature = useMemo(
    () => getFeaturePills(selectedRole)[0].label,
    [selectedRole]
  );
  const [activeFeature, setActiveFeature] = useState(firstFeature);

  // Reset to first feature when role changes
  useEffect(() => {
    setActiveFeature(firstFeature);
    setShowTrialDetail(false); // Reset trial detail view when role changes
  }, [selectedRole, firstFeature]);

  // Reset trial detail view when active feature changes
  useEffect(() => {
    setShowTrialDetail(false);
  }, [activeFeature]);

  const scale = useMemo(() => {
    if (width === 0) return 0.2;
    if (width < 640) {
      // Mobile: Use more width (padding 16px * 2 = 32px)
      return Math.max(0.2, (width - 32) / 1313);
    }
    // Desktop: Scale to fit larger dashboard (1313px base)
    return Math.max(0.2, Math.min(1, (width - 128) / 1441));
  }, [width]);

  const dashboardStyle = useMemo(
    () =>
      ({
        "--dashboard-scale": scale,
        width: `${1313 * scale}px`,
        height: `${998 * scale}px`,
      }) as React.CSSProperties,
    [scale]
  );

  return {
    selectedRole,
    setSelectedRole,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    activeFeature,
    setActiveFeature,
    showTrialDetail,
    setShowTrialDetail,
    dashboardStyle,
  };
};
