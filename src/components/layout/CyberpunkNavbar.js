import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ModeToggle from "@/components/shared/ModeToggle";
import { FiMenu, FiX } from "react-icons/fi";

export default function CyberpunkNavbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    setMobileOpen(false);
    if (router.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const navItems = [
    { id: "terminal", label: "/home" },
    { id: "blogs", label: "/blogs" },
    { id: "projects", label: "/projects" },
    { id: "contact", label: "/contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "var(--bg-nav)",
        borderBottom: "1px dashed var(--border)",
      }}
    >
      <div className="container mx-auto px-6 py-3 max-w-4xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-widest font-mono hover:opacity-80 transition-opacity"
          >
            <span className="neon-flicker" data-text="[Visakh]">
              [<span className="flicker-fast">V</span>
              <span className="flicker-medium">i</span>
              <span className="flicker-slow">s</span>
              <span className="flicker-fast">a</span>
              <span className="flicker-medium">k</span>
              <span className="flicker-slow">h</span>]
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="theme-nav-link cursor-pointer text-sm"
              >
                {item.label}
              </a>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <ModeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden pt-4 pb-2 border-t mt-4"
            style={{ borderColor: "var(--border)", borderStyle: "dashed" }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="theme-nav-link cursor-pointer text-sm py-2 px-3 font-mono"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
