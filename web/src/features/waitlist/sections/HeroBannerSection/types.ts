import type { BadgeVariant } from "@/components/ui/badge";

export interface TrialData {
  name: string;
  role: string;
  avatar: string;
  status: string;
  statusVariant: BadgeVariant;
  overallProgress: number;
  overallProgressColor: string;
  trialProgress: string;
  trialProgressWidth: string;
  trialProgressColor: string;
}

export interface SidebarItem {
  icon: string;
  label: string;
  active: boolean;
}

export interface StatCard {
  title: string;
  value: string;
  description: string;
  icon: string;
}
