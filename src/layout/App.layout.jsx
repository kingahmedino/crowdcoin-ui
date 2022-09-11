import { AppShell, Navbar,Header  } from "@mantine/core";
import { Nav } from "../components/Nav";
import ConnectWallet from "../components/ConnectWallet/ConnectWallet";
export default function AppLayout({ Component, pageProps, router }) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed={false}
      header={<Header height={60} p="xs"><ConnectWallet/></Header>}
      navbar={
        <Navbar width={{ base: "248px" }} height={"100vh"} p="xs">
          <Nav />
        </Navbar>
      }
      styles={{
        main: {
          padding: 0,
          overflowY: "scroll",
          paddingTop: 56,
          paddingLeft: 32,
          paddingRight: 32,
          backgroundColor: "rgba(242, 242, 242, 1)",
          height: "100vh",
        },
      }}
    >
      <Component {...pageProps} />
    </AppShell>
  );
}
