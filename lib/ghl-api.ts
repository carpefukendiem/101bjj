const GHL_BASE = "https://services.leadconnectorhq.com";

export type CalendarEventRecord = {
  id?: string;
  title?: string;
  startTime?: string;
  endTime?: string;
  calendarId?: string;
  appointmentStatus?: string;
  notes?: string;
  /** 0=Sun … 6=Sat — optional; GHL events omit and use startTime for day bucketing */
  day?: number;
  [key: string]: unknown;
};

export type CalendarEventsResult =
  | { ok: true; events: CalendarEventRecord[] }
  | { ok: false; error: string };

function getEnv() {
  return {
    apiKey: process.env.GHL_API_KEY || "",
    locationId: process.env.GHL_LOCATION_ID || "",
    calendarId: process.env.GHL_CALENDAR_ID || "",
  };
}

/**
 * GET /calendars/events — sub-account token + Version header.
 * Query shape may vary; adjust in GHL dashboard if this 400s.
 */
export async function fetchCalendarEventsForWeek(
  start: Date,
  end: Date
): Promise<CalendarEventsResult> {
  const { apiKey, locationId, calendarId } = getEnv();
  if (!apiKey || !locationId) {
    return { ok: false, error: "Missing GHL_API_KEY or GHL_LOCATION_ID" };
  }

  const params = new URLSearchParams({
    locationId,
    startTime: start.toISOString(),
    endTime: end.toISOString(),
  });
  if (calendarId) params.set("calendarId", calendarId);

  const url = `${GHL_BASE}/calendars/events?${params.toString()}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: "2021-04-15",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      return {
        ok: false,
        error: `GHL ${res.status}: ${text.slice(0, 200)}`,
      };
    }

    const data = (await res.json()) as unknown;
    let events: CalendarEventRecord[] = [];
    if (Array.isArray(data)) {
      events = data as CalendarEventRecord[];
    } else if (data && typeof data === "object" && "events" in data) {
      const ev = (data as { events?: unknown }).events;
      if (Array.isArray(ev)) events = ev as CalendarEventRecord[];
    }

    return { ok: true, events };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return { ok: false, error: msg };
  }
}

export function startOfWeekMonday(d: Date): Date {
  const x = new Date(d);
  const day = x.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  x.setDate(x.getDate() + diff);
  x.setHours(0, 0, 0, 0);
  return x;
}

export function addDays(d: Date, n: number): Date {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
