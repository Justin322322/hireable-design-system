import type { RoleType } from "@/stores";

export const userRoleOptions: readonly { value: RoleType; label: string }[] = [
  { value: "client", label: "Client" },
  { value: "talent", label: "Talent" },
] as const;

export const getFeaturePills = (selectedRole: RoleType) => [
  {
    icon: "/icons/icon-trial-drive.svg",
    label:
      selectedRole === "talent" ? "Kanban Pipeline Management" : "Test Period",
    active: true,
  },
  {
    icon: "/icons/icon-ai-matchmaking.svg",
    label:
      selectedRole === "talent"
        ? "AI Compatibility Matching"
        : "AI Matchmaking",
    active: false,
  },
  {
    icon: "/icons/icon-kpi-tracker.svg",
    label:
      selectedRole === "talent" ? "Worker Benefits Package" : "KPI Tracker",
    active: false,
  },
];

export const statsCards = [
  {
    title: "Active Trials",
    value: "4",
    description: "Trials currently in progress",
    icon: "/icons/icon-active-trials.svg",
  },
  {
    title: "Ending Soon",
    value: "2",
    description: "Trials set to end within 7 days",
    icon: "/icons/icon-ending-soon.svg",
  },
  {
    title: "For  Evaluation",
    value: "1",
    description: "Trials awaiting client evaluation",
    icon: "/icons/icon-evaluation.svg",
  },
  {
    title: "Ended",
    value: "1",
    description: "Trials that have finished their contract period",
    icon: "/icons/icon-ended.svg",
  },
] as const;

export const activeTrials = [
  {
    name: "Mikaela Santos",
    role: "Sales Manager",
    avatar: "/images/Michaela.svg",
    status: "ON TRACK",
    statusVariant: "success",
    overallProgress: 53,
    overallProgressColor: "bg-[#00a7f8]",
    trialProgress: "10 / 30 Days",
    trialProgressWidth: "w-[50.42px]",
    trialProgressColor: "bg-[#c3c3c3]",
  },
  {
    name: "Bianca Santos",
    role: "Marketing Specialist",
    avatar: "/images/Bianca-Santos.svg",
    status: "ON TRACK",
    statusVariant: "success",
    overallProgress: 40,
    overallProgressColor: "bg-[#00a7f8]",
    trialProgress: "15 / 60 days",
    trialProgressWidth: "w-[84.46px]",
    trialProgressColor: "bg-[#c3c3c3]",
  },
  {
    name: "Nicole Fernandez",
    role: "Sales Manager",
    avatar: "/images/Nicolle-Fernandez.svg",
    status: "OFF TRACK",
    statusVariant: "danger",
    overallProgress: 20,
    overallProgressColor: "bg-[#eb5757]",
    trialProgress: "12 / 30 days",
    trialProgressWidth: "w-[50.42px]",
    trialProgressColor: "bg-[#c3c3c3]",
  },
  {
    name: "Michael Sy",
    role: "Sales Manager",
    avatar: "/images/Michael-Sy.svg",
    status: "OFF TRACK",
    statusVariant: "danger",
    overallProgress: 20,
    overallProgressColor: "bg-[#eb5757]",
    trialProgress: "12 / 30 days",
    trialProgressWidth: "w-[50.42px]",
    trialProgressColor: "bg-[#c3c3c3]",
  },
] as const;

export const endingSoonTrials = [
  {
    name: "Isabel Reyes",
    role: "Product Designer",
    avatar: "/images/Isabel-Reyes.svg",
    status: "ON TRACK",
    statusVariant: "success",
    overallProgress: 75,
    overallProgressColor: "bg-[#00a7f8]",
    trialProgress: "26 / 30 days",
    trialProgressWidth: "w-[220px]",
    trialProgressColor: "bg-[#c3c3c3]",
  },
  {
    name: "Catalina Ramos",
    role: "Customer Success Associat",
    avatar: "/images/Catalina-Ramos.svg",
    status: "OFF TRACK",
    statusVariant: "danger",
    overallProgress: 50,
    overallProgressColor: "bg-[#eb5757]",
    trialProgress: "28 / 30 days",
    trialProgressWidth: "w-[224.58px]",
    trialProgressColor: "bg-[#c3c3c3]",
  },
] as const;

