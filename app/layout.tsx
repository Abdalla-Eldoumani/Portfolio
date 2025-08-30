import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdalla Eldoumani - Full Stack Developer & AI Engineer",
  description: "Computer Science student specializing in high-performance systems, AI/ML, and full-stack development. Creator of Rust HTTP servers handling 10k+ concurrent requests and performance-optimized C++ libraries.",
  keywords: ["Full Stack Developer", "Software Engineer", "AI ML", "Rust", "TypeScript", "Performance Optimization", "Computer Science"],
  authors: [{ name: "Abdalla Eldoumani", url: "https://github.com/Abdalla-Eldoumani" }],
  openGraph: {
    title: "Abdalla Eldoumani - Full Stack Developer & AI Engineer",
    description: "Innovative developer creating scalable web applications and high-performance systems. Open to new opportunities in 2025.",
    url: "https://portfolio-website.com",
    siteName: "Abdalla Eldoumani Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>{children}</body>
    </html>
  );
}
