export interface AIMatchReason {
  category: string;
  description: string;
}

export interface Job {
  title: string;
  company: string;
  budget: string;
  duration: string;
  experience: string;
  status: string;
  matchPercentage: string;
  skills: string[];
  postedTime: string;
  aiMatchReasons: AIMatchReason[];
  expanded?: boolean;
}
