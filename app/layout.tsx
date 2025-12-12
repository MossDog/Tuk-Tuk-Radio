import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAB",
  description: "This is the main webpage for BAB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="pastel">
      <body className="min-h-screen">
        {/* Top bar */}
        <TopBar />

        {/* Main content area */}
        <main className="relative min-h-[calc(100vh-4rem)] bg-base-200">
          {children}
        </main>
      </body>
    </html>
  );
}
