/**
 * FeaturesSection Constants
 *
 * Centralized content data for the features section cards.
 */

// ============================================
// LastCard Constants
// ============================================

// Talent role content data for LastCard
export const LAST_CARD_TALENT_CONTENT = {
  title: "Get paid during test period",
  description:
    "30-60-90 day test periods with full pay while you both figure out if it's a good fit.",
};

// Client role content data for LastCard
export const LAST_CARD_CLIENT_CONTENT = {
  title: "Test before you commit.",
  description: 'End the "seemed great in interviews, terrible at work" cycle.',
};

// ============================================
// FirstCard Constants
// ============================================

// Candidate card data for carousel
export const CANDIDATE_CARDS = [
  {
    name: "Camille Mercado",
    role: "Marketing Specialist",
    salary: "$1,780 /mo",
    experience: "2-5 years",
    match: "82% MATCHED",
    avatar: "/images/Camille-Mercado.svg",
    position: "-top-8",
  },
  {
    name: "Jethro Soriano",
    role: "Graphic Designer",
    salary: "$1,980 /mo",
    experience: "2-5 years",
    match: "84% MATCHED",
    avatar: "/images/Jethro-Soriano.svg",
    position: "top-[214px]",
  },
];

// Initial cards with additional Michaela card
export const INITIAL_CARDS = [
  ...CANDIDATE_CARDS.map((card, idx) => ({ ...card, id: idx })),
  {
    name: "Michaela Reyes",
    role: "Sales Manager",
    salary: "$1,680 /mo",
    experience: "2-5 years",
    match: "86% MATCHED",
    avatar: "/images/Michaela.svg",
    id: 2,
  },
];

// Talent role content data for FirstCard
export const FIRST_CARD_TALENT_CONTENT = {
  title: "Book calls instantly.",
  description: 'No more "let me check my calendar" back-and-forth.',
};

// Client role content data for FirstCard
export const FIRST_CARD_CLIENT_CONTENT = {
  title: "See every candidate. Miss nothing.",
  description: 'No more "Wait, who was that designer from last week?" moments.',
};

// Card type definition
export interface CandidateCardData {
  name: string;
  role: string;
  salary: string;
  experience: string;
  match: string;
  avatar: string;
  position?: string;
  id: number;
}
