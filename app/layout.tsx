import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tuk Tuk Radio",
  description: "This is the main webpage for Tuk Tuk Radio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-theme="pastel">
      <body className="min-h-screen bg-sky-200">
        {/* Top bar */}
        <TopBar />

        {/* Main content area */}
        <main className="relative min-h-[calc(100vh-4rem)] px-[20vw]">
          {children}
        </main>
      </body>
    </html>
  );
}
