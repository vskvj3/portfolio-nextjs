export const personalInfo = {
  name: "Visakh Vijay O",
  role: "Software Development Engineer",
  specialization: "Backend Systems & Data Engineering",
  tagline: "Building distributed systems and high-throughput data pipelines.",
  bio: "Software Development Engineer with experience building distributed backend systems and scalable data pipelines. Skilled in Python, Go, SQL, and the Azure ecosystem, with strong fundamentals in system design, fault tolerance, and performance optimization. Passionate about solving real-world data and infrastructure challenges.",
  location: "Kerala, India",
  email: "imvisakhvijay@gmail.com",
  github: "https://github.com/vskvj3",
  linkedin: "https://linkedin.com/in/visakhvj3",
  profileImage: "/images/profile.jpeg",
  resumeUrl: "#", // update with actual link
};

export const experience = [
  {
    title: "Software Development Engineer",
    company: "UST",
    period: "Aug 2024 – Present",
    type: "work",
    description:
      "Building distributed data pipelines and backend systems for enterprise-scale applications with a focus on performance, reliability, and scalability.",
    bullets: [
      "Contributed to a large-scale replenishment integration system for a U.S. retail chain (2000+ stores), ensuring reliable data synchronization across ERP systems",
      "Refactored batch pipelines into Kafka-based real-time streaming workflows, improving data freshness and system maintainability",
      "Improved Spark job performance by 35% through optimized joins, caching, and partitioning strategies",
      "Built a multi-threaded Python data migration client reducing execution time by 33%",
      "Implemented fault-tolerant retry and alerting mechanisms, eliminating recurring job failures and reducing manual intervention",
      "Developed event-driven architectures and backend services for high-throughput data processing",
    ],
    technologies: [
      "Python",
      "PySpark",
      "Apache Spark",
      "Kafka",
      "Azure Databricks",
      "Azure Data Factory",
      "SQL",
      "Docker",
    ],
  },
];

export const education = [
  {
    title: "B.Tech Computer Science and Engineering",
    institution: "Government Engineering College, Kottayam (RIT Kottayam)",
    period: "2020 – 2024",
    description:
      "CGPA: 8.13. Strong foundation in data structures, algorithms, distributed systems, and database management.",
  },
  {
    title: "Higher Secondary (Computer Science)",
    institution: "GHMSS Perinthalmanna",
    period: "2018 – 2020",
    description: "Focused on mathematics and computer science fundamentals.",
  },
];

export const skillCategories = [
  {
    name: "Distributed Systems",
    skills: [
      "gRPC",
      "Leader-Follower Replication",
      "Eventual Consistency",
      "Fault Tolerance",
      "Distributed Caching",
      "Docker",
    ],
  },
  {
    name: "Data Engineering",
    skills: [
      "PySpark",
      "Spark SQL",
      "Kafka",
      "Delta Lake",
      "Azure Data Factory",
      "Databricks",
      "ETL/ELT",
      "SCD Type 2",
    ],
  },
  {
    name: "Backend Development",
    skills: [
      "Go",
      "Python",
      "Java",
      "Node.js",
      "Express.js",
      "REST APIs",
      "SQL",
    ],
  },
  {
    name: "Cloud & Platforms",
    skills: [
      "Azure",
      "Cosmos DB",
      "Blob Storage",
      "BigQuery",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    name: "Frontend & Tools",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "Linux",
      "Bash",
    ],
  },
];

// Featured project IDs — these appear on the homepage
export const featuredProjectIds = ["Geomys", "SwiggyDataPipeline", "dposn"];

export const aboutStory = [
  "I specialize in building distributed systems and data-intensive applications. My work focuses on designing scalable backend architectures and reliable data pipelines that handle real-world production workloads.",
  "At UST, I work on high-throughput data systems involving Spark, Kafka, and Azure, where I optimize performance, improve reliability, and design event-driven workflows.",
  "I enjoy working at the intersection of backend engineering and data engineering — solving problems related to scalability, consistency, and system design.",
];

export const terminalResponses = {
  whoami: `Software Development Engineer focused on distributed systems and data pipelines.
Experienced in building scalable backend infrastructure, optimizing Spark workloads, and designing real-time streaming systems.
Currently working at UST. Always exploring system design, performance, and architecture.`,
  help: `Available commands:
  help      - Show this help message
  whoami    - Display user information
  clear     - Clear the terminal
  contact   - Show contact information
  projects  - View my projects`,
  contact: `Contact Information:
  Email:    imvisakhvijay@gmail.com
  LinkedIn: linkedin.com/in/visakhvj3
  GitHub:   github.com/vskvj3`,
  projects: `Redirecting to projects page...`,
};