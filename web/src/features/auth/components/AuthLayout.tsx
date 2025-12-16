import { Logo } from "@/components/ui/logo";
import Image from "next/image";
import { ReactNode } from "react";
import { AuthBackground } from "./AuthBackground";

interface AuthLayoutProps {
  children: ReactNode;
  backButton?: ReactNode;
}

export function AuthLayout({ children, backButton }: AuthLayoutProps) {
  return (
    <div className="font-text-paragraph flex min-h-screen w-full overflow-x-hidden bg-white">
      {/* Left Side - Fixed sidebar */}
      <div
        className="auth-sidebar-bg fixed top-0 left-0 isolate hidden h-screen w-[552px] flex-col items-start overflow-hidden lg:flex"
        style={{ backgroundColor: "#212121" }}
      >
        {/* Logo - Fixed at top */}
        <div className="z-10 w-full p-8 lg:p-[56px]">
          <div className="inline-flex shrink-0 items-center gap-4">
            <Logo className="relative size-9" width={36} height={36} />
            <Image
              className="relative h-[25.24px] w-[122.75px] brightness-0 invert"
              alt="Hireable Text"
              src="/logos/frame-1-1.svg"
              width={123}
              height={25}
            />
          </div>
        </div>

        <AuthBackground />
      </div>

      {/* Spacer for fixed sidebar */}
      <div className="hidden w-[552px] shrink-0 lg:block" />

      {/* Right Side */}
      <div className="relative flex flex-1 flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        {backButton}
        {children}
      </div>
    </div>
  );
}
