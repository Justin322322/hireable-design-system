"use client";

import { PageLayout } from "@/components/layout";
import { ErrorBoundary } from "@/components/shared";
import { FAQSection, FooterSection } from "@/features/waitlist";
import React from "react";

export const PrivacyPolicyPage = (): React.ReactElement => {
  return (
    <PageLayout navbarProps={{ showCta: false }}>
      <main className="flex flex-col items-start justify-center gap-16 px-4 py-20 md:px-[200px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <h1 className="font-display text-[48px] leading-[120%] font-semibold text-neutral-900">
            Privacy Policy
          </h1>
          <p className="font-sans text-[24px] leading-[150%] font-normal tracking-[0.2px] text-neutral-900">
            Effective Date: July 17, 2025
          </p>
        </div>

        {/* Body */}
        <div className="font-sans text-[20px] leading-[150%] font-normal tracking-[0.4px] text-neutral-900">
          <div className="space-y-8">
            <p>
              Hireable.ph (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;) is committed to protecting your personal data
              and ensuring your privacy. This Privacy Policy explains how we
              collect, use, and protect your information when you join our
              waitlist, visit our website, or use our services.
            </p>

            <PolicySection title="1. Information We Collect">
              <p>
                We may collect the following personal information when you sign
                up or interact with us:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Full name</li>
                <li>Email address</li>
                <li>Location (if provided)</li>
                <li>
                  Any additional details you choose to share (e.g., profession,
                  interests)
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="2. How We Use Your Information">
              <p>We use your information to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Provide updates about Hireable and our services</li>
                <li>Send early access invitations and onboarding materials</li>
                <li>Ask for your feedback as a beta tester</li>
                <li>Improve our platform and develop new features</li>
                <li>Communicate announcements, offers, and relevant content</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. How We Store and Protect Your Data">
              <p>
                We store your data securely using reputable cloud-based
                services. We implement appropriate security measures to prevent
                unauthorized access, disclosure, or misuse.
              </p>
            </PolicySection>

            <PolicySection title="4. Sharing of Information">
              <p>
                We do not sell or share your personal data with third parties,
                except:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  With service providers strictly helping us operate (e.g.,
                  email services)
                </li>
                <li>
                  When legally required (e.g., by government or law enforcement)
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="5. Your Rights">
              <p>
                Under the Philippine Data Privacy Act, you have the right to:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Access the personal data we hold about you</li>
                <li>Correct or update your information</li>
                <li>Withdraw consent or unsubscribe from communications</li>
                <li>Request deletion of your data</li>
              </ul>
              <p>
                To exercise your rights, contact us at:{" "}
                <a
                  href="mailto:hello@hireable.ph"
                  className="text-client hover:underline"
                >
                  hello@hireable.ph
                </a>
              </p>
            </PolicySection>

            <PolicySection title="6. Updates to This Policy">
              <p>
                We may update this Privacy Policy to reflect changes in our
                practices. We will notify you of any significant updates by
                email or through our website.
              </p>
            </PolicySection>

            <PolicySection title="7. Contact Us">
              <p>
                If you have questions or concerns about this Privacy Policy,
                reach out to:
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@hireable.ph"
                  className="text-client hover:underline"
                >
                  hello@hireable.ph
                </a>
              </p>
            </PolicySection>
          </div>
        </div>
      </main>

      <ErrorBoundary>
        <FAQSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <FooterSection />
      </ErrorBoundary>
    </PageLayout>
  );
};

/** Reusable policy section component */
function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading-s text-xl font-semibold text-neutral-900">
        {title}
      </h2>
      {children}
    </section>
  );
}
