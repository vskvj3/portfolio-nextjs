import { personalInfo } from "@/data/portfolioData";
import { skillCategories } from "@/data/portfolioData";

// Map skill names to pretend version strings for the retro feel
const skillVersions = {
  "gRPC": "1.60",
  "Leader-Follower Replication": "n/a",
  "Eventual Consistency": "n/a",
  "Fault Tolerance": "n/a",
  "Distributed Caching": "n/a",
  "Docker": "24.x",
  "PySpark": "3.5",
  "Spark SQL": "3.5",
  "Kafka": "3.7",
  "Delta Lake": "3.1",
  "Azure Data Factory": "v2",
  "Databricks": "14.x",
  "ETL/ELT": "n/a",
  "SCD Type 2": "n/a",
  "Go": "1.22",
  "Python": "3.12",
  "Java": "21",
  "Node.js": "20.x",
  "Express.js": "4.x",
  "REST APIs": "n/a",
  "SQL": "std",
  "Azure": "cloud",
  "Cosmos DB": "v4",
  "Blob Storage": "v12",
  "BigQuery": "v2",
  "MySQL": "8.x",
  "MongoDB": "7.x",
  "React": "19.x",
  "Next.js": "15.x",
  "Tailwind CSS": "4.x",
  "Git": "2.x",
  "Linux": "6.x",
  "Bash": "5.x",
};

export default function CyberpunkSkills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="cyber-divider mb-2">
          ┌──────────────────────────────────────────────┐
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 font-mono tracking-wider theme-heading">
          [ INSTALLED MODULES ]
        </h2>

        <p className="text-center mb-8 font-mono text-xs" style={{ color: "var(--text-tertiary)", letterSpacing: "0.2em" }}>
          pkg list --installed --all
        </p>

        <div className="space-y-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="cyber-frame p-4 md:p-5">
              {/* Category header */}
              <div
                className="text-xs md:text-sm font-bold mb-3 font-mono tracking-wider text-center"
                style={{
                  color: "var(--accent-amber)",
                  borderBottom: "1px dashed var(--border)",
                  paddingBottom: "0.5rem",
                }}
              >
                === PACKAGE GROUP: {category.name.toUpperCase()} ===
              </div>

              {/* Package list */}
              <div className="px-1 md:px-2">
                {category.skills.map((skill, skillIndex) => {
                  const version = skillVersions[skill] || "n/a";
                  return (
                    <div key={skillIndex} className="cyber-package-item">
                      <span className="pkg-status">[LOADED]</span>
                      <span className="pkg-name">{skill}</span>
                      <span className="pkg-dots">
                        {"·".repeat(40)}
                      </span>
                      <span className="pkg-version">v{version}</span>
                    </div>
                  );
                })}
              </div>

              {/* Package count */}
              <div
                className="text-right mt-2 font-mono text-xs"
                style={{ color: "var(--text-tertiary)" }}
              >
                {category.skills.length} packages loaded
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="text-center mt-6 font-mono text-xs" style={{ color: "var(--text-tertiary)" }}>
          total: {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)} modules installed ·
          system status: operational
        </div>

        <div className="cyber-divider mt-2">
          └──────────────────────────────────────────────┘
        </div>
      </div>
    </section>
  );
}
