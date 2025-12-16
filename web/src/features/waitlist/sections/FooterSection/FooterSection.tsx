"use client";

import { useSelectedRole } from "@/stores";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { SocialLink } from "./components";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61560907814259",
    label: "Facebook",
    icon: <FaFacebook className="size-6" />,
  },
  {
    href: "https://www.instagram.com/hireable.ph/",
    label: "Instagram",
    icon: <AiFillInstagram className="size-7" />,
  },
  {
    href: "https://www.linkedin.com/company/hireable-ph/",
    label: "LinkedIn",
    icon: <FaLinkedin className="size-6" />,
  },
  {
    href: "https://www.tiktok.com/@hireable.ph",
    label: "TikTok",
    icon: <FaTiktok className="size-6" />,
  },
];

export const FooterSection = (): React.ReactElement => {
  const selectedRole = useSelectedRole();

  return (
    <footer className="flex w-full flex-col items-center bg-[var(--color-neutral-100)]">
      <div className="flex h-[88px] w-full items-center justify-center border-t border-neutral-300 px-4 py-6 sm:px-10 lg:px-[80px]">
        <div className="flex w-full max-w-[1352px] flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0">
          <p className="font-['Inter'] text-base leading-[150%] font-normal tracking-[0.2px] text-neutral-700">
            © 2025 Hireable PH
          </p>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                label={link.label}
                selectedRole={selectedRole}
                icon={link.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
