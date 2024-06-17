import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Terminal(params) {
  const inputElement = useRef(null);
  const [previousOutput, setPreviousOutput] = useState([]);
  const [close, setClose] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [maximize, setMaximize] = useState(false);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const handleEnter = (e) => {
    const command = e.target.value;
    const previousOutputCopy = [...previousOutput];
    previousOutputCopy.push({
      command: command,
      output: "Command not found",
    });
    setPreviousOutput(previousOutputCopy);
    e.target.value = "";
  };

  return (
    <section className={close ? "hidden" : ""}>
      <div
        className={`${" px-2 pb-2 bg-dracula-foreground/35 backdrop-blur-md rounded-md text-left text-dracula-t-white"} ${
          maximize
            ? "fixed z-[999] top-0 bottom-0 right-0 left-0 m-3 pb-10"
            : "z-50 w-1/2 min-w-[370px] max-w-[700px] m-auto"
        }`}
      >
        <div className="block h-8 cursor-move">
          <strong className=" cursor-auto">
            <div
              className=" h-3.5 w-3.5 bg-dracula-red hover:bg-dracula-red/40 rounded-full inline-block mt-2 mr-1"
              onClick={() => setClose(true)}
            ></div>
            <div
              className=" h-3.5 w-3.5 bg-dracula-yellow hover:bg-dracula-yellow/40 rounded-full inline-block mt-2 mr-1"
              onClick={() => setMinimize(!minimize)}
            ></div>
            <div
              className=" h-3.5 w-3.5 bg-dracula-green hover:bg-dracula-green/40 rounded-full inline-block mt-2 mr-1"
              onClick={() => setMaximize(!maximize)}
            ></div>
          </strong>
        </div>
        <div
          className={
            minimize
              ? "hidden"
              : "font-bold p-2 bg-white/10 backdrop-blur-md h-full overflow-scroll"
          }
        >
          {/* first command */}
          <div className="">
            <span className=" text-green-600">vskvj3@server:</span>
            <span className="text-blue-600">~</span>$ whoami
          </div>
          {/* whoami output */}
          <div>
            Hey there!
            <br />
            <br />
            I&apos;m Visakh, a computer science student from RIT Kottayam. I
            have a lifelong passion for computers and technology. I mostly love
            building things and occasionally breaking them. 😉
            <br />
            <br />
            I&apos;m particularly interested in web development, computer
            networks, and cyber security.
          </div>
          {/* second command */}
          <div className="hidden lg:block">
            <span className=" text-green-600">vskvj3@server:</span>
            <span className="text-blue-600">~</span>$ ls
          </div>
          {/* ls output */}
          <div className="hidden lg:block">
            <ul className=" prose-li:text-blue-600 prose-li:underline">
              <li>
                <Link href={"/projects"}>projects/</Link>
              </li>
              <li>
                <Link href={"/posts"}>posts/</Link>
              </li>
              <li>resume.pdf</li>
              <li>contact.txt</li>
              <li>about.txt</li>
            </ul>
          </div>
          {/* previous output */}
          <div>
            {previousOutput.map((output, index) => (
              <div key={index}>
                <span className=" text-green-600">vskvj3@server:</span>
                <span className="text-blue-600">~</span>$ {output.command}
                <br />
                {output.output}
              </div>
            ))}
          </div>
          {/* input prompt  */}
          <div className="flex">
            <div className="mr-2.5">
              <span className=" text-green-600">vskvj3@server:</span>
              <span className="text-blue-600">~</span>$
            </div>
            <input
              autoFocus
              type="text"
              maxLength={15}
              className="border-none w-full outline-none bg-transparent text-dracula-t-white"
              ref={inputElement}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEnter(e);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
