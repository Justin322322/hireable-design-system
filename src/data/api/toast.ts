// Toast API Documentation Data

export const toastProps = [
  { name: "title", type: "string", description: "Toast title text" },
  { name: "description", type: "string", description: "Toast description/body text" },
  { name: "variant", type: "string", default: '"default"', description: "Visual style variant" },
  { name: "duration", type: "number", default: "5000", description: "Auto-dismiss time in milliseconds" },
  { name: "action", type: "ReactNode", description: "Action button element" },
  { name: "onOpenChange", type: "function", description: "Callback when toast visibility changes" },
];

export const toastVariants = [
  { name: "default", description: "Neutral notification style", useCase: "General notifications" },
  { name: "success", description: "Green success indicator", useCase: "Successful operations" },
  { name: "destructive", description: "Red error indicator", useCase: "Errors and failures" },
  { name: "warning", description: "Amber warning indicator", useCase: "Warnings and cautions" },
  { name: "info", description: "Blue informational indicator", useCase: "Informational messages" },
];

export const useToastReturns = [
  { name: "toast", type: "function", description: "Function to trigger a toast notification" },
  { name: "toasts", type: "Toast[]", description: "Array of active toast objects" },
  { name: "dismiss", type: "function", description: "Function to dismiss a specific toast by ID" },
];
