"use client";

import { BackLink } from "@/components/ui/back-link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { AuthLayout } from "@/features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "../../schemas";

export function ForgotPasswordPage() {
  const [generalError, setGeneralError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (_data: ForgotPasswordFormData) => {
    setGeneralError(null);
    try {
      // TODO: Call forgot password API
    } catch {
      setGeneralError("An error occurred. Please try again.");
    }
  };

  return (
    <AuthLayout backButton={<BackLink href="/">back to landing page</BackLink>}>
      <div className="relative z-10 w-full max-w-[480px] space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          {/* Small Logo */}
          <Logo className="relative size-[44px]" width={44} height={44} />

          <h2 className="font-display text-foreground text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Forgot your password?
          </h2>

          <p className="font-text-paragraph text-center text-sm font-normal text-neutral-700">
            Enter your email address to send code to your account.
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* General Error Alert */}
          {generalError && (
            <div
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            >
              {generalError}
            </div>
          )}

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide"
            >
              Email address
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter email address...."
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`font-text-paragraph text-foreground h-[44px] rounded-[8px] bg-white placeholder:text-neutral-700 ${
                errors.email
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-neutral-300"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.history.back()}
              className="font-text-paragraph-b text-foreground h-[44px] flex-1 rounded-[8px] border-neutral-300 bg-white text-sm font-semibold hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-client font-text-paragraph-b h-[44px] flex-1 rounded-[8px] text-sm font-semibold text-white hover:bg-[#008ecc]"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>

        <div className="font-text-paragraph flex flex-wrap items-center justify-center gap-1 text-center text-sm">
          <span className="text-foreground">
            Don&apos;t have an account yet?
          </span>
          <a
            href="/signup"
            className="text-client cursor-pointer hover:underline"
          >
            Sign up now
          </a>
        </div>
      </div>
    </AuthLayout>
  );
}
