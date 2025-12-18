"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  FileText,
  Type,
  Palette,
  Space,
  Smile,
  Zap,
  LayoutGrid,
  Square,
  CreditCard,
  TextCursor,
  ChevronDown,
  PanelTop,
  MessageSquare,
  Bell,
  Layers,
  FormInput,
  Navigation,
  Table,
  BookOpen,
  Rocket,
  Paintbrush,
  Accessibility,
  ToggleLeft,
  BadgeCheck,
  RectangleHorizontal,
  AreaChart,
  CircleUser,
  Divide,
  Menu,
  PanelBottom,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const sidebarNav: Record<string, NavSection> = {
  guidelines: {
    title: "Guidelines",
    items: [
      { label: "Overview", href: "/guidelines", icon: FileText },
      { label: "Typography", href: "/guidelines/typography", icon: Type },
      { label: "Color", href: "/guidelines/color", icon: Palette },
      { label: "Spacing", href: "/guidelines/spacing", icon: Space },
      { label: "Corners", href: "/guidelines/corners", icon: RectangleHorizontal },
      { label: "Icons", href: "/guidelines/icons", icon: Smile },
      { label: "Motion", href: "/guidelines/motion", icon: Zap },
    ],
  },
  components: {
    title: "Components",
    items: [
      { label: "Overview", href: "/components", icon: LayoutGrid },
      { label: "Button", href: "/components/button", icon: Square },
      { label: "Card", href: "/components/card", icon: CreditCard },
      { label: "Input", href: "/components/input", icon: TextCursor },
      { label: "Select", href: "/components/select", icon: ChevronDown },
      { label: "Tabs", href: "/components/tabs", icon: PanelTop },
      { label: "Modal", href: "/components/modal", icon: MessageSquare },
      { label: "Toast", href: "/components/toast", icon: Bell },
      { label: "Badge", href: "/components/badge", icon: BadgeCheck },
      { label: "Toggle", href: "/components/toggle", icon: ToggleLeft },
      { label: "Avatar", href: "/components/avatar", icon: CircleUser },
      { label: "Separator", href: "/components/separator", icon: Divide },
      { label: "Navigation Menu", href: "/components/navigation-menu", icon: Menu },
      { label: "Drawer", href: "/components/drawer", icon: PanelBottom },
      { label: "Chart", href: "/components/chart", icon: AreaChart },
    ],
  },
  patterns: {
    title: "Patterns",
    items: [
      { label: "Overview", href: "/patterns", icon: Layers },
      { label: "Forms", href: "/patterns/forms", icon: FormInput },
      { label: "Navigation", href: "/patterns/navigation", icon: Navigation },
      { label: "Data Display", href: "/patterns/data-display", icon: Table },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { label: "Overview", href: "/resources", icon: BookOpen },
      { label: "Getting Started", href: "/resources/getting-started", icon: Rocket },
      { label: "Design Tokens", href: "/resources/design-tokens", icon: Paintbrush },
      { label: "Accessibility", href: "/resources/accessibility", icon: Accessibility },
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
          {navSection.items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal tracking-wide transition-colors",
                    "font-secondary",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <Icon 
                    className={cn(
                      "h-5 w-5 shrink-0",
                      isActive ? "text-[#00A7F8]" : "text-muted-foreground"
                    )} 
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
