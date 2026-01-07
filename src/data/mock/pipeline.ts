import type { KanbanColumn, CandidateSummary } from "@/types/api-contracts";
import { mockCandidateSummaries } from "./candidates";

export const mockCandidatePipeline: KanbanColumn<CandidateSummary>[] = [
  {
    id: "col-new",
    title: "New Applicants",
    count: 2,
    items: [mockCandidateSummaries[0], mockCandidateSummaries[1]],
  },
  {
    id: "col-screening",
    title: "Screening",
    count: 1,
    items: [mockCandidateSummaries[2]],
  },
  {
    id: "col-interview",
    title: "Interview",
    count: 0,
    items: [],
  },
  {
    id: "col-offer",
    title: "Offer",
    count: 0,
    items: [],
  },
  {
    id: "col-hired",
    title: "Hired",
    count: 0,
    items: [],
  },
];
