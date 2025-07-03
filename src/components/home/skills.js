
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
    <section className=" bg-dracula-foreground/35 backdrop-blur-md w-1/2 mt-2 lg:mt-5 min-w-[370px] max-w-[700px] h-auto mx-auto mb-2 lg:mb-5 p-[20px] rounded-md text-left text-dracula-t-white">
      <div className=" text-center text-lg mb-5 font-bold">[My Tools]</div>
      <hr className="border-white mb-5" />
      <div>
        <div className=" text-center mb-3">[Data]</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 mb-5 text-center gap-3">
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Pyspark <DiSpark />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Databricks <SiDatabricks />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Kafka <SiApachekafka />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            BigQuery <TbBrandGoogleBigQuery />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Azure SQL <VscAzure />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Microsoft Fabric <FaMicrosoft />{" "}
          </div>
          
        </div>

        <div className=" text-center mb-3">[Web development]</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 mb-5 text-center gap-3">
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            React <FaReact />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Next.js <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            HTML <FaHtml5 />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            CSS <FaCss3 />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Tailwind CSS <RiTailwindCssFill />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Node.js <FaNodeJs />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Express.js <SiExpress />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            MongoDB <SiMongodb />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            MySQL <GrMysql />{" "}
          </div>
        </div>

        <div className=" text-center mb-3">[Others]</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 text-center gap-3">
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Flutter <SiFlutter />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Git <FaGit />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Linux <FaLinux />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Java <FaJava />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            Python <FaPython />
          </div>
          <div className="flex items-center justify-center gap-2 bg-dracula-chips/30 hover:bg-dracula-chips/60 rounded-md">
            C/C++ <SiCplusplus />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
