/**
 * Security Logger
 *
 * Request logging for security monitoring.
 */

import { NextRequest } from "next/server";
import { SecurityMiddleware } from "./middleware";
import type { SecurityLogEntry } from "./types";

export class SecurityLogger {
  private static logs: SecurityLogEntry[] = [];
  private static readonly MAX_LOGS = 1000;

  static log(
    request: NextRequest,
    suspicious: boolean = false,
    reason?: string
  ): void {
    const entry: SecurityLogEntry = {
      timestamp: new Date().toISOString(),
      ip: SecurityMiddleware.getClientIP(request),
      method: request.method,
      path: new URL(request.url).pathname,
      userAgent: request.headers.get("user-agent") || undefined,
      suspicious,
      reason,
    };

    this.logs.push(entry);

    if (this.logs.length > this.MAX_LOGS) {
      this.logs = this.logs.slice(-this.MAX_LOGS);
    }

    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("[Security Log]", entry);
    }
  }

  static getLogs(): SecurityLogEntry[] {
    return [...this.logs];
  }

  static clearLogs(): void {
    this.logs = [];
  }
}
