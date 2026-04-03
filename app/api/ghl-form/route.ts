import { NextResponse } from "next/server";
import { GHL_FORM_WEBHOOK } from "@/lib/constants";

export const runtime = "nodejs";

/**
 * Server-side proxy to the GHL webhook so the browser is not blocked by CORS.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const upstream = await fetch(GHL_FORM_WEBHOOK, {
      method: "POST",
      body: formData,
    });

    const text = await upstream.text();

    if (!upstream.ok) {
      return NextResponse.json(
        { error: text?.slice(0, 500) || `Lead webhook returned ${upstream.status}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true as const });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
