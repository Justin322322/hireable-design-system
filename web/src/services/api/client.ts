/**
 * API Client - Centralized HTTP client for backend communication
 *
 * This module provides a type-safe, configurable HTTP client that handles:
 * - Request/response interceptors
 * - Authentication token management
 * - Error handling and retry logic
 * - Request cancellation
 */

interface ApiConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export class ApiClientError extends Error {
  constructor(
    public status: number,
    message: string,
    public code?: string,
    public details?: Record<string, unknown>
  ) {
    super(message);
    this.name = "ApiClientError";
  }
}

type RequestInterceptor = (
  config: RequestInit
) => RequestInit | Promise<RequestInit>;
type ResponseInterceptor = (response: Response) => Response | Promise<Response>;

class ApiClient {
  private baseUrl: string;
  private timeout: number;
  private defaultHeaders: Record<string, string>;
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];

  constructor(config: ApiConfig) {
    this.baseUrl = config.baseUrl;
    this.timeout = config.timeout ?? 30000;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...config.headers,
    };
  }

  /**
   * Add a request interceptor
   */
  addRequestInterceptor(interceptor: RequestInterceptor): void {
    this.requestInterceptors.push(interceptor);
  }

  /**
   * Add a response interceptor
   */
  addResponseInterceptor(interceptor: ResponseInterceptor): void {
    this.responseInterceptors.push(interceptor);
  }

  /**
   * Set authorization token
   */
  setAuthToken(token: string | null): void {
    if (token) {
      this.defaultHeaders["Authorization"] = `Bearer ${token}`;
    } else {
      delete this.defaultHeaders["Authorization"];
    }
  }

  /**
   * Build full URL with query parameters
   */
  private buildUrl(
    endpoint: string,
    params?: Record<string, string | number | boolean>
  ): string {
    // Normalization: Ensure baseUrl ends with '/' and endpoint doesn't start with '/'
    // This prevents absolute path segments in endpoints (like /api/...) from overriding the base URL path
    const normalizedBase = this.baseUrl.endsWith("/")
      ? this.baseUrl
      : `${this.baseUrl}/`;
    const normalizedEndpoint = endpoint.startsWith("/")
      ? endpoint.slice(1)
      : endpoint;

    const url = new URL(normalizedEndpoint, normalizedBase);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }
    return url.toString();
  }

  /**
   * Execute request with interceptors and error handling
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    params?: Record<string, string | number | boolean>
  ): Promise<ApiResponse<T>> {
    const url = this.buildUrl(endpoint, params);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    let config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
      signal: controller.signal,
    };

    // Apply request interceptors
    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }

    try {
      let response = await fetch(url, config);
      clearTimeout(timeoutId);

      // Apply response interceptors
      for (const interceptor of this.responseInterceptors) {
        response = await interceptor(response);
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiClientError(
          response.status,
          errorData.message || `HTTP ${response.status}`,
          errorData.code,
          errorData.details
        );
      }

      const data = await response.json();
      return {
        data,
        status: response.status,
        message: "Success",
      };
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof ApiClientError) {
        throw error;
      }

      // Handle AbortError (timeout)
      if (error instanceof Error && error.name === "AbortError") {
        throw new ApiClientError(
          408,
          "Request timed out. Please check your connection and try again.",
          "TIMEOUT"
        );
      }

      // Handle network errors (Failed to fetch, CORS, etc.)
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        throw new ApiClientError(
          0,
          "Unable to connect to the server. Please check if the API server is running and accessible.",
          "NETWORK_ERROR",
          {
            possibleCauses: [
              "The API server may not be running",
              "There may be a CORS configuration issue",
              "The network connection may be unavailable",
              "The API URL may be incorrect",
            ],
            apiUrl: url,
          }
        );
      }

      // Handle other network-related errors
      if (error instanceof TypeError) {
        throw new ApiClientError(
          0,
          `Network error: ${error.message}`,
          "NETWORK_ERROR",
          { originalError: error.message }
        );
      }

      // Handle generic errors
      throw new ApiClientError(
        500,
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
        "UNKNOWN_ERROR"
      );
    }
  }

  async get<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "GET" }, params);
  }

  async post<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  async put<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  async patch<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PATCH",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }
}

import { env } from "@/config";

// Create singleton instance
const apiClient = new ApiClient({
  baseUrl: env.NEXT_PUBLIC_API_URL,
  timeout: env.NEXT_PUBLIC_API_TIMEOUT,
});

export { apiClient };
