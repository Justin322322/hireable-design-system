/**
 * TalentChatMessages Constants
 */

import type { ConversationCard } from "./types";

export const CONVERSATION_CARDS: ConversationCard[] = [
  {
    id: 1,
    name: "Marc Reyes",
    message: "Given research time, can we adjust to 8 posts/week?",
    avatar: "/images/Marc-Reyes.svg",
    bgColor: "#D2D8DB",
  },
  {
    id: 2,
    name: "Ethan Carter",
    message: "8 posts/week is fine. I'm going to adjust the contract.",
    avatar: "/images/Ethan-Carter.svg",
    bgColor: "#D5D5D5",
  },
  {
    id: 3,
    name: "Marc Reyes",
    message: "Thanks! What about the revision policy?",
    avatar: "/images/Marc-Reyes.svg",
    bgColor: "#D2D8DB",
  },
  {
    id: 4,
    name: "Ethan Carter",
    message: "Fantastic — let's start next Monday!",
    avatar: "/images/Ethan-Carter.svg",
    bgColor: "#D5D5D5",
  },
  {
    id: 5,
    name: "Marc Reyes",
    message: "Thanks, looking forward to hitting the ground running.",
    avatar: "/images/Marc-Reyes.svg",
    bgColor: "#D2D8DB",
  },
];

// Animation timing constants
export const CARD_DIMENSIONS = {
  width: 289,
  height: 81,
  topCardY: 25,
  bottomCardY: 115,
  offScreenX: 395,
};

export const ANIMATION_TIMING = {
  enterDuration: 0.4,
  resetDuration: 0.5,
  card2EnterDelay: 0.7,
  card3EnterDelay: 1.6,
  card4EnterDelay: 2.5,
  card5EnterDelay: 3.4,
};

export const STACK_CONFIG = {
  stackOffset: 12,
  scaleDecrement: 0.03,
};

export const CARD_BASE_STYLE = {
  background:
    "radial-gradient(150.17% 150.17% at 50% 50%, #FFFFFF 0%, #E1E1E1 100%)",
};
