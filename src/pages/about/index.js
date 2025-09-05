import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import { SiPython, SiReact, SiNextdotjs, SiAzuredevops, SiMongodb, SiFlutter } from "react-icons/si";
import { DiSpark } from "react-icons/di";
import { useState, useEffect } from 'react';
import axios from "axios";
import GlitchText from "@/components/GlitchText";
import Layout from "@/components/layout";

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
      setSending(false);
      setStatus({ message: "Message sent successfully!", error: false });
    } catch (error) {
      console.error("Contact form error:", error);
      setSending(false);
      setStatus({ message: "Error sending message. Please try again.", error: true });
    }
  };

  // Mouse highlighter effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    { name: "PySpark", icon: <DiSpark className="text-orange-500" />, level: 90 },
    { name: "Python", icon: <SiPython className="text-blue-500" />, level: 95 },
    { name: "React", icon: <SiReact className="text-blue-400" />, level: 85 },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 80 },
    { name: "Azure", icon: <SiAzuredevops className="text-blue-500" />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 75 },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" />, level: 70 },
  ];

  const timeline = [
    {
      year: "2024 - Present",
      title: "Software Engineer",
      company: "UST",
      type: "work",
      description: "Working on data engineering solutions and building scalable applications with big data technologies."
    },
    {
      year: "2020 - 2024",
      title: "B.Tech Computer Science",
      company: "RIT Kottayam",
      type: "education",
      description: "Graduated with expertise in software engineering, data structures, algorithms, and modern development frameworks."
    },
    {
      year: "2018 - 2020",
      title: "Higher Secondary",
      company: "GHMSS Perinthalmanna",
      type: "education",
      description: "Specialized in Computer Science with strong foundation in mathematics."
    }
  ];

  return (
    <>
      <Head>
        <title>About Visakh Vijay O - Software Engineer & Data Engineering Specialist</title>
        <meta 
          name="description" 
          content="Learn more about Visakh Vijay O, a passionate software engineer specializing in data engineering, big data technologies, and full-stack development. Currently working at UST with expertise in PySpark, Azure, and modern web technologies."
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://visakhvijay.fyi/about" />
        <meta property="og:title" content="About Visakh Vijay O - Software Engineer & Data Engineering Specialist" />
        <meta property="og:description" content="Learn more about Visakh Vijay O, a passionate software engineer specializing in data engineering, big data technologies, and full-stack development. Currently working at UST." />
        <meta property="og:image" content="https://visakhvijay.fyi/images/profile.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://visakhvijay.fyi/about" />
        <meta property="twitter:title" content="About Visakh Vijay O - Software Engineer & Data Engineering Specialist" />
        <meta property="twitter:description" content="Learn more about Visakh Vijay O, a passionate software engineer specializing in data engineering, big data technologies, and full-stack development." />
        <meta property="twitter:image" content="https://visakhvijay.fyi/images/profile.jpeg" />

        {/* Additional SEO */}
        <meta name="keywords" content="Visakh Vijay O, About, Software Engineer, Data Engineering, Biography, Professional Background, UST, Computer Science" />
        <meta name="author" content="Visakh Vijay O" />
        <link rel="canonical" href="https://visakhvijay.fyi/about" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Visakh Vijay O",
              "jobTitle": "Software Engineer",
              "description": "Passionate software engineer specializing in data engineering, big data technologies, and full-stack development. Currently working at UST with expertise in PySpark, Azure, and modern web technologies.",
              "url": "https://visakhvijay.fyi/about",
              "image": "https://visakhvijay.fyi/images/profile.jpeg",
              "sameAs": [
                "https://github.com/vskvj3",
                "https://linkedin.com/in/visakhvj3"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "UST"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "RIT Kottayam"
                }
              ],
              "knowsAbout": [
                "Data Engineering",
                "PySpark",
                "Python",
                "Azure Data Factory",
                "React",
                "Next.js",
                "Big Data",
                "Software Engineering"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen relative">
        {/* Mouse Follower Spotlight */}
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        ></div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative">
                    <Image
                      src="/images/profile.jpeg"
                      alt="Visakh Vijay O - Software Engineer"
                      width={350}
                      height={350}
                      className="rounded-full border-4 border-cyan-400/20 shadow-2xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 w-48 h-48 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] object-cover"
                      priority
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
                    <GlitchText color="cyan" glitchIntensity="subtle">
                      Hello There!
                    </GlitchText>
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300">
                    I'm <span className="text-cyan-300 font-mono">Visakh Vijay O</span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                    A software engineer specializing in <span className="text-cyan-300">data engineering</span> and 
                    <span className="text-cyan-300"> big data technologies</span>.
                  </p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center justify-center lg:justify-start text-gray-300">
                    <FaBriefcase className="text-cyan-400 mr-3" />
                    <span>Developer at UST</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-gray-300">
                    <FaMapMarkerAlt className="text-cyan-400 mr-3" />
                    <span>Kerala, India</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-gray-300">
                    <FaCalendarAlt className="text-cyan-400 mr-3" />
                    <span>B.Tech CSE, RIT Kottayam</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-6">
                  <a 
                    href="https://github.com/vskvj3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={28} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/visakhvj3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin size={28} />
                  </a>
                  <a 
                    href="mailto:imvisakhvijay@gmail.com"
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaEnvelope size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">
              [ MY STORY ]
            </h2>
            
            <div className="bg-black/50 backdrop-blur-lg p-8 md:p-12 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  My journey in software engineering began during my undergraduate studies and has evolved into a specialized focus on 
                  data engineering and big data technologies. I&apos;ve worked on projects ranging from mobile applications to enterprise-level 
                  data pipelines that process large-scale information systems.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  At UST, I work with technologies like PySpark, Azure Data Factory, and various distributed computing frameworks. 
                  My role involves designing and implementing data solutions that transform raw information into actionable insights 
                  for business stakeholders.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  I stay current with emerging technologies and contribute to projects that solve practical problems. 
                  My focus is on building efficient, scalable systems that deliver real value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">
              [ EXPERTISE ]
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-black/30 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-white font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-cyan-300 font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">
              [ JOURNEY ]
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-black/50 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105">
                      <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.type === 'work' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {item.type === 'work' ? 'WORK' : 'EDUCATION'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <h4 className="text-cyan-300 font-semibold mb-2">{item.company}</h4>
                      <p className="text-gray-400 text-sm mb-3">{item.year}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Contact Form */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg p-12 rounded-lg border border-cyan-400/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  I&apos;m always interested in new opportunities.
                  Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                  <Link 
                    href="/projects"
                    className="border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                  >
                    View My Works
                  </Link>
                </div>
              </div>

              {/* Contact Form */}
              <div className="">
                {/* Contact Form */}
                <div className="bg-black/30 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/20">
                  <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="about-name" className="block text-gray-400 mb-2 font-medium">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="about-name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 bg-gray-900/50 border border-cyan-400/30 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="about-email" className="block text-gray-400 mb-2 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="about-email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 bg-gray-900/50 border border-cyan-400/30 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="about-message" className="block text-gray-400 mb-2 font-medium">
                        Message *
                      </label>
                      <textarea
                        id="about-message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 bg-gray-900/50 border border-cyan-400/30 rounded-md text-gray-200 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                        placeholder="Say Hello..."
                        required
                      ></textarea>
                    </div>
                    
                    {status.message && (
                      <p className={`text-sm ${status.error ? "text-red-400" : "text-green-400"}`}>
                        {status.message}
                      </p>
                    )}
                    
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3 px-6 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-black font-semibold rounded-md transition-all duration-300 hover:transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
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
