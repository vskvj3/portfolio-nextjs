import React, { useState, useEffect, useRef } from "react";
import { ChevronsRight } from "lucide-react";
import { useRouter } from "next/router";
import { terminalResponses } from "@/data/portfolioData";

export default function CyberpunkHero() {
  const [typedText, setTypedText] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const terminalInputRef = useRef(null);
  const terminalContentRef = useRef(null);
  const router = useRouter();

  const whoamiText = terminalResponses.whoami;

  const handleCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    let response = "";

    switch (trimmedCommand) {
      case "help":
        response = terminalResponses.help;
        break;
      case "whoami":
        response = whoamiText;
        break;
      case "clear":
        setCommandHistory([]);
        setCurrentCommand("");
        return;
      case "contact":
        response = terminalResponses.contact;
        break;
      case "projects":
        response = terminalResponses.projects;
        setTimeout(() => {
          const el = document.getElementById("projects");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 500);
        break;
      default:
        response = `bash: ${trimmedCommand}: command not found`;
    }

    setCommandHistory((prev) => [...prev, { command, response }]);
    setCurrentCommand("");
  };

  const scrollToBottom = () => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  };

  useEffect(() => { scrollToBottom(); }, [commandHistory]);
  useEffect(() => { if (showPrompt) scrollToBottom(); }, [showPrompt]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleCommand(currentCommand);
  };

  const handleTerminalClick = () => {
    if (terminalInputRef.current) terminalInputRef.current.focus();
  };

  useEffect(() => {
    if (showPrompt && window.innerWidth >= 768 && terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  }, [showPrompt]);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;
    setTypedText("");

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
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [whoamiText]);

  return (
    <section
      id="terminal"
      className="h-[calc(100vh-64px)] flex flex-col items-center justify-center pt-8 px-3 sm:px-4 md:px-8 pb-4"
    >
      {/* ASCII art welcome */}
      <pre
        className="text-center mb-4 hidden sm:block"
        style={{
          color: "var(--text-tertiary)",
          fontSize: "0.55rem",
          lineHeight: "1.2",
          letterSpacing: "0.05em",
          fontFamily: "var(--font-mono, Courier, monospace)",
        }}
      >
{`
┌────────────────────────────────────────────────┐
│  ░▒▓  PERSONAL TERMINAL — LAYER 07  ▓▒░        │
│  connecting to the wired...                    │
└────────────────────────────────────────────────┘
`}
      </pre>

      {/* Terminal — wrapped in retro double-border frame */}
      <div
        onClick={handleTerminalClick}
        className="w-full max-w-4xl flex-grow mx-auto cursor-text cyber-frame flex flex-col"
        style={{
          boxShadow: "0 0 20px rgba(30, 227, 126, 0.05)",
          maxHeight: "75vh",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center p-2 sm:p-3"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderBottom: "1px dashed var(--border)",
          }}
        >
          <div className="flex space-x-2">
            <div className="w-3 h-3 border border-[#152e20]" style={{ background: "#ca3a3a" }} />
            <div className="w-3 h-3 border border-[#152e20]" style={{ background: "#eab308" }} />
            <div className="w-3 h-3 border border-[#152e20]" style={{ background: "#1ee37e" }} />
          </div>
          <p className="flex-grow text-center text-xs font-mono" style={{ color: "var(--text-tertiary)" }}>
            /home/visakh — zsh — layer:07
          </p>
        </div>

        {/* Terminal content */}
        <div
          ref={terminalContentRef}
          className="p-4 sm:p-6 md:p-8 font-mono text-sm sm:text-base md:text-lg flex-grow overflow-y-auto overflow-x-hidden"
          style={{ color: "var(--text-primary)" }}
        >
          <div className="flex items-center">
            <ChevronsRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: "var(--accent)" }} />
            <p className="ml-2 text-sm sm:text-base md:text-lg" style={{ color: "var(--accent)" }}>whoami</p>
          </div>
          <div className="mt-2 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line" style={{ color: "var(--text-secondary)" }}>
            {typedText}
          </div>

          {commandHistory.map((item, index) => (
            <div key={index} className="mt-4">
              <div className="flex items-center">
                <ChevronsRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                <span className="ml-2 text-sm sm:text-base md:text-lg" style={{ color: "var(--accent)" }}>{item.command}</span>
              </div>
              <div className="mt-2 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line" style={{ color: "var(--text-secondary)" }}>
                {item.response}
              </div>
            </div>
          ))}

          {showPrompt && (
            <div className="flex items-center mt-4">
              <ChevronsRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: "var(--accent)" }} />
              <input
                ref={terminalInputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyPress}
                className="ml-2 bg-transparent outline-none border-none w-full font-mono text-sm sm:text-base md:text-lg min-w-0"
                placeholder="Type 'help' for available commands..."
                style={{
                  color: "var(--accent)",
                  caretColor: "var(--accent)",
                  fontSize: "inherit",
                  fontFamily: "inherit",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Status badge below terminal */}
      <div className="mt-4 flex items-center justify-center">
        <div className="cyber-status-badge">
          <div className="status-dot" />
          <span style={{ color: "var(--accent)" }}>SYSTEM STATUS: ONLINE</span>
        </div>
      </div>
    </section>
  );
}
