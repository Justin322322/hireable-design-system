import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://hireable.com"
  ),
  title: {
    default: "Hireable PH - Top Filipino Talent for Dedicated Roles",
    template: "%s | Hireable PH",
  },
  alternates: {
    canonical: "/",
  },
  description: "Hireable PH",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "UI Components",
    "Hireable",
  ],
  authors: [
    {
      name: "Hireable Team",
      url: "https://hireable.com",
    },
  ],
  creator: "Hireable Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Hireable PH",
    description: "Hireable PH",
    siteName: "Hireable PH",
    images: [
      {
        url: "/logos/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Hireable Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hireable PH",
    description: "Hireable PH",
    images: ["/logos/favicon.svg"],
    creator: "@hireable",
  },
  icons: {
    icon: "/logos/favicon.svg",
    shortcut: "/logos/favicon.svg",
    apple: "/logos/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
