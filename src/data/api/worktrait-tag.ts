export const worktraitTagProps = [
  {
    name: "variant",
    type: '"decision-making" | "adaptability" | "responsiveness" | "time-management" | "cooperativeness" | "communication"',
    default: '"decision-making"',
    description: "The worktrait category that determines the background color",
  },
  {
    name: "size",
    type: '"lg" | "md"',
    default: '"lg"',
    description: "The size of the tag (Large: 14px text, Medium: 12px text)",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "The text label displayed in the tag (required)",
  },
  {
    name: "icon",
    type: "ReactNode",
    default: "undefined",
    description: "Optional icon element displayed before the label",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    description: "Additional CSS classes to apply to the tag",
  },
];

export const worktraitTagVariants = [
  {
    name: "decision-making",
    color: "#66C8FF",
    description: "Azure blue background for decision-making trait",
    icon: "lightbulb",
  },
  {
    name: "adaptability",
    color: "#FF739A",
    description: "Radical red/rose background for adaptability trait",
    icon: "autorenew",
  },
  {
    name: "responsiveness",
    color: "#FF73D1",
    description: "Razzle dazzle rose/magenta background for responsiveness trait",
    icon: "flash_on",
  },
  {
    name: "time-management",
    color: "#FFA366",
    description: "Artyclick orange background for time management trait",
    icon: "schedule",
  },
  {
    name: "cooperativeness",
    color: "#C86BFA",
    description: "Purple background for cooperativeness trait",
    icon: "handshake",
  },
  {
    name: "communication",
    color: "#B4FFFF",
    description: "Cyan background for communication trait",
    icon: "forum",
  },
];

export const worktraitTagSizes = [
  {
    name: "lg",
    description: "Large size with 14px uppercase text and 16px icons",
    dimensions: "Auto width × 33px height",
    padding: "8px vertical, 12px horizontal",
    useCase: "Primary display, prominent categorization",
  },
  {
    name: "md",
    description: "Medium size with 12px text and 14px icons",
    dimensions: "Auto width × 30px height",
    padding: "8px vertical, 12px horizontal",
    useCase: "Compact lists, secondary displays",
  },
];

export const worktraitTagDesignSpecs = {
  borderRadius: "100px (fully rounded)",
  gap: "4px between icon and text",
  textColor: "#212121 (primary text)",
  iconColor: "#212121 (primary text)",
  typography: {
    large: "Nunito Sans Medium 14px, uppercase, 120% line-height, 0.2px letter-spacing",
    medium: "Inter Regular 12px, 120% line-height, 0.2px letter-spacing",
  },
  iconSizes: {
    large: "16px × 16px",
    medium: "14px × 14px",
  },
};
