"use client";

import { useState, FormEvent } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GHL_FORM_WEBHOOK, PROGRAM_OPTIONS } from "@/lib/constants";
import { getFlatTrackingFields, syncAttributionContext } from "@/lib/ghl-attribution";

const REDIRECT_DEFAULT = "https://101jjkb.com/thank-you";

type GHLFormProps = {
  sourceLabel: string;
  workflowVersion: string;
  submitLabel?: string;
  className?: string;
  showMessage?: boolean;
  defaultProgram?: string;
};

export function GHLForm({
  sourceLabel,
  workflowVersion,
  submitLabel = "Submit",
  className = "",
  showMessage = false,
  defaultProgram,
}: GHLFormProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const programFromQuery = searchParams.get("program") || "";
  const initialProgram = defaultProgram || programFromQuery;

  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const trap = form.elements.namedItem("website") as HTMLInputElement | null;
    if (trap?.value?.trim()) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setPending(true);
    syncAttributionContext();
    const tracking = getFlatTrackingFields();

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const program = (form.elements.namedItem("program") as HTMLSelectElement).value;
    const messageEl = form.elements.namedItem("message") as HTMLTextAreaElement | null;

    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    fd.append("phone", phone);
    fd.append("program", program);
    if (showMessage && messageEl?.value) fd.append("message", messageEl.value);

    fd.append("source", sourceLabel);
    fd.append("workflow_version", workflowVersion);
    fd.append("page", pathname || "");
    fd.append("redirect", REDIRECT_DEFAULT);
    fd.append("submitted_at", new Date().toISOString());

    Object.entries(tracking).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") fd.append(k, v);
    });

    try {
      const res = await fetch(GHL_FORM_WEBHOOK, {
        method: "POST",
        body: fd,
        mode: "cors",
        credentials: "omit",
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || `Request failed (${res.status})`);
      }
      window.location.href = "/thank-you";
    } catch (err) {
      setPending(false);
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please call us or try again."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className={`relative space-y-4 ${className}`} noValidate>
      <div className="pointer-events-none absolute -left-[9999px] opacity-0" aria-hidden>
        <label htmlFor="website-trap">Website</label>
        <input id="website-trap" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Full Name *</label>
        <input
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Email *</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Phone *</label>
        <input
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Program of Interest *</label>
        <select
          key={initialProgram || "default"}
          name="program"
          required
          defaultValue={initialProgram}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
        >
          {PROGRAM_OPTIONS.map((o) => (
            <option key={o.label} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      {showMessage ? (
        <div>
          <label className="mb-1 block text-sm font-medium">Message (optional)</label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
          />
        </div>
      ) : null}

      {error ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
      >
        {pending ? "Submitting…" : submitLabel}
      </button>
    </form>
  );
}
