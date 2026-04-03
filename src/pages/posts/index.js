import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Head from "next/head";
import { personalInfo } from "@/data/portfolioData";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{`Blog - ${personalInfo.name}`}</title>
        <meta
          name="description"
          content={`Blog posts by ${personalInfo.name} on software engineering, data engineering, and technology.`}
        />
        <link rel="canonical" href="https://visakhvijay.fyi/posts" />
      </Head>

      <div className="min-h-screen">
        <section id="blogs" className="py-20 pt-24 md:pt-28">
          <div className="container mx-auto px-6 max-w-5xl">
            <h1
              className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider theme-heading"
            >
              Blog
            </h1>
            <div className="space-y-6">
              {allPostsData.map(
                ({ id, date, tags, title, description, link, github }) => (
                  <div key={id} className="theme-card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-grow">
                        {link ? (
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <h2
                              className="text-lg md:text-xl font-bold mb-2 transition-colors duration-200 flex items-center"
                              style={{ color: "var(--text-primary)" }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--accent)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color =
                                  "var(--text-primary)")
                              }
                            >
                              {title}
                              <ExternalLink
                                size={16}
                                className="ml-2 opacity-70"
                              />
                            </h2>
                          </a>
                        ) : (
                          <Link href={`/posts/${encodeURIComponent(id)}`}>
                            <h2
                              className="text-lg md:text-xl font-bold mb-2 cursor-pointer transition-colors duration-200"
                              style={{ color: "var(--text-primary)" }}
                              onMouseEnter={(e) =>
                                (e.target.style.color = "var(--accent)")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "var(--text-primary)")
                              }
                            >
                              {title}
                            </h2>
                          </Link>
                        )}
                        <p
                          className="mb-4 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {description}
                        </p>

                        {/* Tags */}
                        {tags && tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <Link
                                key={tag}
                                href={`/search?tags=${encodeURIComponent(tag)}`}
                              >
                                <span className="theme-tag cursor-pointer">
                                  {tag}
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-4 mt-4 md:mt-0 md:ml-6">
                        <p
                          className="text-sm flex-shrink-0"
                          style={{ color: "var(--text-tertiary)" }}
                        >
                          {date}
                        </p>
                        {github && (
                          <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-200"
                            style={{ color: "var(--text-tertiary)" }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "var(--accent)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color =
                                "var(--text-tertiary)")
                            }
                            title="View on GitHub"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
