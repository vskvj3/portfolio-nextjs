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
      setStatus({ message: "Message sent successfully!", error: false });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({ message: "Error sending message. Please try again.", error: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 font-mono tracking-wider theme-heading">
          [ CONTACT ]
        </h2>

        <div className="max-w-none mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="theme-card p-8">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 font-mono" style={{ color: "var(--accent)" }}>
                  Feel free to reach out!
                </h3>
                <p className="mb-8 text-lg" style={{ color: "var(--text-secondary)" }}>
                  Let&apos;s connect and build something amazing together!
                </p>
                <div className="space-y-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                  >
                    <FaGithub size={24} />
                    <span className="text-lg">GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                  >
                    <FaLinkedin size={24} />
                    <span className="text-lg">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="theme-card p-8 space-y-6">
              <div>
                <label htmlFor="cyber-name" className="block mb-2" style={{ color: "var(--text-secondary)" }}>Name</label>
                <input
                  type="text" id="cyber-name" value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="theme-input w-full p-3"
                  required
                />
              </div>
              <div>
                <label htmlFor="cyber-email" className="block mb-2" style={{ color: "var(--text-secondary)" }}>Email</label>
                <input
                  type="email" id="cyber-email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="theme-input w-full p-3"
                  required
                />
              </div>
              <div>
                <label htmlFor="cyber-message" className="block mb-2" style={{ color: "var(--text-secondary)" }}>Message</label>
                <textarea
                  id="cyber-message" value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="theme-input w-full p-3 h-32 resize-none"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                {status.message && (
                  <p className={`text-sm ${status.error ? "text-red-400" : "text-green-400"}`}>
                    {status.message}
                  </p>
                )}
                <button
                  type="submit" disabled={sending}
                  className="theme-btn-primary px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden space-y-6">
            <div className="theme-card p-6 text-center">
              <h3 className="text-xl font-bold mb-4 font-mono" style={{ color: "var(--accent)" }}>
                Feel free to contact
              </h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Let&apos;s connect and build something amazing together!
              </p>
              <div className="flex justify-center space-x-6">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center space-x-2 transition-colors"
                  style={{ color: "var(--text-secondary)" }}>
                  <FaGithub size={20} /><span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center space-x-2 transition-colors"
                  style={{ color: "var(--text-secondary)" }}>
                  <FaLinkedin size={20} /><span>LinkedIn</span>
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="theme-card p-6 space-y-6">
              <div>
                <label htmlFor="cyber-name-m" className="block mb-2" style={{ color: "var(--text-secondary)" }}>Name</label>
                <input type="text" id="cyber-name-m" value={name} onChange={(e) => setName(e.target.value)} className="theme-input w-full p-3" required />
              </div>
              <div>
                <label htmlFor="cyber-email-m" className="block mb-2" style={{ color: "var(--text-secondary)" }}>Email</label>
                <input type="email" id="cyber-email-m" value={email} onChange={(e) => setEmail(e.target.value)} className="theme-input w-full p-3" required />
              </div>
              <div>
                <label htmlFor="cyber-msg-m" className="block mb-2" style={{ color: "var(--text-secondary)" }}>Message</label>
                <textarea id="cyber-msg-m" value={message} onChange={(e) => setMessage(e.target.value)} className="theme-input w-full p-3 h-32 resize-none" required />
              </div>
              <button type="submit" disabled={sending} className="theme-btn-primary w-full px-6 py-2 disabled:opacity-50">
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
