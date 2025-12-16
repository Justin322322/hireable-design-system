import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { Sidebar } from "@/components/layout/sidebar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hireable Design System",
  description: "A comprehensive design system for building consistent, accessible user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 overflow-auto flex justify-center">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
