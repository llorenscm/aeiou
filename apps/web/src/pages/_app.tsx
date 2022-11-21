import type { AppProps } from "next/app";
import Head from "next/head";

import "@aeiou/design-system/src/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>aeiou</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="App per millorar el traç" />
        <meta name="theme-color" content="#aee8da" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Pompiere-Regular.ttf" as="font" type="font/ttf"></link>
        <link rel="preload" href="/fonts/Massallera-Regular.ttf" as="font" type="font/ttf"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
