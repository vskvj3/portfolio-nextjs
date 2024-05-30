import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./footer";
import dynamic from "next/dynamic";

// navbar is causing hydration error, so we need to use dynamic import
const NoSSRNavbar = dynamic(() => import("./navbar"), { ssr: false });

const name = "Your Name";
export const siteTitle = "Visakh Vijay O";

export default function Layout({ children, home }) {
  const router = useRouter();

  const fullScreenPages = ["/about", "/404"];

  const shouldHideNavbar = fullScreenPages.includes(router.pathname);

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
      <header>{!shouldHideNavbar && <NoSSRNavbar />}</header>
      <main>{children}</main>
      {!shouldHideNavbar && <Footer />}
    </div>
  );
}
