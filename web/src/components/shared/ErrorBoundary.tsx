"use client";

import { Button } from "@/components/ui";
import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen items-center justify-center bg-neutral-50">
            <div className="max-w-md rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-lg">
              <div className="mb-4 text-6xl">⚠️</div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">
                Something went wrong
              </h2>
              <p className="mb-6 text-gray-600">
                We&apos;re sorry for the inconvenience. Please try refreshing
                the page.
              </p>
              <Button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="rounded-lg bg-[var(--color-client)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-client-hover)]"
              >
                Try again
              </Button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
