import { skillCategories } from "@/data/portfolioData";
import {
  Server, Database, Network, Terminal, RefreshCw, ArrowRightLeft, Activity, Cloud
} from "lucide-react";
import {
  SiDocker, SiApachespark, SiDatabricks, SiApachekafka,
  SiGooglecloud, SiApachehadoop, SiGo, SiPython,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiReact, SiNextdotjs,
  SiFlutter, SiTailwindcss, SiGit, SiLinux, SiGnubash
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const iconMap = {
  "gRPC": Network,
  "Leader Election": Activity,
  "Data Replication": ArrowRightLeft,
  "Eventual Consistency": RefreshCw,
  "Docker": SiDocker,
  "PySpark": SiApachespark,
  "Databricks": SiDatabricks,
  "Kafka": SiApachekafka,
  "Azure Data Factory": Cloud,
  "BigQuery": SiGooglecloud,
  "Spark SQL": SiApachespark,
  "Hadoop": SiApachehadoop,
  "Go": SiGo,
  "Python": SiPython,
  "Java": FaJava,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Azure SQL": Database,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Flutter": SiFlutter,
  "Tailwind CSS": SiTailwindcss,
  "Git": SiGit,
  "Linux": SiLinux,
  "Bash": SiGnubash,
};


export default function DefaultSkills() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 theme-heading">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            return (
              <div key={category.name} className="theme-card p-6">
                <div className="flex items-center mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                  <h3>{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconMap[skill];
                    return (
                      <span key={skill} className="theme-tag flex items-center gap-1.5" style={{ padding: "0.25rem 0.75rem" }}>
                        {SkillIcon && <SkillIcon size={14} className="opacity-80" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
