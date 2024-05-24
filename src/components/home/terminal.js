import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Draggable, { dragHandlers } from "react-draggable";

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
        console.log(e.target.value);
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
        className={
          maximize
            ? "bg-black w-3/5 h-full m-auto px-2 pb-2 rounded-md text-left text-white"
            : "bg-black z-50 w-1/2 min-w-[350px] max-w-[700px] h-full m-auto px-2 pb-2 rounded-md text-left text-white"
        }
        draggable="true"
      >
        <div className=" h-8">
          <div
            className=" h-3.5 w-3.5 bg-red-500 hover:bg-red-900 rounded-full inline-block mt-2 mr-1"
            onClick={() => setClose(true)}
          ></div>
          <div
            className=" h-3.5 w-3.5 bg-yellow-500 hover:bg-yellow-900 rounded-full inline-block mt-2 mr-1"
            onClick={() => setMinimize(!minimize)}
          ></div>
          <div
            className=" h-3.5 w-3.5 bg-green-500 hover:bg-green-900 rounded-full inline-block mt-2 mr-1"
            onClick={() => setMaximize(!maximize)}
          ></div>
        </div>
        <div
          className={
            minimize ? "hidden" : "font-bold p-2 backdrop-blur-md bg-white/10"
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
          <div className="md:hidden">
            <span className=" text-green-600">vskvj3@server:</span>
            <span className="text-blue-600">~</span>$ ls
          </div>
          {/* ls output */}
          <div className="md:hidden">
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
            <div className="mr-3">
              <span className=" text-green-600">vskvj3@server:</span>
              <span className="text-blue-600">~</span>$
            </div>
            <input
              autoFocus
              type="text"
              maxLength={15}
              className="border-none w-full outline-none bg-transparent text-white"
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
