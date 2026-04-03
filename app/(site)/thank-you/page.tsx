import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting 101 Jiu Jitsu & Kickboxing. We'll be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-secondary to-[#1a2a42] px-4 pb-24 pt-28 text-center text-white md:pt-32">
      <div className="max-w-xl">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-4xl text-white md:h-[100px] md:w-[100px] md:text-5xl">
          ✓
        </div>
        <h1 className="mt-8 font-heading text-3xl font-bold uppercase md:text-4xl">
          Thank <span className="text-primary">You</span>!
        </h1>
        <p className="mt-4 text-lg text-white/80">
          We&apos;ve received your information and we&apos;ll be in touch within 24 hours to schedule your free 7-day trial.
        </p>
        <div className="mt-8 rounded-2xl bg-white/5 p-8 text-left">
          <h2 className="font-heading text-lg font-bold uppercase">What Happens Next?</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            {[
              "Our team will call you to discuss your goals",
              "We will schedule your first class at a convenient time",
              "Show up with comfortable workout clothes",
              "We will provide everything else you need",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="font-bold text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/schedule" className="rounded-lg bg-primary px-8 py-3 font-semibold text-white hover:bg-primary-dark">
            View Class Schedule
          </Link>
          <Link
            href="/"
            className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-secondary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
