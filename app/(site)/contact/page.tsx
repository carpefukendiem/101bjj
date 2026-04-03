import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { GHLForm } from "@/components/GHLForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact 101 Jiu Jitsu & Kickboxing in Goleta, CA. Call 805-977-5981 or send a message — free 7-day trial.",
};

const mapEmbedSrc =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("5940 Calle Real, Goleta, CA 93117") +
  "&output=embed";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: "https://101jjkb.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5940 Calle Real",
    addressLocality: "Goleta",
    addressRegion: "CA",
    postalCode: "93117",
    addressCountry: "US",
  },
  telephone: SITE.phone,
  email: SITE.email,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
  ],
  url: "https://101jjkb.com",
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        backgroundImage="/images/gym-2.jpg"
        title="Contact"
        titleAccent="Us"
        subtitle="Ready to start your martial arts journey? Get in touch today for your free 7-day trial."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase text-secondary">Get In Touch</h2>
            <p className="mt-3 text-gray-600">
              We&apos;d love to hear from you. Whether you have questions about our programs, want to schedule a tour,
              or are ready to start your free trial, our team is here to help.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-xl text-white">
                  📍
                </span>
                <div>
                  <h3 className="font-semibold text-secondary">Visit Us</h3>
                  <p className="text-gray-600">{SITE.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-xl text-white">
                  📞
                </span>
                <div>
                  <h3 className="font-semibold text-secondary">Call Us</h3>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-xl text-white">
                  ✉️
                </span>
                <div>
                  <h3 className="font-semibold text-secondary">Email Us</h3>
                  <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-xl text-white">
                  🕐
                </span>
                <div>
                  <h3 className="font-semibold text-secondary">Hours</h3>
                  <p className="text-gray-600">
                    Mon–Fri: 6:00 AM – 9:00 PM
                    <br />
                    Sat: 9:00 AM – 12:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-100 p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-secondary">Start Your Free Trial</h3>
            <Suspense fallback={<p className="text-gray-600">Loading form…</p>}>
              <GHLForm
                sourceLabel="Website Contact Form"
                workflowVersion="class-booking-v3"
                submitLabel="Claim My Free Week"
                showMessage
                className="mt-6"
              />
            </Suspense>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-2xl bg-[#1a2a42]">
            <iframe
              title="Map — 101 Jiu Jitsu & Kickboxing"
              src={mapEmbedSrc}
              className="h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
