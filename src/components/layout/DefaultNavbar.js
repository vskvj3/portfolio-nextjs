import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ModeToggle from "@/components/shared/ModeToggle";
import { personalInfo } from "@/data/portfolioData";
import { FiMenu, FiX } from "react-icons/fi";

export default function DefaultNavbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/posts", label: "Blog" },
  ];

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--bg-nav)",
        borderColor: "var(--border)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {personalInfo.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive(link.href)
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = isActive(link.href)
                    ? "var(--accent)"
                    : "var(--text-secondary)")
                }
              >
                {link.label}
              </Link>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <ModeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t mt-4" style={{ borderColor: "var(--border)" }}>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200"
                  style={{
                    color: isActive(link.href)
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                    backgroundColor: isActive(link.href)
                      ? "var(--accent-light)"
                      : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
