"use client";

import * as React from "react";
import { Icon, type IconName } from "@/components/ui/icon";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const searchData: { title: string; category: string; href: string; iconName: IconName }[] = [
  // Style
  { title: "Overview", category: "Style", href: "/style", iconName: "description" },
  { title: "Typography", category: "Style", href: "/style/typography", iconName: "description" },
  { title: "Color", category: "Style", href: "/style/color", iconName: "description" },
  { title: "Spacing", category: "Style", href: "/style/spacing", iconName: "description" },
  { title: "Corners", category: "Style", href: "/style/corners", iconName: "description" },
  { title: "Icons", category: "Style", href: "/style/icons", iconName: "description" },
  { title: "Motion", category: "Style", href: "/style/motion", iconName: "description" },
  { title: "Border Style", category: "Style", href: "/style/border-style", iconName: "description" },
  
  // Components
  { title: "Overview", category: "Components", href: "/components", iconName: "widgets" },
  { title: "Button", category: "Components", href: "/components/button", iconName: "widgets" },
  { title: "Card", category: "Components", href: "/components/card", iconName: "widgets" },
  { title: "Input", category: "Components", href: "/components/input", iconName: "widgets" },
  { title: "Dropdown", category: "Components", href: "/components/dropdown", iconName: "widgets" },
  { title: "Tabs", category: "Components", href: "/components/tabs", iconName: "widgets" },
  { title: "Dialog", category: "Components", href: "/components/dialogue", iconName: "widgets" },
  { title: "Toast", category: "Components", href: "/components/toast", iconName: "widgets" },
  { title: "Badge", category: "Components", href: "/components/badge", iconName: "widgets" },
  { title: "Breadcrumb", category: "Components", href: "/components/breadcrumb", iconName: "widgets" },
  { title: "Toggle", category: "Components", href: "/components/toggle", iconName: "widgets" },
  { title: "Checkbox", category: "Components", href: "/components/checkbox", iconName: "widgets" },
  { title: "Radio Group/Button", category: "Components", href: "/components/radio-button", iconName: "widgets" },
  { title: "Sidebar", category: "Components", href: "/components/sidebar", iconName: "widgets" },
  { title: "Avatar", category: "Components", href: "/components/avatar", iconName: "widgets" },
  { title: "Separator", category: "Components", href: "/components/separator", iconName: "widgets" },
  { title: "Navigation Menu", category: "Components", href: "/components/navigation-menu", iconName: "widgets" },
  { title: "Drawer", category: "Components", href: "/components/drawer", iconName: "widgets" },
  { title: "Chart", category: "Components", href: "/components/chart", iconName: "widgets" },
  { title: "Kanban", category: "Components", href: "/components/kanban", iconName: "widgets" },

  // Patterns
  { title: "Overview", category: "Patterns", href: "/patterns", iconName: "grid_view" },
  { title: "Forms", category: "Patterns", href: "/patterns/forms", iconName: "grid_view" },
  { title: "Navigation", category: "Patterns", href: "/patterns/navigation", iconName: "grid_view" },
  { title: "Data Display", category: "Patterns", href: "/patterns/data-display", iconName: "grid_view" },

  // Resources
  { title: "Overview", category: "Resources", href: "/resources", iconName: "menu_book" },
  { title: "Getting Started", category: "Resources", href: "/resources/getting-started", iconName: "menu_book" },
  { title: "Design Tokens", category: "Resources", href: "/resources/design-tokens", iconName: "menu_book" },
  { title: "Accessibility", category: "Resources", href: "/resources/accessibility", iconName: "menu_book" },
];

export function DocsSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const router = useRouter();
  const listRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

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

  const filteredData = React.useMemo(() => {
    if (query === "") return [];
    const lowerQuery = query.toLowerCase();
    return searchData
      .filter((item) => 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 20);
  }, [query]);

  React.useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const onSelect = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredData.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredData.length);
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (e.shiftKey) {
        setSelectedIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
      } else {
        setSelectedIndex((prev) => (prev + 1) % filteredData.length);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      onSelect(filteredData[selectedIndex].href);
    }
  };

  React.useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative flex h-9 w-full items-center justify-start gap-2 rounded-lg border bg-muted/50 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted md:w-40 lg:w-64"
      >
        <Icon icon="search" size={16} className="text-icon" />
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
              <Icon icon="search" size={20} className="text-icon" />
              <input
                className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
                placeholder="Type to search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-autocomplete="list"
                aria-controls="search-results"
                aria-activedescendant={filteredData.length > 0 ? `result-${selectedIndex}` : undefined}
                autoFocus
              />
            </div>
          </DialogHeader>
            <div className="max-h-[450px] overflow-y-auto p-2" ref={listRef}>
            {filteredData.length > 0 ? (
              <div className="space-y-1" role="listbox" id="search-results">
                {filteredData.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.href}
                      ref={(el) => { itemRefs.current[index] = el; }}
                      id={`result-${index}`}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => onSelect(item.href)}
                      className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors text-left group ${
                        isSelected ? "bg-secondary" : "hover:bg-secondary"
                      }`}
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-md border transition-colors ${
                        isSelected ? "bg-background border-primary/50" : "bg-background group-hover:border-primary/50"
                      }`}>
                        <Icon icon={item.iconName} size={16} className="text-icon" />
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
              <span className="flex items-center gap-1"><kbd className="rounded border bg-background px-1">Tab</kbd><kbd className="rounded border bg-background px-1">→</kbd> Navigate</span>
              <span className="flex items-center gap-1"><kbd className="rounded border bg-background px-1">↵</kbd> Select</span>
            </div>
            <span className="flex items-center gap-1"><kbd className="rounded border bg-background px-1">Esc</kbd> Close</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
