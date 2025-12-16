/**
 * Route Constants
 *
 * Centralized route definitions for consistent navigation.
 */

export const ROUTES = {
  // Public routes
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  SIGNUP_CLIENT: "/signup/client",
  SIGNUP_TALENT: "/signup/talent",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  PRIVACY_POLICY: "/privacy-policy",

  // Protected routes
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  JOBS: "/jobs",
  APPLICATIONS: "/applications",
  TRIALS: "/trials",
  SETTINGS: "/settings",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
