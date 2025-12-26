import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { sidebarNav, type NavItem } from "@/config/docs";

const componentsSection = sidebarNav.components;

function ComponentCard({ component }: { component: NavItem }) {
  const Icon = component.icon;
  return (
    <Link href={component.href} className="h-full">
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Icon className="size-5 shrink-0 text-icon" />
            {component.label}
          </CardTitle>
          <CardDescription>
            {component.description || ""}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

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

      {/* Render grouped components by category */}
      {componentsSection.groups?.map((group) => (
        <section key={group.category} className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">{group.category}</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {group.items.map((component) => (
              <ComponentCard key={component.href} component={component} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
