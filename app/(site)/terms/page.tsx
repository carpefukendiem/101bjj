import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for 101 Jiu Jitsu & Kickboxing in Goleta, CA.",
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-secondary pt-24 pb-8 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold uppercase">Terms of Service</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-gray-600">
          <strong>Last Updated:</strong> February 26, 2026
        </p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">1. Agreement to Terms</h2>
        <p className="mt-2 text-gray-600">
          By accessing or using our website and services, you agree to be bound by these Terms of Service. If you
          disagree with any part of the terms, you may not access our services.
        </p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">2. Use of Services</h2>
        <p className="mt-2 text-gray-600">Our martial arts programs are designed for individuals of various fitness levels. However, you should:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
          <li>Consult with a physician before beginning any exercise program</li>
          <li>Inform instructors of any medical conditions or injuries</li>
          <li>Follow all safety guidelines and instructor directions</li>
          <li>Participate at your own risk</li>
        </ul>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">3. Membership and Payments</h2>
        <p className="mt-2 text-gray-600">
          Membership terms, pricing, and payment schedules are provided separately. All fees are non-refundable except as
          required by law or as specified in your membership agreement.
        </p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">4. Liability Waiver</h2>
        <p className="mt-2 text-gray-600">
          Martial arts training involves inherent risks of injury. By participating, you acknowledge and accept these
          risks. {SITE.name} and its instructors are not liable for injuries sustained during training, except in cases
          of gross negligence.
        </p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">5. Code of Conduct</h2>
        <p className="mt-2 text-gray-600">All members and visitors are expected to show respect, maintain hygiene, arrive on time, and follow gym rules.</p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">6. Intellectual Property</h2>
        <p className="mt-2 text-gray-600">
          All content on this website, including text, images, and logos, is the property of {SITE.name} and may not be
          used without permission.
        </p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">7. Contact Information</h2>
        <p className="mt-2 text-gray-600">
          For questions about these Terms of Service, contact us at {SITE.name}, {SITE.address}, {SITE.phoneDisplay},{" "}
          {SITE.email}.
        </p>
        <p className="mt-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </>
  );
}
