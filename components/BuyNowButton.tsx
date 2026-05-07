"use client";

import { useState } from "react";
import { getFlatTrackingFields, syncAttributionContext } from "@/lib/ghl-attribution";

type Props = {
  size?: "default" | "large";
  variant?: "red" | "white";
};

export function BuyNowButton({ size = "default", variant = "red" }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      syncAttributionContext();
      const tracking = getFlatTrackingFields();

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tracking }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Something went wrong");
      }

      const { url } = (await res.json()) as { url?: string };
      if (!url) throw new Error("No checkout URL received");

      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const sizeClasses =
    size === "large"
      ? "w-full max-w-sm py-5 text-xl sm:w-auto sm:px-12"
      : "w-full py-4 text-lg sm:w-auto sm:px-10";

  const variantClasses =
    variant === "white"
      ? "bg-white text-secondary hover:bg-gray-100 shadow-xl"
      : "bg-primary text-white hover:bg-primary-dark shadow-lg";

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={`
          inline-flex items-center justify-center gap-2 rounded-xl font-heading
          font-bold uppercase tracking-wide transition-all duration-200
          disabled:cursor-not-allowed disabled:opacity-70
          ${sizeClasses} ${variantClasses}
        `}
      >
        {loading ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Redirecting to checkout...
          </>
        ) : (
          <>🛒 Buy Now — $149</>
        )}
      </button>
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
    </div>
  );
}
