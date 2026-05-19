/** Stripe Checkout Session metadata: max ~50 keys, value max 500 chars (Stripe-enforced). */
const META_MAX_KEYS = 50;
const META_MAX_VALUE = 500;

function truncateValue(v: string): string {
  return v.slice(0, META_MAX_VALUE);
}

/**
 * Preserve required offer keys, then attach client attribution (excluding reserved keys).
 */
export function buildOfferSessionMetadata(
  tracking: Record<string, string | undefined> | undefined,
  extras: { customerName?: string; customerPhone?: string }
): Record<string, string> {
  const out: Record<string, string> = {};
  const keys = (): number => Object.keys(out).length;

  const put = (k: string, v: string | undefined): void => {
    if (!v || keys() >= META_MAX_KEYS) return;
    const key = k.slice(0, 40);
    if (!key || out[key]) return;
    out[key] = truncateValue(v);
  };

  put("source", "Website Summer Offer");
  put("workflow_version", "summer-offer-v1");
  if (extras.customerName) put("customer_name", extras.customerName);
  if (extras.customerPhone) put("customer_phone", extras.customerPhone);

  if (tracking) {
    for (const [k, raw] of Object.entries(tracking)) {
      if (keys() >= META_MAX_KEYS) break;
      if (!raw) continue;
      if (["source", "workflow_version"].includes(k)) continue;
      if (extras.customerName && k === "customer_name") continue;
      if (extras.customerPhone && k === "customer_phone") continue;
      put(k, raw);
    }
  }

  return out;
}
