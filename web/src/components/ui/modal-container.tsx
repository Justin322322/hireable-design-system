"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ModalContainerProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when clicking the backdrop */
  onBackdropClick?: () => void;
  /** Modal content */
  children: React.ReactNode;
  /** Additional class names for the modal content */
  className?: string;
  /** Max width of the modal (default: 720px) */
  maxWidth?: string;
  /** Test ID for E2E testing */
  "data-testid"?: string;
}

/**
 * Reusable modal container with backdrop and centered content.
 * Handles backdrop click and prevents event propagation.
 */
export function ModalContainer({
  isOpen,
  onBackdropClick,
  children,
  className,
  maxWidth = "720px",
  "data-testid": testId,
}: ModalContainerProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onBackdropClick?.()}
    >
      <div
        role="dialog"
        aria-modal="true"
        data-testid={testId}
        className={cn(
          "flex h-auto max-h-[90vh] w-full flex-col overflow-hidden rounded-[8px] bg-white shadow-xl",
          className
        )}
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
