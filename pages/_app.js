import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import AppLayout from "../src/layout/App.layout";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Crowdcoin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Web3ReactProvider getLibrary={getLibrary}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
            fontFamily: "'Archivo', sans-serif",
          }}
        >
          <AppLayout
            Component={Component}
            router={router}
            pageProps={pageProps}
          />
        </MantineProvider>
      </Web3ReactProvider>
    </>
  );
}
