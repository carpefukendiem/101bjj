import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { GHLForm } from "@/components/GHLForm";

export const metadata: Metadata = {
  title: "Special Offer — 2 Months For The Price Of 1",
  description: "Limited-time new member offer at 101 Jiu Jitsu & Kickboxing in Goleta.",
};

export default function SpecialOfferPage() {
  return (
    <>
      <section className="bg-primary px-4 py-3 text-center text-sm font-semibold text-white md:text-base">
        🔥 Limited Time — This Offer Ends Soon
      </section>

      <section className="bg-secondary px-4 py-16 text-center text-white">
        <h1 className="font-heading text-3xl font-bold uppercase leading-tight md:text-5xl">
          Get 2 Months For The Price Of 1
        </h1>
        <p className="mt-4 text-lg text-white/85">New Members Only · No Contracts · Cancel Anytime</p>
        <a
          href="#form"
          className="mt-10 inline-flex rounded-lg bg-primary px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-primary-dark"
        >
          Claim My Offer →
        </a>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center font-heading text-2xl font-bold uppercase text-secondary">What&apos;s Included</h2>
        <ul className="mx-auto mt-8 max-w-xl space-y-3 text-gray-800">
          {[
            "Unlimited classes",
            "Every program",
            "Free uniform (gi or gear, $75 value)",
            "No credit card required to start",
            "Family-friendly environment",
            "All skill levels welcome",
          ].map((line) => (
            <li key={line} className="flex gap-3">
              <span className="font-bold text-primary">✓</span>
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-10 rounded-xl border-2 border-primary bg-red-50 px-6 py-4 text-center font-heading text-lg font-bold uppercase text-secondary">
          Normally $149/mo — You pay for 1, get 2 FREE
        </p>
      </section>

      <section className="bg-gray-100 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold uppercase text-secondary">
            Real Results From Real Members
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-secondary p-8 text-center text-white"
              >
                <span className="text-5xl opacity-80">▶</span>
                <p className="mt-4 font-semibold">Member Story — Video Coming Soon</p>
                {/* TODO: Replace with actual video URLs provided by client */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1f35] px-4 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-semibold">🥗 BONUS: Fuel Your Training With A Custom Meal Plan</p>
          <p className="mt-4 text-white/80">
            Members who combine training with structured nutrition see results 3x faster.
          </p>
          <p className="mt-6 text-lg">Get 20% off your first month with [Partner Name]</p>
          <button
            type="button"
            className="mt-8 rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-secondary"
          >
            Add Nutrition To My Plan →
          </button>
          {/* TODO: Add meal plan partner name, logo, and promo/affiliate link */}
        </div>
      </section>

      <section id="form" className="mx-auto max-w-lg scroll-mt-24 px-4 py-16">
        <h2 className="text-center font-heading text-2xl font-bold uppercase text-secondary">Claim Your Spot</h2>
        <Suspense fallback={<p className="text-center text-gray-600">Loading form…</p>}>
          <GHLForm
            sourceLabel="Website Special Offer"
            workflowVersion="special-offer-v1"
            submitLabel="Yes! I Want This Offer →"
            className="mt-8"
          />
        </Suspense>
        <p className="mt-6 text-center text-sm text-gray-500">
          No contracts · Family-friendly · Est. Goleta, CA
        </p>
      </section>

      <section className="border-t border-gray-200 bg-white px-4 py-16 text-center">
        <p className="text-lg font-medium text-secondary">Ready to start?</p>
        <a
          href="#form"
          className="mt-6 inline-flex rounded-lg bg-primary px-10 py-4 text-lg font-bold text-white hover:bg-primary-dark"
        >
          Yes! I Want 2 Months For The Price of 1 →
        </a>
      </section>

      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <Link href="/" className="text-primary hover:underline">
          ← Back to main site
        </Link>
      </footer>
    </>
  );
}
