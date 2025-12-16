/**
 * Security Middleware
 *
 * Request analysis and pattern detection utilities.
 */

import { NextRequest } from "next/server";

export class SecurityMiddleware {
  static getClientIP(request: NextRequest): string {
    const xForwardedFor = request.headers.get("x-forwarded-for");
    const xRealIp = request.headers.get("x-real-ip");
    const cfConnectingIp = request.headers.get("cf-connecting-ip");

    if (xForwardedFor) {
      return xForwardedFor.split(",")[0].trim();
    }
    if (xRealIp) {
      return xRealIp;
    }
    if (cfConnectingIp) {
      return cfConnectingIp;
    }
    return "unknown";
  }

  static detectSuspiciousPatterns(input: string): string[] {
    const suspiciousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /expression\s*\(/gi,
      /vbscript:/gi,
      /data:\s*text\/html/gi,
    ];

    const detected: string[] = [];
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(input)) {
        detected.push(pattern.source);
      }
    }
    return detected;
  }
}
