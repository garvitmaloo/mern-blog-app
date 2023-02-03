import Head from "next/head";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600;700;800;900&family=Poppins:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css"
          integrity="sha512-SbiR/eusphKoMVVXysTKG/7VseWii+Y3FdHrt0EpKgpToZeemhqHeZeLWLhJutz/2ut2Vw1uQEj2MbRF+TVBUA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <title>The Blogger</title>

        <script
          defer
          src="https://kit.fontawesome.com/e8be5a49bb.js"
          crossorigin="anonymous"
        ></script>

        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js"
          integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
