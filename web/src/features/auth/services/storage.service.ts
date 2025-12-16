/**
 * Storage Service - Browser localStorage wrapper for auth data
 *
 * Handles token and user data persistence in localStorage.
 */

import { AUTH_CONFIG } from "@/config";
import type { User } from "@hireable/shared/types/api";

const { TOKEN_KEY, REFRESH_TOKEN_KEY, USER_KEY } = AUTH_CONFIG;

class StorageService {
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = typeof window !== "undefined";
  }

  getItem(key: string): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    if (!this.isBrowser) return;
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    if (!this.isBrowser) return;
    localStorage.removeItem(key);
  }

  // Auth specific helpers
  getToken(): string | null {
    return this.getItem(TOKEN_KEY);
  }

  setToken(token: string): void {
    this.setItem(TOKEN_KEY, token);
  }

  getRefreshToken(): string | null {
    return this.getItem(REFRESH_TOKEN_KEY);
  }

  setRefreshToken(token: string): void {
    this.setItem(REFRESH_TOKEN_KEY, token);
  }

  getUser(): User | null {
    const userStr = this.getItem(USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as User;
    } catch {
      return null;
    }
  }

  setUser(user: User): void {
    this.setItem(USER_KEY, JSON.stringify(user));
  }

  clearAuth(): void {
    this.removeItem(TOKEN_KEY);
    this.removeItem(REFRESH_TOKEN_KEY);
    this.removeItem(USER_KEY);
  }
}

export const storageService = new StorageService();
