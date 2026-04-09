import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export default function CyberpunkProjects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        {/* ASCII divider */}
        <div className="cyber-divider mb-2">
          ┌──────────────────────────────────────────────┐
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 font-mono tracking-wider theme-heading">
          [ PROJECTS ]
        </h2>

        {/* Subtitle */}
        <p className="text-center mb-8 font-mono text-xs" style={{ color: "var(--text-tertiary)", letterSpacing: "0.2em" }}>
          directory listing — /home/visakh/projects/
        </p>

        {/* Directory listing */}
        <div className="space-y-3 max-w-5xl mx-auto">
          {projects.map(({ id, title, description, tags, github, url }, index) => (
            <div key={id} className="cyber-dir-entry">
              {/* Top row: prefix + title + links */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="dir-prefix font-mono">
                    drwxr-xr-x
                  </span>
                  <span style={{ color: "var(--text-tertiary)", fontSize: "0.7rem" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <Link href={`/projects/${encodeURIComponent(id)}`}>
                  <span
                    className="font-bold font-mono cursor-pointer"
                    style={{ color: "var(--accent)", fontSize: "0.95rem" }}
                  >
                    {title}/
                  </span>
                </Link>

                {/* Inline links */}
                <div className="flex items-center gap-2 sm:ml-auto flex-shrink-0">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm mb-2 pl-0 sm:pl-4" style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                {description}
              </p>

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pl-0 sm:pl-4">
                  {tags.map((t) => (
                    <span key={t} className="theme-tag" style={{ fontSize: "0.65rem", padding: "1px 6px" }}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/projects" className="theme-inline-link font-mono text-sm">
            [ls -la ~/projects/ ➤]
          </Link>
        </div>

        <div className="cyber-divider mt-2">
          └──────────────────────────────────────────────┘
        </div>
      </div>
    </section>
  );
}
