import { FaGithub } from "react-icons/fa";

export default function AboutProjects({ allProjectsData }) {
    return (
        <section id="projects" className="h-screen bg-dracula-background px-4 py-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-dracula-t-white">Projects</h2>
            </div>

            <div className="overflow-x-auto">
                {/* Project Cards Container with horizontal scrolling */}
                <div className="flex justify-start sm:justify-center space-x-6 snap-x sm:snap-none">
                    {allProjectsData?.map(({ id, date, tags, title }) => (
                        <div
                            key={id}
                            className="min-w-[320px] sm:w-[320px] w-full bg-dracula-background p-6 border border-dracula-pink rounded-lg backdrop-blur-lg hover:shadow-xl transition duration-300 flex flex-col justify-between h-[400px]"  // Added flex-col and h-[400px]
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-dracula-t-white mb-3">{title}</h3>
                                <p className="text-dracula-t-white mb-4">A brief description of what the project is about and what problem it solves.</p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full">Node.js</span>
                                    <span className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full">MongoDB</span>
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-sm bg-dracula-cyan text-dracula-background px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons Container (always at the bottom of the card) */}
                            <div className="mt-auto flex justify-between mx-auto w-full">
                                {/* GitHub Link */}
                                <a
                                    href="https://github.com/yourusername/project1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dracula-pink inline-block hover:underline"
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
                    ))}
                </div>
            </div>
        </section>
    );
}
