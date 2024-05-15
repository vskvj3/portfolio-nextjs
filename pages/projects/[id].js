import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Head from "next/head";
import Date from "../../components/date";

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
      {projectData.title}
      <br />
      {projectData.id}
      <br />
      <Date dateString={projectData.date} />
      <br />
      <div className='prose' dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </Layout>
  );
}
