/**
 * Security Types
 *
 * Type definitions for security-related functionality.
 */

import type { NextRequest } from "next/server";

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedData?: string | null;
}

export interface SecurityLogEntry {
  timestamp: string;
  ip: string;
  method: string;
  path: string;
  userAgent?: string;
  suspicious?: boolean;
  reason?: string;
}

export type ValidationFunction = (value: string) => ValidationResult;
export type RequestValidationFunction = (
  request: NextRequest,
  maxSize?: number
) => boolean;
