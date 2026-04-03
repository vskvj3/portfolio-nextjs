import Head from "next/head";
import DefaultNavbar from "./DefaultNavbar";
import DefaultFooter from "./DefaultFooter";

export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <DefaultNavbar />
      <main className="flex-1">{children}</main>
      <DefaultFooter />
    </div>
  );
}
