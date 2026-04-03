import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function CyberpunkBlogPreview({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono tracking-wider theme-heading">
          [ BLOGS ]
        </h2>
        <div className="space-y-8">
          {posts.map(({ id, date, tags, title, description, link }) => (
            <div key={id} className="theme-card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-grow">
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="group">
                      <h3 className="text-xl font-bold mb-2 transition-colors duration-300 flex items-center" style={{ color: "var(--accent)" }}>
                        {title}
                        <ExternalLink size={16} className="ml-2 opacity-70" />
                      </h3>
                    </a>
                  ) : (
                    <Link href={`/posts/${encodeURIComponent(id)}`}>
                      <h3 className="text-xl font-bold mb-2 cursor-pointer transition-colors duration-300" style={{ color: "var(--accent)" }}>
                        {title}
                      </h3>
                    </Link>
                  )}
                  <p style={{ color: "var(--text-secondary)" }} className="mb-4">{description}</p>
                  {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Link key={tag} href={`/search?tags=${encodeURIComponent(tag)}`}>
                          <span className="theme-tag cursor-pointer">{tag}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 md:ml-6">
                  <p className="font-mono text-sm flex-shrink-0" style={{ color: "var(--text-tertiary)" }}>{date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/posts" className="theme-inline-link font-mono">
            [View More ➤]
          </Link>
        </div>
      </div>
    </section>
  );
}
