import Head from "next/head";
import AdminContextProvider from "@project/context/admin-auth";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Blogger</title>
      </Head>

      <AdminContextProvider>
        <Component {...pageProps} />
      </AdminContextProvider>
    </>
  );
}
