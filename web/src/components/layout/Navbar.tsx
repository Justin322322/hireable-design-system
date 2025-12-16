"use client";

import { Button } from "@/components/ui";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useLenis } from "@/stores";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface NavbarProps {
  onJoinWaitlistClick?: () => void;
  isTalent?: boolean;
  showCta?: boolean;
}

export const Navbar = ({
  onJoinWaitlistClick,
  isTalent = false,
  showCta = true,
}: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isNavbarVisible = useScrollDirection(100);
  const router = useRouter();
  const lenis = useLenis();

  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // If on privacy-policy page, navigate back to waitlist page
    if (pathname === "/privacy-policy") {
      router.push("/");
      return;
    }

    // Use Lenis scrollTo for smooth scroll (works with Lenis instance)
    // Falls back to window.scrollTo if Lenis is not available
    if (lenis) {
      lenis.scrollTo(0, { immediate: false });
    } else if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isPrivacyPage = pathname === "/privacy-policy";

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 flex h-[68px] w-full items-center justify-center bg-linear-to-b from-[rgba(250,250,250,0.8)] to-[rgba(250,250,250,0.64)] px-[20px] backdrop-blur transition-transform duration-300 lg:px-[120px] ${
          isNavbarVisible || mobileMenuOpen
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        <div className="relative flex h-full w-full max-w-full items-center justify-between gap-[10px]">
          {/* Logo Section */}
          <button
            onClick={handleLogoClick}
            className="inline-flex shrink-0 cursor-pointer items-center gap-[3.61px] bg-transparent"
            aria-label={
              isPrivacyPage ? "Go to homepage" : "Scroll to hero section"
            }
          >
            <Image
              className="relative h-[36px] w-[36px]"
              alt="Hireable Logo"
              src="/logos/frame-2.svg"
              width={36}
              height={36}
            />

            <Image
              className="relative h-[25.24px] w-[122.75px]"
              alt="Hireable Text"
              src="/logos/frame-1-1.svg"
              width={123}
              height={25}
            />
          </button>

          {/* Desktop CTA Button */}
          {showCta && onJoinWaitlistClick && (
            <div className="hidden shrink-0 items-center sm:flex">
              <Button
                data-role={isTalent ? "talent" : "client"}
                onClick={onJoinWaitlistClick}
                className="bg-client hover:bg-client-hover data-[role=talent]:bg-talent data-[role=talent]:hover:bg-talent-hover flex h-[36px] w-[132px] items-center justify-center gap-[8px] rounded-[8px] border-0 px-[12px] py-[8px] shadow-none transition-colors duration-200"
              >
                <span className="text-center font-['Inter'] text-[14px] leading-[96%] font-semibold tracking-[0] whitespace-nowrap text-white">
                  Join the waitlist
                </span>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {showCta && onJoinWaitlistClick && (
            <button
              className="shrink-0 cursor-pointer rounded-lg p-1.5 transition-colors hover:bg-gray-100 sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="size-5 text-gray-700" />
              ) : (
                <Menu className="size-5 text-gray-700" />
              )}
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && showCta && onJoinWaitlistClick && (
        <div className="fixed top-16 right-0 left-0 z-40 border-b border-neutral-200 bg-white shadow-lg sm:hidden">
          <div className="flex flex-col gap-3 p-4">
            <Button
              data-role={isTalent ? "talent" : "client"}
              onClick={() => {
                onJoinWaitlistClick();
                setMobileMenuOpen(false);
              }}
              className="bg-client hover:bg-client-hover data-[role=talent]:bg-talent data-[role=talent]:hover:bg-talent-hover h-[44px] w-full rounded-[8px] border-0 px-4 py-2 shadow-none transition-colors duration-200"
            >
              <span className="text-center font-['Inter',Helvetica] text-sm leading-[13.4px] font-semibold tracking-[0] text-white">
                Join the waitlist
              </span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
