/**
 * GoHighLevel marketing attribution + page context.
 * Ported from legacy js/main.js — behavior must stay aligned with production tracking.
 */

export const ATTR_STORAGE_KEY = "ghl_attribution_context";
export const SESSION_ID_KEY = "ghl_session_id";

export const ATTR_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
  "ttclid",
] as const;

export type AttrKey = (typeof ATTR_KEYS)[number];

export type TouchSnapshot = {
  captured_at: string;
  landing_page: string;
} & Partial<Record<AttrKey, string>>;

export type AttributionContext = {
  session_id: string;
  first_seen_at: string;
  last_seen_at: string;
  first_touch: TouchSnapshot;
  last_touch: TouchSnapshot;
  first_landing_page: string;
  last_landing_page: string;
};

export function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function getNowIso(): string {
  return new Date().toISOString();
}

export function getPageUrl(): string {
  if (!isBrowser()) return "";
  return `${window.location.origin}${window.location.pathname}${window.location.search}`;
}

export function getPageContext(): Record<string, string> {
  if (!isBrowser()) {
    return {
      page_url: "",
      page_path: "",
      page_query: "",
      page_title: "",
      page_referrer: "",
      browser_language: "",
      timezone: "",
      screen_resolution: "",
      viewport_size: "",
      user_agent: "",
    };
  }
  return {
    page_url: getPageUrl(),
    page_path: window.location.pathname,
    page_query: window.location.search || "",
    page_title: document.title || "",
    page_referrer: document.referrer || "",
    browser_language: navigator.language || "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    user_agent: navigator.userAgent || "",
  };
}

export function getQueryAttribution(): Partial<Record<AttrKey, string>> {
  if (!isBrowser()) return {};
  const params = new URLSearchParams(window.location.search);
  const data: Partial<Record<AttrKey, string>> = {};
  ATTR_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) data[key] = value;
  });
  return data;
}

export function getStoredAttributionContext(): AttributionContext | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(ATTR_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object") return parsed as AttributionContext;
    return null;
  } catch {
    return null;
  }
}

export function saveAttributionContext(data: AttributionContext): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(ATTR_STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* private mode / quota */
  }
}

export function getSessionId(): string {
  if (!isBrowser()) return "";
  const existing = sessionStorage.getItem(SESSION_ID_KEY);
  if (existing) return existing;
  const generated = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  sessionStorage.setItem(SESSION_ID_KEY, generated);
  return generated;
}

export function syncAttributionContext(): AttributionContext {
  if (!isBrowser()) {
    const now = getNowIso();
    const emptyTouch: TouchSnapshot = {
      captured_at: now,
      landing_page: "",
    };
    return {
      session_id: "",
      first_seen_at: now,
      last_seen_at: now,
      first_touch: emptyTouch,
      last_touch: emptyTouch,
      first_landing_page: "",
      last_landing_page: "",
    };
  }

  const now = getNowIso();
  const pageUrl = getPageUrl();
  const queryData = getQueryAttribution();
  const existing = getStoredAttributionContext();
  const hasNewCampaignData = Object.keys(queryData).length > 0;

  const firstTouch: TouchSnapshot =
    existing?.first_touch ||
    ({
      captured_at: now,
      landing_page: pageUrl,
      ...queryData,
    } as TouchSnapshot);

  const lastTouch: TouchSnapshot = hasNewCampaignData
    ? {
        captured_at: now,
        landing_page: pageUrl,
        ...queryData,
      }
    : existing?.last_touch || firstTouch;

  const attributionContext: AttributionContext = {
    session_id: getSessionId(),
    first_seen_at: existing?.first_seen_at || now,
    last_seen_at: now,
    first_touch: firstTouch,
    last_touch: lastTouch,
    first_landing_page: existing?.first_landing_page || pageUrl,
    last_landing_page: pageUrl,
  };

  saveAttributionContext(attributionContext);
  return attributionContext;
}

export type FlatTrackingFields = Record<string, string>;

export function getFlatTrackingFields(): FlatTrackingFields {
  const attrContext = getStoredAttributionContext() || syncAttributionContext();
  const pageContext = getPageContext();
  const firstTouch = attrContext.first_touch || ({} as TouchSnapshot);
  const lastTouch = attrContext.last_touch || ({} as TouchSnapshot);

  return {
    ...pageContext,
    session_id: attrContext.session_id || getSessionId(),
    first_seen_at: attrContext.first_seen_at || "",
    last_seen_at: attrContext.last_seen_at || "",
    landing_page: attrContext.last_landing_page || pageContext.page_url,
    first_landing_page: attrContext.first_landing_page || "",
    last_landing_page: attrContext.last_landing_page || "",
    first_touch_at: firstTouch.captured_at || "",
    last_touch_at: lastTouch.captured_at || "",
    first_touch_utm_source: firstTouch.utm_source || "",
    first_touch_utm_medium: firstTouch.utm_medium || "",
    first_touch_utm_campaign: firstTouch.utm_campaign || "",
    first_touch_utm_term: firstTouch.utm_term || "",
    first_touch_utm_content: firstTouch.utm_content || "",
    first_touch_gclid: firstTouch.gclid || "",
    first_touch_fbclid: firstTouch.fbclid || "",
    first_touch_msclkid: firstTouch.msclkid || "",
    first_touch_ttclid: firstTouch.ttclid || "",
    last_touch_utm_source: lastTouch.utm_source || "",
    last_touch_utm_medium: lastTouch.utm_medium || "",
    last_touch_utm_campaign: lastTouch.utm_campaign || "",
    last_touch_utm_term: lastTouch.utm_term || "",
    last_touch_utm_content: lastTouch.utm_content || "",
    last_touch_gclid: lastTouch.gclid || "",
    last_touch_fbclid: lastTouch.fbclid || "",
    last_touch_msclkid: lastTouch.msclkid || "",
    last_touch_ttclid: lastTouch.ttclid || "",
    utm_source: lastTouch.utm_source || "",
    utm_medium: lastTouch.utm_medium || "",
    utm_campaign: lastTouch.utm_campaign || "",
    utm_term: lastTouch.utm_term || "",
    utm_content: lastTouch.utm_content || "",
    gclid: lastTouch.gclid || "",
    fbclid: lastTouch.fbclid || "",
    msclkid: lastTouch.msclkid || "",
    ttclid: lastTouch.ttclid || "",
  };
}

export function setHiddenInputValuesFromTracking(): void {
  if (!isBrowser()) return;
  const fields = getFlatTrackingFields();
  Object.entries(fields).forEach(([name, value]) => {
    document
      .querySelectorAll<HTMLInputElement>(`input[type="hidden"][name="${name}"]`)
      .forEach((input) => {
        input.value = value;
      });
  });
}
