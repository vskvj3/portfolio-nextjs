import { skillCategories } from "@/data/portfolioData";

export default function DefaultSkills() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 theme-heading">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.name} className="theme-card p-6">
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: "var(--accent)" }}
              >
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="theme-tag">
                    {skill}
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
