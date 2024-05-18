import Image from "next/image";
import { Inter } from "next/font/google";
import Layout, { siteTitle } from "@/components/layout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="bg-black w-1/2 min-w-[400px] max-w-[600px] h-auto m-auto p-[20px] rounded-md text-left text-white">
        <div className="">
    <p>hello</p>
        </div>
      </section>

    </Layout>
  );
}
