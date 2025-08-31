import Link from "next/link";
import { FaGithub, FaLinkedin, FaTree } from "react-icons/fa";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  // Handle navigation - go to home page and scroll to section
  const handleNavigation = (sectionId) => {
    if (router.pathname === '/') {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // If we're on another page, navigate to home page with hash
      router.push(`/#${sectionId}`);
    }
  };

  // Handle home page scroll on load if there's a hash
  useEffect(() => {
    if (router.pathname === '/' && router.asPath.includes('#')) {
      const hash = router.asPath.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }, [router]);

  return (
    <nav className="">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-widest font-mono hover:opacity-80 transition-opacity">
              <span className="neon-flicker" data-text="[Visakh]">
                [<span className="flicker-fast">V</span><span className="flicker-medium">i</span><span className="flicker-slow">s</span><span className="flicker-fast">a</span><span className="flicker-medium">k</span><span className="flicker-slow">h</span>]
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <a onClick={() => handleNavigation('terminal')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/home</a>
              <a onClick={() => handleNavigation('skills')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/skills</a>
              <a onClick={() => handleNavigation('projects')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/projects</a>
              <a onClick={() => handleNavigation('blogs')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/blogs</a>
              <a onClick={() => handleNavigation('contact')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/contact</a>
            </nav>
          </div>
        </div>
      </header>
    </nav>
  );
}
