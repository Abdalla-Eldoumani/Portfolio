import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
