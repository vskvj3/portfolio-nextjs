import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

// In-memory cache for IP geolocation to avoid redundant lookups
const geoCache = new Map();
const GEO_CACHE_TTL = 1000 * 60 * 60; // 1 hour

async function getGeoLocation(ip) {
  // Skip for localhost / private IPs
  if (
    !ip ||
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip.startsWith("172.")
  ) {
    return {
      city: "Local",
      region: "Local",
      country: "Local",
      countryCode: "",
      lat: 0,
      lon: 0,
      timezone: "",
      isp: "",
    };
  }

  // Check cache
  const cached = geoCache.get(ip);
  if (cached && Date.now() - cached.timestamp < GEO_CACHE_TTL) {
    return cached.data;
  }

  try {
    const res = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,city,regionName,country,countryCode,lat,lon,timezone,isp`
    );
    const data = await res.json();

    if (data.status === "fail") {
      return null;
    }

    const geo = {
      city: data.city || "",
      region: data.regionName || "",
      country: data.country || "",
      countryCode: data.countryCode || "",
      lat: data.lat || 0,
      lon: data.lon || 0,
      timezone: data.timezone || "",
      isp: data.isp || "",
    };

    geoCache.set(ip, { data: geo, timestamp: Date.now() });
    return geo;
  } catch (err) {
    console.error("Geolocation lookup failed:", err);
    return null;
  }
}

function parseUserAgent(ua) {
  if (!ua) return { browser: "Unknown", os: "Unknown", device: "Unknown" };

  // Browser detection
  let browser = "Unknown";
  if (ua.includes("Firefox/")) browser = "Firefox";
  else if (ua.includes("Edg/")) browser = "Edge";
  else if (ua.includes("OPR/") || ua.includes("Opera")) browser = "Opera";
  else if (ua.includes("Chrome/")) browser = "Chrome";
  else if (ua.includes("Safari/") && !ua.includes("Chrome")) browser = "Safari";

  // OS detection
  let os = "Unknown";
  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Mac OS")) os = "macOS";
  else if (ua.includes("Linux")) os = "Linux";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";

  // Device type
  let device = "Desktop";
  if (ua.includes("Mobile") || ua.includes("Android")) device = "Mobile";
  else if (ua.includes("Tablet") || ua.includes("iPad")) device = "Tablet";

  return { browser, os, device };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { type, ...data } = req.body;

    // Extract IP address
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded
      ? forwarded.split(",")[0].trim()
      : req.socket?.remoteAddress || "unknown";

    if (type === "pageview") {
      // Look up geolocation
      const geo = await getGeoLocation(ip);

      // Parse user agent
      const rawUA = req.headers["user-agent"] || "";
      const { browser, os, device } = parseUserAgent(rawUA);

      const pageviewDoc = {
        sessionId: data.sessionId || "",
        path: data.path || "/",
        ip,
        location: geo || {},
        userAgent: rawUA,
        browser,
        os,
        device,
        referrer: data.referrer || req.headers["referer"] || "",
        language: req.headers["accept-language"]?.split(",")[0] || "",
        screenWidth: data.screenWidth || null,
        screenHeight: data.screenHeight || null,
        theme: data.theme || "default",
        duration: 0, // Updated later via "duration" event
        timestamp: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "pageviews"), pageviewDoc);
      return res.status(200).json({ id: docRef.id });
    }

    if (type === "duration") {
      if (!data.docId || typeof data.duration !== "number") {
        return res.status(400).json({ error: "Missing docId or duration" });
      }

      await updateDoc(doc(db, "pageviews", data.docId), {
        duration: Math.min(data.duration, 3600), // Cap at 1 hour
      });

      return res.status(200).json({ success: true });
    }

    return res.status(400).json({ error: "Invalid event type" });
  } catch (err) {
    console.error("Analytics error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
