/**
 * Auth Hooks - Barrel export
 *
 * Re-exports auth hooks from the store for cleaner feature-based imports.
 */

export {
  useAuthStore as useAuth,
  useAuthActions,
  useAuthError,
  useAuthLoading,
  useAuthStore,
  useIsAuthenticated,
  useUser,
} from "@/stores/authStore";
