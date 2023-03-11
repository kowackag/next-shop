import "../styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <p className="text-center font-bold border-8">Hejka</p>
      <Component {...pageProps} />;
    </>
  );
}


