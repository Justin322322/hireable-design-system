import { PrivacyPolicyPage } from "@/features/static-pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Hireable.ph",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
