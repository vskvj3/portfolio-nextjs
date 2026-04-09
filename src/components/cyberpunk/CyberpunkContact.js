import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";

export default function CyberpunkContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ message: "", error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ message: "", error: false });
    try {
      await axios.post("/api/contact", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setStatus({ message: ">> TRANSMISSION SUCCESSFUL", error: false });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({ message: ">> TRANSMISSION FAILED — RETRY", error: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="cyber-divider mb-2">
          ┌──────────────────────────────────────────────┐
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 font-mono tracking-wider theme-heading">
          [ CONTACT ]
        </h2>

        <p className="text-center mb-8 font-mono text-xs" style={{ color: "var(--text-tertiary)", letterSpacing: "0.2em" }}>
          open transmission channel
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* Contact Info Panel */}
            <div className="cyber-frame p-6">
              <div className="h-full flex flex-col justify-center">
                {/* Signal strength bar */}
                <div className="cyber-signal-bar mb-6">
                  <span style={{ color: "var(--text-tertiary)", fontSize: "0.7rem" }}>SIGNAL STRENGTH: </span>
                  <span className="filled">████████</span>
                  <span className="empty">░░</span>
                  <span style={{ color: "var(--accent)", fontSize: "0.7rem", marginLeft: "0.5rem" }}>80%</span>
                </div>

                <h3 className="text-lg font-bold mb-3 font-mono" style={{ color: "var(--accent)" }}>

                </h3>
                <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
                  Establishing connection...
                </p>

                <div className="space-y-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-2 font-mono text-sm"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                  >
                    <FaGithub size={18} />
                    <span>github.com/vskvj3</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-2 font-mono text-sm"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                  >
                    <FaLinkedin size={18} />
                    <span>linkedin.com/in/visakhvj3</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form — Transmission Form */}
            <form onSubmit={handleSubmit} className="cyber-frame p-6 space-y-5">
              <div className="text-xs font-mono mb-2" style={{ color: "var(--text-tertiary)", letterSpacing: "0.15em" }}>
                COMPOSE TRANSMISSION
              </div>
              <div>
                <label htmlFor="cyber-name" className="block mb-1 text-xs font-mono tracking-wider" style={{ color: "var(--text-tertiary)" }}>
                  IDENTIFIER:
                </label>
                <input
                  type="text" id="cyber-name" value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="theme-input w-full p-2 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="cyber-email" className="block mb-1 text-xs font-mono tracking-wider" style={{ color: "var(--text-tertiary)" }}>
                  COMM_CHANNEL:
                </label>
                <input
                  type="email" id="cyber-email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="theme-input w-full p-2 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="cyber-message" className="block mb-1 text-xs font-mono tracking-wider" style={{ color: "var(--text-tertiary)" }}>
                  PAYLOAD:
                </label>
                <textarea
                  id="cyber-message" value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="theme-input w-full p-2 h-28 resize-none text-sm"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                {status.message && (
                  <p className={`text-xs font-mono ${status.error ? "text-red-400" : "text-green-400"}`}>
                    {status.message}
                  </p>
                )}
                <button
                  type="submit" disabled={sending}
                  className="theme-btn-primary px-5 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                >
                  {sending ? "TRANSMITTING..." : ">> TRANSMIT"}
                </button>
              </div>
            </form>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden space-y-6">
            <div className="cyber-frame p-5 text-center">
              <div className="cyber-signal-bar mb-4">
                <span style={{ color: "var(--text-tertiary)", fontSize: "0.65rem" }}>SIGNAL: </span>
                <span className="filled">████████</span>
                <span className="empty">░░</span>
                <span style={{ color: "var(--accent)", fontSize: "0.65rem", marginLeft: "0.3rem" }}>80%</span>
              </div>
              <h3 className="text-lg font-bold mb-3 font-mono" style={{ color: "var(--accent)" }}>
                Open channel
              </h3>
              <div className="flex justify-center space-x-6">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm font-mono"
                  style={{ color: "var(--text-secondary)" }}>
                  <FaGithub size={16} /><span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm font-mono"
                  style={{ color: "var(--text-secondary)" }}>
                  <FaLinkedin size={16} /><span>LinkedIn</span>
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="cyber-frame p-5 space-y-5">
              <div className="text-xs font-mono" style={{ color: "var(--text-tertiary)", letterSpacing: "0.15em" }}>
                COMPOSE TRANSMISSION
              </div>
              <div>
                <label htmlFor="cyber-name-m" className="block mb-1 text-xs font-mono tracking-wider" style={{ color: "var(--text-tertiary)" }}>IDENTIFIER:</label>
                <input type="text" id="cyber-name-m" value={name} onChange={(e) => setName(e.target.value)} className="theme-input w-full p-2 text-sm" required />
              </div>
              <div>
                <label htmlFor="cyber-email-m" className="block mb-1 text-xs font-mono tracking-wider" style={{ color: "var(--text-tertiary)" }}>COMM_CHANNEL:</label>
                <input type="email" id="cyber-email-m" value={email} onChange={(e) => setEmail(e.target.value)} className="theme-input w-full p-2 text-sm" required />
              </div>
              <div>
                <label htmlFor="cyber-msg-m" className="block mb-1 text-xs font-mono tracking-wider" style={{ color: "var(--text-tertiary)" }}>PAYLOAD:</label>
                <textarea id="cyber-msg-m" value={message} onChange={(e) => setMessage(e.target.value)} className="theme-input w-full p-2 h-28 resize-none text-sm" required />
              </div>
              <button type="submit" disabled={sending} className="theme-btn-primary w-full px-5 py-2 text-sm disabled:opacity-50">
                {sending ? "TRANSMITTING..." : ">> TRANSMIT"}
              </button>
            </form>
          </div>
        </div>

        <div className="cyber-divider mt-4">
          └──────────────────────────────────────────────┘
        </div>
      </div>
    </section>
  );
}
