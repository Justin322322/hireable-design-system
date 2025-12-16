/**
 * AI Matchmaking Constants - Pipeline data
 */

import type { PipelineColumn } from "./types";

export const pipelineData: PipelineColumn[] = [
  {
    title: "Candidates",
    count: 6,
    candidates: [
      {
        name: "Isabel Reyes",
        role: "Sales Manager",
        avatar: "/images/Isabel-Reyes.svg",
        salary: "$1,750 /mo",
        experience: "2-5 years",
      },
      {
        name: "Nicola Fernandez",
        role: "Sales Manager",
        avatar: "/images/Nicolle-Fernandez.svg",
        salary: "$1,850 /mo",
        experience: "2-5 years",
      },
      {
        name: "Bianca Santos",
        role: "Sales Manager",
        avatar: "/images/Bianca-Santos.svg",
        salary: "$1,650 /mo",
        experience: "2-5 years",
      },
      {
        name: "Leandro De Leon",
        role: "Sales Manager",
        avatar: "/images/Leandro.svg",
        salary: "$1,550 /mo",
        experience: "2-5 years",
      },
      {
        name: "Zion Castillo",
        role: "Service Desk Hire",
        avatar: "/images/Zion.svg",
        salary: "$1,920 /mo",
        experience: "2-5 years",
      },
      {
        name: "Ethan Carter",
        role: "Service Desk Hire",
        avatar: "/images/Ethan-Carter.svg",
        salary: "$1,680 /mo",
        experience: "2-5 years",
      },
    ],
  },
  {
    title: "Matched",
    count: 5,
    candidates: [
      {
        name: "Marc Reyes",
        role: "Sales Manager",
        avatar: "/images/Marc-Reyes.svg",
        salary: "$1,600 /mo",
        experience: "2-5 years",
        matchStatus: "95% MATCHED",
      },
      {
        name: "Catalina Ramos",
        role: "Sales Manager",
        avatar: "/images/Catalina-Ramos.svg",
        salary: "$1,950 /mo",
        experience: "2-5 years",
        matchStatus: "98% MATCHED",
      },
      {
        name: "Michaela Reyes",
        role: "Sales Manager",
        avatar: "/images/Michaela.svg",
        salary: "$1,680 /mo",
        experience: "2-5 years",
        matchStatus: "96% MATCHED",
      },
      {
        name: "Jethro Soriano",
        role: "Sales Manager",
        avatar: "/images/Jethro-Soriano.svg",
        salary: "$1,980 /mo",
        experience: "2-5 years",
        matchStatus: "94% MATCHED",
      },
      {
        name: "Camille Mercado",
        role: "Sales Manager",
        avatar: "/images/Camille-Mercado.svg",
        salary: "$1,780 /mo",
        experience: "2-5 years",
        matchStatus: "92% MATCHED",
      },
    ],
  },
  {
    title: "Interview",
    count: 2,
    candidates: [
      {
        name: "Jacob Smith",
        role: "Sales Manager",
        avatar: "/images/Jacob-Smith.svg",
        salary: "$1,720 /mo",
        experience: "3-5 years",
      },
      {
        name: "Michael Sy",
        role: "Service Desk Hire",
        avatar: "/images/Michael-Sy.svg",
        salary: "$1,590 /mo",
        experience: "2-4 years",
      },
    ],
  },
  {
    title: "Offer Sent",
    count: 0,
    candidates: [],
  },
  {
    title: "Hired",
    count: 0,
    candidates: [],
  },
];
