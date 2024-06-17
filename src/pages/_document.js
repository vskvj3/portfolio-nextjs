import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col bg-gradient-to-br from-dracula-background1 to-dracula-background2 text-text-dracula-t-white-white min-h-[100vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
