import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Guidelines",
    description: "Foundational standards for typography, color, spacing, and more.",
    href: "/guidelines",
  },
  {
    title: "Components",
    description: "Reusable UI building blocks with usage guidelines and code examples.",
    href: "/components",
  },
  {
    title: "Patterns",
    description: "Common UI patterns and best practices for complex interfaces.",
    href: "/patterns",
  },
  {
    title: "Resources",
    description: "Design tokens, accessibility guidelines, and getting started guides.",
    href: "/resources",
  },
];

export default function HomePage() {
  return (
    <div className="container max-w-5xl py-16 px-8">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Hireable Design System
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
          A comprehensive design system for building consistent, accessible, and 
          scalable user interfaces. Built with modern tooling and best practices.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/resources/getting-started">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/components">Browse Components</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
