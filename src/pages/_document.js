import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex flex-col bg-gradient-to-br from-dracula-background1 to-dracula-background2 text-text-dracula-t-white-white min-h-[100vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
