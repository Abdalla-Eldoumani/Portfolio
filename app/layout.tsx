"use client";
import { Nunito } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider, useTheme } from "@/components/theme-context";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });


function LayoutInner({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <AnimatePresence mode="wait">
      <motion.html
        key={theme}
        lang="en"
        initial={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
        animate={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))", transition: { duration: 0.5 } }}
      >
        <body className={font.className}>{children}</body>
      </motion.html>
    </AnimatePresence>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LayoutInner>{children}</LayoutInner>
    </ThemeProvider>
  );
}
