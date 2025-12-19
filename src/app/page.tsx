import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="container max-w-3xl py-16 px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Hireable Design System
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
          A comprehensive design system for building consistent, accessible, and 
          scalable user interfaces.
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

      <div className="space-y-8">
        <section>
          <Link href="/style" className="text-xl font-semibold hover:underline underline-offset-4">
            Style
          </Link>
          <p className="mt-2 text-muted-foreground">
            Foundational standards for typography, color, spacing, and more.
          </p>
        </section>

        <section>
          <Link href="/components" className="text-xl font-semibold hover:underline underline-offset-4">
            Components
          </Link>
          <p className="mt-2 text-muted-foreground">
            Reusable UI building blocks with usage guidelines and code examples.
          </p>
        </section>

        <section>
          <Link href="/patterns" className="text-xl font-semibold hover:underline underline-offset-4">
            Patterns
          </Link>
          <p className="mt-2 text-muted-foreground">
            Common UI patterns and best practices for complex interfaces.
          </p>
        </section>

        <section>
          <Link href="/resources" className="text-xl font-semibold hover:underline underline-offset-4">
            Resources
          </Link>
          <p className="mt-2 text-muted-foreground">
            Design tokens, accessibility guidelines, and getting started guides.
          </p>
        </section>
      </div>
    </div>
  );
}
