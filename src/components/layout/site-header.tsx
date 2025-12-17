"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Ruler, 
  Component, 
  LayoutGrid, 
  BookOpen 
} from "lucide-react";

const navItems = [
  { label: "Guidelines", href: "/guidelines", icon: Ruler },
  { label: "Components", href: "/components", icon: Component },
  { label: "Patterns", href: "/patterns", icon: LayoutGrid },
  { label: "Resources", href: "/resources", icon: BookOpen },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-14 items-center px-6">
        <Link href="/" className="mr-8 flex items-center gap-2">
          <Image src="/Logo.svg" alt="Logo" width={28} height={28} />
          <Image src="/Logo-name.svg" alt="Hireable" width={80} height={20} className="h-5 w-auto" />
        </Link>

        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
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
                    isActive ? "text-[#00A7F8]" : "text-muted-foreground"
                  )} 
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>


      </div>
    </header>
  );
}
