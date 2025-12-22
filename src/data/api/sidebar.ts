export const sidebarProps = [
  {
    name: "variant",
    type: '"talent" | "employer" | "admin"',
    default: '"talent"',
    description: "The sidebar variant based on user role",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    description: "Additional CSS classes to apply",
  },
];

export const sidebarVariants = [
  {
    name: "talent",
    description: "Sidebar for talent/job seeker users",
    useCase: "Job board, messages, trials navigation",
  },
  {
    name: "employer",
    description: "Sidebar for employer users",
    useCase: "Discover talent, jobs, messages, trials navigation",
  },
  {
    name: "admin",
    description: "Sidebar for admin users with expanded menu",
    useCase: "User management, payments, compliance, settings",
  },
];

export const sidebarMenuItemProps = [
  {
    name: "icon",
    type: "React.ReactNode",
    default: "required",
    description: "Icon element to display",
  },
  {
    name: "label",
    type: "string",
    default: "required",
    description: "Menu item label text",
  },
  {
    name: "href",
    type: "string",
    default: "undefined",
    description: "Navigation link URL",
  },
  {
    name: "active",
    type: "boolean",
    default: "false",
    description: "Whether the menu item is currently active",
  },
  {
    name: "expandable",
    type: "boolean",
    default: "false",
    description: "Whether the menu item has a submenu",
  },
];
