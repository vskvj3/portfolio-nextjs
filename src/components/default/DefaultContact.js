import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import axios from "axios";

export default function DefaultContact() {
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
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 theme-heading">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <div className="md:col-span-2 space-y-6">
            <p style={{ color: "var(--text-secondary)" }}>
              I&apos;m always interested in new opportunities and interesting projects.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <FaEnvelope size={16} />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <FaGithub size={16} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <FaLinkedin size={16} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div>
              <label
                htmlFor="default-name"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Name
              </label>
              <input
                type="text"
                id="default-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="theme-input w-full px-3 py-2.5 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="default-email"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Email
              </label>
              <input
                type="email"
                id="default-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="theme-input w-full px-3 py-2.5 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="default-message"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Message
              </label>
              <textarea
                id="default-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="theme-input w-full px-3 py-2.5 text-sm h-28 resize-none"
                required
              />
            </div>

            {status.message && (
              <p className={`text-sm ${status.error ? "text-red-500" : "text-green-600"}`}>
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="theme-btn-primary px-6 py-2.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
