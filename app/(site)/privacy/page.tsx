import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for 101 Jiu Jitsu & Kickboxing in Goleta, CA.",
};

export default function PrivacyPage() {
  return (
    <>
    <div className="bg-secondary pt-24 pb-8 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h1 className="font-heading text-4xl font-bold uppercase">Privacy Policy</h1>
      </div>
    </div>
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="max-w-none">
        <p>
          <strong>Last Updated:</strong> February 26, 2026
        </p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">1. Introduction</h2>
        <p className="mt-2 text-gray-600">
          101 Jiu Jitsu & Kickboxing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to
          protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your
          information when you visit our website or use our services.
        </p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">2. Information We Collect</h2>
        <p className="mt-2 text-gray-600">We may collect the following types of information:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you
            provide when filling out forms.
          </li>
          <li>
            <strong>Usage Information:</strong> Information about how you interact with our website, including pages
            visited and time spent.
          </li>
          <li>
            <strong>Device Information:</strong> IP address, browser type, and operating system.
          </li>
        </ul>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">3. How We Use Your Information</h2>
        <p className="mt-2 text-gray-600">We use your information to:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
          <li>Respond to your inquiries and schedule consultations</li>
          <li>Provide information about our programs and services</li>
          <li>Process trial class registrations</li>
          <li>Improve our website and services</li>
          <li>Communicate with you about promotions and events (with your consent)</li>
        </ul>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">4. Information Sharing</h2>
        <p className="mt-2 text-gray-600">
          We do not sell, trade, or rent your personal information to third parties. We may share information with
          service providers who assist in operating our business, or with legal authorities when required by law.
        </p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">5. Data Security</h2>
        <p className="mt-2 text-gray-600">
          We implement appropriate security measures to protect your personal information. However, no method of
          transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">6. Your Rights</h2>
        <p className="mt-2 text-gray-600">You have the right to access, correct, or request deletion of your information, and to opt out of marketing communications.</p>
        <h2 className="mt-8 font-heading text-xl font-bold uppercase text-secondary">7. Contact Us</h2>
        <p className="mt-2 text-gray-600">
          If you have questions about this Privacy Policy, please contact us at {SITE.name}, {SITE.address},{" "}
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-primary">
            {SITE.phoneDisplay}
          </a>
          ,{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary">
            {SITE.email}
          </a>
          .
        </p>
        <p className="mt-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}
