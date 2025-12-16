"use client";

import { BackLink } from "@/components/ui/back-link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { PasswordInput } from "@/components/ui/password-input";
import { AuthLayout } from "@/features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { resetPasswordSchema, type ResetPasswordFormData } from "../../schemas";

const passwordRequirements = [
  "Numbers",
  "Upper and lowercase letters",
  "Special character",
  "8 characters minimum",
];

export function ResetPasswordPage() {
  const [generalError, setGeneralError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (_data: ResetPasswordFormData) => {
    setGeneralError(null);
    try {
      // TODO: Call reset password API
    } catch {
      setGeneralError("An error occurred. Please try again.");
    }
  };

  return (
    <AuthLayout backButton={<BackLink href="/login">back to login</BackLink>}>
      <div className="relative z-10 w-full max-w-[480px] space-y-5 lg:space-y-6">
        {/* Header */}
        <div className="flex flex-col items-center space-y-3">
          {/* Small Logo */}
          <Logo
            className="relative size-10 lg:size-11"
            width={44}
            height={44}
          />

          <h2 className="font-display text-foreground text-center text-2xl font-semibold tracking-tight lg:text-[32px]">
            Reset your password
          </h2>

          <p className="font-text-paragraph text-center text-sm leading-relaxed font-normal text-neutral-700">
            Create a new password for your account.
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-4"
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

          <div className="space-y-3">
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide"
              >
                Create new password
              </label>
              <PasswordInput
                id="password"
                placeholder="Enter new password..."
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                className={`h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-400 lg:h-11 ${
                  errors.password
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-neutral-300"
                }`}
                {...register("password")}
              />
              {errors.password && (
                <p id="password-error" className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="grid gap-x-3 gap-y-1 text-xs text-neutral-700 sm:grid-cols-2 lg:text-sm lg:text-neutral-900">
              {passwordRequirements.map((requirement) => (
                <div key={requirement} className="flex items-center gap-2">
                  <span className="size-1 shrink-0 rounded-full bg-neutral-500 lg:size-1.5 lg:bg-neutral-900" />
                  <span>{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="confirmPassword"
              className="font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide"
            >
              Confirm password
            </label>
            <PasswordInput
              id="confirmPassword"
              placeholder="Confirm password..."
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={
                errors.confirmPassword ? "confirmPassword-error" : undefined
              }
              className={`h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-400 lg:h-11 ${
                errors.confirmPassword
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-neutral-300"
              }`}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p id="confirmPassword-error" className="text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 pt-1">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.history.back()}
              className="font-text-paragraph-b text-foreground h-10 flex-1 rounded-[8px] border-neutral-300 bg-white text-sm font-semibold hover:bg-gray-50 lg:h-11"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-client font-text-paragraph-b h-10 flex-1 rounded-[8px] text-sm font-semibold text-white hover:bg-[#008ecc] lg:h-11"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
