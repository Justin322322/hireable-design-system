import type { Activity, ChartDataPoint, Comment } from "./types";

// Typography classes matching Figma specs
export const TYPOGRAPHY = {
  statValue:
    "font-dm-sans text-[20.59px] leading-[150%] font-semibold text-neutral-900",
  statLabel:
    "font-sans text-[9px] leading-[120%] font-semibold tracking-[0.2px] text-neutral-700",
  bodySmall:
    "font-sans text-[6.43px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700",
  sectionTitle:
    "font-sans text-[8.99px] leading-[150%] font-semibold tracking-[0.11px] text-neutral-900",
};

// Mock data for demo
export const mockComments: Comment[] = [
  {
    id: "1",
    author: "Mikaela Santos",
    avatar: "/images/Michaela.svg",
    content:
      "This week is challenging but we did a lot of progress on the goal.",
    timeAgo: "2 hours ago",
  },
  {
    id: "2",
    author: "John Doe",
    avatar: "/images/Jacob-Smith.svg",
    content: "Great progress this month! We're on track to hit our target.",
    timeAgo: "2 hours ago",
  },
  {
    id: "3",
    author: "Mikaela Santos",
    avatar: "/images/Michaela.svg",
    content: "Great progress this month! We're on track to hit our target.",
    timeAgo: "2 hours ago",
  },
];

export const mockActivities: Activity[] = [
  {
    id: "1",
    type: "progress",
    message: "Current progress updated to 2.",
    timestamp: "Today at 9:30 AM",
  },
  {
    id: "2",
    type: "update",
    message: 'Progress updated for "Close 5 major deals" - 2 of 5 completed',
    timestamp: "Today at 9:30 AM",
  },
  {
    id: "3",
    type: "update",
    message: 'Progress updated for "Close 5 major deals" - 2 of 5 completed',
    timestamp: "Today at 9:30 AM",
  },
];

// Chart data matching the Figma design - wavy progress curve with ups and downs (percentage mode)
export const progressChartData: ChartDataPoint[] = [
  { date: "Nov 04", progress: 5 },
  { date: "Nov 05", progress: 18 },
  { date: "Nov 06", progress: 12 },
  { date: "Nov 07", progress: 25 },
  { date: "Nov 08", progress: 20 },
  { date: "Nov 09", progress: 30 },
  { date: "Nov 10", progress: 22 },
  { date: "Nov 11", progress: 35 },
  { date: "Nov 12", progress: 28 },
  { date: "Nov 13", progress: 38 },
  { date: "Nov 14", progress: 32 },
];

// Revenue chart data for currency mode
export const revenueChartData: ChartDataPoint[] = [
  { date: "Jan", progress: 1850000 },
  { date: "Feb", progress: 2000000 },
  { date: "Mar", progress: 2050000 },
  { date: "Apr", progress: 2250000 },
  { date: "May", progress: 2550000 },
  { date: "Jun", progress: 2700000 },
  { date: "Jul", progress: 2900000 },
  { date: "Aug", progress: 2950000 },
  { date: "Sep", progress: 3000000 },
  { date: "Oct", progress: 3020000 },
];
