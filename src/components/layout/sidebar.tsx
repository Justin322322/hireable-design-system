"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { sidebarNav } from "@/config/docs";

export function Sidebar() {
  const pathname = usePathname();

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
