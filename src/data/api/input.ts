// Input API Documentation Data

export const inputProps = [
  { name: "type", type: "string", default: '"text"', description: "Input type (text, email, password, number, etc.)" },
  { name: "placeholder", type: "string", description: "Placeholder text shown when empty" },
  { name: "value", type: "string", description: "Controlled input value" },
  { name: "defaultValue", type: "string", description: "Default value for uncontrolled input" },
  { name: "onChange", type: "function", description: "Callback when value changes" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable the input" },
  { name: "required", type: "boolean", default: "false", description: "Mark input as required" },
  { name: "readOnly", type: "boolean", default: "false", description: "Make input read-only" },
  { name: "maxLength", type: "number", description: "Maximum character length" },
  { name: "pattern", type: "string", description: "Regex pattern for validation" },
];

export const inputTypes = [
  { name: "text", description: "Single-line text input", useCase: "Names, titles, general text" },
  { name: "email", description: "Email address input with validation", useCase: "Email fields" },
  { name: "password", description: "Masked text input", useCase: "Password fields" },
  { name: "number", description: "Numeric input with spinners", useCase: "Quantities, amounts" },
  { name: "tel", description: "Phone number input", useCase: "Phone fields" },
  { name: "search", description: "Search input with clear button", useCase: "Search bars" },
];
