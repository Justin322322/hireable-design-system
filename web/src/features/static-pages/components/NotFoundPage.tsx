"use client";

import { Button } from "@/components/ui/button";
import { AuthBackground } from "@/features/auth";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NotFoundPage() {
  return (
    <div className="font-text-paragraph flex min-h-screen w-full overflow-x-hidden bg-white">
      {/* Left Side - Visual */}
      <div className="relative isolate order-0 hidden w-[552px] shrink-0 flex-col items-start overflow-hidden bg-neutral-900 p-[56px] lg:flex">
        {/* Logo */}
        <div className="z-1 order-1 flex-none">
          <div className="inline-flex shrink-0 items-center gap-2 sm:gap-4">
            <Image
              className="relative size-6 sm:size-9"
              alt="Hireable Logo"
              src="/logos/frame-2.svg"
              width={36}
              height={36}
            />
            <Image
              className="relative h-[17px] w-[80px] brightness-0 invert sm:h-[25.24px] sm:w-[122.75px]"
              alt="Hireable Text"
              src="/logos/frame-1-1.svg"
              width={123}
              height={25}
            />
          </div>
        </div>

        <AuthBackground />
      </div>

      {/* Right Side - Content */}
      <div className="relative flex flex-1 flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        {/* Back to Home - Top Left */}
        <Link
          href="/"
          className="hover:text-foreground absolute top-4 left-4 z-10 flex items-center gap-1 rounded-lg text-sm font-normal text-neutral-700 transition-colors sm:top-6 sm:left-6 lg:top-8 lg:left-8"
        >
          <div className="flex size-5 items-center justify-center">
            <ArrowLeft className="size-[14px]" />
          </div>
          <span className="hidden leading-[1.2] tracking-[0.2px] sm:inline">
            back to home
          </span>
          <span className="leading-[1.2] tracking-[0.2px] sm:hidden">back</span>
        </Link>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-[500px] space-y-8 text-center">
          {/* 404 Number */}
          <div className="font-display text-client text-[25vw] leading-none font-bold sm:text-[180px]">
            404
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Page not found
            </h1>
            <p className="font-text-paragraph mx-auto w-full text-base leading-relaxed font-normal text-neutral-700 sm:text-lg">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          {/* Action Button */}
          <div>
            <Button
              asChild
              className="bg-client font-text-paragraph-b h-[48px] w-full rounded-[10px] px-12 text-base font-semibold text-white hover:bg-[var(--color-client-hover)] sm:w-auto"
            >
              <Link href="/">Go back home</Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-4 pt-4 text-sm sm:gap-6">
            <Link
              href="/login"
              className="font-text-paragraph hover:text-client text-neutral-700 transition-colors hover:underline"
            >
              Login
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/signup"
              className="font-text-paragraph hover:text-client text-neutral-700 transition-colors hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
