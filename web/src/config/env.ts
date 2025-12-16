/**
 * Environment Configuration
 *
 * Centralized environment variables with validation using Zod.
 * This is the single source of truth for all environment variables.
 */

import { z } from "zod";

const envSchema = z.object({
  // API Configuration
  NEXT_PUBLIC_API_URL: z.string().url().default("http://localhost:3001/api"),
  NEXT_PUBLIC_API_TIMEOUT: z.coerce.number().default(30000),

  // Application Configuration
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_APP_NAME: z.string().default("Hireable PH"),

  // Environment
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NODE_ENV: process.env.NODE_ENV,
});
