import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./footer";
// import dynamic from "next/dynamic";
import Navbar from "./navbar";
import SideBar from "./sidebar";
// navbar is causing hydration error, so we need to use dynamic import
// const NoSSRNavbar = dynamic(() => import("./navbar"), { ssr: false });

export const siteTitle = "Visakh Vijay O";

export default function Layout({ children, home }) {
  const router = useRouter();

  const fullScreenPages = ["/about", "/404"];

  const shouldHideNavbar = fullScreenPages.includes(router.pathname);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>

      <div className="layout flex h-max">
        <SideBar />
        <div className="main-items">
          <header>{!shouldHideNavbar && <Navbar />}</header>
          <div>{children}</div>
          {!shouldHideNavbar && <Footer />}
        </div>
      </div>
    </>
  );
}
