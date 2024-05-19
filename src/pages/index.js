import Image from "next/image";
import { Inter } from "next/font/google";
import Layout, { siteTitle } from "@/components/layout";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const inputElement = useRef(null);
  const [previousOutput, setPreviousOutput] = useState([]);

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
      <section className="bg-black w-1/2 min-w-[400px] max-w-[600px] h-full m-auto p-[20px] rounded-md text-left text-white">
        <div className="font-bold p-5 backdrop-blur-md bg-white/10">
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
            I&apos;m a curious fellow with lots of passion. I&apos;m
            particularly interested in web development, cyber security, and
            reverse engineering.
          </div>
          {/* second command */}
          <div className="">
            <span className=" text-green-600">vskvj3@server:</span>
            <span className="text-blue-600">~</span>$ ls
          </div>
          {/* ls output */}
          <div>
            <ul>
              <li><Link href={'/projects'}>projects/</Link></li>
              <li><Link href={'/posts'}>posts/</Link></li>
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
