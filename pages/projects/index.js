import Image from "next/image";
import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";
import Layout from "@/components/layout";

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
    <Layout>
      <div>
        <section className="bg-black w-1/2 min-w-[400px] max-w-[600px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
          <ul>
            <p className=" text-center pb-5">[Projects]</p>
            {allProjectsData.map(({ id, date, title }) => (
              <li key={id} className="bg-[#121420] text-[#f8f8f2] h-auto p-5 rounded-md">
                <Link href={`/projects/${encodeURIComponent(id)}`}>
                  <span className=" text-blue-500 text-xl">{title}</span>
                </Link>
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
