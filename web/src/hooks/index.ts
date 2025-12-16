/**
 * Hooks - Barrel export for all custom hooks
 */

export { clearApiCache, clearCacheKey, useApi } from "./useApi";
export { useAsyncError } from "./useAsyncError";
export { useCardScale } from "./useCardScale";
export { useDebounce } from "./useDebounce";
export { useForm, validators } from "./useForm";
export { useInViewWithDelay } from "./useInViewWithDelay";
export { useMediaQuery } from "./useMediaQuery";
export { useModalScrollLock } from "./useModalScrollLock";
export { useScrollDirection } from "./useScrollDirection";
export { useThrottledWindowSize } from "./useThrottledWindowSize";
export { useViewportCenter } from "./useViewportCenter";
export { useWindowSize } from "./useWindowSize";

// Auth is now managed via Zustand store
// Import useAuthStore, useAuthActions, etc. from @/stores instead
