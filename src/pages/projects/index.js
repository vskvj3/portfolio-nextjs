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
  if (page) {
    // Full page version
    return (
      <div className="min-h-screen">
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">[ PROJECTS ]</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {allProjectsData.map(({ id, date, tags, title, description, github, url }) => (
                <div key={title} className="bg-black/50 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/20 flex flex-col hover:border-cyan-400/70 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex-grow">
                    <Link href={`/projects/${encodeURIComponent(id)}`}>
                      <h3 className="text-xl font-bold text-cyan-300 mb-2 hover:text-cyan-200 cursor-pointer transition-colors">
                        {title}
                      </h3>
                    </Link>
                    <p className="text-gray-400 mb-4">{description}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-wrap gap-2">
                      {tags.map(t => <span key={t} className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">{t}</span>)}
                    </div>
                    <div className="flex items-center space-x-4">
                      {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {url && (
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors">
                          <ExternalLink size={20} />
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
    );
  }

  // Section version for home page (no backgrounds)
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">[ PROJECTS ]</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {allProjectsData.map(({ id, date, tags, title, description, github, url }) => (
            <div key={title} className="bg-black/50 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/20 flex flex-col hover:border-cyan-400/70 hover:-translate-y-1 transition-all duration-300">
              <div className="flex-grow">
                <Link href={`/projects/${encodeURIComponent(id)}`}>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2 hover:text-cyan-200 cursor-pointer transition-colors">
                    {title}
                  </h3>
                </Link>
                <p className="text-gray-400 mb-4">{description}</p>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => <span key={t} className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">{t}</span>)}
                </div>
                <div className="flex items-center space-x-4">
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {!page && (
          <div className="text-center mt-8">
            <Link href="/projects" className="text-cyan-300 hover:text-cyan-200 transition-colors">
              [View More ➤]
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
