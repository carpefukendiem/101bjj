import { NextRequest, NextResponse } from "next/server";
import { GHL_FORM_WEBHOOK } from "@/lib/constants";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

export const runtime = "nodejs";

const RESERVED_METADATA_KEYS = new Set(["customer_name", "customer_phone"]);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status !== "paid") {
      return NextResponse.json({ received: true });
    }

    const email =
      session.customer_email ?? session.customer_details?.email ?? "";
    const phone =
      session.customer_details?.phone ??
      session.metadata?.customer_phone ??
      "";
    const name =
      session.customer_details?.name ??
      session.custom_fields?.find((f) => f.key === "full_name")?.text?.value ??
      session.metadata?.customer_name ??
      "";
    const stripeSessionId = session.id;
    const amountPaid = (session.amount_total ?? 0) / 100;
    const md = session.metadata ?? {};

    const ghl = new URLSearchParams();
    ghl.set("name", name);
    ghl.set("email", email);
    ghl.set("phone", phone);
    ghl.set("source", md.source ?? "Website Summer Offer");
    ghl.set("workflow_version", md.workflow_version ?? "summer-offer-v1");
    ghl.set("program", "Summer Offer — Pay 2 Months Get 3rd Free");
    ghl.set("payment_status", "paid");
    ghl.set("stripe_session_id", stripeSessionId);
    ghl.set("amount_paid", String(amountPaid));

    for (const [key, value] of Object.entries(md)) {
      if (!value || RESERVED_METADATA_KEYS.has(key)) continue;
      if (ghl.has(key)) continue;
      ghl.append(key, value);
    }

    try {
      await fetch(GHL_FORM_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: ghl.toString(),
      });

      console.log(`✅ GHL contact created for paid member: ${email}`);
    } catch (ghlError) {
      console.error("GHL webhook failed after payment:", ghlError);
    }
  }

  return NextResponse.json({ received: true });
}
