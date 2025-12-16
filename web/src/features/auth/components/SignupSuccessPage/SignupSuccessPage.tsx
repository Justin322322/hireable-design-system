"use client";

import Image from "next/image";
export function SignupSuccessPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6 px-4 pb-10">
        {/* Avatar Illustration */}
        <div className="relative size-[200px]">
          <Image
            src="/images/Avatar-client.svg"
            alt="Success"
            fill
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <h1
          className="max-w-[700px] text-center text-neutral-900 lg:max-w-[1120px]"
          style={{
            fontFamily: "var(--heading-m-font-family)",
            fontSize: "var(--heading-m-font-size)",
            fontWeight: "var(--heading-m-font-weight)",
            lineHeight: "var(--heading-m-line-height)",
            letterSpacing: "var(--heading-m-letter-spacing)",
          }}
        >
          Congratulations, your account has been created. Let&apos;s get you
          started
        </h1>
      </div>
    </div>
  );
}
