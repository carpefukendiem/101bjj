"use client";

import { useEffect, useCallback } from "react";
import {
  getFlatTrackingFields,
  syncAttributionContext,
  setHiddenInputValuesFromTracking,
} from "@/lib/ghl-attribution";

export function useGHLAttribution() {
  useEffect(() => {
    syncAttributionContext();
    setHiddenInputValuesFromTracking();
  }, []);

  const refresh = useCallback(() => {
    syncAttributionContext();
    setHiddenInputValuesFromTracking();
    return getFlatTrackingFields();
  }, []);

  return {
    getFlatTrackingFields,
    syncAttributionContext,
    refresh,
  };
}
