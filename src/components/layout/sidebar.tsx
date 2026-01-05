"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { sidebarNav, type NavItem, type NavGroup } from "@/config/docs";
import { Icon } from "@/components/ui";

export function Sidebar() {
  const pathname = usePathname();
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const getActiveSection = () => {
    if (pathname.startsWith("/style")) return "style";
    if (pathname.startsWith("/components")) return "components";
    if (pathname.startsWith("/patterns")) return "patterns";
    if (pathname.startsWith("/resources")) return "resources";
    return null;
  };

  const activeSection = getActiveSection();
  const navSection = activeSection ? sidebarNav[activeSection] : null;

  if (!navSection) return null;

  const toggleGroup = (category: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Group is collapsed only if manually collapsed AND doesn't contain active item
  const isGroupCollapsed = (group: NavGroup) => {
    const hasActiveItem = group.items.some((item) => pathname === item.href);
    // Never collapse if it contains the active item
    if (hasActiveItem) return false;
    return collapsedGroups[group.category] ?? false;
  };

  const renderNavItem = (item: NavItem) => {
    const ItemIcon = item.icon;
    const isActive = pathname === item.href;
    
    return (
      <li key={item.href}>
        <Link
          href={item.href}
          title={item.description}
          className={cn(
            "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal tracking-wide transition-colors",
            "font-secondary text-foreground",
            isActive
              ? "bg-surface-hover"
              : "bg-background hover:bg-surface-hover"
          )}
        >
          <div 
            className={cn(
              "flex items-center justify-center size-6",
              isActive ? "text-client" : "text-icon"
            )}
          >
            <ItemIcon className="h-5 w-5 shrink-0" />
          </div>
          <span>{item.label}</span>
        </Link>
      </li>
    );
  };

  const renderGroup = (group: NavGroup) => {
    const isCollapsed = isGroupCollapsed(group);
    const hasActiveItem = group.items.some((item) => pathname === item.href);
    // Sanitize category for use in HTML id (lowercase, replace spaces with hyphens)
    const panelId = `group-${group.category.toLowerCase().replace(/\s+/g, '-')}-panel`;

    return (
      <div key={group.category} className="mt-4">
        <button
          onClick={() => toggleGroup(group.category)}
          aria-expanded={!isCollapsed}
          aria-controls={panelId}
          className={cn(
            "flex w-full items-center justify-between px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-lg",
            "hover:bg-surface-hover",
            hasActiveItem ? "text-foreground" : "text-muted-foreground"
          )}
        >
          <span>{group.category}</span>
          <Icon
            icon={isCollapsed ? "expand_more" : "expand_less"}
            size={16}
            className="text-muted-foreground"
          />
        </button>
        <div
          id={panelId}
          className={cn(
            "overflow-hidden transition-all duration-200 ease-in-out",
            isCollapsed ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
          )}
        >
          <ul className="space-y-1 mt-1">
            {group.items.map(renderNavItem)}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-background lg:block">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-auto-hide">
        <div className="p-6">
        <h2 className="mb-4 text-sm font-semibold">{navSection.title}</h2>
        
        {/* Render standalone items first */}
        {navSection.items && navSection.items.length > 0 && (
          <ul className="space-y-1">
            {navSection.items.map(renderNavItem)}
          </ul>
        )}

        {/* Render collapsible grouped items with separators */}
        {navSection.groups?.map((group, index) => (
          <div key={group.category}>
            {index > 0 && (
              <div className="my-4 border-t border-border" />
            )}
            {renderGroup(group)}
          </div>
        ))}
        </div>
      </div>
    </aside>
  );
}
