// Avatar API Documentation Data

export const avatarComponents = [
  { name: "Avatar", description: "Root container element" },
  { name: "AvatarImage", description: "Image element with loading states" },
  { name: "AvatarFallback", description: "Fallback content when image fails" },
];

export const avatarImageProps = [
  { name: "src", type: "string", description: "Image source URL" },
  { name: "alt", type: "string", description: "Alt text for accessibility" },
  { name: "onLoadingStatusChange", type: "function", description: "Callback for loading state changes" },
];

export const avatarFallbackProps = [
  { name: "delayMs", type: "number", default: "600", description: "Delay before showing fallback (ms)" },
];
