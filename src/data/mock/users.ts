/**
 * User/Auth Mock Data
 */

export type UserRole = "employer" | "talent" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  company?: string;
  createdAt: string;
  lastLoginAt: string;
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: string;
}

export const mockUsers: User[] = [
  {
    id: "user-001",
    email: "employer@example.com",
    name: "John Smith",
    avatar: "/images/john-smith.svg",
    role: "employer",
    company: "TechCorp Inc.",
    createdAt: "2025-06-15T10:00:00Z",
    lastLoginAt: "2026-01-07T08:30:00Z",
  },
  {
    id: "user-002",
    email: "talent@example.com",
    name: "Maria Santos",
    avatar: "/images/maria-santos.svg",
    role: "talent",
    createdAt: "2025-08-20T14:00:00Z",
    lastLoginAt: "2026-01-06T16:45:00Z",
  },
  {
    id: "user-003",
    email: "admin@example.com",
    name: "Admin User",
    role: "admin",
    createdAt: "2025-01-01T00:00:00Z",
    lastLoginAt: "2026-01-07T09:00:00Z",
  },
];

export const mockCurrentUser = mockUsers[0]; // Default to employer

export const mockAuthSession: AuthSession = {
  user: mockCurrentUser,
  token: "mock-jwt-token-abc123",
  expiresAt: "2026-01-08T08:30:00Z",
};
