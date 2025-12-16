/**
 * Services - API infrastructure exports
 *
 * This folder contains ONLY API client infrastructure.
 * Feature-specific services live in their respective feature folders.
 *
 * @example
 * // API client infrastructure
 * import { apiClient, ApiClientError } from "@/services";
 *
 * // Feature services (import from features, not here)
 * import { authService, storageService } from "@/features/auth";
 * import { waitlistService } from "@/features/waitlist";
 */

export * from "./api";
