import { NextRequest, NextResponse } from "next/server";
import { buildOfferSessionMetadata } from "@/lib/stripe-offer-metadata";
import { stripe, OFFER_PRICE_ID, SITE_URL } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    if (!OFFER_PRICE_ID || !OFFER_PRICE_ID.startsWith("price_")) {
      console.error("Missing or invalid STRIPE_OFFER_PRICE_ID");
      return NextResponse.json({ error: "Offer is not configured" }, { status: 500 });
    }

    const body = await request.json().catch(() => ({}));
    const { email, name, phone, tracking } = body as {
      email?: string;
      name?: string;
      phone?: string;
      tracking?: Record<string, string | undefined>;
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: OFFER_PRICE_ID,
          quantity: 1,
        },
      ],
      ...(email && {
        customer_email: email,
      }),
      phone_number_collection: { enabled: true },
      billing_address_collection: "auto",
      custom_fields: [
        {
          key: "full_name",
          label: { type: "custom", custom: "Full Name" },
          type: "text",
          ...(name && { text: { default_value: name } }),
        },
      ],
      custom_text: {
        submit: {
          message:
            "You're paying for 2 months and receiving 3 months of unlimited training — 1 month completely free. A team member will contact you within 24 hours to schedule your first class.",
        },
        after_submit: {
          message: "Welcome to 101 Jiu Jitsu & Kickboxing! 🥋",
        },
      },
      success_url: `${SITE_URL}/offer-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/online-offer`,
      metadata: buildOfferSessionMetadata(tracking, {
        customerName: name,
        customerPhone: phone,
      }),
      allow_promotion_codes: false,
      expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    });

    if (!session.url) {
      throw new Error("No checkout URL returned from Stripe");
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
