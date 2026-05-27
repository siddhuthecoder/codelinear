import type { Metadata } from "next";
import { Archivo, Chivo_Mono, Figtree } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion";
import { ThemeProvider } from "@/components/theme";
import { cn } from "@/lib/utils";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

// Nav/button text only — not on any LCP element, keep out of critical path
const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-chivo-mono",
  display: "optional",
  preload: false,
});

// Hero heading → LCP element, preload eagerly
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-archivo",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "N7 — Modern Banking",
  description:
    "The new foundation of modern banking. Innovation, growth, and operational excellence.",
  keywords: ["banking", "core banking", "cloud banking", "fintech", "N7", "digital banking"],
  openGraph: {
    title: "N7 — Modern Banking",
    description:
      "The new foundation of modern banking. Innovation, growth, and operational excellence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "N7 — Modern Banking",
    description: "The new foundation of modern banking.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Runs before React hydrates — reads localStorage and applies the correct
 * theme class to <html> immediately so there is no flash of wrong theme.
 * Falls back to system preference, then to dark.
 */
const themeScript = `(function(){
  try {
    var t = localStorage.getItem('n7-theme');
    var html = document.documentElement;
    if (t === 'light') {
      html.classList.remove('dark');
      html.classList.add('light');
    } else if (t === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
        html.classList.add('light');
      }
    }
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(figtree.variable, chivoMono.variable, archivo.variable, "dark")}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={cn(figtree.className, "font-sans")}>
        <ThemeProvider>
          <SiteHeader />
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
