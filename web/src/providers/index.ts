/**
 * Providers - Barrel export for all provider components
 *
 * Note: With Zustand, most state no longer requires providers.
 * These exports are for components that still need provider wrappers
 * (like SmoothScrollProvider for Lenis initialization).
 */

// Auth initializer (replaces AuthProvider)
export { AuthInitializer } from "./AuthInitializer";

// Smooth scroll provider (thin wrapper for Lenis initialization)
export { SmoothScrollProvider } from "./SmoothScrollProvider";

// Re-export store hooks for convenience
// These can be imported directly from @/stores as well
export {
  useAuthActions,
  useAuthStore,
  useIsAuthenticated,
  useLenis,
  useRoleStore,
  useSelectedRole,
  useSetSelectedRole,
  useUser,
} from "@/stores";
