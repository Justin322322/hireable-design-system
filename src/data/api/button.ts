// Button API Documentation Data

export const buttonProps = [
  { name: "variant", type: "string", default: '"default"', description: "Visual style variant" },
  { name: "size", type: "string", default: '"default"', description: "Button size" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable the button" },
  { name: "asChild", type: "boolean", default: "false", description: "Render as child element" },
];

export const buttonVariants = [
  { name: "default", description: "Primary blue button", useCase: "Main actions" },
  { name: "secondary", description: "Gray background button", useCase: "Secondary actions" },
  { name: "outline", description: "Border only button", useCase: "Tertiary actions" },
  { name: "ghost", description: "No background button", useCase: "Subtle actions" },
  { name: "link", description: "Text link style", useCase: "Navigation links" },
  { name: "destructive", description: "Red danger button", useCase: "Delete/remove actions" },
];

export const buttonSizes = [
  { name: "sm", description: "Small size", useCase: "Compact UI, inline actions" },
  { name: "default", description: "Default size", useCase: "Standard buttons" },
  { name: "lg", description: "Large size", useCase: "Prominent CTAs" },
  { name: "xl", description: "Extra large size", useCase: "Hero sections" },
  { name: "icon", description: "Square icon button", useCase: "Icon-only buttons" },
];
