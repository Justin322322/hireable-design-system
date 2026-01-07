import type { ChartDataPoint, ProgressChart } from "@/types/api-contracts";

export const mockProgressChartData: ChartDataPoint[] = [
  { date: "2025-07-01", progress: 0 },
  { date: "2025-08-01", progress: 12 },
  { date: "2025-09-01", progress: 25 },
  { date: "2025-10-01", progress: 35 },
  { date: "2025-11-01", progress: 42 },
  { date: "2025-12-01", progress: 48 },
  { date: "2026-01-01", progress: 50 },
];

export const mockProgressCharts: ProgressChart[] = [
  {
    id: "chart-001",
    title: "Q1 Goals Progress",
    dataPoints: mockProgressChartData,
  },
  {
    id: "chart-002",
    title: "Sales Target Progress",
    dataPoints: [
      { date: "2025-10-01", progress: 0 },
      { date: "2025-11-01", progress: 30 },
      { date: "2025-12-01", progress: 65 },
      { date: "2026-01-01", progress: 85 },
    ],
  },
  {
    id: "chart-003",
    title: "Customer Satisfaction Trend",
    dataPoints: [
      { date: "2025-07-01", progress: 68 },
      { date: "2025-08-01", progress: 70 },
      { date: "2025-09-01", progress: 69 },
      { date: "2025-10-01", progress: 72 },
      { date: "2025-11-01", progress: 74 },
      { date: "2025-12-01", progress: 72 },
      { date: "2026-01-01", progress: 75 },
    ],
  },
];
