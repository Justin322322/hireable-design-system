"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Guidelines", href: "/guidelines" },
  { label: "Components", href: "/components" },
  { label: "Patterns", href: "/patterns" },
  { label: "Resources", href: "/resources" },
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

        <nav className="flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                pathname.startsWith(item.href)
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
