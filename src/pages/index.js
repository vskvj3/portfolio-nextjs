import { siteTitle } from "@/components/layout";
import Head from "next/head";
import Contact from "@/components/home/contact";
import Terminal from "@/components/home/terminal";
import Skills from "@/components/home/skills";
import Posts from "./posts";
import { getSortedPostsData } from "@/lib/posts";
import { getSortedProjectsData } from "@/lib/projects";
import Projects from "./projects";
import React, { useState, useEffect, useRef } from 'react';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(3);
  const allProjectsData = getSortedProjectsData(4);
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}

export default function Home({ allPostsData, allProjectsData }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse highlighter effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Visakh Vijay O - Software Engineer | Data Engineering & Full-Stack Development</title>
        <meta 
          name="description" 
          content="Hi There! I'm Visakh, a software engineer with experience in backend development and data engineering technologies. I've been fascinated by technology since I was a kid, and that curiosity still drives me to create, learn, and experiment. Currently, I work as a developer at UST, but more than titles, I enjoy the craft of building things that matter."
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visakhvijay.fyi/" />
        <meta property="og:title" content="Visakh Vijay O - Software Engineer | Backend Development & Data Engineering" />
        <meta property="og:description" content="Hi There! I'm Visakh Vijay O, a software engineer with experience in big data and data engineering technologies. I've been fascinated by technology since I was a kid, and that curiosity still drives me to create, learn, and experiment." />
        <meta property="og:image" content="https://visakhvijay.fyi/images/profile.jpg" />
        <meta property="og:site_name" content="Visakh Vijay O Portfolio" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://visakhvijay.fyi/" />
        <meta property="twitter:title" content="Visakh Vijay O - Software Engineer | Backend Development & Data Engineering" />
        <meta property="twitter:description" content="Hi There! I'm Visakh Vijay O, a software engineer with experience in backend developent and data engineering technologies. I've been fascinated by technology since I was a kid, and that curiosity still drives me to create, learn, and experiment." />
        <meta property="twitter:image" content="https://visakhvijay.fyi/images/profile.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="Visakh Vijay O, Software Engineer, Data Engineering, PySpark, Azure, Full-Stack Developer, Big Data, Python, React, Next.js, Portfolio" />
        <meta name="author" content="Visakh Vijay O" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://visakhvijay.fyi/" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Visakh Vijay O",
              "jobTitle": "Software Engineer",
              "description": "Software engineer with experience in backend development and data engineering technologies. Currently working as a developer at UST, passionate about creating, learning, and experimenting with technology.",
              "url": "https://visakhvijay.fyi/",
              "image": "https://visakhvijay.fyi/images/profile.jpg",
              "sameAs": [
                "https://github.com/vskvj3",
                "https://linkedin.com/in/visakhvj3"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "UST"
              },
              "knowsAbout": [
                "Data Engineering",
                "Big Data",
                "PySpark",
                "Azure Data Factory",
                "Python",
                "React",
                "Next.js",
                "Full-Stack Development",
                "Software Engineering"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "RIT Kottayam | GEC Kottayam"
              }
            })
          }}
        />
      </Head>

      {/* Mouse Follower Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      {/* section 1: Terminal */}
      <Terminal />

      {/* section 3: Skills */}
      <Skills />

      {/* section 2 */}
      <Projects allProjectsData={allProjectsData} /> 

      {/* section 3 */}
      {/* list all posts as in /posts/index.js but dont import posts*/}
      <Posts allPostsData={allPostsData} />

      {/* section 4: Contact */}
      <Contact />
    </>
  );
}
