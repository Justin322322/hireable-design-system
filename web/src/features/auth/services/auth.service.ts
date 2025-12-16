/**
 * Authentication Service
 *
 * Handles all authentication-related API calls including:
 * - Login/Logout
 * - Signup
 * - Password reset
 * - Token refresh
 */

import { apiClient } from "@/services/api";
import { AUTH } from "@/services/api/endpoints";
import type {
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ResetPasswordRequest,
  SignupRequest,
  SignupResponse,
  User,
} from "@hireable/shared/types/api";

export const authService = {
  /**
   * Login with email and password
   */
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>(
      AUTH.LOGIN,
      credentials
    );

    // Store token for subsequent requests
    if (response.data.accessToken) {
      apiClient.setAuthToken(response.data.accessToken);
    }

    return response.data;
  },

  /**
   * Register a new user
   */
  async signup(data: SignupRequest): Promise<SignupResponse> {
    const response = await apiClient.post<SignupResponse>(AUTH.SIGNUP, data);

    if (response.data.accessToken) {
      apiClient.setAuthToken(response.data.accessToken);
    }

    return response.data;
  },

  /**
   * Logout current user
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post(AUTH.LOGOUT);
    } finally {
      apiClient.setAuthToken(null);
    }
  },

  /**
   * Request password reset email
   */
  async forgotPassword(
    data: ForgotPasswordRequest
  ): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>(
      AUTH.FORGOT_PASSWORD,
      data
    );
    return response.data;
  },

  /**
   * Reset password with token
   */
  async resetPassword(
    data: ResetPasswordRequest
  ): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>(
      AUTH.RESET_PASSWORD,
      data
    );
    return response.data;
  },

  /**
   * Refresh access token
   */
  async refreshToken(data: RefreshTokenRequest): Promise<RefreshTokenResponse> {
    const response = await apiClient.post<RefreshTokenResponse>(
      AUTH.REFRESH_TOKEN,
      data
    );

    if (response.data.accessToken) {
      apiClient.setAuthToken(response.data.accessToken);
    }

    return response.data;
  },

  /**
   * Get current authenticated user
   */
  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<User>(AUTH.ME);
    return response.data;
  },

  /**
   * Verify email with token
   */
  async verifyEmail(token: string): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>(
      AUTH.VERIFY_EMAIL,
      { token }
    );
    return response.data;
  },
};
