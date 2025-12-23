export const radioGroupProps = [
  {
    name: "value",
    type: "string",
    default: "undefined",
    description: "The controlled value of the selected radio item",
  },
  {
    name: "defaultValue",
    type: "string",
    default: "undefined",
    description: "The default value for uncontrolled usage",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    default: "undefined",
    description: "Callback fired when the selected value changes",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether all radio items in the group are disabled",
  },
];

export const radioGroupItemProps = [
  {
    name: "value",
    type: "string",
    default: "required",
    description: "The unique value for this radio item",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"sm"',
    description: "The size of the radio button",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Optional label text displayed next to the radio button",
  },
  {
    name: "description",
    type: "string",
    default: "undefined",
    description: "Optional description text displayed below the label",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether this specific radio item is disabled",
  },
];

export const radioSizes = [
  {
    name: "sm",
    description: "Small radio button (16px outer, 11.2px inner)",
    useCase: "Compact forms, lists with many options",
  },
  {
    name: "md",
    description: "Medium radio button (24px outer, 16.8px inner)",
    useCase: "Standard forms, settings panels",
  },
  {
    name: "lg",
    description: "Large radio button (28px outer, 19.6px inner)",
    useCase: "Touch-friendly interfaces, prominent selections",
  },
];

export const radioStates = [
  {
    name: "Idle",
    description: "Default unselected state with gray border",
    useCase: "Initial state before user interaction",
  },
  {
    name: "Hovered",
    description: "Hover state with brand color border",
    useCase: "Visual feedback on mouse hover",
  },
  {
    name: "Active",
    description: "Selected state with brand color fill",
    useCase: "Currently selected option",
  },
  {
    name: "Disabled",
    description: "Disabled state with reduced opacity",
    useCase: "Non-interactive, locked options",
  },
];
