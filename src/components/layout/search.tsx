"use client";

import * as React from "react";
import { Icon, Dialog, DialogContent, DialogHeader, DialogTitle, type IconName } from "@/components/ui";
import { useRouter } from "next/navigation";

import { sidebarNav, type NavItem, type NavSection } from "@/config/docs";

// Icon mapping for each section category
const sectionIcons: Record<string, IconName> = {
  style: "description",
  components: "widgets",
  patterns: "grid_view",
  resources: "menu_book",
};

interface SearchItem {
  title: string;
  category: string;
  subcategory?: string;
  href: string;
  iconName: IconName;
  description?: string;
}

// Dynamically generate search data from sidebarNav config
function generateSearchData(): SearchItem[] {
  const searchItems: SearchItem[] = [];

  Object.entries(sidebarNav).forEach(([sectionKey, section]: [string, NavSection]) => {
    const iconName = sectionIcons[sectionKey] || "description";
    const categoryName = section.title;

    // Add standalone items
    if (section.items) {
      section.items.forEach((item: NavItem) => {
        searchItems.push({
          title: item.label,
          category: categoryName,
          href: item.href,
          iconName,
          description: item.description,
        });
      });
    }

    // Add grouped items (like component categories)
    if (section.groups) {
      section.groups.forEach((group) => {
        group.items.forEach((item: NavItem) => {
          searchItems.push({
            title: item.label,
            category: categoryName,
            subcategory: group.category,
            href: item.href,
            iconName,
            description: item.description,
          });
        });
      });
    }
  });

  return searchItems;
}

// Generate search data once at module load
const searchData = generateSearchData();

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
        item.category.toLowerCase().includes(lowerQuery) ||
        (item.subcategory && item.subcategory.toLowerCase().includes(lowerQuery)) ||
        (item.description && item.description.toLowerCase().includes(lowerQuery))
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
        className="relative flex h-9 items-center justify-start gap-2 rounded-lg border bg-muted/50 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted w-32 sm:w-48 md:w-64 lg:w-80"
      >
        <Icon icon="search" size={16} className="text-icon" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-xs font-medium opacity-100 sm:flex">
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
                        <span className="text-xs text-muted-foreground">
                          {item.category}{item.subcategory && ` › ${item.subcategory}`}
                        </span>
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
          <div className="flex items-center justify-between border-t bg-muted/50 px-4 py-2 text-xs text-muted-foreground">
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
