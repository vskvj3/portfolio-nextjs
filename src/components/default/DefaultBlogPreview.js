import Link from "next/link";

export default function DefaultBlogPreview({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold theme-heading">
            Recent Posts
          </h2>
          <Link
            href="/posts"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--accent)" }}
          >
            View all →
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map(({ id, title, description, date, tags }) => (
            <div key={id} className="theme-card p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-grow">
                  <Link href={`/posts/${encodeURIComponent(id)}`}>
                    <h3
                      className="text-base font-semibold mb-1 cursor-pointer transition-colors duration-200"
                      style={{ color: "var(--text-primary)" }}
                      onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.target.style.color = "var(--text-primary)")}
                    >
                      {title}
                    </h3>
                  </Link>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {description}
                  </p>
                </div>
                <span
                  className="text-xs mt-2 md:mt-0 md:ml-6 flex-shrink-0"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
