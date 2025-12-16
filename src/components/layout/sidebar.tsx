"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarNav = {
  guidelines: {
    title: "Guidelines",
    items: [
      { label: "Overview", href: "/guidelines" },
      { label: "Typography", href: "/guidelines/typography" },
      { label: "Color", href: "/guidelines/color" },
      { label: "Spacing", href: "/guidelines/spacing" },
      { label: "Icons", href: "/guidelines/icons" },
      { label: "Motion", href: "/guidelines/motion" },
    ],
  },
  components: {
    title: "Components",
    items: [
      { label: "Overview", href: "/components" },
      { label: "Button", href: "/components/button" },
      { label: "Card", href: "/components/card" },
      { label: "Input", href: "/components/input" },
      { label: "Select", href: "/components/select" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Modal", href: "/components/modal" },
      { label: "Toast", href: "/components/toast" },
    ],
  },
  patterns: {
    title: "Patterns",
    items: [
      { label: "Overview", href: "/patterns" },
      { label: "Forms", href: "/patterns/forms" },
      { label: "Navigation", href: "/patterns/navigation" },
      { label: "Data Display", href: "/patterns/data-display" },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { label: "Overview", href: "/resources" },
      { label: "Getting Started", href: "/resources/getting-started" },
      { label: "Design Tokens", href: "/resources/design-tokens" },
      { label: "Accessibility", href: "/resources/accessibility" },
    ],
  },
};

export function Sidebar() {
  const pathname = usePathname();

  const getActiveSection = () => {
    if (pathname.startsWith("/guidelines")) return "guidelines";
    if (pathname.startsWith("/components")) return "components";
    if (pathname.startsWith("/patterns")) return "patterns";
    if (pathname.startsWith("/resources")) return "resources";
    return null;
  };

  const activeSection = getActiveSection();
  const navSection = activeSection ? sidebarNav[activeSection] : null;

  if (!navSection) return null;

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-muted/30 md:block">
      <nav className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-6">
        <h2 className="mb-4 text-sm font-semibold">{navSection.title}</h2>
        <ul className="space-y-1">
          {navSection.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
