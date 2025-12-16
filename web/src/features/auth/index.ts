/**
 * Auth Feature - Public API
 *
 * This is the main entry point for the auth feature.
 * Import from '@/features/auth' for all auth-related functionality.
 */

// Hooks
export {
  useAuth,
  useAuthActions,
  useAuthError,
  useAuthLoading,
  useIsAuthenticated,
  useUser,
} from "./hooks";

// Services
export { authService } from "./services/auth.service";
export {
  mapUserResponseToDomain,
  mapUserToApiFormat,
} from "./services/mappers";
export { storageService } from "./services/storage.service";

// Schemas
export {
  forgotPasswordSchema,
  loginSchema,
  resetPasswordSchema,
  signupSchema,
  type ForgotPasswordFormData,
  type LoginFormData,
  type ResetPasswordFormData,
  type SignupFormData,
} from "./schemas";

// Types
export type {
  AuthState,
  AuthTokens,
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
} from "./types";

// Components
export { AuthBackground } from "./components/AuthBackground";
export { AuthLayout } from "./components/AuthLayout";
export { ForgotPasswordPage } from "./components/ForgotPasswordPage";
export { LoginPage } from "./components/LoginPage";
export { ResetPasswordPage } from "./components/ResetPasswordPage";
export {
  SignupFormPage,
  SignupRoleSelectionPage,
} from "./components/SignupPage";
export { SignupSuccessPage } from "./components/SignupSuccessPage";
export { VerifyEmailPage } from "./components/VerifyEmailPage";
