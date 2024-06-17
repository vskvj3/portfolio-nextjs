import Layout from "@/components/layout";
import { getAllProjectIds, getProjectData } from "@/lib/projects";
import Head from "next/head";
import Date from "@/components/date";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

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
        <h1 className=" text-2xl">{projectData.title}</h1>
        <br />
        <div className="text-sm">
          <Date dateString={projectData.date} />
        </div>
        <br />
        <div className="flex flex-wrap lg:text-sm text-xs">
          {projectData.tags.split("+").map((tag) => (
            <div key={tag} className="p-1 mr-1 mt-1 bg-[#353a57] rounded-md">
              {tag}
            </div>
          ))}
        </div>

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
