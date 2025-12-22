// Button API Documentation Data

export const buttonProps = [
  { name: "variant", type: "string", default: '"default"', description: "Visual style variant" },
  { name: "size", type: "string", default: '"default"', description: "Button size" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable the button" },
  { name: "asChild", type: "boolean", default: "false", description: "Render as child element" },
];

export const buttonVariants = [
  { name: "default / primary", description: "Blue background (#00A7F8), white text", useCase: "Main actions, CTAs" },
  { name: "secondary", description: "Light blue tint (#CCEDFF), dark blue text (#006593)", useCase: "Important but secondary actions" },
  { name: "tertiary", description: "White background, gray border (#C3C3C3), dark text (#212121)", useCase: "Low-emphasis actions" },
  { name: "destructive", description: "Red danger button", useCase: "Delete/remove actions" },
  { name: "outline", description: "Alias for tertiary style", useCase: "Tertiary actions" },
  { name: "ghost", description: "Transparent background, hover state only", useCase: "Subtle actions" },
  { name: "link", description: "Text link style with underline on hover", useCase: "Navigation links" },
];

export const buttonSizes = [
  { name: "lg", description: "Large - 48px height", useCase: "Prominent CTAs, hero sections" },
  { name: "default / base", description: "Base - 44px height", useCase: "Standard buttons" },
  { name: "md", description: "Medium - 40px height", useCase: "Compact primary actions" },
  { name: "sm", description: "Small - 36px height", useCase: "Inline actions, compact UI" },
  { name: "icon-lg", description: "Large circular icon - 48x48px", useCase: "Icon-only large buttons" },
  { name: "icon-base", description: "Base circular icon - 44x44px", useCase: "Icon-only default buttons" },
  { name: "icon-md", description: "Medium circular icon - 40x40px", useCase: "Icon-only medium buttons" },
  { name: "icon-sm", description: "Small circular icon - 36x36px", useCase: "Icon-only small buttons" },
  { name: "icon", description: "Default circular icon - 40x40px", useCase: "Legacy icon-only buttons" },
];
