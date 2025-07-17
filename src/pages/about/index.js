import { FaGithub, FaLinkedin } from "react-icons/fa";
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
    <div className="min-h-screen">
      {/* About Section */}
      <section className="flex flex-col mx-auto justify-center backdrop-blur-md mt-2 lg:mt-5 h-screen mb-2 lg:mb-5 p-[20px] text-white">
        <div className="backdrop-blur-lg text-white w-full h-full flex flex-col justify-center items-center p-4 rounded-lg">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Hello There!</h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">I&apos;m Visakh Vijay</h2>
          <p className="text-md sm:text-2xl mb-6">I&apos;m a software engineer from India</p>
        </div>
      </section>

      {/* Experience Section */}
      <AboutExperience />

      {/* Education Section */}
      <AboutEducation />

      {/* Projects Section */}
      <AboutProjects allProjectsData={allProjectsData} />

      {/* Contact Section */}
      <AboutContact />
    </div>
  );
}
