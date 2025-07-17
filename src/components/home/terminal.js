import React, { useState, useEffect, useRef } from 'react';
import { ChevronsRight, Mail, Linkedin, Github } from 'lucide-react';

export default function Terminal(params) {
  const [typedText, setTypedText] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const terminalInputRef = useRef(null);

  const whoamiText = `
> Alex Doe
> 
> Software Engineer & Creative Technologist
> 
> ------------------------------------------
> 
> I build immersive digital experiences and robust backend systems.
> My passion lies at the intersection of art, technology, and human-computer interaction.
> Inspired by cyberpunk aesthetics and the early internet.
> 
> Fusing minimalist design with complex functionality to create software
> that is both beautiful and useful.
> 
> Ready to build the future.
  `;

  // Typing effect for the terminal
  useEffect(() => {
    let i = 0;
    if (whoamiText) {
      const typingInterval = setInterval(() => {
        if (i < whoamiText.length) {
          setTypedText((prev) => prev + whoamiText.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setShowPrompt(true);
          if (terminalInputRef.current) {
            terminalInputRef.current.focus();
          }
        }
      }, 20);
      return () => clearInterval(typingInterval);
    }
  }, [whoamiText]);

  return (
    <section id="terminal" className="min-h-screen flex items-center justify-center pt-20 md:pt-0">
      <div className="w-full max-w-4xl mx-auto bg-black/60 backdrop-blur-xl rounded-lg shadow-2xl shadow-cyan-500/10 border border-cyan-400/20 overflow-hidden">
        <div className="bg-gray-800/50 flex items-center p-3 border-b border-cyan-400/20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="flex-grow text-center text-sm text-gray-400 font-mono">/home/alexdoe — zsh</p>
        </div>
        <div className="p-6 font-mono text-sm text-gray-200 h-[500px] overflow-y-auto">
          <div className="flex items-center">
            <ChevronsRight className="w-4 h-4 text-cyan-400" />
            <p className="ml-2 text-green-400">whoami</p>
          </div>
          <pre className="whitespace-pre-wrap mt-2 text-gray-300">{typedText}</pre>
          {showPrompt && (
            <div className="flex items-center mt-4">
              <ChevronsRight className="w-4 h-4 text-cyan-400" />
              <input
                ref={terminalInputRef}
                type="text"
                className="ml-2 bg-transparent border-none text-green-400 focus:ring-0 w-full"
                placeholder=""
                onKeyDown={(e) => e.preventDefault()}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
