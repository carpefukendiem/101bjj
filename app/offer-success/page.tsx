import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { stripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Welcome! Payment Confirmed — 3 Months of Training",
  description:
    "Your membership purchase is confirmed. Welcome to 101 Jiu Jitsu & Kickboxing!",
};

export default async function OfferSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  let customerName = "";
  let customerEmail = "";
  let amountPaid = "";

  if (searchParams.session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(searchParams.session_id);
      if (session.payment_status === "paid") {
        customerName =
          session.customer_details?.name ??
          session.custom_fields?.find((f) => f.key === "full_name")?.text?.value ??
          "";
        customerEmail =
          session.customer_details?.email ?? session.customer_email ?? "";
        amountPaid = `$${((session.amount_total ?? 0) / 100).toFixed(2)}`;
      }
    } catch {
      /* invalid session id — generic success copy still applies */
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary pt-[72px]">
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 text-center text-white">
          <div className="mx-auto max-w-lg">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-5xl">
              ✓
            </div>

            <h1 className="mb-4 font-heading text-[clamp(2rem,6vw,3rem)] font-bold uppercase text-white">
              {customerName ? `Welcome, ${customerName.split(" ")[0]}!` : "You're In! 🥋"}
            </h1>

            <p className="mb-6 text-xl text-white/90">Your 3-month membership is confirmed.</p>

            <div className="mb-8 space-y-3 rounded-2xl bg-white/10 px-6 py-6 text-left">
              {customerName ? (
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Name</span>
                  <span className="font-semibold">{customerName}</span>
                </div>
              ) : null}
              {customerEmail ? (
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Email</span>
                  <span className="font-semibold">{customerEmail}</span>
                </div>
              ) : null}
              {amountPaid ? (
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Amount paid</span>
                  <span className="font-semibold text-green-400">{amountPaid}</span>
                </div>
              ) : null}
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Membership</span>
                <span className="font-semibold">3 Months Unlimited (paid for 2)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Free uniform</span>
                <span className="font-semibold text-green-400">Included ✓</span>
              </div>
            </div>

            <div className="mb-8 rounded-2xl border border-primary/30 bg-primary/20 px-6 py-5 text-left">
              <h3 className="mb-3 font-heading font-bold uppercase text-primary">
                What Happens Next
              </h3>
              <ol className="space-y-2 text-sm text-white/85">
                <li>
                  📧 <strong>Check your email</strong> — a receipt is on its way from Stripe
                </li>
                <li>
                  📞 <strong>We&apos;ll call you</strong> within 24 hours to schedule your first
                  class
                </li>
                <li>
                  👕 <strong>Grab your uniform</strong> — we&apos;ll have it ready on day one
                </li>
                <li>
                  🥋 <strong>Start training</strong> — your 3 months begin with your first class
                </li>
              </ol>
            </div>

            <p className="mb-6 text-sm text-white/60">
              Questions? Call us at{" "}
              <a href="tel:+18059775981" className="text-primary underline">
                (805) 977-5981
              </a>{" "}
              or email{" "}
              <a href="mailto:info@101jiujitsugoleta.com" className="text-primary underline">
                info@101jiujitsugoleta.com
              </a>
            </p>

            <Link
              href="/schedule"
              className="inline-flex rounded-xl bg-primary px-8 py-3 font-bold uppercase text-white transition-colors hover:bg-primary-dark"
            >
              View the Class Schedule →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
