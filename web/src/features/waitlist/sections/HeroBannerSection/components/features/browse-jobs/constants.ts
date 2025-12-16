import type { Job } from "./types";

export const jobsData: Job[] = [
  {
    title: "Sales Manager",
    company: "Tech Solutions, Inc.",
    budget: "$ 1,500 - $ 2,000 /mo",
    duration: "60 Days",
    experience: "Intermediate (3–5 years)",
    status: "FULL-TIME",
    matchPercentage: "96% MATCHED",
    skills: ["Client engagement", "HubSpot CRM", "Pipedrive", "Mailchimp"],
    postedTime: "Published 5 minutes ago",
    aiMatchReasons: [
      {
        category: "WORK STYLE FIT",
        description:
          "This role's structured workflows, collaborative environment, and goal-focused culture align closely with your preferred way of working.",
      },
      {
        category: "PERFORMANCE HISTORY",
        description:
          "The responsibilities listed in this job post match the strengths shown in your past performance history.",
      },
      {
        category: "JOB DESCRIPTION FIT",
        description:
          "This job's requirements closely match your background. With your skills in B2B outreach, pipeline growth, and structured execution.",
      },
    ],
    expanded: false,
  },
  {
    title: "Sales Manager",
    company: "Global Marketing Corp.",
    budget: "$ 2,000 - $ 2,500 /mo",
    duration: "90 Days",
    experience: "Senior (8+ years)",
    status: "FULL-TIME",
    matchPercentage: "92% MATCHED",
    skills: ["Sales strategy", "Zoho CRM", "Microsoft Dynamics", "Hootsuite"],
    postedTime: "Published 10 minutes ago",
    aiMatchReasons: [
      {
        category: "WORK STYLE FIT",
        description:
          "This position provides a balanced mix of clear expectations, organized processes, and team-oriented collaboration.",
      },
    ],
  },

  {
    title: "Business Development Representative",
    company: "Innovative Ideas, LLC",
    budget: "$ 1,100 - $ 1,400 /mo",
    duration: "45 Days",
    experience: "Entry-Level (0–2 years)",
    status: "FULL-TIME",
    matchPercentage: "97% MATCHED",
    skills: [
      "Prospecting",
      "Salesforce Essentials",
      "Insightly",
      "ActiveCampaign",
    ],
    postedTime: "Published 15 minutes ago",
    aiMatchReasons: [
      {
        category: "WORK STYLE FIT",
        description:
          "The organized workflows, team-oriented atmosphere, and results-driven culture of this position closely match your working style.",
      },
    ],
  },
  {
    title: "Sales Analyst",
    company: "Market Insights, Inc.",
    budget: "$ 1,300 - $ 1,700 /mo",
    duration: "30 Days",
    experience: "Advanced (5–8 years)",
    status: "FULL-TIME",
    matchPercentage: "91% MATCHED",
    skills: ["Market research", "Tableau", "QlikView", "Google Analytics"],
    postedTime: "Published 20 minutes ago",
    aiMatchReasons: [
      {
        category: "WORK STYLE FIT",
        description:
          "This position features organized workflows, a team-oriented atmosphere, and a culture centered on achieving goals.",
      },
    ],
  },
  {
    title: "Sales Coordinator",
    company: "Client Relations Group",
    budget: "$ 1,000 - $ 1,300 /mo",
    duration: "30 Days",
    experience: "Intermediate (3–5 years)",
    status: "FULL-TIME",
    matchPercentage: "95% MATCHED",
    skills: [
      "Team collaboration",
      "SalesLoft",
      "Monday.com",
      "Constant Contact",
    ],
    postedTime: "Published 25 minutes ago",
    aiMatchReasons: [
      {
        category: "WORK STYLE FIT",
        description:
          "This position includes systematic workflows, a cooperative setting, and a goal-driven culture.",
      },
    ],
  },
  {
    title: "Regional Sales Director",
    company: "Enterprise Solutions, Ltd.",
    budget: "$ 3,000 - $ 4,000 /mo",
    duration: "180 Days",
    experience: "Expert (10+ years)",
    status: "FULL-TIME",
    matchPercentage: "94% MATCHED",
    skills: [
      "Sales forecasting",
      "Oracle CRM",
      "SAP Sales Cloud",
      "SendinBlue",
    ],
    postedTime: "Published 30 minutes ago",
    aiMatchReasons: [
      {
        category: "WORK STYLE FIT",
        description:
          "This role presents structured processes, a collaborative environment, and a focus on goals.",
      },
    ],
  },
];

export const industries = [
  "Customer Support",
  "Design",
  "Education",
  "Healthcare",
  "HR & Recruiting",
  "Legal",
  "Marketing",
  "Media & Content",
  "Non-Profit",
  "Operations",
  "Sales",
  "Software / IT",
  "Telecommunications",
  "Writing & Translation",
];
