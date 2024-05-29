import axios from "axios";
import { set } from "date-fns";
import { useState } from "react";

export default function Contact(params) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await axios.post("/api/contact", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setSending(false);
    setStatus("Message sent!");
  };

  return (
    <section className="bg-black text-white w-1/2 mt-5 min-w-[370px] max-w-[700px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left ">
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
            className="w-full p-2 mt-1 border-none outline-none rounded-md bg-[#121420]"
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
            className="w-full p-2 mt-1 border-none outline-none rounded-md bg-[#121420]"
            required
          />
        </div>
        <div className="">
          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 mt-1 border-none outline-none rounded-md bg-[#121420] h-24 resize-none"
            required
          ></textarea>
        </div>
        <p className=" text-green-500 pb-2">{status}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-black text-md rounded-md p-1 flex self-center items-center justify-center w-full"
          type="submit"
          disabled={sending}
        >
          {sending ? (
            <>
              <p>Sending...</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="loading-spinner"
              >
                <defs>
                  <filter id="spinner-gF01">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="1"
                      result="y"
                    />
                    <feColorMatrix
                      in="y"
                      mode="matrix"
                      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
                      result="z"
                    />
                    <feBlend in="SourceGraphic" in2="z" />
                  </filter>
                </defs>
                <g className="spinner_LvYV" filter="url(#spinner-gF01)">
                  <circle className="spinner_8XMC" cx="5" cy="12" r="4" />
                  <circle className="spinner_WWWR" cx="19" cy="12" r="4" />
                </g>
              </svg>
            </>
          ) : (
            <p>Send</p>
          )}
        </button>
      </form>
    </section>
  );
}
