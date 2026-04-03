"use client";

import { useEffect, useRef } from "react";

const LOCATION_ID = process.env.NEXT_PUBLIC_GHL_LOCATION_ID || "";

export function ChatWidgetHost() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!LOCATION_ID || !ref.current) return;
    ref.current.innerHTML = "";
    const el = document.createElement("chat-widget");
    el.setAttribute("location-id", LOCATION_ID);
    ref.current.appendChild(el);
  }, []);

  if (!LOCATION_ID) return null;
  return <div ref={ref} className="fixed bottom-4 right-4 z-[100]" aria-hidden />;
}
