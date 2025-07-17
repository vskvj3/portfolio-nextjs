import Link from "next/link";
import { FaGithub, FaLinkedin, FaTree } from "react-icons/fa";
import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {

  // Smooth scrolling functionality
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="">
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-cyan-300 tracking-widest font-mono">
            [Visakh]
          </h1>
          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('terminal')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/home</a>
            <a onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/skills</a>
            <a onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/projects</a>
            <a onClick={() => scrollToSection('blogs')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/blogs</a>
            <a onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">/contact</a>
          </nav>
        </div>
      </div>
    </header>
    </nav>
  );
}
