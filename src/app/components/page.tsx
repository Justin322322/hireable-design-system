import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sidebarNav } from "@/config/docs";

// Component descriptions mapped by href
const componentDescriptions: Record<string, string> = {
  "/components/button": "Trigger actions and events with various styles and states.",
  "/components/card": "Container for grouping related content and actions.",
  "/components/input": "Text input fields for forms and data entry.",
  "/components/select": "Dropdown selection from a list of options.",
  "/components/tabs": "Organize content into switchable panels.",
  "/components/dialogue": "Overlay dialogs for focused interactions.",
  "/components/toast": "Brief notifications that appear temporarily.",
  "/components/badge": "Highlight important information and show status indicators.",
  "/components/breadcrumb": "Navigation trail showing the user's location in the site hierarchy.",
  "/components/toggle": "Two-state button for on/off and binary choices.",
  "/components/checkbox": "Selection control for multiple choices.",
  "/components/radio-button": "Single selection from a set of mutually exclusive options.",
  "/components/sidebar": "Collapsible navigation panel for app layouts.",
  "/components/avatar": "Visual representation of a user or entity.",
  "/components/separator": "Visual divider between content sections.",
  "/components/navigation-menu": "List of links for site navigation.",
  "/components/drawer": "A panel that slides in from the edge of the screen.",
  "/components/chart": "Data visualizations for trends and comparisons.",
  "/components/kanban": "Board layout for workflow and pipeline visualization.",
};

// Get all component items except the "Overview" entry
const components = sidebarNav.components.items.filter(
  (item) => item.href !== "/components"
);

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

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {components.map((component) => {
          const Icon = component.icon;
          return (
            <Link key={component.href} href={component.href} className="h-full">
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon className="size-5 shrink-0 text-icon" />
                    {component.label}
                  </CardTitle>
                  <CardDescription>{componentDescriptions[component.href]}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
