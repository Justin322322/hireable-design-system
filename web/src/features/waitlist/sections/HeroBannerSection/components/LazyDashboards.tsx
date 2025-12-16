"use client";

import dynamic from "next/dynamic";

/**
 * Lazy-loaded dashboard components using Next.js dynamic imports
 * This significantly reduces the initial bundle size as each dashboard
 * is only loaded when actually needed
 */

// Skeleton loader for dashboards - provides visual feedback during load
const DashboardSkeleton = () => (
  <div className="flex size-full animate-pulse flex-col gap-4 p-4">
    <div className="h-8 w-1/3 rounded bg-neutral-200" />
    <div className="flex flex-1 gap-4">
      <div className="h-full flex-1 rounded-lg bg-neutral-100" />
      <div className="h-full w-1/3 rounded-lg bg-neutral-100" />
    </div>
  </div>
);

// Skeleton loader for drawers
const DrawerSkeleton = () => (
  <div className="absolute top-0 right-0 h-full w-80 animate-pulse bg-white p-4 shadow-lg">
    <div className="mb-4 h-6 w-1/2 rounded bg-neutral-200" />
    <div className="space-y-3">
      <div className="h-4 w-full rounded bg-neutral-100" />
      <div className="h-4 w-3/4 rounded bg-neutral-100" />
      <div className="h-4 w-5/6 rounded bg-neutral-100" />
    </div>
  </div>
);

// AI Matchmaking Dashboard - loaded when activeFeature === "AI Matchmaking"
export const LazyAIMatchmakingDashboard = dynamic(
  () =>
    import("./ai-matchmaking/AIMatchmakingDashboard").then(
      (mod) => mod.AIMatchmakingDashboard
    ),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

// Browse Jobs Dashboard - loaded when activeFeature === "AI Compatibility Matching"
export const LazyBrowseJobsDashboard = dynamic(
  () =>
    import("./features/BrowseJobsDashboard").then(
      (mod) => mod.BrowseJobsDashboard
    ),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

// Worker Benefits Dashboard - loaded when activeFeature === "Worker Benefits Package"
export const LazyWorkerBenefitsDashboard = dynamic(
  () =>
    import("./features/WorkerBenefitsDashboard").then(
      (mod) => mod.WorkerBenefitsDashboard
    ),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

// KPI Tracker Dashboard - loaded when activeFeature === "KPI Tracker"
export const LazyKPITrackerDashboard = dynamic(
  () =>
    import("./features/KPITrackerDashboard").then(
      (mod) => mod.KPITrackerDashboard
    ),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

// Talent Kanban Dashboard - loaded when activeFeature === "Kanban Pipeline Management"
export const LazyTalentKanbanDashboard = dynamic(
  () =>
    import("./features/TalentKanbanDashboard").then(
      (mod) => mod.TalentKanbanDashboard
    ),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

// Trial Detail Dashboard - loaded when showTrialDetail is true
export const LazyTrialDetailDashboard = dynamic(
  () =>
    import("./trials/TrialDetailDashboard").then(
      (mod) => mod.TrialDetailDashboard
    ),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

// Candidate Profile Drawer - loaded when a candidate is selected
export const LazyCandidateProfileDrawer = dynamic(
  () =>
    import("./ai-matchmaking/CandidateProfileDrawer").then(
      (mod) => mod.CandidateProfileDrawer
    ),
  {
    loading: () => <DrawerSkeleton />,
    ssr: false,
  }
);

// Offer Drawer - loaded when Worker Benefits Package is active
export const LazyOfferDrawer = dynamic(
  () => import("./features/OfferDrawer").then((mod) => mod.OfferDrawer),
  {
    loading: () => <DrawerSkeleton />,
    ssr: false,
  }
);
