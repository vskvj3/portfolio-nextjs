import React, { useState, useEffect, useRef } from 'react';
import { ChevronsRight, Mail, Linkedin, Github } from 'lucide-react';

export default function Terminal(params) {
  const [typedText, setTypedText] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const terminalInputRef = useRef(null);
  const terminalRef = useRef(null);
  const terminalContentRef = useRef(null);

  const whoamiText = `Hey there!
I'm Visakh, a computer science graduate from RIT Kottayam. I have a lifelong passion for computers and technology.
I mostly love building things and occasionally breaking them. 😉
I'm currently working as a software engineer at UST.
`

  // Handle command execution
  const handleCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    let response = '';

    switch (trimmedCommand) {
      case 'help':
        response = `
Available commands:
  help      - Show this help message
  whoami    - Display user information
  clear     - Clear the terminal
  contact   - Show contact information
  projects  - View my projects
  about     - Learn more about me
        `;
        break;
      case 'whoami':
        response = whoamiText;
        break;
      case 'clear':
        setCommandHistory([]);
        setCurrentCommand('');
        return;
      case 'contact':
        response = `
Contact Information:
  Email: alex.doe@example.com
  LinkedIn: linkedin.com/in/alexdoe
  GitHub: github.com/alexdoe
        `;
        break;
      case 'projects':
        response = `
Redirecting to projects page...
        `;
        // TODO: Add navigation to projects page
        break;
      case 'about':
        response = `
Redirecting to about page...
        `;
        // TODO: Add navigation to about page
        break;
      default:
        response = `bash: ${trimmedCommand}: command not found`;
    }

    setCommandHistory(prev => [...prev, { command, response }]);
    setCurrentCommand('');
  };

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  };

  // Scroll when command history changes
  useEffect(() => {
    scrollToBottom();
  }, [commandHistory]);

  // Scroll when typing animation completes
  useEffect(() => {
    if (showPrompt) {
      scrollToBottom();
    }
  }, [showPrompt]);

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    }
  };

  // Focus terminal on click
  const handleTerminalClick = () => {
    if (terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  };

  // Auto-focus on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && terminalInputRef.current && showPrompt) {
        terminalInputRef.current.focus();
      }
    };

    if (showPrompt) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showPrompt]);

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
          if (terminalInputRef.current && window.innerWidth >= 768) {
            terminalInputRef.current.focus();
          }
        }
      }, 20);
      return () => clearInterval(typingInterval);
    }
  }, [whoamiText]);

  return (
    <section id="terminal" className="min-h-screen flex items-center justify-center pt-24 md:pt-32 lg:pt-20 px-4 md:px-8">
      <div
        ref={terminalRef}
        onClick={handleTerminalClick}
        className="w-full max-w-7xl mx-auto bg-black/60 backdrop-blur-xl rounded-lg shadow-2xl shadow-cyan-500/10 border border-cyan-400/20 overflow-hidden cursor-text"
      >
        <div className="bg-gray-800/50 flex items-center p-4 border-b border-cyan-400/20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="flex-grow text-center text-base text-gray-500 font-mono">/home/visakh — zsh</p>
        </div>
        <div
          ref={terminalContentRef}
          className="p-8 font-mono text-base md:text-lg text-gray-200 h-[600px] md:h-[700px] overflow-y-auto"
        >
          <div className="flex items-center">
            <ChevronsRight className="w-5 h-5 text-cyan-400" />
            <p className="ml-2 text-green-400 text-base md:text-lg">whoami</p>
          </div>
          <pre className="whitespace-pre-wrap mt-2 text-gray-300 text-base md:text-lg leading-relaxed">{typedText}</pre>

          {/* Command history */}
          {commandHistory.map((item, index) => (
            <div key={index} className="mt-4">
              <div className="flex items-center">
                <ChevronsRight className="w-5 h-5 text-cyan-400" />
                <span className="ml-2 text-green-400 text-base md:text-lg">{item.command}</span>
              </div>
              <pre className="whitespace-pre-wrap mt-2 text-gray-300 text-base md:text-lg leading-relaxed">{item.response}</pre>
            </div>
          ))}

          {/* Current input prompt */}
          {showPrompt && (
            <div className="flex items-center mt-4">
              <ChevronsRight className="w-5 h-5 text-cyan-400" />
              <input
                ref={terminalInputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyPress}
                className="ml-2 bg-transparent outline-none border-none text-green-400 placeholder-green-400/50 w-full font-mono text-base md:text-lg"
                placeholder="Type 'help' for available commands..."
                style={{
                  caretColor: '#4ade80',
                  fontSize: 'inherit',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
