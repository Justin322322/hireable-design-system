// Chart data point interface
export interface ChartDataPoint {
  date: string;
  progress: number;
}

export interface GoalDetailViewProps {
  goalTitle?: string;
  goalType?: "Manual" | "Automatic";
  description?: string;
  currentValue?: number;
  targetValue?: number;
  progressPercentage?: number;
  daysRemaining?: number;
  trialEndDate?: string;
  talentName?: string;
  /** If true, format current and target values as currency */
  formatAsCurrency?: boolean;
  /** If true, show "back to goals" link instead of breadcrumbs */
  showBackToGoals?: boolean;
  /** Custom chart data - defaults to percentage-based data */
  chartData?: ChartDataPoint[];
  /** Chart tooltip label - defaults to "Progress" */
  chartLabel?: string;
  /** Y-axis label - defaults to "Progress ($)" when currency, "Progress (%)" otherwise */
  chartYAxisLabel?: string;
  /** Maximum Y value for the chart */
  chartYMax?: number;
  /** Y-axis ticks */
  chartYTicks?: number[];
}

export interface Comment {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  timeAgo: string;
}

export interface Activity {
  id: string;
  type: "progress" | "update";
  message: string;
  timestamp: string;
}

export interface GoalStatCardProps {
  title: string;
  value: string;
  icon: string;
  subtitle?: string;
  valueSubtitle?: string;
  growth?: string;
  progress?: number;
  progressColor?: string;
}
