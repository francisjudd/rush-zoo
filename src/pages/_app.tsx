import Script from "next/script";
import "../styles/globals.scss";

import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src='https://unpkg.com/aos@2.3.4/dist/aos.js'
        strategy='beforeInteractive'></Script>
      <Script id='aos' strategy='beforeInteractive'>
        AOS.init();
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default App;
