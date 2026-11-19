"use client";

import { useEffect } from "react";

export default function InitialScrollReset() {
  useEffect(() => {
    // Reset only when arriving at the homepage with no hash target.
    if (window.location.hash) return;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);
  return null;
}
