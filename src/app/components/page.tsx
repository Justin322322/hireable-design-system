import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const components = [
  {
    title: "Badge",
    description: "Highlight important information and show status indicators.",
    href: "/components/badge",
    status: "stable",
  },
  {
    title: "Button",
    description: "Trigger actions and events with various styles and states.",
    href: "/components/button",
    status: "stable",
  },
  {
    title: "Card",
    description: "Container for grouping related content and actions.",
    href: "/components/card",
    status: "stable",
  },
  {
    title: "Input",
    description: "Text input fields for forms and data entry.",
    href: "/components/input",
    status: "stable",
  },
  {
    title: "Select",
    description: "Dropdown selection from a list of options.",
    href: "/components/select",
    status: "stable",
  },
  {
    title: "Tabs",
    description: "Organize content into switchable panels.",
    href: "/components/tabs",
    status: "stable",
  },
  {
    title: "Toggle",
    description: "Two-state button for on/off and binary choices.",
    href: "/components/toggle",
    status: "stable",
  },
  {
    title: "Modal",
    description: "Overlay dialogs for focused interactions.",
    href: "/components/modal",
    status: "draft",
  },
  {
    title: "Toast",
    description: "Brief notifications that appear temporarily.",
    href: "/components/toast",
    status: "draft",
  },
  {
    title: "Avatar",
    description: "Visual representation of a user or entity.",
    href: "/components/avatar",
    status: "draft",
  },
  {
    title: "Separator",
    description: "Visual divider between content sections.",
    href: "/components/separator",
    status: "draft",
  },
  {
    title: "Navigation Menu",
    description: "List of links for site navigation.",
    href: "/components/navigation-menu",
    status: "draft",
  },
  {
    title: "Drawer",
    description: "A panel that slides in from the edge of the screen.",
    href: "/components/drawer",
    status: "draft",
  },
  {
    title: "Chart",
    description: "Data visualizations for trends and comparisons.",
    href: "/components/chart",
    status: "draft",
  },
];

const statusColors: Record<string, "default" | "secondary" | "outline"> = {
  stable: "outline",
  draft: "secondary",
  deprecated: "secondary",
};

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
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{component.title}</CardTitle>
                  {component.status !== "stable" && (
                    <Badge variant={statusColors[component.status]}>
                      {component.status}
                    </Badge>
                  )}
                </div>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
