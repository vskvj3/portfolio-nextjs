import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-mode="default" data-scroll-behavior="smooth">
      <Head />
      <body className="flex flex-col min-h-[100vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
