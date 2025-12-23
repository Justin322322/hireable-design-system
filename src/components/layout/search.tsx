"use client";

import * as React from "react";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import WidgetsOutlined from "@mui/icons-material/WidgetsOutlined";
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import type { SvgIconComponent } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const searchData: { title: string; category: string; href: string; icon: SvgIconComponent }[] = [
  // Style
  { title: "Overview", category: "Style", href: "/style", icon: DescriptionOutlined },
  { title: "Typography", category: "Style", href: "/style/typography", icon: DescriptionOutlined },
  { title: "Color", category: "Style", href: "/style/color", icon: DescriptionOutlined },
  { title: "Spacing", category: "Style", href: "/style/spacing", icon: DescriptionOutlined },
  { title: "Corners", category: "Style", href: "/style/corners", icon: DescriptionOutlined },
  { title: "Icons", category: "Style", href: "/style/icons", icon: DescriptionOutlined },
  { title: "Motion", category: "Style", href: "/style/motion", icon: DescriptionOutlined },
  { title: "Border Style", category: "Style", href: "/style/border-style", icon: DescriptionOutlined },
  
  // Components
  { title: "Overview", category: "Components", href: "/components", icon: WidgetsOutlined },
  { title: "Button", category: "Components", href: "/components/button", icon: WidgetsOutlined },
  { title: "Card", category: "Components", href: "/components/card", icon: WidgetsOutlined },
  { title: "Input", category: "Components", href: "/components/input", icon: WidgetsOutlined },
  { title: "Select", category: "Components", href: "/components/select", icon: WidgetsOutlined },
  { title: "Tabs", category: "Components", href: "/components/tabs", icon: WidgetsOutlined },
  { title: "Dialog", category: "Components", href: "/components/dialogue", icon: WidgetsOutlined },
  { title: "Toast", category: "Components", href: "/components/toast", icon: WidgetsOutlined },
  { title: "Badge", category: "Components", href: "/components/badge", icon: WidgetsOutlined },
  { title: "Toggle", category: "Components", href: "/components/toggle", icon: WidgetsOutlined },
  { title: "Checkbox", category: "Components", href: "/components/checkbox", icon: WidgetsOutlined },
  { title: "Sidebar", category: "Components", href: "/components/sidebar", icon: WidgetsOutlined },
  { title: "Avatar", category: "Components", href: "/components/avatar", icon: WidgetsOutlined },
  { title: "Separator", category: "Components", href: "/components/separator", icon: WidgetsOutlined },
  { title: "Navigation Menu", category: "Components", href: "/components/navigation-menu", icon: WidgetsOutlined },
  { title: "Drawer", category: "Components", href: "/components/drawer", icon: WidgetsOutlined },
  { title: "Chart", category: "Components", href: "/components/chart", icon: WidgetsOutlined },
  { title: "Kanban", category: "Components", href: "/components/kanban", icon: WidgetsOutlined },

  // Patterns
  { title: "Overview", category: "Patterns", href: "/patterns", icon: GridViewOutlined },
  { title: "Forms", category: "Patterns", href: "/patterns/forms", icon: GridViewOutlined },
  { title: "Navigation", category: "Patterns", href: "/patterns/navigation", icon: GridViewOutlined },
  { title: "Data Display", category: "Patterns", href: "/patterns/data-display", icon: GridViewOutlined },

  // Resources
  { title: "Overview", category: "Resources", href: "/resources", icon: MenuBookOutlined },
  { title: "Getting Started", category: "Resources", href: "/resources/getting-started", icon: MenuBookOutlined },
  { title: "Design Tokens", category: "Resources", href: "/resources/design-tokens", icon: MenuBookOutlined },
  { title: "Accessibility", category: "Resources", href: "/resources/accessibility", icon: MenuBookOutlined },
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
        <SearchOutlined className="h-4 w-4 text-icon" />
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
              <SearchOutlined className="h-5 w-5 text-icon" />
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
                  const Icon = item.icon;
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
                        <Icon className="h-4 w-4 text-icon" />
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
