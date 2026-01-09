"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Icon } from "./icon"
import { Tabs, TabsList, TabsTrigger } from "./tabs"

export interface HeaderTab {
  value: string
  label: string
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Header type variant */
  type?: "Dashboard" | "With Tab" | "Post Job"
  /** Whether to show the primary action button */
  button?: boolean
  /** Whether to show the subtitle (Dashboard only) */
  subheading?: boolean
  /** Page title text */
  title?: string
  /** Page subtitle text */
  subtitle?: string
  /** Primary button text */
  buttonText?: string
  /** Primary button click handler */
  onButtonClick?: () => void
  /** Notification icon click handler */
  onNotificationClick?: () => void
  /** Tabs for With Tab variant */
  tabs?: HeaderTab[]
  /** Active tab value */
  activeTab?: string
  /** Tab change handler */
  onTabChange?: (value: string) => void
  /** Secondary button text (Post Job only) */
  secondaryButtonText?: string
  /** Secondary button click handler */
  onSecondaryButtonClick?: () => void
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      type = "Dashboard",
      button = true,
      subheading = true,
      title = "Page Title",
      subtitle = "Page sub-title",
      buttonText = "Enabled",
      onButtonClick,
      onNotificationClick,
      tabs = [],
      activeTab,
      onTabChange,
      secondaryButtonText = "Save as draft",
      onSecondaryButtonClick,
      children,
      ...props
    },
    ref
  ) => {
    const isDashboard = type === "Dashboard"
    const isWithTab = type === "With Tab"
    const isPostJob = type === "Post Job"

    return (
      <header
        ref={ref}
        className={cn(
          "flex flex-col w-full",
          (isDashboard || isWithTab) && "items-center px-8 py-6",
          isWithTab && "gap-1 border-b border-border",
          isPostJob && "items-start px-20 py-6",
          className
        )}
        {...props}
      >
        {/* Dashboard and With Tab variants */}
        {(isDashboard || isWithTab) && (
          <div className={cn(
            "flex gap-2 w-full shrink-0",
            isDashboard ? "items-start" : "items-center"
          )}>
            {/* Page Title */}
            <div className={cn(
              "flex flex-1 flex-col items-start justify-center min-h-px min-w-px shrink-0",
              isDashboard && "gap-1"
            )}>
              <h1 className="font-semibold text-2xl text-foreground leading-normal tracking-normal">
                {title}
              </h1>
              {isDashboard && subheading && (
                <p className="font-secondary font-normal text-base text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Notification Icon */}
            <Button
              variant="icon"
              size="icon-sm"
              className="rounded-full p-1"
              onClick={onNotificationClick}
              aria-label="Notifications"
            >
              <Icon icon="notifications" size={24} className="text-foreground" />
            </Button>

            {/* Primary Button */}
            {button && (
              <Button
                variant="primary"
                size="sm"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            )}
          </div>
        )}

        {/* Tabs Toolbar for With Tab variant */}
        {isWithTab && tabs.length > 0 && (
          <Tabs
            value={activeTab}
            onValueChange={onTabChange}
            className="w-full"
          >
            <TabsList className="border-b-0">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {children}
          </Tabs>
        )}

        {/* Post Job variant */}
        {isPostJob && (
          <div className="flex items-center justify-between w-full shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-3 overflow-clip">
              <Image
                src="/Logo.svg"
                alt="Hireable Logo"
                width={40}
                height={40}
                className="h-10 w-10 shrink-0"
              />
              <Image
                src="/Logo-name.svg"
                alt="Hireable"
                width={136}
                height={28}
                className="h-7 w-auto shrink-0"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                size="md"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
              <Button
                variant="tertiary"
                size="md"
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        )}
      </header>
    )
  }
)
Header.displayName = "Header"

export { Header }
