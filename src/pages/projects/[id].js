import { getAllProjectIds, getProjectData } from "@/lib/projects";
import Head from "next/head";
import Date from "@/components/date";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { ExternalLink, Calendar, Tag, ArrowLeft } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  return (
    <>
      <Head>
        <title>{`${projectData.title} - ${personalInfo.name}`}</title>
        <meta name="description" content={projectData.description} />
      </Head>

      <div className="min-h-screen">
        <div className="pt-24 md:pt-28 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Back Button */}
            <Link
              href="/projects"
              className="inline-flex items-center mb-8 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--accent)" }}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Link>

            {/* Project Header */}
            <div className="theme-card p-8 mb-8">
              <h1
                className="text-3xl md:text-4xl font-bold mb-4 theme-heading"
              >
                {projectData.title}
              </h1>

              {/* Date */}
              <div
                className="flex items-center mb-4 text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                <Calendar size={16} className="mr-2" />
                <Date dateString={projectData.date} />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projectData.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/search?tags=${encodeURIComponent(tag)}`}
                  >
                    <span className="theme-tag inline-flex items-center cursor-pointer">
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {projectData.github && (
                  <a
                    href={projectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn-primary inline-flex items-center px-4 py-2"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                )}
                {projectData.url && (
                  <a
                    href={projectData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn-outline inline-flex items-center px-4 py-2"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="theme-card p-8">
              <div className="prose prose-neutral max-w-none theme-prose">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    img: (props) => (
                      <Image
                        src={props.src}
                        alt={props.alt}
                        width={700}
                        height={400}
                        className="rounded-lg"
                        style={{ border: "1px solid var(--border)" }}
                      />
                    ),
                    h1: ({ children }) => (
                      <h1
                        className="text-2xl font-bold mb-4 theme-heading"
                      >
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2
                        className="text-xl font-bold mb-3 theme-heading"
                      >
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3
                        className="text-lg font-bold mb-2 theme-heading"
                      >
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p
                        className="mb-4 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul
                        className="list-disc list-inside mb-4 space-y-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol
                        className="list-decimal list-inside mb-4 space-y-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {children}
                      </ol>
                    ),
                    code: ({ children }) => (
                      <code
                        className="px-2 py-1 rounded text-sm font-mono"
                        style={{
                          backgroundColor: "var(--bg-tertiary)",
                          color: "var(--accent)",
                        }}
                      >
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre
                        className="p-4 rounded-lg overflow-x-auto mb-4 font-mono"
                        style={{
                          backgroundColor: "var(--bg-tertiary)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {children}
                      </pre>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote
                        className="border-l-4 pl-4 py-2 mb-4 italic"
                        style={{
                          borderColor: "var(--accent)",
                          backgroundColor: "var(--bg-tertiary)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {projectData.contentMarkdown}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
