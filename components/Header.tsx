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

function navClass(active: boolean) {
  return active ? "text-primary" : "text-white hover:text-primary";
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

  return (
    <header
      className="fixed top-0 z-50 w-full backdrop-blur-[10px]"
      style={{ background: "rgba(10, 22, 40, 0.98)" }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4">
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
          <Link
            href="/"
            className={`text-sm font-medium uppercase tracking-wider ${navClass(pathname === "/")}`}
          >
            Home
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-white hover:text-primary"
              aria-haspopup="true"
            >
              Programs <span aria-hidden>▼</span>
            </button>
            <ul className="invisible absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-lg border border-white/10 py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100" style={{ background: "rgba(10, 22, 40, 0.98)" }}>
              {PROGRAM_LINKS.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className={`block px-4 py-2 text-sm uppercase hover:bg-white/10 ${pathname === p.href || pathname.startsWith(p.href + "/") ? "text-primary" : "text-white/90"}`}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/about"
            className={`text-sm font-medium uppercase tracking-wider ${navClass(pathname.startsWith("/about"))}`}
          >
            About
          </Link>
          <Link
            href="/instructors"
            className={`text-sm font-medium uppercase tracking-wider ${navClass(pathname.startsWith("/about"))}`}
          >
            Instructors
          </Link>
          <Link
            href="/schedule"
            className={`text-sm font-medium uppercase tracking-wider ${navClass(pathname.startsWith("/schedule"))}`}
          >
            Schedule
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium uppercase tracking-wider ${navClass(pathname.startsWith("/contact"))}`}
          >
            Contact
          </Link>
          <Link
            href="/free-trial"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-primary-dark"
          >
            Start Free Trial
          </Link>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-2xl text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 top-[107px] z-40 flex flex-col overflow-y-auto px-8 pb-12 pt-4 lg:hidden" style={{ background: "rgba(10, 22, 40, 0.98)" }}>
          <Link
            href="/"
            className={`border-b border-white/10 py-4 text-lg font-semibold uppercase ${navClass(pathname === "/")}`}
          >
            Home
          </Link>
          <p className="pt-4 text-xs font-bold uppercase tracking-wider text-white/50">Programs</p>
          <ul className="mt-2 space-y-1">
            {PROGRAM_LINKS.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className={`block rounded-lg py-3 pl-2 text-base font-medium uppercase ${navClass(pathname === p.href || pathname.startsWith(p.href))}`}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className={`mt-4 border-t border-white/10 py-4 text-lg font-semibold uppercase ${navClass(pathname.startsWith("/about"))}`}
          >
            About
          </Link>
          <Link
            href="/instructors"
            className={`border-b border-white/10 py-4 text-lg font-semibold uppercase ${navClass(pathname.startsWith("/about"))}`}
          >
            Instructors
          </Link>
          <Link
            href="/schedule"
            className={`border-b border-white/10 py-4 text-lg font-semibold uppercase ${navClass(pathname.startsWith("/schedule"))}`}
          >
            Schedule
          </Link>
          <Link
            href="/contact"
            className={`border-b border-white/10 py-4 text-lg font-semibold uppercase ${navClass(pathname.startsWith("/contact"))}`}
          >
            Contact
          </Link>
          <Link
            href="/free-trial"
            className="mt-4 block rounded-md bg-primary py-4 text-center text-lg font-semibold uppercase text-white"
          >
            Start Free Trial
          </Link>
        </div>
      ) : null}
    </header>
  );
}
