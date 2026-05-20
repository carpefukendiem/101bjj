import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { GHLForm } from "@/components/GHLForm";

export const metadata: Metadata = {
  title: "Free Trial",
  description: "Start your free trial at 101 Jiu Jitsu & Kickboxing in Goleta — no credit card required.",
};

export default function FreeTrialPage() {
  return (
    <>
      <PageHero
        backgroundImage="/images/gym-1.webp"
        title="Start Your"
        titleAccent="Free Trial"
        subtitle="Tell us a bit about yourself — we'll reach out to schedule your first class."
      />
      <section className="mx-auto max-w-lg px-4 py-10 lg:py-16">
        <Suspense fallback={<div className="h-40 animate-pulse rounded-lg bg-gray-100" />}>
          <GHLForm
            sourceLabel="Website Free Trial"
            workflowVersion="class-booking-v3"
            submitLabel="Start My Free Trial →"
          />
        </Suspense>
        <p className="mt-4 text-center text-xs text-gray-500 lg:text-sm">
          🔒 No credit card required. Cancel anytime.
        </p>
      </section>
    </>
  );
}
