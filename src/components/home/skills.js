import {
  FaPython,
  FaJava,
  FaCode,
  FaNodeJs,
  FaReact,
  FaGit,
  FaLinux,
  FaDocker,
  FaTerminal
} from "react-icons/fa";

import {
  SiGo,
  SiCplusplus,
  SiDatabricks,
  SiApachekafka,
  SiApachehadoop,
  SiExpress,
  SiMongodb,
  SiFlutter
} from "react-icons/si";

import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { DiSpark, DiDatabase } from "react-icons/di";




export default function Skills(params) {
  const skillsData = [
    {
      category: "Programming & Development",
      skills: [
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Go", icon: <SiGo className="text-cyan-500" /> },
        { name: "JavaScript", icon: <FaCode className="text-yellow-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <GrMysql className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <RiNextjsLine className="text-white" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },  
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      ]
    },
    {
      category: "Data Engineering & Cloud",
      skills: [
        { name: "PySpark", icon: <DiSpark className="text-orange-500" /> },
        { name: "Databricks", icon: <SiDatabricks className="text-red-500" /> },
        { name: "Kafka", icon: <SiApachekafka className="text-white" /> },
        { name: "BigQuery", icon: <TbBrandGoogleBigQuery className="text-blue-500" /> },
        { name: "Azure SQL", icon: <VscAzure className="text-blue-500" /> },
        { name: "Hadoop", icon: <SiApachehadoop className="text-yellow-500" /> },
        { name: "MapReduce", icon: <DiDatabase className="text-yellow-600" /> },
        { name: "Azure Data Factory", icon: <VscAzure className="text-blue-500" /> },
        { name: "Spark SQL", icon: <DiDatabase className="text-gray-400" /> },
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGit className="text-orange-500" /> },
        { name: "Linux", icon: <FaLinux className="text-yellow-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Bash", icon: <FaTerminal className="text-gray-400" /> },
      ]
    }
  ];


  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">[ SKILLS ]</h2>

        <div className="space-y-8 md:space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black/30 backdrop-blur-lg p-4 md:p-6 rounded-lg border border-cyan-400/20">
              <h3 className="text-lg md:text-xl font-bold text-cyan-300 mb-4 md:mb-6 text-center font-mono tracking-wider">
                [ {category.category.toUpperCase()} ]
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800/40 backdrop-blur-md p-2 md:p-3 rounded-lg border border-cyan-400/20 text-center hover:border-cyan-400/70 hover:bg-gray-800/60 transition-all duration-300 group cursor-pointer overflow-hidden"
                  >
                    <div className="flex items-center justify-center h-6 md:h-8 mb-2 text-base md:text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-gray-200 font-semibold text-xs sm:text-sm md:text-base group-hover:scale-105 transition-transform duration-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
