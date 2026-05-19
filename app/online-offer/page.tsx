import type { Metadata } from "next";
import Link from "next/link";
import { BuyNowButton } from "@/components/BuyNowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Summer Offer — Pay 2 Months, Get a 3rd Free",
  description:
    "Limited summer offer at 101 Jiu Jitsu & Kickboxing in Goleta. Pay for 2 months and get your 3rd month completely free. $298 one-time payment. No contracts, instant confirmation.",
};

export default function OnlineOfferPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <div className="bg-primary py-2 text-center text-sm font-semibold text-white">
          ☀️ Summer Offer — Limited Time Only
        </div>

        <section
          className="relative px-4 py-16 text-center text-white lg:py-24"
          style={{
            backgroundImage: "url('/images/101-jiu-jitsu-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "rgba(10,22,40,0.83)" }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Summer 2026 · New Members Only · No Contracts
            </p>
            <h1 className="font-heading text-[clamp(2.2rem,7vw,3.8rem)] font-bold uppercase leading-tight text-white">
              Pay 2 Months.
              <span className="block text-primary">Get The 3rd Free.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
              Our best offer of the year. Pay $298 upfront and train for 3 full months — your third
              month is on us. No recurring billing, no contracts.
            </p>

            <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-white/10 px-6 py-6 backdrop-blur-sm">
              <p className="text-lg text-white/60 line-through">$447 for 3 months at regular price</p>
              <p className="mt-1 font-heading text-5xl font-bold text-white">$298</p>
              <p className="mt-1 text-sm text-white/70">one-time · 3 full months · save $149</p>
              <div className="mt-6">
                <BuyNowButton />
              </div>
              <p className="mt-3 text-xs text-white/50">
                🔒 Secure payment via Stripe · No recurring charges · Save $149 this summer
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span>☀️ Summer special</span>
              <span>✓ 3 months of training</span>
              <span>✓ Save $149</span>
              <span>✓ Free uniform included</span>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-heading text-3xl font-bold uppercase text-secondary">
              Everything Included
            </h2>
            <p
              className="mb-8 rounded-xl p-4 text-center font-semibold text-white"
              style={{ backgroundColor: "#f59e0b" }}
            >
              ☀️ Summer Offer — Ends Soon · Pay 2 Months, Get Your 3rd Month Free
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(
                [
                  ["🥋", "Unlimited Classes", "Train every day we're open — no class limits"],
                  ["🎯", "Every Program", "BJJ, Kickboxing, Boxing, Wrestling, MMA, TRX, Kids & more"],
                  ["👕", "Free Uniform", "Gi or training gear included — $75 value"],
                  [
                    "📅",
                    "3 Full Months",
                    "90 days of unlimited access starting from your first class — you pay for 2, we give you 3",
                  ],
                  ["💰", "Save $149", "Three months for the price of two — one month completely free"],
                  ["🚫", "No Contracts", "One payment, no recurring billing, no lock-in"],
                  ["👨‍👩‍👧", "All Ages & Levels", "Complete beginners to experienced athletes — all welcome"],
                  ["📍", "Goleta Location", "5940 Calle Real — easy access from SB and IV"],
                  ["📞", "Personal Onboarding", "We'll call you within 24hrs to schedule your first class"],
                ] as const
              ).map(([icon, title, desc]) => (
                <div key={title} className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="font-semibold text-secondary">{title}</p>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <BuyNowButton size="large" />
              <p className="mt-3 text-sm text-gray-500">
                Questions first?{" "}
                <Link href="/contact" className="text-primary underline hover:no-underline">
                  Contact us
                </Link>{" "}
                or call{" "}
                <a href="tel:+18059775981" className="text-primary underline hover:no-underline">
                  (805) 977-5981
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-heading text-3xl font-bold uppercase text-secondary">
              How It Works
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {(
                [
                  [
                    "1",
                    "Pay Online",
                    "Click Buy Now. Enter your name and card on Stripe's secure checkout. Takes 60 seconds.",
                  ],
                  [
                    "2",
                    "We Call You",
                    "Our team calls you within 24 hours to welcome you and schedule your first class.",
                  ],
                  [
                    "3",
                    "Start Training",
                    "Show up, get your free uniform, and start your 3-month summer journey. Your third month is completely free.",
                  ],
                ] as const
              ).map(([num, title, desc]) => (
                <div key={num} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-white">
                    {num}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold uppercase text-secondary">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center font-heading text-3xl font-bold uppercase text-secondary">
              Common Questions
            </h2>
            <div className="space-y-4">
              {(
                [
                  [
                    "When does my membership start?",
                    "Your 3 months begin from the date of your first class — not from when you purchase. Take your time, the offer is locked in once you pay.",
                  ],
                  [
                    "Is this really just one payment?",
                    "Yes. $298 once this summer. You get 3 full months of unlimited training. No recurring charges, no credit card kept on file.",
                  ],
                  [
                    "Can I cancel?",
                    "Nothing to cancel — it's a one-time summer purchase. Your 3 months run and then you decide if you want to continue as a regular member. No pressure.",
                  ],
                  [
                    "What classes can I attend?",
                    "All of them. Brazilian Jiu-Jitsu, Kickboxing, Boxing, Wrestling, MMA, TRX, Rocksteady Boxing, Kids classes — everything on the schedule.",
                  ],
                  [
                    "What if I have no experience?",
                    "Perfect. Most of our members start with zero experience. Our fundamentals classes are designed specifically for beginners.",
                  ],
                  [
                    "How do I get my free uniform?",
                    "We'll have it ready for you on your first day. Just let us know your size when we call to schedule.",
                  ],
                ] as const
              ).map(([q, a]) => (
                <details
                  key={q}
                  className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-5 py-4"
                >
                  <summary className="flex list-none items-center justify-between font-semibold text-secondary">
                    {q}
                    <span className="ml-4 shrink-0 text-primary transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="px-4 py-16 text-center text-white"
          style={{ background: "linear-gradient(135deg, #E42416, #C41E1A)" }}
        >
          <div className="mx-auto max-w-xl">
            <h2 className="mb-3 font-heading text-3xl font-bold uppercase">Ready to Start?</h2>
            <p className="mb-8 text-white/90">
              One summer payment. Three months of training. Save $149. Let&apos;s go.
            </p>
            <BuyNowButton variant="white" size="large" />
            <p className="mt-4 text-xs text-white/60">
              🔒 Secure checkout via Stripe · No contracts · No recurring billing
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
