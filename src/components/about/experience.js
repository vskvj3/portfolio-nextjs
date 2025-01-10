import { FaCircle, FaRegDotCircle } from "react-icons/fa";

export default function AboutExperience({ allProjectsData }) {
    return (
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
                <FaRegDotCircle className="bottom-0 -ml-2 -mb-4 absolute" />
              </div>

              <div className="ml-10">
                <div className="font-bold">UST</div>
                <div className="italic md:mb-4">Developer I - Software Engineering</div>
                <div className="mb-4 mt-2 md:hidden">
                  <div className="font-bold">2024</div>
                  <div className="text-xs">Aug - Pres</div>
                </div>
                <div className="mb-10">Working as part of data services team.</div>
              </div>
            </div>


          </div>
        </div>
      </section>)
}