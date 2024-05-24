import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Layout from "@/components/layout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <div>
        <section className="bg-black w-1/2 min-w-[350px] max-w-[700px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
          <ul>
            <p className=" text-center pb-5">[Projects]</p>
            {allPostsData.map(({ id, date, tags, title }) => (
              <Link key={id} href={`/posts/${encodeURIComponent(id)}`}>
                <li className="bg-[#121420] hover:bg-[#212438] text-[#f8f8f2] h-auto p-5 rounded-md mb-5">
                  <span className=" text-blue-500 text-xl">{title}</span>

                  <br />
                  <div className="flex">
                    {/* split tags by +, then show each tag inside a div */}
                    {tags.split("+").map((tag) => (
                      <div
                        key={tag}
                        className="text-sm p-1 mr-1 mt-1 bg-[#353a57] rounded-md"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
