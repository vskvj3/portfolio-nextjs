import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";

function generateSessionId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getSessionId() {
  if (typeof window === "undefined") return null;
  let id = sessionStorage.getItem("_a_sid");
  if (!id) {
    id = generateSessionId();
    sessionStorage.setItem("_a_sid", id);
  }
  return id;
}

export function useAnalytics() {
  const router = useRouter();
  const docIdRef = useRef(null);
  const startTimeRef = useRef(null);
  const trackedRef = useRef(false);

  // Send time-on-page duration for the current pageview
  const sendDuration = useCallback(() => {
    if (!docIdRef.current || !startTimeRef.current) return;

    const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
    if (duration < 1) return;

    const payload = JSON.stringify({
      type: "duration",
      docId: docIdRef.current,
      duration,
    });

    // Use sendBeacon for reliability on tab close / navigation
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/analytics",
        new Blob([payload], { type: "application/json" })
      );
    } else {
      fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      });
    }
  }, []);

  // Track a new page view
  const trackPageView = useCallback(
    async (path) => {
      // Send duration for the previous page before tracking the new one
      sendDuration();

      const sessionId = getSessionId();
      if (!sessionId) return;

      startTimeRef.current = Date.now();
      docIdRef.current = null;

      try {
        let theme = "default";
        try {
          theme = localStorage.getItem("portfolio-mode") || "default";
        } catch {
          // localStorage may be unavailable
        }

        const res = await fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "pageview",
            sessionId,
            path,
            referrer: document.referrer || "",
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            theme,
          }),
        });

        const data = await res.json();
        if (data.id) {
          docIdRef.current = data.id;
        }
      } catch {
        // Analytics should never break the site
      }
    },
    [sendDuration]
  );

  useEffect(() => {
    // Prevent double-tracking in StrictMode
    if (trackedRef.current) return;
    trackedRef.current = true;

    // Track initial page load
    trackPageView(router.asPath);

    // Track client-side navigations
    const handleRouteChange = (url) => trackPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    // Send duration when page becomes hidden (tab switch, minimize)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendDuration();
      }
    };

    // Send duration on tab/window close
    const handleBeforeUnload = () => sendDuration();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      sendDuration();
    };
  }, [router, trackPageView, sendDuration]);
}
