import Image from "next/image";
import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

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
    <section id="projects" className="h-screen bg-dracula-background px-4 py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-dracula-t-white">Projects</h2>
      </div>

      <div className="overflow-x-auto">
        {/* Project Cards Container with horizontal scrolling */}
        <div className="flex space-x-6 snap-x sm:snap-none">
          {/* Project Card 1 */}
          <div className="min-w-[300px] sm:w-[320px] w-full bg-dracula-background p-6 border border-dracula-pink rounded-lg backdrop-blur-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-dracula-t-white mb-3">Project 1</h3>
            <p className="text-dracula-t-white mb-4">A brief description of what the project is about and what problem it solves.</p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full">React</span>
              <span className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full">Node.js</span>
              <span className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full">MongoDB</span>
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com/yourusername/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-pink inline-block mb-4 hover:underline"
            >
              <FaGithub className="inline mr-2" />
              View Code
            </a>

            {/* View More Button */}
            <a
              href="#"
              className="bg-dracula-pink text-dracula-background py-2 px-4 rounded-md hover:bg-dracula-cyan transition duration-300"
            >
              View More
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="min-w-[300px] sm:w-[320px] w-full bg-dracula-background p-6 border border-dracula-pink rounded-lg backdrop-blur-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-dracula-t-white mb-3">Project 2</h3>
            <p className="text-dracula-t-white mb-4">A brief description of what the project is about and what problem it solves.</p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full">Vue.js</span>
              <span className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full">Firebase</span>
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com/yourusername/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-pink inline-block mb-4 hover:underline"
            >
              <FaGithub className="inline mr-2" />
              View Code
            </a>

            {/* View More Button */}
            <a
              href="#"
              className="bg-dracula-pink text-dracula-background py-2 px-4 rounded-md hover:bg-dracula-cyan transition duration-300"
            >
              View More
            </a>
          </div>

          {/* Project Card 3 */}
          <div className="min-w-[300px] sm:w-[320px] w-full bg-dracula-background p-6 border border-dracula-pink rounded-lg backdrop-blur-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-dracula-t-white mb-3">Project 3</h3>
            <p className="text-dracula-t-white mb-4">A brief description of what the project is about and what problem it solves.</p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full">Angular</span>
              <span className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full">Express</span>
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com/yourusername/project3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-pink inline-block mb-4 hover:underline"
            >
              <FaGithub className="inline mr-2" />
              View Code
            </a>

            {/* View More Button */}
            <a
              href="#"
              className="bg-dracula-pink text-dracula-background py-2 px-4 rounded-md hover:bg-dracula-cyan transition duration-300"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
