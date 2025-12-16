/**
 * Role Store - Zustand store for managing user role selection
 *
 * Manages the selected role (client/talent) state globally
 * without requiring provider wrappers.
 */

import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type RoleType = "client" | "talent";

interface RoleState {
  selectedRole: RoleType;
  setSelectedRole: (role: RoleType) => void;
  toggleRole: () => void;
}

export const useRoleStore = create<RoleState>()(
  devtools(
    (set) => ({
      selectedRole: "client",
      setSelectedRole: (role) => set({ selectedRole: role }),
      toggleRole: () =>
        set((state) => ({
          selectedRole: state.selectedRole === "client" ? "talent" : "client",
        })),
    }),
    {
      name: "RoleStore",
    }
  )
);

// Selector hooks for optimized re-renders
export const useSelectedRole = () =>
  useRoleStore((state) => state.selectedRole);
export const useSetSelectedRole = () =>
  useRoleStore((state) => state.setSelectedRole);
export const useToggleRole = () => useRoleStore((state) => state.toggleRole);
