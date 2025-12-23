"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: "chevron" | "slash"
  maxItems?: number
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, separator = "chevron", maxItems, className, ...props }, ref) => {
    const displayItems = React.useMemo(() => {
      if (!maxItems || items.length <= maxItems) return items
      const firstItem = items[0]
      const lastItems = items.slice(-Math.max(1, maxItems - 2))
      return [firstItem, { label: "...", href: undefined }, ...lastItems]
    }, [items, maxItems])

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        <ol className="flex items-center gap-1">
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1
            const isEllipsis = item.label === "..."

            return (
              <li key={index} className="flex items-center gap-1">
                {isEllipsis ? (
                  <BreadcrumbEllipsis />
                ) : isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
                {!isLast && (
                  <BreadcrumbSeparator variant={separator} />
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)
Breadcrumb.displayName = "Breadcrumb"

interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, children, href, ...props }, ref) => (
    <a
      ref={ref}
      href={href}
      className={cn(
        "font-secondary text-sm leading-[1.2] tracking-[0.2px] text-muted-foreground hover:text-foreground transition-colors py-1",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
)
BreadcrumbLink.displayName = "BreadcrumbLink"

interface BreadcrumbPageProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      aria-current="page"
      className={cn(
        "font-secondary text-sm leading-[1.2] tracking-[0.2px] text-foreground font-normal py-1",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
)
BreadcrumbPage.displayName = "BreadcrumbPage"

interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "chevron" | "slash"
}

const BreadcrumbSeparator = React.forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  ({ variant = "chevron", className, ...props }, ref) => (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn("flex items-center text-icon", className)}
      {...props}
    >
      {variant === "chevron" ? (
        <Icon icon="chevron_right" size={16} className="text-icon" />
      ) : (
        <span className="text-sm text-muted-foreground">/</span>
      )}
    </span>
  )
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn("flex items-center text-icon", className)}
      {...props}
    >
      <Icon icon="more_horiz" size={16} />
    </span>
  )
)
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
