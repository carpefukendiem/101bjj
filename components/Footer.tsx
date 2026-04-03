import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-secondary py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">
              <Image src="/images/logo.webp" alt="" width={180} height={60} className="h-14 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Goleta&apos;s premier martial arts academy. Transform your body, master your mind, join our community.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-primary">Programs</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/programs/jiu-jitsu" className="hover:text-primary">
                  Brazilian Jiu-Jitsu
                </Link>
              </li>
              <li>
                <Link href="/programs/kickboxing" className="hover:text-primary">
                  Kickboxing
                </Link>
              </li>
              <li>
                <Link href="/programs/boxing" className="hover:text-primary">
                  Boxing
                </Link>
              </li>
              <li>
                <Link href="/programs/wrestling" className="hover:text-primary">
                  Wrestling
                </Link>
              </li>
              <li>
                <Link href="/programs/kids-teens" className="hover:text-primary">
                  Kids & Teens
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-primary">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-primary">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/special-offer" className="hover:text-primary">
                  Special Offer
                </Link>
              </li>
              <li>
                <Link href="/free-trial" className="hover:text-primary">
                  Free Trial
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-primary">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📍 {SITE.address}</li>
              <li>
                📞{" "}
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                ✉️{" "}
                <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            {" · "}
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
