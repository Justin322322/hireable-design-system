"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface VerifyEmailPageProps {
  email?: string;
}

export function VerifyEmailPage({
  email = "juanlopez@sample.com",
}: VerifyEmailPageProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex w-full items-center gap-2.5 bg-white px-5 pt-6 pb-3 backdrop-blur lg:px-20">
        <Link href="/" className="inline-flex shrink-0 items-center gap-3">
          <Image
            className="relative size-8"
            alt="Hireable Logo"
            src="/logos/frame-2.svg"
            width={32}
            height={32}
          />
          <Image
            className="relative h-[25px] w-[121px]"
            alt="Hireable Text"
            src="/logos/frame-1-1.svg"
            width={121}
            height={25}
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-10 pb-10">
          {/* Email Icon */}
          <div className="relative h-[120px] w-[108.9px]">
            <Image
              src="/images/verify-email-icon.svg"
              alt="Verify Email"
              fill
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex w-full max-w-[1120px] flex-col items-center gap-4 text-center">
            <h1
              className="text-neutral-900"
              style={{
                fontFamily: "var(--heading-m-font-family)",
                fontSize: "var(--heading-m-font-size)",
                fontWeight: "var(--heading-m-font-weight)",
                lineHeight: "var(--heading-m-line-height)",
                letterSpacing: "var(--heading-m-letter-spacing)",
              }}
            >
              Verify your email to proceed
            </h1>
            <p
              className="text-neutral-700"
              style={{
                fontFamily: "var(--text-s-font-family)",
                fontSize: "var(--text-s-font-size)",
                fontWeight: "var(--text-s-font-weight)",
                lineHeight: "var(--text-s-line-height)",
                letterSpacing: "var(--text-s-letter-spacing)",
              }}
            >
              We sent a verification link to{" "}
              <span className="font-semibold">{email}</span>. Check your inbox
              to activate your account, or look in your spam folder. Didn&apos;t
              get it? Resend below.
            </p>
          </div>

          {/* CTA Button */}
          <Button className="bg-client hover:bg-client-hover flex h-12 w-[237px] items-center justify-center gap-2 rounded-lg px-5 text-base font-semibold text-white">
            Resend Verification Email
          </Button>
        </div>
      </main>
    </div>
  );
}
