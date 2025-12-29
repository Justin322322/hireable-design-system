"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav } from "@/config/docs";
import { DocsSearch } from "./search";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-14 items-center">
        {/* Logo section - aligned with sidebar width */}
        <div className="hidden h-full w-64 shrink-0 items-center border-r px-6 lg:flex">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Logo.svg" alt="Logo" width={28} height={28} />
            <Image src="/Logo-name.svg" alt="Hireable" width={80} height={20} className="h-5 w-auto" />
          </Link>
        </div>

        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2 px-4 lg:hidden">
          <Image src="/Logo.svg" alt="Logo" width={28} height={28} />
          <Image src="/Logo-name.svg" alt="Hireable" width={80} height={20} className="h-5 w-auto" />
        </Link>

        {/* Nav section - takes remaining space */}
        <div className="flex flex-1 items-center px-4 lg:px-6">
          <nav className="hidden items-center gap-2 lg:flex">
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              
              return (
                <Link
                  key={item.href}
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
                      "h-5 w-5",
                      isActive ? "text-icon-active" : "text-icon"
                    )}
                  />
                  <span className="hidden lg:inline-block">{item.label}</span>
                  {isActive && <span className="lg:hidden">{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:gap-4">
            <DocsSearch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
