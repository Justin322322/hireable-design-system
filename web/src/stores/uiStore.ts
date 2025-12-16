/**
 * UI Store - Zustand store for UI-related state
 *
 * Manages UI state like smooth scroll instances, modals, etc.
 * Note: Lenis instance is kept in a separate ref-based approach
 * since it's a mutable object that shouldn't trigger re-renders.
 */

import Lenis from "lenis";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

interface UIState {
  // Lenis smooth scroll instance (stored as ref, not reactive)
  lenis: Lenis | null;
  setLenis: (lenis: Lenis | null) => void;

  // Modal states
  isWaitlistModalOpen: boolean;
  setWaitlistModalOpen: (open: boolean) => void;
  openWaitlistModal: () => void;
  closeWaitlistModal: () => void;

  // Navigation states
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      // Lenis smooth scroll
      lenis: null,
      setLenis: (lenis) => set({ lenis }),

      // Waitlist modal
      isWaitlistModalOpen: false,
      setWaitlistModalOpen: (open) => set({ isWaitlistModalOpen: open }),
      openWaitlistModal: () => set({ isWaitlistModalOpen: true }),
      closeWaitlistModal: () => set({ isWaitlistModalOpen: false }),

      // Mobile menu
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
      toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    }),
    {
      name: "UIStore",
    }
  )
);

// Selector hooks for optimized re-renders
export const useLenis = () => useUIStore((state) => state.lenis);
export const useSetLenis = () => useUIStore((state) => state.setLenis);

// Use useShallow for selectors that return objects to prevent infinite re-renders
export const useWaitlistModal = () =>
  useUIStore(
    useShallow((state) => ({
      isOpen: state.isWaitlistModalOpen,
      open: state.openWaitlistModal,
      close: state.closeWaitlistModal,
      setOpen: state.setWaitlistModalOpen,
    }))
  );

export const useMobileMenu = () =>
  useUIStore(
    useShallow((state) => ({
      isOpen: state.isMobileMenuOpen,
      toggle: state.toggleMobileMenu,
      setOpen: state.setMobileMenuOpen,
    }))
  );
