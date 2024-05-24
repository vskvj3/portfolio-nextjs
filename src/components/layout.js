import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import dynamic from "next/dynamic";

// navbar is causing hydration error, so we need to use dynamic import
const NoSSRNavbar = dynamic(() => import('./navbar'), { ssr: false })

const name = "Your Name";
export const siteTitle = "Visakh Vijay O";

export default function Layout({ children, home }) {
  return (
    <div className="">
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
        <NoSSRNavbar />
      </header>
      <main>{children}</main>
      <Footer home/>
    </div>
  );
}
