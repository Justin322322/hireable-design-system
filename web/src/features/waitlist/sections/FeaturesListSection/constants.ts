import type {
  AvailabilitySlot,
  CalendarOption,
  SuggestedAction,
} from "./types";

export const calendarOptions: CalendarOption[] = [
  {
    icon: "/icons/icon-google-calendar.svg",
    name: "Google Calendar",
    showConnect: true,
  },
  {
    icon: "/icons/icon-microsoft-outlook.svg",
    name: "Microsoft Outlook",
    showConnect: false,
  },
];

export const availabilitySlots: AvailabilitySlot[] = [
  { day: "M", startTime: "9:00 am", endTime: "4:30 pm" },
  { day: "T", startTime: "9:30 am", endTime: "5:00 pm" },
  { day: "W", startTime: "10:00 am", endTime: "6:00 pm" },
];

export const checkinNames = [
  "Juan Dela Cruz",
  "Maria Santos",
  "Carlos Reyes",
  "Ana Garcia",
  "Miguel Torres",
];

export const suggestedActions: SuggestedAction[] = [
  {
    id: 1,
    title: "Schedule a check-in call",
    description: "Discuss workload concerns and offer support",
  },
  {
    id: 2,
    title: "Adjust project timeline",
    description: "Extend deadlines to reduce pressure",
  },
  {
    id: 3,
    title: "Provide additional resources",
    description: "Assign a junior developer to help with tasks",
  },
];

export const candidateProfiles = [
  {
    id: 3,
    name: "Jethro Soriano",
    role: "Graphic Designer",
    salary: "$1,980 /mo",
    experience: "2-5 years",
    match: "84% MATCHED",
    avatar: "/images/Jethro-Soriano.svg",
  },
  {
    id: 2,
    name: "Michaela Reyes",
    role: "Sales Manager",
    salary: "$1,680 /mo",
    experience: "2-5 years",
    match: "86% MATCHED",
    avatar: "/images/Michaela.svg",
  },
  {
    id: 1,
    name: "Camille Mercado",
    role: "Sales Manager",
    salary: "$1,780 /mo",
    experience: "2-5 years",
    match: "82% MATCHED",
    avatar: "/images/Camille-Mercado.svg",
  },
];

export const TEXT_VARIANTS = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

export const TITLE_VARIANTS = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;
