import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Layout from "@/components/layout";
import { ExternalLink } from "lucide-react";

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
  if (page) {
    // Full page version with backgrounds
    return (
      <>
        {/* Background Pattern */}
        <div className="fixed top-0 left-0 w-full min-h-screen h-full bg-cover bg-center animated-gradient"></div>
        <div className="fixed top-0 left-0 w-full min-h-screen h-full" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')", opacity: '0.03', zIndex: 1}}></div>
        
        <div className="relative z-10 min-h-screen">
          <section id="blogs" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">[ BLOGS ]</h2>
              <div className="space-y-8">
                {allPostsData.map(({ id, date, tags, title, description, link, github }) => (
                  <div key={id} className="bg-black/50 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400/70 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-grow">
                        {link ? (
                          <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group"
                          >
                            <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors flex items-center">
                              {title}
                              <ExternalLink size={16} className="ml-2 opacity-70" />
                            </h3>
                          </a>
                        ) : (
                          <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
                        )}
                        <p className="text-gray-400 mb-4">{description}</p>
                        
                        {/* Tags */}
                        {tags && tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag) => (
                              <Link key={tag} href={`/search?tags=${encodeURIComponent(tag)}`}>
                                <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded hover:bg-cyan-900/70 transition-colors cursor-pointer">
                                  {tag}
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-4 md:mt-0 md:ml-6">
                        <p className="text-gray-500 font-mono text-sm flex-shrink-0">{date}</p>
                        {github && (
                          <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-300 transition-colors"
                            title="View on GitHub"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // Section version for home page (no backgrounds)
  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">[ BLOGS ]</h2>
        <div className="space-y-8">
          {allPostsData.map(({ id, date, tags, title, description, link, github }) => (
            <div key={id} className="bg-black/50 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400/70 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-grow">
                  {link ? (
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group"
                    >
                      <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors flex items-center">
                        {title}
                        <ExternalLink size={16} className="ml-2 opacity-70" />
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
                  )}
                  <p className="text-gray-400 mb-4">{description}</p>
                  
                  {/* Tags */}
                  {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag) => (
                        <Link key={tag} href={`/search?tags=${encodeURIComponent(tag)}`}>
                          <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded hover:bg-cyan-900/70 transition-colors cursor-pointer">
                            {tag}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 mt-4 md:mt-0 md:ml-6">
                  <p className="text-gray-500 font-mono text-sm flex-shrink-0">{date}</p>
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-300 transition-colors"
                      title="View on GitHub"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!page && (
          <div className="text-center mt-8">
            <Link href="/posts" className="text-cyan-300 hover:text-cyan-200 transition-colors">
              [View More ➤]
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
