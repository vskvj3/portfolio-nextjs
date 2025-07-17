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
    <section id="blogs" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">[ BLOGS ]</h2>
                <div className="space-y-8">
                    {allPostsData.map(({ id, date, tags, title }) => (
                        <div key={title} className="bg-black/50 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400/70 transition-all duration-300 flex flex-col md:flex-row items-center">
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
                                <p className="text-gray-400">"description"</p>
                            </div>
                            <p className="text-gray-500 font-mono text-sm mt-4 md:mt-0 md:ml-6 flex-shrink-0">{date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    // <div>
    //   <section className="bg-dracula-foreground/35 backdrop-blur-md w-1/2 min-w-[370px] max-w-[700px] h-auto mx-auto mb-2 lg:mb-5 p-[10px] lg:p-[20px] rounded-md text-left text-dracula-t-white">
    //     <ul>
    //       <p className=" text-center pb-3 lg:text-lg">[Posts]</p>
    //       {allPostsData.map(({ id, date, tags, title }) => (
    //         <Link key={id} href={`/posts/${encodeURIComponent(id)}`}>
    //           <li className="bg-dracula-cards/20 hover:bg-dracula-cards/30 text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5">
    //             <span className=" text-blue-500 text-md lg:text-lg">
    //               {title}
    //             </span>
    //             <br />
    //             <div className="flex flex-wrap">
    //               {/* split tags by +, then show each tag inside a div */}
    //               {tags.map((tag) => (
    //                 <div
    //                   key={tag}
    //                   className="lg:text-sm text-xs p-1 mr-1 mt-1 bg-dracula-chips rounded-md"
    //                 >
    //                   {tag}
    //                 </div>
    //               ))}
    //             </div>
    //           </li>
    //         </Link>
    //       ))}
    //     </ul>
    //     {page ? null : (
    //       <div className="text-sm text-center hover:text-blue-500">
    //         <Link href={"/posts"}>[View More ➤]</Link>
    //       </div>
    //     )}
    //   </section>
    // </div>
  );
}
