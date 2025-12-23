// Dropdown/Select API Documentation Data

export interface PropDoc {
  name: string;
  type: string;
  default: string;
  description: string;
}

export const selectProps: PropDoc[] = [
  { name: "value", type: "string", default: "-", description: "The controlled value of the select" },
  { name: "defaultValue", type: "string", default: "-", description: "The default value" },
  { name: "onValueChange", type: "(value: string) => void", default: "-", description: "Callback when value changes" },
  { name: "disabled", type: "boolean", default: "false", description: "Whether the select is disabled" },
  { name: "placeholder", type: "string", default: "-", description: "Placeholder text when no value selected" },
];

export const selectTriggerProps = [
  { name: "className", type: "string", default: "-", description: "Additional CSS classes" },
  { name: "children", type: "ReactNode", default: "-", description: "Trigger content (typically SelectValue)" },
];

export const selectItemProps = [
  { name: "value", type: "string", default: "-", description: "The value of the item (required)" },
  { name: "disabled", type: "boolean", default: "false", description: "Whether the item is disabled" },
  { name: "children", type: "ReactNode", default: "-", description: "Item content" },
];
