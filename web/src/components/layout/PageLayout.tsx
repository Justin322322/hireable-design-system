"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Navbar } from "./Navbar";

interface PageLayoutProps {
  /** Page content */
  children: React.ReactNode;
  /** Props to pass to Navbar */
  navbarProps?: {
    onJoinWaitlistClick?: () => void;
    isTalent?: boolean;
    showCta?: boolean;
  };
  /** Background color class (default: bg-white) */
  bgColor?: string;
  /** Additional class names for the container */
  className?: string;
  /** Whether to include default padding-top for navbar (default: true) */
  withNavbarPadding?: boolean;
}

/**
 * Reusable page layout with Navbar and consistent structure.
 * Handles common page wrapper patterns.
 */
export function PageLayout({
  children,
  navbarProps,
  bgColor = "bg-white",
  className,
  withNavbarPadding = true,
}: PageLayoutProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-start overflow-x-hidden",
        bgColor,
        className
      )}
    >
      <Navbar {...navbarProps} />
      <div className={cn("w-full", withNavbarPadding && "pt-20")}>
        {children}
      </div>
    </div>
  );
}
