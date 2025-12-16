/**
 * Stores - Barrel export for all Zustand stores
 */

// Auth store
export {
  useAuthActions,
  useAuthError,
  useAuthLoading,
  useAuthStore,
  useIsAuthenticated,
  useUser,
} from "./authStore";

// Role store
export {
  useRoleStore,
  useSelectedRole,
  useSetSelectedRole,
  useToggleRole,
  type RoleType,
} from "./roleStore";

// UI store
export {
  useLenis,
  useMobileMenu,
  useSetLenis,
  useUIStore,
  useWaitlistModal,
} from "./uiStore";
