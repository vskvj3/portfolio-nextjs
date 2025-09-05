import Layout from "@/components/layout";
import "@/styles/globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </main>
  );
}