export const evaluationTrials = [
  {
    name: "Jethro Soriano",
    role: "Data Analyst",
    avatar: "/images/Jethro-Soriano.svg",
    status: "OFF TRACK",
    statusVariant: "danger",
    overallProgress: 65,
    overallProgressColor: "bg-[#eb5757]",
    trialProgress: "30 / 30 days",
    trialProgressWidth: "self-stretch w-full",
    trialProgressColor: "bg-[#c3c3c3]",
  },
] as const;

export const endedTrials = [
  {
    name: "Michaela Reyes",
    role: "Sales Manager",
    avatar: "/images/Michaela.svg",
    status: "ENDED",
    statusVariant: "muted",
    overallProgress: 100,
    overallProgressColor: "bg-[#27ae60]",
    trialProgress: "30 / 30 days",
    trialProgressWidth: "self-stretch w-full",
    trialProgressColor: "bg-[#c3c3c3]",
  },
] as const;

export const sidebarMainItems = [
  { icon: "/icons/icon-home.svg", label: "Home", active: false },
  {
    icon: "/icons/icon-discover-talent.svg",
    label: "Discover Talent",
    active: false,
  },
  { icon: "/icons/icon-jobs.svg", label: "Jobs", active: false },
  {
    icon: "/icons/icon-notifications.svg",
    label: "Notifications",
    active: false,
  },
  { icon: "/icons/icon-messages.svg", label: "Messages", active: false },
  { icon: "/icons/icon-trials.svg", label: "Test", active: true },
] as const;

export const sidebarMainItemsTalent = [
  { icon: "/icons/icon-home.svg", label: "Home", active: false },
  { icon: "/icons/icon-jobs.svg", label: "Job Board", active: true },
  {
    icon: "/icons/icon-notifications.svg",
    label: "Notifications",
    active: false,
  },
  { icon: "/icons/icon-messages.svg", label: "Messages", active: false },
] as const;

export const sidebarTeamItems = [
  {
    icon: "/icons/icon-team-dashboard.svg",
    label: "Team Dashboard",
    active: false,
  },
  { icon: "/icons/icon-goals-kpis.svg", label: "Goals & KPIs", active: false },
  {
    icon: "/icons/icon-talent-wellness.svg",
    label: "Talent Wellness",
    active: false,
  },
  {
    icon: "/icons/icon-team-members.svg",
    label: "Team Members",
    active: false,
  },
  {
    icon: "/icons/icon-goals-kpis.svg",
    label: "Performance Reviews",
    active: false,
  },
] as const;

export const sidebarTeamItemsTalent = [
  { icon: "/icons/icon-team-dashboard.svg", label: "Acme Corp", active: false },
] as const;

export const sidebarTrialsItemsTalent = [
  { icon: "/icons/icon-trials.svg", label: "Trial 1", active: false },
] as const;

export const sidebarBottomItems = [
  { icon: "/icons/icon-help-center.svg", label: "Help Center", active: false },
  { icon: "/icons/icon-settings.svg", label: "Settings", active: false },
] as const;

export const safariIcons = [
  { src: "/icons/icon-browser-back.svg", alt: "Safari icons" },
  { src: "/icons/icon-browser-forward.svg", alt: "Safari icons" },
] as const;

export const safariRightIcons = [
  { src: "/icons/icon-browser-share.svg", alt: "Safari icons" },
  { src: "/icons/icon-browser-menu.svg", alt: "Safari icons" },
] as const;

export const ROLE_COLORS = {
  backgroundColors: {
    client: "bg-[#f2fbff]",
    talent: "bg-[#FFFBFC]",
  },
  shadowColors: {
    client: "shadow-[inset_0px_0.5px_4px_0px_#75a9c2]",
    talent: "shadow-[inset_0px_0.5px_4px_#FEA9A9]",
  },
  indicatorGradients: {
    client:
      "bg-[linear-gradient(180deg,rgba(239,250,255,1)_0%,rgba(215,242,255,1)_18%,rgba(0,120,178,1)_100%)]",
    talent:
      "bg-[linear-gradient(180deg,#FFF5F5_0.48%,#FFE6E7_17.79%,#E6898A_100%)]",
  },
  indicatorShadows: {
    client: "shadow-[0px_3px_4px_#00355040]",
    talent: "shadow-[0px_3px_4px_rgba(103,0,0,0.25)]",
  },
  textColors: {
    client: "text-[#00324b]",
    talent: "text-[#640505]",
  },
} as const;
