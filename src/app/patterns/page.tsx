import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const patterns = [
  {
    title: "Forms",
    description: "Best practices for form layout, validation, and error handling.",
    href: "/patterns/forms",
  },
  {
    title: "Navigation",
    description: "Patterns for navigation menus, breadcrumbs, and wayfinding.",
    href: "/patterns/navigation",
  },
  {
    title: "Data Display",
    description: "Tables, lists, and other patterns for displaying data.",
    href: "/patterns/data-display",
  },
];

export default function PatternsPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Patterns</h1>
        <p className="text-lg text-muted-foreground">
          Common UI patterns and best practices for building consistent, 
          user-friendly interfaces.
        </p>
      </div>

      <div className="grid gap-4">
        {patterns.map((pattern) => (
          <Link key={pattern.href} href={pattern.href}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">{pattern.title}</CardTitle>
                <CardDescription>{pattern.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
