import Image from "next/image";
import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  const page = true;
  return {
    props: {
      allProjectsData,
      page
    },
  };
}

export default function Projects({ allProjectsData, page }) {
  return (
    <div>
      <section className="bg-dracula-foreground/35 backdrop-blur-md w-1/2 min-w-[370px] max-w-[700px] h-auto mx-auto mb-2 lg:mb-5 p-[10px] lg:p-[20px] rounded-md text-left text-dracula-t-white">
        <ul>
          <p className=" text-center pb-3 lg:text-lg">[Projects]</p>
          {allProjectsData.map(({ id, date, tags, title }) => (
            <Link key={id} href={`/projects/${encodeURIComponent(id)}`}>
              <li className="bg-dracula-cards/20 hover:bg-dracula-cards/30 text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5">
                <span className=" text-blue-500 text-md lg:text-lg">
                  {title}
                </span>

                <br />
                <div className="flex flex-wrap">
                  {/* split tags by +, then show each tag inside a div */}
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className="lg:text-sm text-xs p-1 mr-1 mt-1 bg-dracula-chips rounded-md"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </li>
            </Link>
          ))}
        </ul>
        {page ? null : (
          <div className=" text-sm text-center hover:text-blue-500">
            <Link href={"/projects"}>[View More ➤]</Link>
          </div>
        )}
      </section>
    </div>
  );
}
