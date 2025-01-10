import axios from "axios";
import { useState } from "react";

export default function AboutContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ message: "", error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post("/api/contact", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setSending(false);
      setStatus({ message: "Message sent!", error: false });
    } catch (error) {
      setSending(false);
      setStatus({ message: "Error sending message!", error: true });
    }
  };

  return (
    <section className="h-screen flex flex-col sm:flex-row justify-center items-center bg-dracula-background">
      {/* Left Side: Call to Action */}
      <div className="w-full sm:w-1/2 p-8 text-center text-dracula-t-white">
        <h2 className="text-4xl font-semibold mb-4">Let&apos;s get in touch!</h2>
        <p className="text-lg mb-6">
          Feel free to reach out to me for any questions or collaboration
          opportunities. I&apos;d love to hear from you!
        </p>
        <div className="flex justify-center">
          {/* Social Icons can be added here */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-dracula-pink">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-dracula-pink">
            GitHub
          </a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full sm:w-1/3 p-8 bg-dracula-foreground/35 backdrop-blur-md rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-dracula-t-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full p-3 mt-1 border-none rounded-md bg-dracula-cards/30 text-dracula-t-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-dracula-t-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="w-full p-3 mt-1 border-none rounded-md bg-dracula-cards/30 text-dracula-t-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-dracula-t-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
              className="w-full p-3 mt-1 border-none rounded-md bg-dracula-cards/30 text-dracula-t-white h-32 resize-none"
            ></textarea>
          </div>

          <p className={status.error ? "text-red-500" : "text-green-500"}>{status.message}</p>

          <button
            type="submit"
            disabled={sending}
            className="bg-dracula-green/70 hover:bg-dracula-green/50 text-black text-md rounded-md p-3 mt-4 w-full flex justify-center items-center"
          >
            {sending ? (
              <span>Sending...</span>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
