"use client";

import { useEffect } from "react";
import { syncAttributionContext } from "@/lib/ghl-attribution";

export function AttributionSync() {
  useEffect(() => {
    syncAttributionContext();
  }, []);
  return null;
}
