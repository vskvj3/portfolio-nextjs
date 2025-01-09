import { FaGithub, FaLinkedin, FaTree } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-dracula-background text-dracula-foreground">
      <p className="text-red-500">!Under Constructio!n</p>
      <header className="py-6 px-4 text-center text-3xl font-semibold sticky top-0 bg-dracula-background z-10">
        <h1>My Portfolio</h1>
      </header>

      {/* About Section */}
      <section id="about" className="h-screen flex justify-center items-center bg-dracula-background">
        <div className="backdrop-blur-lg bg-white/30 text-center w-full sm:w-2/3 max-w-xl p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p>
            I am a passionate developer with experience in building modern,
            responsive web applications. I focus on creating seamless user
            experiences and writing clean, maintainable code.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="h-screen flex justify-center items-center bg-dracula-background">
        <div className="backdrop-blur-lg bg-white/30 text-center w-full sm:w-2/3 max-w-xl p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>
          <ul>
            <li className="mb-3">
              <h3 className="font-semibold">Software Engineer</h3>
              <p>Company XYZ - 2023 - Present</p>
              <p>Worked on building scalable web applications.</p>
            </li>
            <li>
              <h3 className="font-semibold">Frontend Developer</h3>
              <p>Company ABC - 2021 - 2023</p>
              <p>Developed UI for various web platforms using React and Tailwind.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen flex justify-center items-center bg-dracula-background">
        <div className="backdrop-blur-lg bg-white/30 text-center w-full sm:w-2/3 max-w-xl p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Project 1</h3>
              <p>Description of the project goes here.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Project 2</h3>
              <p>Description of the project goes here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="h-screen flex justify-center items-center bg-dracula-background">
        <div className="backdrop-blur-lg bg-white/30 text-center w-full sm:w-2/3 max-w-xl p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <ul>
            <li className="mb-3">
              <h3 className="font-semibold">Bachelor of Computer Science</h3>
              <p>University ABC - 2017 - 2021</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex justify-center items-center bg-dracula-background">
        <div className="backdrop-blur-lg bg-white/30 text-center w-full sm:w-2/3 max-w-xl p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="text-3xl text-dracula-cyan hover:text-dracula-pink">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" className="text-3xl text-dracula-cyan hover:text-dracula-pink">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" className="text-3xl text-dracula-cyan hover:text-dracula-pink">
              <FaTree />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Navigation */}
      <footer className="text-center py-6 sticky bottom-0 bg-dracula-background z-10">
        <div className="space-x-4">
          <a href="#about" className="text-dracula-pink hover:text-dracula-green">About</a>
          <a href="#experience" className="text-dracula-pink hover:text-dracula-green">Experience</a>
          <a href="#projects" className="text-dracula-pink hover:text-dracula-green">Projects</a>
          <a href="#education" className="text-dracula-pink hover:text-dracula-green">Education</a>
          <a href="#contact" className="text-dracula-pink hover:text-dracula-green">Contact</a>
        </div>
      </footer>
    </div>
  );
}
