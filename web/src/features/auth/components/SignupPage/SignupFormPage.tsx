"use client";

import { BackLink } from "@/components/ui/back-link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { AuthLayout } from "@/features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { signupSchema, type SignupFormData } from "../../schemas";

const passwordRequirements = [
  "Numbers",
  "Upper and lowercase letters",
  "Special character",
  "8 characters minimum",
];

const PRIVACY_POLICY_LINK = "/privacy-policy";

interface SignupFormPageProps {
  title: string;
  checkboxText: string;
}

export function SignupFormPage({ title, checkboxText }: SignupFormPageProps) {
  const [generalError, setGeneralError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const password = useWatch({ control, name: "password" }) || "";

  const isRequirementMet = (req: string) => {
    if (req === "Numbers") return /[0-9]/.test(password);
    if (req === "Upper and lowercase letters")
      return /[a-z]/.test(password) && /[A-Z]/.test(password);
    if (req === "Special character") return /[^a-zA-Z0-9]/.test(password);
    if (req === "8 characters minimum") return password.length >= 8;
    return false;
  };

  const onSubmit = async (_data: SignupFormData) => {
    setGeneralError(null);
    try {
      // TODO: Call signup API
    } catch {
      setGeneralError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <AuthLayout backButton={<BackLink href="/signup">select account</BackLink>}>
      <div className="z-10 flex w-full max-w-[480px] flex-col gap-3 rounded-2xl bg-white/80 p-6 pt-8 backdrop-blur-md sm:gap-4 sm:bg-transparent sm:p-0 sm:pt-10 sm:backdrop-blur-none lg:gap-6 lg:pt-14">
        <div className="text-center">
          <h1 className="font-display text-xl font-semibold text-neutral-900 sm:text-2xl lg:text-[32px]">
            {title}
          </h1>
        </div>

        <form
          className="space-y-4 lg:space-y-5"
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

          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="firstName"
                className="font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide"
              >
                First Name
              </label>
              <Input
                id="firstName"
                autoComplete="given-name"
                placeholder="Enter first name"
                aria-invalid={!!errors.firstName}
                aria-describedby={
                  errors.firstName ? "firstName-error" : undefined
                }
                className={`h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${
                  errors.firstName
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-neutral-300"
                }`}
                {...register("firstName")}
              />
              {errors.firstName && (
                <p id="firstName-error" className="text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="lastName"
                className="font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                autoComplete="family-name"
                placeholder="Enter last name"
                aria-invalid={!!errors.lastName}
                aria-describedby={
                  errors.lastName ? "lastName-error" : undefined
                }
                className={`h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${
                  errors.lastName
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-neutral-300"
                }`}
                {...register("lastName")}
              />
              {errors.lastName && (
                <p id="lastName-error" className="text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
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
              placeholder="Enter email address"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${
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
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide"
              >
                Create password
              </label>
              <PasswordInput
                id="password"
                autoComplete="new-password"
                placeholder="Create password"
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                className={`h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${
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
              {passwordRequirements.map((requirement) => {
                const met = isRequirementMet(requirement);
                return (
                  <div key={requirement} className="flex items-center gap-2">
                    <span
                      className={`size-1 rounded-full lg:size-1.5 ${
                        met
                          ? "bg-green-500"
                          : "bg-neutral-500 lg:bg-neutral-900"
                      }`}
                    />
                    <span className={met ? "text-green-600" : ""}>
                      {requirement}
                    </span>
                  </div>
                );
              })}
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
              autoComplete="new-password"
              placeholder="Confirm password"
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={
                errors.confirmPassword ? "confirmPassword-error" : undefined
              }
              className={`h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${
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

          <label className="flex cursor-pointer items-start gap-2.5 text-sm text-neutral-900">
            <input
              type="checkbox"
              className={`mt-0.5 size-4 rounded border ${
                errors.acceptTerms ? "border-red-500" : "border-neutral-300"
              }`}
              {...register("acceptTerms")}
            />
            <span className="leading-tight select-none">{checkboxText}</span>
          </label>
          {errors.acceptTerms && (
            <p className="text-sm text-red-600">{errors.acceptTerms.message}</p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-client hover:bg-client-hover h-10 w-full rounded-[8px] text-sm font-semibold text-white lg:h-11"
          >
            {isSubmitting ? "Signing up..." : "Sign up"}
          </Button>
        </form>

        {/* Login Link */}
        <div className="flex w-full items-center justify-center gap-2">
          <span className="font-text-paragraph text-sm leading-[1.2] font-normal tracking-[0.2px] text-neutral-900">
            Already have an account?
          </span>
          <Link
            href="/login"
            className="flex cursor-pointer items-center justify-center"
          >
            <span className="font-text-paragraph text-client text-center text-sm leading-[1.2] font-normal tracking-[0.2px] hover:underline">
              Login
            </span>
          </Link>
        </div>

        <p className="text-center text-xs leading-normal text-neutral-700 lg:text-left">
          By continuing, you acknowledge that you have read and accept the{" "}
          <Link href="/" className="text-client underline">
            Terms of Use
          </Link>{" "}
          and {}
          <Link
            href={PRIVACY_POLICY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-client underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </AuthLayout>
  );
}
