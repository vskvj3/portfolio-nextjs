import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Head from "next/head";
import { personalInfo } from "@/data/portfolioData";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Projects({ allProjectsData }) {
  return (
    <>
      <Head>
        <title>{`Projects - ${personalInfo.name}`}</title>
        <meta
          name="description"
          content={`Projects by ${personalInfo.name}. Explore software engineering, data engineering, and distributed systems projects.`}
        />
        <link rel="canonical" href="https://visakhvijay.fyi/projects" />
      </Head>

      <div className="min-h-screen">
        <section id="projects" className="py-20 pt-24 md:pt-28">
          <div className="container mx-auto px-6 max-w-5xl">
            <h1
              className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider theme-heading"
            >
              Projects
            </h1>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {allProjectsData.map(
                ({ id, date, tags, title, description, github, url }) => (
                  <div
                    key={id}
                    className="theme-card p-6 flex flex-col"
                  >
                    <div className="flex-grow">
                      <Link href={`/projects/${encodeURIComponent(id)}`}>
                        <h2
                          className="text-xl font-bold mb-2 cursor-pointer transition-colors duration-200"
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
                      <p
                        className="mb-4 text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
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
                      <div className="flex items-center space-x-4 ml-4">
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
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {url && (
                          <a
                            href={url}
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
                          >
                            <ExternalLink size={20} />
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
