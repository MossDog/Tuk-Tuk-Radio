import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";

const dm_sans = DM_Sans({
  subsets: ["latin"],
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
    <html lang="en" className={dm_sans.variable}>
      <body className="min-h-screen background">
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
