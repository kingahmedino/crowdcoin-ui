import { AppShell, Navbar } from "@mantine/core";
import { Nav } from "../components/Nav";

export default function AppLayout({ Component, pageProps, router }) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed={false}
      padding="md"
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
        },
      }}
    >
      <Component {...pageProps} />
    </AppShell>
  );
}
