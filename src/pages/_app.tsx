import "$/styles/globals.css";
import { GlobalProvider } from "$context";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </GlobalProvider>
  );
}

/* 
const arr = [1,3,4,]
  
  now how to remove an element from this array that is provider by the user
  for example user wants to remove 3 from this array
  so how to remove it
 */
