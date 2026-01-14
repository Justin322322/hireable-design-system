export const loadingScreenProps = [
  { name: "variant", type: '"default" | "solid" | "overlay"', default: '"default"', description: "Visual style variant" },
  { name: "fullscreen", type: "boolean", default: "true", description: "Whether to cover the full screen or parent container" },
  { name: "message", type: "string", default: "undefined", description: "Optional message to display below the loader" },
  { name: "spinnerSize", type: "number", default: "120", description: "Size of the loader in pixels" },
];

export const loadingScreenVariants = [
  { name: "default", description: "Backdrop blur with 80% opacity background", useCase: "Standard full-screen loading" },
  { name: "solid", description: "Solid background (no transparency)", useCase: "When hiding content completely" },
  { name: "overlay", description: "Dark dimmed background (20% opacity)", useCase: "Modal or container loading states" },
];
