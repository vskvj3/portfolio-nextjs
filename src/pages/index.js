import Layout, { siteTitle } from "@/components/layout";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Draggable, {dragHandlers} from "react-draggable";

import { RiNextjsLine } from "react-icons/ri";

function Chips({ tags, icon }) {
  return (
    <div className="flex items-center justify-center bg-slate-600 rounded-md">
      {tags} {icon}
    </div>
  );
}

export default function Home() {
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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* section 1 */}
      <section className={close ? "hidden" : ""}>
        <Draggable handle="strong" {...dragHandlers}>
          <div
            className={
              maximize
                ? "bg-black w-3/5 h-full m-auto px-2 pb-2 rounded-md text-left text-white"
                : "bg-black w-1/2 resizable min-w-[400px] max-w-[600px] h-full m-auto px-2 pb-2 rounded-md text-left text-white"
            }
          >
            <strong className="cursor-move">
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
            </strong>
            <div
              className={
                minimize
                  ? "hidden"
                  : "font-bold p-2 backdrop-blur-md bg-white/10"
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
                have a lifelong passion for computers and technology. I mostly
                love building things and occasionally breaking them. 😉
                <br />
                <br />
                I&apos;m particularly interested in web development, computer
                networks, and cyber security.
              </div>
              {/* second command */}
              <div className="">
                <span className=" text-green-600">vskvj3@server:</span>
                <span className="text-blue-600">~</span>$ ls
              </div>
              {/* ls output */}
              <div>
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
        </Draggable>
      </section>
      {/* section 3: Skills */}
      <section className="bg-black w-1/2 mt-5 min-w-[400px] max-w-[600px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
        <div className=" text-center text-lg mb-5 font-bold">[My Tools]</div>
        <hr className="border-white mb-5" />
        <div>
          <div className=" text-center mb-3">[Web development]</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 mb-5 text-center gap-3">
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              React <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              Next.js <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              HTML <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              CSS <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              Tailwind CSS <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              Node.js <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              Express.js <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              MongoDB <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              MySQL <RiNextjsLine />{" "}
            </div>
          </div>
          <div className=" text-center mb-3">[Others]</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 text-center gap-3">
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              Flutter <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              Git <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              Linux <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              Java <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              Python <RiNextjsLine />{" "}
            </div>
            <div className="flex items-center justify-center bg-slate-600 rounded-md">
              C/C++ <RiNextjsLine />{" "}
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="bg-black w-1/2 mt-5 min-w-[400px] max-w-[600px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
        <div className=" text-center">[Projects]</div>
      </section>
      {/* section 3 */}
      <section className="bg-black w-1/2 mt-5 min-w-[400px] max-w-[600px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
        <div className=" text-center">[Blogs]</div>
      </section>
    </Layout>
  );
}
