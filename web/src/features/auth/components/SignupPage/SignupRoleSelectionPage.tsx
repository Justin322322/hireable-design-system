"use client";

import { BackLink } from "@/components/ui/back-link";
import { AuthLayout } from "@/features/auth";
import Image from "next/image";
import { useState } from "react";

const imgTalent = "/images/signup-talent.svg";
const imgClient = "/images/signup-client.svg";

export function SignupRoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState<"client" | "talent" | null>(
    null
  );

  return (
    <AuthLayout backButton={<BackLink href="/login">back to login</BackLink>}>
      {/* Main Content - Centered */}
      <div className="relative z-10 flex w-full max-w-[720px] flex-1 flex-col items-start justify-center gap-4 sm:gap-6 lg:gap-8 lg:p-[56px]">
        <h1 className="font-display w-full text-center text-xl leading-normal font-semibold text-neutral-900 sm:text-2xl lg:text-[32px]">
          It only takes a minute to create an account
        </h1>

        <div className="flex w-full flex-col gap-3 sm:gap-4">
          {/* Client Card */}
          <a
            href="/signup/client"
            onClick={() => setSelectedRole("client")}
            className={`group focus-visible:ring-client relative h-auto min-h-[160px] w-full cursor-pointer rounded-2xl border bg-white p-2 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] sm:h-[192px] ${selectedRole === "client" ? "border-client" : "hover:border-client border-neutral-300"}`}
          >
            <div
              className={`flex size-full items-center gap-3 rounded-xl transition-colors sm:gap-4 ${selectedRole === "client" ? "bg-[#dcf4ff]" : "bg-white group-hover:bg-[#dcf4ff]"}`}
            >
              <div className="flex flex-1 flex-col items-start gap-2 p-3 sm:gap-3 sm:py-0 sm:pr-10 sm:pl-6">
                <h3
                  className={`font-display text-lg font-semibold transition-colors sm:text-xl ${selectedRole === "client" ? "text-neutral-900" : "text-neutral-900 group-hover:text-neutral-800"}`}
                >
                  I&apos;m a Client
                </h3>
                <p
                  className={`font-text-paragraph text-sm leading-[1.2] font-normal tracking-[0.2px] transition-colors ${selectedRole === "client" ? "text-neutral-700" : "text-neutral-700 group-hover:text-neutral-800"}`}
                >
                  Post jobs, manage trials, and hire top remote talent with
                  confidence.
                </p>
              </div>
              <div className="relative size-[80px] shrink-0 sm:size-[140px]">
                <div className="absolute inset-[6.43%_3.57%_6.88%_3.57%]">
                  <Image
                    src={imgClient}
                    alt="Client Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </a>

          {/* Talent Card */}
          <a
            href="/signup/talent"
            onClick={() => setSelectedRole("talent")}
            className={`group focus-visible:ring-talent relative h-auto min-h-[160px] w-full cursor-pointer rounded-2xl border bg-white p-2 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] sm:h-[192px] ${selectedRole === "talent" ? "border-talent" : "hover:border-talent border-neutral-300"}`}
          >
            <div
              className={`flex size-full items-center gap-3 rounded-xl transition-colors sm:gap-4 ${selectedRole === "talent" ? "bg-[#ffeaf2]" : "bg-white group-hover:bg-[#ffeaf2]"}`}
            >
              <div className="flex flex-1 flex-col items-start gap-2 p-3 sm:gap-3 sm:py-0 sm:pr-10 sm:pl-6">
                <h3
                  className={`font-display text-lg font-semibold transition-colors sm:text-xl ${selectedRole === "talent" ? "text-neutral-900" : "text-neutral-900 group-hover:text-neutral-800"}`}
                >
                  I&apos;m a Remote Talent
                </h3>
                <p
                  className={`font-text-paragraph text-sm leading-[1.2] font-normal tracking-[0.2px] transition-colors ${selectedRole === "talent" ? "text-neutral-700" : "text-neutral-700 group-hover:text-neutral-800"}`}
                >
                  Find global opportunities and work with great teams that fit
                  your style.
                </p>
              </div>
              <div className="relative size-[80px] shrink-0 sm:size-[140px]">
                <div className="absolute inset-[12.14%_5.71%_12.21%_5.71%]">
                  <Image
                    src={imgTalent}
                    alt="Talent Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Login Link */}
        <div className="flex w-full items-center justify-center gap-2 pt-2">
          <span className="font-text-paragraph text-sm leading-[1.2] font-normal tracking-[0.2px] text-neutral-900">
            Already have an account?
          </span>
          <a
            href="/login"
            className="flex cursor-pointer items-center justify-center"
          >
            <span className="font-text-paragraph text-client text-center text-sm leading-[1.2] font-normal tracking-[0.2px] hover:underline">
              Login
            </span>
          </a>
        </div>
      </div>
    </AuthLayout>
  );
}
