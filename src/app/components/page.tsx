import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const components = [
  {
    title: "Badge",
    description: "Highlight important information and show status indicators.",
    href: "/components/badge",
  },
  {
    title: "Button",
    description: "Trigger actions and events with various styles and states.",
    href: "/components/button",
  },
  {
    title: "Card",
    description: "Container for grouping related content and actions.",
    href: "/components/card",
  },
  {
    title: "Input",
    description: "Text input fields for forms and data entry.",
    href: "/components/input",
  },
  {
    title: "Select",
    description: "Dropdown selection from a list of options.",
    href: "/components/select",
  },
  {
    title: "Tabs",
    description: "Organize content into switchable panels.",
    href: "/components/tabs",
  },
  {
    title: "Toggle",
    description: "Two-state button for on/off and binary choices.",
    href: "/components/toggle",
  },
  {
    title: "Modal",
    description: "Overlay dialogs for focused interactions.",
    href: "/components/modal",
  },
  {
    title: "Toast",
    description: "Brief notifications that appear temporarily.",
    href: "/components/toast",
  },
  {
    title: "Avatar",
    description: "Visual representation of a user or entity.",
    href: "/components/avatar",
  },
  {
    title: "Separator",
    description: "Visual divider between content sections.",
    href: "/components/separator",
  },
  {
    title: "Navigation Menu",
    description: "List of links for site navigation.",
    href: "/components/navigation-menu",
  },
  {
    title: "Drawer",
    description: "A panel that slides in from the edge of the screen.",
    href: "/components/drawer",
  },
  {
    title: "Chart",
    description: "Data visualizations for trends and comparisons.",
    href: "/components/chart",
  },
  {
    title: "Kanban",
    description: "Board layout for workflow and pipeline visualization.",
    href: "/components/kanban",
  },
];

export default function ComponentsPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Components</h1>
        <p className="text-lg text-muted-foreground">
          Reusable UI components built with accessibility and flexibility in mind. 
          Each component includes usage guidelines, examples, and code snippets.
        </p>
      </div>

      <div className="grid gap-4">
        {components.map((component) => (
          <Link key={component.href} href={component.href}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">{component.title}</CardTitle>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
