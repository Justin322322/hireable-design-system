/**
 * Auth Initializer - Initializes auth state from storage
 *
 * This component should be placed near the root of the app to initialize
 * auth state on mount. It uses the auth store's initAuth action.
 */

"use client";

import { useAuthStore } from "@/stores";
import React, { useEffect } from "react";

interface AuthInitializerProps {
  children: React.ReactNode;
}

export const AuthInitializer = ({
  children,
}: AuthInitializerProps): React.ReactElement => {
  const initAuth = useAuthStore((state) => state.initAuth);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return <>{children}</>;
};
