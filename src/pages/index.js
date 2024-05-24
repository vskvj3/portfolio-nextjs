import Layout, { siteTitle } from "@/components/layout";
import Head from "next/head";
import Contact from "@/components/home/contact";
import Terminal from "@/components/home/terminal";
import Skills from "@/components/home/skills";
import Link from "next/link";
import Posts from "./posts";
import { getSortedPostsData } from "@/lib/posts";
import { getSortedProjectsData } from "@/lib/projects";
import Projects from "./projects";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  const count = 3;
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* section 1: Terminal */}
      <Terminal />

      {/* section 3: Skills */}
      <Skills />

      {/* section 2 */}
      <Projects allProjectsData={allProjectsData} /> 

      {/* section 3 */}
      {/* list all posts as in /posts/index.js but dont import posts*/}
      <Posts allPostsData={allPostsData} />

      {/* section 4: Contact */}
      <Contact />
    </>
  );
}
