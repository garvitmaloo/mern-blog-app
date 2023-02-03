import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Blogger</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
