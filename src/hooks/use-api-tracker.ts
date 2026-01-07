"use client";

import { useState, useEffect, useCallback } from "react";
import { apiTracker, type ApiCall } from "@/lib/api-tracker";

/**
 * Hook to subscribe to API tracker updates
 * Useful for debugging panels and monitoring
 */
export function useApiTracker() {
  // Initialize state directly from apiTracker (avoids setState in effect)
  const [calls, setCalls] = useState<ApiCall[]>(() => apiTracker.getCalls());
  const [stats, setStats] = useState(() => apiTracker.getStats());

  useEffect(() => {
    // Subscribe to updates only - initial state is set via lazy initializer
    const unsubscribe = apiTracker.subscribe((newCalls) => {
      setCalls(newCalls);
      setStats(apiTracker.getStats());
    });

    return unsubscribe;
  }, []);

  const clear = useCallback(() => {
    apiTracker.clear();
  }, []);

  const getCallsByEndpoint = useCallback((endpoint: string) => {
    return apiTracker.getCallsByEndpoint(endpoint);
  }, []);

  return {
    calls,
    stats,
    clear,
    getCallsByEndpoint,
  };
}
