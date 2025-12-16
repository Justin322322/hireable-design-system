/**
 * useApi Hook
 *
 * A generic hook for handling API calls with loading, error, and data states.
 * Supports automatic retries, caching, and request cancellation.
 */

"use client";

import { ApiClientError } from "@/services/api";
import type { AsyncState } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

// Extended AsyncState with additional API-specific fields
interface UseApiState<T> extends AsyncState<T> {
  isSuccess: boolean;
  isError: boolean;
}

interface UseApiOptions {
  /** Execute immediately on mount */
  immediate?: boolean;
  /** Number of retry attempts on failure */
  retries?: number;
  /** Delay between retries in ms */
  retryDelay?: number;
  /** Cache key for storing results */
  cacheKey?: string;
  /** Cache duration in ms */
  cacheDuration?: number;
}

interface UseApiReturn<T, P extends unknown[]> extends UseApiState<T> {
  execute: (...params: P) => Promise<T | null>;
  reset: () => void;
  setData: (data: T | null) => void;
}

/**
 * Simple LRU (Least Recently Used) Cache implementation
 * Uses Map which preserves insertion order.
 */
class SimpleCache<K, V> {
  private map = new Map<K, V>();
  private maxSize: number;

  constructor(maxSize: number = 50) {
    this.maxSize = maxSize;
  }

  get(key: K): V | undefined {
    const value = this.map.get(key);
    if (value) {
      // Refresh key (move to end to mark as recently used)
      this.map.delete(key);
      this.map.set(key, value);
    }
    return value;
  }

  set(key: K, value: V): void {
    if (this.map.has(key)) {
      // If updating existing key, remove it first
      this.map.delete(key);
    } else if (this.map.size >= this.maxSize) {
      // Evict the least recently used item (first in Map)
      const firstKey = this.map.keys().next().value;
      if (firstKey !== undefined) {
        this.map.delete(firstKey);
      }
    }
    this.map.set(key, value);
  }

  delete(key: K): void {
    this.map.delete(key);
  }

  clear(): void {
    this.map.clear();
  }
}

// Global LRU cache instance
const cache = new SimpleCache<string, { data: unknown; timestamp: number }>(50);

export function useApi<T, P extends unknown[] = []>(
  apiFunction: (...params: P) => Promise<T>,
  options: UseApiOptions = {}
): UseApiReturn<T, P> {
  const {
    immediate = false,
    retries = 0,
    retryDelay = 1000,
    cacheKey,
    cacheDuration = 5 * 60 * 1000, // 5 minutes default
  } = options;

  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    isLoading: immediate,
    error: null,
    isSuccess: false,
    isError: false,
  });

  const mountedRef = useRef(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Check cache on mount
  useEffect(() => {
    if (cacheKey) {
      const cached = cache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < cacheDuration) {
        setState({
          data: cached.data as T,
          isLoading: false,
          error: null,
          isSuccess: true,
          isError: false,
        });
      }
    }
  }, [cacheKey, cacheDuration]);

  // Cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      abortControllerRef.current?.abort();
    };
  }, []);

  const execute = useCallback(
    async (...params: P): Promise<T | null> => {
      // Cancel any pending request
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      // Check cache first
      if (cacheKey) {
        const cached = cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < cacheDuration) {
          if (mountedRef.current) {
            setState({
              data: cached.data as T,
              isLoading: false,
              error: null,
              isSuccess: true,
              isError: false,
            });
          }
          return cached.data as T;
        }
      }

      if (mountedRef.current) {
        setState((prev) => ({
          ...prev,
          isLoading: true,
          error: null,
          isError: false,
        }));
      }

      let lastError: Error | null = null;
      let attempt = 0;

      while (attempt <= retries) {
        try {
          const data = await apiFunction(...params);

          // Cache the result
          if (cacheKey) {
            cache.set(cacheKey, { data, timestamp: Date.now() });
          }

          if (mountedRef.current) {
            setState({
              data,
              isLoading: false,
              error: null,
              isSuccess: true,
              isError: false,
            });
          }

          return data;
        } catch (error) {
          lastError = error instanceof Error ? error : new Error(String(error));
          attempt++;

          if (attempt <= retries) {
            await new Promise((resolve) => setTimeout(resolve, retryDelay));
          }
        }
      }

      // All retries failed
      const errorMessage =
        lastError instanceof ApiClientError
          ? lastError.message
          : lastError?.message || "An error occurred";

      if (mountedRef.current) {
        setState({
          data: null,
          isLoading: false,
          error: errorMessage,
          isSuccess: false,
          isError: true,
        });
      }

      return null;
    },
    [apiFunction, cacheKey, cacheDuration, retries, retryDelay]
  );

  const reset = useCallback(() => {
    abortControllerRef.current?.abort();
    setState({
      data: null,
      isLoading: false,
      error: null,
      isSuccess: false,
      isError: false,
    });
  }, []);

  const setData = useCallback((data: T | null) => {
    setState((prev) => ({ ...prev, data }));
  }, []);

  // Execute immediately if option is set
  useEffect(() => {
    if (immediate) {
      execute(...([] as unknown as P));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate]);

  return {
    ...state,
    execute,
    reset,
    setData,
  };
}

/**
 * Clear all cached API responses
 */
export function clearApiCache(): void {
  cache.clear();
}

/**
 * Clear specific cached API response
 */
export function clearCacheKey(key: string): void {
  cache.delete(key);
}
