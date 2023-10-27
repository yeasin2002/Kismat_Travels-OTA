import { GlobalProvider } from "$context";
import { Head, Html, Main, NextScript } from "next/document";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={inter.className}>
        <GlobalProvider>
          <Main />
          <NextScript />
        </GlobalProvider>
      </body>
    </Html>
  );
}
