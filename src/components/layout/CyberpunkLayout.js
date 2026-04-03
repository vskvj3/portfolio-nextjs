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
    <div className="min-h-screen relative text-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      {/* Animated gradient background */}
      <div className="fixed top-0 left-0 w-full h-full cyber-bg" />
      
      {/* Texture overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full cyber-texture"
        style={{ zIndex: 1 }}
      />

      {/* Mouse follower spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
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
