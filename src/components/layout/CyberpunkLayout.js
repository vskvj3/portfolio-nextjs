import Head from "next/head";
import { useState, useEffect } from "react";
import CyberpunkNavbar from "./CyberpunkNavbar";
import CyberpunkFooter from "./CyberpunkFooter";

export default function CyberpunkLayout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <div className="min-h-screen relative scanlines">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      {/* Dark noise background */}
      <div
        className="fixed top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "var(--bg-primary)",
          backgroundImage: `
            radial-gradient(ellipse at 15% 50%, rgba(30, 227, 126, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 30%, rgba(155, 142, 196, 0.02) 0%, transparent 40%)
          `,
          zIndex: 0,
        }}
      />

      {/* Phosphor green mouse follower (subtle) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(30, 227, 126, 0.06), transparent 80%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <CyberpunkNavbar />
        <main>{children}</main>
        <CyberpunkFooter />
      </div>
    </div>
  );
}
