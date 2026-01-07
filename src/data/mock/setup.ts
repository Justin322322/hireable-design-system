/**
 * Setup/Onboarding Mock Data
 * Used for checklist cards, complete setup modals, etc.
 */

export interface SetupItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: "employer" | "talent";
  order: number;
}

export interface OnboardingProgress {
  userId: string;
  userType: "employer" | "talent";
  completedItems: string[];
  totalItems: number;
  percentComplete: number;
}

// Employer setup items
export const mockEmployerSetupItems: SetupItem[] = [
  {
    id: "company-profile",
    title: "Add company profile",
    description: "Upload your logo",
    completed: false,
    category: "employer",
    order: 1,
  },
  {
    id: "company-description",
    title: "Add company description",
    description: "Tell talents about your company",
    completed: false,
    category: "employer",
    order: 2,
  },
  {
    id: "billing",
    title: "Set up billing method",
    description: "Add payment details required to start tests",
    completed: false,
    category: "employer",
    order: 3,
  },
  {
    id: "post-job",
    title: "Post a job",
    description: "Create your first job post",
    completed: false,
    category: "employer",
    order: 4,
  },
];

// Talent setup items
export const mockTalentSetupItems: SetupItem[] = [
  {
    id: "profile-photo",
    title: "Add profile photo",
    description: "Upload a photo to build trust with clients",
    completed: false,
    category: "talent",
    order: 1,
  },
  {
    id: "bio",
    title: "Add bio",
    description: "Write about yourself and your experience",
    completed: false,
    category: "talent",
    order: 2,
  },
  {
    id: "links",
    title: "Add links",
    description: "Link your portfolio, website, or profiles",
    completed: false,
    category: "talent",
    order: 3,
  },
  {
    id: "references",
    title: "Add references",
    description: "Add contact and background to link",
    completed: false,
    category: "talent",
    order: 4,
  },
  {
    id: "payout",
    title: "Set up payout method",
    description: "Add payout method to receive payments",
    completed: false,
    category: "talent",
    order: 5,
  },
  {
    id: "verify-identity",
    title: "Verify identity",
    description: "Verify your identification for billing",
    completed: false,
    category: "talent",
    order: 6,
  },
  {
    id: "tax-responsibility",
    title: "Acknowledge tax responsibility",
    description: "Confirm tax obligations for your work",
    completed: false,
    category: "talent",
    order: 7,
  },
];

// Sample progress states
export const mockEmployerProgress: OnboardingProgress = {
  userId: "emp-001",
  userType: "employer",
  completedItems: ["company-profile"],
  totalItems: 4,
  percentComplete: 25,
};

export const mockTalentProgress: OnboardingProgress = {
  userId: "talent-001",
  userType: "talent",
  completedItems: ["profile-photo", "bio"],
  totalItems: 7,
  percentComplete: 29,
};
