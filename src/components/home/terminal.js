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

  const whoamiText = `Hi There!
I’m a software engineer with experience in big data and data engineering technologies. I’ve been fascinated by technology since I was a kid, and that curiosity still drives me to create, learn, and experiment. 
Currently, I work as a developer at UST, but more than titles, I enjoy the craft of building things that matter. 
Think of this portfolio as my corner of the Wired, come say hi.
`

  // Handle command execution
  const handleCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    let response = '';

    switch (trimmedCommand) {
      case 'help':
        response = `Available commands:
  help      - Show this help message
  whoami    - Display user information
  clear     - Clear the terminal
  contact   - Show contact information
  projects  - View my projects
  about     - Learn more about me`;
        break;
      case 'whoami':
        response = whoamiText;
        break;
      case 'clear':
        setCommandHistory([]);
        setCurrentCommand('');
        return;
      case 'contact':
        response = `Contact Information:
  Email: alex.doe@example.com
  LinkedIn: linkedin.com/in/alexdoe
  GitHub: github.com/alexdoe`;
        break;
      case 'projects':
        response = `Redirecting to projects page...`;
        // TODO: Add navigation to projects page
        break;
      case 'about':
        response = `Redirecting to about page...`;
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
    let currentIndex = 0;
    let typingInterval;
    setTypedText(''); // Reset typed text
    
    if (whoamiText) {
      // Small delay to ensure component is fully mounted
      const startDelay = setTimeout(() => {
        typingInterval = setInterval(() => {
          if (currentIndex < whoamiText.length) {
            setTypedText(whoamiText.substring(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setShowPrompt(true);
            if (terminalInputRef.current && window.innerWidth >= 768) {
              terminalInputRef.current.focus();
            }
          }
        }, 30);
      }, 500);
      
      return () => {
        clearTimeout(startDelay);
        if (typingInterval) {
          clearInterval(typingInterval);
        }
      };
    }
  }, [whoamiText]);

  return (
    <section id="terminal" className="min-h-screen flex items-center justify-center py-4 sm:py-6 md:py-12 lg:py-20 pt-8 sm:pt-12 md:pt-22 lg:pt-20 px-3 sm:px-4 md:px-8">
      <div
        ref={terminalRef}
        onClick={handleTerminalClick}
        className="w-full max-w-6xl mx-auto bg-black/60 backdrop-blur-xl rounded-lg shadow-2xl shadow-cyan-500/10 border border-cyan-400/20 overflow-hidden cursor-text"
      >
        <div className="bg-gray-800/50 flex items-center p-2 sm:p-4 border-b border-cyan-400/20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="flex-grow text-center text-sm sm:text-base text-gray-500 font-mono">/home/visakh — zsh</p>
        </div>
        <div
          ref={terminalContentRef}
          className="p-4 sm:p-6 md:p-8 font-mono text-sm sm:text-base md:text-lg text-gray-200 h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] overflow-y-auto overflow-x-hidden terminal-content"
        >
          <div className="flex items-center">
            <ChevronsRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
            <p className="ml-2 text-green-400 text-sm sm:text-base md:text-lg">whoami</p>
          </div>
          <div className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line terminal-text">{typedText}</div>

          {/* Command history */}
          {commandHistory.map((item, index) => (
            <div key={index} className="mt-4">
              <div className="flex items-center">
                <ChevronsRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="ml-2 text-green-400 text-sm sm:text-base md:text-lg">{item.command}</span>
              </div>
              <div className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line terminal-text">{item.response}</div>
            </div>
          ))}

          {/* Current input prompt */}
          {showPrompt && (
            <div className="flex items-center mt-4">
              <ChevronsRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
              <input
                ref={terminalInputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyPress}
                className="ml-2 bg-transparent outline-none border-none text-green-400 placeholder-green-400/50 w-full font-mono text-sm sm:text-base md:text-lg min-w-0"
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
