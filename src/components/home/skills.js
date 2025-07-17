
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
  return (
        <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">[ SKILLS ]</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'Figma', 'PostgreSQL', 'Docker', 'AWS', 'Git & GitHub'].map(skill => (
            <div key={skill} className="bg-gray-800/40 backdrop-blur-md p-6 rounded-lg border border-cyan-400/20 text-center hover:border-cyan-400/70 hover:bg-gray-800/60 transition-all duration-300">
              <p className="text-gray-200 font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
