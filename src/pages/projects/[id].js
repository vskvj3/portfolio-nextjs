import { getAllProjectIds, getProjectData } from "@/lib/projects";
import Head from "next/head";
import Date from "@/components/date";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
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
      <div className="bg-dracula-foreground/35 backdrop-blur-md w-1/2 min-w-[370px] max-w-[700px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-dracula-t-white">
        {/* Title */}
        <h1 className=" text-2xl">{projectData.title}</h1>
        <br />
        {/* Date */}
        <div className="text-sm">
          <Date dateString={projectData.date} />
        </div>
        <br />
        {/* tagsList  */}
        <div className="flex flex-wrap lg:text-sm text-xs">
          {projectData.tags.map((tag) => (
            <Link key={tag} href={`/search?tags=${encodeURIComponent(tag)}`}>
              <div className="p-1 mr-1 mt-1 bg-dracula-chips hover:bg-dracula-chips/80 rounded-md">{tag}</div>
            </Link>
          ))}
        </div>
        <br />
        {/* Links */}
        <div className="flex gap-4">
          {projectData.github ? (
            <a
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-dracula-t-white"
            >
              <FaGithub className="mr-1" />
              Github
            </a>
          ) : (
            ""
          )}
          {projectData.url ? (
            <a
              href={projectData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-dracula-t-white"
            >
              <FaPaperclip className="mr-1" />
              Demo
            </a>
          ) : (
            ""
          )}
        </div>
        {/* Content */}
        <hr className="py-5 mt-10" />
        <div className=" prose-sm lg:prose-base prose-ul:list-disc prose-blockquote:bg-dracula-bg prose-blockquote:px-2 lg:prose-blockquote:px-5 prose-img:mb-0.5">
          <ReactMarkdown
            className="markdown-body"
            remarkPlugins={[remarkGfm]}
            components={{
              img: (props) => (
                <Image
                  src={props.src}
                  alt={props.alt}
                  width={700}
                  height={200}
                />
              ),
            }}
          >
            {projectData.contentMarkdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
