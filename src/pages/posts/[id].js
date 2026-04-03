import { getAllPostIds, getPostData } from "@/lib/posts";
import SEO from "@/components/shared/SEO";
import Date from "@/components/date";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Tag, Calendar } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <SEO
        title={`${postData.title} - ${personalInfo.name}`}
        description={postData.description || postData.title}
        type="article"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: postData.title,
          description: postData.description || postData.title,
          datePublished: postData.date,
          author: {
            "@type": "Person",
            name: personalInfo.name,
          },
        }}
      />

      <div className="min-h-screen">
        <div className="pt-24 md:pt-28 pb-16">
          <div className="container mx-auto px-6 max-w-3xl">
            {/* Back */}
            <Link
              href="/posts"
              className="inline-flex items-center mb-8 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--accent)" }}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>

            {/* Post Header */}
            <div className="theme-card p-8 mb-8">
              <h1
                className="text-3xl md:text-4xl font-bold mb-4 theme-heading"
              >
                {postData.title}
              </h1>

              <div
                className="flex items-center mb-4 text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                <Calendar size={16} className="mr-2" />
                <Date dateString={postData.date} />
              </div>

              {postData.tags && postData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {postData.tags.map((tag) => (
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
              )}
            </div>

            {/* Post Content */}
            <div className="theme-card p-8">
              <div className="prose prose-neutral max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="markdown-body"
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
                      <h1 className="text-2xl font-bold mb-4 theme-heading">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold mb-3 theme-heading">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-bold mb-2 theme-heading">
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
                  {postData.contentMarkdown}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
