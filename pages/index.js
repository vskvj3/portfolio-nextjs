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
      <section>
        <Image
          priority
          src="/images/profile.jpg"
          className="borderCircle"
          height={144}
          width={144}
          alt="Your Name"
        />
        <p>My name is Your Name. I am a software engineer.</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

    </Layout>
  );
}
