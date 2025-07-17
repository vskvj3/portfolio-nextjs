import { getAllProjectIds, getProjectData } from "@/lib/projects";
import Head from "next/head";
import Date from "@/components/date";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Github, ExternalLink, Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
        <title>{projectData.title}</title>
      </Head>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center animated-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')", opacity: '0.03'}}></div>
        
        <div className="relative z-10 pt-20">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Back Button */}
            <Link href="/projects" className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors mb-8">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Link>
            
            {/* Project Header */}
            <div className="bg-black/50 backdrop-blur-lg p-8 rounded-lg border border-cyan-400/20 mb-8">
              <h1 className="text-4xl font-bold text-cyan-300 mb-4 font-mono">{projectData.title}</h1>
              
              {/* Date */}
              <div className="flex items-center text-gray-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <Date dateString={projectData.date} />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projectData.tags.map((tag) => (
                  <Link key={tag} href={`/search?tags=${encodeURIComponent(tag)}`}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900/70 transition-colors cursor-pointer">
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
                    className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded-lg hover:bg-cyan-500/40 transition-all"
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
                    className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded-lg hover:bg-cyan-500/40 transition-all"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            
            {/* Project Content */}
            <div className="bg-black/50 backdrop-blur-lg p-8 rounded-lg border border-cyan-400/20">
              <div className="prose prose-invert prose-cyan max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    img: (props) => (
                      <Image
                        src={props.src}
                        alt={props.alt}
                        width={700}
                        height={400}
                        className="rounded-lg border border-cyan-400/20"
                      />
                    ),
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold text-cyan-300 mb-4 font-mono">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold text-cyan-300 mb-3 font-mono">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-bold text-cyan-300 mb-2 font-mono">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">{children}</ol>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-800 text-cyan-300 px-2 py-1 rounded text-sm font-mono">{children}</code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-gray-800 text-cyan-300 p-4 rounded-lg overflow-x-auto mb-4 font-mono">{children}</pre>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-cyan-400 bg-gray-800/50 pl-4 py-2 mb-4 italic text-gray-300">{children}</blockquote>
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
