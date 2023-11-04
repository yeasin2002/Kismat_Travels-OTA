import "$/styles/globals.css";
import { GlobalProvider } from "$context";
import type { AppProps } from "next/app";
import Loader from "$components/Loading/Loading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Loader>
        <main className="inter">
          <Component {...pageProps} />
        </main>
      </Loader>
    </GlobalProvider>
  );
}
