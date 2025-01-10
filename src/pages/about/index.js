import { FaGithub, FaLinkedin, FaTree, FaCircle } from "react-icons/fa";
import Projects from "@/components/about/projects";

export default function About() {
  return (
    <div className=''>
      <p className="text-red-500">!Under Constructio!n</p>

      {/* About Section */}
      <section className="flex flex-col mx-auto justify-center backdrop-blur-md mt-2 lg:mt-5 h-screen mb-2 lg:mb-5 p-[20px] text-dracula-t-white">
        <div className="backdrop-blur-lg  text-white w-full h-full flex flex-col justify-center items-center p-4 rounded-lg">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Hello There!</h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">I&apos;m Visakh Vijay</h2>
          <p className="text-xl sm:text-2xl mb-6">I&apos;m a software engineer from India</p>
          <p className="text-lg sm:text-xl mb-6">Let&apos;s get in touch!</p>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl">
            <a
              href="https://github.com/visakhvijayo"
              className="text-dracula-cyan hover:text-dracula-pink"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/visakhvijayo/"
              className="text-dracula-cyan hover:text-dracula-pink"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="h-screen flex flex-col justify-center items-center bg-dracula-background text-dracula-white px-4"
      >
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>

        <div className="md:w-2/3">


          <div className="relative mt-5 text-left">

            <div className="flex items-center relative">
              <div className="hidden md:block w-20">
                <div className="font-bold italic">2024</div>
                <div className="md:flex space-x-1 text-xs">
                  <div>Aug</div>
                  <div>-</div>
                  <div>pres</div>
                </div>
              </div>

              <div className="border-r-2 border-dracula-white absolute h-full left-1 md:left-20 top-2 z-10">

                <FaCircle className="-top-1 -ml-2 absolute" />
                <FaCircle className="bottom-0 -ml-2 absolute" />
              </div>

              <div className="ml-10">
                <div className="font-bold">UST</div>
                <div className="italic md:mb-4">Developer I - Software Engineering</div>
                <div className="mb-4 mt-2 md:hidden">
                  <div className="font-bold">2020</div>
                  <div className="text-xs">Agosto - Hoy</div>
                </div>
                <div className="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects/>

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
      {/* <footer className="text-center py-5 mb-10 sticky bottom-0 bg-dracula-chips rounded-lg backdrop-blur-sm m-4 z-100">
        <div className="space-x-4 px-3">
          <a href="#about" className="text-dracula-pink hover:text-dracula-green">About</a>
          <a href="#experience" className="text-dracula-pink hover:text-dracula-green">Experience</a>
          <a href="#projects" className="text-dracula-pink hover:text-dracula-green">Projects</a>
          <a href="#education" className="text-dracula-pink hover:text-dracula-green">Education</a>
          <a href="#contact" className="text-dracula-pink hover:text-dracula-green">Contact</a>
        </div>
      </footer> */}
    </div>
  );
}
