// Typography classes matching Figma specs
export const TYPOGRAPHY = {
  pageTitle:
    "font-dm-sans text-[15.44px] leading-[150%] font-semibold tracking-[0.2px] text-neutral-900",
  sectionTitle:
    "font-sans text-[10.3px] leading-[150%] font-semibold tracking-[0.13px] text-neutral-900",
  cardTitle:
    "font-dm-sans text-[15.44px] leading-[150%] font-semibold tracking-[0.13px] text-neutral-900",
  body: "font-sans text-[9px] leading-[120%] font-normal tracking-[0.2px] text-neutral-900",
  bodySmall:
    "font-sans text-[6.43px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700",
  label:
    "font-sans text-[9px] leading-[120%] font-semibold tracking-[0.13px] text-neutral-900",
  subtitle:
    "font-sans text-[12.87px] leading-[150%] font-normal tracking-[0.26px] text-neutral-700",
  statValue:
    "font-dm-sans text-[20.59px] leading-[150%] font-semibold text-neutral-900",
  statLabel:
    "font-sans text-[9px] leading-[120%] font-semibold tracking-[0.2px] text-neutral-700",
  goalTitle:
    "font-sans text-[10.3px] leading-[150%] font-semibold tracking-[0.13px] text-neutral-900",
  goalValue:
    "font-dm-sans text-[20.59px] leading-[120%] font-semibold text-neutral-900",
  breadcrumb:
    "font-sans text-[6.74px] leading-[120%] font-normal tracking-[0.11px] text-neutral-700",
  pillBadge:
    "font-sans text-[6.43px] leading-[120%] font-normal tracking-[0.2px] text-neutral-700",
  pillBadgeLarge:
    "font-sans text-[7.72px] leading-[120%] font-normal tracking-[0.2px] text-neutral-700",
};

// Animation configuration
export const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};

// Stats data matching Figma
export const STATS_DATA = [
  {
    id: "trial-fit",
    title: "Trial Fit Percentage",
    value: "49%",
    subtitle: "Matched",
    icon: "/icons/icon-trial-drive.svg",
    progress: 34,
    progressColor: "#FF8112",
  },
  {
    id: "total-goals",
    title: "Total Goals",
    value: "8",
    icon: "/icons/icon-goals-kpis.svg",
    pills: ["4 Automatic", "2 Manual", "2 Default"],
  },
  {
    id: "overall-progress",
    title: "Overall Progress",
    value: "60%",
    subtitle: "1 of 8 goals completed",
    icon: "/icons/icon-completion-rate.svg",
    progress: 60,
    progressColor: "#00A7F8",
  },
  {
    id: "days-remaining",
    title: "Days Remaining",
    value: "16",
    subtitle: "Trial ends on Nov 30, 2025",
    icon: "/icons/icon-calendar.svg",
    progress: 47,
    progressColor: "#C3C3C3",
  },
];

// Goals data matching Figma
export const GOALS_DATA = [
  {
    id: 1,
    title: "Close New Deals",
    type: "Manual",
    value: "2",
    progress: 40,
    progressColor: "#00A7F8",
    growth: "+10%",
    date: "Nov 30, 2025",
  },
  {
    id: 2,
    title: "Increase Weekly Qualified Leads",
    type: "Automatic",
    value: "50%",
    progress: 50,
    progressColor: "#00A7F8",
    status: "2 of 4 key results completed",
    date: "Nov 30, 2025",
  },
  {
    id: 3,
    title: "Improve Follow-Up Response Time",
    type: "Default",
    value: null,
    progress: 100,
    progressColor: "#27AE60",
    status: "Completed",
    date: "Nov 30, 2025",
  },
  {
    id: 4,
    title: "Book Discovery Calls",
    type: "Manual",
    value: "8",
    progress: 34,
    progressColor: "#EB5757",
    growth: "+10%",
    date: "Nov 30, 2025",
  },
  {
    id: 5,
    title: "Build & Optimize Sales Pipeline",
    type: "Default",
    value: null,
    progress: 0,
    progressColor: "#00A7F8",
    status: "Started",
    date: "Nov 30, 2025",
  },
  {
    id: 6,
    title: "Increase Social Outreach",
    type: "Automatic",
    value: "67%",
    progress: 67,
    progressColor: "#00A7F8",
    status: "2 of 3 key results completed",
    date: "Nov 30, 2025",
  },
  {
    id: 7,
    title: "Improve CRM Data Accuracy",
    type: "Automatic",
    value: "67%",
    progress: 67,
    progressColor: "#00A7F8",
    status: "2 of 3 key results completed",
    date: "Nov 30, 2025",
  },
  {
    id: 8,
    title: "Strengthen Client Nurturing",
    type: "Automatic",
    value: "46%",
    progress: 46,
    progressColor: "#00A7F8",
    status: "1 of 3 key results completed",
    date: "Nov 30, 2025",
  },
];
