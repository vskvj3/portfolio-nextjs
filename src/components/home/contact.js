import axios from "axios";
import { useState } from "react";

export default function Contact(params) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/contact", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    alert("Message sent!");
  };

  return (
    <section className="bg-black text-white w-1/2 mt-5 min-w-[400px] max-w-[600px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left ">
      <div className=" text-center text-white">[Contact]</div>
      {/** create a form to collect data */}
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border-none outline-none rounded-md bg-transparent"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border-none outline-none rounded-md bg-transparent"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border-none outline-none rounded-md bg-transparent"
            required
          ></textarea>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-black text-sm rounded-md p-1"
          type="submit"
        >
          Send
        </button>
      </form>
    </ section>
  );
}
