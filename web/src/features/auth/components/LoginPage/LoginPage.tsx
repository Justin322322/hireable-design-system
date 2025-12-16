"use client";

import { BackLink } from "@/components/ui/back-link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { PasswordInput } from "@/components/ui/password-input";
import { ROUTES } from "@/constants";
import { AuthLayout, authService } from "@/features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "../../schemas";

export function LoginPage() {
  const [generalError, setGeneralError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setGeneralError(null);
    try {
      await authService.login(data);
      // Redirect or handle successful login
    } catch {
      setGeneralError("Invalid email or password");
    }
  };

  return (
    <AuthLayout
      backButton={<BackLink href={ROUTES.HOME}>back to landing page</BackLink>}
    >
      <div className="relative z-10 w-full max-w-[480px] space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          {/* Small Logo */}
          <Logo className="relative size-[44px]" width={44} height={44} />

          <h2 className="font-display text-foreground text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Login to Hireable
          </h2>
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
              placeholder="Email address"
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

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide"
            >
              Password
            </label>
            <PasswordInput
              id="password"
              autoComplete="current-password"
              placeholder="Password"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={`font-text-paragraph text-foreground h-[44px] rounded-[8px] bg-white placeholder:text-neutral-700 ${
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

          <div className="flex items-center justify-start">
            <Link
              href={ROUTES.FORGOT_PASSWORD}
              className="font-text-paragraph text-client cursor-pointer text-sm font-normal hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-client font-text-paragraph-b hover:bg-client-hover h-[44px] w-full rounded-[8px] text-sm font-semibold text-white"
          >
            {isSubmitting ? "Logging in..." : "Continue"}
          </Button>
        </form>

        <div className="font-text-paragraph flex items-center justify-center gap-1 text-sm">
          <span className="text-foreground">
            Don&apos;t have an account yet?
          </span>
          <Link
            href={ROUTES.SIGNUP}
            className="text-client cursor-pointer hover:underline"
          >
            Sign up now
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
