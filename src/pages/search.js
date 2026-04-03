import { useRouter } from "next/router";
import { useState } from "react";
import { searchTags } from "../lib/search";
import Link from "next/link";
import SEO from "@/components/shared/SEO";
import { personalInfo } from "@/data/portfolioData";
import { Search } from "lucide-react";

export async function getServerSideProps(context) {
  const { tags } = context.query;

  let initialResults = { projects: [], posts: [] };
  if (tags) {
    const tagArray = tags.split(" ");
    initialResults = searchTags(tagArray);
  }

  return {
    props: {
      initialResults,
    },
  };
}

const SearchPage = ({ initialResults }) => {
  const router = useRouter();
  const { tags } = router.query;
  const [results] = useState(initialResults);

  return (
    <>
      <SEO
        title={`Search Results - ${personalInfo.name}`}
        description={`Search results for ${tags || "projects and posts"} by ${personalInfo.name}.`}
        robots="noindex"
      />

      <div className="min-h-screen pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
              style={{ backgroundColor: "var(--accent-light)" }}
            >
              <Search size={20} style={{ color: "var(--accent)" }} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold theme-heading">
              Search Results
            </h1>
            {tags && (
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                Showing results for:{" "}
                <span style={{ color: "var(--accent)" }}>{tags}</span>
              </p>
            )}
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Projects
            </h2>
            {results.projects.length > 0 ? (
              <div className="space-y-3">
                {results.projects.map(({ id, tags, title }) => (
                  <Link
                    key={id}
                    href={`/projects/${encodeURIComponent(id)}`}
                  >
                    <div className="theme-card p-4 cursor-pointer">
                      <h3
                        className="font-semibold mb-2 transition-colors duration-200"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span key={tag} className="theme-tag text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div
                className="theme-card p-4 text-center text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                No projects found.
              </div>
            )}
          </div>

          {/* Posts */}
          <div>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Posts
            </h2>
            {results.posts.length > 0 ? (
              <div className="space-y-3">
                {results.posts.map(({ id, tags, title }) => (
                  <Link
                    key={id}
                    href={`/posts/${encodeURIComponent(id)}`}
                  >
                    <div className="theme-card p-4 cursor-pointer">
                      <h3
                        className="font-semibold mb-2 transition-colors duration-200"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span key={tag} className="theme-tag text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div
                className="theme-card p-4 text-center text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                No posts found.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
