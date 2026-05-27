import type { Metadata } from "next";
import { Archivo, Chivo_Mono, Figtree } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion";
import { cn } from "@/lib/utils";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-chivo-mono",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "N7 — Modern Banking",
  description:
    "The new foundation of modern banking. Innovation, growth, and operational excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(figtree.variable, chivoMono.variable, archivo.variable, "dark")}
    >
      <body className={cn(figtree.className, "font-sans")}>
        <SiteHeader />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
