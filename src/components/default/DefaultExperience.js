import { experience } from "@/data/portfolioData";

export default function DefaultExperience() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 theme-heading"
        >
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((role, index) => (
            <div key={index} className="theme-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {role.title}
                  </h3>
                  <p
                    className="text-base font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {role.company}
                  </p>
                </div>
                <p
                  className="text-sm mt-1 md:mt-0"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {role.period}
                </p>
              </div>

              <p
                className="mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {role.description}
              </p>

              <ul className="space-y-2 mb-5">
                {role.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {role.technologies.map((tech) => (
                  <span key={tech} className="theme-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
