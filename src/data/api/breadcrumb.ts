export const breadcrumbProps = [
  {
    name: "items",
    type: "BreadcrumbItem[]",
    default: "required",
    description: "Array of breadcrumb items with label and optional href",
  },
  {
    name: "separator",
    type: '"chevron" | "slash"',
    default: '"chevron"',
    description: "The separator style between breadcrumb items",
  },
  {
    name: "maxItems",
    type: "number",
    default: "undefined",
    description: "Maximum number of items to display before collapsing with ellipsis",
  },
];

export const breadcrumbItemProps = [
  {
    name: "label",
    type: "string",
    default: "required",
    description: "The text label for the breadcrumb item",
  },
  {
    name: "href",
    type: "string",
    default: "undefined",
    description: "Optional URL for the breadcrumb link",
  },
];

export const breadcrumbVariants = [
  {
    name: "One",
    description: "Single breadcrumb item (current page only)",
    useCase: "Root level pages",
  },
  {
    name: "Two",
    description: "Two breadcrumb items with separator",
    useCase: "First level navigation",
  },
  {
    name: "Three",
    description: "Three breadcrumb items with separators",
    useCase: "Second level navigation",
  },
  {
    name: "Multiple",
    description: "Multiple items with ellipsis for collapsed middle items",
    useCase: "Deep navigation hierarchies",
  },
];

export const breadcrumbSeparators = [
  {
    name: "chevron",
    description: "Chevron right icon separator (default)",
    useCase: "Standard navigation breadcrumbs",
  },
  {
    name: "slash",
    description: "Forward slash separator",
    useCase: "File path or URL-style breadcrumbs",
  },
];
