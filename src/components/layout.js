import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./footer";
// import dynamic from "next/dynamic";
import Navbar from "./navbar";

// navbar is causing hydration error, so we need to use dynamic import
// const NoSSRNavbar = dynamic(() => import("./navbar"), { ssr: false });

export const siteTitle = "Visakh Vijay O";

export default function Layout({ children, home }) {
  const router = useRouter();

  const fullScreenPages = ["/about", "/404"];

  const shouldHideNavbar = fullScreenPages.includes(router.pathname);

  return (
    <div className="text-white min-h-screen relative">
      {/* Background Pattern */}
      <div className="fixed top-0 left-0 w-full min-h-screen h-full bg-cover bg-center animated-gradient"></div>
      <div className="fixed top-0 left-0 w-full min-h-screen h-full" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')", opacity: '0.03', zIndex: 1}}></div>
      
      <div className="relative z-10">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta name="og:title" content={siteTitle} />
          <title>{siteTitle}</title>
        </Head>
        <header>{!shouldHideNavbar && <Navbar />}</header>
        <main>{children}</main>
        {!shouldHideNavbar && <Footer />}
      </div>
    </div>
  );
}
