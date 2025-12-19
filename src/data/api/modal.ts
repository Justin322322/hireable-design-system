// Modal/Dialog API Documentation Data

export const dialogComponents = [
  { name: "Dialog", description: "Root container" },
  { name: "DialogTrigger", description: "Element that opens the modal" },
  { name: "DialogContent", description: "Modal content container" },
  { name: "DialogHeader", description: "Header section" },
  { name: "DialogTitle", description: "Modal title" },
  { name: "DialogDescription", description: "Modal description" },
  { name: "DialogFooter", description: "Footer with actions" },
];

export const dialogProps = [
  { name: "open", type: "boolean", description: "Controlled open state" },
  { name: "defaultOpen", type: "boolean", default: "false", description: "Default open state" },
  { name: "onOpenChange", type: "function", description: "Callback when open state changes" },
  { name: "modal", type: "boolean", default: "true", description: "Whether to render as modal with backdrop" },
];

export const dialogContentProps = [
  { name: "forceMount", type: "boolean", description: "Force mounting for animation control" },
  { name: "onEscapeKeyDown", type: "function", description: "Handler for escape key press" },
  { name: "onPointerDownOutside", type: "function", description: "Handler for clicks outside content" },
  { name: "onInteractOutside", type: "function", description: "Handler for any interaction outside" },
];
