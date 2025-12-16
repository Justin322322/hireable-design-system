"use client";

import { useLenis } from "@/stores";
import { useEffect } from "react";

interface UseModalScrollLockOptions {
  /** Callback to run when modal closes (e.g., form reset) */
  onClose?: () => void;
}

/**
 * Hook to manage scroll locking when a modal is open.
 * Handles both Lenis smooth scroll and native scroll.
 */
export function useModalScrollLock(
  isOpen: boolean,
  options: UseModalScrollLockOptions = {}
) {
  const { onClose } = options;
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      onClose?.();
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, onClose, lenis]);
}
