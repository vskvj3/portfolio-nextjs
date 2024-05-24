import Layout, { siteTitle } from "@/components/layout";
import Head from "next/head";
import Contact from "@/components/home/contact";
import Terminal from "@/components/home/terminal";
import Skills from "@/components/home/skills";
import Link from "next/link";

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
      <section className="bg-black w-1/2 mt-5 min-w-[350px] max-w-[700px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
        <div className=" text-center">
          <Link href={"/projects"}>[Projects]</Link>
        </div>
      </section>

      {/* section 3 */}
      <section className="bg-black w-1/2 mt-5 min-w-[350px] max-w-[700px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
        <div className=" text-center">
          <Link href={"/posts"}>[Posts]</Link>
        </div>
      </section>

      {/* section 4: Contact */}
      <Contact />
    </Layout>
  );
}
