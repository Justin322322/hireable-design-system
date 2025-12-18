import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const resources = [
  {
    title: "Getting Started",
    description: "Installation, setup, and basic usage of the design system.",
    href: "/resources/getting-started",
  },
  {
    title: "Design Tokens",
    description: "Color, typography, and spacing tokens for consistent styling.",
    href: "/resources/design-tokens",
  },
  {
    title: "Accessibility",
    description: "Guidelines for building accessible interfaces.",
    href: "/resources/accessibility",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Resources</h1>
        <p className="text-lg text-muted-foreground">
          Guides, documentation, and tools to help you get the most out of the design system.
        </p>
      </div>

      <div className="grid gap-4">
        {resources.map((resource) => (
          <Link key={resource.href} href={resource.href}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
