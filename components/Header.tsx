"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PROGRAM_LINKS = [
  { href: "/programs/jiu-jitsu", label: "Brazilian Jiu-Jitsu" },
  { href: "/programs/kickboxing", label: "Kickboxing" },
  { href: "/programs/boxing", label: "Boxing" },
  { href: "/programs/wrestling", label: "Wrestling" },
  { href: "/programs/kids-teens", label: "Kids & Teens" },
  { href: "/programs/mma", label: "MMA Training" },
  { href: "/programs/trx", label: "TRX Training" },
  { href: "/programs/rocksteady", label: "Rocksteady Boxing" },
] as const;

export function Header() {
  const pathname = usePathname() ?? "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [desktopProgramsOpen, setDesktopProgramsOpen] = useState(false);
  const desktopProgramsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setDesktopProgramsOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const programsActive = PROGRAM_LINKS.some(
    (p) => pathname === p.href || pathname.startsWith(p.href + "/")
  );

  const navLink = (href: string, label: string, startsWith = false) => {
    const active = startsWith ? pathname.startsWith(href) : pathname === href;
    return (
      <Link
        href={href}
        className={`text-sm font-medium uppercase tracking-wide transition-colors ${
          active ? "text-primary" : "text-white hover:text-primary"
        }`}
      >
        {label}
      </Link>
    );
  };

  const showDesktopDropdown = desktopProgramsOpen;

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-[rgba(10,22,40,0.98)] backdrop-blur-[10px]">
        <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-4 lg:px-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.webp"
              alt="101 Jiu Jitsu & Kickboxing"
              width={168}
              height={74}
              className="h-[74px] w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {navLink("/", "Home")}

            <div
              ref={desktopProgramsRef}
              className="relative"
              onMouseEnter={() => setDesktopProgramsOpen(true)}
              onMouseLeave={() => setDesktopProgramsOpen(false)}
              onFocusCapture={() => setDesktopProgramsOpen(true)}
              onBlurCapture={(e) => {
                const next = e.relatedTarget as Node | null;
                if (next && e.currentTarget.contains(next)) return;
                setDesktopProgramsOpen(false);
              }}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors ${
                  programsActive ? "text-primary" : "text-white hover:text-primary"
                }`}
                aria-haspopup="true"
                aria-expanded={showDesktopDropdown}
              >
                Programs <span aria-hidden className="text-xs">▼</span>
              </button>
              <ul
                className={`absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-lg border border-white/10 bg-[#0a1628] py-2 shadow-xl transition-all duration-200 ${
                  showDesktopDropdown ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {PROGRAM_LINKS.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className={`block px-4 py-2 text-sm uppercase transition-colors hover:bg-white/10 ${
                        pathname.startsWith(p.href) ? "text-primary" : "text-white/90"
                      }`}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {navLink("/about", "About", true)}
            {navLink("/schedule", "Schedule", true)}
            {navLink("/contact", "Contact", true)}

            <Link
              href="/online-offer"
              className={`rounded-md px-3 py-1.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                pathname.startsWith("/online-offer") || pathname.startsWith("/offer-success")
                  ? "bg-green-600 text-white"
                  : "bg-green-600/90 text-white hover:bg-green-500"
              }`}
            >
              ☀️ Summer Offer — $298
            </Link>

            <Link
              href="/free-trial"
              className="rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary-dark"
            >
              Start Free Trial
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="select-none text-2xl leading-none">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[88px] z-50 flex flex-col overflow-y-auto bg-secondary lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col">
            <Link
              href="/"
              className={`flex min-h-14 items-center border-b border-white/10 px-6 text-xl font-semibold uppercase ${
                pathname === "/" ? "text-primary" : "text-white"
              }`}
            >
              Home
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setProgramsOpen((o) => !o)}
                className="flex min-h-14 w-full items-center justify-between border-b border-white/10 px-6 py-4 text-xl font-semibold uppercase text-white"
              >
                Programs
                <span
                  className={`text-sm transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              {programsOpen ? (
                <div className="bg-white/5 pb-2">
                  {PROGRAM_LINKS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className={`block min-h-12 border-b border-white/5 px-10 py-3 text-base uppercase ${
                        pathname.startsWith(p.href) ? "font-semibold text-primary" : "text-white/80 hover:text-primary"
                      }`}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <Link
              href="/about"
              className={`flex min-h-14 items-center border-b border-white/10 px-6 text-xl font-semibold uppercase ${
                pathname.startsWith("/about") ? "text-primary" : "text-white"
              }`}
            >
              About
            </Link>

            <Link
              href="/schedule"
              className={`flex min-h-14 items-center border-b border-white/10 px-6 text-xl font-semibold uppercase ${
                pathname.startsWith("/schedule") ? "text-primary" : "text-white"
              }`}
            >
              Schedule
            </Link>

            <Link
              href="/contact"
              className={`flex min-h-14 items-center border-b border-white/10 px-6 text-xl font-semibold uppercase ${
                pathname.startsWith("/contact") ? "text-primary" : "text-white"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/online-offer"
              className="block bg-green-600 px-6 py-4 text-center text-lg font-bold uppercase text-white"
            >
              ☀️ Summer Offer — $298
            </Link>

            <Link
              href="/free-trial"
              className="block bg-primary px-6 py-5 text-center text-xl font-bold uppercase text-white"
            >
              Start Free Trial →
            </Link>
          </nav>

          <div className="mt-auto border-t border-white/10 px-6 py-6 text-center text-sm text-white/50">
            <p>5940 Calle Real, Goleta, CA 93117</p>
            <p className="mt-1">(805) 977-5981</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
