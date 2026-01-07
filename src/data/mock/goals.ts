import type { Goal, KeyResult, CreateGoalRequest } from "@/types/api-contracts";

export const mockKeyResults: KeyResult[] = [
  { id: "kr-001", title: "Increase quarterly sales by 20%", badgeText: "Percent", currentValue: 15, targetValue: 20 },
  { id: "kr-002", title: "Complete user research interviews", badgeText: "Number", currentValue: 8, targetValue: 12 },
  { id: "kr-003", title: "Launch new landing page", badgeText: "Boolean", currentValue: 0, targetValue: 1 },
  { id: "kr-004", title: "Reduce customer churn rate", badgeText: "Percent", currentValue: 3, targetValue: 5 },
  { id: "kr-005", title: "Hire 3 new team members", badgeText: "Number", currentValue: 2, targetValue: 3 },
];

export const mockGoals: Goal[] = [
  {
    id: "goal-001",
    title: "Increase Weekly Qualified Leads",
    description: "Focus on improving lead quality through targeted marketing campaigns and better qualification processes.",
    updateMethod: "automatic",
    progress: 50,
    badge: { label: "Automatic", variant: "default" },
    metrics: [
      { label: "key results completed", current: 2, total: 4 },
      { label: "Due", value: "Mar 31, 2026" },
    ],
    keyResults: [mockKeyResults[0], mockKeyResults[1]],
    dueDate: "2026-03-31",
    createdAt: "2025-11-01T10:00:00Z",
    updatedAt: "2026-01-05T14:30:00Z",
  },
  {
    id: "goal-002",
    title: "Improve Customer Satisfaction Score",
    description: "Enhance customer experience through better support and product improvements.",
    updateMethod: "manual",
    progress: 75,
    badge: { label: "Manual", variant: "ontrack" },
    metrics: [
      { label: "Current NPS", value: "72" },
      { label: "Target NPS", value: "85" },
    ],
    dueDate: "2026-06-30",
    createdAt: "2025-10-15T09:00:00Z",
    updatedAt: "2026-01-06T11:00:00Z",
  },
  {
    id: "goal-003",
    title: "Launch Mobile App v2.0",
    description: "Complete redesign and launch of mobile application with new features.",
    updateMethod: "automatic",
    progress: 33,
    badge: { label: "At Risk", variant: "atrisk" },
    metrics: [
      { label: "key results completed", current: 1, total: 3 },
      { label: "Due", value: "Feb 28, 2026" },
    ],
    keyResults: [mockKeyResults[2], mockKeyResults[3], mockKeyResults[4]],
    dueDate: "2026-02-28",
    createdAt: "2025-09-01T08:00:00Z",
    updatedAt: "2026-01-04T16:45:00Z",
  },
  {
    id: "goal-004",
    title: "Reduce Operational Costs",
    description: "Optimize processes and reduce unnecessary expenses across departments.",
    updateMethod: "manual",
    progress: 100,
    badge: { label: "Complete", variant: "complete" },
    metrics: [
      { label: "Savings achieved", value: "$125,000" },
      { label: "Target", value: "$100,000" },
    ],
    dueDate: "2025-12-31",
    createdAt: "2025-07-01T10:00:00Z",
    updatedAt: "2025-12-28T17:00:00Z",
  },
  {
    id: "goal-005",
    title: "Expand to New Markets",
    description: "Enter 3 new geographic markets in Southeast Asia.",
    updateMethod: "automatic",
    progress: 15,
    badge: { label: "Off Track", variant: "offtrack" },
    metrics: [
      { label: "markets entered", current: 0, total: 3 },
      { label: "Due", value: "Apr 30, 2026" },
    ],
    dueDate: "2026-04-30",
    createdAt: "2025-11-15T14:00:00Z",
    updatedAt: "2026-01-02T09:30:00Z",
  },
];

export const createGoalFromRequest = (request: CreateGoalRequest): Goal => {
  const now = new Date().toISOString();
  return {
    id: `goal-${Date.now()}`,
    title: request.title,
    description: request.description,
    updateMethod: request.updateMethod,
    progress: 0,
    badge: { label: request.updateMethod === "automatic" ? "Automatic" : "Manual", variant: "default" },
    keyResults: request.keyResults?.map((kr, i) => ({ ...kr, id: `kr-${Date.now()}-${i}` })),
    createdAt: now,
    updatedAt: now,
  };
};
