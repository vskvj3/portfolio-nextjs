import { FaGithub, FaLinkedin, FaTree, FaCircle } from "react-icons/fa";
import { getSortedProjectsData } from "@/lib/projects";
import AboutProjects from "@/components/about/projects";
import AboutEducation from "@/components/about/education";
import AboutContact from "@/components/about/contact";
import AboutExperience from "@/components/about/experience";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData(3);
  return {
    props: {
      allProjectsData
    },
  };
}

export default function About({ allProjectsData }) {
  return (
    <div className=''>
      {/* <p className="text-red-500">!Under Constructio!n</p> */}

      {/* About Section */}
      <section className="flex flex-col mx-auto justify-center backdrop-blur-md mt-2 lg:mt-5 h-screen mb-2 lg:mb-5 p-[20px] text-dracula-t-white">
        <div className="backdrop-blur-lg  text-white w-full h-full flex flex-col justify-center items-center p-4 rounded-lg">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Hello There!</h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">I&apos;m Visakh Vijay</h2>
          <p className="text-md sm:text-2xl mb-6">I&apos;m a software engineer from India</p>

          {/* Social Icons */}
          {/* <div className="flex gap-6 text-3xl">
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
          </div> */}
        </div>
      </section>

      {/* Experience Section */}
      <AboutExperience />

      {/* Projects Section */}
      <AboutProjects allProjectsData={allProjectsData}/>

      {/* Education Section */}
      <AboutEducation/>

      {/* Contact Section */}
      <AboutContact/>

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
