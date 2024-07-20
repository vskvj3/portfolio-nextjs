import { Html, Head, Main, NextScript } from "next/document";
import SideBar from "@/components/sidebar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body className="flex bg-gradient-to-br from-dracula-background1 to-dracula-background2 text-dracula-t-white min-h-[100vh]">
        <SideBar />
          <Main />
        <NextScript />
      </body>
    </Html>
  );
}
