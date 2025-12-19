// Select API Documentation Data

export const selectComponents = [
  { name: "Select", description: "Root container" },
  { name: "SelectTrigger", description: "Button that opens the dropdown" },
  { name: "SelectValue", description: "Displays selected value or placeholder" },
  { name: "SelectContent", description: "Dropdown content container" },
  { name: "SelectItem", description: "Individual option item" },
  { name: "SelectGroup", description: "Groups related items together" },
  { name: "SelectLabel", description: "Label for a group of items" },
];

export const selectProps = [
  { name: "value", type: "string", description: "Controlled selected value" },
  { name: "defaultValue", type: "string", description: "Default selected value" },
  { name: "onValueChange", type: "function", description: "Callback when selection changes" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable the select" },
  { name: "required", type: "boolean", default: "false", description: "Mark as required for forms" },
  { name: "name", type: "string", description: "Name for form submission" },
];

export const selectItemProps = [
  { name: "value", type: "string", default: "required", description: "Unique value for the item" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable the item" },
  { name: "textValue", type: "string", description: "Text for typeahead search" },
];
