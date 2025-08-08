import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CookieBanner } from "@/components/CookieBanner";
import { PrivacyCompliantGA } from "@/components/PrivacyCompliantGA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Carlos Aguilera - Product Manager",
  description: "Personal website showcasing professional experience and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
        
        {/* GDPR Compliant Analytics */}
        <PrivacyCompliantGA />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        
        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
