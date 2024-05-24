import Layout from "@/components/layout";
import { getAllProjectIds, getProjectData } from "@/lib/projects";
import Head from "next/head";
import Date from "@/components/date";

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
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <div className="bg-black w-1/2 min-w-[350px] max-w-[700px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
        <h1 className=" text-2xl">{projectData.title}</h1>
        <br />
        <div className="text-sm">
          <Date dateString={projectData.date} />
        </div>
        <br />
        <div className="flex">
          {projectData.tags.split("+").map((tag) => (
            <div
              key={tag}
              className="text-sm p-1 mr-1 mt-1 bg-[#353a57] rounded-md"
            >
              {tag}
            </div>
          ))}
        </div>

        <hr className="py-5 mt-10" />
        <div
          className=" prose-base lg:prose-lg prose-ul:list-disc prose-blockquote:bg-slate-900 prose-blockquote:px-5"
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
      </div>
    </Layout>
  );
}
