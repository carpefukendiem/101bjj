This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://vercel.com/docs/app/building-your-application/deploying) for more details.

## Stripe (Summer / online offer)

Checkout reads `STRIPE_SECRET_KEY` and `STRIPE_OFFER_PRICE_ID` from `.env.local` (local) or Vercel env (production). **They must be in the same Stripe mode:**

- **Test:** `sk_test_...` and a Price ID created while the Dashboard is in [test mode](https://dashboard.stripe.com/test/apikeys).
- **Live:** `sk_live_...` and a Price ID created in live mode for the same account.

If the API returns **“No such price … a similar object exists in test mode, but a live mode key was used”**, your secret key is **live** but the price ID is **test** (or the opposite). Fix by either switching the key to `sk_test_...` for local dev with the existing test price, or creating the offer price in **live** mode and setting `STRIPE_OFFER_PRICE_ID` to that live `price_…` id. After changing env vars, restart the dev server (`Ctrl+C`, then `npm run dev`).
