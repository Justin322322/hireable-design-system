export const checkboxProps = [
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"sm"',
    description: "The size of the checkbox",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Optional label text displayed next to the checkbox",
  },
  {
    name: "checked",
    type: "boolean",
    default: "false",
    description: "Whether the checkbox is checked",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the checkbox is disabled",
  },
  {
    name: "onChange",
    type: "(checked: boolean) => void",
    default: "undefined",
    description: "Callback fired when the checkbox state changes, receives the new checked value",
  },
];

export const checkboxSizes = [
  {
    name: "sm",
    description: "Small checkbox (16px)",
    useCase: "Compact forms, lists with many items",
  },
  {
    name: "md",
    description: "Medium checkbox (24px)",
    useCase: "Standard forms, settings panels",
  },
  {
    name: "lg",
    description: "Large checkbox (28px)",
    useCase: "Touch-friendly interfaces, prominent selections",
  },
];

export const checkboxStates = [
  {
    name: "Idle",
    description: "Default unchecked state with gray border",
    useCase: "Initial state before user interaction",
  },
  {
    name: "Hovered",
    description: "Hover state with darker border for visual feedback",
    useCase: "Visual feedback on mouse hover",
  },
  {
    name: "Active",
    description: "Checked state with blue background and white checkmark",
    useCase: "Selected/enabled option",
  },
  {
    name: "Disabled",
    description: "Disabled state with gray background and muted checkmark",
    useCase: "Non-interactive, locked options",
  },
];
