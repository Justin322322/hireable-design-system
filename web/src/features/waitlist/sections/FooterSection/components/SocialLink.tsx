"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  selectedRole: string;
  icon: React.ReactNode;
  iconSize?: string;
}

/**
 * Reusable social media link with role-based hover colors
 */
export function SocialLink({
  href,
  label,
  selectedRole,
  icon,
  iconSize = "size-6",
}: SocialLinkProps) {
  return (
    <a
      href={href}
      data-role={selectedRole}
      className={cn(
        "hover:text-client data-[role=talent]:hover:text-talent",
        "flex size-10 cursor-pointer items-center justify-center rounded-full",
        "text-neutral-700 transition-colors"
      )}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      <span className={iconSize}>{icon}</span>
    </a>
  );
}
