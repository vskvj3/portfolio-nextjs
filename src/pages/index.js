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
  const allProjectsData = getSortedProjectsData(3);
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
      {/* Mouse Follower Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      {/* Background Pattern */}
      <div className="fixed top-0 left-0 w-full min-h-screen h-full bg-cover bg-center animated-gradient"></div>
      <div className="fixed top-0 left-0 w-full min-h-screen h-full" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')", opacity: '0.03', zIndex: 1}}></div>

      <div className="relative z-10">
        {/* <Header /> */}
        <main>
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
        </main>
      </div>
    </>
  );
}
