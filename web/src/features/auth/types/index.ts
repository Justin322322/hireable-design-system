/**
 * Auth Feature Types
 *
 * Re-exports auth-related types for convenience.
 * Feature-specific types can be added here.
 */

export type {
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ResetPasswordRequest,
  SignupRequest,
  SignupResponse,
} from "@hireable/shared/types/api";

// Feature-specific types
export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
