import type { CandidateProfile, CandidateSummary } from "@/types/api-contracts";

export const mockCandidates: CandidateProfile[] = [
  {
    id: "cand-001",
    name: "Juan Dela Cruz",
    role: "Sales Manager",
    avatar: "/images/juan-delacruz.svg",
    salary: "$4,000 /mo",
    experience: "5-8 years",
    location: "Manila, Philippines",
    status: "active",
    activityTitle: "Last active 2 hours ago",
    application: {
      position: "Senior Sales Manager",
      appliedDate: "2025-12-15T10:30:00Z",
    },
    aiMatch: {
      percentage: 85,
      workStyleFit: "Strong alignment with collaborative team environments",
      performanceHistory: "Consistently exceeded sales targets by 20%+",
      jobDescriptionFit: "Matches 8 of 10 required qualifications",
    },
    about: "Experienced sales professional with a proven track record in B2B enterprise sales. Passionate about building high-performing teams and driving revenue growth.",
    skills: ["B2B Sales", "Team Leadership", "CRM", "Negotiation", "Pipeline Management"],
    education: [
      { id: "edu-1", degree: "MBA", school: "Ateneo de Manila University", years: "2018-2020" },
      { id: "edu-2", degree: "BS Business Administration", school: "University of the Philippines", years: "2010-2014" },
    ],
    certificates: [
      { id: "cert-1", name: "Certified Sales Professional", issuer: "Sales Management Association", year: "2021" },
    ],
    links: {
      linkedin: "https://linkedin.com/in/juandelacruz",
      portfolio: "https://juandelacruz.com",
    },
    personalMessage: "I'm excited about this opportunity to lead your sales team and drive growth in the APAC region.",
  },
  {
    id: "cand-002",
    name: "Maria Santos",
    role: "Product Designer",
    avatar: "/images/maria-santos.svg",
    salary: "$3,500 /mo",
    experience: "3-5 years",
    location: "Cebu, Philippines",
    status: "active",
    activityTitle: "Last active 1 day ago",
    application: {
      position: "Senior Product Designer",
      appliedDate: "2025-12-14T14:00:00Z",
    },
    aiMatch: {
      percentage: 92,
      workStyleFit: "Excellent fit for remote-first design teams",
      performanceHistory: "Led redesign that improved conversion by 35%",
      jobDescriptionFit: "Matches 9 of 10 required qualifications",
    },
    about: "Creative product designer specializing in user-centered design and design systems. Love turning complex problems into simple, beautiful solutions.",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "UI/UX"],
    education: [
      { id: "edu-1", degree: "BS Industrial Design", school: "De La Salle University", years: "2015-2019" },
    ],
    certificates: [
      { id: "cert-1", name: "Google UX Design Certificate", issuer: "Google", year: "2022" },
    ],
    links: {
      linkedin: "https://linkedin.com/in/mariasantos",
      portfolio: "https://mariasantos.design",
    },
    personalMessage: "I'd love to help build a world-class design system for your product.",
  },
  {
    id: "cand-003",
    name: "Carlos Reyes",
    role: "Full Stack Developer",
    avatar: "/images/carlos-reyes.svg",
    salary: "$5,000 /mo",
    experience: "5-8 years",
    location: "Davao, Philippines",
    status: "inactive",
    activityTitle: "No recent activity",
    application: {
      position: "Senior Full Stack Developer",
      appliedDate: "2025-12-10T09:00:00Z",
    },
    aiMatch: {
      percentage: 78,
      workStyleFit: "Prefers async communication and deep work",
      performanceHistory: "Built scalable systems handling 1M+ users",
      jobDescriptionFit: "Matches 7 of 10 required qualifications",
    },
    about: "Full stack developer with expertise in React, Node.js, and cloud infrastructure. Passionate about clean code and scalable architecture.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "GraphQL"],
    education: [
      { id: "edu-1", degree: "BS Computer Science", school: "Mapua University", years: "2012-2016" },
    ],
    certificates: [
      { id: "cert-1", name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    ],
    links: {
      linkedin: "https://linkedin.com/in/carlosreyes",
    },
    personalMessage: "Looking forward to contributing to your engineering team.",
  },
];

export const mockCandidateSummaries: CandidateSummary[] = mockCandidates.map((c) => ({
  id: c.id,
  name: c.name,
  role: c.role,
  avatar: c.avatar,
  salary: c.salary,
  experience: c.experience,
  matchPercentage: c.aiMatch.percentage,
  status: c.status,
}));
