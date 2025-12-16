/**
 * API Endpoints - Centralized endpoint definitions
 *
 * All API endpoints should be defined here for:
 * - Single source of truth
 * - Easy API versioning
 * - Better discoverability
 */

export const AUTH = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  LOGOUT: "/auth/logout",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  REFRESH_TOKEN: "/auth/refresh",
  ME: "/auth/me",
  VERIFY_EMAIL: "/auth/verify-email",
} as const;

export const WAITLIST = {
  TALENT: "/waitlist/talent",
  CLIENT: "/waitlist/client",
} as const;

export const USERS = {
  LIST: "/users",
  GET: (id: string) => `/users/${id}`,
  UPDATE: (id: string) => `/users/${id}`,
  DELETE: (id: string) => `/users/${id}`,
  PROFILE: "/users/profile",
} as const;

export const JOBS = {
  LIST: "/jobs",
  GET: (id: string) => `/jobs/${id}`,
  CREATE: "/jobs",
  UPDATE: (id: string) => `/jobs/${id}`,
  DELETE: (id: string) => `/jobs/${id}`,
} as const;

export const APPLICATIONS = {
  LIST: "/applications",
  GET: (id: string) => `/applications/${id}`,
  CREATE: "/applications",
  UPDATE_STATUS: (id: string) => `/applications/${id}/status`,
} as const;

export const TRIALS = {
  LIST: "/trials",
  GET: (id: string) => `/trials/${id}`,
  CREATE: "/trials",
  UPDATE: (id: string) => `/trials/${id}`,
  COMPLETE: (id: string) => `/trials/${id}/complete`,
} as const;
