"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, Button, Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";


import { mainNav, sidebarNav } from "@/config/docs";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const getActiveSection = () => {
    if (pathname.startsWith("/style")) return "style";
    if (pathname.startsWith("/components")) return "components";
    if (pathname.startsWith("/patterns")) return "patterns";
    if (pathname.startsWith("/resources")) return "resources";
    return null;
  };

  const activeSection = getActiveSection();
  const currentSidebarNav = activeSection ? sidebarNav[activeSection] : null;

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icon icon="menu" size={24} className="text-icon" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col h-full pr-0" showCloseButton={false}>
        <DrawerHeader className="relative flex-none border-b px-6 py-4">
          <DrawerTitle className="text-left text-xl">Navigation</DrawerTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2 px-2 hover:bg-transparent"
            onClick={() => setOpen(false)}
          >
            <Icon icon="close" size={24} className="text-icon" />
            <span className="sr-only">Close Menu</span>
          </Button>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-8 pb-10">
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/70">Main Sections</h4>
              <div className="flex flex-col gap-1 text-lg">
                {mainNav.map((item) => {
                  const NavIcon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted",
                        pathname.startsWith(item.href)
                          ? "bg-secondary font-semibold text-client"
                          : "text-foreground/80"
                      )}
                    >
                      <NavIcon className={cn("size-5", pathname.startsWith(item.href) ? "text-icon-active" : "text-icon")} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
            {currentSidebarNav && (
              <div className="flex flex-col space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/70">
                  {currentSidebarNav.title}
                </h4>
                <div className="flex flex-col gap-1 text-lg">
                  {/* Render top-level items (e.g., Overview) */}
                  {currentSidebarNav.items?.map((item) => {
                    const NavIcon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted",
                          pathname === item.href
                            ? "bg-secondary font-semibold text-client"
                            : "text-foreground/80"
                        )}
                      >
                        <NavIcon className={cn("size-5", pathname === item.href ? "text-icon-active" : "text-icon")} />
                        {item.label}
                      </Link>
                    );
                  })}
                  {/* Render grouped items (e.g., component categories) */}
                  {currentSidebarNav.groups?.map((group) => (
                    <div key={group.category} className="mt-4">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/50 mb-2 px-3">
                        {group.category}
                      </h5>
                      {group.items.map((item) => {
                        const NavIcon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted",
                              pathname === item.href
                                ? "bg-secondary font-semibold text-client"
                                : "text-foreground/80"
                            )}
                          >
                            <NavIcon className={cn("size-5", pathname === item.href ? "text-icon-active" : "text-icon")} />
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
