"use client";

import { Navbar } from "@/components/layout";
import { ErrorBoundary } from "@/components/shared";
import { SmoothScrollProvider } from "@/providers";
import { useSelectedRole, useWaitlistModal } from "@/stores";
import dynamic from "next/dynamic";
import React from "react";
import { HeroBannerSection } from "../sections/HeroBannerSection";
import { ClientWaitlistModal } from "./modals/ClientWaitlistModal";
import { TalentWaitlistModal } from "./modals/TalentWaitlistModal";

const FeaturesSection = dynamic(
  () =>
    import("../sections/FeaturesSection").then((mod) => mod.FeaturesSection),
  { ssr: true }
);

const MainContentSection = dynamic(
  () =>
    import("../sections/MainContentSection").then(
      (mod) => mod.MainContentSection
    ),
  { ssr: true }
);

const FeaturesListSection = dynamic(
  () =>
    import("../sections/FeaturesListSection").then(
      (mod) => mod.FeaturesListSection
    ),
  { ssr: true }
);

const CallToActionSection = dynamic(
  () =>
    import("../sections/CallToActionSection").then(
      (mod) => mod.CallToActionSection
    ),
  { ssr: true }
);

const FAQSection = dynamic(
  () => import("../sections/FAQSection").then((mod) => mod.FAQSection),
  { ssr: true }
);

const FooterSection = dynamic(
  () => import("../sections/FooterSection").then((mod) => mod.FooterSection),
  { ssr: true }
);

const WaitlistPageContent = (): React.ReactElement => {
  const selectedRole = useSelectedRole();
  const { isOpen, open, close } = useWaitlistModal();

  const isTalent = selectedRole === "talent";

  return (
    <div className="relative flex min-h-screen flex-col items-start overflow-x-hidden bg-neutral-50">
      <Navbar onJoinWaitlistClick={open} isTalent={isTalent} />

      <div className="flex w-full flex-col gap-24 pt-20 sm:gap-32">
        <ErrorBoundary>
          <HeroBannerSection onJoinWaitlistClick={open} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeaturesSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <MainContentSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeaturesListSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <CallToActionSection onJoinWaitlistClick={open} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FAQSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <FooterSection />
        </ErrorBoundary>
      </div>

      {/* Both modals are always mounted to avoid race conditions during role switching.
          Each modal only opens when both: (1) modal is triggered AND (2) correct role is selected */}
      <TalentWaitlistModal isOpen={isOpen && isTalent} onClose={close} />
      <ClientWaitlistModal isOpen={isOpen && !isTalent} onClose={close} />
    </div>
  );
};

export const WaitlistPage = (): React.ReactElement => {
  return (
    <SmoothScrollProvider>
      <WaitlistPageContent />
    </SmoothScrollProvider>
  );
};
