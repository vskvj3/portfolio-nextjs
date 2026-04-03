import SEO from "@/components/shared/SEO";
import { useTheme } from "@/context/ThemeContext";
import { getSortedPostsData } from "@/lib/posts";
import { getSortedProjectsData } from "@/lib/projects";
import { personalInfo, featuredProjectIds } from "@/data/portfolioData";

// Default mode components
import DefaultHero from "@/components/default/DefaultHero";
import DefaultExperience from "@/components/default/DefaultExperience";
import DefaultProjects from "@/components/default/DefaultProjects";
import DefaultSkills from "@/components/default/DefaultSkills";
import DefaultBlogPreview from "@/components/default/DefaultBlogPreview";
import DefaultContact from "@/components/default/DefaultContact";

// Cyberpunk mode components
import CyberpunkHero from "@/components/cyberpunk/CyberpunkHero";
import CyberpunkSkills from "@/components/cyberpunk/CyberpunkSkills";
import CyberpunkProjects from "@/components/cyberpunk/CyberpunkProjects";
import CyberpunkBlogPreview from "@/components/cyberpunk/CyberpunkBlogPreview";
import CyberpunkContact from "@/components/cyberpunk/CyberpunkContact";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(3);
  const allProjectsData = getSortedProjectsData();

  // Filter featured projects for default mode
  const featuredProjects = allProjectsData.filter((p) =>
    featuredProjectIds.includes(p.id)
  );

  return {
    props: {
      allPostsData,
      allProjectsData: allProjectsData.slice(0, 4),
      featuredProjects,
    },
  };
}

export default function Home({ allPostsData, allProjectsData, featuredProjects }) {
  const { mode } = useTheme();

  const headContent = (
    <SEO
      title={`${personalInfo.name} - ${personalInfo.role} | ${personalInfo.specialization}`}
      description={personalInfo.bio}
      schemaData={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: personalInfo.name,
        jobTitle: personalInfo.role,
        description: personalInfo.bio,
        url: "https://visakhvijay.fyi/",
        image: "https://visakhvijay.fyi/images/profile.jpg",
        sameAs: [personalInfo.github, personalInfo.linkedin],
        worksFor: { "@type": "Organization", name: "UST" },
      }}
    >
      <meta name="keywords" content="Visakh Vijay O, Software Engineer, Data Engineering, PySpark, Azure, Portfolio" />
      <meta name="author" content={personalInfo.name} />
    </SEO>
  );

  if (mode === "cyberpunk") {
    return (
      <>
        {headContent}
        <CyberpunkHero />
        <CyberpunkBlogPreview posts={allPostsData} />
        <CyberpunkProjects projects={allProjectsData} />
        <CyberpunkContact />
      </>
    );
  }

  return (
    <>
      {headContent}
      <DefaultHero />
      <DefaultExperience />
      <DefaultProjects projects={featuredProjects} />
      <DefaultSkills />
      <DefaultBlogPreview posts={allPostsData} />
      <DefaultContact />
    </>
  );
}
