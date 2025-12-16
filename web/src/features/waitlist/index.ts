/**
 * Waitlist Feature - Public API
 */

export {
  useClientWaitlistForm,
  useTalentWaitlistForm,
} from "./hooks/useWaitlistForm";
export type { ClientFormData, TalentFormData } from "./hooks/useWaitlistForm";
export { waitlistService } from "./services/waitlist.service";
export type {
  ClientWaitlistRequest,
  TalentWaitlistRequest,
  WaitlistApiResponse,
} from "./services/waitlist.service";

// Components
export { WaitlistPage } from "./components/WaitlistPage";
export { WaitlistSuccessContent } from "./components/WaitlistSuccessContent";

// Sections (for cross-feature use)
export { FAQSection } from "./sections/FAQSection";
export { FooterSection } from "./sections/FooterSection";
