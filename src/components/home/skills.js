
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiFlutter } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

import { DiSpark } from "react-icons/di";
import { SiDatabricks } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaMicrosoft } from "react-icons/fa";



export default function Skills(params) {
  const skillsData = [
    {
      category: "Data",
      skills: [
        { name: "PySpark", icon: <DiSpark className="text-orange-500" /> },
        { name: "Databricks", icon: <SiDatabricks className="text-red-500" /> },
        { name: "Kafka", icon: <SiApachekafka className="text-white" /> },
        { name: "BigQuery", icon: <TbBrandGoogleBigQuery className="text-blue-500" /> },
        { name: "Azure SQL", icon: <VscAzure className="text-blue-500" /> },
        { name: "Microsoft Fabric", icon: <FaMicrosoft className="text-blue-500" /> },
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <RiNextjsLine className="text-white" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <GrMysql className="text-blue-500" /> },
      ]
    },
    {
      category: "Others",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
        { name: "Git", icon: <FaGit className="text-orange-500" /> },
        { name: "Linux", icon: <FaLinux className="text-yellow-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "C/C++", icon: <SiCplusplus className="text-blue-600" /> },
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
