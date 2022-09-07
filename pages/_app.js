
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import AppLayout from "../src/layout/App.layout";
export default function App({ Component, pageProps, router }) {

  return (
    <>
      <Head>
        <title>Crowdcoin</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <AppLayout
              Component={Component}
              router={router}
              pageProps={pageProps}
            />
      </MantineProvider>
    </>
  );
}