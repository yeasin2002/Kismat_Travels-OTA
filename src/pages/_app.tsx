import "$/styles/globals.css";
import { GlobalProvider } from "$context";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <main className="inter">
        <Component {...pageProps} />
      </main>
    </GlobalProvider>
  );
}
