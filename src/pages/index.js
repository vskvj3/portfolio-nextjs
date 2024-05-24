import Layout, { siteTitle } from "@/components/layout";
import Head from "next/head";
import Draggable, { dragHandlers } from "react-draggable";
import Contact from "@/components/home/contact";
import Terminal from "@/components/home/terminal";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* section 1: Terminal */}
      <Terminal />

      {/* section 3: Skills */}
      <Skills />

      {/* section 2 */}
      <section className="bg-black w-1/2 mt-5 min-w-[400px] max-w-[600px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
        <div className=" text-center">[Projects]</div>
      </section>

      {/* section 3 */}
      <section className="bg-black w-1/2 mt-5 min-w-[400px] max-w-[600px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
        <div className=" text-center">[Blogs]</div>
      </section>

      {/* section 4: Contact */}
      <Contact />
      
    </Layout>
  );
}
