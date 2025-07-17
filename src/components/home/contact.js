import axios from "axios";
import { set } from "date-fns";
import { useState } from "react";

export default function Contact(params) {
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

    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12 font-mono tracking-wider">[ CONTACT ]</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-lg p-8 rounded-lg border border-cyan-400/20 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-cyan-400/30 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-cyan-400/30 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-cyan-400/30 rounded-md text-gray-200 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <p className={`text-sm ${status.error ? "text-red-400" : "text-green-400"}`}>
                  {status.message}
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className="px-6 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded-md hover:bg-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}
