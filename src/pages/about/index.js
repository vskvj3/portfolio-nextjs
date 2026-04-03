import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useTheme } from "@/context/ThemeContext";
import Layout from "@/components/layout";
import { personalInfo, aboutStory, experience, education } from "@/data/portfolioData";
import GlitchText from "@/components/GlitchText";

function About() {
  const { mode } = useTheme();
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
      setName(""); setEmail(""); setMessage("");
      setStatus({ message: "Message sent successfully!", error: false });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({ message: "Error sending message. Please try again.", error: true });
    } finally {
      setSending(false);
    }
  };

  const timeline = [
    ...experience.map((e) => ({ ...e, type: "work", company: e.company, year: e.period })),
    ...education.map((e) => ({
      title: e.title,
      company: e.institution,
      year: e.period,
      type: "education",
      description: e.description,
    })),
  ];

  return (
    <>
      <Head>
        <title>{`About ${personalInfo.name} - ${personalInfo.role}`}</title>
        <meta name="description" content={`Learn more about ${personalInfo.name}, a ${personalInfo.role} specializing in ${personalInfo.specialization}.`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`About ${personalInfo.name}`} />
        <meta property="og:image" content="https://visakhvijay.fyi/images/profile.jpeg" />
        <meta name="author" content={personalInfo.name} />
        <link rel="canonical" href="https://visakhvijay.fyi/about" />
      </Head>

      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center pt-20 pb-10 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative group">
                  {mode === "cyberpunk" && (
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse" />
                  )}
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - ${personalInfo.role}`}
                    width={350}
                    height={350}
                    className="rounded-full shadow-2xl w-48 h-48 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] object-cover transition-all duration-500 hover:scale-105"
                    style={{
                      border: mode === "cyberpunk" ? "4px solid var(--border)" : "4px solid var(--border)",
                    }}
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: mode === "cyberpunk" ? "var(--font-mono)" : "var(--font-sans)" }}>
                    {mode === "cyberpunk" ? (
                      <GlitchText color="cyan" glitchIntensity="subtle">Hello There!</GlitchText>
                    ) : (
                      <span style={{ color: "var(--text-primary)" }}>Hello There!</span>
                    )}
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-semibold mb-6" style={{ color: "var(--text-secondary)" }}>
                    I&apos;m <span style={{ color: "var(--accent)" }}>{personalInfo.name}</span>
                  </h2>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                    A software engineer specializing in{" "}
                    <span style={{ color: "var(--accent)" }}>data engineering</span> and{" "}
                    <span style={{ color: "var(--accent)" }}>big data technologies</span>.
                  </p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <FaBriefcase />, text: `Developer at ${experience[0]?.company || "UST"}` },
                    { icon: <FaMapMarkerAlt />, text: personalInfo.location },
                    { icon: <FaCalendarAlt />, text: `${education[0]?.title}, ${education[0]?.institution}` },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-center lg:justify-start" style={{ color: "var(--text-secondary)" }}>
                      <span className="mr-3" style={{ color: "var(--accent)" }}>{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-6">
                  {[
                    { href: personalInfo.github, icon: <FaGithub size={28} /> },
                    { href: personalInfo.linkedin, icon: <FaLinkedin size={28} /> },
                    { href: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={28} /> },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:scale-110"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider theme-heading"
              style={{ fontFamily: mode === "cyberpunk" ? "var(--font-mono)" : "inherit" }}>
              {mode === "cyberpunk" ? "[ MY STORY ]" : "My Story"}
            </h2>
            <div className="theme-card p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {aboutStory.map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider theme-heading"
              style={{ fontFamily: mode === "cyberpunk" ? "var(--font-mono)" : "inherit" }}>
              {mode === "cyberpunk" ? "[ JOURNEY ]" : "Journey"}
            </h2>
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5"
                style={{ background: `linear-gradient(to bottom, var(--accent), var(--accent-muted))` }} />
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10"
                    style={{ backgroundColor: "var(--accent)", border: "4px solid var(--bg-primary)" }} />
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="theme-card p-6 hover:scale-105 transition-transform duration-300">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.type === "work" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}>
                        {item.type === "work" ? "WORK" : "EDUCATION"}
                      </span>
                      <h3 className="text-xl font-bold mt-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                      <h4 className="font-semibold mb-2" style={{ color: "var(--accent)" }}>{item.company}</h4>
                      <p className="text-sm mb-3" style={{ color: "var(--text-tertiary)" }}>{item.year}</p>
                      <p style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Contact */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="theme-card p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                  Let&apos;s Build Something Amazing Together
                </h2>
                <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
                  I&apos;m always interested in new opportunities. Feel free to reach out!
                </p>
                <Link href="/projects" className="theme-btn-outline py-3 px-8 inline-block">
                  View My Works
                </Link>
              </div>
              <div className="theme-card p-6">
                <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="about-name" className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Name *</label>
                    <input type="text" id="about-name" value={name} onChange={(e) => setName(e.target.value)} className="theme-input w-full p-3" required />
                  </div>
                  <div>
                    <label htmlFor="about-email" className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Email *</label>
                    <input type="email" id="about-email" value={email} onChange={(e) => setEmail(e.target.value)} className="theme-input w-full p-3" required />
                  </div>
                  <div>
                    <label htmlFor="about-message" className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Message *</label>
                    <textarea id="about-message" value={message} onChange={(e) => setMessage(e.target.value)} className="theme-input w-full p-3 h-28 resize-none" required />
                  </div>
                  {status.message && (
                    <p className={`text-sm ${status.error ? "text-red-400" : "text-green-400"}`}>{status.message}</p>
                  )}
                  <button type="submit" disabled={sending} className="theme-btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
