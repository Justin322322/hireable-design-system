/**
 * API Configuration
 *
 * Settings for the API client and backend communication.
 */

import { env } from "./env";

export const API_CONFIG = {
  BASE_URL: env.NEXT_PUBLIC_API_URL,
  TIMEOUT: env.NEXT_PUBLIC_API_TIMEOUT,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;
