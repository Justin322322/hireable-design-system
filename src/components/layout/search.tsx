"use client";

import * as React from "react";
import { Search as SearchIcon, FileText, Component, LayoutGrid, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


const searchData = [
  // Guidelines
  { title: "Overview", category: "Guidelines", href: "/guidelines", icon: FileText },
  { title: "Typography", category: "Guidelines", href: "/guidelines/typography", icon: FileText },
  { title: "Color", category: "Guidelines", href: "/guidelines/color", icon: FileText },
  { title: "Spacing", category: "Guidelines", href: "/guidelines/spacing", icon: FileText },
  { title: "Corners", category: "Guidelines", href: "/guidelines/corners", icon: FileText },
  { title: "Icons", category: "Guidelines", href: "/guidelines/icons", icon: FileText },
  { title: "Motion", category: "Guidelines", href: "/guidelines/motion", icon: FileText },
  
  // Components
  { title: "Overview", category: "Components", href: "/components", icon: Component },
  { title: "Button", category: "Components", href: "/components/button", icon: Component },
  { title: "Card", category: "Components", href: "/components/card", icon: Component },
  { title: "Input", category: "Components", href: "/components/input", icon: Component },
  { title: "Select", category: "Components", href: "/components/select", icon: Component },
  { title: "Tabs", category: "Components", href: "/components/tabs", icon: Component },
  { title: "Modal", category: "Components", href: "/components/modal", icon: Component },
  { title: "Toast", category: "Components", href: "/components/toast", icon: Component },
  { title: "Badge", category: "Components", href: "/components/badge", icon: Component },
  { title: "Toggle", category: "Components", href: "/components/toggle", icon: Component },
  { title: "Avatar", category: "Components", href: "/components/avatar", icon: Component },
  { title: "Separator", category: "Components", href: "/components/separator", icon: Component },
  { title: "Navigation Menu", category: "Components", href: "/components/navigation-menu", icon: Component },
  { title: "Drawer", category: "Components", href: "/components/drawer", icon: Component },
  { title: "Chart", category: "Components", href: "/components/chart", icon: Component },

  // Patterns
  { title: "Overview", category: "Patterns", href: "/patterns", icon: LayoutGrid },
  { title: "Forms", category: "Patterns", href: "/patterns/forms", icon: LayoutGrid },
  { title: "Navigation", category: "Patterns", href: "/patterns/navigation", icon: LayoutGrid },
  { title: "Data Display", category: "Patterns", href: "/patterns/data-display", icon: LayoutGrid },

  // Resources
  { title: "Overview", category: "Resources", href: "/resources", icon: BookOpen },
  { title: "Getting Started", category: "Resources", href: "/resources/getting-started", icon: BookOpen },
  { title: "Design Tokens", category: "Resources", href: "/resources/design-tokens", icon: BookOpen },
  { title: "Accessibility", category: "Resources", href: "/resources/accessibility", icon: BookOpen },
];

export function DocsSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredData = query === "" 
    ? [] 
    : searchData.filter((item) => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);

  const onSelect = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative flex h-9 w-full items-center justify-start gap-2 rounded-lg border bg-muted/50 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted md:w-40 lg:w-64"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 shadow-2xl max-w-2xl">
          <DialogTitle className="sr-only">Search Documentation</DialogTitle>
          <DialogHeader className="p-4 border-b bg-muted/20">
            <div className="flex items-center gap-3">
              <SearchIcon className="h-5 w-5 text-muted-foreground" />
              <input
                className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
                placeholder="Type to search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
          </DialogHeader>
          <div className="max-h-[450px] overflow-y-auto p-2">
            {filteredData.length > 0 ? (
              <div className="space-y-1">
                {filteredData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.href}
                      onClick={() => onSelect(item.href)}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary text-left group"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-background group-hover:border-primary/50 transition-colors">
                        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-[#00A7F8]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.category}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : query !== "" ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No results found for &quot;{query}&quot;
              </div>
            ) : (
              <div className="p-4 text-center text-sm text-muted-foreground">
                Start typing to search documentation
              </div>
            )}
          </div>
          <div className="flex items-center justify-between border-t bg-muted/50 px-4 py-2 text-[10px] text-muted-foreground">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><kbd className="rounded border bg-background px-1">↑↓</kbd> Navigate</span>
              <span className="flex items-center gap-1"><kbd className="rounded border bg-background px-1">Enter</kbd> Select</span>
            </div>
            <span className="flex items-center gap-1"><kbd className="rounded border bg-background px-1">ESC</kbd> Close</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
