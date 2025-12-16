/**
 * Common Types
 *
 * Shared type definitions used across the application.
 */

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

/**
 * Paginated response wrapper
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

/**
 * Select option for dropdowns
 */
export interface SelectOption<T = string> {
  value: T;
  label: string;
}

/**
 * Form field state
 */
export interface FieldState<T> {
  value: T;
  error?: string;
  touched?: boolean;
}

/**
 * Async operation state
 */
export interface AsyncState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}
