/**
 * Auth Store - Zustand store for authentication state management
 *
 * Provides global authentication state and methods for login, logout,
 * signup, and session management without requiring provider wrappers.
 */

"use client";

import { authService, storageService } from "@/features/auth";
import type {
  ForgotPasswordRequest,
  LoginRequest,
  ResetPasswordRequest,
  SignupRequest,
  User,
} from "@hireable/shared/types/api";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  isInitialized: boolean;
}

interface AuthActions {
  initAuth: () => Promise<void>;
  login: (credentials: LoginRequest) => Promise<void>;
  signup: (data: SignupRequest) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (data: ForgotPasswordRequest) => Promise<void>;
  resetPassword: (data: ResetPasswordRequest) => Promise<void>;
  clearError: () => void;
  refreshSession: () => Promise<void>;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      isLoading: true,
      error: null,
      isInitialized: false,

      // Initialize auth state from storage and validate token with server
      initAuth: async () => {
        if (get().isInitialized) return;

        try {
          const token = storageService.getToken();

          if (token) {
            // Validate token by fetching current user from server
            try {
              const user = await authService.getCurrentUser();
              storageService.setUser(user); // Update stored user with fresh data
              set({
                user,
                isAuthenticated: true,
                isLoading: false,
                error: null,
                isInitialized: true,
              });
            } catch {
              // Token is invalid/expired - clear auth state
              storageService.clearAuth();
              set({ isLoading: false, isInitialized: true });
            }
          } else {
            set({ isLoading: false, isInitialized: true });
          }
        } catch {
          storageService.clearAuth();
          set({ isLoading: false, isInitialized: true });
        }
      },

      login: async (credentials: LoginRequest) => {
        set({ isLoading: true, error: null });

        try {
          const response = await authService.login(credentials);

          // Store tokens and user
          storageService.setToken(response.accessToken);
          storageService.setRefreshToken(response.refreshToken);
          storageService.setUser(response.user);

          set({
            user: response.user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Login failed";
          set({ isLoading: false, error: message });
          throw error;
        }
      },

      signup: async (data: SignupRequest) => {
        set({ isLoading: true, error: null });

        try {
          const response = await authService.signup(data);

          storageService.setToken(response.accessToken);
          storageService.setRefreshToken(response.refreshToken);
          storageService.setUser(response.user);

          set({
            user: response.user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Signup failed";
          set({ isLoading: false, error: message });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });

        try {
          await authService.logout();
        } finally {
          storageService.clearAuth();

          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      },

      forgotPassword: async (data: ForgotPasswordRequest) => {
        set({ isLoading: true, error: null });

        try {
          await authService.forgotPassword(data);
          set({ isLoading: false });
        } catch (error) {
          const message =
            error instanceof Error
              ? error.message
              : "Failed to send reset email";
          set({ isLoading: false, error: message });
          throw error;
        }
      },

      resetPassword: async (data: ResetPasswordRequest) => {
        set({ isLoading: true, error: null });

        try {
          await authService.resetPassword(data);
          set({ isLoading: false });
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Failed to reset password";
          set({ isLoading: false, error: message });
          throw error;
        }
      },

      refreshSession: async () => {
        const refreshToken = storageService.getRefreshToken();
        if (!refreshToken) return;

        try {
          const response = await authService.refreshToken({ refreshToken });
          storageService.setToken(response.accessToken);
        } catch {
          // If refresh fails, logout
          await get().logout();
        }
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: "AuthStore",
    }
  )
);

// Selector hooks for optimized re-renders
export const useUser = () => useAuthStore((state) => state.user);
export const useIsAuthenticated = () =>
  useAuthStore((state) => state.isAuthenticated);
export const useAuthLoading = () => useAuthStore((state) => state.isLoading);
export const useAuthError = () => useAuthStore((state) => state.error);
export const useAuthActions = () =>
  useAuthStore(
    useShallow((state) => ({
      login: state.login,
      signup: state.signup,
      logout: state.logout,
      forgotPassword: state.forgotPassword,
      resetPassword: state.resetPassword,
      clearError: state.clearError,
      refreshSession: state.refreshSession,
      initAuth: state.initAuth,
    }))
  );
