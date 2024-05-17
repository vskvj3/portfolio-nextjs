import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col bg-[#282a36] min-h-[100vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
