import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

/** apiVersion defaults to the Stripe Node SDK pin (see Stripe-Version header). */
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const OFFER_PRICE_ID = process.env.STRIPE_OFFER_PRICE_ID ?? "";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
