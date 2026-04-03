import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function DefaultProjects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold theme-heading">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--accent)" }}
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ id, title, description, tags, github, url }) => (
            <div key={id} className="theme-card p-6 flex flex-col">
              <div className="flex-grow">
                <Link href={`/projects/${encodeURIComponent(id)}`}>
                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-200 cursor-pointer"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--text-primary)")}
                  >
                    {title}
                  </h3>
                </Link>
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {description}
                </p>
              </div>

              <div className="flex items-end justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {tags?.slice(0, 4).map((tag) => (
                    <span key={tag} className="theme-tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 ml-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                    >
                      <FaExternalLinkAlt size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
