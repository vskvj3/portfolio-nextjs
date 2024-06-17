import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Layout from "@/components/layout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const page = true;
  return {
    props: {
      allPostsData,
      page,
    },
  };
}

export default function Posts({ allPostsData, page }) {
  return (
    <div>
      <section className="bg-black/35 backdrop-blur-md w-1/2 min-w-[370px] max-w-[700px] h-auto mx-auto mb-2 lg:mb-5 p-[10px] lg:p-[20px] rounded-md text-left text-white">
        <ul>
          <p className=" text-center pb-3 lg:text-lg">[Posts]</p>
          {allPostsData.map(({ id, date, tags, title }) => (
            <Link key={id} href={`/posts/${encodeURIComponent(id)}`}>
              <li className="bg-[#121420] hover:bg-[#212438] text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5">
                <span className=" text-blue-500 text-md lg:text-lg">
                  {title}
                </span>
                <br />
                <div className="flex flex-wrap">
                  {/* split tags by +, then show each tag inside a div */}
                  {tags.split("+").map((tag) => (
                    <div
                      key={tag}
                      className="lg:text-sm text-xs p-1 mr-1 mt-1 bg-[#353a57] rounded-md"
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
          <div className="text-sm text-center hover:text-blue-500">
            <Link href={"/posts"}>[View More ➤]</Link>
          </div>
        )}
      </section>
    </div>
  );
}
