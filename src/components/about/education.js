import { FaRegDotCircle , FaCircle } from "react-icons/fa";

export default function AboutEducation({ allProjectsData }) {
    return (
        <section
            id="education"
            className="h-screen flex flex-col justify-center items-center bg-dracula-background text-dracula-white px-4"
        >
            <h2 className="text-3xl font-semibold mb-8">Education</h2>

            <div className="md:w-2/3">


                <div className="relative mt-5 text-left">
                    {/** Education 1*/}
                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className="font-bold italic">B. Tech</div>
                            <div className="md:flex space-x-1 text-xs">
                                <div>2020</div>
                                <div>-</div>
                                <div>2024</div>
                            </div>
                        </div>

                        <div className="border-r-2 border-dracula-white absolute h-full left-1 md:left-20 top-2 z-10">

                            <FaCircle className="-top-1 -ml-2 absolute" />
                        </div>

                        <div className="ml-10">
                            <div className="font-bold">Computer Science and Engineering</div>
                            <div className="italic md:mb-4">RIT, Kottayam</div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">B. Tech</div>
                                <div className="text-xs">2020 - 2024</div>
                            </div>
                            <div className="mb-10">Fusce auctor gravida dui, vestibulum ultrices nibh.</div>
                        </div>
                    </div>

                    {/** Education 2*/}
                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className="font-bold italic">HSSE</div>
                            <div className="md:flex space-x-1 text-xs">
                                <div>2018</div>
                                <div>-</div>
                                <div>2020</div>
                            </div>
                        </div>

                        <div className="border-r-2 border-dracula-white absolute h-full left-1 md:left-20 top-2 z-10">

                            <FaCircle className="-top-1 -ml-2 absolute" />
                            <FaRegDotCircle className="bottom-0 -ml-2 -mb-4 absolute" />
                        </div>

                        <div className="ml-10">
                            <div className="font-bold">Computer Science</div>
                            <div className="italic md:mb-4">GHMSS Perinthalmanna</div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">HSSE</div>
                                <div className="text-xs">2018 - 2024</div>
                            </div>
                            <div className="mb-10">Fusce auctor, vestibulum ultrices nibh.</div>
                        </div>
                    </div>


                </div>
                
            </div>
        </section>)
}