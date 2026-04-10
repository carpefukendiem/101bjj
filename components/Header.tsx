"use client";

import { useEffect, useState } from "react";
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

const navLinkBase =
  "text-[0.9rem] uppercase tracking-[0.05em] font-medium transition-colors";

function linkClass(active: boolean) {
  return active
    ? `${navLinkBase} text-primary`
    : `${navLinkBase} text-white hover:text-primary`;
}

export function Header() {
  const pathname = usePathname() ?? "";
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const programsActive = PROGRAM_LINKS.some(
    (p) => pathname === p.href || pathname.startsWith(p.href + "/")
  );

  return (
    <header className="fixed top-0 z-50 w-full bg-[rgba(10,22,40,0.98)] py-4 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.webp"
            alt="101 Jiu Jitsu & Kickboxing"
            width={200}
            height={75}
            className="h-[75px] w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <Link href="/" className={linkClass(pathname === "/")}>
            Home
          </Link>

          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 ${linkClass(programsActive)}`}
              aria-haspopup="true"
            >
              Programs <span aria-hidden>▼</span>
            </button>
            <ul className="invisible absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-lg border border-white/10 bg-[rgba(10,22,40,0.98)] py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              {PROGRAM_LINKS.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className={`block px-4 py-2 text-[0.9rem] font-medium uppercase tracking-[0.05em] transition-colors hover:bg-white/10 ${
                      pathname === p.href || pathname.startsWith(p.href + "/") ? "text-primary" : "text-white/90"
                    }`}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/about" className={linkClass(pathname.startsWith("/about"))}>
            About
          </Link>
          <Link href="/schedule" className={linkClass(pathname.startsWith("/schedule"))}>
            Schedule
          </Link>
          <Link href="/contact" className={linkClass(pathname.startsWith("/contact"))}>
            Contact
          </Link>
          <Link
            href="/special-offer"
            className={`rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
              pathname.startsWith("/special-offer")
                ? "bg-amber-500 text-secondary"
                : "bg-amber-500/90 text-secondary hover:bg-amber-400"
            }`}
          >
            🎁 Special Offer
          </Link>
          <Link
            href="/free-trial"
            className="rounded-[6px] bg-primary px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary-dark"
          >
            Start Free Trial
          </Link>
        </nav>

        <button
          type="button"
          className="border-0 bg-transparent p-2 text-2xl text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 top-[107px] z-40 flex flex-col overflow-y-auto bg-[rgba(10,22,40,0.98)] px-8 pb-12 pt-4 lg:hidden">
          <Link
            href="/"
            className={`border-b border-white/10 py-4 text-lg font-semibold uppercase ${pathname === "/" ? "text-primary" : "text-white"}`}
          >
            Home
          </Link>
          <p className="pt-4 text-xs font-bold uppercase tracking-wider text-white/50">Programs</p>
          <ul className="mt-2 space-y-1">
            {PROGRAM_LINKS.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className={`block rounded-lg py-3 pl-2 text-base font-medium uppercase ${
                    pathname === p.href || pathname.startsWith(p.href) ? "text-primary" : "text-white"
                  }`}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className={`mt-4 border-t border-white/10 py-4 text-lg font-semibold uppercase ${pathname.startsWith("/about") ? "text-primary" : "text-white"}`}
          >
            About
          </Link>
          <Link
            href="/schedule"
            className={`border-b border-white/10 py-4 text-lg font-semibold uppercase ${pathname.startsWith("/schedule") ? "text-primary" : "text-white"}`}
          >
            Schedule
          </Link>
          <Link
            href="/contact"
            className={`border-b border-white/10 py-4 text-lg font-semibold uppercase ${pathname.startsWith("/contact") ? "text-primary" : "text-white"}`}
          >
            Contact
          </Link>
          <Link
            href="/special-offer"
            className="mt-2 block rounded-lg bg-amber-500 py-4 text-center text-lg font-bold uppercase text-secondary"
          >
            🎁 Special Offer
          </Link>
          <Link
            href="/free-trial"
            className="mt-4 block rounded-[6px] bg-primary py-4 text-center text-lg font-semibold uppercase text-white hover:bg-primary-dark"
          >
            Start Free Trial
          </Link>
        </div>
      ) : null}
    </header>
  );
}
