// Re-export from refactored module
export { GoalDetailView } from "./goal-detail";
export type { GoalDetailViewProps } from "./goal-detail";

// Also export sub-components for direct use if needed
export {
  ActivitySection,
  CommentsSection,
  GoalStatCard,
  ProgressChart,
} from "./goal-detail";
