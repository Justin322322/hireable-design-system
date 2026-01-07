import type { JobPostType } from "@/types/api-contracts";

export interface Job {
  id: string;
  title: string;
  type: JobPostType;
  duration?: string;
  salary: string;
  experience: string;
  location: string;
  description: string;
  requirements: string[];
  status: "draft" | "published" | "closed";
  icon?: string;
  postedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TrialObjective {
  id: string;
  title: string;
  type: "Default" | "Automatic" | "Manual";
  description?: string;
  placeholder?: string;
}

export const mockJobs: Job[] = [
  {
    id: "job-001",
    title: "Senior Product Designer",
    type: "full-time",
    salary: "$90k - $120k/yr",
    experience: "5+ years",
    location: "Remote",
    description: "We're looking for a Senior Product Designer to lead design initiatives and mentor junior designers.",
    requirements: ["Figma expertise", "Design systems experience", "User research skills"],
    status: "published",
    icon: "/icons/design.svg",
    postedAt: "2025-12-20T10:00:00Z",
    createdAt: "2025-12-18T08:00:00Z",
    updatedAt: "2025-12-20T10:00:00Z",
  },
  {
    id: "job-002",
    title: "Frontend Developer",
    type: "full-time",
    salary: "$100k - $140k/yr",
    experience: "3-5 years",
    location: "Remote",
    description: "Join our engineering team to build beautiful, performant web applications.",
    requirements: ["React/Next.js", "TypeScript", "CSS/Tailwind"],
    status: "published",
    icon: "/icons/code.svg",
    postedAt: "2025-12-19T14:00:00Z",
    createdAt: "2025-12-17T09:00:00Z",
    updatedAt: "2025-12-19T14:00:00Z",
  },
  {
    id: "job-003",
    title: "Product Manager",
    type: "test-30-60-90",
    duration: "90 days",
    salary: "$110k - $150k/yr",
    experience: "5+ years",
    location: "Hybrid - Manila",
    description: "Lead product strategy and work closely with engineering and design teams.",
    requirements: ["Product roadmap experience", "Agile methodology", "Data-driven decision making"],
    status: "published",
    icon: "/icons/product.svg",
    postedAt: "2025-12-18T11:00:00Z",
    createdAt: "2025-12-15T10:00:00Z",
    updatedAt: "2025-12-18T11:00:00Z",
  },
  {
    id: "job-004",
    title: "Sales Manager",
    type: "test-30-60-90",
    duration: "60 days",
    salary: "$80k - $100k/yr",
    experience: "3-5 years",
    location: "Remote - APAC",
    description: "Drive sales growth in the APAC region and build a high-performing sales team.",
    requirements: ["B2B sales experience", "Team leadership", "CRM proficiency"],
    status: "draft",
    icon: "/icons/nairobi.svg",
    createdAt: "2025-12-22T08:00:00Z",
    updatedAt: "2025-12-22T08:00:00Z",
  },
  {
    id: "job-005",
    title: "Backend Engineer",
    type: "full-time",
    salary: "$120k - $160k/yr",
    experience: "5+ years",
    location: "Remote",
    description: "Build scalable backend systems and APIs for our growing platform.",
    requirements: ["Node.js/Python", "PostgreSQL", "AWS/GCP", "API design"],
    status: "closed",
    icon: "/icons/backend.svg",
    postedAt: "2025-11-01T10:00:00Z",
    createdAt: "2025-10-28T09:00:00Z",
    updatedAt: "2025-12-15T16:00:00Z",
  },
];

export const mockTrialObjectives: TrialObjective[] = [
  {
    id: "obj-001",
    title: "Increase Weekly Qualified Leads",
    type: "Automatic",
    description: "Track and improve lead generation metrics",
    placeholder: "Describe your approach to increasing qualified leads...",
  },
  {
    id: "obj-002",
    title: "Improve Customer Retention Rate",
    type: "Manual",
    description: "Reduce churn and improve customer satisfaction",
    placeholder: "Explain your strategy for customer retention...",
  },
  {
    id: "obj-003",
    title: "Launch New Feature",
    type: "Default",
    description: "Successfully ship a new product feature",
    placeholder: "Describe your experience launching features...",
  },
];

export const mockJobSummaries = mockJobs.map((j) => ({
  id: j.id,
  title: j.title,
  type: j.type,
  salary: j.salary,
  status: j.status,
}));
