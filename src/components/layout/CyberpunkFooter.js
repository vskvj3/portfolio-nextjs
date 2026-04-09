import { useState, useEffect } from "react";
import { RiNextjsLine } from "react-icons/ri";

export default function CyberpunkFooter() {
  const [visitorCount, setVisitorCount] = useState("000000");

  const marqueeText =
    "Present day, present time... ▌ " +
    "No matter where you go, everyone's connected ▌ " +
    "The net is vast and infinite ▌ " +
    "If you're not remembered, then you never existed ▌ " +
    "All the information that a person has ever accessed in their lifetime is available on the net ▌ " +
    "Your effort to remain what you are is what limits you ▌";

  useEffect(() => {
    // Generate a pseudo-random persistent visitor count
    const stored = localStorage.getItem("cyber-visitors");
    if (stored) {
      const num = parseInt(stored, 10) + 1;
      localStorage.setItem("cyber-visitors", num.toString());
      setVisitorCount(num.toString().padStart(6, "0"));
    } else {
      const initial = Math.floor(Math.random() * 900) + 100;
      localStorage.setItem("cyber-visitors", initial.toString());
      setVisitorCount(initial.toString().padStart(6, "0"));
    }
  }, []);

  return (
    <footer
      className="w-full relative z-20"
      style={{
        backgroundColor: "var(--bg-card)",
        color: "var(--text-secondary)",
      }}
    >
      {/* Marquee banner */}
      <div className="cyber-marquee w-full" style={{ borderTop: "1px dashed var(--border)", borderBottom: "1px dashed var(--border)" }}>
        <div className="cyber-marquee-inner">
          {marqueeText}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl py-6 mt-2">
        {/* ASCII divider */}
        <div className="cyber-divider mb-4">
          ═══════════════════════════════════════════════
        </div>

        {/* Visitor counter + webring row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 text-center">
          <div className="cyber-visitor-counter">
            <span>visitors:</span>
            <span className="counter-digits">{visitorCount}</span>
          </div>

          <div className="cyber-webring">
            <span style={{ color: "var(--text-tertiary)" }}>|</span>
            <a href="#" onClick={(e) => e.preventDefault()}>◄ prev</a>
            <span style={{ color: "var(--accent)", fontSize: "0.65rem" }}>[ Wired Ring ]</span>
            <a href="#" onClick={(e) => e.preventDefault()}>next ►</a>
          </div>
        </div>



        {/* Best viewed */}
        <div className="cyber-retro-notice mt-3">
          best viewed at 800×600 · netscape navigator 4.0 · established 2025
        </div>
      </div>
    </footer>
  );
}
