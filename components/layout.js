import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

const name = "Your Name";
export const siteTitle = "Visakh Vijay O";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer home/>
    </div>
  );
}
