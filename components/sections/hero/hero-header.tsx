"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme";
import { useRequestDemo } from "@/components/request-demo";

const navLinks = [
  { label: "Solutions", href: "#solutions", hasChevron: true },
  { label: "Resources", href: "#resources", hasChevron: true },
  { label: "About Us", href: "#about", hasChevron: false },
] as const;

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      aria-hidden
      className={cn("shrink-0 opacity-70", className)}
    >
      <path
        d="M0.75 0.75L4 4L7.25 0.75"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
      <rect y="0" width="18" height="1.5" rx="0.75" fill="currentColor" />
      <rect y="6" width="18" height="1.5" rx="0.75" fill="currentColor" />
      <rect y="12" width="18" height="1.5" rx="0.75" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M1 1L13 13M13 1L1 13"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroHeaderNav() {
  const { open: openDemo } = useRequestDemo();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for navbar glass intensity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleDemoClick() {
    setMenuOpen(false);
    openDemo();
  }

  return (
    <>
      <div className="mx-auto w-full max-w-[720px] flex items-center justify-center">
        <div
          className="nav-capsule flex w-[90%] items-center md:gap-[140px] max-md:justify-between"
          data-scrolled={String(scrolled)}
        >
          <Link
            href="/"
            className="shrink-0 text-[1.125rem] font-bold leading-none tracking-tight text-foreground"
            aria-label="N7 home"
          >
            N7
          </Link>

          <div className="font-hero-mono flex min-w-0 flex-1 items-center justify-between font-medium max-md:max-w-fit max-md:pr-2">
            {/* Desktop nav links */}
            <nav className="hidden md:flex" aria-label="Main navigation">
              <ul className="flex items-center gap-5">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-[0.6875rem] font-medium tracking-[0.06em] text-foreground/80 uppercase transition-colors hover:text-foreground whitespace-nowrap"
                    >
                      {item.label}
                      {item.hasChevron ? <ChevronDown className="mt-px" /> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Request Demo — desktop */}
              <button
                type="button"
                onClick={openDemo}
                className="btn-nav-pill hidden md:inline-flex shrink-0 items-center justify-center px-6 py-1.5"
              >
                Request Demo
              </button>

              {/* Hamburger — mobile only */}
              <button
                type="button"
                className="nav-hamburger"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
              >
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mobile-nav-inner">
              {/* Top row */}
              <div className="mobile-nav-header">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-[1.125rem] font-bold leading-none tracking-tight text-foreground"
                  aria-label="N7 home"
                >
                  N7
                </Link>
                <button
                  type="button"
                  className="mobile-nav-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Nav links */}
              <nav className="mobile-nav-links" aria-label="Mobile navigation">
                <ul>
                  {navLinks.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.06 + i * 0.07,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <motion.div
                className="mobile-nav-footer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  type="button"
                  onClick={handleDemoClick}
                  className="btn-hero-primary inline-flex w-full items-center justify-center px-6"
                  style={{ minHeight: "52px" }}
                >
                  Request Demo
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
