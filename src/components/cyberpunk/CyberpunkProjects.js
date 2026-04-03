import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export default function CyberpunkProjects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono tracking-wider theme-heading">
          [ PROJECTS ]
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ id, title, description, tags, github, url }) => (
            <div key={id} className="theme-card p-6 flex flex-col">
              <div className="flex-grow">
                <Link href={`/projects/${encodeURIComponent(id)}`}>
                  <h3
                    className="text-xl font-bold mb-2 cursor-pointer transition-colors duration-300"
                    style={{ color: "var(--accent)" }}
                  >
                    {title}
                  </h3>
                </Link>
                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                  {description}
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex flex-wrap gap-2">
                  {tags?.map((t) => (
                    <span key={t} className="theme-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/projects" className="theme-inline-link font-mono">
            [View More ➤]
          </Link>
        </div>
      </div>
    </section>
  );
}
