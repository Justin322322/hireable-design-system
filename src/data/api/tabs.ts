// Tabs API Documentation Data

export const tabsComponents = [
  { name: "Tabs", description: "Root container with defaultValue prop" },
  { name: "TabsList", description: "Container for tab triggers" },
  { name: "TabsTrigger", description: "Clickable tab button with value prop" },
  { name: "TabsContent", description: "Content panel with matching value prop" },
];

export const tabsProps = [
  { name: "value", type: "string", description: "Controlled active tab value" },
  { name: "defaultValue", type: "string", description: "Default active tab value" },
  { name: "onValueChange", type: "function", description: "Callback when active tab changes" },
  { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Orientation of the tabs" },
  { name: "activationMode", type: '"automatic" | "manual"', default: '"automatic"', description: "How tabs are activated on focus" },
];

export const tabsTriggerProps = [
  { name: "value", type: "string", default: "required", description: "Unique value for the tab" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable the tab trigger" },
];
