import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "SMM Panel Termurah se Indonesia",
    absolute: "PPOB Termurah se Indonesia",
  },
  description: "SMM Panel Termurah se Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <NavBar />
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
