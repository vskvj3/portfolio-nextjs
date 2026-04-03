import "@/styles/globals.css";
import "@/styles/default-theme.css";
import "@/styles/cyberpunk-theme.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import Layout from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  // Support per-page layouts if defined
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <ThemeProvider>
      <div className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {getLayout(<Component {...pageProps} />)}
        <Analytics />
      </div>
    </ThemeProvider>
  );
}
