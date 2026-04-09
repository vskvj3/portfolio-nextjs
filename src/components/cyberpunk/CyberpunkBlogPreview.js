import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function CyberpunkBlogPreview({ posts }) {
  if (!posts || posts.length === 0) return null;

  // Format date as [YYYY.MM.DD]
  const formatDate = (dateStr) => {
    if (!dateStr) return "[----.--.--]";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return `[${dateStr}]`;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `[${y}.${m}.${day}]`;
  };

  return (
    <section id="blogs" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="cyber-divider mb-2">
          ┌──────────────────────────────────────────────┐
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 font-mono tracking-wider theme-heading">
          [ BLOGS ]
        </h2>

        <p className="text-center mb-8 font-mono text-xs" style={{ color: "var(--text-tertiary)", letterSpacing: "0.2em" }}>
          transmission log — /var/log/thoughts
        </p>

        <div className="space-y-2 max-w-4xl mx-auto">
          {posts.map(({ id, date, tags, title, description, link }, index) => (
            <div key={id} className="cyber-log-entry">
              {/* Header row: entry ID + date */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                <span className="log-id">
                  ENTRY_{String(index + 1).padStart(3, "0")}
                </span>
                <span className="log-date">
                  {formatDate(date)}
                </span>
              </div>

              {/* Title */}
              <div className="flex items-start gap-2">
                <span style={{ color: "var(--accent)", fontSize: "0.85rem", flexShrink: 0 }}>»</span>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="group">
                    <h3
                      className="font-bold font-mono flex items-center gap-1"
                      style={{ color: "var(--accent)", fontSize: "0.95rem" }}
                    >
                      {title}
                      <ExternalLink size={13} className="opacity-50" />
                    </h3>
                  </a>
                ) : (
                  <Link href={`/posts/${encodeURIComponent(id)}`}>
                    <h3
                      className="font-bold font-mono cursor-pointer"
                      style={{ color: "var(--accent)", fontSize: "0.95rem" }}
                    >
                      {title}
                    </h3>
                  </Link>
                )}
              </div>

              {/* Description */}
              <p className="text-sm mt-1 ml-4" style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}>
                {description}
              </p>

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2 ml-4">
                  {tags.map((tag) => (
                    <Link key={tag} href={`/search?tags=${encodeURIComponent(tag)}`}>
                      <span className="theme-tag cursor-pointer" style={{ fontSize: "0.6rem", padding: "1px 5px" }}>
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/posts" className="theme-inline-link font-mono text-sm">
            [cat /var/log/thoughts/* ➤]
          </Link>
        </div>

        <div className="cyber-divider mt-2">
          └──────────────────────────────────────────────┘
        </div>
      </div>
    </section>
  );
}
