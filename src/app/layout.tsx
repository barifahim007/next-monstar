import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const serif = PT_Serif({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "next-monstar",
  description: "a crushed overview of next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.className} h-screen`}>{children}</body>
    </html>
  );
}
