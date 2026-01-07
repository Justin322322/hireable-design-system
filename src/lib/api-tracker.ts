/**
 * API Call Tracker
 * Tracks all mock API calls for debugging and monitoring
 */

export interface ApiCall {
  id: string;
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, unknown>;
  body?: unknown;
  response?: unknown;
  status: "pending" | "success" | "error";
  duration?: number;
  timestamp: Date;
  error?: string;
}

type ApiTrackerListener = (calls: ApiCall[]) => void;

class ApiTracker {
  private calls: ApiCall[] = [];
  private listeners: Set<ApiTrackerListener> = new Set();
  private maxCalls = 100; // Keep last 100 calls

  track(call: Omit<ApiCall, "id" | "timestamp">): string {
    const id = `api-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const newCall: ApiCall = {
      ...call,
      id,
      timestamp: new Date(),
    };
    
    this.calls = [newCall, ...this.calls].slice(0, this.maxCalls);
    this.notifyListeners();
    return id;
  }

  update(id: string, updates: Partial<ApiCall>): void {
    this.calls = this.calls.map((call) =>
      call.id === id ? { ...call, ...updates } : call
    );
    this.notifyListeners();
  }

  getCalls(): ApiCall[] {
    return [...this.calls];
  }

  getCallById(id: string): ApiCall | undefined {
    return this.calls.find((call) => call.id === id);
  }

  getCallsByEndpoint(endpoint: string): ApiCall[] {
    return this.calls.filter((call) => call.endpoint.includes(endpoint));
  }

  clear(): void {
    this.calls = [];
    this.notifyListeners();
  }

  subscribe(listener: ApiTrackerListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener(this.getCalls()));
  }

  // Stats
  getStats() {
    const total = this.calls.length;
    const success = this.calls.filter((c) => c.status === "success").length;
    const errors = this.calls.filter((c) => c.status === "error").length;
    const pending = this.calls.filter((c) => c.status === "pending").length;
    const avgDuration = this.calls
      .filter((c) => c.duration !== undefined)
      .reduce((sum, c) => sum + (c.duration || 0), 0) / (total || 1);

    return { total, success, errors, pending, avgDuration: Math.round(avgDuration) };
  }
}

export const apiTracker = new ApiTracker();
