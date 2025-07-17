import Image from "next/image";
import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";
import { ChevronsRight, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';


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
          <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">[ PROJECTS ]</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {allProjectsData.map(({ id, date, tags, title }) => (
              <div key={title} className="bg-black/50 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/20 flex flex-col hover:border-cyan-400/70 hover:-translate-y-1 transition-all duration-300">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
                  <p className="text-gray-400 mb-4">"description"</p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-wrap gap-2">
                    {tags.map(t => <span key={t} className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">{t}</span>)}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href={id} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors"><Github size={20} /></a>
                    <a href={id} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors"><ExternalLink size={20} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    // <div>
    //   <section className="bg-dracula-foreground/35 backdrop-blur-md w-1/2 min-w-[370px] max-w-[700px] h-auto mx-auto mb-2 lg:mb-5 p-[10px] lg:p-[20px] rounded-md text-left text-dracula-t-white">
    //     <ul>
    //       <p className=" text-center pb-3 lg:text-lg">[Projects]</p>
    //       {allProjectsData.map(({ id, date, tags, title }) => (
    //         <Link key={id} href={`/projects/${encodeURIComponent(id)}`}>
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
    //       <div className=" text-sm text-center hover:text-blue-500">
    //         <Link href={"/projects"}>[View More ➤]</Link>
    //       </div>
    //     )}
    //   </section>
    // </div>
  );
}
