// ============================================================
// Portfolio Data Layer
// All portfolio content lives here. Both Default (Recruiter)
// and Cyberpunk modes render from this same data source.
// ============================================================

export const personalInfo = {
  name: "Visakh Vijay O",
  role: "Software Engineer",
  specialization: "Backend Development & Data Engineering",
  tagline: "Building scalable data systems and backend infrastructure.",
  bio: "A software engineer with experience in big data and data engineering technologies. Fascinated by technology since childhood, that curiosity still drives me to create, learn, and experiment. Currently working as a developer at UST.",
  location: "Kerala, India",
  email: "imvisakhvijay@gmail.com",
  github: "https://github.com/vskvj3",
  linkedin: "https://linkedin.com/in/visakhvj3",
  profileImage: "/images/profile.jpeg",
  resumeUrl: "#", // TODO: Add resume link
};

export const experience = [
  {
    title: "Software Engineer",
    company: "UST",
    period: "2024 – Present",
    type: "work",
    description:
      "Working on data engineering solutions and building scalable applications with big data technologies.",
    bullets: [
      "Designed and implemented data engineering pipelines using PySpark and Azure Data Factory",
      "Built scalable backend services processing enterprise-scale data workloads",
      "Worked with distributed computing frameworks and cloud-native architectures on Azure",
      "Collaborated with cross-functional teams to deliver data-driven insights to stakeholders",
    ],
    technologies: ["PySpark", "Azure Data Factory", "Databricks", "Python", "SQL"],
  },
];

export const education = [
  {
    title: "B.Tech Computer Science",
    institution: "RIT Kottayam",
    period: "2020 – 2024",
    description:
      "Graduated with expertise in software engineering, data structures, algorithms, and modern development frameworks.",
  },
  {
    title: "Higher Secondary (Computer Science)",
    institution: "GHMSS Perinthalmanna",
    period: "2018 – 2020",
    description: "Specialized in Computer Science with a strong foundation in mathematics.",
  },
];

export const skillCategories = [
  {
    name: "Distributed Systems",
    skills: ["gRPC", "Leader Election", "Data Replication", "Eventual Consistency", "Docker"],
  },
  {
    name: "Data Engineering",
    skills: ["PySpark", "Databricks", "Kafka", "Azure Data Factory", "BigQuery", "Spark SQL", "Hadoop"],
  },
  {
    name: "Backend Development",
    skills: ["Go", "Python", "Java", "Node.js", "Express.js", "MongoDB", "MySQL", "Azure SQL"],
  },
  {
    name: "Frontend & Tools",
    skills: ["React", "Next.js", "Flutter", "Tailwind CSS", "Git", "Linux", "Bash"],
  },
];

// Featured project IDs — these appear on the homepage
export const featuredProjectIds = ["Geomys", "SwiggyDataPipeline", "dposn"];

// About page narrative
export const aboutStory = [
  "My journey in software engineering began during my undergraduate studies and has evolved into a specialized focus on data engineering and big data technologies. I've worked on projects ranging from mobile applications to enterprise-level data pipelines that process large-scale information systems.",
  "At UST, I work with technologies like PySpark, Azure Data Factory, and various distributed computing frameworks. My role involves designing and implementing data solutions that transform raw information into actionable insights for business stakeholders.",
  "I stay current with emerging technologies and contribute to projects that solve practical problems. My focus is on building efficient, scalable systems that deliver real value.",
];

// Terminal commands for cyberpunk mode
export const terminalResponses = {
  whoami: `Hi There!
I'm a software engineer with experience in big data and data engineering technologies. I've been fascinated by technology since I was a kid, and that curiosity still drives me to create, learn, and experiment.
Currently, I work as a developer at UST, but more than titles, I enjoy the craft of building things that matter.
Think of this portfolio as my corner of the Wired, come say hi.`,
  help: `Available commands:
  help      - Show this help message
  whoami    - Display user information
  clear     - Clear the terminal
  contact   - Show contact information
  projects  - View my projects
  skills    - List technical skills
  about     - Learn more about me`,
  contact: `Contact Information:
  Email:    imvisakhvijay@gmail.com
  LinkedIn: linkedin.com/in/visakhvj3
  GitHub:   github.com/vskvj3`,
  skills: `Technical Skills:
  ┌─ Distributed Systems ──── gRPC, Leader Election, Replication
  ├─ Data Engineering ─────── PySpark, Databricks, Kafka, ADF
  ├─ Backend Development ──── Go, Python, Java, Node.js
  └─ Frontend & Tools ─────── React, Next.js, Docker, Git`,
  about: `Redirecting to about page...`,
  projects: `Redirecting to projects page...`,
};
