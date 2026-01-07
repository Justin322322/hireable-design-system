import type { JobApplication, KanbanColumn } from "@/types/api-contracts";

export const mockApplications: JobApplication[] = [
  {
    id: "app-001",
    company: "TechCorp Inc.",
    position: "Senior Frontend Developer",
    salary: "$120k - $150k/yr",
    experience: "5+ years experience",
    status: "full-time",
    postedAt: "2025-12-20T10:00:00Z",
    badge: { label: "New", variant: "ontrack" },
  },
  {
    id: "app-002",
    company: "StartupXYZ",
    position: "Product Designer",
    salary: "$90k - $110k/yr",
    experience: "3-5 years experience",
    status: "full-time",
    postedAt: "2025-12-18T14:30:00Z",
    badge: { label: "Interview", variant: "ontrack" },
  },
  {
    id: "app-003",
    company: "Enterprise Solutions",
    position: "Backend Engineer",
    salary: "$130k - $160k/yr",
    experience: "5+ years experience",
    status: "contract",
    postedAt: "2025-12-15T09:00:00Z",
    badge: { label: "Pending", variant: "default" },
  },
  {
    id: "app-004",
    company: "Digital Agency Co.",
    position: "UX Researcher",
    salary: "$80k - $100k/yr",
    experience: "2-4 years experience",
    status: "part-time",
    postedAt: "2025-12-10T11:00:00Z",
    badge: { label: "Rejected", variant: "offtrack" },
  },
  {
    id: "app-005",
    company: "FinTech Global",
    position: "Full Stack Developer",
    salary: "$140k - $170k/yr",
    experience: "5+ years experience",
    status: "full-time",
    postedAt: "2025-12-22T08:00:00Z",
    badge: { label: "Offer", variant: "complete" },
  },
];

export const mockApplicationPipeline: KanbanColumn<JobApplication>[] = [
  {
    id: "col-applied",
    title: "Applied",
    count: 2,
    items: [mockApplications[0], mockApplications[2]],
  },
  {
    id: "col-screening",
    title: "Screening",
    count: 1,
    items: [mockApplications[1]],
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
    count: 1,
    items: [mockApplications[4]],
  },
  {
    id: "col-rejected",
    title: "Rejected",
    count: 1,
    items: [mockApplications[3]],
  },
];
