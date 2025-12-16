/**
 * Application Configuration
 *
 * General application settings and metadata.
 */

import { env } from "./env";

export const APP_CONFIG = {
  URL: env.NEXT_PUBLIC_APP_URL,
  NAME: env.NEXT_PUBLIC_APP_NAME,
} as const;

export const AUTH_CONFIG = {
  TOKEN_KEY: "hireable_access_token",
  REFRESH_TOKEN_KEY: "hireable_refresh_token",
  USER_KEY: "hireable_user",
  SESSION_DURATION: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;
