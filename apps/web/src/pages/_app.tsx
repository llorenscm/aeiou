import type { AppProps } from "next/app";
import Head from "next/head";

import "@aeiou/design-system/src/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>aeiou - Millora el traç de la lletra lligada</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Aplicació per millorar el traç de la lletra lligada i els números" />
        <meta name="theme-color" content="#aee8da" />
        <meta name="msapplication-TileColor" content="#aee8da" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#aee8da"></link>
        <link rel="preload" href="/fonts/Pompiere-Regular.ttf" as="font" type="font/ttf"></link>
        <link rel="preload" href="/fonts/Massallera-Regular.ttf" as="font" type="font/ttf"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
