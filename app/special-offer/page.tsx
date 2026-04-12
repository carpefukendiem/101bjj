import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GHLForm } from "@/components/GHLForm";

export const metadata: Metadata = {
  title: "Special Offer — 2 Months For The Price of 1",
  description:
    "Limited time offer for new members at 101 Jiu Jitsu & Kickboxing in Goleta. Get 2 months of unlimited martial arts training for the price of 1. No contracts, no credit card required.",
};

const includedItems = [
  "Unlimited classes — every day we're open",
  "Access to every program (BJJ, Kickboxing, Boxing, Wrestling & more)",
  "Free uniform — gi or training gear ($75 value)",
  "No credit card required to start",
  "Family-friendly environment — all ages welcome",
  "All skill levels — complete beginners welcome",
];

export default function SpecialOfferPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0a1628]">
          <div className="w-full bg-primary py-[0.6rem] text-center text-[0.9rem] text-white">
            🔥 Limited Time — This Offer Ends Soon
          </div>
          <div className="px-4 pb-16 pt-28 text-center text-white sm:pb-20 sm:pt-32">
            <h1 className="font-heading text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-tight">
              Get 2 Months For The Price Of 1
            </h1>
            <p className="mt-3 text-lg text-white/80">New Members Only · No Contracts · Cancel Anytime</p>
            <a
              href="#offer-form"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary px-10 py-4 text-lg font-bold uppercase text-white shadow-xl transition hover:bg-primary-dark sm:w-auto"
            >
              Claim My Offer →
            </a>
            <p className="mt-4 text-xs text-white/60 sm:text-sm">
              🔒 No credit card required · Cancel anytime · New members only
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-8 text-center font-heading text-3xl font-bold uppercase text-secondary">
              What&apos;s Included
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {includedItems.map((line) => (
                <div key={line} className="flex items-start">
                  <span className="mr-3 shrink-0 text-xl text-green-600">✓</span>
                  <span className="font-medium text-gray-800">{line}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-primary to-primary-dark px-4 py-6 text-center text-white lg:px-8 lg:py-8">
              <p className="text-xl text-white/70 line-through">Normally $149/mo</p>
              <p className="mt-2 font-heading text-3xl font-bold uppercase text-white">
                You pay for 1 month — get 2 FREE
              </p>
              <p className="mt-2 text-base text-white/85">
                That&apos;s $149 for 2 full months of unlimited training
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] px-4 py-16">
          <h2 className="text-center font-heading text-3xl font-bold uppercase text-secondary">
            Real Results From Real Members
          </h2>
          <p className="mx-auto mb-10 mt-2 max-w-2xl text-center text-gray-600">
            Hear directly from people who train at 101 Jiu Jitsu & Kickboxing
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i}>
                <div className="relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-[#1a1a2e]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl text-white">
                    ▶
                  </div>
                </div>
                <p className="mt-3 text-center text-sm font-medium text-gray-600">Member Story — Video Coming Soon</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0a1628] px-4 py-16 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold uppercase text-white">
              🥗 BONUS: Fuel Your Training With A Custom Meal Plan
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
              Members who combine training with structured nutrition see results 3x faster. We&apos;ve partnered with a
              local nutrition program to help you dial in your diet from day one.
            </p>
            <div className="mt-6 inline-block w-full max-w-lg rounded-xl bg-white/10 px-4 py-6 lg:px-8 lg:py-8">
              <p className="text-lg font-bold text-white">Get 20% off your first month with [Partner Name]</p>
              <p className="mt-1 text-sm text-white/70">Exclusive discount for 101 Jiu Jitsu members only</p>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-secondary sm:w-auto"
            >
              Add Nutrition To My Plan →
            </a>
          </div>
        </section>

        <section
          id="offer-form"
          className="bg-gradient-to-br from-[#0a1628] to-[#1a2a42] px-4 py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-lg">
            <h2 className="text-center font-heading text-3xl font-bold uppercase text-white sm:text-4xl">
              Claim Your Spot
            </h2>
            <p className="mt-3 text-center text-white/80">
              Fill out the form below and we&apos;ll reach out within 24 hours to get you started.
            </p>
            <div className="mx-4 mt-10 rounded-2xl bg-white p-6 shadow-2xl sm:mx-auto sm:p-8">
              <div className="text-gray-900">
                <Suspense fallback={<div className="h-64 animate-pulse rounded-lg bg-gray-100" />}>
                  <GHLForm
                    sourceLabel="Website Special Offer"
                    workflowVersion="special-offer-v1"
                    submitLabel="Yes! I Want This Offer →"
                  />
                </Suspense>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-white/60 sm:text-sm">
              No contracts · Family-friendly · Est. Goleta, CA
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-primary-dark px-4 py-16 text-center text-white">
          <h2 className="font-heading text-2xl font-bold uppercase sm:text-3xl">Ready to start?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/95">
            Join the 101 Jiu Jitsu & Kickboxing family today. Two months of unlimited training — one month&apos;s price.
          </p>
          <a
            href="#offer-form"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-10 py-4 text-lg font-bold uppercase text-secondary shadow-xl transition hover:bg-gray-100 sm:w-auto"
          >
            Yes! I Want 2 Months For The Price of 1 →
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-white/80 sm:text-sm">
            <span>✓ No contracts</span>
            <span>✓ Family-friendly</span>
            <span>✓ All skill levels</span>
            <span>✓ Est. Goleta, CA</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
