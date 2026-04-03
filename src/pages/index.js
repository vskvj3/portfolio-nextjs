import Head from "next/head";
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
    <Head>
      <title>{`${personalInfo.name} - ${personalInfo.role} | ${personalInfo.specialization}`}</title>
      <meta
        name="description"
        content={`${personalInfo.bio}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://visakhvijay.fyi/" />
      <meta
        property="og:title"
        content={`${personalInfo.name} - ${personalInfo.role}`}
      />
      <meta property="og:description" content={personalInfo.bio} />
      <meta property="og:image" content="https://visakhvijay.fyi/images/profile.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content={`${personalInfo.name} - ${personalInfo.role}`}
      />
      <meta property="twitter:description" content={personalInfo.bio} />
      <meta name="keywords" content="Visakh Vijay O, Software Engineer, Data Engineering, PySpark, Azure, Portfolio" />
      <meta name="author" content={personalInfo.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://visakhvijay.fyi/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: personalInfo.name,
            jobTitle: personalInfo.role,
            description: personalInfo.bio,
            url: "https://visakhvijay.fyi/",
            image: "https://visakhvijay.fyi/images/profile.jpg",
            sameAs: [personalInfo.github, personalInfo.linkedin],
            worksFor: { "@type": "Organization", name: "UST" },
          }),
        }}
      />
    </Head>
  );

  if (mode === "cyberpunk") {
    return (
      <>
        {headContent}
        <CyberpunkHero />
        <CyberpunkSkills />
        <CyberpunkProjects projects={allProjectsData} />
        <CyberpunkBlogPreview posts={allPostsData} />
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
