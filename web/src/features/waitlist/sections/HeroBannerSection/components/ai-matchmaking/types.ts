/**
 * AI Matchmaking Types
 */

export interface Candidate {
  name: string;
  role: string;
  avatar: string;
  salary: string;
  experience: string;
  matchStatus?: string;
}

export interface PipelineColumn {
  title: string;
  count: number;
  candidates: Candidate[];
}
