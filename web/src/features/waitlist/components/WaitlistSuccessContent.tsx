"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";

// Animation data imports for Lottie
import clientSuccessAnimation from "@/../public/animated-icons/waitlist-success-client.json";
import talentSuccessAnimation from "@/../public/animated-icons/waitlist-success-talent.json";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61560907814259",
  instagram: "https://www.instagram.com/hireable.ph/",
  tiktok: "https://www.tiktok.com/@hireable.ph",
  linkedin: "https://www.linkedin.com/company/hireable-ph/",
};

type Role = "client" | "talent";

interface WaitlistSuccessContentProps {
  role: Role;
}

export const WaitlistSuccessContent = ({
  role,
}: WaitlistSuccessContentProps) => {
  const isClient = role === "client";
  const animation = isClient ? clientSuccessAnimation : talentSuccessAnimation;
  const clientLottieClasses =
    "top-[-30px] left-1/2 h-[316px] w-[586px] -translate-x-1/2";
  const talentLottieClasses =
    "top-1/2 left-0 h-[257px] w-[476px] -translate-y-1/2";

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white">
      <div className="flex h-[576px] w-[480px] flex-col items-center gap-10">
        {/* Lottie Animation - 480x256 */}
        <div className="relative h-[256px] w-[480px] shrink-0 overflow-hidden">
          <Lottie
            animationData={animation}
            loop={true}
            className={cn(
              "absolute",
              isClient ? clientLottieClasses : talentLottieClasses
            )}
          />
        </div>

        {/* Header */}
        <div className="flex shrink-0 flex-col items-center gap-[18px] text-center">
          <h1 className="font-['DM_Sans'] text-[40px] leading-[1.2] font-semibold text-[#666666]">
            Thank you for signing up!
          </h1>
          <p className="font-['Inter'] text-[15px] leading-normal font-normal tracking-[0.3px] text-neutral-700">
            You&apos;re now on the Hireable waitlist. We&apos;ll notify you once
            early access opens.
          </p>
        </div>

        {/* CTA Button - 186x48 */}
        <Link href="/">
          <Button
            className={cn(
              "flex h-[48px] w-[186px] items-center justify-center gap-2 rounded-[8px] px-5 py-2 font-['Inter'] text-[16px] leading-[96%] font-semibold text-white",
              isClient
                ? "bg-client hover:bg-client-hover"
                : "bg-talent hover:bg-talent-hover"
            )}
          >
            Back to Homepage
          </Button>
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-[13.33px]">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex size-10 items-center justify-center rounded-full text-neutral-700 transition-colors",
              isClient ? "hover:text-client" : "hover:text-talent"
            )}
            aria-label="Facebook"
          >
            <FaFacebook className="size-6" />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex size-10 items-center justify-center rounded-full text-neutral-700 transition-colors",
              isClient ? "hover:text-client" : "hover:text-talent"
            )}
            aria-label="Instagram"
          >
            <AiFillInstagram className="size-7" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex size-10 items-center justify-center rounded-full text-neutral-700 transition-colors",
              isClient ? "hover:text-client" : "hover:text-talent"
            )}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="size-6" />
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex size-10 items-center justify-center rounded-full text-neutral-700 transition-colors",
              isClient ? "hover:text-client" : "hover:text-talent"
            )}
            aria-label="TikTok"
          >
            <FaTiktok className="size-6" />
          </a>
        </div>
      </div>
    </div>
  );
};
