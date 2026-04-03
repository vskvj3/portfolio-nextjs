import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function DefaultHero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-6">
          {/* Greeting */}
          <p
            className="text-sm font-medium tracking-wide uppercase"
            style={{ color: "var(--accent)" }}
          >
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {personalInfo.name}
          </h1>

          {/* Role */}
          <p
            className="text-xl md:text-2xl font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            {personalInfo.role} · {personalInfo.specialization}
          </p>

          {/* Tagline */}
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--text-tertiary)" }}
          >
            {personalInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects" className="theme-btn-primary px-6 py-3">
              View Projects
            </Link>
            <Link href="#contact" className="theme-btn-outline px-6 py-3">
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 pt-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              <FaGithub size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
